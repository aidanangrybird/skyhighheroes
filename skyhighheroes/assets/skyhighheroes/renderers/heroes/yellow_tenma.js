extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getColor() {
  return 0x00FFFF;
}

loadTextures({
  "eyes": "skyhighheroes:yellow/astro/yellow_tenma_eyes",
  "boots_lights": "skyhighheroes:yellow/astro/yellow_tenma_boots_lights",
  "arms_lights": "skyhighheroes:yellow/astro/yellow_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:yellow/astro/yellow_tenma_eyes_normal",
  "base": "skyhighheroes:yellow/astro/yellow_tenma_base",
  "base_flying": "skyhighheroes:yellow/astro/yellow_tenma_base_flying",
  "base_head": "skyhighheroes:yellow/astro/yellow_tenma_base_head",
  "base_torso_boots": "skyhighheroes:yellow/astro/yellow_tenma_base_torso_boots",
  "base_torso_boots_legs": "skyhighheroes:yellow/astro/yellow_tenma_base_torso_boots_legs",
  "base_legs": "skyhighheroes:yellow/astro/yellow_tenma_base_legs",
  "base_legs_boots": "skyhighheroes:yellow/astro/yellow_tenma_base_legs_boots",
  "long": "skyhighheroes:yellow/astro/yellow_tenma_long",
  "long_flying": "skyhighheroes:yellow/astro/yellow_tenma_long_flying",
  "long_head_torso": "skyhighheroes:yellow/astro/yellow_tenma_long_head_torso",
  "long_torso_boots": "skyhighheroes:yellow/astro/yellow_tenma_long_torso_boots",
  "long_torso_boots_legs": "skyhighheroes:yellow/astro/yellow_tenma_long_torso_boots_legs",
  "long_legs": "skyhighheroes:yellow/astro/yellow_tenma_long_legs",
  "long_legs_torso": "skyhighheroes:yellow/astro/yellow_tenma_long_legs_torso",
  "long_legs_boots": "skyhighheroes:yellow/astro/yellow_tenma_long_legs_boots",
  "long_legs_torso_boots": "skyhighheroes:yellow/astro/yellow_tenma_long_legs_torso_boots",
  "short": "skyhighheroes:yellow/astro/yellow_tenma_short",
  "short_flying": "skyhighheroes:yellow/astro/yellow_tenma_short_flying",
  "short_torso_boots": "skyhighheroes:yellow/astro/yellow_tenma_short_torso_boots",
  "short_legs": "skyhighheroes:yellow/astro/yellow_tenma_short_legs",
  "short_legs_torso": "skyhighheroes:yellow/astro/yellow_tenma_short_legs_torso",
  "short_legs_boots": "skyhighheroes:yellow/astro/yellow_tenma_short_legs_boots",
  "short_legs_torso_boots": "skyhighheroes:yellow/astro/yellow_tenma_short_torso_boots",
  "normal": "skyhighheroes:yellow/astro/yellow_tenma_normal",
  "normal_flying": "skyhighheroes:yellow/astro/yellow_tenma_normal_flying",
  "normal_torso_boots": "skyhighheroes:yellow/astro/yellow_tenma_normal_torso_boots",
  "normal_torso_boots_legs": "skyhighheroes:yellow/astro/yellow_tenma_normal_torso_boots_legs",
  "normal_legs": "skyhighheroes:yellow/astro/yellow_tenma_normal_legs",
  "normal_legs_torso": "skyhighheroes:yellow/astro/yellow_tenma_normal_legs_torso",
  "normal_legs_boots": "skyhighheroes:yellow/astro/yellow_tenma_normal_legs_boots",
  "normal_legs_torso_boots": "skyhighheroes:yellow/astro/yellow_tenma_normal_legs_torso_boots",
  "cannon_lights": "skyhighheroes:yellow/astro/yellow_tenma_cannon_lights",
  "shield": "skyhighheroes:yellow/astro/yellow_tenma_shield",
  "katana": "skyhighheroes:yellow/astro/yellow_tenma_katana",
  "katana_lights": "skyhighheroes:yellow/astro/yellow_tenma_katana_lights",
  "scythe": "skyhighheroes:yellow/astro/yellow_tenma_scythe",
  "scythe_lights": "skyhighheroes:yellow/astro/yellow_tenma_scythe_lights",
  "rifle": "skyhighheroes:yellow/astro/yellow_tenma_rifle",
  "rifle_lights": "skyhighheroes:yellow/astro/yellow_tenma_rifle_lights"
});

function initEffects(renderer) {
  parent.initEffects(renderer);
  //Boot Rockets
  rockets = astro.initBoosters(renderer, getColor());
  astro.initBeams(renderer, getColor());
  stuff.bindSpeedTrail(renderer, "skyhighheroes:yellow_tenma_speed");
}

function getSuitID() {
  return "skyhighheroes:yellow_tenma";
}

function getID() {
  return "60f30003-1148-416b-8b4d-347002891126";
}

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  initAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
}