extend("skyhighheroes:storm_stelar");

loadTextures({
    "base": "skyhighheroes:storm/storm_stelar_iron_man",
    "lights": "skyhighheroes:storm/storm_stelar_iron_man_lights",
    "suit": "skyhighheroes:storm/storm_stelar_iron_man_suit.tx.json",
    "suit_lights": "skyhighheroes:storm/storm_stelar_iron_man_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:storm/storm_stelar_iron_man_bottom_cannon",
    "cannon_left": "skyhighheroes:storm/storm_stelar_iron_man_left_cannon",
    "cannon_right": "skyhighheroes:storm/storm_stelar_iron_man_right_cannon",
    "cannon_top": "skyhighheroes:storm/storm_stelar_iron_man_top_cannon",
    "cannon_front": "skyhighheroes:storm/storm_stelar_iron_man_front_cannon",
    "shield": "skyhighheroes:storm/storm_stelar_iron_man_shield",
    "katana": "skyhighheroes:storm/storm_stelar_iron_man_katana",
    "scythe": "skyhighheroes:storm/storm_stelar_iron_man_scythe",
    "rifle": "skyhighheroes:storm/storm_stelar_iron_man_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}