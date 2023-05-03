extend("skyhighheroes:aidan_stelar");

loadTextures({
    "base": "skyhighheroes:aidan/aidan_stelar_gundam_base",
    "lights": "skyhighheroes:aidan/aidan_stelar_gundam_lights",
    "base_tx": "skyhighheroes:aidan/aidan_stelar_gundam_base.tx.json",
    "lights_tx": "skyhighheroes:aidan/aidan_stelar_gundam_lights.tx.json",
    "wave_change_lights": "skyhighheroes:aidan/aidan_stelar_gundam_wave_change_lights.tx.json",
    "cannon_bottom": "skyhighheroes:aidan/aidan_stelar_gundam_bottom_cannon",
    "cannon_left": "skyhighheroes:aidan/aidan_stelar_gundam_left_cannon",
    "cannon_right": "skyhighheroes:aidan/aidan_stelar_gundam_right_cannon",
    "cannon_top": "skyhighheroes:aidan/aidan_stelar_gundam_top_cannon",
    "cannon_front": "skyhighheroes:aidan/aidan_stelar_gundam_front_cannon",
    "shield": "skyhighheroes:aidan/aidan_stelar_gundam_shield",
    "katana": "skyhighheroes:aidan/aidan_stelar_gundam_katana",
    "scythe": "skyhighheroes:aidan/aidan_stelar_gundam_scythe",
    "rifle": "skyhighheroes:aidan/aidan_stelar_gundam_rifle"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}