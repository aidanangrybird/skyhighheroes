extend("skyhighheroes:razor_stelar");

loadTextures({
  "base": "skyhighheroes:razor/razor_stelar_iron_man_base",
  "lights": "skyhighheroes:razor/razor_stelar_iron_man_lights",
  "base_tx": "skyhighheroes:razor/razor_stelar_iron_man_base.tx.json",
  "lights_tx": "skyhighheroes:razor/razor_stelar_iron_man_lights.tx.json",
  "wave_change_lights": "skyhighheroes:razor/razor_stelar_iron_man_wave_change_lights.tx.json",
  "omega_xis_right": "skyhighheroes:razor/razor_stelar_iron_man_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:razor/razor_stelar_iron_man_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:razor/razor_stelar_iron_man_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:razor/razor_stelar_iron_man_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:razor/razor_stelar_iron_man_omega_xis_front.tx.json",
  "shield": "skyhighheroes:razor/razor_stelar_iron_man_shield",
  "katana": "skyhighheroes:razor/razor_stelar_iron_man_katana",
  "scythe": "skyhighheroes:razor/razor_stelar_iron_man_scythe",
  "rifle": "skyhighheroes:razor/razor_stelar_iron_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
};