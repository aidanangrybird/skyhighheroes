extend("skyhighheroes:yellow_stelar");

loadTextures({
    "base": "skyhighheroes:yellow/yellow_stelar_spider_man",
    "lights": "skyhighheroes:yellow/yellow_stelar_spider_man_lights",
    "base_tx": "skyhighheroes:yellow/yellow_stelar_spider_man_base.tx.json",
    "lights_tx": "skyhighheroes:yellow/yellow_stelar_spider_man_lights.tx.json",
    "wave_change_lights": "skyhighheroes:yellow/yellow_stelar_spider_man_wave_change_lights.tx.json",
    "cannon_bottom": "skyhighheroes:yellow/yellow_stelar_spider_man_bottom_cannon",
    "cannon_left": "skyhighheroes:yellow/yellow_stelar_spider_man_left_cannon",
    "cannon_right": "skyhighheroes:yellow/yellow_stelar_spider_man_right_cannon",
    "cannon_top": "skyhighheroes:yellow/yellow_stelar_spider_man_top_cannon",
    "cannon_front": "skyhighheroes:yellow/yellow_stelar_spider_man_front_cannon",
    "shield": "skyhighheroes:yellow/yellow_stelar_spider_man_shield",
    "katana": "skyhighheroes:yellow/yellow_stelar_spider_man_katana",
    "scythe": "skyhighheroes:yellow/yellow_stelar_spider_man_scythe",
    "rifle": "skyhighheroes:yellow/yellow_stelar_spider_man_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "leo_transer");
}