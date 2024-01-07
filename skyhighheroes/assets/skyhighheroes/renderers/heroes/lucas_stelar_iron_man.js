extend("skyhighheroes:lucas_stelar");

loadTextures({
  "base": "skyhighheroes:lucas/lucas_stelar_iron_man_base",
  "lights": "skyhighheroes:lucas/lucas_stelar_iron_man_lights",
  "base_wave_change": "skyhighheroes:lucas/lucas_stelar_iron_man_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:lucas/lucas_stelar_iron_man_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_iron_man_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:lucas/lucas_stelar_iron_man_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:lucas/lucas_stelar_iron_man_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:lucas/lucas_stelar_iron_man_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:lucas/lucas_stelar_iron_man_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:lucas/lucas_stelar_iron_man_omega_xis_front.tx.json",
  "shield": "skyhighheroes:lucas/lucas_stelar_iron_man_shield",
  "katana": "skyhighheroes:lucas/lucas_stelar_iron_man_katana",
  "scythe": "skyhighheroes:lucas/lucas_stelar_iron_man_scythe",
  "rifle": "skyhighheroes:lucas/lucas_stelar_iron_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
};