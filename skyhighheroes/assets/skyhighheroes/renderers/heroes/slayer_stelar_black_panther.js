extend("skyhighheroes:slayer_stelar");

loadTextures({
    "base": "skyhighheroes:slayer/slayer_stelar_black_panther",
    "lights": "skyhighheroes:slayer/slayer_stelar_black_panther_lights",
    "suit": "skyhighheroes:slayer/slayer_stelar_black_panther_suit.tx.json",
    "suit_lights": "skyhighheroes:slayer/slayer_stelar_black_panther_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:slayer/slayer_stelar_black_panther_bottom_cannon",
    "cannon_left": "skyhighheroes:slayer/slayer_stelar_black_panther_left_cannon",
    "cannon_right": "skyhighheroes:slayer/slayer_stelar_black_panther_right_cannon",
    "cannon_top": "skyhighheroes:slayer/slayer_stelar_black_panther_top_cannon",
    "cannon_front": "skyhighheroes:slayer/slayer_stelar_black_panther_front_cannon",
    "shield": "skyhighheroes:slayer/slayer_stelar_black_panther_shield",
    "katana": "skyhighheroes:slayer/slayer_stelar_black_panther_katana",
    "scythe": "skyhighheroes:slayer/slayer_stelar_black_panther_scythe",
    "rifle": "skyhighheroes:slayer/slayer_stelar_black_panther_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}