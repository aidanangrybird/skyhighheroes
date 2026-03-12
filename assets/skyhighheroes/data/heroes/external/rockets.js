/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  return {
    name: "rockets",
    moduleMessageName: "Rockets",
    type: 12,
    command: "rocket",
    helpMessage: "<n>!rocket <nh>-<n> Rockets",
    disabledMessage: "<e>Module <eh>rockets<e> is disabled!",
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 5) {
        var nbt = system.mainNBT(entity);
        switch(argList[1]) {
          case "arm":
            if (nbt.getBoolean("wings")) {
              system.moduleMessage(this, entity, "<e>Unable to arm rockets! Wings are already armed!");
            } else {
              switch (argList[2]) {
                case "armsOnFall":
                  manager.setBoolean(nbt, "armRocketsOnFall", true);
                  system.moduleMessage(this, entity, "<s>Armed arm rockets for <sh>onFall<s> protection!");
                  break;
                case "bodyOnFall":
                  manager.setBoolean(nbt, "bodyRocketsOnFall", true);
                  system.moduleMessage(this, entity, "<s>Armed body rockets for <sh>onFall<s> protection!");
                  break;
                case "legsOnFall":
                  manager.setBoolean(nbt, "legRocketsOnFall", true);
                  system.moduleMessage(this, entity, "<s>Armed leg rockets for <sh>onFall<s> protection!");
                  break;
                case "arms":
                  manager.setBoolean(nbt, "rocketsArms", true);
                  system.moduleMessage(this, entity, "<s>Armed <sh>arm<s> rockets!");
                  break;
                case "body":
                  manager.setBoolean(nbt, "rocketsBody", true);
                  system.moduleMessage(this, entity, "<s>Armed <sh>body<s> rockets!");
                  break;
                case "legs":
                  manager.setBoolean(nbt, "rocketsLegs", true);
                  system.moduleMessage(this, entity, "<s>Armed <sh>leg<s> rockets!");
                  break;
                case "wings":
                  manager.setBoolean(nbt, "rocketsWings", true);
                  system.moduleMessage(this, entity, "<s>Armed <sh>wings<s> to deploy on rockets!");
                  break;
                case "*":
                  manager.setBoolean(nbt, "rocketsArms", true);
                  manager.setBoolean(nbt, "rocketsBody", true);
                  manager.setBoolean(nbt, "rocketsLegs", true);
                  system.moduleMessage(this, entity, "<s>Armed <sh>all<s> rockets!");
                  break;
                default:
                  system.moduleMessage(this, entity, "<e>Unknown <eh>rocket set<e>!");
                  break;
              };
            };
            break;
          case "disarm":
            switch (argList[2]) {
              case "armsOnFall":
                manager.setBoolean(nbt, "armsRocketsOnFall", false);
                system.moduleMessage(this, entity, "<s>Disarmed arm rockets for <sh>onFall<s> protection!");
                break;
              case "bodyOnFall":
                manager.setBoolean(nbt, "bodyRocketsOnFall", false);
                system.moduleMessage(this, entity, "<s>Disarmed body rockets for <sh>onFall<s> protection!");
                break;
              case "legsOnFall":
                manager.setBoolean(nbt, "legRocketsOnFall", false);
                system.moduleMessage(this, entity, "<s>Disarmed leg rockets for <sh>onFall<s> protection!");
                break;
              case "arms":
                if (!(nbt.getBoolean("rocketsArms") && entity.getData("fiskheroes:flight_timer") > 0)) {
                  manager.setBoolean(nbt, "rocketsArms", false);
                  system.moduleMessage(this, entity, "<s>Disarmed <sh>arm<s> rockets!");
                } else {
                  system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>arm<e> rockets!");
                };
                break;
              case "body":
                if (!(nbt.getBoolean("rocketsBody") && entity.getData("fiskheroes:flight_timer") > 0)) {
                  manager.setBoolean(nbt, "rocketsBody", false);
                  system.moduleMessage(this, entity, "<s>Disarmed <sh>body<s> rockets!");
                } else {
                  system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>body<e> rockets!");
                };
                break;
              case "legs":
                if (!(nbt.getBoolean("rocketsLegs") && entity.getData("fiskheroes:flight_timer") > 0)) {
                  manager.setBoolean(nbt, "rocketsLegs", false);
                  system.moduleMessage(this, entity, "<s>Disarmed <sh>leg<s> rockets!");
                } else {
                  system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>leg<e> rockets!");
                };
                break;
              case "wings":
                manager.setBoolean(nbt, "rocketsWings", false);
                system.moduleMessage(this, entity, "<s>Disarmed <sh>wings<s> to deploy on rockets!");
                break;
              case "*":
                if (!(nbt.getBoolean("rocketsArms") && entity.getData("fiskheroes:flight_timer") > 0)) {
                  manager.setBoolean(nbt, "rocketsArms", false);
                  system.moduleMessage(this, entity, "<s>Disarmed <sh>arm<s> rockets!");
                } else {
                  system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>arm<e> rockets!");
                };
                if (!(nbt.getBoolean("rocketsBody") && entity.getData("fiskheroes:flight_timer") > 0)) {
                  manager.setBoolean(nbt, "rocketsBody", false);
                  system.moduleMessage(this, entity, "<s>Disarmed <sh>body<s> rockets!");
                } else {
                  system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>body<e> rockets!");
                };
                if (!(nbt.getBoolean("rocketsLegs") && entity.getData("fiskheroes:flight_timer") > 0)) {
                  manager.setBoolean(nbt, "rocketsLegs", false);
                  system.moduleMessage(this, entity, "<s>Disarmed <sh>leg<s> rockets!");
                } else {
                  system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>leg<e> rockets!");
                };
                system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> inactive rockets!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>rocket set<e>!");
                break;
            };
            break;
          case "show":
            switch (argList[2]) {
              case "arms":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>arm<s> rockets!");
                break;
              case "leftArm":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm<s> rockets!");
                break;
              case "leftArmOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm outer<s> rocket!");
                break;
              case "leftArmFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm front<s> rocket!");
                break;
              case "leftArmBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left arm back<s> rocket!");
                break;
              case "rightArm":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm<s> rockets!");
                break;
              case "rightArmOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm outer<s> rocket!");
                break;
              case "rightArmFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm front<s> rocket!");
                break;
              case "rightArmBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right arm back<s> rocket!");
                break;
              case "body":
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_left_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>body<s> rockets!");
                break;
              case "bodyLeft":
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_left_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left body<s> rocket!");
                break;
              case "bodyRight":
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right body<s> rocket!");
              case "legs":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>leg<s> rockets!");
                break;
              case "leftLeg":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left leg<s> rockets!");
                break;
              case "leftLegMain":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>main left leg<s> rocket!");
                break;
              case "leftLegSides":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left leg side<s> rockets!");
                break;
              case "leftLegOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left leg outer<s> rocket!");
                break;
              case "leftLegInner":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left leg inner<s> rocket!");
                break;
              case "leftLegFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left leg front<s> rocket!");
                break;
              case "leftLegBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>left leg back<s> rocket!");
                break;
              case "rightLeg":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right leg<s> rockets!");
                break;
              case "rightLegMain":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>main right leg<s> rocket!");
                break;
              case "rightLegOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right leg outer<s> rocket!");
                break;
              case "rightLegInner":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right leg inner<s> rocket!");
                break;
              case "rightLegFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right leg front<s> rocket!");
                break;
              case "rightLegBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Deployed <sh>right leg back<s> rocket!");
                break;
              case "legsMain":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>main leg<s> rockets!");
                break;
              case "legsSides":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>side leg<s> rockets!");
                break;
              case "legsOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                system.moduleMessage(this, entity, "<s>Deployed <sh>outer leg<s> rockets!");
                break;
              case "legsInner":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                system.moduleMessage(this, entity, "<s>Deployed <sh>inner leg<s> rockets!");
                break;
              case "legsFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Deployed <sh>front leg<s> rockets!");
                break;
              case "legsBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Deployed <sh>back leg<s> rockets!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_left_deployed", true);
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_right_deployed", true);
                system.moduleMessage(this, entity, "<s>Deployed <sh>all<s> rockets!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>rocket<e>!");
                break;
            };
            break;
          case "hide":
            switch (argList[2]) {
              case "arms":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>arm<s> rockets!");
                break;
              case "leftArm":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm<s> rockets!");
                break;
              case "leftArmOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm outer<s> rocket!");
                break;
              case "leftArmFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm front<s> rocket!");
                break;
              case "leftArmBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left arm back<s> rocket!");
                break;
              case "rightArm":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm<s> rockets!");
                break;
              case "rightArmOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm outer<s> rocket!");
                break;
              case "rightArmFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm front<s> rocket!");
                break;
              case "rightArmBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right arm back<s> rocket!");
                break;
              case "body":
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_left_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>body<s> rockets!");
                break;
              case "bodyLeft":
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_left_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left body<s> rocket!");
                break;
              case "bodyRight":
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right body<s> rocket!");
              case "legs":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>leg<s> rockets!");
                break;
              case "leftLeg":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left leg<s> rockets!");
                break;
              case "leftLegMain":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>main left leg<s> rocket!");
                break;
              case "leftLegSides":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left leg side<s> rockets!");
                break;
              case "leftLegOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left leg outer<s> rocket!");
                break;
              case "leftLegInner":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left leg inner<s> rocket!");
                break;
              case "leftLegFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left leg front<s> rocket!");
                break;
              case "leftLegBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>left leg back<s> rocket!");
                break;
              case "rightLeg":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right leg<s> rockets!");
                break;
              case "rightLegMain":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>main right leg<s> rocket!");
                break;
              case "rightLegSides":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right leg side<s> rockets!");
                break;
              case "rightLegOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right leg outer<s> rocket!");
                break;
              case "rightLegInner":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right leg inner<s> rocket!");
                break;
              case "rightLegFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right leg front<s> rocket!");
                break;
              case "rightLegBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>right leg back<s> rocket!");
                break;
              case "legsMain":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>main leg<s> rockets!");
                break;
              case "legsSides":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>side leg<s> rockets!");
                break;
              case "legsOuter":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>outer leg<s> rockets!");
                break;
              case "legsInner":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>inner leg<s> rockets!");
                break;
              case "legsFront":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>front leg<s> rockets!");
                break;
              case "legsBack":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>back leg<s> rockets!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_left_deployed", false);
                manager.setData(entity, "skyhighheroes:dyn/rocket_body_right_deployed", false);
                system.moduleMessage(this, entity, "<s>Retracted <sh>all<s> rockets!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>rocket<e>!");
                break;
            };
            break;
          case "set":
            switch (argList[2]) {
              case "holo":
                manager.setBoolean(nbt, "holoFlight", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("holoFlight")));
                system.moduleMessage(this, entity, "<n>Hologram set to <nh>" + nbt.getBoolean("holoFlight") + "<n>!");
                break;
              case "holoBoost":
                manager.setBoolean(nbt, "holoBoostFlight", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("holoBoostFlight")));
                system.moduleMessage(this, entity, "<n>Hologram Boost set to <nh>" + nbt.getBoolean("holoBoostFlight") + "<n>!");
                break;
              case "inner":
                manager.setBoolean(nbt, "innerRockets", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("innerRockets")));
                system.moduleMessage(this, entity, "<n>Inner Rockets set to <nh>" + nbt.getBoolean("innerRockets") + "<n>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>rocket<e> setting!");
                break;
            };
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Rockets commands:");
            system.moduleMessage(this, entity, "<n>!rocket arm <onFall|arms|body|legs|*> <nh>-<n> Arms set of rockets or onFall protection");
            system.moduleMessage(this, entity, "<n>!rocket disarm <onFall|arms|body|legs|*> <nh>-<n> Disarms set of rockets or onFall protection");
            system.moduleMessage(this, entity, "<n>!rocket show <rocket|rocketSet> <nh>-<n> Deploys set of rockets");
            system.moduleMessage(this, entity, "<n>!rocket hide <rocket|rocketSet> <nh>-<n> Retracts set of rockets");
            system.moduleMessage(this, entity, "<n>!rocket set <holo|holoBoost|inner> <nh>-<n> Settings");
            system.moduleMessage(this, entity, "<n>!rocket status <nh>-<n> Shows status of rockets");
            system.moduleMessage(this, entity, "<n>!rocket help <nh>-<n> Shows rockets commands");
            break;
          case "status":
            var armsSet = (entity.getData("skyhighheroes:dyn/rockets_arms_timer") > 0);
            var bodySet = (entity.getData("skyhighheroes:dyn/rockets_body_timer") > 0);
            var legsSet = (entity.getData("skyhighheroes:dyn/rockets_legs_timer") > 0);
            system.moduleMessage(this, entity, "<n>Rocket status:");
            system.moduleMessage(this, entity, "<n>Arm set: <nh>" + (nbt.getBoolean("rocketsArms") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Body set: <nh>" + (nbt.getBoolean("rocketsBody") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Leg set: <nh>" + (nbt.getBoolean("rocketsLegs") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Arm set fall protection: <nh>" + (nbt.getBoolean("armRocketsOnFall") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Body set fall protection: <nh>" + (nbt.getBoolean("bodyRocketsOnFall") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Leg set fall protection: <nh>" + (nbt.getBoolean("legRocketsOnFall") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Wings: <nh>" + (nbt.getBoolean("rocketsWings") ? "ARMED" : "DISARMED"));
            system.moduleMessage(this, entity, "<n>Left Arm outer: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_left_arm_outer_deploy_timer") > 0) || armsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Arm front: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_left_arm_front_deploy_timer") > 0) || armsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Arm back: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_left_arm_back_deploy_timer") > 0) || armsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>right Arm outer: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_right_arm_outer_deploy_timer") > 0) || armsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>right Arm front: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_right_arm_front_deploy_timer") > 0) || armsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>right Arm back: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_right_arm_back_deploy_timer") > 0) || armsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Body: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_body_left_deploy_timer") > 0) || bodySet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Body: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_body_right_deploy_timer") > 0) || bodySet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Leg inner: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_left_leg_inner_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Leg outer: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_left_leg_outer_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Leg front: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_left_leg_front_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Leg back: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_left_leg_back_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));;
            system.moduleMessage(this, entity, "<n>Right Leg inner: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_right_leg_inner_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Leg outer: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_right_leg_outer_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Leg front: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_right_leg_front_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Leg back: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_right_leg_back_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Left Leg main: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_left_leg_main_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Right Leg main: <nh>" + ((entity.getData("skyhighheroes:dyn/rocket_right_leg_main_deploy_timer") > 0) || legsSet ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Hologram: <nh>" + (nbt.getBoolean("holoFlight") ? "ENABLED" : "DISABLED"));
            system.moduleMessage(this, entity, "<n>Hologram Boost: <nh>" + (nbt.getBoolean("holoBoostFlight") ? "ENABLED" : "DISABLED"));
            system.moduleMessage(this, entity, "<n>Inner: <nh>" + (nbt.getBoolean("innerRockets") ? "ENABLED" : "DISABLED"));
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>rockets<e> command! Try <eh>!rocket help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>rockets<e> command! Try <eh>!rocket help<e> for a list of commands!");
      };
    },
    armHandler: function (entity, manager, arg) {
      var nbt = system.mainNBT(entity);
      if (nbt.getBoolean("wings")) {
        system.moduleMessage(this, entity, "<e>Unable to arm rockets! Wings are already armed!");
      } else {
        switch(arg) {
          case "armsRockets":
            manager.setBoolean(nbt, "rocketsArms", true);
            system.moduleMessage(this, entity, "<s>Armed <sh>arm<s> rockets!");
            return;
          case "bodyRockets":
            manager.setBoolean(nbt, "rocketsBody", true);
            system.moduleMessage(this, entity, "<s>Armed <sh>body<s> rockets!");
            return;
          case "legsRockets":
            manager.setBoolean(nbt, "rocketsLegs", true);
            system.moduleMessage(this, entity, "<s>Armed <sh>leg<s> rockets!");
            return;
          case "wingsRockets":
            manager.setBoolean(nbt, "rocketsWings", true);
            system.moduleMessage(this, entity, "<s>Armed <sh>wings<s> to deploy on rockets!");
            return;
          case "rockets":
            manager.setBoolean(nbt, "rocketsArms", true);
            manager.setBoolean(nbt, "rocketsBody", true);
            manager.setBoolean(nbt, "rocketsLegs", true);
            system.moduleMessage(this, entity, "<s>Armed <sh>all<s> rockets!");
            return;
        };
      };
    },
    disarmHandler: function (entity, manager, arg) {
      var nbt = system.mainNBT(entity);
      switch (arg) {
        case "armsRockets":
          if (!(nbt.getBoolean("rocketsArms") && entity.getData("fiskheroes:flight_timer") > 0)) {
            manager.setBoolean(nbt, "rocketsArms", false);
            system.moduleMessage(this, entity, "<s>Disarmed <sh>arm<s> rockets!");
          } else {
            system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>arm<e> rockets!");
          };
          return;
        case "bodyRockets":
          if (!(nbt.getBoolean("rocketsBody") && entity.getData("fiskheroes:flight_timer") > 0)) {
            manager.setBoolean(nbt, "rocketsBody", false);
            system.moduleMessage(this, entity, "<s>Disarmed <sh>body<s> rockets!");
          } else {
            system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>body<e> rockets!");
          };
          return;
        case "legsRockets":
          if (!(nbt.getBoolean("rocketsLegs") && entity.getData("fiskheroes:flight_timer") > 0)) {
            manager.setBoolean(nbt, "rocketsLegs", false);
            system.moduleMessage(this, entity, "<s>Disarmed <sh>leg<s> rockets!");
          } else {
            system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>leg<e> rockets!");
          };
          return;
        case "wingsRockets":
          manager.setBoolean(nbt, "rocketsWings", false);
          system.moduleMessage(this, entity, "<s>Disarmed <sh>wings<s> to deploy on rockets!");
          return;
        case "rockets":
          if (!(nbt.getBoolean("rocketsArms") && entity.getData("fiskheroes:flight_timer") > 0)) {
            manager.setBoolean(nbt, "rocketsArms", false);
            system.moduleMessage(this, entity, "<s>Disarmed <sh>arm<s> rockets!");
          } else {
            system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>arm<e> rockets!");
          };
          if (!(nbt.getBoolean("rocketsBody") && entity.getData("fiskheroes:flight_timer") > 0)) {
            manager.setBoolean(nbt, "rocketsBody", false);
            system.moduleMessage(this, entity, "<s>Disarmed <sh>body<s> rockets!");
          } else {
            system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>body<e> rockets!");
          };
          if (!(nbt.getBoolean("rocketsLegs") && entity.getData("fiskheroes:flight_timer") > 0)) {
            manager.setBoolean(nbt, "rocketsLegs", false);
            system.moduleMessage(this, entity, "<s>Disarmed <sh>leg<s> rockets!");
          } else {
            system.moduleMessage(this, entity, "<e>Unable to disarm active <eh>leg<e> rockets!");
          };
          system.moduleMessage(this, entity, "<s>Disarmed <sh>all<s> inactive rockets!");
          return;
      }
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        var nbt = system.mainNBT(entity);
        var arms = (nbt.getBoolean("rocketsArms")) ? "T" : "F";
        var body = (nbt.getBoolean("rocketsBody")) ? "T" : "F";
        var legs = (nbt.getBoolean("rocketsLegs")) ? "T" : "F";
        if (modifier.name() == "fiskheroes:controlled_flight" && !entity.getData("skyhighheroes:dyn/battle_mode")) {
          if (modifier.id() == "rockets_" + arms + body + legs) {
            result = nbt.getBoolean("rocketsArms") || nbt.getBoolean("rocketsBody") || nbt.getBoolean("rocketsLegs");
          };
        };
      };
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    whenDisabled: function (entity, manager) {
      var nbt = system.mainNBT(entity);
      manager.setBoolean(nbt, "rocketsArms", false);
      manager.setBoolean(nbt, "rocketsBody", false);
      manager.setBoolean(nbt, "rocketsLegs", false);
      manager.setBoolean(nbt, "rocketsWings", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_outer_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_front_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_left_arm_back_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_outer_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_front_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_right_arm_back_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_main_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_main_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_outer_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_inner_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_front_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_left_leg_back_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_outer_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_inner_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_front_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_right_leg_back_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_body_left_deployed", false);
      manager.setData(entity, "skyhighheroes:dyn/rocket_body_right_deployed", false);
    },
    tickHandler: function (entity, manager) {
      var nbt = system.mainNBT(entity);
      if (!entity.isSneaking() && !entity.getData("fiskheroes:flying") && (nbt.getBoolean("armsRocketsOnFall") || nbt.getBoolean("bodyRocketsOnFall") || nbt.getBoolean("legRocketsOnFall")) && entity.world().isUnobstructed(entity.pos(), entity.pos().add(0, -5, 0)) && entity.motionY() < -0.75) {
        if (nbt.getBoolean("armsRocketsOnFall")) {
          manager.setBoolean(nbt, "rocketsArms", true);
          system.moduleMessage(this, entity, "<n>Auto activated arms rockets!");
        };
        if (nbt.getBoolean("bodyRocketsOnFall")) {
          manager.setBoolean(nbt, "rocketsBody", true);
          system.moduleMessage(this, entity, "<n>Auto activated body rockets!");
        };
        if (nbt.getBoolean("legRocketsOnFall")) {
          manager.setBoolean(nbt, "rocketsLegs", true);
          system.moduleMessage(this, entity, "<n>Auto activated leg rockets!");
        };
        manager.setData(entity, "fiskheroes:flying", true);
      };
      var arms = nbt.getBoolean("rocketsArms") && entity.getData("fiskheroes:flying");
      var body = nbt.getBoolean("rocketsBody") && entity.getData("fiskheroes:flying");
      var legs = nbt.getBoolean("rocketsLegs") && entity.getData("fiskheroes:flying");
      var wings = nbt.getBoolean("rocketsWings") && entity.getData("fiskheroes:flying");
      if (entity.getData("fiskheroes:flight_timer") > 0) {
        manager.setData(entity, "skyhighheroes:dyn/rockets_arms", arms);
        manager.setData(entity, "skyhighheroes:dyn/rockets_legs", legs);
        manager.setData(entity, "skyhighheroes:dyn/rockets_body", body);
        manager.setData(entity, "skyhighheroes:dyn/wings", wings);
        if (entity.getData("fiskheroes:flight_timer") < 0.2) {
          if (arms && body && legs) {
            system.shoutMessage(entity, "Activating Rockets!", 16);
          } else if ((arms && body && !legs) || (arms && !body && legs) || (!arms && body && legs)) {
            if (arms && body && !legs) {
              system.shoutMessage(entity, "Activating Arms and Body Rockets!", 16);
            };
            if (arms && !body && legs) {
              system.shoutMessage(entity, "Activating Arms and Leg Rockets!", 16);              
            };
            if (!arms && body && legs) {
              system.shoutMessage(entity, "Activating Body and Leg Rockets!", 16);
            };
          } else {
            if (arms) {
              system.shoutMessage(entity, "Activating Arms Rockets!", 16);
            };
            if (body) {
              system.shoutMessage(entity, "Activating Body Rockets!", 16);
            };
            if (legs) {
              system.shoutMessage(entity, "Activating Leg Rockets!", 16);
            };
          };
        };
      };/* 
      var wings = nbt.getBoolean("rocketsWings") && entity.getData("fiskheroes:flying") && entity.isSprinting();
      if (entity.getData("fiskheroes:flight_boost_timer") > 0) {
        manager.setData(entity, "skyhighheroes:dyn/wings", wings);
      }; */
      manager.setData(entity, "skyhighheroes:dyn/rocket_inner_legs", nbt.getBoolean("innerRockets"));
      var x = entity.posX();
      var y = entity.posY();
      var z = entity.posZ();
      if (entity.world().getDimension() == 0 && entity.posY() >= 4000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
        manager.setData(entity, "fiskheroes:teleport_dest", manager.newCoords(x, y, z, 2595));
        manager.setData(entity, "fiskheroes:teleport_delay", 6);
      };
      if (entity.world().getDimension() == 2595 && entity.posY() >= 1000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
        manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 0));
        manager.setData(entity, "fiskheroes:teleport_delay", 6);
      };
      var t = entity.getData("skyhighheroes:dyn/superhero_boosting_landing_ticks");
      if (t == 0 && !entity.isSprinting() && !entity.isOnGround() && entity.motionY() < -1.25 && entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() && entity.world().blockAt(entity.pos()).name() == "minecraft:air") {
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", t = 12);
      } else if (t > 0) {
        manager.setData(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", --t);
      };
      manager.incrementData(entity, "skyhighheroes:dyn/superhero_boosting_landing_timer", 2, 8, t > 0);
      var pain = (entity.rotPitch() > 12.5 && entity.motionY() < -0.075 && entity.motionY() > -1.25 && (entity.motionZ() > 0.125 || entity.motionZ() < -0.125 || entity.motionX() > 0.125 || entity.motionX() < -0.125)) && !entity.isSprinting() && !entity.isOnGround() && entity.getData("fiskheroes:flight_timer") > 0 && (entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -3, 0)).isSolid()) && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.world().blockAt(entity.pos()).name() == "minecraft:air";
      manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 10, 10, pain);
    },
    fightOrFlight: function (entity, manager) {
      if (!entity.getWornHelmet().nbt().getBoolean("rocketsArms") || !entity.getWornHelmet().nbt().getBoolean("rocketsBody") || !entity.getWornHelmet().nbt().getBoolean("rocketsLegs")) {
        manager.setBoolean(entity.getWornHelmet().nbt(), "rocketsArms", true);
        manager.setBoolean(entity.getWornHelmet().nbt(), "rocketsBody", true);
        manager.setBoolean(entity.getWornHelmet().nbt(), "rocketsLegs", true);
        system.systemMessage(entity, "<n>Automatically armed <nh>rockets<n>!");
      };
    }
  };
};