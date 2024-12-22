/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  return {
    name: "brain",
    type: 5,
    powers: ["skyhighheroes:astro_brain"],
    keyBinds: function (hero) {
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:arrow_catching") {
        result = entity.getData("fiskheroes:aiming_timer") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
      };
      return result;
    },
    isModifierDisabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:arrow_catching") {
        result = false;
      };
      return result;
    }
  };
};