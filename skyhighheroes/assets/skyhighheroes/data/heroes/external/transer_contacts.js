function moduleName() {
  return "messageContact";
};
function init(transer) {
  /**
   * Adds contact
   * @param {JSEntity} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} username - Username to add as contact
   **/
  function addContact(player, manager, username) {
    if (player.getName() != username) {
      if (!player.getWornChestplate().nbt().hasKey("contacts")) {
        var contacts = manager.newTagList();
        manager.appendString(contacts, username);
        manager.setTagList(player.getWornChestplate().nbt(), "contacts", contacts);
        transer.systemMessage(player, "<s>Successfully added <sh>" + username + "<s> as a contact!");
      } else {
        var contacts = player.getWornChestplate().nbt().getStringList("contacts");
        var index = transer.getStringArray(contacts).indexOf(username);
        if (index > -1) {
          transer.systemMessage(player, "<eh>" + username + "<e> is already a contact!");
        } else {
          transer.systemMessage(player, "<s>Successfully added <sh>" + username + "<s> as a contact!");
          manager.appendString(contacts, username);
        };
      };
    } else {
      transer.systemMessage(player, "<e>You can not add yourself as a contact!");
    };
  };
  /**
   * Remove contact by username
   * @param {JSPlayer} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} username - username of contact
   **/
  function removeContact(player, manager, username) {
    if (!player.getWornChestplate().nbt().hasKey("contacts")) {
      transer.systemMessage(player, "<e>You have no contacts to remove!");
    } else {
      var contacts = player.getWornChestplate().nbt().getStringList("contacts");
      if (contacts.tagCount() == 0) {
        transer.systemMessage(player, "<e>You have no contacts to remove!");
      } else {
        var index = transer.getStringArray(contacts).indexOf(username);
        if (index < 0) {
          transer.systemMessage(player, "<e>Unable to find contact with username <eh>" + username + "<e> to remove!");
        } else {
          transer.systemMessage(player, "<s>Removed contact with username <sh>" + username + "<s>!");
          manager.removeTag(contacts, index);
        };
      };
    };
  };
  /**
   * Lists player's contacts
   * @param {JSEntity} entity - Required
   **/
  function listContacts(entity) {
    var contacts = transer.getStringArray(entity.getWornChestplate().nbt().getStringList("contacts"));
    transer.systemMessage(entity,"<n>You have <nh>" + contacts.length + ((contacts.length > 1)?"<n> contacts:": "<n> contact:"));
    contacts.forEach(entry => {
      transer.systemMessage(entity, "<nh>" + entry);
    });
  };
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
  return {
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
        if (transer.isWearingTranser(foundPlayer)) {
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
              (args.length == 2) ? addContact(entity, manager, args[1]) : transer.systemMessage(entity, "<n>add <name>");
              break;
            case "rem":
              (args.length == 2) ? removeContact(entity, manager, args[1]) : transer.systemMessage(entity, "<n>rem <name>");
              break;
            case "list":
              listContacts(entity);
              break;
            case "help":
              transer.systemMessage(entity, "<n>Contact commands:");
              transer.systemMessage(entity, "<n>add <nh><name><n> <nh>-<n> Adds contact by name");
              transer.systemMessage(entity, "<n>rem <nh><name><n> <nh>-<n> Removes contact by name");
              transer.systemMessage(entity, "<n>list <nh>-<n> Lists contacts");
              transer.systemMessage(entity, "<n>help <nh>-<n> Shows contact commands");
              break;
            default:
              transer.systemMessage(entity, "<e>Unknown <eh>contact<e> command! Try <eh>help<e> for a list of commands!");
              break;
          };
        } else {
          transer.systemMessage(entity, "<e>Too many arguemnts!");
        };
      };
    },
    chatModeInfo: function (player) {
      transer.systemMessage(player, "<n>Do <nh>help<n> to show available <nh>contact<n> commands");
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