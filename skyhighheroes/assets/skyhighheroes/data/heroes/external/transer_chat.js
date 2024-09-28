//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

var suits = [
  {"suit": "skyhighheros:aegon_stelar", "id": "411ed8b9-b246-449c-b941-02790d0971dd"},
  {"suit": "skyhighheros:aidan_stelar", "id": "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"},
  {"suit": "skyhighheros:cash_stelar", "id": "2389f9cd-351e-4d96-a277-847a24fd9048"},
  {"suit": "skyhighheros:chase_stelar", "id": "4da600b8-582a-4fc3-ac2e-ada03d3e478c"},
  {"suit": "skyhighheros:ace_stelar", "id": "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0"},
  {"suit": "skyhighheros:grand_stelar", "id": "d699ffcd-8177-4325-91ac-3e815e87bb95"},
  {"suit": "skyhighheros:lucas_stelar", "id": "c4bc5db6-3cf6-44fe-8427-304a7b211bc4"},
  {"suit": "skyhighheroes:geo_stelar"},
  {"suit": "skyhighheroes:geo_stelar/subaru"},
  {"suit": "skyhighheroes:pegasus_transer"},
  {"suit": "skyhighheroes:leo_transer"},
  {"suit": "skyhighheroes:dragon_transer"}
];
/**
 * Checks if an entity is wearing a transer
 * @param {JSEntity} entity - Entity getting checked
 * @param {JSPlayer} player - Entity getting checked
 * @returns If the entity is wearing a transer
 **/
function isWearingTranser(entity, player) {
  var wearingTranser = false
  suits.forEach(entry => {
    if (entity.getWornChestplate().nbt().getString("HeroType") == entry.suit && (typeof entry.id !== "undefined") ? entity.getUUID() == entry.id : true) {
      //wearingTranser = (entity.getUUID() == player.getUUID());
      wearingTranser = true;
    };
  });
  return wearingTranser; /*
  switch (entity.getWornChestplate().nbt().getString("HeroType")) {
    case "skyhighheros:aegon_stelar":
      return (entity.getUUID() == "411ed8b9-b246-449c-b941-02790d0971dd") ? true : false;
    case "skyhighheros:aidan_stelar":
      return (entity.getUUID() == "a3d071d4-c912-41e1-a6b2-c0de99ea4a84") ? true : false;
    case "skyhighheros:cash_stelar":
      return (entity.getUUID() == "2389f9cd-351e-4d96-a277-847a24fd9048") ? true : false;
    case "skyhighheros:chase_stelar":
      return (entity.getUUID() == "4da600b8-582a-4fc3-ac2e-ada03d3e478c") ? true : false;
    case "skyhighheros:ace_stelar":
      return (entity.getUUID() == "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0") ? true : false;
    case "skyhighheros:grand_stelar":
      return (entity.getUUID() == "d699ffcd-8177-4325-91ac-3e815e87bb95") ? true : false;
    case "skyhighheros:lucas_stelar":
      return (entity.getUUID() == "c4bc5db6-3cf6-44fe-8427-304a7b211bc4") ? true : false;
    case "skyhighheros:geo_stelar":
      return true;
    case "skyhighheros:geo_stelar/subaru":
      return true;
    default:
      return false;
  };*/
};

/**
 * Turns NBT String List into an array for easier use in code
 * @param {JSNBTList} nbtList - NBTList
 * @returns Array of values from the NBTList
 **/
function getStringArray(nbtList) {
  var count = nbtList.tagCount();
  var result = [];
  for (i=0;i<count;i++) {
    result.push(nbtList.getString(i));
  };
  return result;
};

/**
 * Turns NBT String List into an array for easier use in code
 * @param {JSEntity} entity - Entity to create group array from
 * @returns Array of group names
 **/
function getGroupArray(entity) {
  var groupList = entity.getWornChestplate().nbt().getTagList("groups");
  var count = groupList.tagCount();
  var result = [];
  for (i=0;i<count;i++) {
    result.push(groupList.getCompoundTag(i).getString("groupName"));
  };
  return result;
};

