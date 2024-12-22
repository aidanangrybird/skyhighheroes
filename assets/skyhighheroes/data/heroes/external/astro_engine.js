/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  return {
    name: "engine",
    type: 6,
    powers: ["skyhighheroes:astro_engine"],
    keyBinds: function (hero) {
      hero.addKeyBind("SUPER_SPEED", "Super Speed", 3);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      var result = false;
      if (keyBind == "SUPER_SPEED") {
        result = true;
      };
      return result;
    },
    isKeyBindDisabled: function (entity, keyBind) {
      var result = false;
      if (keyBind == "SUPER_SPEED") {
        result = false;
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:super_speed") {
        result = entity.getData("fiskheroes:flight_timer") == 0;
      };
      return result;
    },
    isModifierDisabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:super_speed") {
        result = false;
      };
      return result;
    }
  };
};