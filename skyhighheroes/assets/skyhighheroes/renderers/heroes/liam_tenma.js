extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

function getColor() {
  return 0x0000FF;
};

loadTextures({
  "eyes": "skyhighheroes:liam/astro/liam_tenma_eyes",
  "boots_lights": "skyhighheroes:liam/astro/liam_tenma_boots_lights",
  "arms_lights": "skyhighheroes:liam/astro/liam_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:liam/astro/liam_tenma_eyes_normal",
  "base": "skyhighheroes:liam/astro/liam_tenma_base",
  "base_flying": "skyhighheroes:liam/astro/liam_tenma_base_flying",
  "boots": "skyhighheroes:liam/astro/liam_tenma_boots",
  "shorts": "skyhighheroes:liam/astro/liam_tenma_shorts",
  "long": "skyhighheroes:liam/astro/liam_tenma_long",
  "long_flying": "skyhighheroes:liam/astro/liam_tenma_long_flying",
  "short": "skyhighheroes:liam/astro/liam_tenma_short",
  "short_flying": "skyhighheroes:liam/astro/liam_tenma_short_flying",
  "normal": "skyhighheroes:liam/astro/liam_tenma_normal",
  "normal_flying": "skyhighheroes:liam/astro/liam_tenma_normal_flying",
  "cannon_lights": "skyhighheroes:liam/astro/liam_tenma_cannon_lights",
  "shield": "skyhighheroes:liam/astro/liam_tenma_shield",
  "katana": "skyhighheroes:liam/astro/liam_tenma_katana",
  "katana_lights": "skyhighheroes:liam/astro/liam_tenma_katana_lights",
  "scythe": "skyhighheroes:liam/astro/liam_tenma_scythe",
  "scythe_lights": "skyhighheroes:liam/astro/liam_tenma_scythe_lights",
  "rifle": "skyhighheroes:liam/astro/liam_tenma_rifle",
  "rifle_lights": "skyhighheroes:liam/astro/liam_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  rockets = tenma.initCustomBoosters(renderer, 0x0000FF);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0x0000FF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:liam_tenma_speed");
};

function getSuitID() {
  return "skyhighheroes:liam_tenma";
};

function getID() {
  return "cd71352c-8cb2-448c-a69d-a310a905ce7b";
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