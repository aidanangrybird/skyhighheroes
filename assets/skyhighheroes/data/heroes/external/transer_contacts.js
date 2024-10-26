/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
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
    transer.systemMessage(entity,"<n>You have <nh>" + contacts.length + ((contacts.length == 1)?"<n> contacts:": "<n> contact:"));
    contacts.forEach(entry => {
      transer.systemMessage(entity, "<nh>" + entry);
    });
  };
  return {
    name: "contacts",
    type: 1,
    command: "c",
    helpMessage: "<n>!c <nh>-<n> Contacts",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4 && !transer.isModuleDisabled(entity, this.name)) {
        switch(arguments[1]) {
          case "add":
            (arguments.length == 3) ? addContact(entity, manager, arguments[2]) : transer.systemMessage(entity, "<n>!c add <nh><name>");
            return true;
          case "rem":
            (arguments.length == 3) ? removeContact(entity, manager, arguments[2]) : transer.systemMessage(entity, "<n>!c rem <nh><name>");
            return true;
          case "list":
            listContacts(entity);
            return true;
          case "help":
            transer.systemMessage(entity, "<n>Contact commands:");
            transer.systemMessage(entity, "<n>!c add <nh><name><n> <nh>-<n> Adds contact by name");
            transer.systemMessage(entity, "<n>!c rem <nh><name><n> <nh>-<n> Removes contact by name");
            transer.systemMessage(entity, "<n>!c list <nh>-<n> Lists contacts");
            transer.systemMessage(entity, "<n>!c help <nh>-<n> Shows contact commands");
            return true;
          default:
            transer.systemMessage(entity, "<e>Unknown <eh>contact<e> command! Try <eh>!c help<e> for a list of commands!");
            return true;
        };
      } else {
        if (!transer.isModuleDisabled(entity, this.name())) {
          transer.systemMessage(entity, "<e>Unknown <eh>contact<e> command! Try <eh>!c help<e> for a list of commands!");
        } else {
          transer.systemMessage(entity, "<e>Module <eh>" + this.name() + "<e> is disabled!");
        };
        return true;
      };
    },
  };
};