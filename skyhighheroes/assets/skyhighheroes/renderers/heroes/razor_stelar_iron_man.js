extend("skyhighheroes:razor_stelar");

loadTextures({
    "base": "skyhighheroes:razor/razor_stelar_iron_man",
    "lights": "skyhighheroes:razor/razor_stelar_iron_man_lights",
    "suit": "skyhighheroes:razor/razor_stelar_iron_man_suit.tx.json",
    "suit_lights": "skyhighheroes:razor/razor_stelar_iron_man_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:razor/razor_stelar_iron_man_bottom_cannon",
    "cannon_left": "skyhighheroes:razor/razor_stelar_iron_man_left_cannon",
    "cannon_right": "skyhighheroes:razor/razor_stelar_iron_man_right_cannon",
    "cannon_top": "skyhighheroes:razor/razor_stelar_iron_man_top_cannon",
    "cannon_front": "skyhighheroes:razor/razor_stelar_iron_man_front_cannon",
    "shield": "skyhighheroes:razor/razor_stelar_iron_man_shield",
    "katana": "skyhighheroes:razor/razor_stelar_iron_man_katana",
    "scythe": "skyhighheroes:razor/razor_stelar_iron_man_scythe",
    "rifle": "skyhighheroes:razor/razor_stelar_iron_man_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}