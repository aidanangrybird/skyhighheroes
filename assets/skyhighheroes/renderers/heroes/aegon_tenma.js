extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:aegon/astro/aegon_tenma.tx.json",
  "rocket_legs": "skyhighheroes:aegon/astro/aegon_tenma_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:aegon/astro/aegon_tenma_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:aegon/astro/aegon_tenma_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:aegon/astro/aegon_tenma_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:aegon/astro/aegon_tenma_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:aegon/astro/aegon_tenma_eyes",
  "boots_lights": "skyhighheroes:aegon/astro/aegon_tenma_boots_lights",
  "arms_lights": "skyhighheroes:aegon/astro/aegon_tenma_arms_lights",
  "boots": "skyhighheroes:aegon/astro/aegon_tenma_boots",
  "shorts": "skyhighheroes:aegon/astro/aegon_tenma_shorts",
  "cannon_lights": "skyhighheroes:aegon/astro/aegon_tenma_cannon_lights",
  "shield": "skyhighheroes:aegon/astro/aegon_tenma_shield",
  "katana": "skyhighheroes:aegon/astro/aegon_tenma_katana",
  "katana_lights": "skyhighheroes:aegon/astro/aegon_tenma_katana_lights",
  "scythe": "skyhighheroes:aegon/astro/aegon_tenma_scythe",
  "scythe_lights": "skyhighheroes:aegon/astro/aegon_tenma_scythe_lights",
  "rifle": "skyhighheroes:aegon/astro/aegon_tenma_rifle",
  "rifle_lights": "skyhighheroes:aegon/astro/aegon_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xFF00FF);
  tenma.initBeams(renderer, 0xFF00FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:aegon_tenma_speed");
};

function getID() {
  return "411ed8b9-b246-449c-b941-02790d0971dd";
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