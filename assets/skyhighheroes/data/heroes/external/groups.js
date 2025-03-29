function initModule(system) {
  /**
   * Adds group
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   * @param {string} groupName - Name of group
   **/
  function addGroup(entity, manager, groupName) {
    var nbt = null;
    if (entity.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = entity.getWornHelmet().nbt();
    };
    if (entity.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = entity.getWornChestplate().nbt();
    };
    if (entity.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (entity.getWornBoots().nbt().hasKey("computerID")) {
      nbt = entity.getWornBoots().nbt();
    };
    if (!nbt.hasKey("groups")) {
      var newGroupsList = manager.newTagList();
      manager.setTagList(nbt, "groups", newGroupsList);
    };
    var group = manager.newCompoundTag();
    var members = manager.newTagList();
    manager.appendString(members, entity.getName());
    manager.setString(group, "groupName", groupName);
    manager.setTagList(group, "members", members);
    var groups = nbt.getTagList("groups");
    var groupIndex = getGroupArray(entity, manager).indexOf(groupName);
    if (groupIndex > -1) {
      system.moduleMessage(this, entity, "<e>Duplicate group name <eh>" + groupName + "<e>!");
    } else {
      system.moduleMessage(this, entity, "<s>Group created with name: <sh>" + groupName + "<s>!");
      manager.appendTag(groups, group);
    };
  };
  /**
   * List groups
   * @param {JSEntity} player - Required
   **/
  function listGroups(player, manager) {
    if (!nbt.hasKey("groups")) {
      var newGroupsList = manager.newTagList();
      manager.setTagList(nbt, "groups", newGroupsList);
    };
    var groups = getGroupArrayMembers(player, manager);
    system.moduleMessage(this, player, "<n>You are in <nh>" + groups.length + ((groups.length == 1) ? "<n> group!" : "<n> groups!"));
    groups.forEach(entry => {
      system.moduleMessage(this, player, "<nh>" + entry.groupName + "<n> (<nh>" + entry.memberCount + ((entry.memberCount > 1) ? "<n> members)" : "<n> member)"))
    });
  };
  /**
   * Remove group by group name
   * @param {JSPlayer} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} groupName - Name of group
   **/
  function removeGroup(player, manager, groupName) {
    var nbt = null;
    if (player.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (player.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = player.getWornChestplate().nbt();
    };
    if (player.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (player.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    if (!nbt.hasKey("groups")) {
      var newGroupsList = manager.newTagList();
      manager.setTagList(nbt, "groups", newGroupsList);
    };
    var groups = nbt.getTagList("groups");
    var groupIndex = getGroupArray(player).indexOf(groupName);
    if (groupIndex < 0) {
      system.moduleMessage(this, player, "<e>Unable to find group with name <eh>" + groupName + "<e> to remove!");
    } else {
      system.moduleMessage(this, player, "<e>Removed group <eh>" + groupName + "<e>!");
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
    var nbt = null;
    if (player.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (player.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = player.getWornChestplate().nbt();
    };
    if (player.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (player.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    var groups = nbt.getTagList("groups");
    var groupIndex = getGroupArray(player).indexOf(groupName);
    var members = groups.getCompoundTag(groupIndex).getStringList("members");
    var memberIndex = system.getStringArray(members).indexOf(username);
    var contacts = nbt.getTagList("contacts");
    var contactIndex = system.getStringArray(contacts).indexOf(username);
    if (!nbt.hasKey("groups")) {
      system.moduleMessage(this, player, "<e>You have not set up any groups yet!");
    } else if (groupIndex < 0) {
      system.moduleMessage(this, player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else if (contactIndex < 0) {
      system.moduleMessage(this, player, "<eh>" + username + "<e> is not added as a contact!")
    } else if (memberIndex > -1) {
      system.moduleMessage(this, player, "<e>Member <eh>" + username + "<e> is already in group <eh>" + groupName + "<e>!");
    } else {
      system.moduleMessage(this, player, "<s>Successfully added <sh>" + username  + "<s> to group <sh>" + groupName + "<s>!");
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
    var nbt = null;
    if (player.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (player.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = player.getWornChestplate().nbt();
    };
    if (player.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (player.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    if (!nbt.hasKey("groups")) {
      var newGroupsList = manager.newTagList();
      manager.setTagList(nbt, "groups", newGroupsList);
    };
    var groups = nbt.getTagList("groups");
    var groupIndex = getGroupArray(player).indexOf(groupName);
    var members = groups.getCompoundTag(groupIndex).getStringList("members");
    var memberIndex = system.getStringArray(members).indexOf(username);
    if (groupIndex < 0) {
      system.moduleMessage(this, player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else if (memberIndex < 0) {
      system.moduleMessage(this, player, "<eh>" + username + "<e> is not in group <eh>" + groupName + "<e>!");
    } else {
      system.moduleMessage(this, player, "<s>Successfully removed <sh>" + username  + "<s> from group <sh>" + groupName + "<s>!");
      manager.removeTag(members, memberIndex);
    };
  };
  /**
   * Lists members of group
   * @param {JSPlayer} player - Required
   * @param {integer} groupName - Name of group to add member to
   **/
  function listGroupMembers(player, manager, groupName) {
    var nbt = null;
    if (player.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (player.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = player.getWornChestplate().nbt();
    };
    if (player.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (player.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    if (!nbt.hasKey("groups")) {
      var newGroupsList = manager.newTagList();
      manager.setTagList(nbt, "groups", newGroupsList);
    };
    var groups = nbt.getTagList("groups");
    var groupIndex = getGroupArray(player).indexOf(groupName);
    var members = system.getStringArray(groups.getCompoundTag(groupIndex).getStringList("members"));
    if (groupIndex < 0) {
      system.moduleMessage(this, player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else {
      system.moduleMessage(this, player, "<s>Members in <sh>" + groupName + "<s>:")
      members.forEach(entry => {
        system.moduleMessage(this, player, "<sh>" + entry);
      });
    };
  };
  /**
   * Turns NBT String List into an array for easier use in code
   * @param {JSEntity} entity - Entity to create group array from
   * @returns Array of group names
   **/
  function getGroupArray(entity, manager) {
    var nbt = null;
    if (entity.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = entity.getWornHelmet().nbt();
    };
    if (entity.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = entity.getWornChestplate().nbt();
    };
    if (entity.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = entity.getWornLeggings().nbt();
    };
    if (entity.getWornBoots().nbt().hasKey("computerID")) {
      nbt = entity.getWornBoots().nbt();
    };
    if (!nbt.hasKey("groups")) {
      var newGroupsList = manager.newTagList();
      manager.setTagList(nbt, "groups", newGroupsList);
    };
    var groupList = nbt.getTagList("groups");
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
  function getGroupArrayMembers(entity, manager) {
    var nbt = null;
    if (entity.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = entity.getWornHelmet().nbt();
    };
    if (entity.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = entity.getWornChestplate().nbt();
    };
    if (entity.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = entity.getWornLeggings().nbt();
    };
    if (entity.getWornBoots().nbt().hasKey("computerID")) {
      nbt = entity.getWornBoots().nbt();
    };
    if (!nbt.hasKey("groups")) {
      var newGroupsList = manager.newTagList();
      manager.setTagList(nbt, "groups", newGroupsList);
    };
    var groupList = nbt.getTagList("groups");
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
    moduleMessageName: "Groups",
    type: 1,
    command: "g",
    helpMessage: "<n>!g <nh>-<n> Groups",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch (arguments[1]) {
          case "add":
            (arguments.length == 3) ? addGroup(entity, manager, arguments[2]) : system.moduleMessage(this, entity, "<n>!g add <nh><name>");
            break;
          case "rem":
            (arguments.length == 3) ? removeGroup(entity, manager, arguments[2]) : system.moduleMessage(this, entity, "<n>!g rem <nh><name>");
            break;
          case "list":
            listGroups(entity, manager);
            break;
          case "addMem":
            (arguments.length == 3) ? addGroupMember(entity, manager, entity.getData("skyhighheroes:dyn/group_name"), arguments[2]) : system.moduleMessage(this, entity, "<n>!g addMem <nh><name>");
            break;
          case "remMem":
            (arguments.length == 3) ? removeGroupMember(entity, manager, entity.getData("skyhighheroes:dyn/group_name"), arguments[2]) : system.moduleMessage(this, entity, "<n>!g remMem <nh><name>");
            break;
          case "listMem":
            listGroupMembers(entity, manager, entity.getData("skyhighheroes:dyn/group_name"));
            break;
          case "help":
            system.moduleMessage(this, entity, "Group commands:")
            system.moduleMessage(this, entity, "<n>!g add <nh><name><n> <nh>-<n> Creates group by name");
            system.moduleMessage(this, entity, "<n>!g rem <nh><name><n> <nh>-<n> Removes group by name");
            system.moduleMessage(this, entity, "<n>!g list <nh>-<n> Lists groups");
            system.moduleMessage(this, entity, "Below commands apply to the currently selected group!")
            system.moduleMessage(this, entity, "<n>!g addMem <nh><name><n> <nh>-<n> Adds member to currently selected group");
            system.moduleMessage(this, entity, "<n>!g remMem <nh><name><n> <nh>-<n> Removes member from currently selected group");
            system.moduleMessage(this, entity, "<n>!g listMem <nh>-<n> Lists members in currently selected group");
            system.moduleMessage(this, entity, "<n>!g help <nh>-<n> Shows this list");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown group command! Try <eh>!g help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown group command! Try <eh>!g help<e> for a list of commands!");
      };
    },
  };
};
