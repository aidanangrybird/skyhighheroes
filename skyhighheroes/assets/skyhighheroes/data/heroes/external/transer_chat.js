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
 * @returns If the entity is wearing a transer
 **/
function isWearingTranser(entity) {/* 
  var wearingTranser = false
  suits.forEach(entry => {
    if (entity.getWornChestplate().nbt().getString("HeroType") == entry.suit && (typeof entry.id !== "undefined") ? entity.getUUID() == entry.id : true) {
      wearingTranser = true;
    };
  });
  return wearingTranser; */
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
  };
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

/**
 * Gets index of contact from name
 * @param {JSPlayer} player - Player to get contact info from
 * @param {string} name - Username of player to check index of
 **/
function getContactIndex(player, name) {
  var nbt = player.getWornChestplate().nbt();
  if (player.getWornChestplate().nbt().hasKey("contact")) {
    var count = player.getWornChestplate().nbt().getTagList("contact").tagCount();
    for (index=0;index<count;index++) {
      if (nbt.getTagList("contact").getCompoundTag(index).getString("username") == name) {
        return index;
      };
    };
  } else {
    systemMessage(player, "You have not set up any contacts yet!");
    return false;
  };
};

/**
 * Gets index of group from name
 * @param {JSPlayer} player - Player to get group info from
 * @param {string} name - Name of group to check index of
 * @returns Index of contact
 **/
function getGroupIndex(player, name) {
  var nbt = player.getWornChestplate().nbt();
  if (player.getWornChestplate().nbt().hasKey("groups")) {
    var count = player.getWornChestplate().nbt().getTagList("groups").tagCount();
    for (index=0;index<count;index++) {
      if (nbt.getTagList("groups").getCompoundTag(index).getString("groupName") == name) {
        return index;
      };
    };
  } else {
    systemMessage(player, "You have not set up any groups yet!");
    return -1;
  };
};

/**
 * Gets index of BrotherBand name
 * @param {JSPlayer} player - Player to get BrotherBand info from
 * @param {string} username - Username of BrotherBand to check index of
 * @returns Index of contact
 **/
function getBrotherBandIndex(player, username) {
  var nbt = player.getWornChestplate().nbt();
  if (player.getWornChestplate().nbt().hasKey("brotherband")) {
    var count = player.getWornChestplate().nbt().getTagList("brotherband").tagCount();
    for (index=0;index<count;index++) {
      if (nbt.getStringList("brotherband").getCompoundTag(index).getString("username") == username) {
        return index;
      };
    };
  } else {
    systemMessage(player, "You have not set up any BrotherBands yet!");
    return -1;
  };
};

//The point of BrotherBand is to allow communication and to give buffs when you are near each other
/**
 * Forms brotherband
 * @param {JSPlayer} player - Player forming brotherband
 * @param {JSDataManager} manager - Required
 * @param {string} username - Username of player to form brotherband with
 **/
function formBrotherBand(player, manager, username) {
  if (brotherband.tagCount() > 5) {
    chatMessage(player, "You have reached the maximum amount of BrotherBands!")
  } else {
    var uuid = "";
    systemMessage(player, "Scanning for " + username + " to form BrotherBand with!")
    var entities = player.world().getEntitiesInRangeOf(player.pos(), 2);
    entities.forEach(entity => {
      if (entity.is("PLAYER") && entity.getName() == username && isWearingTranser(entity) && player.canSee(entity)) {
        uuid = entity.getUUID();
      };
    });
    if (uuid != "") {
      if (!player.getWornChestplate().nbt().hasKey("brotherband")) {
        var brotherband = manager.newTagList();
        var connection = manager.newCompoundTag();
        manager.setString(contact, "username", username);
        manager.setString(contact, "uuid", uuid);
        manager.appendTag(brotherband, connection);
        manager.setTagList(player.getWornChestplate().nbt(), "brotherband", brotherband);
      } else {
        var brotherband = player.getWornChestplate().nbt().getTagList("brotherband");
        var connection = manager.newCompoundTag();
        manager.setString(contact, "username", username);
        manager.setString(contact, "uuid", uuid);
        manager.appendTag(brotherband, connection);
      };
      systemMessage(player, "Successfully established BrotherBand with username: " + username + " (" + uuid + ")");
    } else {
      systemMessage(player, "Unable to find player with username " + username + " close by!")
    };
  };
};

