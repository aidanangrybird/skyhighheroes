extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:razor/astro/razor_tenma.tx.json",
  "rocket_legs": "skyhighheroes:razor/astro/razor_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:razor/astro/razor_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:razor/astro/razor_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:razor/astro/razor_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:razor/astro/razor_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:razor/astro/razor_tenma_eyes",
  "boots_lights": "skyhighheroes:razor/astro/razor_tenma_boots_lights",
  "arms_lights": "skyhighheroes:razor/astro/razor_tenma_arms_lights",
  "boots": "skyhighheroes:razor/astro/razor_tenma_boots",
  "shorts": "skyhighheroes:razor/astro/razor_tenma_shorts",
  "cannon_lights": "skyhighheroes:razor/astro/razor_tenma_cannon_lights",
  "shield": "skyhighheroes:razor/astro/razor_tenma_shield",
  "katana": "skyhighheroes:razor/astro/razor_tenma_katana",
  "katana_lights": "skyhighheroes:razor/astro/razor_tenma_katana_lights",
  "scythe": "skyhighheroes:razor/astro/razor_tenma_scythe",
  "scythe_lights": "skyhighheroes:razor/astro/razor_tenma_scythe_lights",
  "rifle": "skyhighheroes:razor/astro/razor_tenma_rifle",
  "rifle_lights": "skyhighheroes:razor/astro/razor_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0x0000FF);
  tenma.initBeams(renderer, 0x0000FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:razor_tenma_speed");
};

function getID() {
  return "de01ddcc-7dc8-437e-bf08-3f8bf11086dc";
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