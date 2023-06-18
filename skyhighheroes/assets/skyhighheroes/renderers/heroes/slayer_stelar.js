extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:slayer/slayer_stelar_base",
  "lights": "skyhighheroes:slayer/slayer_stelar_lights",
  "base_tx": "skyhighheroes:slayer/slayer_stelar_base.tx.json",
  "lights_tx": "skyhighheroes:slayer/slayer_stelar_lights.tx.json",
  "wave_change_lights": "skyhighheroes:slayer/slayer_stelar_wave_change_lights.tx.json",
  "visualizer_up": "skyhighheroes:slayer/slayer_stelar_up_transer",
  "visualizer_down": "skyhighheroes:slayer/slayer_stelar_down_transer",
  "visualizer_up_short": "skyhighheroes:slayer/slayer_stelar_up_short",
  "visualizer_down_short": "skyhighheroes:slayer/slayer_stelar_down_short",
  "visualizer_up_swimsuit": "skyhighheroes:slayer/slayer_stelar_up_swimsuit",
  "visualizer_down_swimsuit": "skyhighheroes:slayer/slayer_stelar_down_swimsuit",
  "visualizer_up_winter_hood_down": "skyhighheroes:slayer/slayer_stelar_up_winter_hood_down",
  "visualizer_up_winter_hood_up": "skyhighheroes:slayer/slayer_stelar_up_winter_hood_up",
  "visualizer_down_winter_hood_down": "skyhighheroes:slayer/slayer_stelar_down_winter_hood_down",
  "visualizer_down_winter_hood_up": "skyhighheroes:slayer/slayer_stelar_down_winter_hood_up",
  "visualizer_up_normal": "skyhighheroes:slayer/slayer_stelar_up_normal",
  "visualizer_down_normal": "skyhighheroes:slayer/slayer_stelar_down_normal",
  "visualizer_up_lights": "skyhighheroes:slayer/slayer_stelar_up_lights",
  "visualizer_down_lights": "skyhighheroes:slayer/slayer_stelar_down_lights",
  "visualizer_up_lights_winter_hood": "skyhighheroes:slayer/slayer_stelar_up_lights_winter_hood",
  "visualizer_lights_tx": "skyhighheroes:slayer/slayer_stelar_visualizer_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:slayer/slayer_stelar_omega_xis_bottom",
  "omega_xis_bottom_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_bottom_lights",
  "omega_xis_left": "skyhighheroes:slayer/slayer_stelar_omega_xis_left",
  "omega_xis_left_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_left_lights",
  "omega_xis_right": "skyhighheroes:slayer/slayer_stelar_omega_xis_right",
  "omega_xis_right_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_right_lights",
  "omega_xis_top": "skyhighheroes:slayer/slayer_stelar_omega_xis_top",
  "omega_xis_top_lights": "skyhighheroes:slayer/slayer_stelar_omega_xis_top_lights",
  "omega_xis_front": "skyhighheroes:slayer/slayer_stelar_omega_xis_front",
  "transer_tx": "skyhighheroes:slayer/slayer_stelar_transer.tx.json",
  "short_tx": "skyhighheroes:slayer/slayer_stelar_short.tx.json",
  "swimsuit_tx": "skyhighheroes:slayer/slayer_stelar_swimsuit.tx.json",
  "winter_tx": "skyhighheroes:slayer/slayer_stelar_winter.tx.json",
  "normal_tx": "skyhighheroes:slayer/slayer_stelar_normal.tx.json",
  "transer": "skyhighheroes:stelar_transer_pegasus",
  "transer_lights": "skyhighheroes:slayer/slayer_stelar_transer_lights",
  "blade": "skyhighheroes:slayer/slayer_stelar_blade",
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
}

function getID() {
  return "85f45fed-d7f1-4966-bfad-915c3dba0153";
}

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}

function initEffects(renderer) {
  parent.initEffects(renderer);
  stuff.bindFlightTrail(renderer, "skyhighheroes:slayer_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
}