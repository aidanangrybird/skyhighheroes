extend("skyhighheroes:slayer_stelar");

loadTextures({
  "base": "skyhighheroes:slayer/slayer_stelar_black_panther_base",
  "lights": "skyhighheroes:slayer/slayer_stelar_black_panther_lights",
  "base_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:slayer/slayer_stelar_black_panther_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:slayer/slayer_stelar_black_panther_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_front.tx.json",
  "shield": "skyhighheroes:slayer/slayer_stelar_black_panther_shield",
  "katana": "skyhighheroes:slayer/slayer_stelar_black_panther_katana",
  "scythe": "skyhighheroes:slayer/slayer_stelar_black_panther_scythe",
  "rifle": "skyhighheroes:slayer/slayer_stelar_black_panther_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};