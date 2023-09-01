extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:liam/liam_stelar_base",
  "lights": "skyhighheroes:liam/liam_stelar_lights",
  "base_tx": "skyhighheroes:liam/liam_stelar_base.tx.json",
  "lights_tx": "skyhighheroes:liam/liam_stelar_lights.tx.json",
  "wave_change_lights": "skyhighheroes:liam/liam_stelar_wave_change_lights.tx.json",
  "visualizer_up": "skyhighheroes:liam/liam_stelar_up_transer",
  "visualizer_down": "skyhighheroes:liam/liam_stelar_down_transer",
  "visualizer_up_short": "skyhighheroes:liam/liam_stelar_up_short",
  "visualizer_down_short": "skyhighheroes:liam/liam_stelar_down_short",
  "visualizer_up_swimsuit": "skyhighheroes:liam/liam_stelar_up_swimsuit",
  "visualizer_down_swimsuit": "skyhighheroes:liam/liam_stelar_down_swimsuit",
  "visualizer_up_winter_hood_down": "skyhighheroes:liam/liam_stelar_up_winter_hood_down",
  "visualizer_up_winter_hood_up": "skyhighheroes:liam/liam_stelar_up_winter_hood_up",
  "visualizer_down_winter_hood_down": "skyhighheroes:liam/liam_stelar_down_winter_hood_down",
  "visualizer_down_winter_hood_up": "skyhighheroes:liam/liam_stelar_down_winter_hood_up",
  "visualizer_up_normal": "skyhighheroes:liam/liam_stelar_up_normal",
  "visualizer_down_normal": "skyhighheroes:liam/liam_stelar_down_normal",
  "visualizer_up_lights": "skyhighheroes:liam/liam_stelar_up_lights",
  "visualizer_down_lights": "skyhighheroes:liam/liam_stelar_down_lights",
  "visualizer_up_lights_winter_hood": "skyhighheroes:liam/liam_stelar_up_lights_winter_hood",
  "visualizer_lights_tx": "skyhighheroes:liam/liam_stelar_visualizer_lights.tx.json",
  "omega_xis_right": "skyhighheroes:liam/liam_stelar_omega_xis_right.tx.json",
  "omega_xis_right_lights": "skyhighheroes:liam/liam_stelar_omega_xis_right_lights.tx.json",
  "omega_xis_right_wave_change_lights": "skyhighheroes:liam/liam_stelar_omega_xis_right_wave_change_lights.tx.json",
  "omega_xis_left": "skyhighheroes:liam/liam_stelar_omega_xis_left.tx.json",
  "omega_xis_left_lights": "skyhighheroes:liam/liam_stelar_omega_xis_left_lights.tx.json",
  "omega_xis_left_wave_change_lights": "skyhighheroes:liam/liam_stelar_omega_xis_left_wave_change_lights.tx.json",
  "omega_xis_top": "skyhighheroes:liam/liam_stelar_omega_xis_top.tx.json",
  "omega_xis_top_lights": "skyhighheroes:liam/liam_stelar_omega_xis_top_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:liam/liam_stelar_omega_xis_bottom.tx.json",
  "omega_xis_bottom_lights": "skyhighheroes:liam/liam_stelar_omega_xis_bottom_lights.tx.json",
  "omega_xis_bottom_top_wave_change_lights": "skyhighheroes:liam/liam_stelar_omega_xis_bottom_top_wave_change_lights.tx.json",
  "omega_xis_front": "skyhighheroes:liam/liam_stelar_omega_xis_front.tx.json",
  "omega_xis_front_wave_change_lights": "skyhighheroes:liam/liam_stelar_omega_xis_front_wave_change_lights.tx.json",
  "transer_tx": "skyhighheroes:liam/liam_stelar_transer.tx.json",
  "short_tx": "skyhighheroes:liam/liam_stelar_short.tx.json",
  "swimsuit_tx": "skyhighheroes:liam/liam_stelar_swimsuit.tx.json",
  "winter_tx": "skyhighheroes:liam/liam_stelar_winter.tx.json",
  "normal_tx": "skyhighheroes:liam/liam_stelar_normal.tx.json",
  "transer": "skyhighheroes:stelar_transer_leo",
  "transer_lights": "skyhighheroes:liam/liam_stelar_transer_lights",
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
}

function getID() {
  return "cd71352c-8cb2-448c-a69d-a310a905ce7b";
}

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
}

function initEffects(renderer) {
  parent.initEffects(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:liam_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
}