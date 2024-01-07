extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:spartan/spartan_stelar_base",
  "lights": "skyhighheroes:spartan/spartan_stelar_lights",
  "base_wave_change": "skyhighheroes:spartan/spartan_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:spartan/spartan_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:spartan/spartan_stelar_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:spartan/spartan_stelar_omega_xis_right.tx.json",
  "omega_xis_right_lights": "skyhighheroes:spartan/spartan_stelar_omega_xis_right_lights.tx.json",
  "omega_xis_right_wave_change_lights": "skyhighheroes:spartan/spartan_stelar_omega_xis_right_wave_changing_lights.tx.json",
  "omega_xis_left": "skyhighheroes:spartan/spartan_stelar_omega_xis_left.tx.json",
  "omega_xis_left_lights": "skyhighheroes:spartan/spartan_stelar_omega_xis_left_lights.tx.json",
  "omega_xis_left_wave_change_lights": "skyhighheroes:spartan/spartan_stelar_omega_xis_left_wave_changing_lights.tx.json",
  "omega_xis_top": "skyhighheroes:spartan/spartan_stelar_omega_xis_top.tx.json",
  "omega_xis_top_lights": "skyhighheroes:spartan/spartan_stelar_omega_xis_top_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:spartan/spartan_stelar_omega_xis_bottom.tx.json",
  "omega_xis_bottom_lights": "skyhighheroes:spartan/spartan_stelar_omega_xis_bottom_lights.tx.json",
  "omega_xis_bottom_top_wave_change_lights": "skyhighheroes:spartan/spartan_stelar_omega_xis_bottom_top_wave_changing_lights.tx.json",
  "omega_xis_front": "skyhighheroes:spartan/spartan_stelar_omega_xis_front.tx.json",
  "omega_xis_front_wave_change_lights": "skyhighheroes:spartan/spartan_stelar_omega_xis_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:spartan/spartan_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:spartan/spartan_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:spartan/spartan_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:spartan/spartan_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_dragon",
  "transer_default_lights": "skyhighheroes:tysen/tysen_stelar_transer_lights",
  "blade": "skyhighheroes:spartan/spartan_stelar_blade",
  "shield": "skyhighheroes:spartan/spartan_stelar_shield",
  "shield_lights": "skyhighheroes:spartan/spartan_stelar_shield_lights",
  "katana": "skyhighheroes:spartan/spartan_stelar_katana",
  "katana_lights": "skyhighheroes:spartan/spartan_stelar_katana_lights",
  "scythe": "skyhighheroes:spartan/spartan_stelar_scythe",
  "scythe_lights": "skyhighheroes:spartan/spartan_stelar_scythe_lights",
  "rifle": "skyhighheroes:spartan/spartan_stelar_rifle",
  "rifle_lights": "skyhighheroes:spartan/spartan_stelar_rifle_lights"
});

function getColor() {
  return 0xAA00FF;
};

function getID() {
  return "c72add16-b732-4cae-aea2-ff4a5f6fe3eb";
}

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:spartan_stelar_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
};