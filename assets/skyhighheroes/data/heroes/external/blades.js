/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  var bladeMultiTap = system.initMultiTap("skyhighheroes:dyn/blade");
  return {
    name: "blades",
    moduleMessageName: "Blades",
    type: 14,
    command: "blade",
    helpMessage: "<n>!blade <nh>-<n> Blades",
    disabledMessage: "<e>Module <eh>bladeSystem<e> is disabled!",
    keyBinds: function (hero, color) {
      hero.addKeyBindFunc("BLADES", (player, manager) => {
        //system.moduleMessage(this, player, "<e>To arm a blade do <eh>!blade arm <left|right><e>.");
        bladeMultiTap.tap(player, manager);
        return false;
      }, "\u00A7" + color + "Blades (x2 to arm)", 1);
      hero.addKeyBindFunc("BLADE", (player, manager) => {
        bladeMultiTap.tap(player, manager);
        return true;
      }, "\u00A7" + color + "Blades (x2 to disarm)", 1);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        var nbt = entity.getWornHelmet().nbt();
        var left = nbt.getBoolean("bladesLeft");
        var right = nbt.getBoolean("bladesRight");
        if (keyBind == "BLADES" && !entity.getData("skyhighheroes:dyn/battle_mode")) {
          result = (!left && !right);
        };
        if (keyBind == "BLADE" && !entity.getData("skyhighheroes:dyn/battle_mode")) {
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
                manager.setBoolean(nbt, "bladesLeft", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>left arm<s> blade!");
                break;
              case "right":
                manager.setBoolean(nbt, "bladesRight", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>right arm<s> blade!");
                break;
              case "*":
                manager.setBoolean(nbt, "bladesLeft", true);
                manager.setBoolean(nbt, "bladesRight", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>all<s> blades!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>blade<e>!");
                break;
            };
            break;
          case "disarm":
            switch (argList[2]) {
              case "left":
                manager.setBoolean(nbt, "bladesLeft", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>left arm<s> blade!");
                break;
              case "right":
                manager.setBoolean(nbt, "bladesRight", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>right arm<s> blade!");
                break;
              case "*":
                manager.setBoolean(nbt, "bladesLeft", false);
                manager.setBoolean(nbt, "bladesRight", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> blades!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>blade<e>!");
                break;
            };
            break;
          case "show":
            switch (argList[2]) {
              case "left":
                manager.setData(entity, "skyhighheroes:dyn/blade_left_arm_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm<s> blade!");
                break;
              case "right":
                manager.setData(entity, "skyhighheroes:dyn/blade_right_arm_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm<s> blade!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/blade_left_arm_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/blade_right_arm_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>all<s> blades!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>blade<e>!");
                break;
            };
            break;
          case "hide":
            switch (argList[2]) {
              case "left":
                manager.setData(entity, "skyhighheroes:dyn/blade_left_arm_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm<s> blade!");
                break;
              case "right":
                manager.setData(entity, "skyhighheroes:dyn/blade_right_arm_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm<s> blade!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/blade_left_arm_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/blade_right_arm_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>all<s> blades!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>blade<e>!");
                break;
            };
            break;
          case "stealthOn":
            switch (argList[2]) {
              case "left":
                manager.setBoolean(nbt, "bladesLeftStealth", true);
                system.moduleMessage(this, entity, "<s>Enabled stealth mode on <sh>left arm<s> blade!");
                break;
              case "right":
                manager.setBoolean(nbt, "bladesRightStealth", true);
                system.moduleMessage(this, entity, "<s>Enabled stealth mode on <sh>right arm<s> blade!");
                break;
              case "*":
                manager.setBoolean(nbt, "bladesLeftStealth", true);
                manager.setBoolean(nbt, "bladesRightStealth", true);
                system.moduleMessage(this, entity, "<s>Enabled stealth mode on <sh>all<s> blades!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>blade<e>!");
                break;
            };
            break;
          case "stealthOff":
            switch (argList[2]) {
              case "left":
                manager.setBoolean(nbt, "bladesLeftStealth", false);
                system.moduleMessage(this, entity, "<s>Disabled stealth mode on <sh>left arm<s> blade!");
                break;
              case "right":
                manager.setBoolean(nbt, "bladesRightStealth", false);
                system.moduleMessage(this, entity, "<s>Disabled stealth mode on <sh>right arm<s> blade!");
                break;
              case "*":
                manager.setBoolean(nbt, "bladesLeftStealth", false);
                manager.setBoolean(nbt, "bladesRightStealth", false);
                system.moduleMessage(this, entity, "<s>Disabled stealth mode on <sh>all<s> blades!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>blade<e>!");
                break;
            };
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Blades commands:");
            system.moduleMessage(this, entity, "<n>!blade arm <left|right|*> <nh>-<n> Arms blades");
            system.moduleMessage(this, entity, "<n>!blade disarm <left|right|*> <nh>-<n> Disarms blades");
            system.moduleMessage(this, entity, "<n>!blade show <left|right|*> <nh>-<n> Deploys blades");
            system.moduleMessage(this, entity, "<n>!blade hide <left|right|*> <nh>-<n> Retracts disarmed blades");
            system.moduleMessage(this, entity, "<n>!blade stealthOn <left|right|*> <nh>-<n> Enables stealth mode for blades");
            system.moduleMessage(this, entity, "<n>!blade stealthOff <left|right|*> <nh>-<n> Disables stealth mode for blades");
            system.moduleMessage(this, entity, "<n>!blade status <nh>-<n> Shows status of blades");
            system.moduleMessage(this, entity, "<n>!blade help <nh>-<n> Shows blades commands");
            break;
          case "status":
            system.moduleMessage(this, entity, "<n>Blades status:");
            system.moduleMessage(this, entity, "<n>Left: <nh>" + (nbt.getBoolean("bladesLeft") ? "ARMED" : "DISARMED") + " <n>-<nh> " + ((entity.getData("skyhighheroes:dyn/blade_left_arm_deploy_timer") > 0) || (entity.getData("skyhighheroes:dyn/blade_left_arm_timer") > 0) ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left stealth mode: <nh>" + (nbt.getBoolean("bladesLeftStealth") ? "ENGAGED" : "DISENGAGED"));
            system.moduleMessage(this, entity, "<n>Right: <nh>" + (nbt.getBoolean("bladesRight") ? "ARMED" : "DISARMED") + " <n>-<nh> " + ((entity.getData("skyhighheroes:dyn/blade_right_arm_deploy_timer") > 0) || (entity.getData("skyhighheroes:dyn/blade_right_arm_timer") > 0) ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right stealth mode: <nh>" + (nbt.getBoolean("bladesRightStealth") ? "ENGAGED" : "DISENGAGED"));
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>blades<e> command! Try <eh>!blade help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>blades<e> command! Try <eh>!blade help<e> for a list of commands!");
      };
    },
    armHandler: function (entity, manager, arg) {
      var nbt = entity.getWornHelmet().nbt();
      switch (arg) {
        case "leftBlade":
          manager.setBoolean(nbt, "bladesLeft", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>left arm<s> blade!");
          return;
        case "rightBlade":
          manager.setBoolean(nbt, "bladesRight", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>right arm<s> blade!");
          return;
        case "blades":
          manager.setBoolean(nbt, "bladesLeft", true);
          manager.setBoolean(nbt, "bladesRight", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>all<s> blades!");
          return;
      };
    },
    disarmHandler: function (entity, manager, arg) {
      var nbt = entity.getWornHelmet().nbt();
      switch (arg) {
        case "leftBlade":
          manager.setBoolean(nbt, "bladesLeft", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>left arm<s> blade!");
          return;
        case "rightBlade":
          manager.setBoolean(nbt, "bladesRight", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>right arm<s> blade!");
          return;
        case "blades":
          manager.setBoolean(nbt, "bladesLeft", false);
          manager.setBoolean(nbt, "bladesRight", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> blades!");
          return;
      };
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (modifier.name() == "fiskheroes:blade") {
          result = true;
        };
      };
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    initDamageProfiles: function (hero) {
      hero.addDamageProfile("BLADE", {
        "types": {
          "SHARP": 1.0
        }
      });
    },
    getDamageProfile: function (entity) {
      var result = null;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (entity.getData("skyhighheroes:dyn/blade_left_arm_timer") == 1 || entity.getData("skyhighheroes:dyn/blade_right_arm_timer") == 1) {
          result = "BLADE";
        };
      };
      return result;
    },
    initAttributeProfiles: function (hero) {
      hero.addAttributeProfile("BLADE_LEFT_ARM", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("SPRINT_SPEED", 1.0, 1);
        profile.addAttribute("KNOCKBACK", 5.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", 9.0, 0);
      });
      hero.addAttributeProfile("BLADE_RIGHT_ARM", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("SPRINT_SPEED", 1.0, 1);
        profile.addAttribute("KNOCKBACK", 5.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", 9.0, 0);
      });
      hero.addAttributeProfile("BLADE_BOTH_ARMS", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("SPRINT_SPEED", 1.5, 1);
        profile.addAttribute("KNOCKBACK", 5.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", 14.0, 0);
      });
    },
    getAttributeProfile: function (entity) {
      var result = null;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (entity.getData("skyhighheroes:dyn/blade_left_arm_timer") == 1) {
          result = "BLADE_LEFT_ARM";
        };
        if (entity.getData("skyhighheroes:dyn/blade_right_arm_timer") == 1) {
          result = "BLADE_RIGHT_ARM";
        };
        if (entity.getData("skyhighheroes:dyn/blade_left_arm_timer") == 1 && entity.getData("skyhighheroes:dyn/blade_right_arm_timer") == 1) {
          result = "BLADE_BOTH_ARMS";
        };
      };
      return result;
    },
    whenDisabled: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      manager.setBoolean(nbt, "bladesLeft", false);
      manager.setBoolean(nbt, "bladesRight", false);
      manager.setBoolean(nbt, "bladesLeftStealth", false);
      manager.setBoolean(nbt, "bladesRightStealth", false);
      manager.setData(entity, "skyhighheroes:dyn/blade_left_arm", false);
      manager.setData(entity, "skyhighheroes:dyn/blade_right_arm", false);
      manager.setData(entity, "skyhighheroes:dyn/blade_left_arm_stealth", false);
      manager.setData(entity, "skyhighheroes:dyn/blade_right_arm_stealth", false);
      manager.setData(entity, "skyhighheroes:dyn/blade_left_arm_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/blade_right_arm_deployed", false);
    },
    tickHandler: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      var left = nbt.getBoolean("bladesLeft") && entity.getData("fiskheroes:blade");
      var right = nbt.getBoolean("bladesRight") && entity.getData("fiskheroes:blade");
      if ((!nbt.getBoolean("bladesLeft") || !nbt.getBoolean("bladesRight")) && bladeMultiTap.multiTap(entity, manager, 2, 20, 1)) {
        manager.setBoolean(nbt, "bladesLeft", true);
        manager.setBoolean(nbt, "bladesRight", true);
        system.moduleMessage(this, entity, "<s>Armed <sh>all<s> blades!");
      };
      if ((nbt.getBoolean("bladesLeft") || nbt.getBoolean("bladesRight")) && bladeMultiTap.multiTap(entity, manager, 2, 20, 1)) {
        manager.setBoolean(nbt, "bladesLeft", false);
        manager.setBoolean(nbt, "bladesRight", false);
        system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> blades!");
      };
      if ((nbt.getBoolean("bladesLeft") || nbt.getBoolean("bladesRight")) && entity.getData("fiskheroes:blade_timer") > 0) {
        manager.setData(entity, "skyhighheroes:dyn/blade_left_arm", left);
        manager.setData(entity, "skyhighheroes:dyn/blade_right_arm", right);
        if (entity.getData("fiskheroes:blade_timer") < 0.2) {
          if (left && right) {
            system.shoutMessage(entity, "<" + entity.getData("fiskheroes:disguise") + "> Activating Blades!", 16);
          } else {
            if (left) {
              system.shoutMessage(entity, "<" + entity.getData("fiskheroes:disguise") + "> Activating Left Blade!", 16);
            };
            if (right) {
              system.shoutMessage(entity, "<" + entity.getData("fiskheroes:disguise") + "> Activating Right Blade!", 16);
            };
          };
        };
      };
      var leftStealth = nbt.getBoolean("bladesLeftStealth");
      var rightStealth = nbt.getBoolean("bladesRightStealth");
      manager.setData(entity, "skyhighheroes:dyn/blade_left_arm_stealth", leftStealth);
      manager.setData(entity, "skyhighheroes:dyn/blade_right_arm_stealth", rightStealth);
      bladeMultiTap.tapReset(entity, manager);
    },
    fightOrFlight: function (entity, manager) {
      if (!entity.getWornHelmet().nbt().getBoolean("bladesLeft") || !entity.getWornHelmet().nbt().getBoolean("bladesRight")) {
        manager.setBoolean(entity.getWornHelmet().nbt(), "bladesLeft", true);
        manager.setBoolean(entity.getWornHelmet().nbt(), "bladesRight", true);
        system.systemMessage(entity, "<n>Automatically armed <nh>blades<n>!");
      };
      if (entity.getData("fiskheroes:blade_timer") == 0) {
        manager.setData(entity, "fiskheroes:blade", true);
        manager.setData(entity, "fiskheroes:blade_timer", 1.0);
        system.systemMessage(entity, "<n>Automatically deployed <nh>blades<n>!");
      };
    }
  };
};