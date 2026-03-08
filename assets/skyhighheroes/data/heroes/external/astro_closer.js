/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "bodyCloser",
    moduleMessageName: "Closer",
    type: 1,
    command: "close",
    helpMessage: "<n>!close <nh>-<n> Panel Closer",
    disabledMessage: "<e>Module <eh>bodyCloser<e> is disabled!",
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 3) {
        switch(argList[1]) {
          case "headTop":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing top head!");
            break;
          case "headBottom":
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing bottom head!");
            break;
          case "headFront":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front head!");
            break;
          case "headBack":
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back head!");
            break;
          case "headTopFront":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing top front head!");
            break;
          case "headBottomFront":
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing bottom front head!");
            break;
          case "headTopBack":
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing top back head!");
            break;
          case "headBottomBack":
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing bottom back head!");
            break;
          case "head":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing head!");
            break;
          case "torso":
            manager.setData(entity, "skyhighheroes:dyn/torso_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/torso_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper body!");
            break;
          case "shorts":
            manager.setData(entity, "skyhighheroes:dyn/shorts_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/shorts_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing lower body!");
            break;
          case "bodyFront":
            manager.setData(entity, "skyhighheroes:dyn/torso_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/shorts_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front body!");
            break;
          case "bodyBack":
            manager.setData(entity, "skyhighheroes:dyn/shorts_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/torso_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back body!");
            break;
          case "torsoFront":
            manager.setData(entity, "skyhighheroes:dyn/torso_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper front body!");
            break;
          case "shortsFront":
            manager.setData(entity, "skyhighheroes:dyn/shorts_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing lower front body!");
            break;
          case "torsoBack":
            manager.setData(entity, "skyhighheroes:dyn/torso_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper back body!");
            break;
          case "shortsBack":
            manager.setData(entity, "skyhighheroes:dyn/shorts_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing lower back body!");
            break;
          case "machineGun":
            manager.setData(entity, "skyhighheroes:dyn/machine_gun_open", false);
            system.moduleMessage(this, entity, "<n>Closing body machine guns!");
            break;
          case "core":
            manager.setData(entity, "skyhighheroes:dyn/core_open", false);
            system.moduleMessage(this, entity, "<n>Closing core!");
            break;
          case "body":
            manager.setData(entity, "skyhighheroes:dyn/torso_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/torso_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/shorts_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/shorts_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/machine_gun_open", false);
            manager.setData(entity, "skyhighheroes:dyn/core_open", false);
            system.moduleMessage(this, entity, "<n>Closing body!");
            break;
          case "leftCannon":
            manager.setData(entity, "skyhighheroes:dyn/left_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_cannon_inner_open", false);
            system.moduleMessage(this, entity, "<n>Closing left arm cannon!");
            break;
          case "leftCannonOuter":
            manager.setData(entity, "skyhighheroes:dyn/left_cannon_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing outer left arm cannon!");
            break;
          case "leftCannonInner":
            manager.setData(entity, "skyhighheroes:dyn/left_cannon_inner_open", false);
            system.moduleMessage(this, entity, "<n>Closing inner left arm cannon!");
            break;
          case "leftArmOuter":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing outer left arm!");
            break;
          case "leftArm":
            manager.setData(entity, "skyhighheroes:dyn/left_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_cannon_inner_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing left arm!");
            break;
          case "rightCannon":
            manager.setData(entity, "skyhighheroes:dyn/right_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_cannon_inner_open", false);
            system.moduleMessage(this, entity, "<n>Closing right arm cannon!");
            break;
          case "rightCannonOuter":
            manager.setData(entity, "skyhighheroes:dyn/right_cannon_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing outer right arm cannon!");
            break;
          case "rightCannonInner":
            manager.setData(entity, "skyhighheroes:dyn/right_cannon_inner_open", false);
            system.moduleMessage(this, entity, "<n>Closing inner right arm cannon!");
            break;
          case "rightArmOuter":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing outer right arm!");
            break;
          case "rightArm":
            manager.setData(entity, "skyhighheroes:dyn/right_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_cannon_inner_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing right arm!");
            break;
          case "leftLeg":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper left leg!");
            break;
          case "leftBoot":
            manager.setData(entity, "skyhighheroes:dyn/left_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing left leg boot!");
            break;
          case "leftLegFront":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front left leg!");
            break;
          case "leftLegBack":
            manager.setData(entity, "skyhighheroes:dyn/left_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back left leg!");
            break;
          case "leftLegFront":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper front left leg!");
            break;
          case "leftBootFront":
            manager.setData(entity, "skyhighheroes:dyn/left_boot_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front left leg boot!");
            break;
          case "leftLegBack":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper back left leg!");
            break;
          case "leftBootBack":
            manager.setData(entity, "skyhighheroes:dyn/left_boot_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back left leg boot!");
            break;
          case "leftBootRocket":
            manager.setData(entity, "skyhighheroes:dyn/left_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing left leg rocket!");
            break;
          case "leftLeg":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing left leg!");
            break;
          case "rightLeg":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper right leg!");
            break;
          case "rightBoot":
            manager.setData(entity, "skyhighheroes:dyn/right_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing right leg boot!");
            break;
          case "rightLegFront":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front right leg!");
            break;
          case "rightLegBack":
            manager.setData(entity, "skyhighheroes:dyn/right_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back right leg!");
            break;
          case "rightLegFront":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper front right leg!");
            break;
          case "rightBootFront":
            manager.setData(entity, "skyhighheroes:dyn/right_boot_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front right leg boot!");
            break;
          case "rightLegBack":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper back right leg!");
            break;
          case "rightBootBack":
            manager.setData(entity, "skyhighheroes:dyn/right_boot_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back right leg boot!");
            break;
          case "rightBootRocket":
            manager.setData(entity, "skyhighheroes:dyn/right_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing right leg rocket!");
            break;
          case "rightLeg":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing right leg!");
            break;
          case "*":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_boot_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_boot_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_cannon_inner_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_cannon_inner_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/torso_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/torso_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/shorts_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/shorts_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/machine_gun_open", false);
            system.moduleMessage(this, entity, "<n>Closing everything!");
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Body closer commands:");
            system.moduleMessage(this, entity, "<n>!close <nh><panel><n> <nh>-<n> Closes panel");
            system.moduleMessage(this, entity, "<n>!close * <nh>-<n> Closes every possible Closing");
            system.moduleMessage(this, entity, "<n>!close help <nh>-<n> Shows Body closer commands");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>bodycloser<e> command! Try <eh>!close help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>bodycloser<e> command! Try <eh>!close help<e> for a list of commands!");
      };
    },
  };
};