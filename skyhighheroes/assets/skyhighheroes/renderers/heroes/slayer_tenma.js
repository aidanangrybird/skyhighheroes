extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:slayer/astro/slayer_tenma.tx.json",
  "rocket_legs": "skyhighheroes:slayer/astro/slayer_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:slayer/astro/slayer_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:slayer/astro/slayer_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:slayer/astro/slayer_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:slayer/astro/slayer_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:slayer/astro/slayer_tenma_eyes",
  "boots_lights": "skyhighheroes:slayer/astro/slayer_tenma_boots_lights",
  "arms_lights": "skyhighheroes:slayer/astro/slayer_tenma_arms_lights",
  "boots": "skyhighheroes:slayer/astro/slayer_tenma_boots",
  "shorts": "skyhighheroes:slayer/astro/slayer_tenma_shorts",
  "cannon_lights": "skyhighheroes:slayer/astro/slayer_tenma_cannon_lights",
  "shield": "skyhighheroes:slayer/astro/slayer_tenma_shield",
  "katana": "skyhighheroes:slayer/astro/slayer_tenma_katana",
  "katana_lights": "skyhighheroes:slayer/astro/slayer_tenma_katana_lights",
  "scythe": "skyhighheroes:slayer/astro/slayer_tenma_scythe",
  "scythe_lights": "skyhighheroes:slayer/astro/slayer_tenma_scythe_lights",
  "rifle": "skyhighheroes:slayer/astro/slayer_tenma_rifle",
  "rifle_lights": "skyhighheroes:slayer/astro/slayer_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xffc400);
  tenma.initBeams(renderer, 0xffc400);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:slayer_tenma_speed");
};

function getID() {
  return "dde85392-d2d7-4213-8e52-05f42f8e0c48";
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