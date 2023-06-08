extend("skyhighheroes:robin_stelar");

loadTextures({
  "base": "skyhighheroes:robin/robin_stelar_spider_man_base",
  "lights": "skyhighheroes:robin/robin_stelar_spider_man_lights",
  "base_tx": "skyhighheroes:robin/robin_stelar_spider_man_base.tx.json",
  "lights_tx": "skyhighheroes:robin/robin_stelar_spider_man_lights.tx.json",
  "wave_change_lights": "skyhighheroes:robin/robin_stelar_spider_man_wave_change_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_bottom",
  "omega_xis_left": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_left",
  "omega_xis_right": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_right",
  "omega_xis_top": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_top",
  "omega_xis_front": "skyhighheroes:robin/robin_stelar_spider_man_omega_xis_front",
  "shield": "skyhighheroes:robin/robin_stelar_spider_man_shield",
  "katana": "skyhighheroes:robin/robin_stelar_spider_man_katana",
  "scythe": "skyhighheroes:robin/robin_stelar_spider_man_scythe",
  "rifle": "skyhighheroes:robin/robin_stelar_spider_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}