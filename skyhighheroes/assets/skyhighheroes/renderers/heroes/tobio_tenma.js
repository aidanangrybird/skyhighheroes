var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

var metal_heat;

loadTextures({
  "eyes": "skyhighheroes:tobio/tobio_tenma_eyes",
  "boots_lights": "skyhighheroes:tobio/tobio_tenma_boots_lights",
  "boots_opening": "skyhighheroes:tobio/boots_normal",
  "arms_lights": "skyhighheroes:tobio/tobio_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:tobio/tobio_tenma_eyes_normal",
  "base": "skyhighheroes:tobio/tobio_tenma_base",
  "base_flying": "skyhighheroes:tobio/tobio_tenma_base_flying",
  "boots": "skyhighheroes:tobio/tobio_tenma_boots",
  "shorts": "skyhighheroes:tobio/tobio_tenma_shorts",
  "long": "skyhighheroes:tobio/tobio_tenma_long",
  "long_flying": "skyhighheroes:tobio/tobio_tenma_long_flying",
  "short": "skyhighheroes:tobio/tobio_tenma_short",
  "short_flying": "skyhighheroes:tobio/tobio_tenma_short_flying",
  "normal": "skyhighheroes:tobio/tobio_tenma_normal",
  "normal_flying": "skyhighheroes:tobio/tobio_tenma_normal_flying",
  "cannon_lights": "skyhighheroes:tobio/tobio_tenma_cannon_lights",
  "shield": "skyhighheroes:tobio/tobio_tenma_shield",
  "katana": "skyhighheroes:tobio/tobio_tenma_katana",
  "katana_lights": "skyhighheroes:tobio/tobio_tenma_katana_lights",
  "scythe": "skyhighheroes:tobio/tobio_tenma_scythe",
  "scythe_lights": "skyhighheroes:tobio/tobio_tenma_scythe_lights",
  "rifle": "skyhighheroes:tobio/tobio_tenma_rifle",
  "rifle_lights": "skyhighheroes:tobio/tobio_tenma_rifle_lights"
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
  nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0.0;
  nv.factor = 1.0;
  tenma.initEquipment(renderer);
  rockets = tenma.initNormalBoosters(renderer);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xFFFFFF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:tobio_tenma_speed");
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
  cannon.render(entity, renderLayer);
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
};