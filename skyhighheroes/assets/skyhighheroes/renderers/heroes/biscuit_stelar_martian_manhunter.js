extend("skyhighheroes:biscuit_stelar");

loadTextures({
  "base": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_base",
  "lights": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_lights",
  "base_wave_change": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_front.tx.json",
  "shield": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_shield",
  "katana": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_katana",
  "scythe": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_scythe",
  "rifle": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};