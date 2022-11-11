extend("skyhighheroes:tysen_stelar");

loadTextures({
    "base": "skyhighheroes:tysen/tysen_stelar_martian_manhunter",
    "lights": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_lights",
    "suit": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_suit.tx.json",
    "suit_lights": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_bottom_cannon",
    "cannon_left": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_left_cannon",
    "cannon_right": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_right_cannon",
    "cannon_top": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_top_cannon",
    "cannon_front": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_front_cannon",
    "cannon_left_lights": "skyhighheroes:tysen/omega_xis_tysen_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:tysen/omega_xis_tysen_stelar_right_eyes"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}