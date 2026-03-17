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
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 4) {
        var nbt = system.mainNBT(entity);
        switch (argList[1]) {
          case "enable":
            switch (argList[2]) {
              case "clothing":
                manager.setData(entity, "skyhighheroes:dyn/thermoptic_disguise_clothing", true);
                manager.setBoolean(nbt, "disguiseClothing", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>disguise clothing<n>!");
                break;
              case "disguise":
                manager.setData(entity, "skyhighheroes:dyn/thermoptic_disguise", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>disguise<n>!");
                break;
              case "camo":
                manager.setData(entity, "skyhighheroes:dyn/thermoptic_camouflage", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>camo<n>!");
                break;
              case "autoDisguise":
                manager.setBoolean(nbt, "autoDisguise", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>auto disguise<n>!");
                break;
              case "autoCamo":
                manager.setBoolean(nbt, "autoCamouflage", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>auto camouflage<n>!");
                break;
              case "disguiseOnStand":
                manager.setBoolean(nbt, "disguiseOnStand", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>disguise on stand<n>!");
                break;
              case "camoOnStand":
                manager.setBoolean(nbt, "camoOnStand", true);
                system.moduleMessage(this, entity, "<n>Enabled <nh>camouflage on stand<n>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>action<e>!");
                break;
            };
            break;
          case "disable":
            switch (argList[2]) {
              case "clothing":
                manager.setData(entity, "skyhighheroes:dyn/thermoptic_disguise_clothing", false);
                manager.setBoolean(nbt, "disguiseClothing", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>disguise clothing<n>!");
                break;
              case "disguise":
                manager.setData(entity, "skyhighheroes:dyn/thermoptic_disguise", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>disguise<n>!");
                break;
              case "camo":
                manager.setData(entity, "skyhighheroes:dyn/thermoptic_camouflage", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>camo<n>!");
                break;
              case "autoDisguise":
                manager.setBoolean(nbt, "autoDisguise", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>auto disguise<n>!");
                break;
              case "autoCamo":
                manager.setBoolean(nbt, "autoCamouflage", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>auto camouflage<n>!");
                break;
              case "disguiseOnStand":
                manager.setBoolean(nbt, "disguiseOnStand", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>disguise on stand<n>!");
                break;
              case "camoOnStand":
                manager.setBoolean(nbt, "camoOnStand", false);
                system.moduleMessage(this, entity, "<n>Disabled <nh>camouflage on stand<n>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>action<e>!");
                break;
            };
            break;
          case "status":
            system.moduleMessage(this, entity, "<n>Thermoptics status:");
            system.moduleMessage(this, entity, "<n>Camouflage: <nh>" + ((entity.getData("skyhighheroes:dyn/thermoptic_camouflage_timer") > 0) ? "ENABLED" : "DISABLED"));
            system.moduleMessage(this, entity, "<n>Disguise: <nh>" + ((entity.getData("skyhighheroes:dyn/thermoptic_disguise_timer") > 0) ? "ENABLED" : "DISABLED"));
            system.moduleMessage(this, entity, "<n>Auto Disguise: <nh>" + (nbt.getBoolean("autoDisguise") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Auto Camouflage: <nh>" + (nbt.getBoolean("autoCamouflage") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Disguise Clothing: <nh>" + (entity.getData("skyhighheroes:dyn/thermoptic_disguise_clothing") ? "ENABLED" : "DISABLED"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Thermoptics commands:");
            system.moduleMessage(this, entity, "<n>!thermo enable <clothing|disguise|camo|autoDisguise|autoCamo|disguiseOnStand|camoOnStand> <nh>-<n> Enables function");
            system.moduleMessage(this, entity, "<n>!thermo disable <clothing|disguise|camo|autoDisguise|autoCamo|disguiseOnStand|camoOnStand> <nh>-<n> Disables function");
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
      manager.setData(entity, "skyhighheroes:dyn/thermoptic_disguise", false);
    },
    tickHandler: function (entity, manager) {
      var invis = entity.getData("skyhighheroes:dyn/thermoptic_camouflage_timer") == 1;
      if (entity.getData("skyhighheroes:dyn/thermoptic_camouflage_timer") > 0) {
        manager.setData(entity, "fiskheroes:invisible", invis);
        manager.setData(entity, "fiskheroes:invisibility_timer", (invis?1.0:0.0));
      };
    },
    onInitSystem: function (entity, manager) {
      var nbt = system.mainNBT(entity);
      if (!nbt.hasKey("disguiseClothing")) {
        manager.setBoolean(nbt, "disguiseClothing", false);
      };
      manager.setData(entity, "skyhighheroes:dyn/thermoptic_disguise_clothing", nbt.getBoolean("disguiseClothing"));
      if (!nbt.hasKey("autoDisguise")) {
        manager.setBoolean(nbt, "autoDisguise", false);
      };
      var autoDisguise = nbt.getBoolean("autoDisguise");
      if (autoDisguise) {
        manager.setData(entity, "skyhighheroes:dyn/thermoptic_disguise", true);
      };
      if (!nbt.hasKey("autoCamouflage")) {
        manager.setBoolean(nbt, "autoCamouflage", false);
      };
      var autoCamouflage = nbt.getBoolean("autoCamouflage");
      if (autoCamouflage) {
        manager.setData(entity, "skyhighheroes:dyn/thermoptic_camouflage", true);
      };
    }
  };
};