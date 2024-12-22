/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "bodyCloser",
    type: 1,
    command: "close",
    helpMessage: "<n>!close <nh>-<n> Scanner",
    disabledMessage: "<e>Module <eh>bodyCloser<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch(arguments[1]) {
          case "head":
            switch (arguments[2]) {
              case "top":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
                break;
              case "bottom":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
                break;
              case "topFront":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
                break;
              case "bottomFront":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
                break;
              case "topBack":
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
                break;
              case "bottomBack":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
                break;
            };
            break;
          case "body":
            switch (arguments[2]) {
              case "upper":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                break;
              case "lower":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                break;
              case "upperFront":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                break;
              case "lowerFront":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                break;
              case "upperBack":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                break;
              case "lowerBack":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                break;
              case "mGun":
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
                break;
            };
            break;
          case "leftArm":
            switch (arguments[2]) {
              case "cannon":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
                break;
              case "cannonOuter":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
                break;
              case "cannonInner":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
                break;
              case "outer":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
                break;
            };
            break;
          case "rightArm":
            switch (arguments[2]) {
              case "cannon":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
                break;
              case "cannonOuter":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
                break;
              case "cannonInner":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
                break;
              case "outer":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
                break;
            };
            break;
          case "leftLeg":
            switch (arguments[2]) {
              case "leg":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
                break;
              case "boot":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
                break;
              case "legFront":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
                break;
              case "bootFront":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
                break;
              case "legBack":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
                break;
              case "bootBack":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
                break;
              case "bootRocket":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
                break;
            };
            break;
          case "rightLeg":
            switch (arguments[2]) {
              case "leg":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
                break;
              case "boot":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
                break;
              case "legFront":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
                break;
              case "bootFront":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
                break;
              case "legBack":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
                break;
              case "bootBack":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
                break;
              case "bootRocket":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
                break;
            };
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
            break;
          case "help":
            system.systemMessage(entity, "<n>Body openner commands:");
            system.systemMessage(entity, "<n>!close <nh><bodyPart><n> <nh>-<n> EEEEEEEEEEE");
            system.systemMessage(entity, "<n>!close <nh>*<n> <nh>-<n> Opens every possible opening");
            system.systemMessage(entity, "<n>!close help <nh>-<n> Shows Body openner commands");
            break;
          default:
            system.systemMessage(entity, "<e>Unknown <eh>bodyOpener<e> command! Try <eh>!close help<e> for a list of commands!");
            break;
        };
      } else {
        system.systemMessage(entity, "<e>Unknown <eh>bodyOpener<e> command! Try <eh>!close help<e> for a list of commands!");
      };
    },
  };
};