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
          case "list":
            system.moduleMessage(this, entity, "<n>color: <nh>\u00A7" + nbt.getString("systemColor") + "COLOR");
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Settings commands:");
            system.moduleMessage(this, entity, "<n>!set list <nh>-<n> Lists current settings and their values");
            system.moduleMessage(this, entity, "<n>!set color <color code> <nh>-<n> Sets system color");
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