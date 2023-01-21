extend("skyhighheroes:chase_stelar");

loadTextures({
    "base": "skyhighheroes:chase/chase_stelar_iron_man",
    "lights": "skyhighheroes:chase/chase_stelar_iron_man_lights",
    "suit": "skyhighheroes:chase/chase_stelar_iron_man_suit.tx.json",
    "suit_lights": "skyhighheroes:chase/chase_stelar_iron_man_suit_lights.tx.json",
    "visualizer_up_lights": "skyhighheroes:chase/chase_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:chase/chase_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:chase/chase_stelar_iron_man_bottom_cannon",
    "cannon_left": "skyhighheroes:chase/chase_stelar_iron_man_left_cannon",
    "cannon_right": "skyhighheroes:chase/chase_stelar_iron_man_right_cannon",
    "cannon_top": "skyhighheroes:chase/chase_stelar_iron_man_top_cannon",
    "cannon_front": "skyhighheroes:chase/chase_stelar_iron_man_front_cannon",
    "shield": "skyhighheroes:chase/chase_stelar_iron_man_shield",
    "katana": "skyhighheroes:chase/chase_stelar_iron_man_katana",
    "scythe": "skyhighheroes:chase/chase_stelar_iron_man_scythe",
    "rifle": "skyhighheroes:chase/chase_stelar_iron_man_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "leo_transer");
}