extend("skyhighheroes:aidan_stelar");

loadTextures({
  "base": "skyhighheroes:aidan/aidan_stelar_gundam_base",
  "lights": "skyhighheroes:aidan/aidan_stelar_gundam_lights",
  "base_tx": "skyhighheroes:aidan/aidan_stelar_gundam_base.tx.json",
  "lights_tx": "skyhighheroes:aidan/aidan_stelar_gundam_lights.tx.json",
  "wave_change_lights": "skyhighheroes:aidan/aidan_stelar_gundam_wave_change_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:aidan/aidan_stelar_gundam_omega_xis_bottom",
  "omega_xis_left": "skyhighheroes:aidan/aidan_stelar_gundam_omega_xis_left",
  "omega_xis_right": "skyhighheroes:aidan/aidan_stelar_gundam_omega_xis_right",
  "omega_xis_top": "skyhighheroes:aidan/aidan_stelar_gundam_omega_xis_top",
  "omega_xis_front": "skyhighheroes:aidan/aidan_stelar_gundam_omega_xis_front",
  "shield": "skyhighheroes:aidan/aidan_stelar_gundam_shield",
  "katana": "skyhighheroes:aidan/aidan_stelar_gundam_katana",
  "scythe": "skyhighheroes:aidan/aidan_stelar_gundam_scythe",
  "rifle": "skyhighheroes:aidan/aidan_stelar_gundam_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}