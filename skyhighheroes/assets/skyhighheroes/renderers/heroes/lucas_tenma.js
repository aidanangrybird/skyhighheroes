extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "eyes": "skyhighheroes:lucas/astro/lucas_tenma_eyes",
  "boots_lights": "skyhighheroes:lucas/astro/lucas_tenma_boots_lights",
  "arms_lights": "skyhighheroes:lucas/astro/lucas_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:lucas/astro/lucas_tenma_eyes_normal",
  "base": "skyhighheroes:lucas/astro/lucas_tenma_base",
  "base_flying": "skyhighheroes:lucas/astro/lucas_tenma_base_flying",
  "boots": "skyhighheroes:lucas/astro/lucas_tenma_boots",
  "shorts": "skyhighheroes:lucas/astro/lucas_tenma_shorts",
  "long": "skyhighheroes:lucas/astro/lucas_tenma_long",
  "long_flying": "skyhighheroes:lucas/astro/lucas_tenma_long_flying",
  "short": "skyhighheroes:lucas/astro/lucas_tenma_short",
  "short_flying": "skyhighheroes:lucas/astro/lucas_tenma_short_flying",
  "normal": "skyhighheroes:lucas/astro/lucas_tenma_normal",
  "cannon_lights": "skyhighheroes:lucas/astro/lucas_tenma_cannon_lights",
  "shield": "skyhighheroes:lucas/astro/lucas_tenma_shield",
  "katana": "skyhighheroes:lucas/astro/lucas_tenma_katana",
  "katana_lights": "skyhighheroes:lucas/astro/lucas_tenma_katana_lights",
  "scythe": "skyhighheroes:lucas/astro/lucas_tenma_scythe",
  "scythe_lights": "skyhighheroes:lucas/astro/lucas_tenma_scythe_lights",
  "rifle": "skyhighheroes:lucas/astro/lucas_tenma_rifle",
  "rifle_lights": "skyhighheroes:lucas/astro/lucas_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initBoosters(renderer, 0xFF0000);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xFF0000);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:lucas_tenma_speed");
};

function getSuitID() {
  return "skyhighheroes:lucas_tenma";
};

function getID() {
  return "c4bc5db6-3cf6-44fe-8427-304a7b211bc4";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  initAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
  cannon.render(entity, renderLayer);
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
};