/**
 * Cuts brotherband
 * @param {JSPlayer} player - Player cutting brotherband
 * @param {JSDataManager} manager - Required
 * @param {integer} username - Index of player cutting brotherband with
 **/
function cutBrotherBand(player, manager, username) {
  if (username != "") {
    var brotherband = player.getWornChestplate().nbt().getTagList("brotherband");
    var index = getBrotherBandIndex(player, username);
    if (index) {
      manager.removeTag(brotherband, index);
      systemMessage(player, "Cut BrotherBand with " + username + "!");
    };
  } else {
    systemMessage(player, "Please enter in a username!")
  };
};

//This will be part of the finishing up of adding a contact
/**
 * Adds contact
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {string} username - Username to add as contact
 **/
function addContact(player, manager, username) {
  var uuid = "";
  systemMessage(player, "Searching for " + username + " to form connection with!")
  var entities = player.world().getEntitiesInRangeOf(player.pos(), 10);
  entities.forEach(entity => {
    if (entity.is("PLAYER") && entity.getName() == username && isWearingTranser(entity)) {
      uuid = entity.getUUID();
    };
  });
  if (uuid != "") {
    var contact = manager.newCompoundTag();
    manager.setString(contact, "username", username);
    manager.setString(contact, "uuid", uuid);
    if (!player.getWornChestplate().nbt().hasKey("contacts")) {
      var contacts = manager.newTagList();
      manager.appendTag(contacts, contact);
      manager.setTagList(player.getWornChestplate().nbt(), "contacts", contacts);
    } else {
      var contacts = player.getWornChestplate().nbt().getTagList("contacts");
      manager.appendTag(contacts, contact);
    };
    systemMessage(player, "Successfully added " + username + " (" + uuid + ") as a contact");
  } else {
    systemMessage(player, "Unable to find player with username " + username + " close by!")
  };
};

/**
 * Updates contact name
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {integer} contactIndex - Index of contact
 * @param {string} nickname - Nickname to give contact
 **/
function editContact(player, manager, username, nickname) {
  var contact = player.getWornChestplate().nbt().getTagList("contacts").getCompoundTag(contactIndex);
  if (username == "") {
    manager.setString(contact, "username", username);
  }
};

/**
 * Remove contact by index
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {integer} contactIndex - Index of contact
 **/
function removeContact(player, manager, contactIndex) {
  var contacts = player.getWornChestplate().nbt().getTagList("contacts");
  manager.removeTag(contacts, contactIndex);
};

/**
 * Lists player's contacts
 * @param {JSEntity} entity - Required
 **/
function listContacts(entity) {
  var contacts = entity.getWornChestplate().nbt().getTagList("contacts");
  var contactNum = contacts.tagCount();
  systemMessage(entity.as("PLAYER"),"Your saved contacts:");
  for (i = 0; i < contactNum; i++) {
    var contact = contacts.getCompoundTag(i);
    systemMessage(entity.as("PLAYER"),"Username: " + contact.getString("username") + "; UUID: " + contact.getString("uuid"));
  };
};

/**
 * Checks if a player has another player as a contact
 * @param {JSEntity} sender - Player getting checked
 * @param {JSEntity} receiver - Player whose contact list is being checked
 * @returns If sender is in receiver's contacts
 **/
function hasContact(sender, receiver) {
  var contacts = listContacts(receiver);
  var result = false;
  for (i=0;i<contacts.length;i++) {
    if (contacts[i].uuid == sender.getUUID()) {
      i=contacts.length;
      result = true;
    };
  };
  return result;
};

//Group stuff
/**
 * Creates group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {string} groupName - Name of group
 **/
function createGroup(player, manager, groupName) {
  var group = manager.newCompoundTag();
  manager.setString(group, "groupName", groupName);
  if (!player.getWornChestplate().nbt().hasKey("groups")) {
    var groups = manager.newTagList();
    manager.appendTag(groups, group);
    manager.setTagList(player.getWornChestplate().nbt(), "groups", groups);
  } else {
    var chats = player.getWornChestplate().nbt().getTagList("groups");
    manager.appendTag(groups, group);
  };
  systemMessage(player, "Group created with name: " + groupName);
  return true;
};
/**
 * Updates group name
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {integer} groupIndex - Index of contact
 * @param {string} name - Name to update group to
 **/
function editGroup(player, manager, groupIndex, name) {
  var group = player.getWornChestplate().nbt().getTagList("groups").getCompoundTag(groupIndex);
  if (name == "") {
    manager.setString(group, "groupName", name);
  };
};
/**
 * Remove group by index
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {integer} groupIndex - Index of group
 **/
