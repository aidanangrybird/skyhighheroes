extend("skyhighheroes:aidan_stelar");

loadTextures({
    "base": ("skyhighheroes:aidan/aidan_stelar_gundam"),
    "lights": ("skyhighheroes:aidan/aidan_stelar_gundam_lights"),
    "suit": ("skyhighheroes:aidan/aidan_stelar_gundam_suit.tx.json"),
    "suit_lights": ("skyhighheroes:aidan/aidan_stelar_gundam_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:aidan/aidan_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:aidan/aidan_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:aidan/aidan_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:aidan/aidan_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:aidan/aidan_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:aidan/aidan_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:aidan/aidan_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:aidan/aidan_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:aidan/aidan_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:aidan/aidan_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:aidan/aidan_stelar_gundam_bottom_cannon"),
    "cannon_left": ("skyhighheroes:aidan/aidan_stelar_gundam_left_cannon"),
    "cannon_right": ("skyhighheroes:aidan/aidan_stelar_gundam_right_cannon"),
    "cannon_top": ("skyhighheroes:aidan/aidan_stelar_gundam_top_cannon"),
    "cannon_front": ("skyhighheroes:aidan/aidan_stelar_gundam_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:aidan/omega_xis_aidan_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:aidan/omega_xis_aidan_stelar_right_eyes"),
    "transertx": ("skyhighheroes:aidan/aidan_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:aidan/aidan_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:aidan/aidan_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:aidan/aidan_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:aidan/aidan_stelar_transer_lights"),
    "blade": ("skyhighheroes:aidan/aidan_stelar_blade"),
    "hair": ("skyhighheroes:aidan/aidan_stelar_hair"),
    "shield": ("skyhighheroes:aidan/aidan_stelar_shield"),
    "katana": ("skyhighheroes:aidan/aidan_stelar_katana"),
    "katana_lights": ("skyhighheroes:aidan/aidan_stelar_katana_lights"),
    "scythe": ("skyhighheroes:aidan/aidan_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:aidan/aidan_stelar_scythe_lights")
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}