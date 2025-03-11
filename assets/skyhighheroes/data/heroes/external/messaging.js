/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  /**
   * Checks if a player has another player as a contact
   * @param {JSEntity} sender - Player getting checked
   * @param {JSEntity} receiver - Player whose contact list is being checked
   * @returns If sender is in receiver's contacts
   **/
  function hasContact(sender, receiver) {
    var contacts = receiver.getEquipmentInSlot(receiver.getData("skyhighheroes:dyn/primary_piece")).nbt().getStringList("contacts");
    var contactsList = system.getStringArray(contacts);
    var result = false;
    contactsList.forEach(entry => {
      if (entry == sender.getName()) {
        result = true;
      };
    });
    return result;
  };
  /**
   * Sends message in normal format
   * @param {JSPlayer} player - Entity recieving message
   * @param {string} sender - Entity sending message
   * @param {string} message - Messsage content
   **/
  function playerMessage(player, sender, message) {
    if (PackLoader.getSide() == "SERVER") {
      player.as("PLAYER").addChatMessage(sender + "> " + message);
    };
  };
  return {
    name: "messaging",
    modeID: "normal",
    type: 2,
    chatModeInfo: "<n>You are now in <nh>normal<n> mode!",
    messageHandler: function (entity) {
      var message = entity.getData("skyhighheroes:dyn/entry");
      var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
      var foundPlayer = null;
      if (entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt().getStringList("contacts").tagCount() > 0) {
        var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 30);
        var reciever = entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt().getStringList("contacts").getString(activeChat);
        entities.forEach(player => {
          if (player.is("PLAYER") && player.getName() == reciever) {
            foundPlayer = player;
          };
        });
      } else {
        system.systemMessage(entity, "<e>You do not have any contacts to message!")
      };
      if (foundPlayer != null) {
        if (system.hasComputer(foundPlayer)) {
          if (hasContact(entity, foundPlayer)) {
            if ((typeof system.waveChangeIndex === "undefined") ? false : system.waveChangeIndex > -1) {
              if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                playerMessage(foundPlayer, system.waveColor+system.waveChange+"\u00A7r", message);
                playerMessage(entity, system.waveColor+system.waveChange+"\u00A7r", message);
              } else {
                playerMessage(foundPlayer, system.human, message);
                playerMessage(entity, system.human, message);
              };
            } else {
              playerMessage(foundPlayer, (typeof entity.getData("fiskheroes:disguise") === "string") ? entity.getData("fiskheroes:disguise") : entity.getName(), message);
              playerMessage(entity, (typeof entity.getData("fiskheroes:disguise") === "string") ? entity.getData("fiskheroes:disguise") : entity.getName(), message);
            };
          };
        };
      };
    },
    chatInfo: function (player, manager, chat) {
      if (player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().hasKey("contacts")) {
        if (player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().getStringList("contacts").tagCount() > 0) {
          var contactsList = system.getStringArray(player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().getStringList("contacts"));
          if (typeof chat === "string") {
            var chatIndex = contactsList.indexOf(chat);
            if (chatIndex > -1) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", chatIndex);
            } else {
              system.systemMessage(player, "<e>You do not have <eh>" + chat + "<e> as a contact!");
              return;
            };
          } else {
            if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
            };
          };
          var contact = contactsList[player.getData("skyhighheroes:dyn/active_chat")];
          system.systemMessage(player, "<n>You are now messaging <nh>" + contact + "<n>!");
        } else {
          system.systemMessage(player, "<e>You do not have any contacts!");
        };
      } else {
        system.systemMessage(player, "<e>You do not have any contacts!");
      };
    }
  };
};
