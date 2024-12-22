/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  return {
    name: "cannonSystem",
    type: 6,
    powers: ["skyhighheroes:astro_blaster"],
    keyBinds: function (hero) {
      hero.addKeyBindFunc("INHIBIT_DUAL_ARM_CANNON", (player, manager) => {
        system.systemMessage(player, "Charged arm cannons inhibited!")
        return true;
      }, "\u00A7mCharged Arm Cannons\u00A7r Inhibited", 2);
      hero.addKeyBind("ENERGY_PROJECTION", "Charged Arm Cannons", 2);
      hero.addKeyBind("DUAL_ARM_CANNONS", "Charged Arm Cannons", 2);
      hero.addKeyBindFunc("INHIBIT_ARM_CANNON", (player, manager) => {
        system.systemMessage(player, "Arm cannon inhibited!")
        return true;
      }, "\u00A7mAim Arm Cannon\u00A7r Inhibited", 2);
      hero.addKeyBind("AIM", "Aim Arm Cannon", 4);
      hero.addKeyBind("ARM_CANNON", "Aim Arm Cannon", 4);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      result = false;
      if (keyBind == "ARM_CANNON") {
        result = entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/astro_clothes") != 3;
      };
      if (keyBind == "INHIBIT_ARM_CANNON") {
        result = false;
      };
      if (keyBind == "AIM") {
        result = entity.getHeldItem().isEmpty() && (entity.getData("skyhighheroes:dyn/astro_clothes") == 3) ? true : (entity.getData("skyhighheroes:dyn/arm_cannon_timer") == 1);
      };
      if (keyBind == "ENERGY_PROJECTION") {
        result = entity.getHeldItem().isEmpty() && (entity.getData("skyhighheroes:dyn/astro_clothes") == 3) ? true : (entity.getData("skyhighheroes:dyn/dual_arm_cannon_timer") == 1);
      };
      if (keyBind == "DUAL_ARM_CANNONS") {
        result = entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/astro_clothes") != 3;
      };
      if (keyBind == "INHIBIT_DUAL_ARM_CANNON") {
        result = false;
      };
      return result;
    },
    isKeyBindDisabled: function (entity, keyBind) {
      result = false;
      if (keyBind == "INHIBIT_ARM_CANNON") {
        result = true;
      };
      if (keyBind == "ARM_CANNON") {
        result = false;
      };
      if (keyBind == "AIM") {
        result = false;
      };
      if (keyBind == "ENERGY_PROJECTION") {
        result = false;
      };
      if (keyBind == "DUAL_ARM_CANNONS") {
        result = false;
      };
      if (keyBind == "INHIBIT_DUAL_ARM_CANNON") {
        result = true;
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:energy_bolt") {
        result = entity.getHeldItem().isEmpty() && entity.getData("fiskheroes:energy_projection_timer") == 0;
      };
      if (modifier.name() == "fiskheroes:energy_projection") {
        result = entity.getHeldItem().isEmpty() && entity.getData("fiskheroes:aiming_timer") == 0;
      };
      return result;
    },
    isModifierDisabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:energy_bolt") {
        result = false;
      };
      if (modifier.name() == "fiskheroes:energy_projection") {
        result = false;
      };
      return result;
    }
  };
};