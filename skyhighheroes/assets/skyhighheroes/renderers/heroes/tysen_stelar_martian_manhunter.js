extend("skyhighheroes:tysen_stelar");

loadTextures({
  "base": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_base",
  "lights": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_lights",
  "base_wave_change": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_wave_changing_lights.tx.json",
  "head_right": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_right.tx.json",
  "head_right_wave_change": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_right_wave_change.tx.json",
  "head_left": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_left.tx.json",
  "head_left_wave_change": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_left_wave_change.tx.json",
  "head_top": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_top.tx.json",
  "head_top_wave_change": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_top_wave_change.tx.json",
  "head_bottom": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_bottom_wave_change.tx.json",
  "head_front": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_front.tx.json",
  "head_front_wave_change": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_omega_xis_front_wave_change.tx.json",
  "shield": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_shield",
  "katana": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_katana",
  "scythe": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_scythe",
  "rifle": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
};