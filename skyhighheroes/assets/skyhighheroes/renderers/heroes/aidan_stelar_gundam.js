extend("skyhighheroes:aidan_stelar");

loadTextures({
    "base": "skyhighheroes:aidan/aidan_stelar_gundam",
    "lights": "skyhighheroes:aidan/aidan_stelar_gundam_lights",
    "suit": "skyhighheroes:aidan/aidan_stelar_gundam_suit.tx.json",
    "suit_lights": "skyhighheroes:aidan/aidan_stelar_gundam_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:aidan/aidan_stelar_up_transer",
    "cannon_bottom": "skyhighheroes:aidan/aidan_stelar_gundam_bottom_cannon",
    "cannon_left": "skyhighheroes:aidan/aidan_stelar_gundam_left_cannon",
    "cannon_right": "skyhighheroes:aidan/aidan_stelar_gundam_right_cannon",
    "cannon_top": "skyhighheroes:aidan/aidan_stelar_gundam_top_cannon",
    "cannon_front": "skyhighheroes:aidan/aidan_stelar_gundam_front_cannon"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}