extend("skyhighheroes:slayer_stelar");

loadTextures({
    "base": ("skyhighheroes:slayer/slayer_stelar_black_panther"),
    "lights": ("skyhighheroes:slayer/slayer_stelar_black_panther_lights"),
    "suit": ("skyhighheroes:slayer/slayer_stelar_black_panther_suit.tx.json"),
    "suit_lights": ("skyhighheroes:slayer/slayer_stelar_black_panther_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:slayer/slayer_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:slayer/slayer_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:slayer/slayer_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:slayer/slayer_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:slayer/slayer_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:slayer/slayer_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:slayer/slayer_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:slayer/slayer_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:slayer/slayer_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:slayer/slayer_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:slayer/slayer_stelar_black_panther_bottom_cannon"),
    "cannon_left": ("skyhighheroes:slayer/slayer_stelar_black_panther_left_cannon"),
    "cannon_right": ("skyhighheroes:slayer/slayer_stelar_black_panther_right_cannon"),
    "cannon_top": ("skyhighheroes:slayer/slayer_stelar_black_panther_top_cannon"),
    "cannon_front": ("skyhighheroes:slayer/slayer_stelar_black_panther_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:slayer/omega_xis_slayer_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:slayer/omega_xis_slayer_stelar_right_eyes"),
    "transertx": ("skyhighheroes:slayer/slayer_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:slayer/slayer_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:slayer/slayer_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:slayer/slayer_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:slayer/slayer_stelar_transer_lights"),
    "blade": ("skyhighheroes:slayer/slayer_stelar_blade"),
    "hair": ("skyhighheroes:slayer/slayer_stelar_hair"),
    "shield": ("skyhighheroes:slayer/slayer_stelar_shield"),
    "katana": ("skyhighheroes:slayer/slayer_stelar_katana"),
    "katana_lights": ("skyhighheroes:slayer/slayer_stelar_katana_lights"),
    "scythe": ("skyhighheroes:slayer/slayer_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:slayer/slayer_stelar_scythe_lights")
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}