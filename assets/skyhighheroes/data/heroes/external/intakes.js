/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  return {
    name: "intakes",
    moduleMessageName: "Intakes",
    type: 12,
    command: "intake",
    helpMessage: "<n>!intake <nh>-<n> intakes",
    disabledMessage: "<e>Module <eh>intakes<e> is disabled!",
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 5) {
        var nbt = entity.getWornHelmet().nbt();
        switch(argList[1]) {
          case "open":
            switch (argList[2]) {
              case "head":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>head<s> intakes!");
                break;
              case "headLeft":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>left head<s> intake!");
                break;
              case "headRight":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>right head<s> intake!");
                break;
              case "body":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>body<s> intakes!");
                break;
              case "bodyLeft":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>left body<s> intake!");
                break;
              case "bodyRight":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>right body<s> intake!");
                break;
              case "arms":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>arm<s> intakes!");
                break;
              case "leftArm":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>left arm<s> intakes!");
                break;
              case "rightArm":
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>right arm<s> intakes!");
                break;
              case "legs":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>leg<s> intakes!");
                break;
              case "leftLeg":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>left leg<s> intakes!");
                break;
              case "rightLeg":
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>right leg<s> intakes!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>intake<e>!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_open", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_open", true);
                system.moduleMessage(this, entity, "<s>Opened <sh>all<s> intakes!");
                break;
            };
            break;
          case "close":
            switch (argList[2]) {
              case "headIntakes":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>head<s> intakes!");
                break;
              case "headLeft":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>left head<s> intake!");
                break;
              case "headRight":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>right head<s> intake!");
                break;
              case "bodyIntakes":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>body<s> intakes!");
                break;
              case "bodyLeft":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>left body<s> intake!");
                break;
              case "bodyRight":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>right body<s> intake!");
                break;
              case "arms":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>arm<s> intakes!");
                break;
              case "leftArm":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>left arm<s> intake!");
                break;
              case "rightArm":
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>right arm<s> intake!");
                break;
              case "legs":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>leg<s> intakes!");
                break;
              case "leftLeg":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>left leg<s> intake!");
                break;
              case "rightLeg":
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>right leg<s> intake!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_open", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_open", false);
                system.moduleMessage(this, entity, "<s>Closed <sh>all<s> intakes!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>intake<e>!");
                break;
            };
            break;case "start":
            switch (argList[2]) {
              case "head":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>head<s> intakes!");
                break;
              case "headLeft":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>left head<s> intake!");
                break;
              case "headRight":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>right head<s> intake!");
                break;
              case "body":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>body<s> intakes!");
                break;
              case "bodyLeft":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>left body<s> intake!");
                break;
              case "bodyRight":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>right body<s> intake!");
                break;
              case "arms":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>arm<s> intakes!");
                break;
              case "leftArm":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>left arm<s> intakes!");
                break;
              case "rightArm":
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>right arm<s> intakes!");
                break;
              case "legs":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>leg<s> intakes!");
                break;
              case "leftLeg":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>left leg<s> intakes!");
                break;
              case "rightLeg":
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>right leg<s> intakes!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>intake<e>!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_starting_up", true);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_starting_up", true);
                system.moduleMessage(this, entity, "<s>Starting up <sh>all<s> intakes!");
                break;
            };
            break;
          case "stop":
            switch (argList[2]) {
              case "headIntakes":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>head<s> intakes!");
                break;
              case "headLeft":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>left head<s> intake!");
                break;
              case "headRight":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>right head<s> intake!");
                break;
              case "bodyIntakes":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>body<s> intakes!");
                break;
              case "bodyLeft":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>left body<s> intake!");
                break;
              case "bodyRight":
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>right body<s> intake!");
                break;
              case "arms":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>arm<s> intakes!");
                break;
              case "leftArm":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>left arm<s> intake!");
                break;
              case "rightArm":
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>right arm<s> intake!");
                break;
              case "legs":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>leg<s> intakes!");
                break;
              case "leftLeg":
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>left leg<s> intake!");
                break;
              case "rightLeg":
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>right leg<s> intake!");
                break;
              case "*":
                manager.setData(entity, "skyhighheroes:dyn/intake_head_left_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_head_right_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_left_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_body_right_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_starting_up", false);
                manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_starting_up", false);
                system.moduleMessage(this, entity, "<s>Shutting down <sh>all<s> intakes!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>intake<e>!");
                break;
            };
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>intakes commands:");
            system.moduleMessage(this, entity, "<n>!intake open <intake> <nh>-<n> Opens set of intakes");
            system.moduleMessage(this, entity, "<n>!intake close <intake> <nh>-<n> Closes set of intakes");
            system.moduleMessage(this, entity, "<n>!intake start <intake> <nh>-<n> Starts set of intakes");
            system.moduleMessage(this, entity, "<n>!intake stop <intake> <nh>-<n> Stops set of intakes");
            system.moduleMessage(this, entity, "<n>!intake status <nh>-<n> Shows status of intakes");
            system.moduleMessage(this, entity, "<n>!intake help <nh>-<n> Shows intakes commands");
            break;
          case "status":
            system.moduleMessage(this, entity, "<n>Intake status:");
            system.moduleMessage(this, entity, "Left Head: " + ((entity.getData("skyhighheroes:dyn/intake_head_left_starting_up") && entity.getData("skyhighheroes:dyn/intake_head_left_start_up_timer") > 0 && entity.getData("skyhighheroes:dyn/intake_head_left_start_up_timer") < 1) ? "STARTING UP" : ((entity.getData("skyhighheroes:dyn/intake_head_left_open")) ? "OPEN" : "CLOSED")));
            system.moduleMessage(this, entity, "Right Head: " + ((entity.getData("skyhighheroes:dyn/intake_head_right_starting_up") && entity.getData("skyhighheroes:dyn/intake_head_right_start_up_timer") > 0 && entity.getData("skyhighheroes:dyn/intake_head_right_start_up_timer") < 1) ? "STARTING UP" : ((entity.getData("skyhighheroes:dyn/intake_head_right_open")) ? "OPEN" : "CLOSED")));
            system.moduleMessage(this, entity, "Left Body: " + ((entity.getData("skyhighheroes:dyn/intake_body_left_starting_up") && entity.getData("skyhighheroes:dyn/intake_body_left_start_up_timer") > 0 && entity.getData("skyhighheroes:dyn/intake_body_left_start_up_timer") < 1) ? "STARTING UP" : ((entity.getData("skyhighheroes:dyn/intake_body_left_open")) ? "OPEN" : "CLOSED")));
            system.moduleMessage(this, entity, "Right Body: " + ((entity.getData("skyhighheroes:dyn/intake_body_right_starting_up") && entity.getData("skyhighheroes:dyn/intake_body_right_start_up_timer") > 0 && entity.getData("skyhighheroes:dyn/intake_body_right_start_up_timer") < 1) ? "STARTING UP" : ((entity.getData("skyhighheroes:dyn/intake_body_right_open")) ? "OPEN" : "CLOSED")));
            system.moduleMessage(this, entity, "Left Arm: " + ((entity.getData("skyhighheroes:dyn/intake_left_arm_starting_up") && entity.getData("skyhighheroes:dyn/intake_left_arm_start_up_timer") > 0 && entity.getData("skyhighheroes:dyn/intake_left_arm_start_up_timer") < 1) ? "STARTING UP" : ((entity.getData("skyhighheroes:dyn/intake_left_arm_open")) ? "OPEN" : "CLOSED")));
            system.moduleMessage(this, entity, "Right Arm: " + ((entity.getData("skyhighheroes:dyn/intake_right_arm_starting_up") && entity.getData("skyhighheroes:dyn/intake_right_arm_start_up_timer") > 0 && entity.getData("skyhighheroes:dyn/intake_right_arm_start_up_timer") < 1) ? "STARTING UP" : ((entity.getData("skyhighheroes:dyn/intake_right_arm_open")) ? "OPEN" : "CLOSED")));
            system.moduleMessage(this, entity, "Left Leg: " + ((entity.getData("skyhighheroes:dyn/intake_left_leg_starting_up") && entity.getData("skyhighheroes:dyn/intake_left_leg_start_up_timer") > 0 && entity.getData("skyhighheroes:dyn/intake_left_leg_start_up_timer") < 1) ? "STARTING UP" : ((entity.getData("skyhighheroes:dyn/intake_left_leg_open")) ? "OPEN" : "CLOSED")));
            system.moduleMessage(this, entity, "Right Leg: " + ((entity.getData("skyhighheroes:dyn/intake_right_leg_starting_up") && entity.getData("skyhighheroes:dyn/intake_right_leg_start_up_timer") > 0 && entity.getData("skyhighheroes:dyn/intake_right_leg_start_up_timer") < 1) ? "STARTING UP" : ((entity.getData("skyhighheroes:dyn/intake_right_leg_open")) ? "OPEN" : "CLOSED")));
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>intakes<e> command! Try <eh>!intake help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>intakes<e> command! Try <eh>!intake help<e> for a list of commands!");
      };
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    whenDisabled: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      manager.setData(entity, "skyhighheroes:dyn/intake_head_left_open", false);
      manager.setData(entity, "skyhighheroes:dyn/intake_head_right_open", false);
      manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", false);
      manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", false);
      manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_open", false);
      manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_open", false);
      manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_open", false);
      manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_open", false);
    },
    tickHandler: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      //manager.setData(entity, "skyhighheroes:dyn/intake_head_left_starting_up", entity.getData("skyhighheroes:dyn/intake_head_left_open_timer") == 1);
      manager.incrementData(entity, "skyhighheroes:dyn/intake_head_left_start_up_timer", 200, 50, entity.getData("skyhighheroes:dyn/intake_head_left_starting_up"));
      //manager.setData(entity, "skyhighheroes:dyn/intake_head_right_starting_up", entity.getData("skyhighheroes:dyn/intake_head_right_open_timer") == 1);
      manager.incrementData(entity, "skyhighheroes:dyn/intake_head_right_start_up_timer", 200, 50, entity.getData("skyhighheroes:dyn/intake_head_right_starting_up"));
      //manager.setData(entity, "skyhighheroes:dyn/intake_body_left_starting_up", entity.getData("skyhighheroes:dyn/intake_body_left_open_timer") == 1);
      manager.incrementData(entity, "skyhighheroes:dyn/intake_body_left_start_up_timer", 200, 50, entity.getData("skyhighheroes:dyn/intake_body_left_starting_up"));
      //manager.setData(entity, "skyhighheroes:dyn/intake_body_right_starting_up", entity.getData("skyhighheroes:dyn/intake_body_right_open_timer") == 1);
      manager.incrementData(entity, "skyhighheroes:dyn/intake_body_right_start_up_timer", 200, 50, entity.getData("skyhighheroes:dyn/intake_body_right_starting_up"));
      //manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_starting_up", entity.getData("skyhighheroes:dyn/intake_left_arm_open_timer") == 1);
      manager.incrementData(entity, "skyhighheroes:dyn/intake_left_arm_start_up_timer", 200, 50, entity.getData("skyhighheroes:dyn/intake_left_arm_starting_up"));
      //manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_starting_up", entity.getData("skyhighheroes:dyn/intake_right_arm_open_timer") == 1);
      manager.incrementData(entity, "skyhighheroes:dyn/intake_right_arm_start_up_timer", 200, 50, entity.getData("skyhighheroes:dyn/intake_right_arm_starting_up"));
      //manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_starting_up", entity.getData("skyhighheroes:dyn/intake_left_leg_open_timer") == 1);
      manager.incrementData(entity, "skyhighheroes:dyn/intake_left_leg_start_up_timer", 200, 50, entity.getData("skyhighheroes:dyn/intake_left_leg_starting_up"));
      //manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_starting_up", entity.getData("skyhighheroes:dyn/intake_right_leg_open_timer") == 1);
      manager.incrementData(entity, "skyhighheroes:dyn/intake_right_leg_start_up_timer", 200, 50, entity.getData("skyhighheroes:dyn/intake_right_leg_starting_up"));
      /* 
      var rocketsArms = entity.getData("skyhighheroes:dyn/rockets_arms_timer") == 1;
      var rocketsBody = entity.getData("skyhighheroes:dyn/rockets_body_timer") == 1;
      var rocketsLegs = entity.getData("skyhighheroes:dyn/rockets_legs_timer") == 1;
      var cannonsHead = entity.getData("skyhighheroes:dyn/cannons_head_timer") == 1;
      var cannonsArms = entity.getData("skyhighheroes:dyn/cannons_arms_timer") == 1;
      var cannonsBody = entity.getData("skyhighheroes:dyn/cannons_body_timer") == 1;
      if (cannonsHead) {
        manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", true);
        manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", true);
      };
      if (rocketsBody || cannonsBody) {
        manager.setData(entity, "skyhighheroes:dyn/intake_body_left_open", true);
        manager.setData(entity, "skyhighheroes:dyn/intake_body_right_open", true);
      };
      if (rocketsArms || cannonsArms) {
        manager.setData(entity, "skyhighheroes:dyn/intake_left_arm_open", true);
        manager.setData(entity, "skyhighheroes:dyn/intake_right_arm_open", true);
      };
      if (rocketsLegs) {
        manager.setData(entity, "skyhighheroes:dyn/intake_left_leg_open", true);
        manager.setData(entity, "skyhighheroes:dyn/intake_right_leg_open", true);
      }; */
    }
  };
};