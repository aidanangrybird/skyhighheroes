extend("skyhighheroes:base_stelar");

loadTextures({
    "base": ("skyhighheroes:tysen/tysen_stelar"),
    "lights": ("skyhighheroes:tysen/tysen_stelar_lights"),
    "suit": ("skyhighheroes:tysen/tysen_stelar_suit.tx.json"),
    "suit_lights": ("skyhighheroes:tysen/tysen_stelar_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:tysen/tysen_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:tysen/tysen_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:tysen/tysen_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:tysen/tysen_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:tysen/tysen_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:tysen/tysen_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:tysen/tysen_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:tysen/tysen_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:tysen/tysen_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:tysen/tysen_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:tysen/tysen_stelar_bottom_cannon"),
    "cannon_left": ("skyhighheroes:tysen/tysen_stelar_left_cannon"),
    "cannon_right": ("skyhighheroes:tysen/tysen_stelar_right_cannon"),
    "cannon_top": ("skyhighheroes:tysen/tysen_stelar_top_cannon"),
    "cannon_front": ("skyhighheroes:tysen/tysen_stelar_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:tysen/omega_xis_tysen_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:tysen/omega_xis_tysen_stelar_right_eyes"),
    "transertx": ("skyhighheroes:tysen/tysen_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:tysen/tysen_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:tysen/tysen_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:tysen/tysen_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_dragon"),
    "transer_lights": ("skyhighheroes:tysen/tysen_stelar_transer_lights"),
    "blade": ("skyhighheroes:tysen/tysen_stelar_blade"),
    "hair": ("skyhighheroes:tysen/tysen_stelar_hair"),
    "shield": ("skyhighheroes:tysen/tysen_stelar_shield"),
    "katana": ("skyhighheroes:tysen/tysen_stelar_katana"),
    "katana_lights": ("skyhighheroes:tysen/tysen_stelar_katana_lights"),
    "scythe": ("skyhighheroes:tysen/tysen_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:tysen/tysen_stelar_scythe_lights")
});

function getCLR() {
    return 0xAA00FF;
}

function getID() {
    return "0ccdd53f-70bc-4039-b89b-fd3781f746f2";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}

var thing = implement("skyhighheroes:external/thing");

function initEffects(renderer) {
    parent.initEffects(renderer);
    thing.bindTrail(renderer, "skyhighheroes:tysen_stelar_flight");
}