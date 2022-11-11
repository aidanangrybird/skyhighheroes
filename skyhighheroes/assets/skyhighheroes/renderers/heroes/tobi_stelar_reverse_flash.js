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
    "cannon_left_lights": "skyhighheroes:tobi/omega_xis_tobi_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:tobi/omega_xis_tobi_stelar_right_eyes"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}