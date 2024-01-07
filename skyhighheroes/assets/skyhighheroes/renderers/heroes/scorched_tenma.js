extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:scorched/astro/scorched_tenma.tx.json",
  "rocket_legs": "skyhighheroes:scorched/astro/scorched_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:scorched/astro/scorched_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:scorched/astro/scorched_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:scorched/astro/scorched_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:scorched/astro/scorched_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:scorched/astro/scorched_tenma_eyes",
  "boots_lights": "skyhighheroes:scorched/astro/scorched_tenma_boots_lights",
  "arms_lights": "skyhighheroes:scorched/astro/scorched_tenma_arms_lights",
  "boots": "skyhighheroes:scorched/astro/scorched_tenma_boots",
  "shorts": "skyhighheroes:scorched/astro/scorched_tenma_shorts",
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
  tenma.initBeams(renderer, 0xFFC400);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:scorched_tenma_speed");
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
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
  parent.render(entity, renderLayer, isFirstPersonArm);
};