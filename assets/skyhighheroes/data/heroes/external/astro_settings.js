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
        var nbt = system.mainNBT(entity);
        switch(argList[1]) {
          case "nightVision":
            manager.setData(entity, "skyhighheroes:dyn/night_vision", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : entity.getData("skyhighheroes:dyn/night_vision")));
            manager.setBoolean(nbt, "nightVision", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("nightVision")));
            system.moduleMessage(this, entity, "<n>nightVision set to <nh>" + nbt.getBoolean("nightVision") + "<n>!");
            break;
          case "hudScale":
            manager.setData(entity, "skyhighheroes:dyn/hud_scale", parseFloat(argList[2]));
            manager.setFloat(nbt, "hudScale", parseFloat(argList[2]));
            system.moduleMessage(this, entity, "<n>hudScale set to <nh>" + nbt.getFloat("hudScale") + "<n>!");
            break;
          case "list":
            system.moduleMessage(this, entity, "<n>nightVision: <nh>" + entity.getData("skyhighheroes:dyn/night_vision"));
            system.moduleMessage(this, entity, "<n>hudScale: <nh>" + entity.getData("skyhighheroes:dyn/hud_scale"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Settings commands:");
            system.moduleMessage(this, entity, "<n>!set list <nh>-<n> Lists current settings and their values");
            system.moduleMessage(this, entity, "<n>!set nightVision <true|false> <nh>-<n> Sets if night vision is active");
            system.moduleMessage(this, entity, "<n>!set hudScale <number> <nh>-<n> Sets scale of HUD elements");
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
    onInitSystem: function (entity, manager) {
      var nbt = system.mainNBT(entity);
      if (!nbt.hasKey("hudScale")) {
        manager.setFloat(nbt, "hudScale", 1.0);
      };
      manager.setData(entity, "skyhighheroes:dyn/hud_scale", nbt.getFloat("hudScale"));
      if (!nbt.hasKey("nightVision")) {
        manager.setFloat(nbt, "nightVision", false);
      };
      manager.setData(entity, "skyhighheroes:dyn/night_vision", nbt.getBoolean("nightVision"));
    }
  };
};