extend("skyhighheroes:dark_stelar");

loadTextures({
    "base": ("skyhighheroes:dark/dark_stelar_batman"),
    "lights": ("skyhighheroes:dark/dark_stelar_batman_lights"),
    "suit": ("skyhighheroes:dark/dark_stelar_batman_suit.tx.json"),
    "suit_lights": ("skyhighheroes:dark/dark_stelar_batman_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:dark/dark_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:dark/dark_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:dark/dark_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:dark/dark_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:dark/dark_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:dark/dark_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:dark/dark_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:dark/dark_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:dark/dark_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:dark/dark_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:dark/dark_stelar_batman_bottom_cannon"),
    "cannon_left": ("skyhighheroes:dark/dark_stelar_batman_left_cannon"),
    "cannon_right": ("skyhighheroes:dark/dark_stelar_batman_right_cannon"),
    "cannon_top": ("skyhighheroes:dark/dark_stelar_batman_top_cannon"),
    "cannon_front": ("skyhighheroes:dark/dark_stelar_batman_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:dark/omega_xis_dark_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:dark/omega_xis_dark_stelar_right_eyes"),
    "transertx": ("skyhighheroes:dark/dark_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:dark/dark_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:dark/dark_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:dark/dark_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:dark/dark_stelar_transer_lights"),
    "blade": ("skyhighheroes:dark/dark_stelar_blade"),
    "hair": ("skyhighheroes:dark/dark_stelar_hair"),
    "shield": ("skyhighheroes:dark/dark_stelar_shield"),
    "katana": ("skyhighheroes:dark/dark_stelar_katana"),
    "katana_lights": ("skyhighheroes:dark/dark_stelar_katana_lights"),
    "scythe": ("skyhighheroes:dark/dark_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:dark/dark_stelar_scythe_lights")
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}