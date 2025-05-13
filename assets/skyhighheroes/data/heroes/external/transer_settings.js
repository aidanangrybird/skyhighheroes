colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];
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
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        var nbt = entity.getWornChestplate().nbt();
        switch(arguments[1]) {
          case "color":
            if (colors.indexOf(arguments[2]) > -1) {
              manager.setString(nbt, "systemColor", arguments[2]);
              system.moduleMessage(this, entity, "<n>color set to <nh>\u00A7" + nbt.getString("systemColor") + "COLOR<n>!");
            } else {
              system.moduleMessage(this, entity, "<e>Invalid color code!");
            };
            break;
          case "hudRange":
            manager.setShort(nbt, "hudRange", parseInt(arguments[2]));
            system.moduleMessage(this, entity, "<n>hudRange set to <nh>" + nbt.getShort("hudRange") + "<n>!");
            break;
          case "friendliesOnHud":
            manager.setBoolean(nbt, "friendliesOnHud", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("friendliesOnHud")));
            system.moduleMessage(this, entity, "<n>friendliesOnHud set to <nh>" + nbt.getBoolean("friendliesOnHud") + "<n>!");
            break;
          case "hostilesOnHud":
            manager.setBoolean(nbt, "hostilesOnHud", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("hostilesOnHud")));
            system.moduleMessage(this, entity, "<n>hostilesOnHud set to <nh>" + nbt.getBoolean("hostilesOnHud") + "<n>!");
            break;
          case "playersOnHud":
            manager.setBoolean(nbt, "playersOnHud", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("playersOnHud")));
            system.moduleMessage(this, entity, "<n>playersOnHud set to <nh>" + nbt.getBoolean("playersOnHud") + "<n>!");
            break;
          case "list":
            system.moduleMessage(this, entity, "<n>color: <nh>\u00A7" + nbt.getString("systemColor") + "COLOR");
            system.moduleMessage(this, entity, "<n>hudRange: <nh>" + nbt.getShort("hudRange"));
            system.moduleMessage(this, entity, "<n>friendliesOnHud: <nh>" + nbt.getBoolean("friendliesOnHud"));
            system.moduleMessage(this, entity, "<n>hostilesOnHud: <nh>" + nbt.getBoolean("hostilesOnHud"));
            system.moduleMessage(this, entity, "<n>playersOnHud: <nh>" + nbt.getBoolean("playersOnHud"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Settings commands:");
            system.moduleMessage(this, entity, "<n>!set list <nh>-<n> Lists current settings and their values");
            system.moduleMessage(this, entity, "<n>!set color <color code> <nh>-<n> Sets system color");
            system.moduleMessage(this, entity, "<n>!set hudRange <number> <nh>-<n> Sets range of HUD scanner");
            system.moduleMessage(this, entity, "<n>!set friendliesOnHud <true|false> <nh>-<n> Sets if friendly mobs appear on HUD");
            system.moduleMessage(this, entity, "<n>!set hostilesOnHud <true|false> <nh>-<n> Sets if hostile mobs appear on HUD");
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