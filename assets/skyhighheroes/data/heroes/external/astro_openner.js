/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "bodyOpener",
    type: 1,
    command: "open",
    helpMessage: "<n>!open <nh>-<n> Scanner",
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
            system.systemMessage(entity, "<n>Body openner commands:");
            system.systemMessage(entity, "<n>!open <nh><bodyPart><n> <nh>-<n> EEEEEEEEEEE");
            system.systemMessage(entity, "<n>!open <nh>*<n> <nh>-<n> Opens every possible opening");
            system.systemMessage(entity, "<n>!open help <nh>-<n> Shows Body openner commands");
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