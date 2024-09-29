//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

var suits = [
  {"suit": "skyhighheroes:aegon_stelar", "id": "411ed8b9-b246-449c-b941-02790d0971dd"},
  {"suit": "skyhighheroes:aidan_stelar", "id": "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"},
  {"suit": "skyhighheroes:cash_stelar", "id": "2389f9cd-351e-4d96-a277-847a24fd9048"},
  {"suit": "skyhighheroes:chase_stelar", "id": "4da600b8-582a-4fc3-ac2e-ada03d3e478c"},
  {"suit": "skyhighheroes:ace_stelar", "id": "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0"},
  {"suit": "skyhighheroes:grand_stelar", "id": "d699ffcd-8177-4325-91ac-3e815e87bb95"},
  {"suit": "skyhighheroes:lucas_stelar", "id": "c4bc5db6-3cf6-44fe-8427-304a7b211bc4"},
  {"suit": "skyhighheroes:geo_stelar"},
  {"suit": "skyhighheroes:geo_stelar/subaru"},
  {"suit": "skyhighheroes:pegasus_transer"},
  {"suit": "skyhighheroes:leo_transer"},
  {"suit": "skyhighheroes:dragon_transer"}
];

var ocs = [
  {"suit": "skyhighheroes:aegon_stelar", "id": "411ed8b9-b246-449c-b941-02790d0971dd"},
  {"suit": "skyhighheroes:aidan_stelar", "id": "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"},
  {"suit": "skyhighheroes:cash_stelar", "id": "2389f9cd-351e-4d96-a277-847a24fd9048"},
  {"suit": "skyhighheroes:chase_stelar", "id": "4da600b8-582a-4fc3-ac2e-ada03d3e478c"},
  {"suit": "skyhighheroes:ace_stelar", "id": "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0"},
  {"suit": "skyhighheroes:grand_stelar", "id": "d699ffcd-8177-4325-91ac-3e815e87bb95"},
  {"suit": "skyhighheroes:lucas_stelar", "id": "c4bc5db6-3cf6-44fe-8427-304a7b211bc4"},
]
/**
 * Checks if an entity is wearing a transer
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is wearing a transer
 **/
function isWearingTranser(entity) {
  var wearingTranser = false
  suits.forEach(entry => {
    if (entity.isWearingFullSuit() && entity.getWornChestplate().nbt().getString("HeroType") == entry.suit && (typeof entry.id !== "undefined") ? entity.getUUID() == entry.id : true) {
      wearingTranser = true;
    };
  });
  return wearingTranser;
};
/**
 * Checks if an entity is wearing an OC
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is wearing OC
 **/
function isWearingOC(entity) {
  var wearingOC = false
  ocs.forEach(entry => {
    if (entity.isWearingFullSuit() && entity.getWornChestplate().nbt().getString("HeroType") == entry.suit && entity.getUUID() == entry.id) {
      wearingOC = true;
    };
  });
  return wearingOC;
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
  chatMessage(player, "TC> System> " + message);
};

/**
 * Sends message in group format
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} groupName - Name of group
 * @param {string} sender - Name of entity sending message
 * @param {string} message - Message content
 **/
function groupMessage(player, groupName, sender, message) {
  chatMessage(player, "TC [" + groupName + "]>" + sender + "> " + message);
};
/**
 * Sends message in normal format
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} sender - Entity sending message
 * @param {string} message - Messsage content
 **/
function playerMessage(player, sender, message) {
  chatMessage(player, "TC> " + sender + "> " + message);
};
/**
 * Sends message in BrotherBand format
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} sender - Entity sending message
 * @param {string} message - Messsage content
 **/
function brotherBandMessage(player, sender, message) {
  chatMessage(player, "TC [BrotherBand]> " + sender + "> " + message);
};

//The point of BrotherBand is to allow communication at much farther ranges and to give buffs when you are near each other
/**
 * Forms BrotherBand
 * @param {JSPlayer} player - Player forming BrotherBand
 * @param {JSDataManager} manager - Required
 * @param {string} username - Username of player to form BrotherBand with
 **/
