extend("skyhighheroes:comic_stelar");

loadTextures({
    "base": "skyhighheroes:comic/comic_stelar_flash",
    "lights": "skyhighheroes:comic/comic_stelar_flash_lights",
    "suit": "skyhighheroes:comic/comic_stelar_flash_suit.tx.json",
    "suit_lights": "skyhighheroes:comic/comic_stelar_flash_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:comic/comic_stelar_flash_bottom_cannon",
    "cannon_left": "skyhighheroes:comic/comic_stelar_flash_left_cannon",
    "cannon_right": "skyhighheroes:comic/comic_stelar_flash_right_cannon",
    "cannon_top": "skyhighheroes:comic/comic_stelar_flash_top_cannon",
    "cannon_front": "skyhighheroes:comic/comic_stelar_flash_front_cannon",
    "shield": "skyhighheroes:comic/comic_stelar_flash_shield",
    "katana": "skyhighheroes:comic/comic_stelar_flash_katana",
    "scythe": "skyhighheroes:comic/comic_stelar_flash_scythe",
    "rifle": "skyhighheroes:comic/comic_stelar_flash_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}