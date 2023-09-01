extend("skyhighheroes:ender_stelar");

loadTextures({
  "base": "skyhighheroes:ender/ender_stelar_dr_fate_base",
  "lights": "skyhighheroes:ender/ender_stelar_dr_fate_lights",
  "base_tx": "skyhighheroes:ender/ender_stelar_dr_fate_base.tx.json",
  "lights_tx": "skyhighheroes:ender/ender_stelar_dr_fate_lights.tx.json",
  "wave_change_lights": "skyhighheroes:ender/ender_stelar_dr_fate_wave_change_lights.tx.json",
  "omega_xis_right": "skyhighheroes:ender/ender_stelar_dr_fate_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:ender/ender_stelar_dr_fate_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:ender/ender_stelar_dr_fate_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:ender/ender_stelar_dr_fate_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:ender/ender_stelar_dr_fate_omega_xis_front.tx.json",
  "shield": "skyhighheroes:ender/ender_stelar_dr_fate_shield",
  "katana": "skyhighheroes:ender/ender_stelar_dr_fate_katana",
  "scythe": "skyhighheroes:ender/ender_stelar_dr_fate_scythe",
  "rifle": "skyhighheroes:ender/ender_stelar_dr_fate_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}