function formBrotherBand(player, manager, username) {
  var foundPlayer = false;
  systemMessage(player, "Scanning for " + username + " to form BrotherBand with!");
  var entities = player.world().getEntitiesInRangeOf(player.pos(), 2);
  entities.forEach(entity => {
    if (entity.is("PLAYER") && entity.getName() == username && isWearingTranser(entity, player) && player.canSee(entity)) {
      foundPlayer = true;
    };
  });
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
      var index = getStringArray(brotherBand).indexOf(username);
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
  if (player.getName() != username) {
    if (!player.getWornChestplate().nbt().hasKey("contacts")) {
      var contacts = manager.newTagList();
      manager.appendString(contacts, username);
      manager.setTagList(player.getWornChestplate().nbt(), "contacts", contacts);
      systemMessage(player, "Successfully added " + username + " as a contact");
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
  } else {
    systemMessage(player, "You can not add yourself as a contact!");
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
      if (player.getWornChestplate().nbt().hasKey("contacts")) {
        if (player.getWornChestplate().nbt().getStringList("contacts").tagCount() > 0) {
          var contactsList = getStringArray(player.getWornChestplate().nbt().getStringList("contacts"));
          if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
            manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
          };
          var contact = contactsList[player.getData("skyhighheroes:dyn/active_chat")];
          systemMessage(player, "You are now messaging " + contact + "!");
        } else {
          systemMessage(player, "You have not set up any contacts yet!");
        };
      } else {
        systemMessage(player, "You have not set up any contacts yet!");
      };
      break;
    case 1:
      if (player.getWornChestplate().nbt().hasKey("groups")) {
        if (player.getWornChestplate().nbt().getTagList().tagCount() > 0) {
          var groupList = getGroupArray(player);
          if (player.getData("skyhighheroes:dyn/active_chat") > groupList.length) {
            manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
          };
          systemMessage(player, player.getData("skyhighheroes:dyn/active_chat"));
          systemMessage(player, "You are now messaging " + groupList[player.getData("skyhighheroes:dyn/active_chat")] + "!");
          if (typeof groupList[player.getData("skyhighheroes:dyn/active_chat")] === "string") {
            manager.setData(player, "skyhighheroes:dyn/group_name", groupList[player.getData("skyhighheroes:dyn/active_chat")]);
          };
        } else {
        systemMessage(player, "You have not set up any groups yet!");
        };
      } else {
        systemMessage(player, "You have not set up any groups yet!");
      };
      break;
    case 2:
      if (player.getWornChestplate().nbt().hasKey("brotherBand")) {
        if (player.getWornChestplate().nbt().getStringList("brotherBand").tagCount() > 0) {
          var brotherBandList = getStringArray(player.getWornChestplate().nbt().getStringList("brotherBand"));
          if (player.getData("skyhighheroes:dyn/active_chat") > brotherBandList.length) {
            manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
          };
          systemMessage(player, player.getData("skyhighheroes:dyn/active_chat"));
          systemMessage(player, "You are now messaging " + brotherBandList[player.getData("skyhighheroes:dyn/active_chat")] + "!");
        } else {
          systemMessage(player, "You have not set up any Brothers yet!");
        };
      } else {
        systemMessage(player, "You have not set up any Brothers yet!");
      };
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
function commandMode(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/command_mode", !player.getData("skyhighheroes:dyn/command_mode"));
  if (player.getData("skyhighheroes:dyn/command_mode")) {
    systemMessage(player, "Now in command mode!");
    switch (player.getData("skyhighheroes:dyn/chat_mode")) {
      case 0:
        systemMessage(player, "Contact commands:");
        systemMessage(player, "add <name> - Adds contact by name");
        systemMessage(player, "remove <name> - Removes contact by name");
        systemMessage(player, "list - Lists contacts");
        break;
      case 1:
        systemMessage(player, "Group commands:")
        systemMessage(player, "add <groupName> - Creates group by name");
        systemMessage(player, "rem <groupName> - Removes group by name");
        systemMessage(player, "list - Lists groups");
        systemMessage(player, "Below commands apply to the currently selected group!")
        systemMessage(player, "addMem <name> - Adds member to currently selected group");
        systemMessage(player, "remMem <name> - Removes member from currently selected group");
        systemMessage(player, "listMem - Lists members in currently selected group");
        break;
      case 2:
        systemMessage(player, "BrotherBand commands:")
        systemMessage(player, "form <name> - Adds Brother to your BrotherBand by name");
        systemMessage(player, "cut <name> - Removes Brother from your BrotherBand by name");
        systemMessage(player, "list - Lists Brothers");
        break;
    };
  };
  if (!player.getData("skyhighheroes:dyn/command_mode")) {
    switch (player.getData("skyhighheroes:dyn/chat_mode")) {
      case 0:
        if (player.getWornChestplate().nbt().hasKey("contacts")) {
          if (player.getWornChestplate().nbt().getStringList("contacts").tagCount() > 0) {
            var contactsList = getStringArray(player.getWornChestplate().nbt().getStringList("contacts"));
            if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
            };
            var contact = contactsList[player.getData("skyhighheroes:dyn/active_chat")];
            systemMessage(player, "You are now messaging " + contact + "!");
          } else {
            systemMessage(player, "You have not set up any contacts yet!");
          };
        } else {
          systemMessage(player, "You have not set up any contacts yet!");
        };
        break;
      case 1:
        if (player.getWornChestplate().nbt().hasKey("groups")) {
          if (player.getWornChestplate().nbt().getTagList().tagCount() > 0) {
            var groupList = getGroupArray(player);
            if (player.getData("skyhighheroes:dyn/active_chat") > groupList.length) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
            };
            systemMessage(player, player.getData("skyhighheroes:dyn/active_chat"));
            systemMessage(player, "You are now messaging " + groupList[player.getData("skyhighheroes:dyn/active_chat")] + "!");
            if (typeof groupList[player.getData("skyhighheroes:dyn/active_chat")] === "string") {
              manager.setData(player, "skyhighheroes:dyn/group_name", groupList[player.getData("skyhighheroes:dyn/active_chat")]);
            };
          } else {
          systemMessage(player, "You have not set up any groups yet!");
          };
        } else {
          systemMessage(player, "You have not set up any groups yet!");
        };
        break;
      case 2:
        if (player.getWornChestplate().nbt().hasKey("brotherBand")) {
          if (player.getWornChestplate().nbt().getStringList("brotherBand").tagCount() > 0) {
            var brotherBandList = getStringArray(player.getWornChestplate().nbt().getStringList("brotherBand"));
            if (player.getData("skyhighheroes:dyn/active_chat") > brotherBandList.length) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
            };
            systemMessage(player, player.getData("skyhighheroes:dyn/active_chat"));
            systemMessage(player, "You are now messaging " + brotherBandList[player.getData("skyhighheroes:dyn/active_chat")] + "!");
          } else {
            systemMessage(player, "You have not set up any Brothers yet!");
          };
        } else {
          systemMessage(player, "You have not set up any Brothers yet!");
        };
        break;
    };
    systemMessage(player, "Now in messaging mode!");
  };
  return true;
};