/**
 * Turns NBT String List into an array for easier use in code
 * @param {JSEntity} entity - Entity to create group array from
 * @returns Array of group names and member counts
 **/
function getGroupArrayMembers(entity) {
  var groupList = entity.getWornChestplate().nbt().getTagList("groups");
  var count = groupList.tagCount();
  var result = [];
  for (i=0;i<count;i++) {
    var group = groupList.getCompoundTag(i);
    var entry = {
      "groupName": group.getString("groupName"),
      "memberCount": group.getStringList("members").tagCount(),
    }
    result.push(entry);
  };
  return result;
};

/**
 * Prints message to player's chat
 * @param {JSPlayer} player - Required
 * @param {string} message - Message to be shown to player
 **/
function chatMessage(player, message) {
  if (PackLoader.getSide() == "SERVER") {
    player.as("PLAYER").addChatMessage(message);
  };
};

/**
 * Sends system message
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} message - Message content
 **/
function systemMessage(player, message) {
  chatMessage(player, "<System> " + message);
};

/**
 * Sends message in group format
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} groupName - Name of group
 * @param {string} sender - Name of entity sending message
 * @param {string} message - Message content
 **/
function groupMessage(player, groupName, sender, message) {
  chatMessage(player, "<" + sender + " (" + groupName + ")> " + message);
};

/**
 * Sends message in normal format
 * @param {JSPlayer} player - Entity recieving message
 * @param {JSDataManager} sender - Entity sending message
 * @param {string} message - Messsage content
 **/
function playerMessage(player, sender, message) {
  chatMessage(player, "<" + sender + "> " + message);
};

//The point of BrotherBand is to allow communication at much farther ranges and to give buffs when you are near each other
/**
 * Forms BrotherBand
 * @param {JSPlayer} player - Player forming BrotherBand
 * @param {JSDataManager} manager - Required
 * @param {string} username - Username of player to form BrotherBand with
 **/
function formBrotherBand(player, manager, username) {
  var foundPlayer = true;
  systemMessage(player, "Scanning for " + username + " to form BrotherBand with!");
  var entities = player.world().getEntitiesInRangeOf(player.pos(), 2);
  /* entities.forEach(entity => {
    if (entity.is("PLAYER") && entity.getName() == username && isWearingTranser(entity, player) && player.canSee(entity)) {
      foundPlayer = true;
    };
  }); */
  if (foundPlayer) {
    if (!player.getWornChestplate().nbt().hasKey("brotherBand")) {
      var brotherBand = manager.newTagList();
      manager.appendString(brotherBand, username);
      manager.setTagList(player.getWornChestplate().nbt(), "brotherBand", brotherBand);
      systemMessage(player, "Successfully formed BrotherBand connection to " + username + "!");
    } else {
      var brotherBand = player.getWornChestplate().nbt().getStringList("brotherBand");
      var brotherBandIndex = getStringArray(brotherBand).indexOf(username);
      if (brotherBand.tagCount() > 5) {
        systemMessage(player, "You have reached the maximum amount of BrotherBands!");
      } else if (brotherBandIndex > -1) {
        systemMessage(player, "You have already established a BrotherBand with " + username + "!");
      } else {
        systemMessage(player, "Successfully formed BrotherBand connection to " + username + "!");
        manager.appendString(brotherBand, username);
      };
    };
  } else {
    systemMessage(player, "Unable to find player with username " + username + " close by!")
  };
};
/**
 * Cuts BrotherBand
 * @param {JSPlayer} player - Player cutting BrotherBand
 * @param {JSDataManager} manager - Required
 * @param {integer} username - Username of player cutting BrotherBand with
 **/
function cutBrotherBand(player, manager, username) {
  if (!player.getWornChestplate().nbt().hasKey("brotherBand")) {
    systemMessage(player, "You have no BrotherBands to cut!");
  } else {
    var brotherBand = player.getWornChestplate().nbt().getStringList("brotherBand");
    if (brotherBand.tagCount() == 0) {
      systemMessage(player, "You have no BrotherBands to cut!");
    } else {
      var index = getStringArray(contacts).indexOf(username);
      if (index < 0) {
        systemMessage(player, "Unable to find BrotherBand with username " + username + " to cut!");
      } else {
        systemMessage(player, "Cut BrotherBand with " + username + "!");
        manager.removeTag(brotherBand, index);
      };
    };
  };
};
/**
 * Lists player's BrotherBands
 * @param {JSEntity} entity - Required
 **/
