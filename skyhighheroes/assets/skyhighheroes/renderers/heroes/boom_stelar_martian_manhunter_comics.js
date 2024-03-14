extend("skyhighheroes:boom_stelar");

loadTextures({
  "base": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_base",
  "lights": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_lights",
  "base_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_omega_xis_front.tx.json",
  "shield": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_shield",
  "katana": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_katana",
  "scythe": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_scythe",
  "rifle": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};