extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:fire/astro/fire_tenma.tx.json",
  "rocket_legs": "skyhighheroes:fire/astro/fire_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:fire/astro/fire_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:fire/astro/fire_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:fire/astro/fire_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:fire/astro/fire_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:fire/astro/fire_tenma_eyes",
  "boots_lights": "skyhighheroes:fire/astro/fire_tenma_boots_lights",
  "arms_lights": "skyhighheroes:fire/astro/fire_tenma_arms_lights",
  "boots": "skyhighheroes:fire/astro/fire_tenma_boots",
  "shorts": "skyhighheroes:fire/astro/fire_tenma_shorts",
  "cannon_lights": "skyhighheroes:fire/astro/fire_tenma_cannon_lights",
  "shield": "skyhighheroes:fire/astro/fire_tenma_shield",
  "katana": "skyhighheroes:fire/astro/fire_tenma_katana",
  "katana_lights": "skyhighheroes:fire/astro/fire_tenma_katana_lights",
  "scythe": "skyhighheroes:fire/astro/fire_tenma_scythe",
  "scythe_lights": "skyhighheroes:fire/astro/fire_tenma_scythe_lights",
  "rifle": "skyhighheroes:fire/astro/fire_tenma_rifle",
  "rifle_lights": "skyhighheroes:fire/astro/fire_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomDualBoosters(renderer, 0x0000FF, 0xFF0000);
  tenma.initDualBeams(renderer, 0x0000FF, 0xFF0000);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:fire_tenma_speed");
};

function getID() {
  return "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0";
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