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
          case "holoFlight":
            manager.setBoolean(nbt, "holoFlight", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("holoFlight")));
            system.moduleMessage(this, entity, "<n>holoFlight set to <nh>" + nbt.getBoolean("holoFlight") + "<n>!");
            break;
          case "holoBoostFlight":
            manager.setBoolean(nbt, "holoBoostFlight", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("holoBoostFlight")));
            system.moduleMessage(this, entity, "<n>holoBoostFlight set to <nh>" + nbt.getBoolean("holoBoostFlight") + "<n>!");
            break;
          case "holoFlightMotion":
            manager.setBoolean(nbt, "holoFlightMotion", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("holoFlightMotion")));
            system.moduleMessage(this, entity, "<n>holoFlightMotion set to <nh>" + nbt.getBoolean("holoFlightMotion") + "<n>!");
            break;
          case "holoArmCannon":
            manager.setBoolean(nbt, "holoArmCannon", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("holoArmCannon")));
            system.moduleMessage(this, entity, "<n>holoArmCannon set to <nh>" + nbt.getBoolean("holoArmCannon") + "<n>!");
            break;
          case "holoDualCannons":
            manager.setBoolean(nbt, "holoDualCannons", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("holoDualCannons")));
            system.moduleMessage(this, entity, "<n>holoDualCannons set to <nh>" + nbt.getBoolean("holoDualCannons") + "<n>!");
            break;
          case "holoButtMGs":
            manager.setBoolean(nbt, "holoButtMGs", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("holoButtMGs")));
            system.moduleMessage(this, entity, "<n>holoButtMGs set to <nh>" + nbt.getBoolean("holoButtMGs") + "<n>!");
            break;
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
            system.moduleMessage(this, entity, "<n>holoFlight: <nh>" + nbt.getBoolean("holoFlight"));
            system.moduleMessage(this, entity, "<n>holoBoostFlight: <nh>" + nbt.getBoolean("holoBoostFlight"));
            system.moduleMessage(this, entity, "<n>holoFlightMotion: <nh>" + nbt.getBoolean("holoFlightMotion"));
            system.moduleMessage(this, entity, "<n>holoArmCannon: <nh>" + nbt.getBoolean("holoArmCannon"));
            system.moduleMessage(this, entity, "<n>holoDualCannons: <nh>" + nbt.getBoolean("holoDualCannons"));
            system.moduleMessage(this, entity, "<n>holoButtMGs: <nh>" + nbt.getBoolean("holoButtMGs"));
            system.moduleMessage(this, entity, "<n>nightVision: <nh>" + entity.getData("skyhighheroes:dyn/night_vision"));
            system.moduleMessage(this, entity, "<n>hudScale: <nh>" + entity.getData("skyhighheroes:dyn/hud_scale"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Settings commands:");
            system.moduleMessage(this, entity, "<n>!set list <nh>-<n> Lists current settings and their values");
            system.moduleMessage(this, entity, "<n>!set holoFlight <true|false> <nh>-<n> Sets if hologram is flying");
            system.moduleMessage(this, entity, "<n>!set holoBoostFlight <true|false> <nh>-<n> Sets if hologram is boost flying");
            system.moduleMessage(this, entity, "<n>!set holoFlightMotion <true|false> <nh>-<n> Sets if hologram is flying with motion");
            system.moduleMessage(this, entity, "<n>!set holoArmCannon <true|false> <nh>-<n> Sets if right arm cannon is open on holographic stand");
            system.moduleMessage(this, entity, "<n>!set holoDualCannons <true|false> <nh>-<n> Sets if both arm cannons are open on holographic stand");
            system.moduleMessage(this, entity, "<n>!set holoButtMGs <true|false> <nh>-<n> Sets if butt machine guns are open on holographic stand");
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