/**
 * Adds keybinds for transer chat for OCs
 * @param {JSHero} hero - Required
 **/
function keyBindsOC(hero) {
  hero.addKeyBindFunc("COMMAND_MODE", (player, manager) => commandMode(player, manager), "Toggle command mode", 4);
  hero.addKeyBind("SHAPE_SHIFT", "Send message/Enter command", 4);
  hero.addKeyBind("ENTER_COMMAND", "Enter command", 4);
  hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
  hero.addKeyBindFunc("CYCLE_CHAT_MODES", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 3);
  hero.addKeyBindFunc("CYCLE_CHATS_EM", (player, manager) => cycleChats(player, manager), "Cycle chats", 2);
  hero.addKeyBindFunc("CYCLE_CHAT_MODES_EM", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 2);
  hero.addKeyBind("SEND_MESSAGE", "Send message", 4);
};
/**
 * Adds keybinds for transer chat for characters
 * @param {JSHero} hero - Required
 **/
function keyBindsMM(hero) {
  hero.addKeyBindFunc("COMMAND_MODE", (player, manager) => commandMode(player, manager), "Toggle command mode", 4);
  hero.addKeyBind("SHAPE_SHIFT", "Send message/Enter command", 4);
  hero.addKeyBind("ENTER_COMMAND", "Enter command", 4);
  hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
  hero.addKeyBindFunc("CYCLE_CHAT_MODES", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 3);
  hero.addKeyBindFunc("CYCLE_CHATS_EM", (player, manager) => cycleChats(player, manager), "Cycle chats", 2);
  hero.addKeyBindFunc("CYCLE_CHAT_MODES_EM", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 2);
  hero.addKeyBind("SEND_MESSAGE", "Send message", 4);
};
/**
 * Adds keybinds for transer chat for basic transers
 * @param {JSHero} hero - Required
 **/
