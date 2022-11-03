extend("skyhighheroes:base_stelar");

loadTextures({
    "base": ("skyhighheroes:storm/storm_stelar"),
    "lights": ("skyhighheroes:storm/storm_stelar_lights"),
    "suit": ("skyhighheroes:storm/storm_stelar_suit.tx.json"),
    "suit_lights": ("skyhighheroes:storm/storm_stelar_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:storm/storm_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:storm/storm_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:storm/storm_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:storm/storm_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:storm/storm_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:storm/storm_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:storm/storm_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:storm/storm_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:storm/storm_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:storm/storm_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:storm/storm_stelar_bottom_cannon"),
    "cannon_left": ("skyhighheroes:storm/storm_stelar_left_cannon"),
    "cannon_right": ("skyhighheroes:storm/storm_stelar_right_cannon"),
    "cannon_top": ("skyhighheroes:storm/storm_stelar_top_cannon"),
    "cannon_front": ("skyhighheroes:storm/storm_stelar_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:storm/omega_xis_storm_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:storm/omega_xis_storm_stelar_right_eyes"),
    "transertx": ("skyhighheroes:storm/storm_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:storm/storm_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:storm/storm_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:storm/storm_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_leo"),
    "transer_lights": ("skyhighheroes:storm/storm_stelar_transer_lights"),
    "blade": ("skyhighheroes:storm/storm_stelar_blade"),
    "hair": ("skyhighheroes:storm/storm_stelar_hair"),
    "shield": ("skyhighheroes:storm/storm_stelar_shield"),
    "katana": ("skyhighheroes:storm/storm_stelar_katana"),
    "katana_lights": ("skyhighheroes:storm/storm_stelar_katana_lights"),
    "scythe": ("skyhighheroes:storm/storm_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:storm/storm_stelar_scythe_lights")
});

function getCLR() {
    return 0xFF0000;
}

function getID() {
    return "0bafb632-bb1b-4c49-bb35-b23d3285f615";
}

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("leo_transer");
}