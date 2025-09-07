/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "wings",
    moduleMessageName: "Wings",
    type: 12,
    command: "wing",
    helpMessage: "<n>!wing <nh>-<n> Wings",
    disabledMessage: "<e>Module <eh>wings<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        var nbt = entity.getWornHelmet().nbt();
        switch(arguments[1]) {
          case "arm":
            if (nbt.getBoolean("rocketsAux") || nbt.getBoolean("rocketsBody") || nbt.getBoolean("rocketsLegs") || nbt.getBoolean("rocketsWings")) {
              system.moduleMessage(this, entity, "<e>A rocket set is already armed! Disarm rockets before arming wings!");
            } else {
              manager.setBoolean(nbt, "wings", true);
              system.moduleMessage(this, entity, "<s>Armed <sh>wings<s>!");
            };
            break;
          case "disarm":
            manager.setBoolean(nbt, "wings", false);
            system.moduleMessage(this, entity, "<s>Disarmed <sh>wings<s>!");
            break;
          case "show":
            switch(arguments[2]) {
              case "left":
                manager.setData(entity, "skyhighheroes:dyn/wing_left_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left<s> wing!");
                break;
              case "right":
                manager.setData(entity, "skyhighheroes:dyn/wing_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right<s> wing!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/wing_left_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/wing_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>wings<s>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>wing<e>!");
                break;
            };
            break;
          case "hide":
            switch(arguments[2]) {
              case "left":
                manager.setData(entity, "skyhighheroes:dyn/wing_left_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left<s> wing!");
                break;
              case "right":
                manager.setData(entity, "skyhighheroes:dyn/wing_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right<s> wing!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/wing_left_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/wing_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>wings<s>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>wing<e>!");
                break;
            };
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Wings commands:");
            system.moduleMessage(this, entity, "<n>!wing arm <nh>-<n> Arms wings");
            system.moduleMessage(this, entity, "<n>!wing disarm <nh>-<n> Disarms wings");
            system.moduleMessage(this, entity, "<n>!wing show <nh>-<n> Deploys wings");
            system.moduleMessage(this, entity, "<n>!wing hide <nh>-<n> Retracts wings");
            system.moduleMessage(this, entity, "<n>!wing status <nh>-<n> Shows status of wings");
            system.moduleMessage(this, entity, "<n>!wing help <nh>-<n> Shows wings commands");
            break;
          case "status":
            var wings = (entity.getData("skyhighheroes:dyn/wings_timer") > 0);
            system.moduleMessage(this, entity, "<n>Wings status:");
            system.moduleMessage(this, entity, "<n>Wings: <nh>" + (nbt.getBoolean("wings") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Left wing: <nh>" + ((entity.getData("skyhighheroes:dyn/wing_left_deploy_timer") > 0) || wings ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right wing: <nh>" + ((entity.getData("skyhighheroes:dyn/wing_right_deploy_timer") > 0) || wings ? "DEPLOYED" : "RETRACTED"));
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>wings<e> command! Try <eh>!wing help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>wings<e> command! Try <eh>!wing help<e> for a list of commands!");
      };
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      var nbt = entity.getWornHelmet().nbt();
      var wings = nbt.getBoolean("wings");
      if (!system.isModuleDisabled(entity, this.name)) {
        if (modifier.name() == "fiskheroes:gliding") {
          result = wings;
        };
      };
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    whenDisabled: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      manager.setBoolean(nbt, "wings", false);
      manager.setData(entity, "skyhighheroes:dyn/wing_left_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/wing_right_deployed", false);
    },
    tickHandler: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      var wings = nbt.getBoolean("wings") && entity.getData("fiskheroes:gliding");
      if (!nbt.getBoolean("rocketsWings") && entity.getData("fiskheroes:gliding_timer") > 0) {
        manager.setData(entity, "skyhighheroes:dyn/wings", wings);
        manager.setData(entity, "skyhighheroes:dyn/wings", wings);
        if (entity.getData("fiskheroes:gliding_timer") < 0.2) {
          if (wings) {
            system.shoutMessage(entity, "<" + entity.getData("fiskheroes:disguise") + "> Activating Wings!", 16);
          };
        };
      };
    }
  };
};