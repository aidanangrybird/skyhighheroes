extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:rain/astro/rain_tenma.tx.json",
  "rocket_legs": "skyhighheroes:rain/astro/rain_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:rain/astro/rain_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:rain/astro/rain_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:rain/astro/rain_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:rain/astro/rain_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:rain/astro/rain_tenma_eyes",
  "boots_lights": "skyhighheroes:rain/astro/rain_tenma_boots_lights",
  "arms_lights": "skyhighheroes:rain/astro/rain_tenma_arms_lights",
  "boots": "skyhighheroes:rain/astro/rain_tenma_boots",
  "shorts": "skyhighheroes:rain/astro/rain_tenma_shorts",
  "cannon_lights": "skyhighheroes:rain/astro/rain_tenma_cannon_lights",
  "shield": "skyhighheroes:rain/astro/rain_tenma_shield",
  "katana": "skyhighheroes:rain/astro/rain_tenma_katana",
  "katana_lights": "skyhighheroes:rain/astro/rain_tenma_katana_lights",
  "scythe": "skyhighheroes:rain/astro/rain_tenma_scythe",
  "scythe_lights": "skyhighheroes:rain/astro/rain_tenma_scythe_lights",
  "rifle": "skyhighheroes:rain/astro/rain_tenma_rifle",
  "rifle_lights": "skyhighheroes:rain/astro/rain_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0x0000FF);
  tenma.initBeams(renderer, 0x0000FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:rain_tenma_speed");
};

function getID() {
  return "33e28253-3e05-495c-80bc-ca4c35b06bfd";
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