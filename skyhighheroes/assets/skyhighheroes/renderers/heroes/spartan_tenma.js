extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:spartan/astro/spartan_tenma.tx.json",
  "rocket_legs": "skyhighheroes:spartan/astro/spartan_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:spartan/astro/spartan_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:spartan/astro/spartan_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:spartan/astro/spartan_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:spartan/astro/spartan_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:spartan/astro/spartan_tenma_eyes",
  "boots_lights": "skyhighheroes:spartan/astro/spartan_tenma_boots_lights",
  "arms_lights": "skyhighheroes:spartan/astro/spartan_tenma_arms_lights",
  "boots": "skyhighheroes:spartan/astro/spartan_tenma_boots",
  "shorts": "skyhighheroes:spartan/astro/spartan_tenma_shorts",
  "cannon_lights": "skyhighheroes:spartan/astro/spartan_tenma_cannon_lights",
  "shield": "skyhighheroes:spartan/astro/spartan_tenma_shield",
  "katana": "skyhighheroes:spartan/astro/spartan_tenma_katana",
  "katana_lights": "skyhighheroes:spartan/astro/spartan_tenma_katana_lights",
  "scythe": "skyhighheroes:spartan/astro/spartan_tenma_scythe",
  "scythe_lights": "skyhighheroes:spartan/astro/spartan_tenma_scythe_lights",
  "rifle": "skyhighheroes:spartan/astro/spartan_tenma_rifle",
  "rifle_lights": "skyhighheroes:spartan/astro/spartan_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xAA00FF);
  tenma.initBeams(renderer, 0xAA00FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:spartan_tenma_speed");
};

function getID() {
  return "c72add16-b732-4cae-aea2-ff4a5f6fe3eb";
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