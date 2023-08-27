extend("skyhighheroes:pezzo_stelar");

loadTextures({
  "base": "skyhighheroes:pezzo/pezzo_stelar_iron_man_base",
  "lights": "skyhighheroes:pezzo/pezzo_stelar_iron_man_lights",
  "base_tx": "skyhighheroes:pezzo/pezzo_stelar_iron_man_base.tx.json",
  "lights_tx": "skyhighheroes:pezzo/pezzo_stelar_iron_man_lights.tx.json",
  "wave_change_lights": "skyhighheroes:pezzo/pezzo_stelar_iron_man_wave_change_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:pezzo/pezzo_stelar_iron_man_omega_xis_bottom",
  "omega_xis_left": "skyhighheroes:pezzo/pezzo_stelar_iron_man_omega_xis_left",
  "omega_xis_right": "skyhighheroes:pezzo/pezzo_stelar_iron_man_omega_xis_right",
  "omega_xis_top": "skyhighheroes:pezzo/pezzo_stelar_iron_man_omega_xis_top",
  "omega_xis_front": "skyhighheroes:pezzo/pezzo_stelar_iron_man_omega_xis_front",
  "shield": "skyhighheroes:pezzo/pezzo_stelar_iron_man_shield",
  "katana": "skyhighheroes:pezzo/pezzo_stelar_iron_man_katana",
  "scythe": "skyhighheroes:pezzo/pezzo_stelar_iron_man_scythe",
  "rifle": "skyhighheroes:pezzo/pezzo_stelar_iron_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}