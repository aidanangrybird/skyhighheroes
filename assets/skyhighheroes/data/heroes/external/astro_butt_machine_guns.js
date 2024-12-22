/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  return {
    name: "machineGuns",
    type: 6,
    powers: ["skyhighheroes:astro_machine_guns"],
    keyBinds: function (hero) {
      hero.addKeyBind("CHARGED_BEAM", "Butt Machine Guns", 5);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      result = false;
      if (keyBind == "CHARGED_BEAM") {
        result = true;
      };
      return result;
    },
    isKeyBindDisabled: function (entity, keyBind) {
      result = false;
      if (keyBind == "CHARGED_BEAM") {
        result = false;
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:charged_beam") {
        result = true;
      };
      return result;
    },
    isModifierDisabled: function (entity, modifier) {
      result = false;
      if (modifier.name() == "fiskheroes:charged_beam") {
        result = false;
      };
      return result;
    }
  };
};