/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  return {
    name: "shields",
    moduleMessageName: "Shields",
    type: 14,
    command: "shield",
    helpMessage: "<n>!shield <nh>-<n> Shields",
    disabledMessage: "<e>Module <eh>shields<e> is disabled!",
    keyBinds: function (hero, color) {
      hero.addKeyBindFunc("SHIELDS", (player, manager) => {
        system.moduleMessage(this, player, "<e>To arm a shield do <eh>!shield arm <left|right><e>.");
        return true;
      }, "\u00A7" + color + "Shields (None armed)", 1);
      hero.addKeyBind("SHIELD", "\u00A7" + color + "Shields", 1);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        var nbt = entity.getWornHelmet().nbt();
        var left = nbt.getBoolean("shieldsLeft");
        var right = nbt.getBoolean("shieldsRight");
        if (keyBind == "SHIELDS" && entity.isSneaking() && entity.getData("fiskheroes:tentacles") == null) {
          result = (!left && !right);
        };
        if (keyBind == "SHIELD" && entity.isSneaking() && entity.getData("fiskheroes:tentacles") == null) {
          result = (left || right);
        };
      };
      return result;
    },
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 4) {
        var nbt = entity.getWornHelmet().nbt();
        switch (argList[1]) {
          case "arm":
            switch (argList[2]) {
              case "left":
                manager.setBoolean(nbt, "shieldsLeft", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>left arm<s> shield!");
                break;
              case "right":
                manager.setBoolean(nbt, "shieldsRight", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>right arm<s> shield!");
                break;
              case "*":
                manager.setBoolean(nbt, "shieldsLeft", true);
                manager.setBoolean(nbt, "shieldsRight", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>all<s> shields!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>shield<e>!");
                break;
            };
            break;
          case "disarm":
            switch (argList[2]) {
              case "left":
                manager.setBoolean(nbt, "shieldsLeft", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>left arm<s> shield!");
                break;
              case "right":
                manager.setBoolean(nbt, "shieldsRight", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>right arm<s> shield!");
                break;
              case "*":
                manager.setBoolean(nbt, "shieldsLeft", false);
                manager.setBoolean(nbt, "shieldsRight", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> shields!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>shield<e>!");
                break;
            };
            break;
          case "show":
            switch (argList[2]) {
              case "left":
                manager.setData(entity, "skyhighheroes:dyn/shield_left_arm_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm<s> shield!");
                break;
              case "right":
                manager.setData(entity, "skyhighheroes:dyn/shield_right_arm_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm<s> shield!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/shield_left_arm_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/shield_right_arm_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>all<s> shields!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>shield<e>!");
                break;
            };
            break;
          case "hide":
            switch (argList[2]) {
              case "left":
                if (!nbt.getBoolean("shieldsLeft") && entity.getData("fiskheroes:shield_timer") > 0) {
                  manager.setData(entity, "skyhighheroes:dyn/shield_left_arm_deployed", false);
                  system.moduleMessage(this, entity, "<s>Retracted <sh>left arm<s> shield!");
                } else {
                  system.moduleMessage(this, entity, "<e>Unable to retract armed <eh>left arm<e> shield!");
                };
                break;
              case "right":
                if (!nbt.getBoolean("shieldsRight") && entity.getData("fiskheroes:shield_timer") > 0) {
                  manager.setData(entity, "skyhighheroes:dyn/shield_right_arm_deployed", false);
                  system.moduleMessage(this, entity, "<s>Retracted <sh>right arm<s> shield!");
                } else {
                  system.moduleMessage(this, entity, "<e>Unable to retract armed <eh>right arm<e> shield!");
                };
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/shield_left_arm_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/shield_right_arm_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>all<s> shields!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>shield<e>!");
                break;
            };
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Shields commands:");
            system.moduleMessage(this, entity, "<n>!shield arm <left|right|*> <nh>-<n> Arms shields");
            system.moduleMessage(this, entity, "<n>!shield disarm <left|right|*> <nh>-<n> Disarms shields");
            system.moduleMessage(this, entity, "<n>!shield show <left|right|*> <nh>-<n> Deploys shields");
            system.moduleMessage(this, entity, "<n>!shield hide <left|right|*> <nh>-<n> Retracts disarmed shields");
            system.moduleMessage(this, entity, "<n>!shield status <nh>-<n> Shows status of shields");
            system.moduleMessage(this, entity, "<n>!shield help <nh>-<n> Shows shields commands");
            break;
          case "status":
            system.moduleMessage(this, entity, "<n>Shields status:");
            system.moduleMessage(this, entity, "<n>Left: <nh>" + (nbt.getBoolean("shieldsLeft") ? "ARMED" : "DISARMED") + " <n>-<nh> " + ((entity.getData("skyhighheroes:dyn/shield_left_arm_deploy_timer") > 0) || (entity.getData("skyhighheroes:dyn/shield_left_arm_timer") > 0) ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right: <nh>" + (nbt.getBoolean("shieldsRight") ? "ARMED" : "DISARMED") + " <n>-<nh> " + ((entity.getData("skyhighheroes:dyn/shield_right_arm_deploy_timer") > 0) || (entity.getData("skyhighheroes:dyn/shield_right_arm_timer") > 0) ? "DEPLOYED" : "RETRACTED"));
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>shields<e> command! Try <eh>!shield help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>shields<e> command! Try <eh>!shield help<e> for a list of commands!");
      };
    },
    armHandler: function (entity, manager, arg) {
      var nbt = entity.getWornHelmet().nbt();
      switch (arg) {
        case "leftShield":
          manager.setBoolean(nbt, "shieldsLeft", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>left arm<s> shield!");
          return;
        case "rightShield":
          manager.setBoolean(nbt, "shieldsRight", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>right arm<s> shield!");
          return;
        case "shields":
          manager.setBoolean(nbt, "shieldsLeft", true);
          manager.setBoolean(nbt, "shieldsRight", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>all<s> shields!");
          return;
      };
    },
    disarmHandler: function (entity, manager, arg) {
      var nbt = entity.getWornHelmet().nbt();
      switch (arg) {
        case "leftShield":
          manager.setBoolean(nbt, "shieldsLeft", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>left arm<s> shield!");
          return;
        case "rightShield":
          manager.setBoolean(nbt, "shieldsRight", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>right arm<s> shield!");
          return;
        case "shields":
          manager.setBoolean(nbt, "shieldsLeft", false);
          manager.setBoolean(nbt, "shieldsRight", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> shields!");
          return;
      };
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      var nbt = entity.getWornHelmet().nbt();
      var left = (nbt.getBoolean("shieldsLeft")) ? "T" : "F";
      var right = (nbt.getBoolean("shieldsRight")) ? "T" : "F";
      if (modifier.name() == "fiskheroes:shield") {
        if (modifier.id() == "shields_" + left + right) {
          result = true;
        };
      };
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    initDamageProfiles: function (hero) {
      hero.addDamageProfile("SHIELD", {
        "types": {
          "BLUNT": 1.0
        }
      });
    },
    getDamageProfile: function (entity) {
      var result = null;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (entity.getData("skyhighheroes:dyn/shield_left_arm_timer") == 1 || entity.getData("skyhighheroes:dyn/shield_right_arm_timer") == 1) {
          result = "SHIELD";
        };
      };
      return result;
    },
    initAttributeProfiles: function (hero) {
      hero.addAttributeProfile("SHIELD_LEFT_ARM", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("BASE_SPEED", -0.75, 1);
        profile.addAttribute("SPRINT_SPEED", 0.0, 0);
        profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
        profile.addAttribute("JUMP_HEIGHT", -1.0, 1);
        profile.addAttribute("STEP_HEIGHT", -1.0, 1);
        profile.addAttribute("KNOCKBACK", 0.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
      });
      hero.addAttributeProfile("SHIELD_RIGHT_ARM", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("BASE_SPEED", -0.75, 1);
        profile.addAttribute("SPRINT_SPEED", 0.0, 0);
        profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
        profile.addAttribute("JUMP_HEIGHT", -1.0, 1);
        profile.addAttribute("STEP_HEIGHT", -1.0, 1);
        profile.addAttribute("KNOCKBACK", 0.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
      });
      hero.addAttributeProfile("SHIELD_BOTH_ARMS", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("BASE_SPEED", -0.75, 1);
        profile.addAttribute("SPRINT_SPEED", 0.0, 0);
        profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
        profile.addAttribute("JUMP_HEIGHT", -1.0, 1);
        profile.addAttribute("STEP_HEIGHT", -1.0, 1);
        profile.addAttribute("KNOCKBACK", 0.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
      });
    },
    getAttributeProfile: function (entity) {
      var result = null;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (entity.getData("fiskheroes:shield_blocking_timer") > 0 && entity.getData("skyhighheroes:dyn/shield_left_arm_timer") == 1) {
          result = "SHIELD_LEFT_ARM";
        };
        if (entity.getData("fiskheroes:shield_blocking_timer") > 0 && entity.getData("skyhighheroes:dyn/shield_right_arm_timer") == 1) {
          result = "SHIELD_RIGHT_ARM";
        };
        if (entity.getData("fiskheroes:shield_blocking_timer") > 0 && entity.getData("skyhighheroes:dyn/shield_left_arm_timer") == 1 && entity.getData("skyhighheroes:dyn/shield_right_arm_timer") == 1) {
          result = "SHIELD_BOTH_ARMS";
        };
      };
      return result;
    },
    whenDisabled: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      manager.setBoolean(nbt, "shieldsLeft", false);
      manager.setBoolean(nbt, "shieldsRight", false);
      manager.setData(entity, "skyhighheroes:dyn/shield_left_arm", false);
      manager.setData(entity, "skyhighheroes:dyn/shield_right_arm", false);
      manager.setData(entity, "skyhighheroes:dyn/shield_left_arm_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/shield_right_arm_deployed", false);
    },
    tickHandler: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      var left = nbt.getBoolean("shieldsLeft") && entity.getData("fiskheroes:shield");
      var right = nbt.getBoolean("shieldsRight") && entity.getData("fiskheroes:shield");
      if (entity.getData("fiskheroes:shield_timer") > 0) {
        manager.setData(entity, "skyhighheroes:dyn/shield_left_arm", left);
        manager.setData(entity, "skyhighheroes:dyn/shield_right_arm", right);
        if (entity.getData("fiskheroes:shield_timer") < 0.5) {
          if (left && right) {
            system.shoutMessage(entity, "<" + entity.getData("fiskheroes:disguise") + "> Activating Shields!", 16);
          } else {
            if (left) {
              system.shoutMessage(entity, "<" + entity.getData("fiskheroes:disguise") + "> Activating Left Shield!", 16);
            };
            if (right) {
              system.shoutMessage(entity, "<" + entity.getData("fiskheroes:disguise") + "> Activating Right Shield!", 16);
            };
          };
        };
      };
    },
    fightOrFlight: function (entity, manager) {
      if (!entity.getWornHelmet().nbt().getBoolean("shieldsLeft") || !entity.getWornHelmet().nbt().getBoolean("shieldsRight")) {
        manager.setBoolean(entity.getWornHelmet().nbt(), "shieldsLeft", true);
        manager.setBoolean(entity.getWornHelmet().nbt(), "shieldsRight", true);
        system.systemMessage(entity, "<n>Automatically armed <nh>shields<n>!");
      };
    }
  };
};