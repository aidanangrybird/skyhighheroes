extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "eyes": "skyhighheroes:pezzo/astro/pezzo_tenma_eyes",
  "boots_lights": "skyhighheroes:pezzo/astro/pezzo_tenma_boots_lights",
  "arms_lights": "skyhighheroes:pezzo/astro/pezzo_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:pezzo/astro/pezzo_tenma_eyes_normal",
  "base": "skyhighheroes:pezzo/astro/pezzo_tenma_base",
  "base_flying": "skyhighheroes:pezzo/astro/pezzo_tenma_base_flying",
  "boots": "skyhighheroes:pezzo/astro/pezzo_tenma_boots",
  "shorts": "skyhighheroes:pezzo/astro/pezzo_tenma_shorts",
  "long": "skyhighheroes:pezzo/astro/pezzo_tenma_long",
  "long_flying": "skyhighheroes:pezzo/astro/pezzo_tenma_long_flying",
  "short": "skyhighheroes:pezzo/astro/pezzo_tenma_short",
  "short_flying": "skyhighheroes:pezzo/astro/pezzo_tenma_short_flying",
  "normal": "skyhighheroes:pezzo/astro/pezzo_tenma_normal",
  "cannon_lights": "skyhighheroes:pezzo/astro/pezzo_tenma_cannon_lights",
  "shield": "skyhighheroes:pezzo/astro/pezzo_tenma_shield",
  "katana": "skyhighheroes:pezzo/astro/pezzo_tenma_katana",
  "katana_lights": "skyhighheroes:pezzo/astro/pezzo_tenma_katana_lights",
  "scythe": "skyhighheroes:pezzo/astro/pezzo_tenma_scythe",
  "scythe_lights": "skyhighheroes:pezzo/astro/pezzo_tenma_scythe_lights",
  "rifle": "skyhighheroes:pezzo/astro/pezzo_tenma_rifle",
  "rifle_lights": "skyhighheroes:pezzo/astro/pezzo_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initBoosters(renderer, 0xFF0000);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xFF0000);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:pezzo_tenma_speed");
};

function getSuitID() {
  return "skyhighheroes:pezzo_tenma";
};

function getID() {
  return "c4bc5db6-3cf6-44fe-8427-304a7b211bc4";
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