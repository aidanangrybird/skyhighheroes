/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  var cannonMultiTap = system.initMultiTap("skyhighheroes:dyn/cannon");
  return {
    name: "cannons",
    moduleMessageName: "Cannons",
    type: 13,
    command: "cannon",
    helpMessage: "<n>!cannon <nh>-<n> Cannons",
    disabledMessage: "<e>Module <eh>cannons<e> is disabled!",
    keyBinds: function (hero, color) {
      hero.addKeyBindFunc("CANNONS", (player, manager) => {
        //system.moduleMessage(this, player, "<e>To arm a cannon set do <eh>!cannon arm <arms|body|head><e>.");
        cannonMultiTap.tap(player, manager);
        return true;
      }, "\u00A7" + color + "Cannons (x2 to arm)", 4);
      hero.addKeyBindFunc("CHARGED_BEAM", (player, manager) => {
        cannonMultiTap.tap(player, manager);
        return true;
      }, "\u00A7" + color + "Cannons (x2 to disarm)", 4);
      hero.addKeyBind("CANNONS_ARMS", "\u00A7" + color + "", 4);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        var nbt = entity.getWornHelmet().nbt();
        var head = nbt.getBoolean("cannonsHead");
        var body = nbt.getBoolean("cannonsBody");
        var arms = nbt.getBoolean("cannonsArms");
        if (keyBind == "CANNONS" && !entity.getData("skyhighheroes:dyn/battle_mode")) {
          result = (!head && !body && !arms);
        };
        if (keyBind == "CHARGED_BEAM" && !entity.getData("skyhighheroes:dyn/battle_mode")) {
          result = (head || body || arms);
        };
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        var nbt = entity.getWornHelmet().nbt();
        var head = (nbt.getBoolean("cannonsHead")) ? "T" : "F";
        var body = (nbt.getBoolean("cannonsBody")) ? "T" : "F";
        var arms = (nbt.getBoolean("cannonsArms")) ? "T" : "F";
        if (modifier.name() == "fiskheroes:charged_beam") {
          if (modifier.id() == "cannons_" + head + body + arms) {
            result = true;
          };
        };
      };
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 5) {
        var nbt = entity.getWornHelmet().nbt();
        switch (argList[1]) {
          case "arm":
            switch (argList[2]) {
              case "head":
                manager.setBoolean(nbt, "cannonsHead", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>head<s> cannons!");
                break;
              case "body":
                manager.setBoolean(nbt, "cannonsBody", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>body<s> cannons!");
                break;
              case "arms":
                manager.setBoolean(nbt, "cannonsArms", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>arm<s> cannons!");
                break;
              case "*":
                manager.setBoolean(nbt, "cannonsHead", true);
                manager.setBoolean(nbt, "cannonsBody", true);
                manager.setBoolean(nbt, "cannonsArms", true);
                system.moduleMessage(this, entity, "<s>Armed <sh>all<s> cannons!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>cannon set<e>!");
                break;
            };
            break;
          case "disarm":
            switch (argList[2]) {
              case "head":
                manager.setBoolean(nbt, "cannonsHead", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>head<s> cannons!");
                break;
              case "body":
                manager.setBoolean(nbt, "cannonsBody", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>body<s> cannons!");
                break;
              case "arms":
                manager.setBoolean(nbt, "cannonsArms", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>arm<s> cannons!");
                break;
              case "*":
                manager.setBoolean(nbt, "cannonsHead", false);
                manager.setBoolean(nbt, "cannonsBody", false);
                manager.setBoolean(nbt, "cannonsArms", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> cannons!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>cannon set<e>!");
                break;
            };
            break;
          case "show":
            switch (argList[2]) {
              case "head":
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_left_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>head<s> cannons!");
                break;
              case "headLeft":
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_left_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left head<s> cannon!");
                break;
              case "headRight":
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right head<s> cannon!");
                break;
              case "body":
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_left_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>body<s> cannons!");
                break;
              case "bodyLeft":
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_left_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left body<s> cannon!");
                break;
              case "bodyRight":
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right body<s> cannon!");
                break;
              case "arms":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>arm<s> cannons!");
                break;
              case "leftArm":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm<s> cannon!");
                break;
              case "leftArmBottom":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm bottom<s> cannon!");
                break;
              case "leftArmFront":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm front<s> cannon!");
                break;
              case "leftArmBack":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm back<s> cannon!");
                break;
              case "rightArm":
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm<s> cannon!");
                break;
              case "rightArmBottom":
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm bottom<s> cannon!");
                break;
              case "rightArmFront":
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm front<s> cannon!");
                break;
              case "rightArmBack":
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm back<s> cannon!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_left_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_right_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_left_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>all<s> cannons!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>cannon<e>!");
                break;
            };
            break;
          case "hide":
            switch (argList[2]) {
              case "head":
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_left_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>head<s> cannons!");
                break;
              case "headLeft":
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_left_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left head<s> cannon!");
                break;
              case "headRight":
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right head<s> cannon!");
                break;
              case "body":
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_left_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>body<s> cannons!");
                break;
              case "bodyLeft":
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_left_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left body<s> cannon!");
                break;
              case "bodyRight":
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right body<s> cannon!");
                break;
              case "arms":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>arm<s> cannons!");
                break;
              case "leftArm":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm<s> cannon!");
                break;
              case "leftArmBottom":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm bottom<s> cannon!");
                break;
              case "leftArmFront":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm front<s> cannon!");
                break;
              case "leftArmBack":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm back<s> cannon!");
                break;
              case "rightArm":
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm<s> cannon!");
                break;
              case "rightArmBottom":
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm bottom<s> cannon!");
                break;
              case "rightArmFront":
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm front<s> cannon!");
                break;
              case "rightArmBack":
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm back<s> cannon!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_left_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_head_right_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_left_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/cannon_body_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>all<s> cannons!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>cannon<e>!");
                break;
            };
            break;
          case "set":
            switch (argList[2]) {
              case "holo":
                manager.setBoolean(nbt, "holoCannons", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("holoCannons")));
                system.moduleMessage(this, entity, "<n>Hologram set to <nh>" + nbt.getBoolean("holoCannons") + "<n>!");
                break;
              case "flushHead":
                manager.setBoolean(nbt, "flushHeadCannons", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("flushHeadCannons")));
                system.moduleMessage(this, entity, "<n>Flush Head Cannons set to <nh>" + nbt.getBoolean("flushHeadCannons") + "<n>!");
                break;
              case "flushLeftArm":
                manager.setBoolean(nbt, "flushLeftArmCannons", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("flushLeftArmCannons")));
                system.moduleMessage(this, entity, "<n>Flush Left Arm Cannon set to <nh>" + nbt.getBoolean("flushLeftArmCannons") + "<n>!");
                break;
              case "flushRightArm":
                manager.setBoolean(nbt, "flushRightArmCannons", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("flushRightArmCannons")));
                system.moduleMessage(this, entity, "<n>Flush Right Arm Cannon set to <nh>" + nbt.getBoolean("flushRightArmCannons") + "<n>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>cannon<e> setting!");
                break;
            };
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Cannons commands:");
            system.moduleMessage(this, entity, "<n>!cannon status <nh>-<n> Shows status of cannons");
            system.moduleMessage(this, entity, "<n>!cannon arm <head|body|arms|*> <nh>-<n> Arms set of cannons");
            system.moduleMessage(this, entity, "<n>!cannon disarm <head|body|arms|*> <nh>-<n> Disarm set of cannons");
            system.moduleMessage(this, entity, "<n>!cannon show <head|body|arms|*> <nh>-<n> Deploys cannons");
            system.moduleMessage(this, entity, "<n>!cannon hide <head|body|arms|*> <nh>-<n> Retracts cannons");
            system.moduleMessage(this, entity, "<n>!cannon set <holo|flushHead|flushLeftArm|flushRightArm> <nh>-<n> Settings");
            system.moduleMessage(this, entity, "<n>!cannon help <nh>-<n> Shows cannons commands");
            break;
          case "status":
            var headSet = (entity.getData("skyhighheroes:dyn/cannons_head_timer") > 0);
            var bodySet = (entity.getData("skyhighheroes:dyn/cannons_body_timer") > 0);
            var armSet = (entity.getData("skyhighheroes:dyn/cannons_arms_timer") > 0);
            system.moduleMessage(this, entity, "<n>Cannons status:");
            system.moduleMessage(this, entity, "<n>Head set: <nh>" + (nbt.getBoolean("cannonsHead") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Body set: <nh>" + (nbt.getBoolean("cannonsBody") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Arm set: <nh>" + (nbt.getBoolean("cannonsArms") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Left Head: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_head_left_deploy_timer") > 0) || headSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Head: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_head_right_deploy_timer") > 0) || headSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Body: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_body_left_deploy_timer") > 0) || bodySet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Body: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_body_right_deploy_timer") > 0) || bodySet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Arm bottom: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_left_arm_bottom_deploy_timer") > 0) || armSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Arm front: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_left_arm_front_deploy_timer") > 0) || armSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Arm back: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_left_arm_back_deploy_timer") > 0) || armSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Arm bottom: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_right_arm_bottom_deploy_timer") > 0) || armSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Arm front: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_right_arm_front_deploy_timer") > 0) || armSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Arm back: <nh>" + ((entity.getData("skyhighheroes:dyn/cannon_right_arm_back_deploy_timer") > 0) || armSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Flush Head Cannons: <nh>" + (nbt.getBoolean("flushHeadCannons") ? "ENABLED" : "DISABLED"));
            system.moduleMessage(this, entity, "<n>Flush Left Arm Cannon: <nh>" + (nbt.getBoolean("flushLeftArmCannons") ? "ENABLED" : "DISABLED"));
            system.moduleMessage(this, entity, "<n>Flush Right Arm Cannon: <nh>" + (nbt.getBoolean("flushRightArmCannons") ? "ENABLED" : "DISABLED"));
            system.moduleMessage(this, entity, "<n>Hologram: <nh>" + (nbt.getBoolean("holoCannons") ? "ENABLED" : "DISABLED"));
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>cannons<e> command! Try <eh>!cannon help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>cannons<e> command! Try <eh>!cannon help<e> for a list of commands!");
      };
    },
    armHandler: function (entity, manager, arg) {
      var nbt = entity.getWornHelmet().nbt();
      switch (arg) {
        case "headCannons":
          manager.setBoolean(nbt, "cannonsHead", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>head<s> cannons!");
          return;
        case "bodyCannons":
          manager.setBoolean(nbt, "cannonsBody", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>body<s> cannons!");
          return;
        case "armCannons":
          manager.setBoolean(nbt, "cannonsArms", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>arm<s> cannons!");
          return;
        case "cannons":
          manager.setBoolean(nbt, "cannonsHead", true);
          manager.setBoolean(nbt, "cannonsBody", true);
          manager.setBoolean(nbt, "cannonsArms", true);
          system.moduleMessage(this, entity, "<s>Armed <sh>all<s> cannons!");
          return;
      };
    },
    disarmHandler: function (entity, manager, arg) {
      var nbt = entity.getWornHelmet().nbt();
      switch (arg) {
        case "headCannons":
          manager.setBoolean(nbt, "cannonsHead", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>head<s> cannons!");
          return;
        case "bodyCannons":
          manager.setBoolean(nbt, "cannonsBody", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>body<s> cannons!");
          return;
        case "armCannons":
          manager.setBoolean(nbt, "cannonsArms", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>arm<s> cannons!");
          return;
        case "cannons":
          manager.setBoolean(nbt, "cannonsHead", false);
          manager.setBoolean(nbt, "cannonsBody", false);
          manager.setBoolean(nbt, "cannonsArms", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> cannons!");
          return;
      };
    },
    whenDisabled: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      manager.setBoolean(nbt, "cannonsHead", false);
      manager.setBoolean(nbt, "cannonsBody", false);
      manager.setBoolean(nbt, "cannonsArms", false);
      manager.setData(entity, "skyhighheroes:dyn/cannons_arms", false);
      manager.setData(entity, "skyhighheroes:dyn/cannons_body", false);
      manager.setData(entity, "skyhighheroes:dyn/cannons_head", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_bottom_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_front_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_back_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_bottom_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_front_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_back_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_head_left_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_head_right_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_body_left_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/cannon_body_right_deployed", false);
    },
    tickHandler: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      var head = nbt.getBoolean("cannonsHead") && entity.getData("fiskheroes:beam_charging");
      var body = nbt.getBoolean("cannonsBody") && entity.getData("fiskheroes:beam_charging");
      var arms = nbt.getBoolean("cannonsArms") && entity.getData("fiskheroes:beam_charging");
      if ((!nbt.getBoolean("cannonsHead") || !nbt.getBoolean("cannonsBody") || !nbt.getBoolean("cannonsArms")) && cannonMultiTap.multiTap(entity, manager, 2, 20, 1)) {
        manager.setBoolean(nbt, "cannonsHead", true);
        manager.setBoolean(nbt, "cannonsBody", true);
        manager.setBoolean(nbt, "cannonsArms", true);
        system.moduleMessage(this, entity, "<s>Armed <sh>all<s> cannons!");
      };
      if ((nbt.getBoolean("cannonsHead") || nbt.getBoolean("cannonsBody") || nbt.getBoolean("cannonsArms")) && cannonMultiTap.multiTap(entity, manager, 2, 20, 1)) {
        manager.setBoolean(nbt, "cannonsHead", false);
        manager.setBoolean(nbt, "cannonsBody", false);
        manager.setBoolean(nbt, "cannonsArms", false);
        system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> cannons!");
      };
      if ((nbt.getBoolean("cannonsHead") || nbt.getBoolean("cannonsBody") || nbt.getBoolean("cannonsArms")) && entity.getData("fiskheroes:beam_charge") > 0) {
        manager.setData(entity, "skyhighheroes:dyn/cannons_arms", arms);
        manager.setData(entity, "skyhighheroes:dyn/cannons_body", body);
        manager.setData(entity, "skyhighheroes:dyn/cannons_head", head);
        if (entity.getData("fiskheroes:beam_charge") < 0.1) {
          if (head && body && arms) {
            system.shoutMessage(entity, "Activating Cannons!", 16);
          } else if ((head && body && !arms) || (head && !body && arms) || (!head && body && arms)) {
            if (head && body && !arms) {
              system.shoutMessage(entity, "Activating Head and Body Cannons!", 16);
            };
            if (head && !body && arms) {
              system.shoutMessage(entity, "Activating Body and Arm Cannons!", 16);              
            };
            if (!head && body && arms) {
              system.shoutMessage(entity, "Activating Body and Arm Cannons!", 16);
            };
          } else {
            if (head) {
              system.shoutMessage(entity, "Activating Head Cannons!", 16);
            };
            if (body) {
              system.shoutMessage(entity, "Activating Body Cannons!", 16);
            };
            if (arms) {
              system.shoutMessage(entity, "Activating Arm Cannons!", 16);
            };
          };
        };
      };
      manager.setData(entity, "skyhighheroes:dyn/cannon_head_flush", nbt.getBoolean("flushHeadCannons"));
      manager.setData(entity, "skyhighheroes:dyn/cannon_left_arm_flush", nbt.getBoolean("flushLeftArmCannons"));
      manager.setData(entity, "skyhighheroes:dyn/cannon_right_arm_flush", nbt.getBoolean("flushRightArmCannons"));
      cannonMultiTap.tapReset(entity, manager);
    },
    fightOrFlight: function (entity, manager) {
      if (!entity.getWornHelmet().nbt().getBoolean("cannonsHead") || !entity.getWornHelmet().nbt().getBoolean("cannonsBody") || !entity.getWornHelmet().nbt().getBoolean("cannonsArms")) {
        manager.setBoolean(entity.getWornHelmet().nbt(), "cannonsHead", true);
        manager.setBoolean(entity.getWornHelmet().nbt(), "cannonsBody", true);
        manager.setBoolean(entity.getWornHelmet().nbt(), "cannonsArms", true);
        system.systemMessage(entity, "<n>Automatically armed <nh>cannons<n>!");
      }
    }
  };
};