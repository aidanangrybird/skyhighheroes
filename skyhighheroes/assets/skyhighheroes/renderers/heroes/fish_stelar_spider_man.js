extend("skyhighheroes:fish_stelar");

loadTextures({
    "base": "skyhighheroes:fish/fish_stelar_spider_man",
    "lights": "skyhighheroes:fish/fish_stelar_spider_man_lights",
    "suit": "skyhighheroes:fish/fish_stelar_spider_man_suit.tx.json",
    "suit_lights": "skyhighheroes:fish/fish_stelar_spider_man_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:fish/fish_stelar_spider_man_bottom_cannon",
    "cannon_left": "skyhighheroes:fish/fish_stelar_spider_man_left_cannon",
    "cannon_right": "skyhighheroes:fish/fish_stelar_spider_man_right_cannon",
    "cannon_top": "skyhighheroes:fish/fish_stelar_spider_man_top_cannon",
    "cannon_front": "skyhighheroes:fish/fish_stelar_spider_man_front_cannon",
    "shield": "skyhighheroes:fish/fish_stelar_spider_man_shield",
    "katana": "skyhighheroes:fish/fish_stelar_spider_man_katana",
    "scythe": "skyhighheroes:fish/fish_stelar_spider_man_scythe",
    "rifle": "skyhighheroes:fish/fish_stelar_spider_man_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}