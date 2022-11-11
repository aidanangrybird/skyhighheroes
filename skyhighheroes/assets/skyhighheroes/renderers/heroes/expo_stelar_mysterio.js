extend("skyhighheroes:expo_stelar");

loadTextures({
    "base": "skyhighheroes:expo/expo_stelar_mysterio",
    "lights": "skyhighheroes:expo/expo_stelar_mysterio_lights",
    "suit": "skyhighheroes:expo/expo_stelar_mysterio_suit.tx.json",
    "suit_lights": "skyhighheroes:expo/expo_stelar_mysterio_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:expo/expo_stelar_mysterio_bottom_cannon",
    "cannon_left": "skyhighheroes:expo/expo_stelar_mysterio_left_cannon",
    "cannon_right": "skyhighheroes:expo/expo_stelar_mysterio_right_cannon",
    "cannon_top": "skyhighheroes:expo/expo_stelar_mysterio_top_cannon",
    "cannon_front": "skyhighheroes:expo/expo_stelar_mysterio_front_cannon"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}