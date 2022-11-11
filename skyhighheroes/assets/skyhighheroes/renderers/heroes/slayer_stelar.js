extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var aura = implement("skyhighheroes:external/stelar_aura");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:slayer/slayer_stelar",
    "lights": "skyhighheroes:slayer/slayer_stelar_lights",
    "suit": "skyhighheroes:slayer/slayer_stelar_suit.tx.json",
    "suit_lights": "skyhighheroes:slayer/slayer_stelar_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:slayer/slayer_stelar_up_transer",
    "visualizer_down": "skyhighheroes:slayer/slayer_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:slayer/slayer_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:slayer/slayer_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:slayer/slayer_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:slayer/slayer_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:slayer/slayer_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:slayer/slayer_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:slayer/slayer_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:slayer/slayer_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:slayer/slayer_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:slayer/slayer_stelar_left_cannon",
    "cannon_right": "skyhighheroes:slayer/slayer_stelar_right_cannon",
    "cannon_top": "skyhighheroes:slayer/slayer_stelar_top_cannon",
    "cannon_front": "skyhighheroes:slayer/slayer_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:slayer/omega_xis_slayer_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:slayer/omega_xis_slayer_stelar_right_eyes",
    "transertx": "skyhighheroes:slayer/slayer_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:slayer/slayer_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:slayer/slayer_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:slayer/slayer_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_pegasus",
    "transer_lights": "skyhighheroes:slayer/slayer_stelar_transer_lights",
    "blade": "skyhighheroes:slayer/slayer_stelar_blade",
    "hair": "skyhighheroes:slayer/slayer_stelar_hair",
    "shield": "skyhighheroes:slayer/slayer_stelar_shield",
    "katana": "skyhighheroes:slayer/slayer_stelar_katana",
    "katana_lights": "skyhighheroes:slayer/slayer_stelar_katana_lights",
    "scythe": "skyhighheroes:slayer/slayer_stelar_scythe",
    "scythe_lights": "skyhighheroes:slayer/slayer_stelar_scythe_lights",
    "rifle": "skyhighheroes:slayer/slayer_stelar_rifle",
    "rifle_lights": "skyhighheroes:slayer/slayer_stelar_rifle_lights"
});

function getCLR() {
    return 0xFFC400;
}

function getID() {
    return "0bafb632-bb1b-4c49-bb35-b23d3285f615";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:slayer_stelar_flight");
    aura.initHairAura(renderer, getCLR());
    aura.initAura(renderer, getCLR());
    aura.initOmegaXisAura(renderer, getCLR());
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
    aura.renderHairAura(entity, renderLayer);
    aura.renderAura(entity, renderLayer);
    aura.renderOmegaXisAura(entity, renderLayer, isFirstPersonArm);
}