extend("skyhighheroes:yellow_stelar");

loadTextures({
  "base": "skyhighheroes:yellow/yellow_stelar_spider_man_base",
  "lights": "skyhighheroes:yellow/yellow_stelar_spider_man_lights",
  "base_tx": "skyhighheroes:yellow/yellow_stelar_spider_man_base.tx.json",
  "lights_tx": "skyhighheroes:yellow/yellow_stelar_spider_man_lights.tx.json",
  "wave_change_lights": "skyhighheroes:yellow/yellow_stelar_spider_man_wave_change_lights.tx.json",
  "omega_xis_right": "skyhighheroes:yellow/yellow_stelar_spider_man_omega_xis_right.tx.json",
  "omega_xis_left": "skyhighheroes:yellow/yellow_stelar_spider_man_omega_xis_left.tx.json",
  "omega_xis_top": "skyhighheroes:yellow/yellow_stelar_spider_man_omega_xis_top.tx.json",
  "omega_xis_bottom": "skyhighheroes:yellow/yellow_stelar_spider_man_omega_xis_bottom.tx.json",
  "omega_xis_front": "skyhighheroes:yellow/yellow_stelar_spider_man_omega_xis_front.tx.json",
  "shield": "skyhighheroes:yellow/yellow_stelar_spider_man_shield",
  "katana": "skyhighheroes:yellow/yellow_stelar_spider_man_katana",
  "scythe": "skyhighheroes:yellow/yellow_stelar_spider_man_scythe",
  "rifle": "skyhighheroes:yellow/yellow_stelar_spider_man_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};