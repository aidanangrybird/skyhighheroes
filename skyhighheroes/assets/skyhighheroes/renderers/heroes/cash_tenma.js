extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:cash/astro/cash_tenma.tx.json",
  "rocket_legs": "skyhighheroes:cash/astro/cash_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:cash/astro/cash_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:cash/astro/cash_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:cash/astro/cash_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:cash/astro/cash_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:cash/astro/cash_tenma_eyes",
  "boots_lights": "skyhighheroes:cash/astro/cash_tenma_boots_lights",
  "arms_lights": "skyhighheroes:cash/astro/cash_tenma_arms_lights",
  "boots": "skyhighheroes:cash/astro/cash_tenma_boots",
  "shorts": "skyhighheroes:cash/astro/cash_tenma_shorts",
  "cannon_lights": "skyhighheroes:cash/astro/cash_tenma_cannon_lights",
  "shield": "skyhighheroes:cash/astro/cash_tenma_shield",
  "katana": "skyhighheroes:cash/astro/cash_tenma_katana",
  "katana_lights": "skyhighheroes:cash/astro/cash_tenma_katana_lights",
  "scythe": "skyhighheroes:cash/astro/cash_tenma_scythe",
  "scythe_lights": "skyhighheroes:cash/astro/cash_tenma_scythe_lights",
  "rifle": "skyhighheroes:cash/astro/cash_tenma_rifle",
  "rifle_lights": "skyhighheroes:cash/astro/cash_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xAA00FF);
  tenma.initBeams(renderer, 0xAA00FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:cash_tenma_speed");
};

function getID() {
  return "2389f9cd-351e-4d96-a277-847a24fd9048";
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