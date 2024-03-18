extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:robin/robin_stelar_base",
  "lights": "skyhighheroes:robin/robin_stelar_lights",
  "base_wave_change": "skyhighheroes:robin/robin_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:robin/robin_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:robin/robin_stelar_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:robin/robin_stelar_omega_xis_right.tx.json",
  "omega_xis_right_lights": "skyhighheroes:robin/robin_stelar_omega_xis_right_lights.tx.json",
  "omega_xis_right_wave_change_lights": "skyhighheroes:robin/robin_stelar_omega_xis_right_wave_changing_lights.tx.json",
  "omega_xis_left": "skyhighheroes:robin/robin_stelar_omega_xis_left.tx.json",
  "omega_xis_left_lights": "skyhighheroes:robin/robin_stelar_omega_xis_left_lights.tx.json",
  "omega_xis_left_wave_change_lights": "skyhighheroes:robin/robin_stelar_omega_xis_left_wave_changing_lights.tx.json",
  "omega_xis_top": "skyhighheroes:robin/robin_stelar_omega_xis_top.tx.json",
  "omega_xis_top_lights": "skyhighheroes:robin/robin_stelar_omega_xis_top_lights.tx.json",
  "omega_xis_top_wave_change_lights": "skyhighheroes:robin/robin_stelar_omega_xis_top_wave_changing_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:robin/robin_stelar_omega_xis_bottom.tx.json",
  "omega_xis_bottom_lights": "skyhighheroes:robin/robin_stelar_omega_xis_bottom_lights.tx.json",
  "omega_xis_bottom_wave_change_lights": "skyhighheroes:robin/robin_stelar_omega_xis_bottom_wave_changing_lights.tx.json",
  "omega_xis_front": "skyhighheroes:robin/robin_stelar_omega_xis_front.tx.json",
  "omega_xis_front_wave_change_lights": "skyhighheroes:robin/robin_stelar_omega_xis_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:robin/robin_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:robin/robin_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:robin/robin_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:robin/robin_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_leo",
  "transer_default_lights": "skyhighheroes:robin/robin_stelar_transer_lights",
  "blade": "skyhighheroes:robin/robin_stelar_blade",
  "shield": "skyhighheroes:robin/robin_stelar_shield",
  "shield_lights": "skyhighheroes:robin/robin_stelar_shield_lights",
  "katana": "skyhighheroes:robin/robin_stelar_katana",
  "katana_lights": "skyhighheroes:robin/robin_stelar_katana_lights",
  "scythe": "skyhighheroes:robin/robin_stelar_scythe",
  "scythe_lights": "skyhighheroes:robin/robin_stelar_scythe_lights",
  "rifle": "skyhighheroes:robin/robin_stelar_rifle",
  "rifle_lights": "skyhighheroes:robin/robin_stelar_rifle_lights"
});

function getColor() {
  return 0x00FF00;
};

function getID() {
  return "8d53a071-d3fc-428e-806b-ed16ebe41fe4";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:robin_stelar_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
};