function removeGroup(player, manager, groupIndex) {
  var groups = player.getWornChestplate().nbt().getTagList("groups");
  manager.removeTag(groups, groupIndex);
};
/**
 * Adds member to group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param groupIndex - Index of group to add member to
 * @param uuid - UUID to add to group
 **/
function addGroupMemeber(player, manager, groupIndex, uuid) {
  var group = player.getWornChestplate().nbt().getTagList("chats").getCompoundTag(groupIndex);
  manager.setString(group, "groupName", groupName);
  manager.appendTag(chats, group);
  if (!player.getWornChestplate().nbt().hasKey("chats")) {
    var chats = manager.newTagList();
    manager.appendTag(chats, group);
    manager.setTagList(player.getWornChestplate().nbt(), "chats", chats);
  } else {
    var chats = player.getWornChestplate().nbt().getTagList("chats");
    manager.appendTag(chats, group);
  };
  var members = manager.getStringList("members");
  manager.appendString(members, uuid);
};
/**
 * Adds member to group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param groupIndex - Index of group to add member to
 * @param uuid - UUID to add to group
 **/
function removeGroupMemeber(player, manager, groupIndex, uuid) {
  var members = player.getWornChestplate().nbt().getTagList("groups").getCompoundTag(groupIndex).getStringlist("members");
  manager.removeTag(members, uuid);
};
/**
 * Lists members of group
 * @param {JSPlayer} player - Required
 * @param {integer} groupIndex - Index of group to add member to
 **/
function listGroupMembers(player, groupIndex) {
  var group = player.getWornChestplate().nbt().getTagList("groups").getCompoundTag(groupIndex);
  var members = group.getStringList("members");
  var count = members.tagCount();
  chatMessage(player, "Group name: " + group.getString("groupName"))
  chatMessage(player, "Members: ")
  for (i=0;i<count;i++) {
    chatMessage(player, "" + members.getString(i));
  };
};

function cycleChats(player, manager) {/* 
  var chats = player.getWornChestplate().nbt().getTagList("chats");
  player.addChatMessage(player.getData("skyhighheroes:dyn/active_chat"));
  manager.setData(player, "skyhighheroes:dyn/active_chat", player.getData("skyhighheroes:dyn/active_chat") + 1);
  if (player.getData("skyhighheroes:dyn/active_chat") > chats.tagCount()) {
    manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
  };
  if (chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).hasKey("groupName")) {
    listGroupMembers(player, player.getData("skyhighheroes:dyn/active_chat"));
  };
  if (chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).hasKey("uuid")) {
    chatMessage(player, chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).getstring("uuid"));
  }; */
  var chats = player.getWornChestplate().nbt().getTagList("chats");
  player.addChatMessage(player.getData("skyhighheroes:dyn/active_chat"));
  manager.setData(player, "skyhighheroes:dyn/active_chat", player.getData("skyhighheroes:dyn/active_chat") + 1);
  if (player.getData("skyhighheroes:dyn/active_chat") > chats.tagCount()) {
    manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
  };
  if (chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).hasKey("groupName")) {
    chatMessage(player, "Now messaging " + chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).getString("groupName"));
  };
  if (chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).hasKey("uuid")) {
    chatMessage(player, "Now messaging " + chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).getString("name"));
  };
  return true;
};

