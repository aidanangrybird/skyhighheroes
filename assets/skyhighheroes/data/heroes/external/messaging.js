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
    var nbt = system.getMainNBT(entity);
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
    chatModeMessage: "<n>You are now in <nh>normal<n> mode!",
    messageHandler: function (entity, name, range) {
      var nbt = system.getMainNBT(entity);
      var message = entity.getData("skyhighheroes:dyn/entry");
      var foundPlayer = null;
      if (nbt.getStringList("contacts").tagCount() > 0) {
        var contactsList = system.getStringArray(nbt.getStringList("contacts"));
        var chat = entity.getData("skyhighheroes:dyn/normal_selected");
        var chatIndex = contactsList.indexOf(chat);
        if (chatIndex > -1) {
          var entities = entity.world().getEntitiesInRangeOf(entity.pos(), range);
          entities.forEach(otherEntity => {
            if (otherEntity.is("PLAYER") && otherEntity.getName() == chat) {
              foundPlayer = otherEntity;
            };
          });
        } else {
          system.moduleMessage(this, entity, "<e>You do not have <eh>" + chat + "<e> as a contact!");
          return;
        };
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
    },
    chatInfo: function (entity, manager, chat) {
      var nbt = system.getMainNBT(entity);
      if (nbt.hasKey("contacts")) {
        if (nbt.getStringList("contacts").tagCount() > 0) {
          var contactsList = system.getStringArray(nbt.getStringList("contacts"));
          var chatIndex = contactsList.indexOf(chat);
          if (chatIndex > -1) {
            manager.setData(entity, "skyhighheroes:dyn/normal_selected", chat);
            manager.setString(nbt, "normalSelected", chat);
            system.moduleMessage(this, entity, "<n>You are now messaging <nh>" + chat + "<n>!");
          } else {
            system.moduleMessage(this, entity, "<e>You do not have <eh>" + chat + "<e> as a contact!");
            return;
          };
        } else {
          system.moduleMessage(this, entity, "<e>You do not have any contacts!");
        };
      } else {
        system.moduleMessage(this, entity, "<e>You do not have any contacts!");
      };
    },
    chatModeInfo: function (entity) {
      var nbt = system.getMainNBT(entity);
      if (nbt.hasKey("contacts")) {
        if (nbt.getStringList("contacts").tagCount() > 0) {
          var contactsList = system.getStringArray(nbt.getStringList("contacts"));
          var chat = entity.getData("skyhighheroes:dyn/normal_selected");
          var chatIndex = contactsList.indexOf(chat);
          if (chatIndex > -1) {
            system.moduleMessage(this, entity, "<n>You are now messaging <nh>" + chat + "<n>!");
          } else {
            system.moduleMessage(this, entity, "<e>You do not have <eh>" + chat + "<e> as a contact!");
            return;
          };
        } else {
          system.moduleMessage(this, entity, "<e>You do not have any contacts!");
        };
      } else {
        system.moduleMessage(this, entity, "<e>You do not have any contacts!");
      };
    },
    onInitSystem: function (entity, manager) {
      var nbt = system.mainNBT(entity);
      if (!nbt.hasKey("normalSelected")) {
        manager.setString(nbt, "normalSelected", "");
      };
      manager.setData(entity, "skyhighheroes:dyn/normal_selected", nbt.getString("normalSelected"));
    }
  };
};
