extend("skyhighheroes:yellow_stelar");

loadTextures({
    "base": "skyhighheroes:yellow/yellow_stelar_spider_man",
    "lights": "skyhighheroes:yellow/yellow_stelar_spider_man_lights",
    "suit": "skyhighheroes:yellow/yellow_stelar_spider_man_suit.tx.json",
    "suit_lights": "skyhighheroes:yellow/yellow_stelar_spider_man_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:yellow/yellow_stelar_up_transer",
    "visualizer_down": "skyhighheroes:yellow/yellow_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:yellow/yellow_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:yellow/yellow_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:yellow/yellow_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:yellow/yellow_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:yellow/yellow_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:yellow/yellow_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:yellow/yellow_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:yellow/yellow_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:yellow/yellow_stelar_spider_man_bottom_cannon",
    "cannon_left": "skyhighheroes:yellow/yellow_stelar_spider_man_left_cannon",
    "cannon_right": "skyhighheroes:yellow/yellow_stelar_spider_man_right_cannon",
    "cannon_top": "skyhighheroes:yellow/yellow_stelar_spider_man_top_cannon",
    "cannon_front": "skyhighheroes:yellow/yellow_stelar_spider_man_front_cannon",
    "cannon_left_lights": "skyhighheroes:yellow/omega_xis_yellow_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:yellow/omega_xis_yellow_stelar_right_eyes",
    "transertx": "skyhighheroes:yellow/yellow_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:yellow/yellow_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:yellow/yellow_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:yellow/yellow_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_dragon",
    "transer_lights": "skyhighheroes:yellow/yellow_stelar_transer_lights",
    "blade": "skyhighheroes:yellow/yellow_stelar_blade",
    "hair": "skyhighheroes:yellow/yellow_stelar_hair",
    "shield": "skyhighheroes:yellow/yellow_stelar_shield",
    "katana": "skyhighheroes:yellow/yellow_stelar_katana",
    "katana_lights": "skyhighheroes:yellow/yellow_stelar_katana_lights",
    "scythe": "skyhighheroes:yellow/yellow_stelar_scythe",
    "scythe_lights": "skyhighheroes:yellow/yellow_stelar_scythe_lights",
    "rifle": "skyhighheroes:yellow/yellow_stelar_rifle",
    "rifle_lights": "skyhighheroes:yellow/yellow_stelar_rifle_lights"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}