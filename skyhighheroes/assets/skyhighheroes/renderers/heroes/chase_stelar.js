extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:chase/chase_stelar_base",
  "lights": "skyhighheroes:chase/chase_stelar_lights",
  "base_wave_change": "skyhighheroes:chase/chase_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:chase/chase_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:chase/chase_stelar_wave_changing_lights.tx.json",
  "sword_blade": "skyhighheroes:chase/chase_stelar_sword_blade.tx.json",
  "sword": "skyhighheroes:chase/chase_stelar_sword.tx.json",
  "sword_lights": "skyhighheroes:null",
  "sword_wave_changing_lights": "skyhighheroes:chase/chase_stelar_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:chase/chase_stelar_sword_sides.tx.json",
  "sword_sides_wave_changing_lights": "skyhighheroes:chase/chase_stelar_sword_sides_wave_changing_lights.tx.json",
  "sword_front": "skyhighheroes:chase/chase_stelar_sword_front.tx.json",
  "sword_front_wave_changing_lights": "skyhighheroes:chase/chase_stelar_sword_front_wave_changing_lights.tx.json",
  "head_right": "skyhighheroes:chase/chase_stelar_pryetak_right.tx.json",
  "head_right_wave_change": "skyhighheroes:chase/chase_stelar_pryetak_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:chase/chase_stelar_pryetak_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:chase/chase_stelar_pryetak_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:chase/chase_stelar_pryetak_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:chase/chase_stelar_pryetak_left.tx.json",
  "head_left_wave_change": "skyhighheroes:chase/chase_stelar_pryetak_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:chase/chase_stelar_pryetak_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:chase/chase_stelar_pryetak_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:chase/chase_stelar_pryetak_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:chase/chase_stelar_pryetak_top.tx.json",
  "head_top_wave_change": "skyhighheroes:chase/chase_stelar_pryetak_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:chase/chase_stelar_pryetak_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:chase/chase_stelar_pryetak_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:chase/chase_stelar_pryetak_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:chase/chase_stelar_pryetak_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:chase/chase_stelar_pryetak_bottom_wave_change.tx.json",
  "head_bottom_lights": "skyhighheroes:chase/chase_stelar_pryetak_bottom_lights.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:chase/chase_stelar_pryetak_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:chase/chase_stelar_pryetak_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:chase/chase_stelar_pryetak_front.tx.json",
  "head_front_wave_change": "skyhighheroes:chase/chase_stelar_pryetak_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:chase/chase_stelar_pryetak_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:chase/chase_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:chase/chase_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:chase/chase_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:chase/chase_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_pegasus",
  "transer_default_lights": "skyhighheroes:chase/chase_stelar_transer_lights",
  "shield": "skyhighheroes:chase/chase_stelar_shield",
  "shield_lights": "skyhighheroes:chase/chase_stelar_shield_lights",
  "katana": "skyhighheroes:chase/chase_stelar_katana",
  "katana_lights": "skyhighheroes:chase/chase_stelar_katana_lights",
  "scythe": "skyhighheroes:chase/chase_stelar_scythe",
  "scythe_lights": "skyhighheroes:chase/chase_stelar_scythe_lights",
  "rifle": "skyhighheroes:chase/chase_stelar_rifle",
  "rifle_lights": "skyhighheroes:chase/chase_stelar_rifle_lights"
});

function getColor() {
  return 0x44FF00;
};

function getID() {
  return "4da600b8-582a-4fc3-ac2e-ada03d3e478c";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  pryetak = stelar.initHead(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:chase_stelar_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
  pryetak.render(entity, renderLayer);
};