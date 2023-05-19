extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:sym/sym_stelar_base",
    "lights": "skyhighheroes:sym/sym_stelar_lights",
    "base_tx": "skyhighheroes:sym/sym_stelar_base.tx.json",
    "lights_tx": "skyhighheroes:sym/sym_stelar_lights.tx.json",
    "wave_change_lights": "skyhighheroes:sym/sym_stelar_wave_change_lights.tx.json",
    "visualizer_up": "skyhighheroes:sym/sym_stelar_up_transer",
    "visualizer_down": "skyhighheroes:sym/sym_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:sym/sym_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:sym/sym_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:sym/sym_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:sym/sym_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:sym/sym_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:sym/sym_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:sym/sym_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:sym/sym_stelar_down_lights",
    "visualizer_lights_tx": "skyhighheroes:sym/sym_stelar_visualizer_lights.tx.json",
    "omega_xis_bottom": "skyhighheroes:sym/sym_stelar_omega_xis_bottom",
    "omega_xis_bottom_lights": "skyhighheroes:sym/sym_stelar_omega_xis_bottom_lights",
    "omega_xis_left": "skyhighheroes:sym/sym_stelar_omega_xis_left",
    "omega_xis_left_lights": "skyhighheroes:sym/sym_stelar_omega_xis_left_lights",
    "omega_xis_right": "skyhighheroes:sym/sym_stelar_omega_xis_right",
    "omega_xis_right_lights": "skyhighheroes:sym/sym_stelar_omega_xis_right_lights",
    "omega_xis_top": "skyhighheroes:sym/sym_stelar_omega_xis_top",
    "omega_xis_top_lights": "skyhighheroes:sym/sym_stelar_omega_xis_top_lights",
    "omega_xis_front": "skyhighheroes:sym/sym_stelar_omega_xis_front",
    "transer_tx": "skyhighheroes:sym/sym_stelar_transer.tx.json",
    "short_tx": "skyhighheroes:sym/sym_stelar_short.tx.json",
    "swimsuit_tx": "skyhighheroes:sym/sym_stelar_swimsuit.tx.json",
    "normal_tx": "skyhighheroes:sym/sym_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_pegasus",
    "transer_lights": "skyhighheroes:sym/sym_stelar_transer_lights",
    "blade": "skyhighheroes:sym/sym_stelar_blade",
    "shield": "skyhighheroes:sym/sym_stelar_shield",
    "shield_lights": "skyhighheroes:sym/sym_stelar_shield_lights",
    "katana": "skyhighheroes:sym/sym_stelar_katana",
    "katana_lights": "skyhighheroes:sym/sym_stelar_katana_lights",
    "scythe": "skyhighheroes:sym/sym_stelar_scythe",
    "scythe_lights": "skyhighheroes:sym/sym_stelar_scythe_lights",
    "rifle": "skyhighheroes:sym/sym_stelar_rifle",
    "rifle_lights": "skyhighheroes:sym/sym_stelar_rifle_lights"
});

function getColor() {
    return 0x00FFFF;
}

function getID() {
    return "340d3667-9ee9-49eb-b98b-e12c7534b577";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:sym_stelar_flight");
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
}