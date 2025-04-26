/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "bodyOpener",
    moduleMessageName: "Opener",
    type: 1,
    command: "open",
    helpMessage: "<n>!open <nh>-<n> Panel Opener",
    disabledMessage: "<e>Module <eh>bodyOpener<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 3) {
        switch(arguments[1]) {
          case "headTop":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening top head!");
            break;
          case "headBottom":
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening bottom head!");
            break;
          case "headFront":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening front head!");
            break;
          case "headBack":
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening back head!");
            break;
          case "headTopFront":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening top front head!");
            break;
          case "headBottomFront":
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening bottom front head!");
            break;
          case "headTopBack":
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening top back head!");
            break;
          case "headBottomBack":
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening bottom back head!");
            break;
          case "head":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening head!");
            break;
          case "bodyUpper":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper body!");
            break;
          case "bodyLower":
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening lower body!");
            break;
          case "bodyFront":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening front body!");
            break;
          case "bodyBack":
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening back body!");
            break;
          case "bodyUpperFront":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper front body!");
            break;
          case "bodyLowerFront":
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening lower front body!");
            break;
          case "bodyUpperBack":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper back body!");
            break;
          case "bodyLowerBack":
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening lower back body!");
            break;
          case "machineGun":
            manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", true);
            system.moduleMessage(this, entity, "<n>Opening body machine guns!");
            break;
          case "body":
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", true);
            system.moduleMessage(this, entity, "<n>Opening body!");
            break;
          case "leftArmCannon":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
            system.moduleMessage(this, entity, "<n>Opening left arm cannon!");
            break;
          case "leftArmCannonOuter":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
            system.moduleMessage(this, entity, "<n>Opening outer left arm cannon!");
            break;
          case "leftArmCannonInner":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
            system.moduleMessage(this, entity, "<n>Opening inner left arm cannon!");
            break;
          case "leftArmOuter":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", true);
            system.moduleMessage(this, entity, "<n>Opening outer left arm!");
            break;
          case "leftArm":
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", true);
            system.moduleMessage(this, entity, "<n>Opening left arm!");
            break;
          case "rightArmCannon":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
            system.moduleMessage(this, entity, "<n>Opening right arm cannon!");
            break;
          case "rightArmCannonOuter":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
            system.moduleMessage(this, entity, "<n>Opening outer right arm cannon!");
            break;
          case "rightArmCannonInner":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
            system.moduleMessage(this, entity, "<n>Opening inner right arm cannon!");
            break;
          case "rightArmOuter":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", true);
            system.moduleMessage(this, entity, "<n>Opening outer right arm!");
            break;
          case "rightArm":
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", true);
            system.moduleMessage(this, entity, "<n>Opening right arm!");
            break;
          case "leftLegUpper":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper left leg!");
            break;
          case "leftLegBoot":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
            system.moduleMessage(this, entity, "<n>Opening left leg boot!");
            break;
          case "leftLegFront":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening front left leg!");
            break;
          case "leftLegBack":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening back left leg!");
            break;
          case "leftLegUpperFront":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper front left leg!");
            break;
          case "leftLegBootFront":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening front left leg boot!");
            break;
          case "leftLegUpperBack":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper back left leg!");
            break;
          case "leftLegBootBack":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening back left leg boot!");
            break;
          case "leftLegBootRocket":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
            system.moduleMessage(this, entity, "<n>Opening left leg rocket!");
            break;
          case "leftLeg":
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
            system.moduleMessage(this, entity, "<n>Opening left leg!");
            break;
          case "rightLegUpper":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper right leg!");
            break;
          case "rightLegBoot":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
            system.moduleMessage(this, entity, "<n>Opening right leg boot!");
            break;
          case "rightLegFront":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening front right leg!");
            break;
          case "rightLegBack":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening back right leg!");
            break;
          case "rightLegUpperFront":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper front right leg!");
            break;
          case "rightLegBootFront":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
            system.moduleMessage(this, entity, "<n>Opening front right leg boot!");
            break;
          case "rightLegUpperBack":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening upper back right leg!");
            break;
          case "rightLegBootBack":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
            system.moduleMessage(this, entity, "<n>Opening back right leg boot!");
            break;
          case "rightLegBootRocket":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
            system.moduleMessage(this, entity, "<n>Opening right leg rocket!");
            break;
          case "rightLeg":
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
            system.moduleMessage(this, entity, "<n>Opening right leg!");
            break;
          case "*":
            manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
            manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
            manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
            manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", true);
            system.moduleMessage(this, entity, "<n>Opening everything!");
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Body opener commands:");
            system.moduleMessage(this, entity, "<n>!open <nh><panel><n> <nh>-<n> Opens panel");
            system.moduleMessage(this, entity, "<n>!open * <nh>-<n> Opens every possible Opening");
            system.moduleMessage(this, entity, "<n>!open help <nh>-<n> Shows Body opener commands");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>bodyopener<e> command! Try <eh>!open help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>bodyOpener<e> command! Try <eh>!open help<e> for a list of commands!");
      };
    },
  };
};