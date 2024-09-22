//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

function isWearingTranser(entities) {
  entities.forEach(person => {
    if (person.is("player")) {
      suits.forEach(entry => {
        if (person.getWornChestplate().nbt().getString("HeroType") == entry.suit && (typeof entry.id !== "undefined") ? person.getUUID() == entry.id : true) {
          return true;
        }
      })
    }
  });
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


function addContact(player, manager) {
  var contacts = player.getWornChestplate().nbt().getTagList("Contacts");
  var contactNum = contacts.tagCount();

}

function getContacts(player, manager) {
  var contactList = [];
  var contacts = player.getWornChestplate().nbt().getTagList("Contacts");
  var contactNum = contacts.tagCount();
  for (i = 0; i < contactNum; i++) {
    var contact = contacts.getCompoundTag(i);
    contactList.push({"username": contact.getString("username"), "uuid": contact.getString("uuid")});
  }
  return contactList;
}

function listContacts(entity) {
  var contacts = entity.getWornChestplate().nbt().getTagList("Contacts");
  var contactNum = contacts.tagCount();
  player.addChatMessage("Your saved contacts:");
  for (i = 0; i < contactNum; i++) {
    var contact = contacts.getCompoundTag(i);
    player.addChatMessage("Username: " + contact.getString("usernames") + "; UUID: " + contact.getString("uuid"));
  }
}

function hasContact(self, other) {
  var contacts = listContacts(other);
  for (i=0;i<contacts.length;i++) {
    if (contacts[i].uuid == self.getUUID()) {
      i=contacts.length;
      return true;
    } else {
      return false;
    }
  }
}

function createGroup(player, manager, groupName) {
  var groups = entity.getWornChestplate().nbt().getTagList("Groupss");
  var groupNum = groups.tagCount();
  var group = groups.getCompoundTag(groupNum);
  
  //Set group name
}

//Make group message function and related stuff

//Add something that will check other players contact list so that message appears under the name the receiving player has set for that uuid

[
  {name: "Aidan", uuid: "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"},
  {groupName: "Star Force Guild", groupMembers: [
    "a3d071d4-c912-41e1-a6b2-c0de99ea4a84",
    "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"
  ]}
]