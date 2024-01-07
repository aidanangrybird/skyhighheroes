extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:robin/astro/robin_tenma.tx.json",
  "rocket_legs": "skyhighheroes:robin/astro/robin_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:robin/astro/robin_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:robin/astro/robin_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:robin/astro/robin_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:robin/astro/robin_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:robin/astro/robin_tenma_eyes",
  "boots_lights": "skyhighheroes:robin/astro/robin_tenma_boots_lights",
  "arms_lights": "skyhighheroes:robin/astro/robin_tenma_arms_lights",
  "boots": "skyhighheroes:robin/astro/robin_tenma_boots",
  "shorts": "skyhighheroes:robin/astro/robin_tenma_shorts",
  "cannon_lights": "skyhighheroes:robin/astro/robin_tenma_cannon_lights",
  "shield": "skyhighheroes:robin/astro/robin_tenma_shield",
  "katana": "skyhighheroes:robin/astro/robin_tenma_katana",
  "katana_lights": "skyhighheroes:robin/astro/robin_tenma_katana_lights",
  "scythe": "skyhighheroes:robin/astro/robin_tenma_scythe",
  "scythe_lights": "skyhighheroes:robin/astro/robin_tenma_scythe_lights",
  "rifle": "skyhighheroes:robin/astro/robin_tenma_rifle",
  "rifle_lights": "skyhighheroes:robin/astro/robin_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0x00FF00);
  tenma.initBeams(renderer, 0x00FF00);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:robin_tenma_speed");
};

function getID() {
  return "8d53a071-d3fc-428e-806b-ed16ebe41fe4";
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