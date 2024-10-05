function init(system) {
  return {
    moduleName: function () {
      return "contacts";
    },
    /**
     * Adds contact
     * @param {JSEntity} player - Required
     * @param {JSDataManager} manager - Required
     * @param {string} username - Username to add as contact
     **/
    addContact: function (player, manager, username) {
      if (player.getName() != username) {
        if (!player.getWornChestplate().nbt().hasKey("contacts")) {
          var contacts = manager.newTagList();
          manager.appendString(contacts, username);
          manager.setTagList(player.getWornChestplate().nbt(), "contacts", contacts);
          system.systemMessage(player, "<s>Successfully added <sh>" + username + "<s> as a contact!");
        } else {
          var contacts = player.getWornChestplate().nbt().getStringList("contacts");
          var index = system.getStringArray(contacts).indexOf(username);
          if (index > -1) {
            system.systemMessage(player, "<eh>" + username + "<e> is already a contact!");
          } else {
            system.systemMessage(player, "<s>Successfully added <sh>" + username + "<s> as a contact!");
            manager.appendString(contacts, username);
          };
        };
      } else {
        system.systemMessage(player, "<e>You can not add yourself as a contact!");
      };
    },
    /**
     * Remove contact by username
     * @param {JSPlayer} player - Required
     * @param {JSDataManager} manager - Required
     * @param {string} username - username of contact
     **/
    removeContact: function (player, manager, username) {
      if (!player.getWornChestplate().nbt().hasKey("contacts")) {
        system.systemMessage(player, "<e>You have no contacts to remove!");
      } else {
        var contacts = player.getWornChestplate().nbt().getStringList("contacts");
        if (contacts.tagCount() == 0) {
          system.systemMessage(player, "<e>You have no contacts to remove!");
        } else {
          var index = system.getStringArray(contacts).indexOf(username);
          if (index < 0) {
            system.systemMessage(player, "<e>Unable to find contact with username <eh>" + username + "<e> to remove!");
          } else {
            system.systemMessage(player, "<s>Removed contact with username <sh>" + username + "<s>!");
            manager.removeTag(contacts, index);
          };
        };
      };
    },
    /**
     * Lists player's contacts
     * @param {JSEntity} entity - Required
     **/
    listContacts: function (entity) {
      var contacts = system.getStringArray(entity.getWornChestplate().nbt().getStringList("contacts"));
      system.systemMessage(entity,"<n>You have <nh>" + contacts.length + ((contacts.length > 1)?"<n> contacts:": "<n> contact:"));
      contacts.forEach(entry => {
        system.systemMessage(entity, "<nh>" + entry);
      });
    },
    /**
     * Checks if a player has another player as a contact
     * @param {JSEntity} sender - Player getting checked
     * @param {JSEntity} receiver - Player whose contact list is being checked
     * @returns If sender is in receiver's contacts
     **/
    hasContact: function (sender, receiver) {
      var contacts = receiver.getWornChestplate().nbt().getStringList("contacts");
      var contactsList = system.getStringArray(contacts);
      var result = false;
      contactsList.forEach(entry => {
        if (entry == sender.getName()) {
          result = true;
        };
      });
      return result;
    },
    messageHandler: function (entity, transformed, untransformed, color) {
      var message = entity.getData("skyhighheroes:dyn/entry");
      var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
      var reciever = entity.getWornChestplate().nbt().getStringList("contacts").getString(activeChat);
      var foundPlayer = null;
      var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 30);
      entities.forEach(player => {
        if (player.is("PLAYER") && player.getName() == reciever) {
          foundPlayer = player;
        };
      });
      if (foundPlayer != null) {
        if (system.isWearingTranser(foundPlayer)) {
          if (hasContact(entity, foundPlayer)) {
            if (typeof transformed === "string" && typeof color === "string" && typeof untransformed === "string") {
              if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && foundPlayer.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                playerMessage(foundPlayer, color+transformed+"\u00A7r", message);
                playerMessage(entity, color+transformed+"\u00A7r", message);
              } else {
                playerMessage(foundPlayer, untransformed, message);
                playerMessage(entity, untransformed, message);
              };
            } else {
              playerMessage(foundPlayer, entity.getName(), message);
              playerMessage(entity, entity.getName(), message);
            };
          };
        };
      };
    },
    commandHandler: function (entity, manager) {
      var chatMode = entity.getData("skyhighheroes:dyn/chat_mode");
      var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
      if (chatMode == 0) {
        if (args.length > 0 && args.length < 3) {
          switch(args[0]) {
            case "add":
              (args.length == 2) ? addContact(entity, manager, args[1]) : system.systemMessage(entity, "<n>add <name>");
              break;
            case "rem":
              (args.length == 2) ? removeContact(entity, manager, args[1]) : system.systemMessage(entity, "<n>rem <name>");
              break;
            case "list":
              listContacts(entity);
              break;
            case "help":
              system.systemMessage(entity, "<n>Contact commands:");
              system.systemMessage(entity, "<n>add <nh><name><n> <nh>-<n> Adds contact by name");
              system.systemMessage(entity, "<n>rem <nh><name><n> <nh>-<n> Removes contact by name");
              system.systemMessage(entity, "<n>list <nh>-<n> Lists contacts");
              system.systemMessage(entity, "<n>help <nh>-<n> Shows contact commands");
              break;
            default:
              system.systemMessage(entity, "<e>Unknown <eh>contact<e> command! Try <eh>help<e> for a list of commands!");
              break;
          };
        } else {
          system.systemMessage(entity, "<e>Too many arguemnts!");
        };
      };
    },
    commandModeInfo: function (player) {
      system.systemMessage(player, "<n>Do <nh>help<n> to show available <nh>contact<n> commands");
    },
    chatModeInfo: function (player, manager) {
      if (player.getWornChestplate().nbt().hasKey("contacts")) {
        if (player.getWornChestplate().nbt().getStringList("contacts").tagCount() > 0) {
          var contactsList = system.getStringArray(player.getWornChestplate().nbt().getStringList("contacts"));
          if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
            manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
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