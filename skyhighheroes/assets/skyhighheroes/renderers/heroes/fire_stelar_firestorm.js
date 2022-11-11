extend("skyhighheroes:fire_stelar");

loadTextures({
    "base": "skyhighheroes:fire/fire_stelar_firestorm",
    "lights": "skyhighheroes:fire/fire_stelar_firestorm_lights",
    "suit": "skyhighheroes:fire/fire_stelar_firestorm_suit.tx.json",
    "suit_lights": "skyhighheroes:fire/fire_stelar_firestorm_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:fire/fire_stelar_firestorm_bottom_cannon",
    "cannon_left": "skyhighheroes:fire/fire_stelar_firestorm_left_cannon",
    "cannon_right": "skyhighheroes:fire/fire_stelar_firestorm_right_cannon",
    "cannon_top": "skyhighheroes:fire/fire_stelar_firestorm_top_cannon",
    "cannon_front": "skyhighheroes:fire/fire_stelar_firestorm_front_cannon"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}