extend("skyhighheroes:base_tenma");

var tenma = implement("skyhighheroes:external/tenma");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "eyes": "skyhighheroes:grand/astro/grand_tenma_eyes",
  "boots_lights": "skyhighheroes:grand/astro/grand_tenma_boots_lights",
  "arms_lights": "skyhighheroes:grand/astro/grand_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:grand/astro/grand_tenma_eyes_normal",
  "base": "skyhighheroes:grand/astro/grand_tenma_base",
  "base_flying": "skyhighheroes:grand/astro/grand_tenma_base_flying",
  "boots": "skyhighheroes:grand/astro/grand_tenma_boots",
  "shorts": "skyhighheroes:grand/astro/grand_tenma_shorts",
  "long": "skyhighheroes:grand/astro/grand_tenma_long",
  "long_flying": "skyhighheroes:grand/astro/grand_tenma_long_flying",
  "short": "skyhighheroes:grand/astro/grand_tenma_short",
  "short_flying": "skyhighheroes:grand/astro/grand_tenma_short_flying",
  "normal": "skyhighheroes:grand/astro/grand_tenma_normal",
  "normal_flying": "skyhighheroes:grand/astro/grand_tenma_normal_flying",
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
  rockets = tenma.initBoosters(renderer, 0xFF0000);
  cannon = tenma.initCannon(renderer);
  tenma.initBeams(renderer, 0xFF0000);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:grand_tenma_speed");
};

function getSuitID() {
  return "skyhighheroes:grand_tenma";
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
  parent.render(entity, renderLayer, isFirstPersonArm);
  cannon.render(entity, renderLayer);
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
};