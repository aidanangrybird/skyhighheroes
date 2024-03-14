extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:boom/astro/boom_tenma.tx.json",
  "rocket_legs": "skyhighheroes:boom/astro/boom_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:boom/astro/boom_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:boom/astro/boom_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:boom/astro/boom_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:boom/astro/boom_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:boom/astro/boom_tenma_eyes",
  "boots_lights": "skyhighheroes:boom/astro/boom_tenma_boots_lights",
  "arms_lights": "skyhighheroes:boom/astro/boom_tenma_arms_lights",
  "boots": "skyhighheroes:boom/astro/boom_tenma_boots",
  "shorts": "skyhighheroes:boom/astro/boom_tenma_shorts",
  "cannon_lights": "skyhighheroes:boom/astro/boom_tenma_cannon_lights",
  "shield": "skyhighheroes:boom/astro/boom_tenma_shield",
  "katana": "skyhighheroes:boom/astro/boom_tenma_katana",
  "katana_lights": "skyhighheroes:boom/astro/boom_tenma_katana_lights",
  "scythe": "skyhighheroes:boom/astro/boom_tenma_scythe",
  "scythe_lights": "skyhighheroes:boom/astro/boom_tenma_scythe_lights",
  "rifle": "skyhighheroes:boom/astro/boom_tenma_rifle",
  "rifle_lights": "skyhighheroes:boom/astro/boom_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xAA00FF);
  tenma.initBeams(renderer, 0xAA00FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:boom_tenma_speed");
};

function getID() {
  return "9af1da24-6827-4c48-848d-df07952ff161";
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