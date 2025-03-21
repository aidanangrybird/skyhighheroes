/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  /**
   * Adds contact
   * @param {JSEntity} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} username - Username to add as contact
   **/
  function addContact(player, manager, username) {
    var nbt = null;
    if (player.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (player.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = player.getWornChestplate().nbt();
    };
    if (player.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (player.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    if (player.getName() == username) {
      system.systemMessage(player, "<e>You can not add yourself as a contact!");
      return;
    };
    if (username.length > 16) {
      system.systemMessage(player, "<e>Username is too long!");
      return;
    };
    if (nbt.hasKey("contacts")) {
      var contacts = manager.newTagList();
      manager.appendString(contacts, username);
      manager.setTagList(nbt, "contacts", contacts);
      system.systemMessage(player, "<s>Successfully added <sh>" + username + "<s> as a contact!");
    } else {
      var contacts = nbt.getStringList("contacts");
      var index = system.getStringArray(contacts).indexOf(username);
      if (index > -1) {
        system.systemMessage(player, "<eh>" + username + "<e> is already a contact!");
      } else {
        system.systemMessage(player, "<s>Successfully added <sh>" + username + "<s> as a contact!");
        manager.appendString(contacts, username);
      };
    };
  };
  /**
   * Remove contact by username
   * @param {JSPlayer} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} username - username of contact
   **/
  function removeContact(player, manager, username) {
    var nbt = null;
    if (player.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (player.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = player.getWornChestplate().nbt();
    };
    if (player.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (player.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    if (!nbt.hasKey("contacts")) {
      var newContactsList = manager.newTagList();
      manager.setTagList(nbt, "contacts", newContactsList);
    };
    var contacts = nbt.getStringList("contacts");
    if (contacts.tagCount() == 0) {
      system.systemMessage(player, "<e>You have no contacts to remove!");
      return;
    };
    var index = system.getStringArray(contacts).indexOf(username);
    if (index < 0) {
      system.systemMessage(player, "<e>Unable to find contact with username <eh>" + username + "<e> to remove!");
    } else {
      system.systemMessage(player, "<s>Removed contact with username <sh>" + username + "<s>!");
      manager.removeTag(contacts, index);
    };
  };
  /**
   * Lists player's contacts
   * @param {JSEntity} entity - Required
   **/
  function listContacts(entity, manager) {
    var nbt = null;
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
    if (!nbt.hasKey("contacts")) {
      var newContactsList = manager.newTagList();
      manager.setTagList(nbt, "contacts", newContactsList);
    };
    var contacts = system.getStringArray(nbt.getStringList("contacts"));
    system.systemMessage(entity,"<n>You have <nh>" + contacts.length + ((contacts.length == 1)?"<n> contact:": "<n> contacts:"));
    contacts.forEach(entry => {
      system.systemMessage(entity, "<nh>" + entry);
    });
  };
  return {
    name: "contacts",
    type: 1,
    command: "c",
    helpMessage: "<n>!c <nh>-<n> Contacts",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch(arguments[1]) {
          case "add":
            (arguments.length == 3) ? addContact(entity, manager, arguments[2]) : system.systemMessage(entity, "<n>!c add <nh><name>");
            break;
          case "rem":
            (arguments.length == 3) ? removeContact(entity, manager, arguments[2]) : system.systemMessage(entity, "<n>!c rem <nh><name>");
            break;
          case "list":
            listContacts(entity);
            break;
          case "help":
            system.systemMessage(entity, "<n>Contact commands:");
            system.systemMessage(entity, "<n>!c add <nh><name><n> <nh>-<n> Adds contact by name");
            system.systemMessage(entity, "<n>!c rem <nh><name><n> <nh>-<n> Removes contact by name");
            system.systemMessage(entity, "<n>!c list <nh>-<n> Lists contacts");
            system.systemMessage(entity, "<n>!c help <nh>-<n> Shows this list");
            break;
          default:
            system.systemMessage(entity, "<e>Unknown <eh>contact<e> command! Try <eh>!c help<e> for a list of commands!");
            break;
        };
      } else {
        system.systemMessage(entity, "<e>Unknown <eh>contact<e> command! Try <eh>!c help<e> for a list of commands!");
      };
    },
  };
};