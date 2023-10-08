var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

var metal_heat;

loadTextures({
  "boots": "skyhighheroes:boots"
});

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (entity.isWearingFullSuit()) {
      if (entity.getInterpolatedData("fiskheroes:flight_timer") > 0) {
        if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
          return "base_flying";
        };
        if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
          return "long_flying";
        };
        if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
          return "short_flying";
        };
        if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
          return "normal_flying";
        };
      };
      if (entity.getInterpolatedData("fiskheroes:flight_timer") == 0) {
        if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
          return "base";
        };
        if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
          return "long";
        };
        if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
          return "short";
        };
        if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
          return "normal";
        };
      };
    };
    if (renderLayer == "HELMET") {
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
        return entity.getWornChestplate().suitType() == getSuitID() ? "long_head_torso" : "base_head";
      } else {
        return "base_head";
      };
    };
    if (renderLayer == "CHESTPLATE" || renderLayer == "BOOTS") {
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
        return entity.getWornLeggings().suitType() == getSuitID() ? "base_torso_boots_legs" : "base_torso_boots";
      };
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
        return entity.getWornLeggings().suitType() == getSuitID() ? "long_torso_boots_legs" : "long_torso_boots";
      };
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
        return "short_torso_boots";
      };
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
        return entity.getWornLeggings().suitType() == getSuitID() ? "normal_torso_boots_legs" : "normal_torso_boots";
      };
    };
    if (renderLayer == "LEGGINGS") {
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
        if (entity.getWornBoots().suitType() == getSuitID()) {
          return "base_legs_boots";
        } else {
          return "base_legs";
        };
      };
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
        if (entity.getWornChestplate().suitType() == getSuitID() && entity.getWornBoots().suitType() == getSuitID()) {
          return "long_legs_torso_boots";
        };
        if (entity.getWornChestplate().suitType() == getSuitID()) {
          return "long_legs_torso";
        };
        if (entity.getWornBoots().suitType() == getSuitID()) {
          return "long_legs_boots";
        } else {
          return "long_legs";
        };
      };
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
        if (entity.getWornChestplate().suitType() == getSuitID() && entity.getWornBoots().suitType() == getSuitID()) {
          return "short_legs_torso_boots";
        };
        if (entity.getWornChestplate().suitType() == getSuitID()) {
          return "short_legs_torso";
        };
        if (entity.getWornBoots().suitType() == getSuitID()) {
          return "short_legs_boots";
        } else {
          return "short_legs";
        };
      };
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
        if (entity.getWornChestplate().suitType() == getSuitID() && entity.getWornBoots().suitType() == getSuitID()) {
          return "normal_legs_torso_boots";
        };
        if (entity.getWornChestplate().suitType() == getSuitID()) {
          return "normal_legs_torso";
        };
        if (entity.getWornBoots().suitType() == getSuitID()) {
          return "normal_legs_boots";
        } else {
          return "normal_legs";
        };
      };
    } else {
      return "null";
    };
  });
  renderer.setLights((entity, renderLayer) => {
    if (renderLayer == "HELMET") {
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") != 3 || (entity.as("DISPLAY").getDisplayType() != "null") || entity.getUUID() != getID()) {
        return "eyes";
      };
      if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
        return "eyes_normal";
      };
    };
    if (renderLayer == "CHESTPLATE" || renderLayer == "LEGGINGS" || renderLayer == "BOOTS") {
      return null;
    };
  });
  renderer.setItemIcons("%s_head", "%s_torso", "%s_legs", "%s_boots");
  renderer.showModel("HELMET", "head", "headwear");
  renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm");
  renderer.showModel("BOOTS", "rightLeg", "leftLeg");
  renderer.fixHatLayer("HELMET");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0.0;
  nv.factor = 1.0;
  nv.setCondition(entity => (entity.getUUID() == getID()));
  astro.initEquipment(renderer);
  metal_heat = renderer.createEffect("fiskheroes:metal_heat");
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "astro.HOLOGRAM_FLIGHT", "skyhighheroes:astro_holo_flight");
  astro.initAstroAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  metal_heat.opacity = entity.getInterpolatedData("fiskheroes:metal_heat");
  metal_heat.render();
};
function getID() {
  return "";
};
function getSuitID() {
  return "";
};
function getColor() {
  return 0x000000;
};