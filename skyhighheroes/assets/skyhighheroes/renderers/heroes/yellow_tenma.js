extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "eyes": "skyhighheroes:yellow/astro/yellow_tenma_eyes",
  "boots_lights": "skyhighheroes:yellow/astro/yellow_tenma_boots_lights",
  "arms_lights": "skyhighheroes:yellow/astro/yellow_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:yellow/astro/yellow_tenma_eyes_normal",
  "base": "skyhighheroes:yellow/astro/yellow_tenma_base",
  "base_flying": "skyhighheroes:yellow/astro/yellow_tenma_base_flying",
  "boots": "skyhighheroes:yellow/astro/yellow_tenma_boots",
  "shorts": "skyhighheroes:yellow/astro/yellow_tenma_shorts",
  "long": "skyhighheroes:yellow/astro/yellow_tenma_long",
  "long_flying": "skyhighheroes:yellow/astro/yellow_tenma_long_flying",
  "short": "skyhighheroes:yellow/astro/yellow_tenma_short",
  "short_flying": "skyhighheroes:yellow/astro/yellow_tenma_short_flying",
  "normal": "skyhighheroes:yellow/astro/yellow_tenma_normal",
  "normal_flying": "skyhighheroes:yellow/astro/yellow_tenma_normal_flying",
  "cannon_lights": "skyhighheroes:yellow/astro/yellow_tenma_cannon_lights",
  "shield": "skyhighheroes:yellow/astro/yellow_tenma_shield",
  "katana": "skyhighheroes:yellow/astro/yellow_tenma_katana",
  "katana_lights": "skyhighheroes:yellow/astro/yellow_tenma_katana_lights",
  "scythe": "skyhighheroes:yellow/astro/yellow_tenma_scythe",
  "scythe_lights": "skyhighheroes:yellow/astro/yellow_tenma_scythe_lights",
  "rifle": "skyhighheroes:yellow/astro/yellow_tenma_rifle",
  "rifle_lights": "skyhighheroes:yellow/astro/yellow_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0x00FFFF);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0x00FFFF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:yellow_tenma_speed");
};

function getSuitID() {
  return "skyhighheroes:yellow_tenma";
};

function getID() {
  return "60f30003-1148-416b-8b4d-347002891126";
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