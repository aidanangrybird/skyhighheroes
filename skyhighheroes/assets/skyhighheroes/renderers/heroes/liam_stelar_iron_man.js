extend("skyhighheroes:liam_stelar");

loadTextures({
    "base": "skyhighheroes:liam/liam_stelar_iron_man_base",
    "lights": "skyhighheroes:liam/liam_stelar_iron_man_lights",
    "base_tx": "skyhighheroes:liam/liam_stelar_iron_man_base.tx.json",
    "lights_tx": "skyhighheroes:liam/liam_stelar_iron_man_lights.tx.json",
    "wave_change_lights": "skyhighheroes:liam/liam_stelar_iron_man_wave_change_lights.tx.json",
    "cannon_bottom": "skyhighheroes:liam/liam_stelar_iron_man_bottom_cannon",
    "cannon_left": "skyhighheroes:liam/liam_stelar_iron_man_left_cannon",
    "cannon_right": "skyhighheroes:liam/liam_stelar_iron_man_right_cannon",
    "cannon_top": "skyhighheroes:liam/liam_stelar_iron_man_top_cannon",
    "cannon_front": "skyhighheroes:liam/liam_stelar_iron_man_front_cannon",
    "shield": "skyhighheroes:liam/liam_stelar_iron_man_shield",
    "katana": "skyhighheroes:liam/liam_stelar_iron_man_katana",
    "scythe": "skyhighheroes:liam/liam_stelar_iron_man_scythe",
    "rifle": "skyhighheroes:liam/liam_stelar_iron_man_rifle"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "leo_transer");
}