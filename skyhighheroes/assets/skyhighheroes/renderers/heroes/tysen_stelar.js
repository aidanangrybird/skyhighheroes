extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:tysen/tysen_stelar_base",
  "lights": "skyhighheroes:tysen/tysen_stelar_lights",
  "base_wave_change": "skyhighheroes:tysen/tysen_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:tysen/tysen_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:tysen/tysen_stelar_wave_changing_lights.tx.json",
  "head_right": "skyhighheroes:tysen/tysen_stelar_omega_xis_right.tx.json",
  "head_right_wave_change": "skyhighheroes:tysen/tysen_stelar_omega_xis_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:tysen/tysen_stelar_omega_xis_left.tx.json",
  "head_left_wave_change": "skyhighheroes:tysen/tysen_stelar_omega_xis_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:tysen/tysen_stelar_omega_xis_top.tx.json",
  "head_top_wave_change": "skyhighheroes:tysen/tysen_stelar_omega_xis_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:tysen/tysen_stelar_omega_xis_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:tysen/tysen_stelar_omega_xis_bottom_wave_change.tx.json",
  "head_bottom": "skyhighheroes:tysen/tysen_stelar_omega_xis_bottom.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:tysen/tysen_stelar_omega_xis_front.tx.json",
  "head_front_wave_change": "skyhighheroes:tysen/tysen_stelar_omega_xis_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:tysen/tysen_stelar_omega_xis_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:tysen/tysen_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:tysen/tysen_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:tysen/tysen_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:tysen/tysen_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_dragon",
  "transer_default_lights": "skyhighheroes:tysen/tysen_stelar_transer_lights",
  "sword": "skyhighheroes:tysen/tysen_stelar_sword",
  "shield": "skyhighheroes:tysen/tysen_stelar_shield",
  "shield_lights": "skyhighheroes:tysen/tysen_stelar_shield_lights",
  "katana": "skyhighheroes:tysen/tysen_stelar_katana",
  "katana_lights": "skyhighheroes:tysen/tysen_stelar_katana_lights",
  "scythe": "skyhighheroes:tysen/tysen_stelar_scythe",
  "scythe_lights": "skyhighheroes:tysen/tysen_stelar_scythe_lights",
  "rifle": "skyhighheroes:tysen/tysen_stelar_rifle",
  "rifle_lights": "skyhighheroes:tysen/tysen_stelar_rifle_lights"
});

function getColor() {
  return 0xAA00FF;
};

function getID() {
  return "0ccdd53f-70bc-4039-b89b-fd3781f746f2";
}

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  head = stelar.initOmegaXis(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:tysen_stelar_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
  head.render(entity, renderLayer);
};