extend("skyhighheroes:boom_stelar");

loadTextures({
  "base": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_base",
  "lights": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_lights",
  "base_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_wave_changing_lights.tx.json",
  "head_right": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_right.tx.json",
  "head_right_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_right_wave_change.tx.json",
  "head_left": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_left.tx.json",
  "head_left_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_left_wave_change.tx.json",
  "head_top": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_top.tx.json",
  "head_top_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_top_wave_change.tx.json",
  "head_bottom": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_bottom_wave_change.tx.json",
  "head_front": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_front.tx.json",
  "head_front_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_front_wave_change.tx.json",
  "shield": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_shield",
  "katana": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_katana",
  "scythe": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_scythe",
  "rifle": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};