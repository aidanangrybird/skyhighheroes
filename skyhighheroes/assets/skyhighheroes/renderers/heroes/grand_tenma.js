extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getColor() {
  return 0xFF0000;
}

loadTextures({
  "eyes": "skyhighheroes:grand/astro/grand_tenma_eyes",
  "boots_lights": "skyhighheroes:grand/astro/grand_tenma_boots_lights",
  "arms_lights": "skyhighheroes:grand/astro/grand_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:grand/astro/grand_tenma_eyes_normal",
  "base": "skyhighheroes:grand/astro/grand_tenma_base",
  "base_flying": "skyhighheroes:grand/astro/grand_tenma_base_flying",
  "base_head": "skyhighheroes:grand/astro/grand_tenma_base_head",
  "base_torso_boots": "skyhighheroes:grand/astro/grand_tenma_base_torso_boots",
  "base_torso_boots_legs": "skyhighheroes:grand/astro/grand_tenma_base_torso_boots_legs",
  "base_legs": "skyhighheroes:grand/astro/grand_tenma_base_legs",
  "base_legs_boots": "skyhighheroes:grand/astro/grand_tenma_base_legs_boots",
  "long": "skyhighheroes:grand/astro/grand_tenma_long",
  "long_flying": "skyhighheroes:grand/astro/grand_tenma_long_flying",
  "long_head_torso": "skyhighheroes:grand/astro/grand_tenma_long_head_torso",
  "long_torso_boots": "skyhighheroes:grand/astro/grand_tenma_long_torso_boots",
  "long_torso_boots_legs": "skyhighheroes:grand/astro/grand_tenma_long_torso_boots_legs",
  "long_legs": "skyhighheroes:grand/astro/grand_tenma_long_legs",
  "long_legs_torso": "skyhighheroes:grand/astro/grand_tenma_long_legs_torso",
  "long_legs_boots": "skyhighheroes:grand/astro/grand_tenma_long_legs_boots",
  "long_legs_torso_boots": "skyhighheroes:grand/astro/grand_tenma_long_legs_torso_boots",
  "short": "skyhighheroes:grand/astro/grand_tenma_short",
  "short_flying": "skyhighheroes:grand/astro/grand_tenma_short_flying",
  "short_torso_boots": "skyhighheroes:grand/astro/grand_tenma_short_torso_boots",
  "short_legs": "skyhighheroes:grand/astro/grand_tenma_short_legs",
  "short_legs_torso": "skyhighheroes:grand/astro/grand_tenma_short_legs_torso",
  "short_legs_boots": "skyhighheroes:grand/astro/grand_tenma_short_legs_boots",
  "short_legs_torso_boots": "skyhighheroes:grand/astro/grand_tenma_short_torso_boots",
  "normal": "skyhighheroes:grand/astro/grand_tenma_normal",
  "normal_flying": "skyhighheroes:grand/astro/grand_tenma_normal_flying",
  "normal_torso_boots": "skyhighheroes:grand/astro/grand_tenma_normal_torso_boots",
  "normal_torso_boots_legs": "skyhighheroes:grand/astro/grand_tenma_normal_torso_boots_legs",
  "normal_legs": "skyhighheroes:grand/astro/grand_tenma_normal_legs",
  "normal_legs_torso": "skyhighheroes:grand/astro/grand_tenma_normal_legs_torso",
  "normal_legs_boots": "skyhighheroes:grand/astro/grand_tenma_normal_legs_boots",
  "normal_legs_torso_boots": "skyhighheroes:grand/astro/grand_tenma_normal_legs_torso_boots",
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
  //Boot Rockets
  rockets = astro.initBoosters(renderer, getColor());
  cannon = astro.initCannon(renderer);
  astro.initBeams(renderer, getColor());
  stuff.bindSpeedTrail(renderer, "skyhighheroes:grand_tenma_speed");
}

function getSuitID() {
  return "skyhighheroes:grand_tenma";
}

function getID() {
  return "d699ffcd-8177-4325-91ac-3e815e87bb95";
}

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  initAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
  cannon.render(entity, renderLayer);
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
}