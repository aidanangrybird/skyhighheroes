extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "eyes": "skyhighheroes:razor/astro/razor_tenma_eyes",
  "boots_lights": "skyhighheroes:razor/astro/razor_tenma_boots_lights",
  "arms_lights": "skyhighheroes:razor/astro/razor_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:razor/astro/razor_tenma_eyes_normal",
  "base": "skyhighheroes:razor/astro/razor_tenma_base",
  "base_flying": "skyhighheroes:razor/astro/razor_tenma_base_flying",
  "boots": "skyhighheroes:razor/astro/razor_tenma_boots",
  "shorts": "skyhighheroes:razor/astro/razor_tenma_shorts",
  "long": "skyhighheroes:razor/astro/razor_tenma_long",
  "long_flying": "skyhighheroes:razor/astro/razor_tenma_long_flying",
  "short": "skyhighheroes:razor/astro/razor_tenma_short",
  "short_flying": "skyhighheroes:razor/astro/razor_tenma_short_flying",
  "normal": "skyhighheroes:razor/astro/razor_tenma_normal",
  "normal_flying": "skyhighheroes:razor/astro/razor_tenma_normal_flying",
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
  rockets = tenma.initBoosters(renderer, 0x0000FF);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0x0000FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:razor_tenma_speed");
};

function getSuitID() {
  return "skyhighheroes:razor_tenma";
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
  parent.render(entity, renderLayer, isFirstPersonArm);
  cannon.render(entity, renderLayer);
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
};