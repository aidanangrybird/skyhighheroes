function moduleName() {
  return "chatGroup";
};
function init(transer) {
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
      var groupIndex = transer.getGroupArray(entity).indexOf(groupName);
      if (groupIndex > -1) {
        transer.systemMessage(entity, "<e>Duplicate group name <eh>" + groupName + "<e>!");
      } else {
        transer.systemMessage(entity, "<s>Group created with name: <sh>" + groupName + "<s>!");
        manager.appendTag(groups, group);
      };
    };
  };
  /**
   * List groups
   * @param {JSEntity} player - Required
   **/
  function listGroups(player) {
    var groups = transer.getGroupArrayMembers(player);
    transer.systemMessage(player, "<n>You are in <nh>" + groups.length + ((groups.length > 1)?"<n> groups!": "<n> group!"));
    groups.forEach(entry => {
      transer.systemMessage(player, "<nh>" + entry.groupName + "<n> (<nh>" + entry.memberCount + ((entry.memberCount > 1)?"<n> members)": "<n> member)"))
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
    var groupIndex = transer.getGroupArray(player).indexOf(groupName);
    if (groupIndex < 0) {
      transer.systemMessage(player, "<e>Unable to find group with name <eh>" + groupName + "<e> to remove!");
    } else {
      transer.systemMessage(player, "<e>Removed group <eh>" + groupName + "<e>!");
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
    var groupIndex = transer.getGroupArray(player).indexOf(groupName);
    var members = groups.getCompoundTag(groupIndex).getStringList("members");
    var memberIndex = transer.getStringArray(members).indexOf(username);
    var contacts = player.getWornChestplate().nbt().getTagList("contacts");
    var contactIndex = transer.getStringArray(contacts).indexOf(username);
    if (!player.getWornChestplate().nbt().hasKey("groups")) {
      transer.systemMessage(player, "<e>You have not set up any groups yet!");
    } else if (groupIndex < 0) {
      transer.systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else if (contactIndex < 0) {
      transer.systemMessage(player, "<eh>" + username + "<e> is not added as a contact!")
    } else if (memberIndex > -1) {
      transer.systemMessage(player, "<e>Member <eh>" + username + "<e> is already in group <eh>" + groupName + "<e>!");
    } else {
      transer.systemMessage(player, "<s>Successfully added <sh>" + username  + "<s> to group <sh>" + groupName + "<s>!");
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
    var groupIndex = transer.getGroupArray(player).indexOf(groupName);
    var members = groups.getCompoundTag(groupIndex).getStringList("members");
    var memberIndex = transer.getStringArray(members).indexOf(username);
    if (!player.getWornChestplate().nbt().hasKey("groups")) {
      transer.systemMessage(player, "<e>You have not set up any groups yet!");
    } else if (groupIndex < 0) {
      transer.systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else if (memberIndex < 0) {
      transer.systemMessage(player, "<eh>" + username + "<e> is not in group <eh>" + groupName + "<e>!");
    } else {
      transer.systemMessage(player, "<s>Successfully removed <sh>" + username  + "<s> from group <sh>" + groupName + "<s>!");
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
    var groupIndex = transer.getGroupArray(player).indexOf(groupName);
    var members = transer.getStringArray(groups.getCompoundTag(groupIndex).getStringList("members"));
    if (!player.getWornChestplate().nbt().hasKey("groups")) {
      transer.systemMessage(player, "<e>You do not have any groups!");
    } else if (groupIndex < 0) {
      transer.systemMessage(player, "<e>Group <eh>" + groupName + "<e> does not exist!");
    } else {
      transer.systemMessage(player, "<s>Members in <sh>" + groupName + "<s>:")
      members.forEach(entry => {
        transer.systemMessage(player, "<sh>" + entry);
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
      var groupIndex = transer.getGroupArray(receiver).indexOf(groupName);
      if (groupIndex > -1) {
        var members = nbt.getTagList("groups").getCompoundTag(groupIndex).getStringList("members");
        var memberIndex = transer.getStringArray(members).indexOf(sender.getName());
        if (memberIndex > -1) {
          result = true;
        };
      };
    };
    return result;
  };
  return {
    messageHandler: function (entity, transformed, untransformed, color) {
      var message = entity.getData("skyhighheroes:dyn/entry");
      var group = entity.getWornChestplate().nbt().getTagList("groups").getCompoundTag(activeChat);
      var groupName = group.getString("groupName");
      var members = transer.getStringArray(group.getStringList("members"));
      var foundPlayers = [];
      var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 30);
      entities.forEach(player => {
        if (player.is("PLAYER") && members.indexOf(player.getName()) > -1) {
          foundPlayers.push(player);
        };
      });
      if (foundPlayers != null) {
        foundPlayers.forEach(player => {
          if (transer.isWearingTranser(player)) {
            if (hasGroup(entity, player, groupName)) {
              if (typeof transformed === "string" && typeof color === "string" && typeof untransformed === "string") {
                if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && player.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                  transer.groupMessage(player, groupName, color+transformed+"\u00A7r", message);
                } else {
                  transer.groupMessage(player, groupName, untransformed, message);
                };
              } else {
                transer.groupMessage(player, groupName, entity.getName(), message);
              };
            };
          };
        });
        if (typeof transformed === "string" && typeof color === "string" && typeof untransformed === "string") {
          if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && player.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
            transer.groupMessage(entity, groupName, color+transformed+"\u00A7r", message);
          } else {
            transer.groupMessage(entity, groupName, untransformed, message);
          };
        } else {
          transer.groupMessage(entity, groupName, entity.getName(), message);
        };
      };
    },
    commandHandler: function (entity, manager) {
      if (entity.getData("skyhighheroes:dyn/chat_mode") == 1) {
        if (args.length > 0 && args.length < 3) {
          switch (args[0]) {
            case "add":
              (args.length == 2) ? addGroup(entity, manager, args[1]) : transer.systemMessage(entity, "<n>add <name>");
              break;
            case "rem":
              (args.length == 2) ? removeGroup(entity, manager, args[1]) : transer.systemMessage(entity, "<n>rem <name>");
              break;
            case "list":
              listGroups(entity, manager);
              break;
            case "addMem":
              (args.length == 2) ? addGroupMember(entity, manager, entity.getData("skyhighheroes:dyn/group_name"), args[1]) : transer.systemMessage(entity, "<n>addMem <name>");
              break;
            case "remMem":
              (args.length == 2) ? removeGroupMember(entity, manager, entity.getData("skyhighheroes:dyn/group_name"), args[1]) : transer.systemMessage(entity, "<n>remMem <name>");
              break;
            case "listMem":
              listGroupMembers(entity, entity.getData("skyhighheroes:dyn/group_name"));
              break;
            case "help":
              transer.systemMessage(entity, "Group commands:")
              transer.systemMessage(entity, "<n>add <nh><name><n> <nh>-<n> Creates group by name");
              transer.systemMessage(entity, "<n>rem <nh><name><n> <nh>-<n> Removes group by name");
              transer.systemMessage(entity, "<n>list <nh>-<n> Lists groups");
              transer.systemMessage(entity, "Below commands apply to the currently selected group!")
              transer.systemMessage(entity, "<n>addMem <nh><name><n> <nh>-<n> Adds member to currently selected group");
              transer.systemMessage(entity, "<n>remMem <nh><name><n> <nh>-<n> Removes member from currently selected group");
              transer.systemMessage(entity, "<n>listMem <nh>-<n> Lists members in currently selected group");
              transer.systemMessage(entity, "<n>help <nh>-<n> Shows group commands");
              break;
            default:
              transer.systemMessage(entity, "Unknown group command! Try help for a list of commands!");
              break;
          };
        } else {
          transer.systemMessage(entity, "Too many arguemnts!");
        };
      } else {
        return false;
      };
    },
    chatModeInfo: function (player) {
      transer.systemMessage(player, "<n>You are now in <nh>group<n> mode!");
    },
    chatInfo: function (player, manager) {
      if (player.getWornChestplate().nbt().hasKey("contacts")) {
        if (player.getWornChestplate().nbt().getStringList("contacts").tagCount() > 0) {
          var contactsList = transer.getStringArray(player.getWornChestplate().nbt().getStringList("contacts"));
          if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
            manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
          };
          var contact = contactsList[player.getData("skyhighheroes:dyn/active_chat")];
          transer.systemMessage(player, "<n>You are now messaging <nh>" + contact + "<n>!");
        } else {
          transer.systemMessage(player, "<e>You do not have any contacts!");
        };
      } else {
        transer.systemMessage(player, "<e>You do not have any contacts!");
      };
    }
  };
};