function keyBinds(hero) {
  hero.addKeyBindFunc("COMMAND_MODE", (player, manager) => commandMode(player, manager), "Toggle command mode", 4);
  hero.addKeyBind("SEND_MESSAGE", "Send message", 4);
  hero.addKeyBind("ENTER_COMMAND", "Enter command", 4);
  hero.addKeyBind("SHAPE_SHIFT", "Send message/Enter command", 4);
  hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
  hero.addKeyBindFunc("CYCLE_CHAT_MODES", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 3);
};

/**
 * Is the setKeyBind stuff for basic transers
 * @param {JSEntity} entity - Required
 * @param {keyBind} keyBind - Required
 **/
function setKeyBind(entity, keyBind) {
  switch (keyBind) {
    case "CYCLE_CHATS":
      return !entity.isSneaking();
    case "CYCLE_CHAT_MODES":
      return entity.isSneaking();
    case "SHAPE_SHIFT":
      return !entity.isSneaking();
    case "COMMAND_MODE":
      return entity.isSneaking();
    case "ENTER_COMMAND":
      return !entity.isSneaking() && entity.getData("skyhighheroes:dyn/command_mode");
    case "SEND_MESSAGE":
      return !entity.isSneaking() && !entity.getData("skyhighheroes:dyn/command_mode");
    default:
      return true;
  };
};

/**
 * Tick handler for OCs
 * @param {JSEntity} entity - Required
 * @param {JSDataManager} manager - Required
 * @param {string} transformed - EM Wave Being OC name
 * @param {string} untransformed - Human OC name
 * @param {string} color - Color
 **/
function tickHandlerOC(entity, manager, transformed, untransformed, color) {
  if (typeof entity.getData("fiskheroes:disguise") === "string" && entity.getData("fiskheroes:disguise") != transformed) {
    manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
      manager.setData(entity, "fiskheroes:disguise", transformed);
    } else {
      manager.setData(entity, "fiskheroes:disguise", null);
    };
    manager.setData(entity, "fiskheroes:shape_shifting_to", null);
    manager.setData(entity, "fiskheroes:shape_shifting_from", null);
    manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
    commandHandler(entity, manager);
    messageHandlerOC(entity, transformed, untransformed, color);
  };
};

/**
 * Tick handler for characters
 * @param {JSEntity} entity - Required
 * @param {JSDataManager} manager - Required
 **/
function tickHandlerMM(entity, manager) {
  if (typeof entity.getData("fiskheroes:disguise") === "string" && entity.getData("fiskheroes:disguise") != "Mega Man") {
    manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
      manager.setData(entity, "fiskheroes:disguise", "Mega Man");
    } else {
      manager.setData(entity, "fiskheroes:disguise", null);
    };
    manager.setData(entity, "fiskheroes:shape_shifting_to", null);
    manager.setData(entity, "fiskheroes:shape_shifting_from", null);
    manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
    commandHandler(entity, manager);
    messageHandler(entity);
  };
};

/**
 * Tick handler for normal transers
 * @param {JSEntity} entity - Required
 * @param {JSDataManager} manager - Required
 **/
function tickHandler(entity, manager) {
  if (typeof entity.getData("fiskheroes:disguise") === "string") {
    manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
    manager.setData(entity, "fiskheroes:disguise", null);
    manager.setData(entity, "fiskheroes:shape_shifting_to", null);
    manager.setData(entity, "fiskheroes:shape_shifting_from", null);
    manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
    commandHandler(entity, manager);
    messageHandler(entity);
  };
};

/**
 * Message handler for normal transers
 * @param {JSEntity} entity - Required
 * @param {JSDataManager} manager - Required
 **/
