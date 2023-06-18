extend("skyhighheroes:storm_stelar");

loadTextures({
  "base": "skyhighheroes:storm/storm_stelar_iron_man_base",
  "lights": "skyhighheroes:storm/storm_stelar_iron_man_lights",
  "base_tx": "skyhighheroes:storm/storm_stelar_iron_man_base.tx.json",
  "lights_tx": "skyhighheroes:storm/storm_stelar_iron_man_lights.tx.json",
  "wave_change_lights": "skyhighheroes:storm/storm_stelar_iron_man_wave_change_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:storm/storm_stelar_iron_man_omega_xis_bottom",
  "omega_xis_left": "skyhighheroes:storm/storm_stelar_iron_man_omega_xis_left",
  "omega_xis_right": "skyhighheroes:storm/storm_stelar_iron_man_omega_xis_right",
  "omega_xis_top": "skyhighheroes:storm/storm_stelar_iron_man_omega_xis_top",
  "omega_xis_front": "skyhighheroes:storm/storm_stelar_iron_man_omega_xis_front",
  "shield": "skyhighheroes:storm/storm_stelar_iron_man_shield",
  "katana": "skyhighheroes:storm/storm_stelar_iron_man_katana",
  "scythe": "skyhighheroes:storm/storm_stelar_iron_man_scythe",
  "rifle": "skyhighheroes:storm/storm_stelar_iron_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
}