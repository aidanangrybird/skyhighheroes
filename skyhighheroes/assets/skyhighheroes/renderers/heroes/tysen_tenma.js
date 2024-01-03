extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:tysen/astro/tysen_tenma.tx.json",
  "rocket_legs": "skyhighheroes:tysen/astro/tysen_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:tysen/astro/tysen_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:tysen/astro/tysen_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:tysen/astro/tysen_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:tysen/astro/tysen_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:tysen/astro/tysen_tenma_eyes",
  "boots_lights": "skyhighheroes:tysen/astro/tysen_tenma_boots_lights",
  "arms_lights": "skyhighheroes:tysen/astro/tysen_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:tysen/astro/tysen_tenma_eyes_normal",
  "boots": "skyhighheroes:tysen/astro/tysen_tenma_boots",
  "shorts": "skyhighheroes:tysen/astro/tysen_tenma_shorts",
  "cannon_lights": "skyhighheroes:tysen/astro/tysen_tenma_cannon_lights",
  "shield": "skyhighheroes:tysen/astro/tysen_tenma_shield",
  "katana": "skyhighheroes:tysen/astro/tysen_tenma_katana",
  "katana_lights": "skyhighheroes:tysen/astro/tysen_tenma_katana_lights",
  "scythe": "skyhighheroes:tysen/astro/tysen_tenma_scythe",
  "scythe_lights": "skyhighheroes:tysen/astro/tysen_tenma_scythe_lights",
  "rifle": "skyhighheroes:tysen/astro/tysen_tenma_rifle",
  "rifle_lights": "skyhighheroes:tysen/astro/tysen_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xAA00FF);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xAA00FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:tysen_tenma_speed");
};

function getID() {
  return "0ccdd53f-70bc-4039-b89b-fd3781f746f2";
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