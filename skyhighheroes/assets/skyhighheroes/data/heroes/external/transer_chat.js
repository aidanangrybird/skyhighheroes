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
]

/**
 * Adds contact
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param {string} uuid - Contact uuid
 * @param {string} name - Contact name
 **/
function addContact(player, manager, uuid, name) {
  var contacts = player.getWornChestplate().nbt().getTagList("contacts");
  var contact = manager.newCompoundTag();
  manager.setString(contact, "name", name);
  manager.setString(contact, "uuid", uuid);
  manager.appendTag(contacts, contact);
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
}

/**
 * Body beam like how Anit-Monitor has it
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param contactID - Index of contact
 * @param name - Name to update contact with
 **/
function editContact(player, manager, contactID) {
  var contacts = player.getWornChestplate().nbt().getTagList("contacts");
  manager.removeTag(contacts, contactID);
}

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
 * Creates group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param groupName - Name of group
 **/
function createGroup(player, manager, groupName) {
  var groups = player.getWornChestplate().nbt().getTagList("groups");
  var group = manager.newCompoundTag();
  manager.setString(group, "groupName", groupName);
  manager.appendTag(groups, group);
};

/**
 * Adds member to group
 * @param {JSPlayer} player - Required
 * @param {JSDataManager} manager - Required
 * @param groupID - Index of group to add member to
 * @param uuid - UUID to add to group
 **/
function addGroupMemeber(player, manager, groupID, uuid) {
  var group = player.getWornChestplate().nbt().getTagList("groups").getCompoundTag(groupID);
  var members = group.getStringList("members");
  manager.appendString(members, uuid);
};

//Make group message function and related stuff

//Add something that will check other players contact list so that message appears under the name the receiving player has set for that uuid

var stuff = [
  {name: "Aidan", uuid: "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"},
  {groupName: "Star Force Guild", groupMembers: [
    "a3d071d4-c912-41e1-a6b2-c0de99ea4a84",
    "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"
  ]}
]