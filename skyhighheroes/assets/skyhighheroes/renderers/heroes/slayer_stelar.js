extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:slayer/slayer_stelar_base",
  "lights": "skyhighheroes:slayer/slayer_stelar_lights",
  "base_wave_change": "skyhighheroes:slayer/slayer_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:slayer/slayer_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:slayer/slayer_stelar_wave_changing_lights.tx.json",
  "head_right": "skyhighheroes:slayer/slayer_stelar_omega_xis_right.tx.json",
  "head_right_wave_change": "skyhighheroes:slayer/slayer_stelar_omega_xis_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:slayer/slayer_stelar_omega_xis_left.tx.json",
  "head_left_wave_change": "skyhighheroes:slayer/slayer_stelar_omega_xis_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:slayer/slayer_stelar_omega_xis_top.tx.json",
  "head_top_wave_change": "skyhighheroes:slayer/slayer_stelar_omega_xis_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:slayer/slayer_stelar_omega_xis_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:slayer/slayer_stelar_omega_xis_bottom_wave_change.tx.json",
  "head_bottom": "skyhighheroes:slayer/slayer_stelar_omega_xis_bottom.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:slayer/slayer_stelar_omega_xis_front.tx.json",
  "head_front_wave_change": "skyhighheroes:slayer/slayer_stelar_omega_xis_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:slayer/slayer_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:slayer/slayer_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:slayer/slayer_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:slayer/slayer_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_pegasus",
  "transer_default_lights": "skyhighheroes:slayer/slayer_stelar_transer_lights",
  "sword": "skyhighheroes:slayer/slayer_stelar_sword",
  "shield": "skyhighheroes:slayer/slayer_stelar_shield",
  "shield_lights": "skyhighheroes:slayer/slayer_stelar_shield_lights",
  "katana": "skyhighheroes:slayer/slayer_stelar_katana",
  "katana_lights": "skyhighheroes:slayer/slayer_stelar_katana_lights",
  "scythe": "skyhighheroes:slayer/slayer_stelar_scythe",
  "scythe_lights": "skyhighheroes:slayer/slayer_stelar_scythe_lights",
  "rifle": "skyhighheroes:slayer/slayer_stelar_rifle",
  "rifle_lights": "skyhighheroes:slayer/slayer_stelar_rifle_lights"
});

function getColor() {
  return 0xFFC400;
};

function getID() {
  return "dde85392-d2d7-4213-8e52-05f42f8e0c48";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  head = stelar.initOmegaXis(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:slayer_stelar_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
  head.render(entity, renderLayer);
};