//Used for keybinds
function editing(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/editing_mode", !player.getData("skyhighheroes:dyn/editing_mode"));
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
  hero.addKeyBindFunc("EDITING_MODE", (player, manager) => editing(player, manager), "Enter editing mode", 3);
  hero.addKeyBind("SHAPE_SHIFT", "Enter value", 4);
  //hero.addKeyBindFunc("SHOW_INFO", (player, manager) => showChatInfo(player, manager), "Show current chat info", 4);
  hero.addKeyBind("ADD_CONTACT", "Add contact", 4);
  //hero.addKeyBind("EDITING_GROUP_NAME", "Edit group name", 1);
  //hero.addKeyBind("FORM_BROTHERBAND", "Form BrotherBand", 4);
  //hero.addKeyBind("CONTACT_NICKNAME", "Contact Nickanme", 4);
  hero.addKeyBind("CREATE_GROUP", "Create chat group", 4);
  hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
  hero.addKeyBindFunc("CYCLE_CHAT_TYPES", (player, manager) => cycleChatTypes(player, manager), "Cycle chat types", 4);
  //hero.addKeyBindFunc("CYCLE_CONTACTS", (player, manager) => cycleContacts(player, manager), "Cycle contacts", 3);
  //hero.addKeyBind("SEND_MESSAGE", "Send message", 4);
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

function tickHandler(entity, manager) {
  if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && typeof entity.getData("fiskheroes:disguise") === "string") {
    manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
    manager.setData(entity, "fiskheroes:disguise", null);
    manager.setData(entity, "fiskheroes:shape_shifting_to", null);
    manager.setData(entity, "fiskheroes:shape_shifting_from", null);
    manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
    var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
    if (args.length == 0) {
      systemMessage(entity, "Available commands:");
      systemMessage(entity, "contact");
      systemMessage(entity, "group");
      systemMessage(entity, "brotherBand");
    };
    if (args[0] == "contact") {
      if (args.length == 1) {
        systemMessage(entity, "contact add <name>");
        systemMessage(entity, "contact remove <index>");
        systemMessage(entity, "contact <contactIndex> setName <newName>");
      };
      if (args.length == 2) {
        switch(args[1]) {
          case "add":
            systemMessage(entity, "contact add <name>");
            break;
          case "remove":
            systemMessage(entity, "contact remove <index>");
            break;
          default:
            systemMessage(entity, "contact add <name>");
            systemMessage(entity, "contact remove <index>");
            systemMessage(entity, "contact <contactIndex> setName <newName>");
            break;
        };
      };
      if (args.length == 3) {
        switch(args[1]) {
          case "add":
            addContact(entity, manager, args[2]);
            break;
          case "remove":
            removeContact(entity, manager, args[2]);
            break;
          default:
            systemMessage(entity, "contact add <name>");
            systemMessage(entity, "contact remove <index>");
            systemMessage(entity, "contact <contactIndex> setName <newName>");
            break;
        };
      };
      if (args.length == 4) {
        if (args[2] == "setName") {
          editContact(entity, manager, args[1]);
        } else {
          systemMessage(entity, "contact <contactIndex> setName <newName>");
        };
      };
    };
    if (args[0] == "groups") {
      if (args.length == 1) {
        systemMessage(entity, "group add <groupName>");
        systemMessage(entity, "group <groupIndex> addMember <name>");
        systemMessage(entity, "group <groupIndex> removeMember <index>");
        systemMessage(entity, "group remove <groupIndex>");
      };
      if (args.length == 2) {
        switch (args[1]) {
          case "add":
            systemMessage(entity, "group add <groupName>");
            break;
          case "remove":
            systemMessage(entity, "group remove <groupIndex>");
            break;
          default:
            systemMessage(entity, "group <groupIndex> addMember <name>");
            systemMessage(entity, "group <groupIndex> removeMember <index>");
            break;
        };
      };
      if (args.length == 3) {
        switch(args[1]) {
          case "add":
            createGroup(entity, manager, args[2]);
            break;
          case "remove":
            removeGroup(entity, manager, args[2]);
            break;
          default:
            systemMessage(entity, "group add <groupName>");
            systemMessage(entity, "group remove <groupIndex>");
            systemMessage(entity, "group <groupIndex> addMember <name>");
            systemMessage(entity, "group <groupIndex> removeMember <index>");
            break;
        };
      };
      if (args.length == 4) {
        if (args[2] == "setName") {
          editContact(entity, manager, args[1]);
        } else {
          systemMessage(entity, "contact <contactIndex> setName <newName>");
        };
      };
    };
    if (args[0] == "brotherBand") {
      if (args.length == 1) {
        systemMessage(entity, "brotherBand form <name>");
        systemMessage(entity, "brotherBand cut <index>");
      };
      if (args.length == 2) {
        switch (args[1]) {
          case "form":
            systemMessage(entity, "brotherBand form <name>");
            break;
          case "cut":
            systemMessage(entity, "brotherBand cut <index>");
            break;
          default:
            systemMessage(entity, "Invalid argument for brotherBand!");
            break;
        };
      };
      if (args.length == 3) {
        switch (args[1]) {
          case "form":
            formBrotherBand(entity, manager, args[2]);
            break;
          case "cut":
            cutBrotherBand(entity, manager, args[2]);
            break;
          default:
            systemMessage(entity, "Invalid argument for brotherBand!");
            break;
        };
      };
    };
  };
};