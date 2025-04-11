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
    var nbt = null;
    if (receiver.isWearingFullSuit()) {
      if (receiver.getWornHelmet().nbt().hasKey("computerID")) {
        nbt = receiver.getWornHelmet().nbt();
      };
      if (receiver.getWornChestplate().nbt().hasKey("computerID")) {
        nbt = receiver.getWornChestplate().nbt();
      };
      if (receiver.getWornLeggings().nbt().hasKey("computerID")) {
        nbt = receiver.getWornLeggings().nbt();
      };
      if (receiver.getWornBoots().nbt().hasKey("computerID")) {
        nbt = receiver.getWornBoots().nbt();
      };
    };
    var contacts = nbt.getStringList("contacts");
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
    moduleMessageName: "Messaging",
    modeID: "normal",
    type: 2,
    chatModeInfo: "<n>You are now in <nh>normal<n> mode!",
    messageHandler: function (entity, name, range) {
      var nbt = null;
      if (entity.isWearingFullSuit()) {
        if (entity.getWornHelmet().nbt().hasKey("computerID")) {
          nbt = entity.getWornHelmet().nbt();
        };
        if (entity.getWornChestplate().nbt().hasKey("computerID")) {
          nbt = entity.getWornChestplate().nbt();
        };
        if (entity.getWornLeggings().nbt().hasKey("computerID")) {
          nbt = entity.getWornLeggings().nbt();
        };
        if (entity.getWornBoots().nbt().hasKey("computerID")) {
          nbt = entity.getWornBoots().nbt();
        };
      };
      var message = entity.getData("skyhighheroes:dyn/entry");
      var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
      var foundPlayer = null;
      if (nbt != null) {
        if (nbt.getStringList("contacts").tagCount() > 0) {
          var entities = entity.world().getEntitiesInRangeOf(entity.pos(), range);
          var sender = nbt.getStringList("contacts").getString(activeChat);
          entities.forEach(player => {
            if (player.is("PLAYER") && player.getName() == sender) {
              foundPlayer = player;
            };
          });
        } else {
          system.moduleMessage(this, entity, "<e>You do not have any contacts to message!")
        };
        if (foundPlayer != null) {
          if (system.hasComputer(foundPlayer)) {
            if (hasContact(entity, foundPlayer)) {
              playerMessage(foundPlayer, name, message);
              playerMessage(entity, name, message);
            };
          };
        };
      };
    },
    chatInfo: function (entity, manager, chat) {
      var nbt = null;
      if (entity.isWearingFullSuit()) {
        if (entity.getWornHelmet().nbt().hasKey("computerID")) {
          nbt = entity.getWornHelmet().nbt();
        };
        if (entity.getWornChestplate().nbt().hasKey("computerID")) {
          nbt = entity.getWornChestplate().nbt();
        };
        if (entity.getWornLeggings().nbt().hasKey("computerID")) {
          nbt = entity.getWornLeggings().nbt();
        };
        if (entity.getWornBoots().nbt().hasKey("computerID")) {
          nbt = entity.getWornBoots().nbt();
        };
      };
      if (nbt != null) {
        if (nbt.hasKey("contacts")) {
          if (nbt.getStringList("contacts").tagCount() > 0) {
            var contactsList = system.getStringArray(nbt.getStringList("contacts"));
            if (typeof chat === "string") {
              var chatIndex = contactsList.indexOf(chat);
              if (chatIndex > -1) {
                manager.setData(entity, "skyhighheroes:dyn/active_chat", chatIndex);
              } else {
                system.moduleMessage(this, entity, "<e>You do not have <eh>" + chat + "<e> as a contact!");
                return;
              };
            } else {
              if (entity.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
                manager.setData(entity, "skyhighheroes:dyn/active_chat", 0);
              };
            };
            var contact = contactsList[entity.getData("skyhighheroes:dyn/active_chat")];
            system.moduleMessage(this, entity, "<n>You are now messaging <nh>" + contact + "<n>!");
          } else {
            system.moduleMessage(this, entity, "<e>You do not have any contacts!");
          };
        } else {
          system.moduleMessage(this, entity, "<e>You do not have any contacts!");
        };
      };
    }
  };
};
