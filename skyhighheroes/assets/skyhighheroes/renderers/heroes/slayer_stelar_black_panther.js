extend("skyhighheroes:slayer_stelar");

loadTextures({
  "base": "skyhighheroes:slayer/slayer_stelar_black_panther_base",
  "lights": "skyhighheroes:slayer/slayer_stelar_black_panther_lights",
  "base_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:slayer/slayer_stelar_black_panther_wave_changing_lights.tx.json",
  "head_right": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_right.tx.json",
  "head_right_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_right_wave_change.tx.json",
  "head_left": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_left.tx.json",
  "head_left_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_left_wave_change.tx.json",
  "head_top": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_top.tx.json",
  "head_top_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_top_wave_change.tx.json",
  "head_bottom": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_bottom_wave_change.tx.json",
  "head_front": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_front.tx.json",
  "head_front_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_front_wave_change.tx.json",
  "shield": "skyhighheroes:slayer/slayer_stelar_black_panther_shield",
  "katana": "skyhighheroes:slayer/slayer_stelar_black_panther_katana",
  "scythe": "skyhighheroes:slayer/slayer_stelar_black_panther_scythe",
  "rifle": "skyhighheroes:slayer/slayer_stelar_black_panther_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};