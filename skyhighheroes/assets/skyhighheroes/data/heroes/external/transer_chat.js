//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

var suits = [
  {suit: "skyhighheros:aegon_stelar", id: "411ed8b9-b246-449c-b941-02790d0971dd"},
  {suit: "skyhighheros:aidan_stelar", id: "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"},
  {suit: "skyhighheros:cash_stelar", id: "2389f9cd-351e-4d96-a277-847a24fd9048"},
  {suit: "skyhighheros:chase_stelar", id: "4da600b8-582a-4fc3-ac2e-ada03d3e478c"},
  {suit: "skyhighheros:ace_stelar", id: "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0"},
  {suit: "skyhighheros:grand_stelar", id: "d699ffcd-8177-4325-91ac-3e815e87bb95"},
  {suit: "skyhighheros:lucas_stelar", id: "c4bc5db6-3cf6-44fe-8427-304a7b211bc4"},
  {suit: "skyhighheroes:geo_stelar"},
  {suit: "skyhighheroes:geo_stelar/subaru"}
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


//The point of BrotherBand is to allow communication and to give buffs when you are near each other
/**
 * Forms brotherband
 * @param {JSPlayer} player - Player forming brotherband
 * @param {JSDataManager} manager - Required
 **/
function formBrotherBand(player, manager) {
  if (brotherband.tagCount() > 5) {
    chatMessage(player, "You have reached the maximum amount of BrotherBands!")
  } else {
    var username = player.getData("skyhighheroes:dyn/entry");
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
        manager.appendString(brotherband, uuid);
        manager.setTagList(player.getWornChestplate().nbt(), "brotherband", brotherband);
      } else {
        var brotherband = player.getWornChestplate().nbt().getTagList("brotherband");
        manager.appendString(brotherband, uuid);
      };
      systemMessage(player, "Successfully established BrotherBand with username: " + username + " (" + uuid + ")");
    } else {
      systemMessage(player, "Unable to find player with username " + username + "close by!")
    };
  };
  return true;
};

function cutBrotherBand(player, manager) {
  var id = player.getData("skyhighheroes:dyn/entry");
  if (id != "") {
    var brotherband = player.getWornChestplate().nbt().getTagList("brotherband");
    systemMessage(player, "Cut BrotherBand with " + brotherband.getString(id) + "!");
    manager.removeTag(brotherband, id);
  } else {
    chatMessage(player, "Please enter in an id!")
  };
  return true;
};

//This will be part of the finishing up of adding a contact
/**
 * Adds contact
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 **/
function addContact(player, manager) {
  var username = player.getData("skyhighheroes:dyn/entry");
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
  return true;
};

/**
 * Updates contact name
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {integer} contactIndex - Index of contact
 **/
function editContact(player, manager, contactIndex) {
  var username = player.getData("skyhighheroes:dyn/entry");
  var contact = player.getWornChestplate().nbt().getTagList("contacts").getCompoundTag(contactIndex);
  if (username == "") {
    manager.setString(contact, "username", username);
  }
  return true;
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
  return true;
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
function createGroup(player, manager) {
  var group = manager.newCompoundTag();
  manager.setString(group, "groupName", groupName);
  if (!player.getWornChestplate().nbt().hasKey("chats")) {
    var chats = manager.newTagList();
    manager.appendTag(chats, group);
    manager.setTagList(player.getWornChestplate().nbt(), "chats", chats);
  } else {
    var chats = player.getWornChestplate().nbt().getTagList("chats");
    manager.appendTag(chats, group);
  };
  systemMessage(player, "Group created with name: " + groupName);
  return true;
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

function options(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/edit_type", player.getData("skyhighheroes:dyn/edit_type") + 1);
  if (player.getData("skyhighheroes:dyn/edit_type") > 3) {
    manager.setData(player, "skyhighheroes:dyn/edit_type", 0);
  };
  return true;
}

function parseEntry(entity) {
  splitstr = strinput.split(" ");
}

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

function tickHandler(entity, manager) {
  if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && typeof entity.getData("fiskheroes:disguise") === "string") {
    manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
    manager.setData(entity, "fiskheroes:disguise", null);
    manager.setData(entity, "fiskheroes:shape_shifting_to", null);
    manager.setData(entity, "fiskheroes:shape_shifting_from", null);
    manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
    var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
    switch(args.length) {
      case 0:
        systemMessage(entity, "No arguments input!");
        break;
      case 1:
        systemMessage(entity, "Not enough arguments!");
        break;
      case 2:
        systemMessage(entity, "Not enough arguments!");
        break;
      case 3:
        systemMessage(entity, "Not enough arguments!");
        break;
      case 4:
        systemMessage(entity, "Not enough arguments!");
        break;
      case 5:
        systemMessage(entity, "Not enough arguments!");
        break;
    }
  };
};