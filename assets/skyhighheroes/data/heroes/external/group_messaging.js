function initModule(system) {
  /**
   * Checks if a player has another player as a contact
   * @param {JSEntity} sender - Player getting checked
   * @param {JSEntity} receiver - Player whose group list is being checked
   * @param {string} groupName - Group name being checked
   * @returns If sender is in receiver's contacts
   **/
  function hasGroup(sender, receiver, groupName) {
    var result = false;
    var nbt = receiver.getEquipmentInSlot(receiver.getData("skyhighheroes:dyn/primary_piece")).nbt();
    if (nbt.hasKey("groups")) {
      var groupIndex = getGroupArray(receiver).indexOf(groupName);
      if (groupIndex > -1) {
        var members = nbt.getTagList("groups").getCompoundTag(groupIndex).getStringList("members");
        var memberIndex = system.getStringArray(members).indexOf(sender.getName());
        if (memberIndex > -1) {
          result = true;
        };
      };
    };
    return result;
  };
  /**
   * Sends message in group format
   * @param {JSPlayer} player - Entity recieving message
   * @param {string} groupName - Name of group
   * @param {string} sender - Name of entity sending message
   * @param {string} message - Message content
   **/
  function groupMessage(player, groupName, sender, message) {
    if (PackLoader.getSide() == "SERVER") {
      player.as("PLAYER").addChatMessage("[" + groupName + "]>" + sender + "> " + message);
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
  return {
    name: "groupMessaging",
    type: 2,
    modeID: "group",
    chatModeInfo: "<n>You are now in <nh>group<n> mode!",
    messageHandler: function (entity) {
      var message = entity.getData("skyhighheroes:dyn/entry");
      var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
      var foundPlayers = [];
      var groupName = "";
      if (entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups").tagCount() > 0) {
        var group = entity.getEquipmentInSlot(entity.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups").getCompoundTag(activeChat);
        groupName = group.getString("groupName");
        var members = system.getStringArray(group.getStringList("members"));
        var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 30);
        entities.forEach(player => {
          if (player.is("PLAYER") && members.indexOf(player.getName()) > -1) {
            foundPlayers.push(player);
          };
        });
      } else {
        system.systemMessage(entity, "<e>You have no groups to message!")
      };
      if (foundPlayers.length > 0) {
        foundPlayers.forEach(player => {
          if (system.hasComputer(player)) {
            if (hasGroup(entity, player, groupName)) {
              if ((typeof system.waveChangeIndex === "undefined") ? false : system.waveChangeIndex > -1) {
                if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                  groupMessage(player, groupName, system.waveColor+system.waveChange+"\u00A7r", message);
                } else {
                  groupMessage(player, groupName, system.human, message);
                };
              } else {
                groupMessage(player, groupName, (typeof entity.getData("fiskheroes:disguise") === "string") ? entity.getData("fiskheroes:disguise") : entity.getName(), message);
              };
            };
          };
        });
        if ((typeof system.waveChangeIndex === "undefined") ? false : system.waveChangeIndex > -1) {
          if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
            groupMessage(entity, groupName, system.waveColor+system.waveChange+"\u00A7r", message);
          } else {
            groupMessage(entity, groupName, system.human, message);
          };
        } else {
          groupMessage(entity, groupName, (typeof entity.getData("fiskheroes:disguise") === "string") ? entity.getData("fiskheroes:disguise") : entity.getName(), message);
        };
      };
    },
    chatInfo: function (player, manager, chat) {
      if (player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().hasKey("groups")) {
        if (player.getEquipmentInSlot(player.getData("skyhighheroes:dyn/primary_piece")).nbt().getTagList("groups").tagCount() > 0) {
          var groupList = system.getGroupArray(player);
          if (typeof chat === "string") {
            var chatIndex = groupList.indexOf(chat);
            if (chatIndex > -1) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", chatIndex);
            } else {
              system.systemMessage(player, "<e>You do not have <eh>" + chat + "<e> as a group!");
              return;
            };
          } else {
            if (player.getData("skyhighheroes:dyn/active_chat") > (groupList.length-1)) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
            };
          };
          var group = groupList[player.getData("skyhighheroes:dyn/active_chat")];
          system.systemMessage(player, "<n>You are now messaging <nh>" + group + "<n>!");
        } else {
          system.systemMessage(player, "<e>You do not have any groups!");
        };
      } else {
        system.systemMessage(player, "<e>You do not have any groups!");
      };
    },
  };
};
