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
      if (arguments.length > 1 && arguments.length < 4) {
        switch(arguments[1]) {
          case "head":
            switch (arguments[2]) {
              case "top":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening top head!");
                break;
              case "bottom":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening bottom head!");
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening front head!");
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening back head!");
                break;
              case "topFront":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening top front head!");
                break;
              case "bottomFront":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening bottom front head!");
                break;
              case "topBack":
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening top back head!");
                break;
              case "bottomBack":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening bottom back head!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening head!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body opener commands for <nh>head<n>:");
                system.moduleMessage(this, entity, "<n>!open head * <nh>-<n> Opens every possible opening for <nh>head<n>");
                system.moduleMessage(this, entity, "<n>!open head top <nh>-<n> Opens <nh>head<n> top panels");
                system.moduleMessage(this, entity, "<n>!open head bottom <nh>-<n> Opens <nh>head<n> bottom panels");
                system.moduleMessage(this, entity, "<n>!open head front <nh>-<n> Opens <nh>head<n> front panels");
                system.moduleMessage(this, entity, "<n>!open head back <nh>-<n> Opens <nh>head<n> back panels");
                system.moduleMessage(this, entity, "<n>!open head topFront <nh>-<n> Opens <nh>head<n> front top panel");
                system.moduleMessage(this, entity, "<n>!open head topBack <nh>-<n> Opens <nh>head<n> back top panel");
                system.moduleMessage(this, entity, "<n>!open head bottomFront <nh>-<n> Opens <nh>head<n> front bottom panel");
                system.moduleMessage(this, entity, "<n>!open head bottomBack <nh>-<n> Opens <nh>head<n> back bottom panel");
                system.moduleMessage(this, entity, "<n>!open head help <nh>-<n> Shows Body opener commands for <nh>head<n>");
                system.moduleMessage(this, entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "body":
            switch (arguments[2]) {
              case "upper":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper body!");
                break;
              case "lower":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening lower body!");
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening front body!");
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening back body!");
                break;
              case "upperFront":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper front body!");
                break;
              case "lowerFront":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening lower front body!");
                break;
              case "upperBack":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper back body!");
                break;
              case "lowerBack":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening lower back body!");
                break;
              case "machineGun":
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", true);
                system.moduleMessage(this, entity, "<n>Opening body machine guns!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", true);
                system.moduleMessage(this, entity, "<n>Opening body!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body opener commands for <nh>body<n>:");
                system.moduleMessage(this, entity, "<n>!open body * <nh>-<n> Opens every possible opening for <nh>body<n>");
                system.moduleMessage(this, entity, "<n>!open body upper <nh>-<n> Opens <nh>body<n> upper panels");
                system.moduleMessage(this, entity, "<n>!open body lower <nh>-<n> Opens <nh>body<n> lower panels");
                system.moduleMessage(this, entity, "<n>!open body front <nh>-<n> Opens <nh>body<n> front panels");
                system.moduleMessage(this, entity, "<n>!open body back <nh>-<n> Opens <nh>body<n> back panels");
                system.moduleMessage(this, entity, "<n>!open body upperFront <nh>-<n> Opens <nh>body<n> front upper panel");
                system.moduleMessage(this, entity, "<n>!open body upperBack <nh>-<n> Opens <nh>body<n> back upper panel");
                system.moduleMessage(this, entity, "<n>!open body lowerFront <nh>-<n> Opens <nh>body<n> front lower panel");
                system.moduleMessage(this, entity, "<n>!open body lowerBack <nh>-<n> Opens <nh>body<n> back lower panel");
                system.moduleMessage(this, entity, "<n>!open body machineGun <nh>-<n> Opens <nh>body<n> machine gun");
                system.moduleMessage(this, entity, "<n>!open body help <nh>-<n> Shows Body opener commands for <nh>body<n>");
                system.moduleMessage(this, entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "leftArm":
            switch (arguments[2]) {
              case "cannon":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
                system.moduleMessage(this, entity, "<n>Opening left arm cannon!");
                break;
              case "cannonOuter":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
                system.moduleMessage(this, entity, "<n>Opening outer left arm cannon!");
                break;
              case "cannonInner":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
                system.moduleMessage(this, entity, "<n>Opening inner left arm cannon!");
                break;
              case "outer":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", true);
                system.moduleMessage(this, entity, "<n>Opening outer left arm!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", true);
                system.moduleMessage(this, entity, "<n>Opening left arm!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body opener commands for <nh>leftArm<n>:");
                system.moduleMessage(this, entity, "<n>!open leftArm * <nh>-<n> Opens every possible opening for <nh>leftArm<n>");
                system.moduleMessage(this, entity, "<n>!open leftArm cannon <nh>-<n> Opens <nh>leftArm<n> cannon panels");
                system.moduleMessage(this, entity, "<n>!open leftArm cannonOuter <nh>-<n> Opens <nh>leftArm<n> outer cannon panel");
                system.moduleMessage(this, entity, "<n>!open leftArm cannonInner <nh>-<n> Opens <nh>leftArm<n> inner cannon panel");
                system.moduleMessage(this, entity, "<n>!open leftArm outer <nh>-<n> Opens <nh>leftArm<n> outer panel");
                system.moduleMessage(this, entity, "<n>!open leftArm help <nh>-<n> Shows Body opener commands for <nh>leftArm<n>");
                system.moduleMessage(this, entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "rightArm":
            switch (arguments[2]) {
              case "cannon":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
                system.moduleMessage(this, entity, "<n>Opening right arm cannon!");
                break;
              case "cannonOuter":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
                system.moduleMessage(this, entity, "<n>Opening outer right arm cannon!");
                break;
              case "cannonInner":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
                system.moduleMessage(this, entity, "<n>Opening inner right arm cannon!");
                break;
              case "outer":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", true);
                system.moduleMessage(this, entity, "<n>Opening outer right arm!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", true);
                system.moduleMessage(this, entity, "<n>Opening right arm!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body opener commands for <nh>rightArm<n>:");
                system.moduleMessage(this, entity, "<n>!open rightArm * <nh>-<n> Opens every possible opening for <nh>rightArm<n>");
                system.moduleMessage(this, entity, "<n>!open rightArm cannon <nh>-<n> Opens <nh>rightArm<n> cannon panels");
                system.moduleMessage(this, entity, "<n>!open rightArm cannonOuter <nh>-<n> Opens <nh>rightArm<n> outer cannon panel");
                system.moduleMessage(this, entity, "<n>!open rightArm cannonInner <nh>-<n> Opens <nh>rightArm<n> inner cannon panel");
                system.moduleMessage(this, entity, "<n>!open rightArm outer <nh>-<n> Opens <nh>rightArm<n> outer panel");
                system.moduleMessage(this, entity, "<n>!open rightArm help <nh>-<n> Shows Body opener commands for <nh>rightArm<n>");
                system.moduleMessage(this, entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "leftLeg":
            switch (arguments[2]) {
              case "leg":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper left leg!");
                break;
              case "boot":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
                system.moduleMessage(this, entity, "<n>Opening left leg boot!");
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening front left leg!");
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening back left leg!");
                break;
              case "legFront":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper front left leg!");
                break;
              case "bootFront":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening front left leg boot!");
                break;
              case "legBack":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper back left leg!");
                break;
              case "bootBack":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening back left leg boot!");
                break;
              case "bootRocket":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
                system.moduleMessage(this, entity, "<n>Opening left leg rocket!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
                system.moduleMessage(this, entity, "<n>Opening entire left leg!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body opener commands for <nh>leftLeg<n>:");
                system.moduleMessage(this, entity, "<n>!open leftLeg * <nh>-<n> Opens every possible opening for <nh>leftLeg<n>");
                system.moduleMessage(this, entity, "<n>!open leftLeg leg <nh>-<n> Opens <nh>leftLeg<n> leg panels");
                system.moduleMessage(this, entity, "<n>!open leftLeg boot <nh>-<n> Opens <nh>leftLeg<n> boot panels");
                system.moduleMessage(this, entity, "<n>!open leftLeg front <nh>-<n> Opens <nh>leftLeg<n> front panels");
                system.moduleMessage(this, entity, "<n>!open leftLeg back <nh>-<n> Opens <nh>leftLeg<n> back panels");
                system.moduleMessage(this, entity, "<n>!open leftLeg legFront <nh>-<n> Opens <nh>leftLeg<n> front leg panel");
                system.moduleMessage(this, entity, "<n>!open leftLeg legBack <nh>-<n> Opens <nh>leftLeg<n> back leg panel");
                system.moduleMessage(this, entity, "<n>!open leftLeg bootFront <nh>-<n> Opens <nh>leftLeg<n> front boot panel");
                system.moduleMessage(this, entity, "<n>!open leftLeg bootBack <nh>-<n> Opens <nh>leftLeg<n> back boot panel");
                system.moduleMessage(this, entity, "<n>!open leftLeg bootRocket <nh>-<n> Opens <nh>leftLeg<n> boot rocket");
                system.moduleMessage(this, entity, "<n>!open leftLeg help <nh>-<n> Shows Body opener commands for <nh>leftLeg<n>");
                system.moduleMessage(this, entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "rightLeg":
            switch (arguments[2]) {
              case "leg":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper right leg!");
                break;
              case "boot":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
                system.moduleMessage(this, entity, "<n>Opening right leg boot!");
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening front right leg!");
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening back right leg!");
                break;
              case "legFront":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper front right leg!");
                break;
              case "bootFront":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
                system.moduleMessage(this, entity, "<n>Opening front right leg boot!");
                break;
              case "legBack":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening upper back right leg!");
                break;
              case "bootBack":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
                system.moduleMessage(this, entity, "<n>Opening back right leg boot!");
                break;
              case "bootRocket":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
                system.moduleMessage(this, entity, "<n>Opening left leg rocket!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
                system.moduleMessage(this, entity, "<n>Opening entire right leg!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body opener commands for <nh>rightLeg<n>:");
                system.moduleMessage(this, entity, "<n>!open rightLeg * <nh>-<n> Opens every possible opening for <nh>rightLeg<n>");
                system.moduleMessage(this, entity, "<n>!open rightLeg leg <nh>-<n> Opens <nh>rightLeg<n> leg panels");
                system.moduleMessage(this, entity, "<n>!open rightLeg boot <nh>-<n> Opens <nh>rightLeg<n> boot panels");
                system.moduleMessage(this, entity, "<n>!open rightLeg front <nh>-<n> Opens <nh>rightLeg<n> front panels");
                system.moduleMessage(this, entity, "<n>!open rightLeg back <nh>-<n> Opens <nh>rightLeg<n> back panels");
                system.moduleMessage(this, entity, "<n>!open rightLeg legFront <nh>-<n> Opens <nh>rightLeg<n> front leg panel");
                system.moduleMessage(this, entity, "<n>!open rightLeg legBack <nh>-<n> Opens <nh>rightLeg<n> back leg panel");
                system.moduleMessage(this, entity, "<n>!open rightLeg bootFront <nh>-<n> Opens <nh>rightLeg<n> front boot panel");
                system.moduleMessage(this, entity, "<n>!open rightLeg bootBack <nh>-<n> Opens <nh>rightLeg<n> back boot panel");
                system.moduleMessage(this, entity, "<n>!open rightLeg bootRocket <nh>-<n> Opens <nh>rightLeg<n> boot rocket");
                system.moduleMessage(this, entity, "<n>!open rightLeg help <nh>-<n> Shows Body opener commands for <nh>rightLeg<n>");
                system.moduleMessage(this, entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
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
            system.moduleMessage(this, entity, "<n>!open <nh><bodyPart><n> * <nh>-<n> Opens every opening on the body part");
            system.moduleMessage(this, entity, "<n>!open <nh><bodyPart><n> help <nh>-<n> Shows Body opener commands for the body part");
            system.moduleMessage(this, entity, "<n>!open * <nh>-<n> Opens every possible opening");
            system.moduleMessage(this, entity, "<n>!open help <nh>-<n> Shows Body opener commands");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>bodyOpener<e> command! Try <eh>!open help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>bodyOpener<e> command! Try <eh>!open help<e> for a list of commands!");
      };
    },
  };
};