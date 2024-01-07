extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:liam/liam_stelar_base",
  "lights": "skyhighheroes:liam/liam_stelar_lights",
  "base_wave_change": "skyhighheroes:liam/liam_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:liam/liam_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:liam/liam_stelar_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:liam/liam_stelar_omega_xis_right.tx.json",
  "omega_xis_right_lights": "skyhighheroes:liam/liam_stelar_omega_xis_right_lights.tx.json",
  "omega_xis_right_wave_change_lights": "skyhighheroes:liam/liam_stelar_omega_xis_right_wave_changing_lights.tx.json",
  "omega_xis_left": "skyhighheroes:liam/liam_stelar_omega_xis_left.tx.json",
  "omega_xis_left_lights": "skyhighheroes:liam/liam_stelar_omega_xis_left_lights.tx.json",
  "omega_xis_left_wave_change_lights": "skyhighheroes:liam/liam_stelar_omega_xis_left_wave_changing_lights.tx.json",
  "omega_xis_top": "skyhighheroes:liam/liam_stelar_omega_xis_top.tx.json",
  "omega_xis_top_lights": "skyhighheroes:liam/liam_stelar_omega_xis_top_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:liam/liam_stelar_omega_xis_bottom.tx.json",
  "omega_xis_bottom_lights": "skyhighheroes:liam/liam_stelar_omega_xis_bottom_lights.tx.json",
  "omega_xis_bottom_top_wave_change_lights": "skyhighheroes:liam/liam_stelar_omega_xis_bottom_top_wave_changing_lights.tx.json",
  "omega_xis_front": "skyhighheroes:liam/liam_stelar_omega_xis_front.tx.json",
  "omega_xis_front_wave_change_lights": "skyhighheroes:liam/liam_stelar_omega_xis_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:liam/liam_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:liam/liam_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:liam/liam_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:liam/liam_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_leo",
  "transer_default_lights": "skyhighheroes:liam/liam_stelar_transer_lights",
  "blade": "skyhighheroes:liam/liam_stelar_blade",
  "shield": "skyhighheroes:liam/liam_stelar_shield",
  "shield_lights": "skyhighheroes:liam/liam_stelar_shield_lights",
  "katana": "skyhighheroes:liam/liam_stelar_katana",
  "katana_lights": "skyhighheroes:liam/liam_stelar_katana_lights",
  "scythe": "skyhighheroes:liam/liam_stelar_scythe",
  "scythe_lights": "skyhighheroes:liam/liam_stelar_scythe_lights",
  "rifle": "skyhighheroes:liam/liam_stelar_rifle",
  "rifle_lights": "skyhighheroes:liam/liam_stelar_rifle_lights"
});

function getColor() {
  return 0x0000FF;
};

function getID() {
  return "cd71352c-8cb2-448c-a69d-a310a905ce7b";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:liam_stelar_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
};