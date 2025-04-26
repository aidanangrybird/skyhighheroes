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
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 3) {
        switch(arguments[1]) {
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
          case "bodyUpper":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper body!");
            break;
          case "bodyLower":
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing lower body!");
            break;
          case "bodyFront":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front body!");
            break;
          case "bodyBack":
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back body!");
            break;
          case "bodyUpperFront":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper front body!");
            break;
          case "bodyLowerFront":
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing lower front body!");
            break;
          case "bodyUpperBack":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper back body!");
            break;
          case "bodyLowerBack":
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing lower back body!");
            break;
          case "machineGun":
            manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
            system.moduleMessage(this, entity, "<n>Closing body machine guns!");
            break;
          case "body":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
            system.moduleMessage(this, entity, "<n>Closing body!");
            break;
          case "leftArmCannon":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
            system.moduleMessage(this, entity, "<n>Closing left arm cannon!");
            break;
          case "leftArmCannonOuter":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing outer left arm cannon!");
            break;
          case "leftArmCannonInner":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
            system.moduleMessage(this, entity, "<n>Closing inner left arm cannon!");
            break;
          case "leftArmOuter":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing outer left arm!");
            break;
          case "leftArm":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing left arm!");
            break;
          case "rightArmCannon":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
            system.moduleMessage(this, entity, "<n>Closing right arm cannon!");
            break;
          case "rightArmCannonOuter":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing outer right arm cannon!");
            break;
          case "rightArmCannonInner":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
            system.moduleMessage(this, entity, "<n>Closing inner right arm cannon!");
            break;
          case "rightArmOuter":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing outer right arm!");
            break;
          case "rightArm":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
            system.moduleMessage(this, entity, "<n>Closing right arm!");
            break;
          case "leftLegUpper":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper left leg!");
            break;
          case "leftLegBoot":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing left leg boot!");
            break;
          case "leftLegFront":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front left leg!");
            break;
          case "leftLegBack":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back left leg!");
            break;
          case "leftLegUpperFront":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper front left leg!");
            break;
          case "leftLegBootFront":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front left leg boot!");
            break;
          case "leftLegUpperBack":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper back left leg!");
            break;
          case "leftLegBootBack":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back left leg boot!");
            break;
          case "leftLegBootRocket":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing left leg rocket!");
            break;
          case "leftLeg":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing left leg!");
            break;
          case "rightLegUpper":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper right leg!");
            break;
          case "rightLegBoot":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing right leg boot!");
            break;
          case "rightLegFront":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front right leg!");
            break;
          case "rightLegBack":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back right leg!");
            break;
          case "rightLegUpperFront":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper front right leg!");
            break;
          case "rightLegBootFront":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
            system.moduleMessage(this, entity, "<n>Closing front right leg boot!");
            break;
          case "rightLegUpperBack":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing upper back right leg!");
            break;
          case "rightLegBootBack":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
            system.moduleMessage(this, entity, "<n>Closing back right leg boot!");
            break;
          case "rightLegBootRocket":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing right leg rocket!");
            break;
          case "rightLeg":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
            system.moduleMessage(this, entity, "<n>Closing right leg!");
            break;
          case "*":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
            manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
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