extend("skyhighheroes:yellow_stelar");

loadTextures({
    "base": "skyhighheroes:yellow/yellow_stelar_spider_man",
    "lights": "skyhighheroes:yellow/yellow_stelar_spider_man_lights",
    "suit": "skyhighheroes:yellow/yellow_stelar_spider_man_suit.tx.json",
    "suit_lights": "skyhighheroes:yellow/yellow_stelar_spider_man_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:yellow/yellow_stelar_spider_man_bottom_cannon",
    "cannon_left": "skyhighheroes:yellow/yellow_stelar_spider_man_left_cannon",
    "cannon_right": "skyhighheroes:yellow/yellow_stelar_spider_man_right_cannon",
    "cannon_top": "skyhighheroes:yellow/yellow_stelar_spider_man_top_cannon",
    "cannon_front": "skyhighheroes:yellow/yellow_stelar_spider_man_front_cannon",
    "cannon_left_lights": "skyhighheroes:yellow/omega_xis_yellow_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:yellow/omega_xis_yellow_stelar_right_eyes"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}