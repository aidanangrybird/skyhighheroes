extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var aura = implement("skyhighheroes:external/stelar_aura");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:tobi/tobi_stelar",
    "lights": "skyhighheroes:tobi/tobi_stelar_lights",
    "suit": "skyhighheroes:tobi/tobi_stelar_suit.tx.json",
    "suit_lights": "skyhighheroes:tobi/tobi_stelar_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:tobi/tobi_stelar_up_transer",
    "visualizer_down": "skyhighheroes:tobi/tobi_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:tobi/tobi_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:tobi/tobi_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:tobi/tobi_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:tobi/tobi_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:tobi/tobi_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:tobi/tobi_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:tobi/tobi_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:tobi/tobi_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:tobi/tobi_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:tobi/tobi_stelar_left_cannon",
    "cannon_right": "skyhighheroes:tobi/tobi_stelar_right_cannon",
    "cannon_top": "skyhighheroes:tobi/tobi_stelar_top_cannon",
    "cannon_front": "skyhighheroes:tobi/tobi_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:tobi/omega_xis_tobi_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:tobi/omega_xis_tobi_stelar_right_eyes",
    "transertx": "skyhighheroes:tobi/tobi_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:tobi/tobi_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:tobi/tobi_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:tobi/tobi_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_pegasus",
    "transer_lights": "skyhighheroes:tobi/tobi_stelar_transer_lights",
    "blade": "skyhighheroes:tobi/tobi_stelar_blade",
    "hair": "skyhighheroes:tobi/tobi_stelar_hair",
    "shield": "skyhighheroes:tobi/tobi_stelar_shield",
    "katana": "skyhighheroes:tobi/tobi_stelar_katana",
    "katana_lights": "skyhighheroes:tobi/tobi_stelar_katana_lights",
    "scythe": "skyhighheroes:tobi/tobi_stelar_scythe",
    "scythe_lights": "skyhighheroes:tobi/tobi_stelar_scythe_lights",
    "rifle": "skyhighheroes:tobi/tobi_stelar_rifle",
    "rifle_lights": "skyhighheroes:tobi/tobi_stelar_rifle_lights"
});

function getCLR() {
    return 0x666666;
}

function getID() {
    return "19162f0a-d2c3-47b1-a640-fef7a624850d";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:tobi_stelar_flight");
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