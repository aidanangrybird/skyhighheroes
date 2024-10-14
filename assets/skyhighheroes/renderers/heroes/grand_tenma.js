extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:grand/astro/grand_tenma.tx.json",
  "rocket_legs": "skyhighheroes:grand/astro/grand_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:grand/astro/grand_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:grand/astro/grand_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:grand/astro/grand_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:grand/astro/grand_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:grand/astro/grand_tenma_eyes",
  "boots_lights": "skyhighheroes:grand/astro/grand_tenma_boots_lights",
  "arms_lights": "skyhighheroes:grand/astro/grand_tenma_arms_lights",
  "boots": "skyhighheroes:grand/astro/grand_tenma_boots",
  "shorts": "skyhighheroes:grand/astro/grand_tenma_shorts",
  "cannon_lights": "skyhighheroes:grand/astro/grand_tenma_cannon_lights",
  "shield": "skyhighheroes:grand/astro/grand_tenma_shield",
  "katana": "skyhighheroes:grand/astro/grand_tenma_katana",
  "katana_lights": "skyhighheroes:grand/astro/grand_tenma_katana_lights",
  "scythe": "skyhighheroes:grand/astro/grand_tenma_scythe",
  "scythe_lights": "skyhighheroes:grand/astro/grand_tenma_scythe_lights",
  "rifle": "skyhighheroes:grand/astro/grand_tenma_rifle",
  "rifle_lights": "skyhighheroes:grand/astro/grand_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xFF0000);
  tenma.initBeams(renderer, 0xFF0000);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:grand_tenma_speed");
};

function getID() {
  return "d699ffcd-8177-4325-91ac-3e815e87bb95";
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