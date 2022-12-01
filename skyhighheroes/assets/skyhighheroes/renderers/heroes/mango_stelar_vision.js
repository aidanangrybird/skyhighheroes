extend("skyhighheroes:mango_stelar");

loadTextures({
    "base": "skyhighheroes:mango/mango_stelar_vision",
    "lights": "skyhighheroes:mango/mango_stelar_vision_lights",
    "suit": "skyhighheroes:mango/mango_stelar_vision_suit.tx.json",
    "suit_lights": "skyhighheroes:mango/mango_stelar_vision_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:mango/mango_stelar_vision_bottom_cannon",
    "cannon_left": "skyhighheroes:mango/mango_stelar_vision_left_cannon",
    "cannon_right": "skyhighheroes:mango/mango_stelar_vision_right_cannon",
    "cannon_top": "skyhighheroes:mango/mango_stelar_vision_top_cannon",
    "cannon_front": "skyhighheroes:mango/mango_stelar_vision_front_cannon",
    "shield": "skyhighheroes:mango/mango_stelar_vision_shield",
    "katana": "skyhighheroes:mango/mango_stelar_vision_katana",
    "scythe": "skyhighheroes:mango/mango_stelar_vision_scythe",
    "rifle": "skyhighheroes:mango/mango_stelar_vision_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}