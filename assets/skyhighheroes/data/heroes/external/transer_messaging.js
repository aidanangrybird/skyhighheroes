/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  /**
   * Checks if a player has another player as a contact
   * @param {JSEntity} sender - Player getting checked
   * @param {JSEntity} receiver - Player whose contact list is being checked
   * @returns If sender is in receiver's contacts
   **/
  function hasContact(sender, receiver) {
    var contacts = receiver.getWornChestplate().nbt().getStringList("contacts");
    var contactsList = transer.getStringArray(contacts);
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
      player.as("PLAYER").addChatMessage("[BrotherBand]> " + sender + "> " + message);
    };
  };
  return {
    name: "messaging",
    type: 2,
    chatModeInfo: "<n>You are now in <nh>normal<n> mode!",
    messageHandler: function (entity) {
      var message = entity.getData("skyhighheroes:dyn/entry");
      var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
      var foundPlayer = null;
      if (entity.getWornChestplate().nbt().getStringList("contacts").tagCount() > 0) {
        var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 30);
        var reciever = entity.getWornChestplate().nbt().getStringList("contacts").getString(activeChat);
        entities.forEach(player => {
          if (player.is("PLAYER") && player.getName() == reciever) {
            foundPlayer = player;
          };
        });
      } else {
        transer.systemMessage(entity, "<e>You do not have any contacts to message!")
      };
      if (foundPlayer != null) {
        if (transer.isWearingTranser(foundPlayer)) {
          if (hasContact(entity, foundPlayer)) {
            if (transer.waveChangeIndex > -1) {
              if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && foundPlayer.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                playerMessage(foundPlayer, transer.waveColor+transer.waveChange+"\u00A7r", message);
                playerMessage(entity, transer.waveColor+transer.waveChange+"\u00A7r", message);
              } else {
                playerMessage(foundPlayer, transer.human, message);
                playerMessage(entity, transer.human, message);
              };
            } else {
              playerMessage(foundPlayer, entity.getName(), message);
              playerMessage(entity, entity.getName(), message);
            };
          };
        };
      };
    },
    chatInfo: function (player, manager) {
      if (player.getWornChestplate().nbt().hasKey("contacts")) {
        if (player.getWornChestplate().nbt().getStringList("contacts").tagCount() > 0) {
          var contactsList = transer.getStringArray(player.getWornChestplate().nbt().getStringList("contacts"));
          if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
            manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
          };
          var contact = contactsList[player.getData("skyhighheroes:dyn/active_chat")];
          transer.systemMessage(player, "<n>You are now messaging <nh>" + contact + "<n>!");
        } else {
          transer.systemMessage(player, "<e>You do not have any contacts!");
        };
      } else {
        transer.systemMessage(player, "<e>You do not have any contacts!");
      };
    }
  };
};
