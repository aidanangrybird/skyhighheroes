/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "thermoptics",
    moduleMessageName: "Thermoptics",
    type: 12,
    command: "thermo",
    helpMessage: "<n>!thermo <nh>-<n> Thermoptics",
    disabledMessage: "<e>Module <eh>thermoptics<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        var nbt = entity.getWornHelmet().nbt();
        switch (arguments[1]) {
          case "enable":
            switch (arguments[2]) {
              case "camo":
                manager.setData(entity, "skyhighheroes:dyn/thermoptic_camouflage", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>camo<n>!");
                break;
              case "autoCamo":
                manager.setBoolean(nbt, "autoCamouflage", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>auto camouflage<n>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>action<e>!");
                break;
            };
            break;
          case "disable":
            switch (arguments[2]) {
              case "camo":
                manager.setData(entity, "skyhighheroes:dyn/thermoptic_camouflage", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>camo<n>!");
                break;
              case "autoCamo":
                manager.setBoolean(nbt, "autoCamouflage", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>auto camouflage<n>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>action<e>!");
                break;
            };
            break;
          case "status":
            system.moduleMessage(this, entity, "<n>Thermoptics status:");
            system.moduleMessage(this, entity, "<n>Camouflage: <nh>" + ((entity.getData("skyhighheroes:dyn/thermoptic_camouflage_timer") > 0) ? "ENABLED" : "DISABLED"));
            system.moduleMessage(this, entity, "<n>Auto Camouflage: <nh>" + (nbt.getBoolean("autoCamouflage") ? "ARMED" : "DISARMED"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Thermoptics commands:");
            system.moduleMessage(this, entity, "<n>!thermo enable <camo> <nh>-<n> Enables function");
            system.moduleMessage(this, entity, "<n>!thermo disable <camo> <nh>-<n> Disables function");
            system.moduleMessage(this, entity, "<n>!thermo help <nh>-<n> Shows thermoptics commands");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>thermo<e> command! Try <eh>!thermo help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>thermo<e> command! Try <eh>!thermo help<e> for a list of commands!");
      };
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (modifier.name() == "fiskheroes:invisiblity") {
          result = true;
        };
      };
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    whenDisabled: function (entity, manager) {
      manager.setData(entity, "skyhighheroes:dyn/thermoptic_camouflage", false);
    },
    tickHandler: function (entity, manager) {
      var invis = entity.getData("skyhighheroes:dyn/thermoptic_camouflage_timer") == 1;
      if (entity.getData("skyhighheroes:dyn/thermoptic_camouflage_timer") > 0) {
        manager.setData(entity, "fiskheroes:invisible", invis);
      };
    },
    onInitSystem: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      var autoCamouflage = nbt.getBoolean("autoCamouflage");
      if (autoCamouflage) {
        manager.setData(entity, "skyhighheroes:dyn/thermoptic_camouflage", true);
      };
    }
  };
};