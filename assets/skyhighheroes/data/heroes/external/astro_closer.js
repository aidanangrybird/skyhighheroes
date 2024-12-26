/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "bodyCloser",
    type: 1,
    command: "close",
    helpMessage: "<n>!close <nh>-<n> Panel closer",
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
              case "help":
                system.systemMessage(entity, "<n>Body closer commands for <nh>head<n>:");
                system.systemMessage(entity, "<n>!close head * <nh>-<n> Closes every possible opening for <nh>head<n>");
                system.systemMessage(entity, "<n>!close head top <nh>-<n> Closes <nh>head<n> top panels");
                system.systemMessage(entity, "<n>!close head bottom <nh>-<n> Closes <nh>head<n> bottom panels");
                system.systemMessage(entity, "<n>!close head front <nh>-<n> Closes <nh>head<n> front panels");
                system.systemMessage(entity, "<n>!close head back <nh>-<n> Closes <nh>head<n> back panels");
                system.systemMessage(entity, "<n>!close head topFront <nh>-<n> Closes <nh>head<n> front top panel");
                system.systemMessage(entity, "<n>!close head topBack <nh>-<n> Closes <nh>head<n> back top panel");
                system.systemMessage(entity, "<n>!close head bottomFront <nh>-<n> Closes <nh>head<n> front bottom panel");
                system.systemMessage(entity, "<n>!close head bottomBack <nh>-<n> Closes <nh>head<n> back bottom panel");
                system.systemMessage(entity, "<n>!close head help <nh>-<n> Shows Body closer commands for <nh>head<n>");
                system.systemMessage(entity, "<n>!close help <nh>-<n> Shows Body closer commands");
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
              case "machineGun":
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
                break;
              case "help":
                system.systemMessage(entity, "<n>Body closer commands for <nh>body<n>:");
                system.systemMessage(entity, "<n>!close body * <nh>-<n> Closes every possible opening for <nh>body<n>");
                system.systemMessage(entity, "<n>!close body upper <nh>-<n> Closes <nh>body<n> upper panels");
                system.systemMessage(entity, "<n>!close body lower <nh>-<n> Closes <nh>body<n> lower panels");
                system.systemMessage(entity, "<n>!close body front <nh>-<n> Closes <nh>body<n> front panels");
                system.systemMessage(entity, "<n>!close body back <nh>-<n> Closes <nh>body<n> back panels");
                system.systemMessage(entity, "<n>!close body upperFront <nh>-<n> Closes <nh>body<n> front upper panel");
                system.systemMessage(entity, "<n>!close body upperBack <nh>-<n> Closes <nh>body<n> back upper panel");
                system.systemMessage(entity, "<n>!close body lowerFront <nh>-<n> Closes <nh>body<n> front lower panel");
                system.systemMessage(entity, "<n>!close body lowerBack <nh>-<n> Closes <nh>body<n> back lower panel");
                system.systemMessage(entity, "<n>!close body machineGun <nh>-<n> Closes <nh>body<n> machine gun");
                system.systemMessage(entity, "<n>!close body help <nh>-<n> Shows Body closer commands for <nh>body<n>");
                system.systemMessage(entity, "<n>!close help <nh>-<n> Shows Body closer commands");
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
              case "help":
                system.systemMessage(entity, "<n>Body closer commands for <nh>leftArm<n>:");
                system.systemMessage(entity, "<n>!close leftArm * <nh>-<n> Closes every possible opening for <nh>leftArm<n>");
                system.systemMessage(entity, "<n>!close leftArm cannon <nh>-<n> Closes <nh>leftArm<n> cannon panels");
                system.systemMessage(entity, "<n>!close leftArm cannonOuter <nh>-<n> Closes <nh>leftArm<n> outer cannon panel");
                system.systemMessage(entity, "<n>!close leftArm cannonInner <nh>-<n> Closes <nh>leftArm<n> inner cannon panel");
                system.systemMessage(entity, "<n>!close leftArm outer <nh>-<n> Closes <nh>leftArm<n> outer panel");
                system.systemMessage(entity, "<n>!close leftArm help <nh>-<n> Shows Body closer commands for <nh>leftArm<n>");
                system.systemMessage(entity, "<n>!close help <nh>-<n> Shows Body closer commands");
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
              case "help":
                system.systemMessage(entity, "<n>Body closer commands for <nh>rightArm<n>:");
                system.systemMessage(entity, "<n>!close rightArm * <nh>-<n> Closes every possible opening for <nh>rightArm<n>");
                system.systemMessage(entity, "<n>!close rightArm cannon <nh>-<n> Closes <nh>rightArm<n> cannon panels");
                system.systemMessage(entity, "<n>!close rightArm cannonOuter <nh>-<n> Closes <nh>rightArm<n> outer cannon panel");
                system.systemMessage(entity, "<n>!close rightArm cannonInner <nh>-<n> Closes <nh>rightArm<n> inner cannon panel");
                system.systemMessage(entity, "<n>!close rightArm outer <nh>-<n> Closes <nh>rightArm<n> outer panel");
                system.systemMessage(entity, "<n>!close rightArm help <nh>-<n> Shows Body closer commands for <nh>rightArm<n>");
                system.systemMessage(entity, "<n>!close help <nh>-<n> Shows Body closer commands");
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
              case "help":
                system.systemMessage(entity, "<n>Body closer commands for <nh>leftLeg<n>:");
                system.systemMessage(entity, "<n>!close leftLeg * <nh>-<n> Closes every possible opening for <nh>leftLeg<n>");
                system.systemMessage(entity, "<n>!close leftLeg leg <nh>-<n> Closes <nh>leftLeg<n> leg panels");
                system.systemMessage(entity, "<n>!close leftLeg boot <nh>-<n> Closes <nh>leftLeg<n> boot panels");
                system.systemMessage(entity, "<n>!close leftLeg front <nh>-<n> Closes <nh>leftLeg<n> front panels");
                system.systemMessage(entity, "<n>!close leftLeg back <nh>-<n> Closes <nh>leftLeg<n> back panels");
                system.systemMessage(entity, "<n>!close leftLeg legFront <nh>-<n> Closes <nh>leftLeg<n> front leg panel");
                system.systemMessage(entity, "<n>!close leftLeg legBack <nh>-<n> Closes <nh>leftLeg<n> back leg panel");
                system.systemMessage(entity, "<n>!close leftLeg bootFront <nh>-<n> Closes <nh>leftLeg<n> front boot panel");
                system.systemMessage(entity, "<n>!close leftLeg bootBack <nh>-<n> Closes <nh>leftLeg<n> back boot panel");
                system.systemMessage(entity, "<n>!close leftLeg bootRocket <nh>-<n> Closes <nh>leftLeg<n> boot rocket");
                system.systemMessage(entity, "<n>!close leftLeg help <nh>-<n> Shows Body closer commands for <nh>leftLeg<n>");
                system.systemMessage(entity, "<n>!close help <nh>-<n> Shows Body closer commands");
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
              case "help":
                system.systemMessage(entity, "<n>Body closer commands for <nh>rightLeg<n>:");
                system.systemMessage(entity, "<n>!close rightLeg * <nh>-<n> Closes every possible opening for <nh>rightLeg<n>");
                system.systemMessage(entity, "<n>!close rightLeg leg <nh>-<n> Closes <nh>rightLeg<n> leg panels");
                system.systemMessage(entity, "<n>!close rightLeg boot <nh>-<n> Closes <nh>rightLeg<n> boot panels");
                system.systemMessage(entity, "<n>!close rightLeg front <nh>-<n> Closes <nh>rightLeg<n> front panels");
                system.systemMessage(entity, "<n>!close rightLeg back <nh>-<n> Closes <nh>rightLeg<n> back panels");
                system.systemMessage(entity, "<n>!close rightLeg legFront <nh>-<n> Closes <nh>rightLeg<n> front leg panel");
                system.systemMessage(entity, "<n>!close rightLeg legBack <nh>-<n> Closes <nh>rightLeg<n> back leg panel");
                system.systemMessage(entity, "<n>!close rightLeg bootFront <nh>-<n> Closes <nh>rightLeg<n> front boot panel");
                system.systemMessage(entity, "<n>!close rightLeg bootBack <nh>-<n> Closes <nh>rightLeg<n> back boot panel");
                system.systemMessage(entity, "<n>!close rightLeg bootRocket <nh>-<n> Closes <nh>rightLeg<n> boot rocket");
                system.systemMessage(entity, "<n>!close rightLeg help <nh>-<n> Shows Body closer commands for <nh>rightLeg<n>");
                system.systemMessage(entity, "<n>!close help <nh>-<n> Shows Body closer commands");
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
            system.systemMessage(entity, "<n>Body closer commands:");
            system.systemMessage(entity, "<n>!close <nh><bodyPart><n> * <nh>-<n> Closes every opening on the body part");
            system.systemMessage(entity, "<n>!close <nh><bodyPart><n> help <nh>-<n> Shows Body closer commands for the body part");
            system.systemMessage(entity, "<n>!close * <nh>-<n> Closes every possible opening");
            system.systemMessage(entity, "<n>!close help <nh>-<n> Shows Body closer commands");
            break;
          default:
            system.systemMessage(entity, "<e>Unknown <eh>bodyCloser<e> command! Try <eh>!close help<e> for a list of commands!");
            break;
        };
      } else {
        system.systemMessage(entity, "<e>Unknown <eh>bodyCloser<e> command! Try <eh>!close help<e> for a list of commands!");
      };
    },
  };
};