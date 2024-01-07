extend("skyhighheroes:liam_stelar");

loadTextures({
  "base": "skyhighheroes:liam/liam_stelar_iron_man_base",
  "lights": "skyhighheroes:liam/liam_stelar_iron_man_lights",
  "base_wave_change": "skyhighheroes:liam/liam_stelar_iron_man_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:liam/liam_stelar_iron_man_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:liam/liam_stelar_iron_man_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_front.tx.json",
  "shield": "skyhighheroes:liam/liam_stelar_iron_man_shield",
  "katana": "skyhighheroes:liam/liam_stelar_iron_man_katana",
  "scythe": "skyhighheroes:liam/liam_stelar_iron_man_scythe",
  "rifle": "skyhighheroes:liam/liam_stelar_iron_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
};