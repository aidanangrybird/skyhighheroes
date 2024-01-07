extend("skyhighheroes:rain_stelar");

loadTextures({
  "base": "skyhighheroes:rain/rain_stelar_savitar_base",
  "lights": "skyhighheroes:rain/rain_stelar_savitar_lights",
  "base_wave_change": "skyhighheroes:rain/rain_stelar_savitar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:rain/rain_stelar_savitar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:rain/rain_stelar_savitar_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:rain/rain_stelar_savitar_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:rain/rain_stelar_savitar_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:rain/rain_stelar_savitar_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:rain/rain_stelar_savitar_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:rain/rain_stelar_savitar_omega_xis_front.tx.json",
  "shield": "skyhighheroes:rain/rain_stelar_savitar_shield",
  "katana": "skyhighheroes:rain/rain_stelar_savitar_katana",
  "scythe": "skyhighheroes:rain/rain_stelar_savitar_scythe",
  "rifle": "skyhighheroes:rain/rain_stelar_savitar_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};