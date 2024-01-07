extend("skyhighheroes:robin_stelar");

loadTextures({
  "base": "skyhighheroes:robin/robin_stelar_spider_man_base",
  "lights": "skyhighheroes:robin/robin_stelar_spider_man_lights",
  "base_wave_change": "skyhighheroes:robin/robin_stelar_spider_man_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:robin/robin_stelar_spider_man_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:robin/robin_stelar_spider_man_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_front.tx.json",
  "shield": "skyhighheroes:robin/robin_stelar_spider_man_shield",
  "katana": "skyhighheroes:robin/robin_stelar_spider_man_katana",
  "scythe": "skyhighheroes:robin/robin_stelar_spider_man_scythe",
  "rifle": "skyhighheroes:robin/robin_stelar_spider_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};