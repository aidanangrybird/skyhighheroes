extend("skyhighheroes:dark_stelar");

loadTextures({
    "base": "skyhighheroes:dark/dark_stelar_batman",
    "lights": "skyhighheroes:dark/dark_stelar_batman_lights",
    "suit": "skyhighheroes:dark/dark_stelar_batman_suit.tx.json",
    "suit_lights": "skyhighheroes:dark/dark_stelar_batman_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:dark/dark_stelar_batman_bottom_cannon",
    "cannon_left": "skyhighheroes:dark/dark_stelar_batman_left_cannon",
    "cannon_right": "skyhighheroes:dark/dark_stelar_batman_right_cannon",
    "cannon_top": "skyhighheroes:dark/dark_stelar_batman_top_cannon",
    "cannon_front": "skyhighheroes:dark/dark_stelar_batman_front_cannon",
    "shield": "skyhighheroes:dark/dark_stelar_batman_shield",
    "katana": "skyhighheroes:dark/dark_stelar_batman_katana",
    "scythe": "skyhighheroes:dark/dark_stelar_batman_scythe",
    "rifle": "skyhighheroes:dark/dark_stelar_batman_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}