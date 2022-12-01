extend("skyhighheroes:tobi_stelar");

loadTextures({
    "base": "skyhighheroes:tobi/tobi_stelar_reverse_flash",
    "lights": "skyhighheroes:tobi/tobi_stelar_reverse_flash_lights",
    "suit": "skyhighheroes:tobi/tobi_stelar_reverse_flash_suit.tx.json",
    "suit_lights": "skyhighheroes:tobi/tobi_stelar_reverse_flash_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:tobi/tobi_stelar_reverse_flash_bottom_cannon",
    "cannon_left": "skyhighheroes:tobi/tobi_stelar_reverse_flash_left_cannon",
    "cannon_right": "skyhighheroes:tobi/tobi_stelar_reverse_flash_right_cannon",
    "cannon_top": "skyhighheroes:tobi/tobi_stelar_reverse_flash_top_cannon",
    "cannon_front": "skyhighheroes:tobi/tobi_stelar_reverse_flash_front_cannon",
    "shield": "skyhighheroes:tobi/tobi_stelar_reverse_flash_shield",
    "katana": "skyhighheroes:tobi/tobi_stelar_reverse_flash_katana",
    "scythe": "skyhighheroes:tobi/tobi_stelar_reverse_flash_scythe",
    "rifle": "skyhighheroes:tobi/tobi_stelar_reverse_flash_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}