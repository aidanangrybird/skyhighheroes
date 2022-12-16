extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:fish/fish_stelar",
    "lights": "skyhighheroes:fish/fish_stelar_lights",
    "suit": "skyhighheroes:fish/fish_stelar_suit.tx.json",
    "suit_lights": "skyhighheroes:fish/fish_stelar_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:fish/fish_stelar_up_transer",
    "visualizer_down": "skyhighheroes:fish/fish_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:fish/fish_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:fish/fish_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:fish/fish_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:fish/fish_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:fish/fish_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:fish/fish_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:fish/fish_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:fish/fish_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:fish/fish_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:fish/fish_stelar_left_cannon",
    "cannon_right": "skyhighheroes:fish/fish_stelar_right_cannon",
    "cannon_top": "skyhighheroes:fish/fish_stelar_top_cannon",
    "cannon_front": "skyhighheroes:fish/fish_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:fish/omega_xis_fish_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:fish/omega_xis_fish_stelar_right_eyes",
    "transertx": "skyhighheroes:fish/fish_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:fish/fish_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:fish/fish_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:fish/fish_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_dragon",
    "transer_lights": "skyhighheroes:fish/fish_stelar_transer_lights",
    "blade": "skyhighheroes:fish/fish_stelar_blade",
    "hair": "skyhighheroes:fish/fish_stelar_hair",
    "shield": "skyhighheroes:fish/fish_stelar_shield",
    "katana": "skyhighheroes:fish/fish_stelar_katana",
    "katana_lights": "skyhighheroes:fish/fish_stelar_katana_lights",
    "scythe": "skyhighheroes:fish/fish_stelar_scythe",
    "scythe_lights": "skyhighheroes:fish/fish_stelar_scythe_lights",
    "rifle": "skyhighheroes:fish/fish_stelar_rifle",
    "rifle_lights": "skyhighheroes:fish/fish_stelar_rifle_lights"
});

function getCLR() {
    return 0xAA00FF;
}

function getID() {
    return "226d4e9e-8665-4afc-9d4b-9e85bbecc039";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:fish_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
}