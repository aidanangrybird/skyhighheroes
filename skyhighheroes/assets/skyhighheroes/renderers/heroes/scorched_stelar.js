extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:scorched/scorched_stelar_base",
  "lights": "skyhighheroes:scorched/scorched_stelar_lights",
  "base_wave_change": "skyhighheroes:scorched/scorched_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:scorched/scorched_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:scorched/scorched_stelar_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:scorched/scorched_stelar_omega_xis_right.tx.json",
  "omega_xis_right_lights": "skyhighheroes:scorched/scorched_stelar_omega_xis_right_lights.tx.json",
  "omega_xis_right_wave_change_lights": "skyhighheroes:scorched/scorched_stelar_omega_xis_right_wave_changing_lights.tx.json",
  "omega_xis_left": "skyhighheroes:scorched/scorched_stelar_omega_xis_left.tx.json",
  "omega_xis_left_lights": "skyhighheroes:scorched/scorched_stelar_omega_xis_left_lights.tx.json",
  "omega_xis_left_wave_change_lights": "skyhighheroes:scorched/scorched_stelar_omega_xis_left_wave_changing_lights.tx.json",
  "omega_xis_top": "skyhighheroes:scorched/scorched_stelar_omega_xis_top.tx.json",
  "omega_xis_top_lights": "skyhighheroes:scorched/scorched_stelar_omega_xis_top_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:scorched/scorched_stelar_omega_xis_bottom.tx.json",
  "omega_xis_bottom_lights": "skyhighheroes:scorched/scorched_stelar_omega_xis_bottom_lights.tx.json",
  "omega_xis_bottom_top_wave_change_lights": "skyhighheroes:scorched/scorched_stelar_omega_xis_bottom_top_wave_changing_lights.tx.json",
  "omega_xis_front": "skyhighheroes:scorched/scorched_stelar_omega_xis_front.tx.json",
  "omega_xis_front_wave_change_lights": "skyhighheroes:scorched/scorched_stelar_omega_xis_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:scorched/scorched_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:scorched/scorched_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:scorched/scorched_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:scorched/scorched_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_pegasus",
  "transer_default_lights": "skyhighheroes:tysen/tysen_stelar_transer_lights",
  "blade": "skyhighheroes:scorched/scorched_stelar_blade",
  "shield": "skyhighheroes:scorched/scorched_stelar_shield",
  "shield_lights": "skyhighheroes:scorched/scorched_stelar_shield_lights",
  "katana": "skyhighheroes:scorched/scorched_stelar_katana",
  "katana_lights": "skyhighheroes:scorched/scorched_stelar_katana_lights",
  "scythe": "skyhighheroes:scorched/scorched_stelar_scythe",
  "scythe_lights": "skyhighheroes:scorched/scorched_stelar_scythe_lights",
  "rifle": "skyhighheroes:scorched/scorched_stelar_rifle",
  "rifle_lights": "skyhighheroes:scorched/scorched_stelar_rifle_lights"
});

function getColor() {
  return 0xFFC400;
};

function getID() {
  return "5429d1b5-7828-4b04-a0b0-fc8b41ffac27";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:scorched_stelar_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
};