function messageHandler(entity) {
  if (!entity.getData("skyhighheroes:dyn/command_mode")) {
    var message = entity.getData("skyhighheroes:dyn/entry");
    var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
    //Check if inputed username matches
    //Then check if entity is wearing transer
    //Then check if contacts/brotherband/groups are same
    //Finally send message
    switch (entity.getData("skyhighheroes:dyn/chat_mode")) {
      case 0:
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
              playerMessage(foundPlayer, entity.getName(), message);
              playerMessage(entity, entity.getName(), message);
            };
          };
        };
        break;
      case 1:
        var group = entity.getWornChestplate().nbt().getTagList("groups").getCompoundTag(activeChat);
        var groupName = group.getString("groupName");
        var members = getStringArray(group.getStringList("members"));
        var foundPlayers = [];
        var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 30);
        entities.forEach(player => {
          if (player.is("PLAYER") && members.indexOf(player.getName()) > -1) {
            foundPlayers.push(player);
          };
        });
        if (foundPlayer != null) {
          foundPlayers.forEach(player => {
            if (isWearingTranser(player)) {
              if (hasContact(entity, player)) {
                groupMessage(player, groupName, entity.getName(), message);
              };
            };
          })
        };
        break;
      case 2:
        var reciever = entity.getWornChestplate().nbt().getStringList("brotherBand").getString(activeChat);
        var foundPlayer = null;
        var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 60);
        entities.forEach(player => {
          if (player.is("PLAYER") && player.getName() == reciever) {
            foundPlayer = player;
          };
        });
        if (foundPlayer != null) {
          if (isWearingTranser(foundPlayer)) {
            if (hasBrother(entity, foundPlayer)) {
              brotherBandMessage(entity, entity.getName(), message);
              brotherBandMessage(foundPlayer, entity.getName(), message);
            };
          };
        };
        break;
    };
  };
};

/**
 * Message handler for OCs
 * @param {JSEntity} entity - Required
 * @param {string} transformed - EM Wave Being OC name
 * @param {string} untransformed - Human OC name
 * @param {string} color - Color
 **/
function messageHandlerOC(entity, transformed, untransformed, color) {
  if (!entity.getData("skyhighheroes:dyn/command_mode")) {
    var message = entity.getData("skyhighheroes:dyn/entry");
    var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
    //Check if inputed username matches
    //Then check if entity is wearing transer
    //Then check if contacts/brotherband/groups are same
    //Finally send message
    switch (entity.getData("skyhighheroes:dyn/chat_mode")) {
      case 0:
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
              if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && foundPlayer.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                playerMessage(foundPlayer, color+transformed+"\u00A7r", message);
                playerMessage(entity, color+transformed+"\u00A7r", message);
              } else {
                playerMessage(foundPlayer, untransformed, message);
                playerMessage(entity, untransformed, message);
              };
            };
          };
        };
        break;
      case 1:
        var group = entity.getWornChestplate().nbt().getTagList("groups").getCompoundTag(activeChat);
        var groupName = group.getString("groupName");
        var members = getStringArray(group.getStringList("members"));
        var foundPlayers = [];
        var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 30);
        entities.forEach(player => {
          if (player.is("PLAYER") && members.indexOf(player.getName()) > -1) {
            foundPlayers.push(player);
          };
        });
        if (foundPlayer != null) {
          foundPlayers.forEach(player => {
            if (isWearingTranser(player)) {
              if (hasContact(entity, player)) {
                if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && player.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                  groupMessage(player, groupName, color+transformed+"\u00A7r", message);
                } else {
                  groupMessage(player, groupName, untransformed, message);
                };
              };
            };
          });
          if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
            groupMessage(entity, groupName, color+transformed+"\u00A7r", message);
          } else {
            groupMessage(entity, groupName, untransformed, message);
          };
        };
        break;
      case 2:
        var reciever = entity.getWornChestplate().nbt().getStringList("brotherBand").getString(activeChat);
        var foundPlayer = null;
        var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 60);
        entities.forEach(player => {
          if (player.is("PLAYER") && player.getName() == reciever) {
            foundPlayer = player;
          };
        });
        if (foundPlayer != null) {
          if (isWearingTranser(foundPlayer)) {
            if (hasBrother(entity, foundPlayer)) {
              if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && foundPlayer.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                brotherBandMessage(foundPlayer, color+transformed+"\u00A7r", message);
                brotherBandMessage(entity, color+transformed+"\u00A7r", message);
              } else {
                brotherBandMessage(foundPlayer, untransformed, message);
                brotherBandMessage(entity, untransformed, message);
              };
            };
          };
        };
        break;
    };
  };
};

/**
 * Actually handles the commands
 * @param {JSEntity} entity - Required
 * @param {JSDataManager} manager - Required
 **/
