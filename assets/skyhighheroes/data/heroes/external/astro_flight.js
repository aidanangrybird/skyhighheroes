/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  return {
    name: "flightSystem",
    type: 5,
    powers: ["skyhighheroes:astro_flight"],
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:controlled_flight") {
        result = true;
      };
      return result;
    },
    isModifierDisabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:controlled_flight") {
        result = false;
      };
      return result;
    }
  };
};