extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:biscuit/biscuit_stelar",
    "lights": "skyhighheroes:biscuit/biscuit_stelar_lights",
    "suit": "skyhighheroes:biscuit/biscuit_stelar_suit.tx.json",
    "suit_lights": "skyhighheroes:biscuit/biscuit_stelar_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:biscuit/biscuit_stelar_up_transer",
    "visualizer_down": "skyhighheroes:biscuit/biscuit_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:biscuit/biscuit_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:biscuit/biscuit_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:biscuit/biscuit_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:biscuit/biscuit_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:biscuit/biscuit_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:biscuit/biscuit_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:biscuit/biscuit_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:biscuit/biscuit_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:biscuit/biscuit_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:biscuit/biscuit_stelar_left_cannon",
    "cannon_right": "skyhighheroes:biscuit/biscuit_stelar_right_cannon",
    "cannon_top": "skyhighheroes:biscuit/biscuit_stelar_top_cannon",
    "cannon_front": "skyhighheroes:biscuit/biscuit_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:biscuit/omega_xis_biscuit_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:biscuit/omega_xis_biscuit_stelar_right_eyes",
    "transertx": "skyhighheroes:biscuit/biscuit_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:biscuit/biscuit_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:biscuit/biscuit_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:biscuit/biscuit_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_pegasus",
    "transer_lights": "skyhighheroes:biscuit/biscuit_stelar_transer_lights",
    "blade": "skyhighheroes:biscuit/biscuit_stelar_blade",
    "shield": "skyhighheroes:biscuit/biscuit_stelar_shield",
    "shield_lights": "skyhighheroes:biscuit/biscuit_stelar_shield_lights",
    "katana": "skyhighheroes:biscuit/biscuit_stelar_katana",
    "katana_lights": "skyhighheroes:biscuit/biscuit_stelar_katana_lights",
    "scythe": "skyhighheroes:biscuit/biscuit_stelar_scythe",
    "scythe_lights": "skyhighheroes:biscuit/biscuit_stelar_scythe_lights",
    "rifle": "skyhighheroes:biscuit/biscuit_stelar_rifle",
    "rifle_lights": "skyhighheroes:biscuit/biscuit_stelar_rifle_lights"
});

function getColor() {
    return 0xFF0000;
}

function getID() {
    return "324ccf33-d7b4-4cd5-b85f-d8f16a8cb862";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:biscuit_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
}