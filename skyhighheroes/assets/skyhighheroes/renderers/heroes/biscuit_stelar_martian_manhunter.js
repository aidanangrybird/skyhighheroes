extend("skyhighheroes:biscuit_stelar");

loadTextures({
  "base": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_base",
  "lights": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_lights",
  "base_tx": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_base.tx.json",
  "lights_tx": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_lights.tx.json",
  "wave_change_lights": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_wave_change_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_bottom",
  "omega_xis_left": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_left",
  "omega_xis_right": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_right",
  "omega_xis_top": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_top",
  "omega_xis_front": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_omega_xis_front",
  "shield": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_shield",
  "katana": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_katana",
  "scythe": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_scythe",
  "rifle": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}