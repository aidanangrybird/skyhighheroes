extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:razor/razor_stelar_base",
    "lights": "skyhighheroes:razor/razor_stelar_lights",
    "base_tx": "skyhighheroes:razor/razor_stelar_base.tx.json",
    "lights_tx": "skyhighheroes:razor/razor_stelar_lights.tx.json",
    "wave_change_lights": "skyhighheroes:razor/razor_stelar_wave_change_lights.tx.json",
    "visualizer_up": "skyhighheroes:razor/razor_stelar_up_transer",
    "visualizer_down": "skyhighheroes:razor/razor_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:razor/razor_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:razor/razor_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:razor/razor_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:razor/razor_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:razor/razor_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:razor/razor_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:razor/razor_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:razor/razor_stelar_down_lights",
    "visualizer_lights_tx": "skyhighheroes:razor/razor_stelar_visualizer_lights.tx.json",
    "cannon_bottom": "skyhighheroes:razor/razor_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:razor/razor_stelar_left_cannon",
    "cannon_right": "skyhighheroes:razor/razor_stelar_right_cannon",
    "cannon_top": "skyhighheroes:razor/razor_stelar_top_cannon",
    "cannon_front": "skyhighheroes:razor/razor_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:razor/omega_xis_razor_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:razor/omega_xis_razor_stelar_right_eyes",
    "transer_tx": "skyhighheroes:razor/razor_stelar_transer.tx.json",
    "short_tx": "skyhighheroes:razor/razor_stelar_short.tx.json",
    "swimsuit_tx": "skyhighheroes:razor/razor_stelar_swimsuit.tx.json",
    "normal_tx": "skyhighheroes:razor/razor_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_leo",
    "transer_lights": "skyhighheroes:razor/razor_stelar_transer_lights",
    "blade": "skyhighheroes:razor/razor_stelar_blade",
    "shield": "skyhighheroes:razor/razor_stelar_shield",
    "shield_lights": "skyhighheroes:razor/razor_stelar_shield_lights",
    "katana": "skyhighheroes:razor/razor_stelar_katana",
    "katana_lights": "skyhighheroes:razor/razor_stelar_katana_lights",
    "scythe": "skyhighheroes:razor/razor_stelar_scythe",
    "scythe_lights": "skyhighheroes:razor/razor_stelar_scythe_lights",
    "rifle": "skyhighheroes:razor/razor_stelar_rifle",
    "rifle_lights": "skyhighheroes:razor/razor_stelar_rifle_lights"
});

function getColor() {
    return 0x0000FF;
}

function getID() {
    return "de01ddcc-7dc8-437e-bf08-3f8bf11086dc";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcon("CHESTPLATE", "leo_transer");
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:razor_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
}