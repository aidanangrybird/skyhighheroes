extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:biscuit/astro/biscuit_tenma.tx.json",
  "rocket_legs": "skyhighheroes:biscuit/astro/biscuit_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:biscuit/astro/biscuit_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:biscuit/astro/biscuit_tenma_eyes",
  "boots_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_boots_lights",
  "arms_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_arms_lights",
  "boots": "skyhighheroes:biscuit/astro/biscuit_tenma_boots",
  "shorts": "skyhighheroes:biscuit/astro/biscuit_tenma_shorts",
  "cannon_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_cannon_lights",
  "shield": "skyhighheroes:biscuit/astro/biscuit_tenma_shield",
  "katana": "skyhighheroes:biscuit/astro/biscuit_tenma_katana",
  "katana_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_katana_lights",
  "scythe": "skyhighheroes:biscuit/astro/biscuit_tenma_scythe",
  "scythe_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_scythe_lights",
  "rifle": "skyhighheroes:biscuit/astro/biscuit_tenma_rifle",
  "rifle_lights": "skyhighheroes:biscuit/astro/biscuit_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xFF0000);
  tenma.initBeams(renderer, 0xFF0000);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:biscuit_tenma_speed");
};

function getID() {
  return "324ccf33-d7b4-4cd5-b85f-d8f16a8cb862";
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