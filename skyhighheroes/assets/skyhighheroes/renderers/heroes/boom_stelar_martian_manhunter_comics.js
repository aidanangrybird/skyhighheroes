extend("skyhighheroes:boom_stelar");

loadTextures({
    "base": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics",
    "lights": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_lights",
    "suit": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_suit.tx.json",
    "suit_lights": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_bottom_cannon",
    "cannon_left": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_left_cannon",
    "cannon_right": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_right_cannon",
    "cannon_top": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_top_cannon",
    "cannon_front": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_front_cannon",
    "shield": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_shield",
    "katana": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_katana",
    "scythe": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_scythe",
    "rifle": "skyhighheroes:boom/boom_stelar_martian_manhunter_comics_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}