extend("skyhighheroes:spartan_stelar");

loadTextures({
  "base": "skyhighheroes:spartan/spartan_stelar_mysterio_base",
  "lights": "skyhighheroes:spartan/spartan_stelar_mysterio_lights",
  "base_tx": "skyhighheroes:spartan/spartan_stelar_mysterio_base.tx.json",
  "lights_tx": "skyhighheroes:spartan/spartan_stelar_mysterio_lights.tx.json",
  "wave_change_lights": "skyhighheroes:spartan/spartan_stelar_mysterio_wave_change_lights.tx.json",
  "omega_xis_right": "skyhighheroes:spartan/spartan_stelar_mysterio_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:spartan/spartan_stelar_mysterio_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:spartan/spartan_stelar_mysterio_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:spartan/spartan_stelar_mysterio_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:spartan/spartan_stelar_mysterio_omega_xis_front.tx.json",
  "shield": "skyhighheroes:spartan/spartan_stelar_mysterio_shield",
  "katana": "skyhighheroes:spartan/spartan_stelar_mysterio_katana",
  "scythe": "skyhighheroes:spartan/spartan_stelar_mysterio_scythe",
  "rifle": "skyhighheroes:spartan/spartan_stelar_mysterio_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
};