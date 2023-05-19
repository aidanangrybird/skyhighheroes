extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:ender/ender_stelar_base",
    "lights": "skyhighheroes:ender/ender_stelar_lights",
    "base_tx": "skyhighheroes:ender/ender_stelar_base.tx.json",
    "lights_tx": "skyhighheroes:ender/ender_stelar_lights.tx.json",
    "wave_change_lights": "skyhighheroes:ender/ender_stelar_wave_change_lights.tx.json",
    "visualizer_up": "skyhighheroes:ender/ender_stelar_up_transer",
    "visualizer_down": "skyhighheroes:ender/ender_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:ender/ender_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:ender/ender_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:ender/ender_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:ender/ender_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:ender/ender_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:ender/ender_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:ender/ender_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:ender/ender_stelar_down_lights",
    "visualizer_lights_tx": "skyhighheroes:ender/ender_stelar_visualizer_lights.tx.json",
    "omega_xis_bottom": "skyhighheroes:ender/ender_stelar_omega_xis_bottom",
    "omega_xis_bottom_lights": "skyhighheroes:ender/ender_stelar_omega_xis_bottom_lights",
    "omega_xis_left": "skyhighheroes:ender/ender_stelar_omega_xis_left",
    "omega_xis_left_lights": "skyhighheroes:ender/ender_stelar_omega_xis_left_lights",
    "omega_xis_right": "skyhighheroes:ender/ender_stelar_omega_xis_right",
    "omega_xis_right_lights": "skyhighheroes:ender/ender_stelar_omega_xis_right_lights",
    "omega_xis_top": "skyhighheroes:ender/ender_stelar_omega_xis_top",
    "omega_xis_top_lights": "skyhighheroes:ender/ender_stelar_omega_xis_top_lights",
    "omega_xis_front": "skyhighheroes:ender/ender_stelar_omega_xis_front",
    "transer_tx": "skyhighheroes:ender/ender_stelar_transer.tx.json",
    "short_tx": "skyhighheroes:ender/ender_stelar_short.tx.json",
    "swimsuit_tx": "skyhighheroes:ender/ender_stelar_swimsuit.tx.json",
    "normal_tx": "skyhighheroes:ender/ender_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_dragon",
    "transer_lights": "skyhighheroes:ender/ender_stelar_transer_lights",
    "blade": "skyhighheroes:ender/ender_stelar_blade",
    "shield": "skyhighheroes:ender/ender_stelar_shield",
    "shield_lights": "skyhighheroes:ender/ender_stelar_shield_lights",
    "katana": "skyhighheroes:ender/ender_stelar_katana",
    "katana_lights": "skyhighheroes:ender/ender_stelar_katana_lights",
    "scythe": "skyhighheroes:ender/ender_stelar_scythe",
    "scythe_lights": "skyhighheroes:ender/ender_stelar_scythe_lights",
    "rifle": "skyhighheroes:ender/ender_stelar_rifle",
    "rifle_lights": "skyhighheroes:ender/ender_stelar_rifle_lights"
});

function getColor() {
    return 0x00FFFF;
}

function getID() {
    return "4663f7f2-784c-467d-945c-4cc049f77d7c";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:ender_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
}