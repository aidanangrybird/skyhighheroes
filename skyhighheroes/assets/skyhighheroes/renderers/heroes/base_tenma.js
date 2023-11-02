var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

var metal_heat;

loadTextures({
  "boots_opening": "skyhighheroes:boots"
});

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (entity.isWearingFullSuit() && (entity.as("DISPLAY").getDisplayType() != "null" || entity.getUUID() == getID())) {
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
    if (renderLayer == "BOOTS") {
      return "boots";
    };
    if (renderLayer == "LEGGINGS") {
      return "shorts";
    } else {
      return "null";
    };
  });
  renderer.setItemIcon("LEGGINGS", "%s_shorts");
  renderer.setItemIcon("BOOTS", "%s_boots");
  renderer.showModel("LEGGINGS", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
  renderer.showModel("BOOTS", "rightLeg", "leftLeg");
  renderer.fixHatLayer("LEGGINGS");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  tenma.initNV(renderer, getID());
  tenma.initCustomEquipment(renderer, getID());
  eyes = tenma.initEyes(renderer);
  metal_heat = renderer.createEffect("fiskheroes:metal_heat");
  metal_heat.includeEffects(eyes.eyes_off);
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "astro.HOLOGRAM_FLIGHT", "skyhighheroes:astro_holo_flight");
  tenma.initAstroAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  eyes.render(entity);
  metal_heat.opacity = entity.getInterpolatedData("fiskheroes:metal_heat");
  metal_heat.render();
};
function getID() {
  return "";
};