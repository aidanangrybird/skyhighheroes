extend("skyhighheroes:ender_stelar");

loadTextures({
    "base": "skyhighheroes:ender/ender_stelar_dr_fate",
    "lights": "skyhighheroes:ender/ender_stelar_dr_fate_lights",
    "suit": "skyhighheroes:ender/ender_stelar_dr_fate_suit.tx.json",
    "suit_lights": "skyhighheroes:ender/ender_stelar_dr_fate_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:ender/ender_stelar_dr_fate_bottom_cannon",
    "cannon_left": "skyhighheroes:ender/ender_stelar_dr_fate_left_cannon",
    "cannon_right": "skyhighheroes:ender/ender_stelar_dr_fate_right_cannon",
    "cannon_top": "skyhighheroes:ender/ender_stelar_dr_fate_top_cannon",
    "cannon_front": "skyhighheroes:ender/ender_stelar_dr_fate_front_cannon",
    "shield": "skyhighheroes:ender/ender_stelar_dr_fate_shield",
    "katana": "skyhighheroes:ender/ender_stelar_dr_fate_katana",
    "scythe": "skyhighheroes:ender/ender_stelar_dr_fate_scythe",
    "rifle": "skyhighheroes:ender/ender_stelar_dr_fate_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}