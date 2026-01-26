/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "settings",
    moduleMessageName: "Settings",
    type: 1,
    command: "set",
    helpMessage: "<n>!set <nh>-<n> Settings",
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 4) {
        var nbt = entity.getWornLeggings().nbt();
        switch(argList[1]) {
          case "hudRange":
            manager.setShort(nbt, "hudRange", parseInt(argList[2]));
            system.moduleMessage(this, entity, "<n>hudRange set to <nh>" + nbt.getShort("hudRange") + "<n>!");
            break;
          case "hudFriendlies":
            manager.setBoolean(nbt, "hudFriendlies", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("hudFriendlies")));
            system.moduleMessage(this, entity, "<n>hudFriendlies set to <nh>" + nbt.getBoolean("hudFriendlies") + "<n>!");
            break;
          case "hudHostiles":
            manager.setBoolean(nbt, "hudHostiles", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("hudHostiles")));
            system.moduleMessage(this, entity, "<n>hudHostiles set to <nh>" + nbt.getBoolean("hudHostiles") + "<n>!");
            break;
          case "hudPlayers":
            manager.setBoolean(nbt, "hudPlayers", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("hudPlayers")));
            system.moduleMessage(this, entity, "<n>hudPlayers set to <nh>" + nbt.getBoolean("hudPlayers") + "<n>!");
            break;
          case "list":
            system.moduleMessage(this, entity, "<n>hudRange: <nh>" + nbt.getShort("hudRange"));
            system.moduleMessage(this, entity, "<n>hudFriendlies: <nh>" + nbt.getBoolean("hudFriendlies"));
            system.moduleMessage(this, entity, "<n>hudHostiles: <nh>" + nbt.getBoolean("hudHostiles"));
            system.moduleMessage(this, entity, "<n>hudPlayers: <nh>" + nbt.getBoolean("hudPlayers"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Settings commands:");
            system.moduleMessage(this, entity, "<n>!set list <nh>-<n> Lists current settings and their values");
            system.moduleMessage(this, entity, "<n>!set hudRange <number> <nh>-<n> Sets range of HUD scanner");
            system.moduleMessage(this, entity, "<n>!set hudFriendlies <true|false> <nh>-<n> Sets if friendly mobs appear on HUD");
            system.moduleMessage(this, entity, "<n>!set hudHostiles <true|false> <nh>-<n> Sets if hostile mobs appear on HUD");
            system.moduleMessage(this, entity, "<n>!set hudPlayers <true|false> <nh>-<n> Sets if players appear on HUD");
            system.moduleMessage(this, entity, "<n>!set help <nh>-<n> Shows this list");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>settings<e> command! Try <eh>!set help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>settings<e> command! Try <eh>!set help<e> for a list of commands!");
      };
    },
  };
};