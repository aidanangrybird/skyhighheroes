/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "bodyOpener",
    type: 1,
    command: "open",
    helpMessage: "<n>!open <nh>-<n> Panel opener",
    disabledMessage: "<e>Module <eh>bodyOpener<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4 && entity.getData("skyhighheroes:dyn/astro_clothes") != 3) {
        switch(arguments[1]) {
          case "head":
            switch (arguments[2]) {
              case "top":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
                break;
              case "bottom":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
                break;
              case "topFront":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
                break;
              case "bottomFront":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
                break;
              case "topBack":
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
                break;
              case "bottomBack":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", true);
                break;
              case "help":
                system.systemMessage(entity, "<n>Body opener commands for <nh>head<n>:");
                system.systemMessage(entity, "<n>!open head * <nh>-<n> Opens every possible opening for <nh>head<n>");
                system.systemMessage(entity, "<n>!open head top <nh>-<n> Opens <nh>head<n> top panels");
                system.systemMessage(entity, "<n>!open head bottom <nh>-<n> Opens <nh>head<n> bottom panels");
                system.systemMessage(entity, "<n>!open head front <nh>-<n> Opens <nh>head<n> front panels");
                system.systemMessage(entity, "<n>!open head back <nh>-<n> Opens <nh>head<n> back panels");
                system.systemMessage(entity, "<n>!open head topFront <nh>-<n> Opens <nh>head<n> front top panel");
                system.systemMessage(entity, "<n>!open head topBack <nh>-<n> Opens <nh>head<n> back top panel");
                system.systemMessage(entity, "<n>!open head bottomFront <nh>-<n> Opens <nh>head<n> front bottom panel");
                system.systemMessage(entity, "<n>!open head bottomBack <nh>-<n> Opens <nh>head<n> back bottom panel");
                system.systemMessage(entity, "<n>!open head help <nh>-<n> Shows Body opener commands for <nh>head<n>");
                system.systemMessage(entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "body":
            switch (arguments[2]) {
              case "upper":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
                break;
              case "lower":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
                break;
              case "upperFront":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
                break;
              case "lowerFront":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
                break;
              case "upperBack":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
                break;
              case "lowerBack":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
                break;
              case "machineGun":
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", true);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", true);
                break;
              case "help":
                system.systemMessage(entity, "<n>Body opener commands for <nh>body<n>:");
                system.systemMessage(entity, "<n>!open body * <nh>-<n> Opens every possible opening for <nh>body<n>");
                system.systemMessage(entity, "<n>!open body upper <nh>-<n> Opens <nh>body<n> upper panels");
                system.systemMessage(entity, "<n>!open body lower <nh>-<n> Opens <nh>body<n> lower panels");
                system.systemMessage(entity, "<n>!open body front <nh>-<n> Opens <nh>body<n> front panels");
                system.systemMessage(entity, "<n>!open body back <nh>-<n> Opens <nh>body<n> back panels");
                system.systemMessage(entity, "<n>!open body upperFront <nh>-<n> Opens <nh>body<n> front upper panel");
                system.systemMessage(entity, "<n>!open body upperBack <nh>-<n> Opens <nh>body<n> back upper panel");
                system.systemMessage(entity, "<n>!open body lowerFront <nh>-<n> Opens <nh>body<n> front lower panel");
                system.systemMessage(entity, "<n>!open body lowerBack <nh>-<n> Opens <nh>body<n> back lower panel");
                system.systemMessage(entity, "<n>!open body machineGun <nh>-<n> Opens <nh>body<n> machine gun");
                system.systemMessage(entity, "<n>!open body help <nh>-<n> Shows Body opener commands for <nh>body<n>");
                system.systemMessage(entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "leftArm":
            switch (arguments[2]) {
              case "cannon":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
                break;
              case "cannonOuter":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
                break;
              case "cannonInner":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
                break;
              case "outer":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", true);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", true);
                break;
              case "help":
                system.systemMessage(entity, "<n>Body opener commands for <nh>leftArm<n>:");
                system.systemMessage(entity, "<n>!open leftArm * <nh>-<n> Opens every possible opening for <nh>leftArm<n>");
                system.systemMessage(entity, "<n>!open leftArm cannon <nh>-<n> Opens <nh>leftArm<n> cannon panels");
                system.systemMessage(entity, "<n>!open leftArm cannonOuter <nh>-<n> Opens <nh>leftArm<n> outer cannon panel");
                system.systemMessage(entity, "<n>!open leftArm cannonInner <nh>-<n> Opens <nh>leftArm<n> inner cannon panel");
                system.systemMessage(entity, "<n>!open leftArm outer <nh>-<n> Opens <nh>leftArm<n> outer panel");
                system.systemMessage(entity, "<n>!open leftArm help <nh>-<n> Shows Body opener commands for <nh>leftArm<n>");
                system.systemMessage(entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "rightArm":
            switch (arguments[2]) {
              case "cannon":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
                break;
              case "cannonOuter":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
                break;
              case "cannonInner":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
                break;
              case "outer":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", true);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", true);
                break;
              case "help":
                system.systemMessage(entity, "<n>Body opener commands for <nh>rightArm<n>:");
                system.systemMessage(entity, "<n>!open rightArm * <nh>-<n> Opens every possible opening for <nh>rightArm<n>");
                system.systemMessage(entity, "<n>!open rightArm cannon <nh>-<n> Opens <nh>rightArm<n> cannon panels");
                system.systemMessage(entity, "<n>!open rightArm cannonOuter <nh>-<n> Opens <nh>rightArm<n> outer cannon panel");
                system.systemMessage(entity, "<n>!open rightArm cannonInner <nh>-<n> Opens <nh>rightArm<n> inner cannon panel");
                system.systemMessage(entity, "<n>!open rightArm outer <nh>-<n> Opens <nh>rightArm<n> outer panel");
                system.systemMessage(entity, "<n>!open rightArm help <nh>-<n> Shows Body opener commands for <nh>rightArm<n>");
                system.systemMessage(entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "leftLeg":
            switch (arguments[2]) {
              case "leg":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
                break;
              case "boot":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
                break;
              case "legFront":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
                break;
              case "bootFront":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
                break;
              case "legBack":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
                break;
              case "bootBack":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
                break;
              case "bootRocket":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", true);
                break;
              case "help":
                system.systemMessage(entity, "<n>Body opener commands for <nh>leftLeg<n>:");
                system.systemMessage(entity, "<n>!open leftLeg * <nh>-<n> Opens every possible opening for <nh>leftLeg<n>");
                system.systemMessage(entity, "<n>!open leftLeg leg <nh>-<n> Opens <nh>leftLeg<n> leg panels");
                system.systemMessage(entity, "<n>!open leftLeg boot <nh>-<n> Opens <nh>leftLeg<n> boot panels");
                system.systemMessage(entity, "<n>!open leftLeg front <nh>-<n> Opens <nh>leftLeg<n> front panels");
                system.systemMessage(entity, "<n>!open leftLeg back <nh>-<n> Opens <nh>leftLeg<n> back panels");
                system.systemMessage(entity, "<n>!open leftLeg legFront <nh>-<n> Opens <nh>leftLeg<n> front leg panel");
                system.systemMessage(entity, "<n>!open leftLeg legBack <nh>-<n> Opens <nh>leftLeg<n> back leg panel");
                system.systemMessage(entity, "<n>!open leftLeg bootFront <nh>-<n> Opens <nh>leftLeg<n> front boot panel");
                system.systemMessage(entity, "<n>!open leftLeg bootBack <nh>-<n> Opens <nh>leftLeg<n> back boot panel");
                system.systemMessage(entity, "<n>!open leftLeg bootRocket <nh>-<n> Opens <nh>leftLeg<n> boot rocket");
                system.systemMessage(entity, "<n>!open leftLeg help <nh>-<n> Shows Body opener commands for <nh>leftLeg<n>");
                system.systemMessage(entity, "<n>!open help <nh>-<n> Shows Body opener commands");
                break;
            };
            break;
          case "rightLeg":
            switch (arguments[2]) {
              case "leg":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
                break;
              case "boot":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
                break;
              case "legFront":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
                break;
              case "bootFront":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
                break;
              case "legBack":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
                break;
              case "bootBack":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
                break;
              case "bootRocket":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", true);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", true);
                break;
              case "help":
                system.systemMessage(entity, "<n>Body opener commands for <nh>rightLeg<n>:");
                system.systemMessage(entity, "<n>!open rightLeg * <nh>-<n> Opens every possible opening for <nh>rightLeg<n>");
                system.systemMessage(entity, "<n>!open rightLeg leg <nh>-<n> Opens <nh>rightLeg<n> leg panels");
                system.systemMessage(entity, "<n>!open rightLeg boot <nh>-<n> Opens <nh>rightLeg<n> boot panels");
                system.systemMessage(entity, "<n>!open rightLeg front <nh>-<n> Opens <nh>rightLeg<n> front panels");
                system.systemMessage(entity, "<n>!open rightLeg back <nh>-<n> Opens <nh>rightLeg<n> back panels");
                system.systemMessage(entity, "<n>!open rightLeg legFront <nh>-<n> Opens <nh>rightLeg<n> front leg panel");
                system.systemMessage(entity, "<n>!open rightLeg legBack <nh>-<n> Opens <nh>rightLeg<n> back leg panel");
                system.systemMessage(entity, "<n>!open rightLeg bootFront <nh>-<n> Opens <nh>rightLeg<n> front boot panel");
                system.systemMessage(entity, "<n>!open rightLeg bootBack <nh>-<n> Opens <nh>rightLeg<n> back boot panel");
                system.systemMessage(entity, "<n>!open rightLeg bootRocket <nh>-<n> Opens <nh>rightLeg<n> boot rocket");
                system.systemMessage(entity, "<n>!open rightLeg help <nh>-<n> Shows Body opener commands for <nh>rightLeg<n>");
                system.systemMessage(entity, "<n>!open help <nh>-<n> Shows Body opener commands");
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
            break;
          case "help":
            system.systemMessage(entity, "<n>Body opener commands:");
            system.systemMessage(entity, "<n>!open <nh><bodyPart><n> * <nh>-<n> Opens every opening on the body part");
            system.systemMessage(entity, "<n>!open <nh><bodyPart><n> help <nh>-<n> Shows Body opener commands for the body part");
            system.systemMessage(entity, "<n>!open * <nh>-<n> Opens every possible opening");
            system.systemMessage(entity, "<n>!open help <nh>-<n> Shows Body opener commands");
            break;
          default:
            system.systemMessage(entity, "<e>Unknown <eh>bodyOpener<e> command! Try <eh>!open help<e> for a list of commands!");
            break;
        };
      } else {
        system.systemMessage(entity, "<e>Unknown <eh>bodyOpener<e> command! Try <eh>!open help<e> for a list of commands!");
      };
    },
  };
};