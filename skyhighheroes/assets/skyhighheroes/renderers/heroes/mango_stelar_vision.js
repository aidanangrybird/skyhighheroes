extend("skyhighheroes:dark_stelar");

loadTextures({
    "base": "skyhighheroes:mango/dark_stelar_vision",
    "lights": "skyhighheroes:mango/dark_stelar_vision_lights",
    "suit": "skyhighheroes:mango/dark_stelar_vision_suit.tx.json",
    "suit_lights": "skyhighheroes:mango/dark_stelar_vision_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:mango/dark_stelar_vision_bottom_cannon",
    "cannon_left": "skyhighheroes:mango/dark_stelar_vision_left_cannon",
    "cannon_right": "skyhighheroes:mango/dark_stelar_vision_right_cannon",
    "cannon_top": "skyhighheroes:mango/dark_stelar_vision_top_cannon",
    "cannon_front": "skyhighheroes:mango/dark_stelar_vision_front_cannon"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}