function commandHandler(entity, manager) {
  if (entity.getData("skyhighheroes:dyn/command_mode")) {
    var chatMode = entity.getData("skyhighheroes:dyn/chat_mode");
    var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
    if (chatMode == 0) {
      if (args.length == 0) {
        systemMessage(entity, "Contact commands:");
        systemMessage(entity, "add <name> - Adds contact by name");
        systemMessage(entity, "rem <name> - Removes contact by name");
        systemMessage(entity, "list - Lists contacts");
      } else if (args.length < 3) {
        switch(args[0]) {
          case "add":
            (args.length == 2) ? addContact(entity, manager, args[1]) : systemMessage(entity, "add <name>");
            break;
          case "rem":
            (args.length == 2) ? removeContact(entity, manager, args[1]) : systemMessage(entity, "rem <name>");
            break;
          case "list":
            listContacts(entity);
            break;
          default:
            systemMessage(entity, "Invalid contact command!");
            systemMessage(entity, "Contact commands:");
            systemMessage(entity, "add <name> - Adds contact by name");
            systemMessage(entity, "remove <name> - Removes contact by name");
            systemMessage(entity, "list - Lists contacts");
            break;
        };
      } else {
        systemMessage(entity, "Too many arguemnts!");
      };
    } else if (chatMode == 1) {
      if (args.length == 0) {
        systemMessage(entity, "Group commands:")
        systemMessage(entity, "add <groupName> - Creates group by name");
        systemMessage(entity, "rem <groupName> - Removes group by name");
        systemMessage(entity, "list - Lists groups");
        systemMessage(entity, "Below commands apply to the currently selected group!")
        systemMessage(entity, "addMem <name> - Adds member to currently selected group");
        systemMessage(entity, "remMem <name> - Removes member from currently selected group");
        systemMessage(entity, "listMem - Lists members in currently selected group");
      } else if (args.length < 3) {
        switch (args[0]) {
          case "add":
            (args.length == 2) ? addGroup(entity, manager, args[1]) : systemMessage(entity, "add <groupName>");
            break;
          case "rem":
            (args.length == 2) ? removeGroup(entity, manager, args[1]) : systemMessage(entity, "rem <groupName>");
            break;
          case "list":
            listGroups(entity, manager);
            break;
          case "addMem":
            (args.length == 2) ? addGroupMember(entity, manager, entity.getData("skyhighheroes:dyn/group_name"), args[1]) : systemMessage(entity, "addMem <name>");
            break;
          case "remMem":
            (args.length == 2) ? removeGroupMember(entity, manager, entity.getData("skyhighheroes:dyn/group_name"), args[1]) : systemMessage(entity, "remMem <name>");
            break;
          case "listMem":
            listGroupMembers(entity, entity.getData("skyhighheroes:dyn/group_name"));
            break;
          default:
            systemMessage(entity, "Invalid group command!");
            systemMessage(entity, "Group commands:")
            systemMessage(entity, "add <groupName> - Creates group by name");
            systemMessage(entity, "rem <groupName> - Removes group by name");
            systemMessage(entity, "list - Lists groups");
            systemMessage(entity, "Below commands apply to the currently selected group!")
            systemMessage(entity, "addMem <name> - Adds member to currently selected group");
            systemMessage(entity, "remMem <name> - Removes member from currently selected group");
            systemMessage(entity, "listMem - Lists members in currently selected group");
            break;
        };
      } else {
        systemMessage(entity, "Too many arguemnts!");
      };
    } else if (chatMode == 2) {
      if (args.length == 0) {
        systemMessage(entity, "BrotherBand commands:")
        systemMessage(entity, "form <name> - Adds Brother to your BrotherBand by name");
        systemMessage(entity, "cut <name> - Removes Brother from your BrotherBand by name");
        systemMessage(entity, "list - Lists Brothers");
      } else if (args.length < 3) {
        switch (args[0]) {
          case "form":
            (args.length == 2) ? formBrotherBand(entity, manager, args[1]) : systemMessage(entity, "form <name>");
            break;
          case "cut":
            (args.length == 2) ? cutBrotherBand(entity, manager, args[1]) : systemMessage(entity, "cut <name>");
            break;
          case "list":
            listBrotherBands(entity);
            break;
          default:
            systemMessage(entity, "Invalid BrotherBand command!");
            systemMessage(entity, "BrotherBand commands:")
            systemMessage(entity, "form <name> - Adds Brother to your BrotherBand by name");
            systemMessage(entity, "cut <name> - Removes Brother from your BrotherBand by name");
            systemMessage(entity, "list - Lists Brothers");
            break;
        };
      } else {
        systemMessage(entity, "Too many arguemnts!");
      };
    };
  };
};