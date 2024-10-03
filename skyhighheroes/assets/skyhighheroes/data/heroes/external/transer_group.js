/**
 * Adds group
 * @param {JSEntity} entity - Required
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
      systemMessage(entity, "<e>Duplicate group name <eh>" + groupName + "<e>!");
    } else {
      systemMessage(entity, "<s>Group created with name: <sh>" + groupName + "<s>!");
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
  systemMessage(player, "<n>You are in <nh>" + groups.length + ((groups.length > 1)?"<n> groups!": "<n> group!"));
  groups.forEach(entry => {
    systemMessage(player, "<nh>" + entry.groupName + "<n> (<nh>" + entry.memberCount + ((entry.memberCount > 1)?"<n> members)": "<n> member)"))
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
    systemMessage(player, "<e>Unable to find group with name <eh>" + groupName + "<e> to remove!");
  } else {
    systemMessage(player, "<e>Removed group <eh>" + groupName + "<e>!");
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
    systemMessage(player, "<e>You have not set up any groups yet!");
  } else if (groupIndex < 0) {
    systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
  } else if (contactIndex < 0) {
    systemMessage(player, "<eh>" + username + "<e> is not added as a contact!")
  } else if (memberIndex > -1) {
    systemMessage(player, "<e>Member <eh>" + username + "<e> is already in group <eh>" + groupName + "<e>!");
  } else {
    systemMessage(player, "<s>Successfully added <sh>" + username  + "<s> to group <sh>" + groupName + "<s>!");
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
    systemMessage(player, "<e>You have not set up any groups yet!");
  } else if (groupIndex < 0) {
    systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
  } else if (memberIndex < 0) {
    systemMessage(player, "<eh>" + username + "<e> is not in group <eh>" + groupName + "<e>!");
  } else {
    systemMessage(player, "<s>Successfully removed <sh>" + username  + "<s> from group <sh>" + groupName + "<s>!");
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
    systemMessage(player, "<e>You do not have any groups!");
  } else if (groupIndex < 0) {
    systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
  } else {
    systemMessage(player, "<s>Members in <sh>" + groupName + "<s>:")
    members.forEach(entry => {
      systemMessage(player, "<sh>" + entry);
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