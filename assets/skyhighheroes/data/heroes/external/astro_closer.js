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
      if (arguments.length > 1 && arguments.length < 4) {
        switch(arguments[1]) {
          case "head":
            switch (arguments[2]) {
              case "top":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing top head!");
                break;
              case "bottom":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing bottom head!");
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing front head!");
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing back head!");
                break;
              case "topFront":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing top front head!");
                break;
              case "bottomFront":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing bottom front head!");
                break;
              case "topBack":
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing top back head!");
                break;
              case "bottomBack":
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing bottom back head!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/head_top_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_top_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/head_bottom_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing head!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body closer commands for <nh>head<n>:");
                system.moduleMessage(this, entity, "<n>!close head * <nh>-<n> Closes every possible closing for <nh>head<n>");
                system.moduleMessage(this, entity, "<n>!close head top <nh>-<n> Closes <nh>head<n> top panels");
                system.moduleMessage(this, entity, "<n>!close head bottom <nh>-<n> Closes <nh>head<n> bottom panels");
                system.moduleMessage(this, entity, "<n>!close head front <nh>-<n> Closes <nh>head<n> front panels");
                system.moduleMessage(this, entity, "<n>!close head back <nh>-<n> Closes <nh>head<n> back panels");
                system.moduleMessage(this, entity, "<n>!close head topFront <nh>-<n> Closes <nh>head<n> front top panel");
                system.moduleMessage(this, entity, "<n>!close head topBack <nh>-<n> Closes <nh>head<n> back top panel");
                system.moduleMessage(this, entity, "<n>!close head bottomFront <nh>-<n> Closes <nh>head<n> front bottom panel");
                system.moduleMessage(this, entity, "<n>!close head bottomBack <nh>-<n> Closes <nh>head<n> back bottom panel");
                system.moduleMessage(this, entity, "<n>!close head help <nh>-<n> Shows Body closer commands for <nh>head<n>");
                system.moduleMessage(this, entity, "<n>!close help <nh>-<n> Shows Body closer commands");
                break;
            };
            break;
          case "body":
            switch (arguments[2]) {
              case "upper":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper body!");
                break;
              case "lower":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing lower body!");
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing front body!");
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing back body!");
                break;
              case "upperFront":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper front body!");
                break;
              case "lowerFront":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing lower front body!");
                break;
              case "upperBack":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper back body!");
                break;
              case "lowerBack":
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing lower back body!");
                break;
              case "machineGun":
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
                system.moduleMessage(this, entity, "<n>Closing body machine guns!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/body_upper_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_upper_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_lower_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/body_machine_gun_open", false);
                system.moduleMessage(this, entity, "<n>Closing body!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body closer commands for <nh>body<n>:");
                system.moduleMessage(this, entity, "<n>!close body * <nh>-<n> Closes every possible closing for <nh>body<n>");
                system.moduleMessage(this, entity, "<n>!close body upper <nh>-<n> Closes <nh>body<n> upper panels");
                system.moduleMessage(this, entity, "<n>!close body lower <nh>-<n> Closes <nh>body<n> lower panels");
                system.moduleMessage(this, entity, "<n>!close body front <nh>-<n> Closes <nh>body<n> front panels");
                system.moduleMessage(this, entity, "<n>!close body back <nh>-<n> Closes <nh>body<n> back panels");
                system.moduleMessage(this, entity, "<n>!close body upperFront <nh>-<n> Closes <nh>body<n> front upper panel");
                system.moduleMessage(this, entity, "<n>!close body upperBack <nh>-<n> Closes <nh>body<n> back upper panel");
                system.moduleMessage(this, entity, "<n>!close body lowerFront <nh>-<n> Closes <nh>body<n> front lower panel");
                system.moduleMessage(this, entity, "<n>!close body lowerBack <nh>-<n> Closes <nh>body<n> back lower panel");
                system.moduleMessage(this, entity, "<n>!close body machineGun <nh>-<n> Closes <nh>body<n> machine gun");
                system.moduleMessage(this, entity, "<n>!close body help <nh>-<n> Shows Body closer commands for <nh>body<n>");
                system.moduleMessage(this, entity, "<n>!close help <nh>-<n> Shows Body closer commands");
                break;
            };
            break;
          case "leftArm":
            switch (arguments[2]) {
              case "cannon":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
                system.moduleMessage(this, entity, "<n>Closing left arm cannon!");
                break;
              case "cannonOuter":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
                system.moduleMessage(this, entity, "<n>Closing outer left arm cannon!");
                break;
              case "cannonInner":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
                system.moduleMessage(this, entity, "<n>Closing inner left arm cannon!");
                break;
              case "outer":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
                system.moduleMessage(this, entity, "<n>Closing outer left arm!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_outer_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_cannon_inner_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_arm_outer_open", false);
                system.moduleMessage(this, entity, "<n>Closing left arm!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body closer commands for <nh>leftArm<n>:");
                system.moduleMessage(this, entity, "<n>!close leftArm * <nh>-<n> Closes every possible closing for <nh>leftArm<n>");
                system.moduleMessage(this, entity, "<n>!close leftArm cannon <nh>-<n> Closes <nh>leftArm<n> cannon panels");
                system.moduleMessage(this, entity, "<n>!close leftArm cannonOuter <nh>-<n> Closes <nh>leftArm<n> outer cannon panel");
                system.moduleMessage(this, entity, "<n>!close leftArm cannonInner <nh>-<n> Closes <nh>leftArm<n> inner cannon panel");
                system.moduleMessage(this, entity, "<n>!close leftArm outer <nh>-<n> Closes <nh>leftArm<n> outer panel");
                system.moduleMessage(this, entity, "<n>!close leftArm help <nh>-<n> Shows Body closer commands for <nh>leftArm<n>");
                system.moduleMessage(this, entity, "<n>!close help <nh>-<n> Shows Body closer commands");
                break;
            };
            break;
          case "rightArm":
            switch (arguments[2]) {
              case "cannon":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
                system.moduleMessage(this, entity, "<n>Closing right arm cannon!");
                break;
              case "cannonOuter":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
                system.moduleMessage(this, entity, "<n>Closing outer right arm cannon!");
                break;
              case "cannonInner":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
                system.moduleMessage(this, entity, "<n>Closing inner right arm cannon!");
                break;
              case "outer":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
                system.moduleMessage(this, entity, "<n>Closing outer right arm!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_outer_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_cannon_inner_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_arm_outer_open", false);
                system.moduleMessage(this, entity, "<n>Closing right arm!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body closer commands for <nh>rightArm<n>:");
                system.moduleMessage(this, entity, "<n>!close rightArm * <nh>-<n> Closes every possible closing for <nh>rightArm<n>");
                system.moduleMessage(this, entity, "<n>!close rightArm cannon <nh>-<n> Closes <nh>rightArm<n> cannon panels");
                system.moduleMessage(this, entity, "<n>!close rightArm cannonOuter <nh>-<n> Closes <nh>rightArm<n> outer cannon panel");
                system.moduleMessage(this, entity, "<n>!close rightArm cannonInner <nh>-<n> Closes <nh>rightArm<n> inner cannon panel");
                system.moduleMessage(this, entity, "<n>!close rightArm outer <nh>-<n> Closes <nh>rightArm<n> outer panel");
                system.moduleMessage(this, entity, "<n>!close rightArm help <nh>-<n> Shows Body closer commands for <nh>rightArm<n>");
                system.moduleMessage(this, entity, "<n>!close help <nh>-<n> Shows Body closer commands");
                break;
            };
            break;
          case "leftLeg":
            switch (arguments[2]) {
              case "leg":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper left leg!");
                break;
              case "boot":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
                system.moduleMessage(this, entity, "<n>Closing left leg boot!");
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing front left leg!");
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing back left leg!");
                break;
              case "legFront":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper front left leg!");
                break;
              case "bootFront":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing front left leg boot!");
                break;
              case "legBack":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper back left leg!");
                break;
              case "bootBack":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing back left leg boot!");
                break;
              case "bootRocket":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
                system.moduleMessage(this, entity, "<n>Closing left leg rocket!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/left_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/left_leg_boot_open", false);
                system.moduleMessage(this, entity, "<n>Closing entire left leg!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body closer commands for <nh>leftLeg<n>:");
                system.moduleMessage(this, entity, "<n>!close leftLeg * <nh>-<n> Closes every possible closing for <nh>leftLeg<n>");
                system.moduleMessage(this, entity, "<n>!close leftLeg leg <nh>-<n> Closes <nh>leftLeg<n> leg panels");
                system.moduleMessage(this, entity, "<n>!close leftLeg boot <nh>-<n> Closes <nh>leftLeg<n> boot panels");
                system.moduleMessage(this, entity, "<n>!close leftLeg front <nh>-<n> Closes <nh>leftLeg<n> front panels");
                system.moduleMessage(this, entity, "<n>!close leftLeg back <nh>-<n> Closes <nh>leftLeg<n> back panels");
                system.moduleMessage(this, entity, "<n>!close leftLeg legFront <nh>-<n> Closes <nh>leftLeg<n> front leg panel");
                system.moduleMessage(this, entity, "<n>!close leftLeg legBack <nh>-<n> Closes <nh>leftLeg<n> back leg panel");
                system.moduleMessage(this, entity, "<n>!close leftLeg bootFront <nh>-<n> Closes <nh>leftLeg<n> front boot panel");
                system.moduleMessage(this, entity, "<n>!close leftLeg bootBack <nh>-<n> Closes <nh>leftLeg<n> back boot panel");
                system.moduleMessage(this, entity, "<n>!close leftLeg bootRocket <nh>-<n> Closes <nh>leftLeg<n> boot rocket");
                system.moduleMessage(this, entity, "<n>!close leftLeg help <nh>-<n> Shows Body closer commands for <nh>leftLeg<n>");
                system.moduleMessage(this, entity, "<n>!close help <nh>-<n> Shows Body closer commands");
                break;
            };
            break;
          case "rightLeg":
            switch (arguments[2]) {
              case "leg":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper right leg!");
                break;
              case "boot":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
                system.moduleMessage(this, entity, "<n>Closing right leg boot!");
                break;
              case "front":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing front right leg!");
                break;
              case "back":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing back right leg!");
                break;
              case "legFront":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper front right leg!");
                break;
              case "bootFront":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
                system.moduleMessage(this, entity, "<n>Closing front right leg boot!");
                break;
              case "legBack":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing upper back right leg!");
                break;
              case "bootBack":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
                system.moduleMessage(this, entity, "<n>Closing back right leg boot!");
                break;
              case "bootRocket":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
                system.moduleMessage(this, entity, "<n>Closing left leg rocket!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/right_leg_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_front_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_back_open", false);
                manager.setData(entity, "skyhighheroes:dyn/right_leg_boot_open", false);
                system.moduleMessage(this, entity, "<n>Closing entire right leg!");
                break;
              case "help":
                system.moduleMessage(this, entity, "<n>Body closer commands for <nh>rightLeg<n>:");
                system.moduleMessage(this, entity, "<n>!close rightLeg * <nh>-<n> Closes every possible closing for <nh>rightLeg<n>");
                system.moduleMessage(this, entity, "<n>!close rightLeg leg <nh>-<n> Closes <nh>rightLeg<n> leg panels");
                system.moduleMessage(this, entity, "<n>!close rightLeg boot <nh>-<n> Closes <nh>rightLeg<n> boot panels");
                system.moduleMessage(this, entity, "<n>!close rightLeg front <nh>-<n> Closes <nh>rightLeg<n> front panels");
                system.moduleMessage(this, entity, "<n>!close rightLeg back <nh>-<n> Closes <nh>rightLeg<n> back panels");
                system.moduleMessage(this, entity, "<n>!close rightLeg legFront <nh>-<n> Closes <nh>rightLeg<n> front leg panel");
                system.moduleMessage(this, entity, "<n>!close rightLeg legBack <nh>-<n> Closes <nh>rightLeg<n> back leg panel");
                system.moduleMessage(this, entity, "<n>!close rightLeg bootFront <nh>-<n> Closes <nh>rightLeg<n> front boot panel");
                system.moduleMessage(this, entity, "<n>!close rightLeg bootBack <nh>-<n> Closes <nh>rightLeg<n> back boot panel");
                system.moduleMessage(this, entity, "<n>!close rightLeg bootRocket <nh>-<n> Closes <nh>rightLeg<n> boot rocket");
                system.moduleMessage(this, entity, "<n>!close rightLeg help <nh>-<n> Shows Body closer commands for <nh>rightLeg<n>");
                system.moduleMessage(this, entity, "<n>!close help <nh>-<n> Shows Body closer commands");
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
            system.moduleMessage(this, entity, "<n>Closing everything!");
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Body closer commands:");
            system.moduleMessage(this, entity, "<n>!close <nh><bodyPart><n> * <nh>-<n> Closes every closing on the body part");
            system.moduleMessage(this, entity, "<n>!close <nh><bodyPart><n> help <nh>-<n> Shows Body closer commands for the body part");
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