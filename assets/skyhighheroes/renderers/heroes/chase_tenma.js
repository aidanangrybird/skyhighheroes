extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:chase/astro/chase_tenma.tx.json",
  "rocket_legs": "skyhighheroes:chase/astro/chase_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:chase/astro/chase_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:chase/astro/chase_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:chase/astro/chase_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:chase/astro/chase_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:chase/astro/chase_tenma_eyes",
  "boots_lights": "skyhighheroes:chase/astro/chase_tenma_boots_lights",
  "arms_lights": "skyhighheroes:chase/astro/chase_tenma_arms_lights",
  "boots": "skyhighheroes:chase/astro/chase_tenma_boots",
  "shorts": "skyhighheroes:chase/astro/chase_tenma_shorts",
  "cannon_lights": "skyhighheroes:chase/astro/chase_tenma_cannon_lights",
  "shield": "skyhighheroes:chase/astro/chase_tenma_shield",
  "katana": "skyhighheroes:chase/astro/chase_tenma_katana",
  "katana_lights": "skyhighheroes:chase/astro/chase_tenma_katana_lights",
  "scythe": "skyhighheroes:chase/astro/chase_tenma_scythe",
  "scythe_lights": "skyhighheroes:chase/astro/chase_tenma_scythe_lights",
  "rifle": "skyhighheroes:chase/astro/chase_tenma_rifle",
  "rifle_lights": "skyhighheroes:chase/astro/chase_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0x55FF00);
  tenma.initBeams(renderer, 0x55FF00);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:chase_tenma_speed");
};

function getID() {
  return "4da600b8-582a-4fc3-ac2e-ada03d3e478c";
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