function listBrotherBands(entity) {
  var brotherBand = getStringArray(entity.getWornChestplate().nbt().getStringList("brotherBand"));
  systemMessage(entity,"You have " + brotherBand.length + ((brotherBand.length > 1)?" Brothers!": " Brother!"));
  brotherBand.forEach(entry => {
    systemMessage(entity, entry);
  });
};
/**
 * Checks if a player has another player as a Brother
 * @param {JSEntity} sender - Player getting checked
 * @param {JSEntity} receiver - Player whose BrotherBand list is being checked
 * @returns If sender is in receiver's BrotherBands
 **/
function hasBrother(sender, receiver) {
  var brotherBands = receiver.getWornChestplate().nbt().getStringList("brotherBand");
  var brothers = getStringArray(brotherBands);
  var result = false;
  brothers.forEach(entry => {
    if (entry == sender.getName()) {
      result = true;
    };
  });
  return result;
};

//Contacts stuff
/**
 * Adds contact
 * @param {JSEntity} player - Required
 * @param {JSDataManager} manager - Required
 * @param {string} username - Username to add as contact
 **/
function addContact(player, manager, username) {
  if (!player.getWornChestplate().nbt().hasKey("contacts")) {
    var contacts = manager.newTagList();
    manager.appendString(player, username);
    manager.setTagList(player.getWornChestplate().nbt(), "contacts", contacts);
    systemMessage(entity, "Successfully added " + username + " as a contact");
  } else {
    var contacts = player.getWornChestplate().nbt().getStringList("contacts");
    var index = getStringArray(contacts).indexOf(username);
    if (index > -1) {
      systemMessage(player, username + " is already a contact!");
    } else {
      systemMessage(player, "Successfully added " + username + " as a contact");
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
  if (!player.getWornChestplate().nbt().hasKey("contacts")) {
    systemMessage(player, "You have no contacts to remove!");
  } else {
    var contacts = player.getWornChestplate().nbt().getStringList("contacts");
    if (contacts.tagCount() == 0) {
      systemMessage(player, "You have no contacts to remove!");
    } else {
      var index = getStringArray(contacts).indexOf(username);
      if (index < 0) {
        systemMessage(player, "Unable to find contact with username " + username + " to remove!");
      } else {
        systemMessage(player, "Removed contact with username " + username + "!");
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
  systemMessage(entity,"Your have " + contacts.length + " contacts:");
  contacts.forEach(entry => {
    systemMessage(entity, entry);
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

//Group stuff
/**
 * Adds group
 * @param {JSEntity} player - Required
 * @param {JSDataManager} manager - Required
 * @param {string} groupName - Name of group
 **/
function addGroup(entity, manager, groupName) {
  var group = manager.newCompoundTag();
  var members = manager.newTagList();
  manager.appendString(members, player.getName());
  manager.setString(group, "groupName", groupName);
  manager.setTagList(group, "members", members);
  if (!entity.getWornChestplate().nbt().hasKey("groups")) {
    var groups = manager.newTagList();
    manager.appendTag(groups, group);
    manager.setTagList(entity.getWornChestplate().nbt(), "groups", groups);
  } else {
    var groups = entity.getWornChestplate().nbt().getTagList("groups");
    var groupIndex = getGroupArray(entity).indexOf(groupName);
    if (groupIndex > -1) {
      systemMessage(entity, "Duplicate group name " + groupName + "!");
    } else {
      systemMessage(entity, "Group created with name: " + groupName);
      manager.appendTag(groups, group);
    };
  };
};
/**
 * List groups
 * @param {JSEntity} player - Required
 **/
function listGroups(player) {
  var groups = getGroupArrayMembers(player);
  systemMessage(player, "You are in " + groups.length + " groups:");
  groups.forEach(entry => {
    systemMessage(player, entry.groupName + " (" + entry.memberCount + ((entry.memberCount > 1)?" members)": " member)"))
  });
};
/**
 * Remove group by group name
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {string} groupName - Name of group
 **/
function removeGroup(player, manager, groupName) {
  var groups = player.getWornChestplate().nbt().getTagList("groups");
  var groupIndex = getGroupArray(player).indexOf(groupName);
  if (groupIndex < 0) {
    systemMessage(player, "Unable to find group with name " + groupName + " to remove!");
  } else {
    systemMessage(player, "Removed group " + groupName + "!");
    manager.removeTag(groups, groupIndex);
  };
};
/**
 * Adds member to group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {string} groupName - Name of group to add member to
 * @param {string} username - Username to add to group
 **/
function addGroupMember(player, manager, groupName, username) {
  var groups = player.getWornChestplate().nbt().getTagList("groups");
  var groupIndex = getGroupArray(player).indexOf(groupName);
  var members = groups.getCompoundTag(groupIndex).getStringList("members");
  var memberIndex = getStringArray(members).indexOf(username);
  var contacts = player.getWornChestplate().nbt().getTagList("contacts");
  var contactIndex = getStringArray(contacts).indexOf(username);
  if (!player.getWornChestplate().nbt().hasKey("groups")) {
    systemMessage(player, "You have not set up any groups yet!");
  } else if (groupIndex < 0) {
    systemMessage(player, "Group " + groupName + " does not exist!");
  } else if (contactIndex < 0) {
    systemMessage(player, username + " is not added as a contact!")
  } else if (memberIndex > -1) {
    systemMessage(player, "Member " + username + " is already in group " + groupName + "!");
  } else {
    systemMessage(player, "Successfully added " + username  + " to group " + groupName);
    manager.appendString(members, username);
  };
};
/**
 * Adds member to group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {string} groupName - Name of group to add member to
 * @param {string} username - Username to add to group
 **/
function removeGroupMember(player, manager, groupName, username) {
  var groups = player.getWornChestplate().nbt().getTagList("groups");
  var groupIndex = getGroupArray(player).indexOf(groupName);
  var members = groups.getCompoundTag(groupIndex).getStringList("members");
  var memberIndex = getStringArray(members).indexOf(username);
  if (!player.getWornChestplate().nbt().hasKey("groups")) {
    systemMessage(player, "You have not set up any groups yet!");
  } else if (groupIndex < 0) {
    systemMessage(player, "Group " + groupName + " does not exist!");
  } else if (memberIndex < 0) {
    systemMessage(player, username + " is not in group " + groupName + "!");
  } else {
    systemMessage(player, "Successfully removed " + username  + " from group " + groupName + "!");
    manager.removeTag(members, memberIndex);
  };
};
/**
 * Lists members of group
 * @param {JSPlayer} player - Required
 * @param {integer} groupName - Name of group to add member to
 **/
function listGroupMembers(player, groupName) {
  var groups = player.getWornChestplate().nbt().getTagList("groups");
  var groupIndex = getGroupArray(player).indexOf(groupName);
  var members = getStringArray(groups.getCompoundTag(groupIndex).getStringList("members"));
  if (!player.getWornChestplate().nbt().hasKey("groups")) {
    systemMessage(player, "You have not set up any groups yet!");
  } else if (groupIndex < 0) {
    systemMessage(player, "Group " + groupName + " does not exist!");
  } else {
    systemMessage(player, "Members in " + groupName + ":")
    members.forEach(entry => {
      systemMessage(player, entry);
    })
  };
};
/**
 * Checks if a player has another player as a contact
 * @param {JSEntity} sender - Player getting checked
 * @param {JSEntity} receiver - Player whose group list is being checked
 * @param {string} groupName - Group name being checked
 * @returns If sender is in receiver's contacts
 **/
function hasGroup(sender, receiver, groupName) {
  var result = false;
  var nbt = receiver.getWornChestplate().nbt();
  if (nbt.hasKey("groups")) {
    var groupIndex = getGroupArray(receiver).indexOf(groupName);
    if (groupIndex > -1) {
      var members = nbt.getTagList("groups").getCompoundTag(groupIndex).getStringList("members");
      var memberIndex = getStringArray(members).indexOf(sender.getName());
      if (memberIndex > -1) {
        result = true;
      };
    };
  };
  return result;
};

//For keybinds
function cycleChats(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/active_chat", player.getData("skyhighheroes:dyn/active_chat") + 1);
  switch (player.getData("skyhighheroes:dyn/chat_mode")) {
    case 0:
      var contactsList = getStringArray(player.getWornChestplate().nbt().getStringList("contacts"));
      if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
        manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
      };
      systemMessage(player, "You are now messaging " + contactsList[player.getData("skyhighheroes:dyn/active_chat")] + "!");
      break;
    case 1:
      var groupList = getGroupArray(player);
      if (player.getData("skyhighheroes:dyn/active_chat") > (groupList.length-1)) {
        manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
      };
      systemMessage(player, "You are now messaging " + groupList[player.getData("skyhighheroes:dyn/active_chat")] + "!");
      break;
    case 2:
      var brotherBandList = getStringArray(player.getWornChestplate().nbt().getStringList("brotherBand"));
      if (player.getData("skyhighheroes:dyn/active_chat") > (brotherBandList.length-1)) {
        manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
      };
      systemMessage(player, "You are now messaging " + brotherBandList[player.getData("skyhighheroes:dyn/active_chat")] + "!");
      break;
  };
  return true;
};
function cycleChatModes(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/chat_mode", player.getData("skyhighheroes:dyn/chat_mode") + 1);
  if (player.getData("skyhighheroes:dyn/chat_mode") > 2) {
    manager.setData(player, "skyhighheroes:dyn/chat_mode", 0);
  };
  switch (player.getData("skyhighheroes:dyn/chat_mode")) {
    case 0:
      systemMessage(player, "You are now messaging normal mode!");
      break;
    case 1:
      systemMessage(player, "You are now messaging in group mode!");
      break;
    case 2:
      systemMessage(player, "You are now messaging in BrotherBand mode!");
      break;
  };
  return true;
};
function editing(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/command_mode", !player.getData("skyhighheroes:dyn/command_mode"));
  return true;
};

//Make group message function and related stuff

//Add something that will check other players contact list so that message appears under the name the receiving player has set for that uuid


/*
Edit types
Add contact - 0
Nickname contact - 1
Remove contact - 2
Create group - 3
Edit group name - 4
Add member to group - 5
Remove member from group - 6
Remove group - 7
Form BrotherBand - 8
Cut BrotherBand - 9
*/
function keyBinds(hero) {
  //All of the ones where you need to enter a value will have the same key number
  hero.addKeyBindFunc("COMMAND_MODE", (player, manager) => editing(player, manager), "Toggle command mode", 4);
  hero.addKeyBind("SHAPE_SHIFT", "Enter value", 4);
  hero.addKeyBind("ENTER_COMMAND", "Enter command", 4);
  hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
  hero.addKeyBindFunc("CYCLE_CHAT_MODES", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 3);
  hero.addKeyBindFunc("CYCLE_CHATS_EM", (player, manager) => cycleChats(player, manager), "Cycle chats", 2);
  hero.addKeyBindFunc("CYCLE_CHAT_MODES_EM", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 2);
  hero.addKeyBind("SEND_MESSAGE", "Send message", 4);
};

/*
contact add name
contact remove index
contact list
contact edit index newName
group groupName add member name
group groupName remove member index
group list
group add groupName
group remove groupName
brotherBand form name
brotherBand cut index
brotherBand list
*/

/**
 * Lists members of group
 * @param {JSEntity} entity - Required
 * @param {JSDataManager} manager - Required
 * @param {string} transformed - Transformed name if needed
 **/
function tickHandler(entity, manager, transformed) {
  if (typeof entity.getData("fiskheroes:disguise") === "string" && ((typeof transformed === "string") ? entity.getData("fiskheroes:disguise") != transformed : true)) {
    manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
    (typeof transformed === "string") ? manager.setData(entity, "fiskheroes:disguise", transformed) : manager.setData(entity, "fiskheroes:disguise", null);
    //manager.setData(entity, "fiskheroes:disguise", null);
    manager.setData(entity, "fiskheroes:shape_shifting_to", null);
    manager.setData(entity, "fiskheroes:shape_shifting_from", null);
    manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
    commandHandler(entity, manager);
  };
};

function messageHandler(entity, manager) {
  switch(entity.getData("")) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
  };
};

/**
 * Actually handles the commands
 * @param {JSEntity} entity - Required
 * @param {JSDataManager} manager - Required
 **/
function commandHandler(entity, manager) {
  if (entity.getData("skyhighheroes:dyn/command_mode")) {
    var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
    systemMessage(entity, args);
    if (args.length == 0) {
      systemMessage(entity, "Available commands:");
      systemMessage(entity, "contact");
      systemMessage(entity, "group");
      systemMessage(entity, "brotherBand");
    } else {
      if (args[0] == "contact") {
        if (args.length == 1) {
          systemMessage(entity, "contact add <name>");
          systemMessage(entity, "contact remove <name>");
          systemMessage(entity, "contact list");
        } else if (args.length > 1) {
          switch(args[1]) {
            case "add":
              (args.length == 3) ? addContact(entity, manager, args[2]) : systemMessage(entity, "contact add <name>");
              break;
            case "remove":
              (args.length == 3) ? removeContact(entity, manager, args[2]) : systemMessage(entity, "contact remove <name>");
              break;
            case "list":
              listContacts(entity);
              break;
            case "edit":
              systemMessage(entity, "bonk")
              editContact(entity);
              break;
            default:
              systemMessage(entity, "contact add <name>");
              systemMessage(entity, "contact remove <name>");
              systemMessage(entity, "contact list");
              break;
          };
        };
      } else if (args[0] == "group") {
        if (args.length == 1) {
          systemMessage(entity, "group add <groupName>");
          systemMessage(entity, "group <groupName> add <name>");
          systemMessage(entity, "group <groupName> remove <name>");
          systemMessage(entity, "group remove <groupName>");
          systemMessage(entity, "group list");
          systemMessage(entity, "group <groupName> listMembers");
        } else if (args.length > 1) {
          switch (args[1]) {
            case "add":
              (args.length == 3) ? addGroup(entity, manager, args[2]) : systemMessage(entity, "group add <groupName>");
              break;
            case "remove":
              (args.length == 3) ? removeGroup(entity, manager, args[2]) : systemMessage(entity, "group remove <groupName>");
              break;
            case "list":
              listGroups(entity, manager);
              break;
            default:
              if (args.length > 2) {
                switch(args[2]) {
                  case "add":
                    addGroupMember(entity, manager, args[1], args[3]);
                    break;
                  case "remove":
                    removeGroupMember(entity, manager, args[1], args[3]);
                    break;
                  case "list":
                    listGroupMembers(entity, args[1]);
                    break;
                  default:
                    systemMessage(entity, "group <groupName> add <name>");
                    systemMessage(entity, "group <groupName> remove <name>");
                    systemMessage(entity, "group <groupName> list");
                    break;
                };
              };
              break;
          };
        };
      } else if (args[0] == "brotherBand") {
        if (args.length == 1) {
          systemMessage(entity, "brotherBand form <name>");
          systemMessage(entity, "brotherBand cut <name>");
        } else if (args.length > 1) {
          switch (args[1]) {
            case "form":
              (args.length == 3) ? formBrotherBand(entity, manager, args[2]) : systemMessage(entity, "brotherBand form <name>");
              break;
            case "cut":
              (args.length == 3) ? cutBrotherBand(entity, manager, args[2]) : systemMessage(entity, "brotherBand cut <name>");
              systemMessage(entity, "brotherBand cut <name>");
              break;
              case "list":
                listBrotherBands(entity);
                break;
            default:
              systemMessage(entity, "Invalid argument for brotherBand!");
              break;
          };
        };
      };
    };
  };
};