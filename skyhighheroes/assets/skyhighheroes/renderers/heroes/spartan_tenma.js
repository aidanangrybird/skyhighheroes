extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "eyes": "skyhighheroes:spartan/astro/spartan_tenma_eyes",
  "boots_lights": "skyhighheroes:spartan/astro/spartan_tenma_boots_lights",
  "arms_lights": "skyhighheroes:spartan/astro/spartan_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:spartan/astro/spartan_tenma_eyes_normal",
  "base": "skyhighheroes:spartan/astro/spartan_tenma_base",
  "base_flying": "skyhighheroes:spartan/astro/spartan_tenma_base_flying",
  "boots": "skyhighheroes:spartan/astro/spartan_tenma_boots",
  "shorts": "skyhighheroes:spartan/astro/spartan_tenma_shorts",
  "long": "skyhighheroes:spartan/astro/spartan_tenma_long",
  "long_flying": "skyhighheroes:spartan/astro/spartan_tenma_long_flying",
  "short": "skyhighheroes:spartan/astro/spartan_tenma_short",
  "normal": "skyhighheroes:spartan/astro/spartan_tenma_normal",
  "normal_flying": "skyhighheroes:spartan/astro/spartan_tenma_normal_flying",
  "cannon_lights": "skyhighheroes:spartan/astro/spartan_tenma_cannon_lights",
  "shield": "skyhighheroes:spartan/astro/spartan_tenma_shield",
  "katana": "skyhighheroes:spartan/astro/spartan_tenma_katana",
  "katana_lights": "skyhighheroes:spartan/astro/spartan_tenma_katana_lights",
  "scythe": "skyhighheroes:spartan/astro/spartan_tenma_scythe",
  "scythe_lights": "skyhighheroes:spartan/astro/spartan_tenma_scythe_lights",
  "rifle": "skyhighheroes:spartan/astro/spartan_tenma_rifle",
  "rifle_lights": "skyhighheroes:spartan/astro/spartan_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xAA00FF);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xAA00FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:spartan_tenma_speed");
};

function getID() {
  return "c72add16-b732-4cae-aea2-ff4a5f6fe3eb";
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