extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "eyes": "skyhighheroes:aidan/astro/aidan_tenma_eyes",
  "boots_lights": "skyhighheroes:aidan/astro/aidan_tenma_boots_lights",
  "arms_lights": "skyhighheroes:aidan/astro/aidan_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:aidan/astro/aidan_tenma_eyes_normal",
  "base": "skyhighheroes:aidan/astro/aidan_tenma_base",
  "base_flying": "skyhighheroes:aidan/astro/aidan_tenma_base_flying",
  "boots": "skyhighheroes:aidan/astro/aidan_tenma_boots",
  "shorts": "skyhighheroes:aidan/astro/aidan_tenma_shorts",
  "long": "skyhighheroes:aidan/astro/aidan_tenma_long",
  "long_flying": "skyhighheroes:aidan/astro/aidan_tenma_long_flying",
  "short": "skyhighheroes:aidan/astro/aidan_tenma_short",
  "short_flying": "skyhighheroes:aidan/astro/aidan_tenma_short_flying",
  "normal": "skyhighheroes:aidan/astro/aidan_tenma_normal",
  "normal_flying": "skyhighheroes:aidan/astro/aidan_tenma_normal_flying",
  "cannon_lights": "skyhighheroes:aidan/astro/aidan_tenma_cannon_lights",
  "shield": "skyhighheroes:aidan/astro/aidan_tenma_shield",
  "katana": "skyhighheroes:aidan/astro/aidan_tenma_katana",
  "katana_lights": "skyhighheroes:aidan/astro/aidan_tenma_katana_lights",
  "scythe": "skyhighheroes:aidan/astro/aidan_tenma_scythe",
  "scythe_lights": "skyhighheroes:aidan/astro/aidan_tenma_scythe_lights",
  "rifle": "skyhighheroes:aidan/astro/aidan_tenma_rifle",
  "rifle_lights": "skyhighheroes:aidan/astro/aidan_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xFF8900);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xFF8900);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:aidan_tenma_speed");
};

function getSuitID() {
  return "skyhighheroes:aidan_tenma";
};

function getID() {
  return "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
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