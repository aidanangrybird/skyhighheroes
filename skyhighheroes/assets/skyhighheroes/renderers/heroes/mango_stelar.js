extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var em_aura = implement("skyhighheroes:external/em_aura");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:mango/mango_stelar",
    "lights": "skyhighheroes:mango/mango_stelar_lights",
    "suit": "skyhighheroes:mango/mango_stelar_suit.tx.json",
    "suit_lights": "skyhighheroes:mango/mango_stelar_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:mango/mango_stelar_up_transer",
    "visualizer_down": "skyhighheroes:mango/mango_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:mango/mango_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:mango/mango_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:mango/mango_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:mango/mango_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:mango/mango_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:mango/mango_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:mango/mango_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:mango/mango_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:mango/mango_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:mango/mango_stelar_left_cannon",
    "cannon_right": "skyhighheroes:mango/mango_stelar_right_cannon",
    "cannon_top": "skyhighheroes:mango/mango_stelar_top_cannon",
    "cannon_front": "skyhighheroes:mango/mango_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:mango/omega_xis_mango_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:mango/omega_xis_mango_stelar_right_eyes",
    "transertx": "skyhighheroes:mango/mango_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:mango/mango_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:mango/mango_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:mango/mango_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_dragon",
    "transer_lights": "skyhighheroes:mango/mango_stelar_transer_lights",
    "blade": "skyhighheroes:mango/mango_stelar_blade",
    "hair": "skyhighheroes:mango/mango_stelar_hair",
    "shield": "skyhighheroes:mango/mango_stelar_shield",
    "katana": "skyhighheroes:mango/mango_stelar_katana",
    "katana_lights": "skyhighheroes:mango/mango_stelar_katana_lights",
    "scythe": "skyhighheroes:mango/mango_stelar_scythe",
    "scythe_lights": "skyhighheroes:mango/mango_stelar_scythe_lights",
    "rifle": "skyhighheroes:mango/mango_stelar_rifle",
    "rifle_lights": "skyhighheroes:mango/mango_stelar_rifle_lights"
});

function getCLR() {
    return 0x454545;
}

function getID() {
    return "327437fb-864d-406c-9efd-2af1d37b8780";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:mango_stelar_flight");
    aura = em_aura.init(renderer, getCLR());
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
    aura.render(entity, renderLayer, isFirstPersonArm);
}