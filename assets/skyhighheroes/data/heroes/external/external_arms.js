/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "externalArms",
    type: 13,
    command: "extarms",
    powers: ["skyhighheroes:external_arms"],
    helpMessage: "<n>!extarms <nh>-<n> ExtArms",
    disabledMessage: "<e>Module <eh>externalArms<e> is disabled!",
    keyBinds: function (hero, color) {
      hero.addKeyBind("TENTACLE_JAB", "\u00A7" + color + "Jab", 1);
      hero.addKeyBind("TENTACLE_GRAB", "\u00A7" + color + "Grab", 3);
      hero.addKeyBind("TENTACLE_STRIKE", "\u00A7" + color + "Strike", 4);
      hero.addKeyBind("TENTACLES", "\u00A7" + color + "External Arms", 2);
      hero.addKeyBind("EXTERNAL_ARMS", "\u00A7" + color + "External Arms", 2);
    },
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 3) {
        switch (arguments[1]) {
          case "show":
            manager.setData(entity, "skyhighheroes:dyn/external_arm_left_deployed", true);
            manager.setData(entity, "skyhighheroes:dyn/external_arm_right_deployed", true);
            break;
          case "hide":
            manager.setData(entity, "skyhighheroes:dyn/external_arm_left_deployed", false);
            manager.setData(entity, "skyhighheroes:dyn/external_arm_right_deployed", false);
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>External Arms commands:");
            system.moduleMessage(this, entity, "<n>!extarms show <nh>-<n> Deploys external arms");
            system.moduleMessage(this, entity, "<n>!extarms hide <nh>-<n> Retracts external arms");
            system.moduleMessage(this, entity, "<n>!extarms status <nh>-<n> Shows status of external arms");
            system.moduleMessage(this, entity, "<n>!extarms help <nh>-<n> Shows externalArms commands");
            break;
          case "status":
            var extArms = (entity.getData("skyhighheroes:dyn/external_arms_timer") > 0);
            system.moduleMessage(this, entity, "<n>External Arms status:");
            system.moduleMessage(this, entity, "<n>Left External Arm: <nh>" + ((entity.getData("skyhighheroes:dyn/external_arm_left_deploy_timer") > 0) || extArms ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right External Arm: <nh>" + ((entity.getData("skyhighheroes:dyn/external_arm_right_deploy_timer") > 0) || extArms ? "DEPLOYED" : "RETRACTED"));
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>extarms<e> command! Try <eh>!extarms help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>extarms<e> command! Try <eh>!extarms help<e> for a list of commands!");
      };
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (modifier.name() == "fiskheroes:tentacles") {
          result = true;
        };
      };
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    isKeyBindEnabled: function (entity, keyBind) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (keyBind == "TENTACLES") {
          result = true;
        };
        if (keyBind == "TENTACLE_GRAB") {
          result = entity.getData("fiskheroes:tentacles") != null;
        };
        if (keyBind == "TENTACLE_JAB") {
          result = entity.getData("fiskheroes:tentacles") != null;
        };
        if (keyBind == "TENTACLE_STRIKE") {
          result = entity.getData("fiskheroes:tentacles") != null;
        };
        if (keyBind == "EXTERNAL_ARMS") {
          result = true;
        };
      };
      return result;
    },
    whenDisabled: function (entity, manager) {
      manager.setData(entity, "skyhighheroes:dyn/external_arms", false);
      manager.setData(entity, "skyhighheroes:dyn/external_arm_left_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/external_arm_right_deployed", false);
    },
    tickHandler: function (entity, manager) {
      if (entity.getData("skyhighheroes:dyn/external_arms")) {
        var tentacles = entity.getData("skyhighheroes:dyn/external_arms_timer") == 1;
        manager.setData(entity, "fiskheroes:tentacles_retracting", !tentacles);
      };
      if (entity.getData("fiskheroes:tentacles_retracting")) {
        var tentacles = entity.getData("tentacle_extend_timer") == 0;
        manager.setData(entity, "skyhighheroes:dyn/external_arms", tentacles);
      };
    }
  };
};