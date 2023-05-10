extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:yellow/yellow_stelar_base",
    "lights": "skyhighheroes:yellow/yellow_stelar_lights",
    "base_tx": "skyhighheroes:yellow/yellow_stelar_base.tx.json",
    "lights_tx": "skyhighheroes:yellow/yellow_stelar_lights.tx.json",
    "wave_change_lights": "skyhighheroes:yellow/yellow_stelar_wave_change_lights.tx.json",
    "visualizer_up": "skyhighheroes:yellow/yellow_stelar_up_transer",
    "visualizer_down": "skyhighheroes:yellow/yellow_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:yellow/yellow_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:yellow/yellow_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:yellow/yellow_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:yellow/yellow_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:yellow/yellow_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:yellow/yellow_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:yellow/yellow_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:yellow/yellow_stelar_down_lights",
    "visualizer_lights_tx": "skyhighheroes:yellow/yellow_stelar_visualizer_lights.tx.json",
    "cannon_bottom": "skyhighheroes:yellow/yellow_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:yellow/yellow_stelar_left_cannon",
    "cannon_right": "skyhighheroes:yellow/yellow_stelar_right_cannon",
    "cannon_top": "skyhighheroes:yellow/yellow_stelar_top_cannon",
    "cannon_front": "skyhighheroes:yellow/yellow_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:yellow/omega_xis_yellow_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:yellow/omega_xis_yellow_stelar_right_eyes",
    "transer_tx": "skyhighheroes:yellow/yellow_stelar_transer.tx.json",
    "short_tx": "skyhighheroes:yellow/yellow_stelar_short.tx.json",
    "swimsuit_tx": "skyhighheroes:yellow/yellow_stelar_swimsuit.tx.json",
    "normal_tx": "skyhighheroes:yellow/yellow_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_leo",
    "transer_lights": "skyhighheroes:yellow/yellow_stelar_transer_lights",
    "blade": "skyhighheroes:yellow/yellow_stelar_blade",
    "shield": "skyhighheroes:yellow/yellow_stelar_shield",
    "shield_lights": "skyhighheroes:yellow/yellow_stelar_shield_lights",
    "katana": "skyhighheroes:yellow/yellow_stelar_katana",
    "katana_lights": "skyhighheroes:yellow/yellow_stelar_katana_lights",
    "scythe": "skyhighheroes:yellow/yellow_stelar_scythe",
    "scythe_lights": "skyhighheroes:yellow/yellow_stelar_scythe_lights",
    "rifle": "skyhighheroes:yellow/yellow_stelar_rifle",
    "rifle_lights": "skyhighheroes:yellow/yellow_stelar_rifle_lights"
});

function getColor() {
    return 0x00FFFF;
}

function getID() {
    return "60f30003-1148-416b-8b4d-347002891126";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcon("CHESTPLATE", "leo_transer");
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:yellow_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
}