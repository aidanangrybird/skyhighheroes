extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getColor() {
  return 0xFF0000;
}

loadTextures({
  "eyes": "skyhighheroes:pezzo/astro/pezzo_tenma_eyes",
  "boots_lights": "skyhighheroes:pezzo/astro/pezzo_tenma_boots_lights",
  "arms_lights": "skyhighheroes:pezzo/astro/pezzo_tenma_arms_lights",
  "eyes_normal": "skyhighheroes:pezzo/astro/pezzo_tenma_eyes_normal",
  "base": "skyhighheroes:pezzo/astro/pezzo_tenma_base",
  "base_flying": "skyhighheroes:pezzo/astro/pezzo_tenma_base_flying",
  "base_head": "skyhighheroes:pezzo/astro/pezzo_tenma_base_head",
  "base_torso_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_base_torso_boots",
  "base_torso_boots_legs": "skyhighheroes:pezzo/astro/pezzo_tenma_base_torso_boots_legs",
  "base_legs": "skyhighheroes:pezzo/astro/pezzo_tenma_base_legs",
  "base_legs_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_base_legs_boots",
  "long": "skyhighheroes:pezzo/astro/pezzo_tenma_long",
  "long_flying": "skyhighheroes:pezzo/astro/pezzo_tenma_long_flying",
  "long_head_torso": "skyhighheroes:pezzo/astro/pezzo_tenma_long_head_torso",
  "long_torso_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_long_torso_boots",
  "long_torso_boots_legs": "skyhighheroes:pezzo/astro/pezzo_tenma_long_torso_boots_legs",
  "long_legs": "skyhighheroes:pezzo/astro/pezzo_tenma_long_legs",
  "long_legs_torso": "skyhighheroes:pezzo/astro/pezzo_tenma_long_legs_torso",
  "long_legs_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_long_legs_boots",
  "long_legs_torso_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_long_legs_torso_boots",
  "short": "skyhighheroes:pezzo/astro/pezzo_tenma_short",
  "short_flying": "skyhighheroes:pezzo/astro/pezzo_tenma_short_flying",
  "short_torso_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_short_torso_boots",
  "short_legs": "skyhighheroes:pezzo/astro/pezzo_tenma_short_legs",
  "short_legs_torso": "skyhighheroes:pezzo/astro/pezzo_tenma_short_legs_torso",
  "short_legs_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_short_legs_boots",
  "short_legs_torso_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_short_torso_boots",
  "normal": "skyhighheroes:pezzo/astro/pezzo_tenma_normal",
  "normal_flying": "skyhighheroes:pezzo/astro/pezzo_tenma_normal_flying",
  "normal_torso_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_normal_torso_boots",
  "normal_torso_boots_legs": "skyhighheroes:pezzo/astro/pezzo_tenma_normal_torso_boots_legs",
  "normal_legs": "skyhighheroes:pezzo/astro/pezzo_tenma_normal_legs",
  "normal_legs_torso": "skyhighheroes:pezzo/astro/pezzo_tenma_normal_legs_torso",
  "normal_legs_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_normal_legs_boots",
  "normal_legs_torso_boots": "skyhighheroes:pezzo/astro/pezzo_tenma_normal_legs_torso_boots",
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
  //Boot Rockets
  rockets = astro.initBoosters(renderer, getColor());
  cannon = astro.initCannon(renderer);
  astro.initBeams(renderer, getColor());
  stuff.bindSpeedTrail(renderer, "skyhighheroes:pezzo_tenma_speed");
}

function getSuitID() {
  return "skyhighheroes:pezzo_tenma";
}

function getID() {
  return "c4bc5db6-3CF6-44FE-8427-304a7b211bc4";
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