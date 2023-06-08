extend("skyhighheroes:sym_stelar");

loadTextures({
  "base": "skyhighheroes:sym/sym_stelar_blue_beetle_base",
  "lights": "skyhighheroes:sym/sym_stelar_blue_beetle_lights",
  "base_tx": "skyhighheroes:sym/sym_stelar_blue_beetle_base.tx.json",
  "lights_tx": "skyhighheroes:sym/sym_stelar_blue_beetle_lights.tx.json",
  "wave_change_lights": "skyhighheroes:sym/sym_stelar_blue_beetle_wave_change_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:sym/sym_stelar_blue_beetle_omega_xis_bottom",
  "omega_xis_left": "skyhighheroes:sym/sym_stelar_blue_beetle_omega_xis_left",
  "omega_xis_right": "skyhighheroes:sym/sym_stelar_blue_beetle_omega_xis_right",
  "omega_xis_top": "skyhighheroes:sym/sym_stelar_blue_beetle_omega_xis_top",
  "omega_xis_front": "skyhighheroes:sym/sym_stelar_blue_beetle_omega_xis_front",
  "shield": "skyhighheroes:sym/sym_stelar_blue_beetle_shield",
  "katana": "skyhighheroes:sym/sym_stelar_blue_beetle_katana",
  "scythe": "skyhighheroes:sym/sym_stelar_blue_beetle_scythe",
  "rifle": "skyhighheroes:sym/sym_stelar_blue_beetle_rifle",
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}