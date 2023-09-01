extend("skyhighheroes:tysen_stelar");

loadTextures({
  "base": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_base",
  "lights": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_lights",
  "base_tx": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_base.tx.json",
  "lights_tx": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_lights.tx.json",
  "wave_change_lights": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_wave_change_lights.tx.json",
  "omega_xis_right": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_front.tx.json",
  "shield": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_shield",
  "katana": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_katana",
  "scythe": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_scythe",
  "rifle": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}