extend("skyhighheroes:biscuit_stelar");

loadTextures({
    "base": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter",
    "lights": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_lights",
    "suit": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_suit.tx.json",
    "suit_lights": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_bottom_cannon",
    "cannon_left": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_left_cannon",
    "cannon_right": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_right_cannon",
    "cannon_top": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_top_cannon",
    "cannon_front": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_front_cannon",
    "shield": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_shield",
    "katana": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_katana",
    "scythe": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_scythe",
    "rifle": "skyhighheroes:biscuit/biscuit_stelar_martian_manhunter_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}