extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

function getColor() {
  return 0xBFFF00;
};

loadTextures({
  "eyes": "skyhighheroes:chase/astro/chase_tenma_eyes",
  "boots_lights": "skyhighheroes:chase/astro/chase_tenma_boots_lights",
  "arms_lights": "skyhighheroes:chase/astro/chase_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:chase/astro/chase_tenma_eyes_normal",
  "base": "skyhighheroes:chase/astro/chase_tenma_base",
  "base_flying": "skyhighheroes:chase/astro/chase_tenma_base_flying",
  "boots": "skyhighheroes:chase/astro/chase_tenma_boots",
  "shorts": "skyhighheroes:chase/astro/chase_tenma_shorts",
  "long": "skyhighheroes:chase/astro/chase_tenma_long",
  "long_flying": "skyhighheroes:chase/astro/chase_tenma_long_flying",
  "short": "skyhighheroes:chase/astro/chase_tenma_short",
  "short_flying": "skyhighheroes:chase/astro/chase_tenma_short_flying",
  "normal": "skyhighheroes:chase/astro/chase_tenma_normal",
  "normal_flying": "skyhighheroes:chase/astro/chase_tenma_normal_flying",
  "cannon_lights": "skyhighheroes:chase/astro/chase_tenma_cannon_lights",
  "shield": "skyhighheroes:chase/astro/chase_tenma_shield",
  "katana": "skyhighheroes:chase/astro/chase_tenma_katana",
  "katana_lights": "skyhighheroes:chase/astro/chase_tenma_katana_lights",
  "scythe": "skyhighheroes:chase/astro/chase_tenma_scythe",
  "scythe_lights": "skyhighheroes:chase/astro/chase_tenma_scythe_lights",
  "rifle": "skyhighheroes:chase/astro/chase_tenma_rifle",
  "rifle_lights": "skyhighheroes:chase/astro/chase_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0xBFFF00);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xBFFF00);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:chase_tenma_speed");
};

function getID() {
  return "4da600b8-582a-4fc3-ac2e-ada03d3e478c";
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