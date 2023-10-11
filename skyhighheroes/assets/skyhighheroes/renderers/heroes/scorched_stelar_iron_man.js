extend("skyhighheroes:scorched_stelar");

loadTextures({
  "base": "skyhighheroes:scorched/scorched_stelar_iron_man_base",
  "lights": "skyhighheroes:scorched/scorched_stelar_iron_man_lights",
  "base_tx": "skyhighheroes:scorched/scorched_stelar_iron_man_base.tx.json",
  "lights_tx": "skyhighheroes:scorched/scorched_stelar_iron_man_lights.tx.json",
  "wave_change_lights": "skyhighheroes:scorched/scorched_stelar_iron_man_wave_change_lights.tx.json",
  "omega_xis_right": "skyhighheroes:scorched/scorched_stelar_iron_man_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:scorched/scorched_stelar_iron_man_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:scorched/scorched_stelar_iron_man_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:scorched/scorched_stelar_iron_man_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:scorched/scorched_stelar_iron_man_omega_xis_front.tx.json",
  "shield": "skyhighheroes:scorched/scorched_stelar_iron_man_shield",
  "katana": "skyhighheroes:scorched/scorched_stelar_iron_man_katana",
  "scythe": "skyhighheroes:scorched/scorched_stelar_iron_man_scythe",
  "rifle": "skyhighheroes:scorched/scorched_stelar_iron_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};