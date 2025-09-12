/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "panelStatus",
    moduleMessageName: "Panel Status",
    type: 1,
    command: "panelStatus",
    helpMessage: "<n>!panelStatus <nh>-<n> Panel status",
    disabledMessage: "<e>Module <eh>panelStatus<e> is disabled!",
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 4) {
        switch(argList[1]) {
          case "head":
            system.moduleMessage(this, entity, "<n>Head panel status:");
            system.moduleMessage(this, entity, "<n>Top front panel: <nh>" + ((entity.getData("skyhighheroes:dyn/head_top_front_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Top back panel: <nh>" + ((entity.getData("skyhighheroes:dyn/head_top_back_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Bottom front panel: <nh>" + ((entity.getData("skyhighheroes:dyn/head_bottom_front_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Bottom back panel: <nh>" + ((entity.getData("skyhighheroes:dyn/head_bottom_back_open_timer") > 0) ? "OPEN" : "CLOSED"));
            break;
          case "body":
            system.moduleMessage(this, entity, "<n>Body panel status:");
            system.moduleMessage(this, entity, "<n>Upper front panel: <nh>" + ((entity.getData("skyhighheroes:dyn/body_upper_front_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Upper back panel: <nh>" + ((entity.getData("skyhighheroes:dyn/body_upper_back_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Lower front panel: <nh>" + ((entity.getData("skyhighheroes:dyn/body_lower_front_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Lower back panel: <nh>" + ((entity.getData("skyhighheroes:dyn/body_lower_back_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Machine gun panels: <nh>" + ((entity.getData("skyhighheroes:dyn/body_machine_gun_open_timer") > 0) ? "OPEN" : "CLOSED"));
            break;
          case "leftArm":
            system.moduleMessage(this, entity, "<n>Left Arm panel status:");
            system.moduleMessage(this, entity, "<n>Outer panel: <nh>" + ((entity.getData("skyhighheroes:dyn/left_arm_outer_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Cannon outer panel: <nh>" + ((entity.getData("skyhighheroes:dyn/left_arm_cannon_outer_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Cannon inner panel: <nh>" + ((entity.getData("skyhighheroes:dyn/left_arm_cannon_inner_open_timer") > 0) ? "OPEN" : "CLOSED"));
            break;
          case "rightArm":
            system.moduleMessage(this, entity, "<n>Right Arm panel status:");
            system.moduleMessage(this, entity, "<n>Outer panel: <nh>" + ((entity.getData("skyhighheroes:dyn/right_arm_outer_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Cannon outer panel: <nh>" + ((entity.getData("skyhighheroes:dyn/right_arm_cannon_outer_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Cannon inner panel: <nh>" + ((entity.getData("skyhighheroes:dyn/right_arm_cannon_inner_open_timer") > 0) ? "OPEN" : "CLOSED"));
            break;
          case "leftLeg":
            system.moduleMessage(this, entity, "<n>Left Leg panel status:");
            system.moduleMessage(this, entity, "<n>Front panel: <nh>" + ((entity.getData("skyhighheroes:dyn/left_leg_front_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Back panel: <nh>" + ((entity.getData("skyhighheroes:dyn/left_leg_back_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Boot front panel: <nh>" + ((entity.getData("skyhighheroes:dyn/left_leg_boot_front_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Boot back panel: <nh>" + ((entity.getData("skyhighheroes:dyn/left_leg_boot_back_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Boot panel: <nh>" + ((entity.getData("skyhighheroes:dyn/left_leg_boot_open_timer") > 0) ? "OPEN" : "CLOSED"));
            break;
          case "rightLeg":
            system.moduleMessage(this, entity, "<n>Right Leg panel status:");
            system.moduleMessage(this, entity, "<n>Front panel: <nh>" + ((entity.getData("skyhighheroes:dyn/right_leg_front_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Back panel: <nh>" + ((entity.getData("skyhighheroes:dyn/right_leg_back_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Boot front panel: <nh>" + ((entity.getData("skyhighheroes:dyn/right_leg_boot_front_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Boot back panel: <nh>" + ((entity.getData("skyhighheroes:dyn/right_leg_boot_back_open_timer") > 0) ? "OPEN" : "CLOSED"));
            system.moduleMessage(this, entity, "<n>Boot panel: <nh>" + ((entity.getData("skyhighheroes:dyn/right_leg_boot_open_timer") > 0) ? "OPEN" : "CLOSED"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Panel status commands:");
            system.moduleMessage(this, entity, "<n>!panelStatus <nh><bodyPart><n> <nh>-<n> Shows status of panels on the body part");
            system.moduleMessage(this, entity, "<n>!panelStatus help <nh>-<n> Shows panel status commands");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>panelStatus<e> command! Try <eh>!panelStatus help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>panelStatus<e> command! Try <eh>!panelStatus help<e> for a list of commands!");
      };
    },
  };
};