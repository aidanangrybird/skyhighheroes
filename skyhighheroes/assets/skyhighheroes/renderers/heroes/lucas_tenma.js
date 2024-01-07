extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:lucas/astro/lucas_tenma.tx.json",
  "rocket_legs": "skyhighheroes:lucas/astro/lucas_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:lucas/astro/lucas_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:lucas/astro/lucas_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:lucas/astro/lucas_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:lucas/astro/lucas_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:lucas/astro/lucas_tenma_eyes",
  "boots_lights": "skyhighheroes:lucas/astro/lucas_tenma_boots_lights",
  "arms_lights": "skyhighheroes:lucas/astro/lucas_tenma_arms_lights",
  "boots": "skyhighheroes:lucas/astro/lucas_tenma_boots",
  "shorts": "skyhighheroes:lucas/astro/lucas_tenma_shorts",
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
  rockets = tenma.initCustomBoosters(renderer, 0xFF0000);
  tenma.initBeams(renderer, 0xFF0000);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:lucas_tenma_speed");
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
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
  parent.render(entity, renderLayer, isFirstPersonArm);
};