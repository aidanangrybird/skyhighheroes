function moduleName() {
  return "contacts";
};
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
      systemMessage(player, "<s>Successfully added <sh>" + username + "<s> as a contact!");
    } else {
      var contacts = player.getWornChestplate().nbt().getStringList("contacts");
      var index = getStringArray(contacts).indexOf(username);
      if (index > -1) {
        systemMessage(player, "<eh>" + username + "<e> is already a contact!");
      } else {
        systemMessage(player, "<s>Successfully added <sh>" + username + "<s> as a contact!");
        manager.appendString(contacts, username);
      };
    };
  } else {
    systemMessage(player, "<e>You can not add yourself as a contact!");
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
    systemMessage(player, "<e>You have no contacts to remove!");
  } else {
    var contacts = player.getWornChestplate().nbt().getStringList("contacts");
    if (contacts.tagCount() == 0) {
      systemMessage(player, "<e>You have no contacts to remove!");
    } else {
      var index = getStringArray(contacts).indexOf(username);
      if (index < 0) {
        systemMessage(player, "<e>Unable to find contact with username <eh>" + username + "<e> to remove!");
      } else {
        systemMessage(player, "<s>Removed contact with username <sh>" + username + "<s>!");
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
  var contacts = getStringArray(entity.getWornChestplate().nbt().getStringList("contacts"));
  systemMessage(entity,"<n>You have <nh>" + contacts.length + ((contacts.length > 1)?"<n> contacts:": "<n> contact:"));
  contacts.forEach(entry => {
    systemMessage(entity, "<nh>" + entry);
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
  var contactsList = getStringArray(contacts);
  var result = false;
  contactsList.forEach(entry => {
    if (entry == sender.getName()) {
      result = true;
    };
  });
  return result;
};

function messageHandler(entity, transformed, untransformed, color) {
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
    if (isWearingTranser(foundPlayer)) {
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
};

function commandHandler(entity, manager, entry) {
  var chatMode = entity.getData("skyhighheroes:dyn/command_mode");
  var args = entry.split(" ");
  if (chatMode == 0) {
    if (args.length > 0 && args.length < 3) {
      switch(args[0]) {
        case "add":
          (args.length == 2) ? addContact(entity, manager, args[1]) : systemMessage(entity, "<n>add <name>");
          break;
        case "rem":
          (args.length == 2) ? removeContact(entity, manager, args[1]) : systemMessage(entity, "<n>rem <name>");
          break;
        case "list":
          listContacts(entity);
          break;
        case "help":
          systemMessage(entity, "<n>Contact commands:");
          systemMessage(entity, "<n>add <nh><name><n> <nh>-<n> Adds contact by name");
          systemMessage(entity, "<n>rem <nh><name><n> <nh>-<n> Removes contact by name");
          systemMessage(entity, "<n>list <nh>-<n> Lists contacts");
          systemMessage(entity, "<n>help <nh>-<n> Shows contact commands");
          break;
        default:
          systemMessage(entity, "<e>Unknown <eh>contact<e> command! Try <eh>help<e> for a list of commands!");
          break;
      };
    } else {
      systemMessage(entity, "<e>Too many arguemnts!");
    };
  };
};

function commandModeInfo(player) {
  systemMessage(player, "<n>Do <nh>help<n> to show available <nh>contact<n> commands");
};

function chatModeInfo(player, manager) {
  if (player.getWornChestplate().nbt().hasKey("contacts")) {
    if (player.getWornChestplate().nbt().getStringList("contacts").tagCount() > 0) {
      var contactsList = getStringArray(player.getWornChestplate().nbt().getStringList("contacts"));
      if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
        manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
      };
      var contact = contactsList[player.getData("skyhighheroes:dyn/active_chat")];
      systemMessage(player, "<n>You are now messaging <nh>" + contact + "<n>!");
    } else {
      systemMessage(player, "<e>You do not have any contacts!");
    };
  } else {
    systemMessage(player, "<e>You do not have any contacts!");
  };
};