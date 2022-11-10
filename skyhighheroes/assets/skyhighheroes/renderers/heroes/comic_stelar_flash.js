extend("skyhighheroes:comic_stelar");

loadTextures({
    "base": "skyhighheroes:comic/comic_stelar_flash",
    "lights": "skyhighheroes:comic/comic_stelar_flash_lights",
    "suit": "skyhighheroes:comic/comic_stelar_flash_suit.tx.json",
    "suit_lights": "skyhighheroes:comic/comic_stelar_flash_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:comic/comic_stelar_up_transer",
    "visualizer_down": "skyhighheroes:comic/comic_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:comic/comic_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:comic/comic_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:comic/comic_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:comic/comic_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:comic/comic_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:comic/comic_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:comic/comic_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:comic/comic_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:comic/comic_stelar_flash_bottom_cannon",
    "cannon_left": "skyhighheroes:comic/comic_stelar_flash_left_cannon",
    "cannon_right": "skyhighheroes:comic/comic_stelar_flash_right_cannon",
    "cannon_top": "skyhighheroes:comic/comic_stelar_flash_top_cannon",
    "cannon_front": "skyhighheroes:comic/comic_stelar_flash_front_cannon",
    "cannon_left_lights": "skyhighheroes:comic/omega_xis_comic_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:comic/omega_xis_comic_stelar_right_eyes",
    "transertx": "skyhighheroes:comic/comic_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:comic/comic_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:comic/comic_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:comic/comic_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_dragon",
    "transer_lights": "skyhighheroes:comic/comic_stelar_transer_lights",
    "blade": "skyhighheroes:comic/comic_stelar_blade",
    "hair": "skyhighheroes:comic/comic_stelar_hair",
    "shield": "skyhighheroes:comic/comic_stelar_shield",
    "katana": "skyhighheroes:comic/comic_stelar_katana",
    "katana_lights": "skyhighheroes:comic/comic_stelar_katana_lights",
    "scythe": "skyhighheroes:comic/comic_stelar_scythe",
    "scythe_lights": "skyhighheroes:comic/comic_stelar_scythe_lights",
    "rifle": "skyhighheroes:comic/comic_stelar_rifle",
    "rifle_lights": "skyhighheroes:comic/comic_stelar_rifle_lights"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}