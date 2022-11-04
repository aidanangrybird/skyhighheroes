extend("skyhighheroes:base_stelar");

loadTextures({
    "base": ("skyhighheroes:fire/fire_stelar"),
    "lights": ("skyhighheroes:fire/fire_stelar_lights"),
    "suit": ("skyhighheroes:fire/fire_stelar_suit.tx.json"),
    "suit_lights": ("skyhighheroes:fire/fire_stelar_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:fire/fire_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:fire/fire_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:fire/fire_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:fire/fire_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:fire/fire_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:fire/fire_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:fire/fire_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:fire/fire_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:fire/fire_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:fire/fire_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:fire/fire_stelar_bottom_cannon"),
    "cannon_left": ("skyhighheroes:fire/fire_stelar_left_cannon"),
    "cannon_right": ("skyhighheroes:fire/fire_stelar_right_cannon"),
    "cannon_top": ("skyhighheroes:fire/fire_stelar_top_cannon"),
    "cannon_front": ("skyhighheroes:fire/fire_stelar_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:fire/omega_xis_fire_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:fire/omega_xis_fire_stelar_right_eyes"),
    "transertx": ("skyhighheroes:fire/fire_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:fire/fire_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:fire/fire_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:fire/fire_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:fire/fire_stelar_transer_lights"),
    "blade": ("skyhighheroes:fire/fire_stelar_blade"),
    "hair": ("skyhighheroes:fire/fire_stelar_hair"),
    "shield": ("skyhighheroes:fire/fire_stelar_shield"),
    "katana": ("skyhighheroes:fire/fire_stelar_katana"),
    "katana_lights": ("skyhighheroes:fire/fire_stelar_katana_lights"),
    "scythe": ("skyhighheroes:fire/fire_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:fire/fire_stelar_scythe_lights")
});

function getCLR() {
    return 0x0000FF;
}

function getID() {
    return "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}

var thing = implement("skyhighheroes:external/thing");

function initEffects(renderer) {
    parent.initEffects(renderer);
    thing.bindTrail(renderer, "skyhighheroes:fire_stelar_flight");
}