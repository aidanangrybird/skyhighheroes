function initModule(system) {
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
    if (!entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt().hasKey("groups")) {
      var groups = manager.newTagList();
      manager.appendTag(groups, group);
      manager.setTagList(entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt(), "groups", groups);
      system.systemMessage(entity, "<s>Group created with name: <sh>" + groupName + "<s>!");
    } else {
      var groups = entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups");
      var groupIndex = getGroupArray(entity).indexOf(groupName);
      if (groupIndex > -1) {
        system.systemMessage(entity, "<e>Duplicate group name <eh>" + groupName + "<e>!");
      } else {
        system.systemMessage(entity, "<s>Group created with name: <sh>" + groupName + "<s>!");
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
    system.systemMessage(player, "<n>You are in <nh>" + groups.length + ((groups.length == 1) ? "<n> group!" : "<n> groups!"));
    groups.forEach(entry => {
      system.systemMessage(player, "<nh>" + entry.groupName + "<n> (<nh>" + entry.memberCount + ((entry.memberCount > 1) ? "<n> members)" : "<n> member)"))
    });
  };
  /**
   * Remove group by group name
   * @param {JSPlayer} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} groupName - Name of group
   **/
  function removeGroup(player, manager, groupName) {
    var groups = player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups");
    var groupIndex = getGroupArray(player).indexOf(groupName);
    if (groupIndex < 0) {
      system.systemMessage(player, "<e>Unable to find group with name <eh>" + groupName + "<e> to remove!");
    } else {
      system.systemMessage(player, "<e>Removed group <eh>" + groupName + "<e>!");
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
    var groups = player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups");
    var groupIndex = getGroupArray(player).indexOf(groupName);
    var members = groups.getCompoundTag(groupIndex).getStringList("members");
    var memberIndex = system.getStringArray(members).indexOf(username);
    var contacts = player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("contacts");
    var contactIndex = system.getStringArray(contacts).indexOf(username);
    if (!player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().hasKey("groups")) {
      system.systemMessage(player, "<e>You have not set up any groups yet!");
    } else if (groupIndex < 0) {
      system.systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else if (contactIndex < 0) {
      system.systemMessage(player, "<eh>" + username + "<e> is not added as a contact!")
    } else if (memberIndex > -1) {
      system.systemMessage(player, "<e>Member <eh>" + username + "<e> is already in group <eh>" + groupName + "<e>!");
    } else {
      system.systemMessage(player, "<s>Successfully added <sh>" + username  + "<s> to group <sh>" + groupName + "<s>!");
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
    var groups = player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups");
    var groupIndex = getGroupArray(player).indexOf(groupName);
    var members = groups.getCompoundTag(groupIndex).getStringList("members");
    var memberIndex = system.getStringArray(members).indexOf(username);
    if (!player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().hasKey("groups")) {
      system.systemMessage(player, "<e>You have not set up any groups yet!");
    } else if (groupIndex < 0) {
      system.systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else if (memberIndex < 0) {
      system.systemMessage(player, "<eh>" + username + "<e> is not in group <eh>" + groupName + "<e>!");
    } else {
      system.systemMessage(player, "<s>Successfully removed <sh>" + username  + "<s> from group <sh>" + groupName + "<s>!");
      manager.removeTag(members, memberIndex);
    };
  };
  /**
   * Lists members of group
   * @param {JSPlayer} player - Required
   * @param {integer} groupName - Name of group to add member to
   **/
  function listGroupMembers(player, groupName) {
    var groups = player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups");
    var groupIndex = getGroupArray(player).indexOf(groupName);
    var members = system.getStringArray(groups.getCompoundTag(groupIndex).getStringList("members"));
    if (!player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().hasKey("groups")) {
      system.systemMessage(player, "<e>You do not have any groups!");
    } else if (groupIndex < 0) {
      system.systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else {
      system.systemMessage(player, "<s>Members in <sh>" + groupName + "<s>:")
      members.forEach(entry => {
        system.systemMessage(player, "<sh>" + entry);
      });
    };
  };
  /**
   * Turns NBT String List into an array for easier use in code
   * @param {JSEntity} entity - Entity to create group array from
   * @returns Array of group names
   **/
  function getGroupArray(entity) {
    var groupList = entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups");
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
    var groupList = entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups");
    var count = groupList.tagCount();
    var result = [];
    for (i=0;i<count;i++) {
      var group = groupList.getCompoundTag(i);
      var entry = {
        "groupName": group.getString("groupName"),
        "memberCount": group.getStringList("members").tagCount(),
      };
      result.push(entry);
    };
    return result;
  };
  return {
    name: "groups",
    type: 1,
    command: "g",
    helpMessage: "<n>!g <nh>-<n> Groups",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch (arguments[1]) {
          case "add":
            (arguments.length == 3) ? addGroup(entity, manager, arguments[2]) : system.systemMessage(entity, "<n>!g add <nh><name>");
            break;
          case "rem":
            (arguments.length == 3) ? removeGroup(entity, manager, arguments[2]) : system.systemMessage(entity, "<n>!g rem <nh><name>");
            break;
          case "list":
            listGroups(entity);
            break;
          case "addMem":
            (arguments.length == 3) ? addGroupMember(entity, manager, entity.getData("skyhighheroes:dyn/group_name"), arguments[2]) : system.systemMessage(entity, "<n>!g addMem <nh><name>");
            break;
          case "remMem":
            (arguments.length == 3) ? removeGroupMember(entity, manager, entity.getData("skyhighheroes:dyn/group_name"), arguments[2]) : system.systemMessage(entity, "<n>!g remMem <nh><name>");
            break;
          case "listMem":
            listGroupMembers(entity, entity.getData("skyhighheroes:dyn/group_name"));
            break;
          case "help":
            system.systemMessage(entity, "Group commands:")
            system.systemMessage(entity, "<n>!g add <nh><name><n> <nh>-<n> Creates group by name");
            system.systemMessage(entity, "<n>!g rem <nh><name><n> <nh>-<n> Removes group by name");
            system.systemMessage(entity, "<n>!g list <nh>-<n> Lists groups");
            system.systemMessage(entity, "Below commands apply to the currently selected group!")
            system.systemMessage(entity, "<n>!g addMem <nh><name><n> <nh>-<n> Adds member to currently selected group");
            system.systemMessage(entity, "<n>!g remMem <nh><name><n> <nh>-<n> Removes member from currently selected group");
            system.systemMessage(entity, "<n>!g listMem <nh>-<n> Lists members in currently selected group");
            system.systemMessage(entity, "<n>!g help <nh>-<n> Shows this list");
            break;
          default:
            system.systemMessage(entity, "<e>Unknown group command! Try <eh>!g help<e> for a list of commands!");
            break;
        };
      } else {
        system.systemMessage(entity, "<e>Unknown group command! Try <eh>!g help<e> for a list of commands!");
      };
    },
  };
};
