extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:ace/astro/ace_tenma.tx.json",
  "rocket_legs": "skyhighheroes:ace/astro/ace_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:ace/astro/ace_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:ace/astro/ace_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:ace/astro/ace_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:ace/astro/ace_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:ace/astro/ace_tenma_eyes",
  "boots_lights": "skyhighheroes:ace/astro/ace_tenma_boots_lights",
  "arms_lights": "skyhighheroes:ace/astro/ace_tenma_arms_lights",
  "boots": "skyhighheroes:ace/astro/ace_tenma_boots",
  "shorts": "skyhighheroes:ace/astro/ace_tenma_shorts",
  "cannon_lights": "skyhighheroes:ace/astro/ace_tenma_cannon_lights",
  "shield": "skyhighheroes:ace/astro/ace_tenma_shield",
  "katana": "skyhighheroes:ace/astro/ace_tenma_katana",
  "katana_lights": "skyhighheroes:ace/astro/ace_tenma_katana_lights",
  "scythe": "skyhighheroes:ace/astro/ace_tenma_scythe",
  "scythe_lights": "skyhighheroes:ace/astro/ace_tenma_scythe_lights",
  "rifle": "skyhighheroes:ace/astro/ace_tenma_rifle",
  "rifle_lights": "skyhighheroes:ace/astro/ace_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomDualBoosters(renderer, 0x0000FF, 0xFF0000);
  tenma.initDualBeams(renderer, 0x0000FF, 0xFF0000);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:ace_tenma_speed");
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