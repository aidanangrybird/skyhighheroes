extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "eyes": "skyhighheroes:scorched/astro/scorched_tenma_eyes",
  "boots_lights": "skyhighheroes:scorched/astro/scorched_tenma_boots_lights",
  "arms_lights": "skyhighheroes:scorched/astro/scorched_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:scorched/astro/scorched_tenma_eyes_normal",
  "base": "skyhighheroes:scorched/astro/scorched_tenma_base",
  "base_flying": "skyhighheroes:scorched/astro/scorched_tenma_base_flying",
  "boots": "skyhighheroes:scorched/astro/scorched_tenma_boots",
  "shorts": "skyhighheroes:scorched/astro/scorched_tenma_shorts",
  "long": "skyhighheroes:scorched/astro/scorched_tenma_long",
  "long_flying": "skyhighheroes:scorched/astro/scorched_tenma_long_flying",
  "short": "skyhighheroes:scorched/astro/scorched_tenma_short",
  "short_flying": "skyhighheroes:scorched/astro/scorched_tenma_short_flying",
  "normal": "skyhighheroes:scorched/astro/scorched_tenma_normal",
  "normal_flying": "skyhighheroes:scorched/astro/scorched_tenma_normal_flying",
  "cannon_lights": "skyhighheroes:scorched/astro/scorched_tenma_cannon_lights",
  "shield": "skyhighheroes:scorched/astro/scorched_tenma_shield",
  "katana": "skyhighheroes:scorched/astro/scorched_tenma_katana",
  "katana_lights": "skyhighheroes:scorched/astro/scorched_tenma_katana_lights",
  "scythe": "skyhighheroes:scorched/astro/scorched_tenma_scythe",
  "scythe_lights": "skyhighheroes:scorched/astro/scorched_tenma_scythe_lights",
  "rifle": "skyhighheroes:scorched/astro/scorched_tenma_rifle",
  "rifle_lights": "skyhighheroes:scorched/astro/scorched_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xFFC400);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xFFC400);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:scorched_tenma_speed");
};

function getSuitID() {
  return "skyhighheroes:scorched_tenma";
};

function getID() {
  return "5429d1b5-7828-4b04-a0b0-fc8b41ffac27";
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