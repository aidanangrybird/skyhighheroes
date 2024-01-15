extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:biscuit/biscuit_stelar_base",
  "lights": "skyhighheroes:biscuit/biscuit_stelar_lights",
  "base_wave_change": "skyhighheroes:biscuit/biscuit_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:biscuit/biscuit_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:biscuit/biscuit_stelar_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_right.tx.json",
  "omega_xis_right_lights": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_right_lights.tx.json",
  "omega_xis_right_wave_change_lights": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_right_wave_changing_lights.tx.json",
  "omega_xis_left": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_left.tx.json",
  "omega_xis_left_lights": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_left_lights.tx.json",
  "omega_xis_left_wave_change_lights": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_left_wave_changing_lights.tx.json",
  "omega_xis_top": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_top.tx.json",
  "omega_xis_top_lights": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_top_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_bottom.tx.json",
  "omega_xis_bottom_lights": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_bottom_lights.tx.json",
  "omega_xis_bottom_top_wave_change_lights": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_bottom_top_wave_changing_lights.tx.json",
  "omega_xis_front": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_front.tx.json",
  "omega_xis_front_wave_change_lights": "skyhighheroes:biscuit/biscuit_stelar_omega_xis_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:biscuit/biscuit_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:biscuit/biscuit_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:biscuit/biscuit_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:biscuit/biscuit_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_pegasus",
  "transer_default_lights": "skyhighheroes:biscuit/biscuit_stelar_transer_lights",
  "blade": "skyhighheroes:biscuit/biscuit_stelar_blade",
  "shield": "skyhighheroes:biscuit/biscuit_stelar_shield",
  "shield_lights": "skyhighheroes:biscuit/biscuit_stelar_shield_lights",
  "katana": "skyhighheroes:biscuit/biscuit_stelar_katana",
  "katana_lights": "skyhighheroes:biscuit/biscuit_stelar_katana_lights",
  "scythe": "skyhighheroes:biscuit/biscuit_stelar_scythe",
  "scythe_lights": "skyhighheroes:biscuit/biscuit_stelar_scythe_lights",
  "rifle": "skyhighheroes:biscuit/biscuit_stelar_rifle",
  "rifle_lights": "skyhighheroes:biscuit/biscuit_stelar_rifle_lights"
});

function getColor() {
  return 0xFF0000;
};

function getID() {
  return "324ccf33-d7b4-4cd5-b85f-d8f16a8cb862";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:biscuit_stelar_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
};