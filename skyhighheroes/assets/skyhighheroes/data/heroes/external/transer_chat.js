//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

/**
 * Checks if an entity is wearing a transer
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is wearing a transer
 **/
function isWearingTranser(entity) {
  var wearingTranser = false
  suits.forEach(entry => {
    if (entity.getWornChestplate().nbt().getString("HeroType") == entry.suit && (typeof entry.id !== "undefined") ? entity.getUUID() == entry.id : true) {
      wearingTranser = true;
    };
  });
  return wearingTranser;
};

/**
 * Prints message to player's chat
 * @param {JSPlayer} player - Required
 * @param {string} message - Message to be shown to player
 **/
function chatMessage(player, message) {
  if (PackLoader.getSide() == "SERVER") {
    player.addChatMessage(message);
  };
};

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
 * Adds contact
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 **/

/*

 * @param {string} uuid - Contact uuid
 * @param {string} name - Contact name
*/
function addContact(player, manager) {
  var name = "bonk";
  var uuid = "sdfjksdljkf";
  var contact = manager.newCompoundTag();
  manager.setString(contact, "name", name);
  manager.setString(contact, "uuid", uuid);
  if (!player.getWornChestplate().nbt().hasKey("contacts")) {
    var contacts = manager.newTagList();
    manager.appendTag(contacts, contact);
    manager.setTagList(player.getWornChestplate().nbt(), "contacts", contacts);
  } else {
    var contacts = player.getWornChestplate().nbt().getTagList("contacts");
    manager.appendTag(contacts, contact);
  }
  chatMessage(player, "Added contact with name: " + name + " (" + uuid + ")");
  return true;
};

/**
 * Body beam like how Anit-Monitor has it
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param contactID - Index of contact
 * @param name - Name to update contact with
 **/
function editContact(player, manager, contactID, name) {
  var contact = player.getWornChestplate().nbt().getTagList("contacts").getCompoundTag(contactID);
  manager.setString(contact, "name", name);
  return true;
};

/**
 * Body beam like how Anit-Monitor has it
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param contactID - Index of contact
 **/
function removeContact(player, manager, contactID) {
  var contacts = player.getWornChestplate().nbt().getTagList("contacts");
  manager.removeTag(contacts, contactID);
  return true;
};

/**
 * Lists player's contacts
 * @param {JSEntity} entity - Required
 **/
function listContacts(entity) {
  var contacts = entity.getWornChestplate().nbt().getTagList("contacts");
  var contactNum = contacts.tagCount();
  player.addChatMessage("Your saved contacts:");
  for (i = 0; i < contactNum; i++) {
    var contact = contacts.getCompoundTag(i);
    player.addChatMessage("Username: " + contact.getString("username") + "; UUID: " + contact.getString("uuid"));
  };
};

/**
 * Body beam like how Anit-Monitor has it
 * @param renderer - This is required or it will not work
 * @param color - Color to set the beam to
 * @returns The beam with the color set
 **/
function hasContact(self, other) {
  var contacts = listContacts(other);
  for (i=0;i<contacts.length;i++) {
    if (contacts[i].uuid == self.getUUID()) {
      i=contacts.length;
      return true;
    } else {
      return false;
    };
  };
};

/**
 * Creates chat
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param uuid - Name of group
 **/
function createChat(player, manager, uuid) {
  var chats = player.getWornChestplate().nbt().getTagList("chats");
  var chat = manager.newCompoundTag();
  manager.setString(chat, "uuid", uuid);
  manager.appendTag(chats, chat);
}

//Group stuff
/**
 * Creates group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param groupName - Name of group
 **/
function createGroup(player, manager, groupName) {
  var chats = player.getWornChestplate().nbt().getTagList("chats");
  var group = manager.newCompoundTag();
  manager.setString(group, "groupName", groupName);
  manager.appendTag(chats, group);
};
/**
 * Adds member to group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param groupID - Index of group to add member to
 * @param uuid - UUID to add to group
 **/
function addGroupMemeber(player, manager, groupID, uuid) {
  var group = player.getWornChestplate().nbt().getTagList("chats").getCompoundTag(groupID);
  var members = group.getStringList("members");
  manager.appendString(members, uuid);
};
/**
 * Adds member to group
 * @param {JSPlayer} player - Required
 * @param groupID - Index of group to add member to
 * @param uuid - UUID to add to group
 **/
function listGroupMembers(player, groupID) {
  var group = player.getWornChestplate().nbt().getTagList("chats").getCompoundTag(groupID);
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
  var chats = player.getWornChestplate().nbt().getTagList("contacts");
  player.addChatMessage(player.getData("skyhighheroes:dyn/active_chat"));
  manager.setData(player, "skyhighheroes:dyn/active_chat", player.getData("skyhighheroes:dyn/active_chat") + 1);
  if (player.getData("skyhighheroes:dyn/active_chat") > chats.tagCount()) {
    manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
  };
  if (chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).hasKey("groupName")) {
    listGroupMembers(player, player.getData("skyhighheroes:dyn/active_chat"));
  };
  if (chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).hasKey("uuid")) {
    chatMessage(player, "Now messaging " + chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).getString("name"));
  };
  return true;
};

function editing(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/editing_mode", !player.getData("skyhighheroes:dyn/editing_mode"));
  return true;
};

function showChatInfo(player, manager){
  var chats = player.getWornChestplate().nbt().getTagList("chats");
  if (chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).hasKey("groupName")) {
    listGroupMembers(player, player.getData("skyhighheroes:dyn/active_chat"));
  };
  if (chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).hasKey("uuid")) {
    chatMessage(player, chats.getCompoundTag(player.getData("skyhighheroes:dyn/active_chat")).getstring("uuid"));
  };
  return true;
};

//Make group message function and related stuff

//Add something that will check other players contact list so that message appears under the name the receiving player has set for that uuid

function keyBinds(hero) {
  //All of the ones where you need to enter a value will have the same key number
  hero.addKeyBindFunc("EDITING_MODE", (player, manager) => editing(player, manager), "Enter editing mode", 3);
  //hero.addKeyBind("SHAPE_SHIFT", "Enter value", 4);
  hero.addKeyBindFunc("SHOW_INFO", (player, manager) => showChatInfo(player, manager), "Show current chat info", 4);
  hero.addKeyBindFunc("ADD_CONTACT", (player, manager) => this.addContact(player, manager), "Add contact", 4);
  //hero.addKeyBind("ADDING_CONTACT_NAME", "Enter contact name", 4);
  //hero.addKeyBind("ADDING_CONTACT_UUID", "Enter contact UUID", 4);
  //hero.addKeyBind("EDITING_CONTACT_NAME", "Edit name", 4);
  hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
  //hero.addKeyBindFunc("CYCLE_CONTACTS", (player, manager) => cycleContacts(player, manager), "Cycle contacts", 3);
  //hero.addKeyBind("SEND_MESSAGE", "Send message", 4);
  //hero.addKeyBind("EDITING_GROUP_NAME", "Edit group name", 1);
};

function keyBindEnabled(entity, keyBind) {
  if (keyBind == "SHOW_INFO" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) {
    return true;
  }
  if (keyBind == "CYCLE_CHATS" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) {
    return true;
  }/* 
  switch (keyBind) {
    case "SHOW_INFO":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0;
    case "CYCLE_CHATS":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0;
  }; */
};