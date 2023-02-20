extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:secret/secret_stelar",
    "lights": "skyhighheroes:secret/secret_stelar_lights",
    "suit": "skyhighheroes:secret/secret_stelar_suit.tx.json",
    "suit_lights": "skyhighheroes:secret/secret_stelar_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:secret/secret_stelar_up_transer",
    "visualizer_down": "skyhighheroes:secret/secret_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:secret/secret_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:secret/secret_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:secret/secret_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:secret/secret_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:secret/secret_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:secret/secret_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:secret/secret_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:secret/secret_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:secret/secret_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:secret/secret_stelar_left_cannon",
    "cannon_right": "skyhighheroes:secret/secret_stelar_right_cannon",
    "cannon_top": "skyhighheroes:secret/secret_stelar_top_cannon",
    "cannon_front": "skyhighheroes:secret/secret_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:secret/omega_xis_secret_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:secret/omega_xis_secret_stelar_right_eyes",
    "transertx": "skyhighheroes:secret/secret_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:secret/secret_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:secret/secret_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:secret/secret_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_dragon",
    "transer_lights": "skyhighheroes:secret/secret_stelar_transer_lights",
    "blade": "skyhighheroes:secret/secret_stelar_blade",
    "shield": "skyhighheroes:secret/secret_stelar_shield",
    "shield_lights": "skyhighheroes:secret/secret_stelar_shield_lights",
    "katana": "skyhighheroes:secret/secret_stelar_katana",
    "katana_lights": "skyhighheroes:secret/secret_stelar_katana_lights",
    "scythe": "skyhighheroes:secret/secret_stelar_scythe",
    "scythe_lights": "skyhighheroes:secret/secret_stelar_scythe_lights",
    "rifle": "skyhighheroes:secret/secret_stelar_rifle",
    "rifle_lights": "skyhighheroes:secret/secret_stelar_rifle_lights"
});

function getColor() {
    return 0xFF0000;
}

function getID() {
    return "68963b64-70c9-447f-b499-ff9eb938e520";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:secret_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
}