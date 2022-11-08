extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var aura = implement("skyhighheroes:external/stelar_aura");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": ("skyhighheroes:boom/boom_stelar"),
    "lights": ("skyhighheroes:boom/boom_stelar_lights"),
    "suit": ("skyhighheroes:boom/boom_stelar_suit.tx.json"),
    "suit_lights": ("skyhighheroes:boom/boom_stelar_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:boom/boom_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:boom/boom_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:boom/boom_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:boom/boom_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:boom/boom_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:boom/boom_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:boom/boom_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:boom/boom_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:boom/boom_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:boom/boom_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:boom/boom_stelar_bottom_cannon"),
    "cannon_left": ("skyhighheroes:boom/boom_stelar_left_cannon"),
    "cannon_right": ("skyhighheroes:boom/boom_stelar_right_cannon"),
    "cannon_top": ("skyhighheroes:boom/boom_stelar_top_cannon"),
    "cannon_front": ("skyhighheroes:boom/boom_stelar_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:boom/omega_xis_boom_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:boom/omega_xis_boom_stelar_right_eyes"),
    "transertx": ("skyhighheroes:boom/boom_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:boom/boom_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:boom/boom_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:boom/boom_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:boom/boom_stelar_transer_lights"),
    "blade": ("skyhighheroes:boom/boom_stelar_blade"),
    "hair": ("skyhighheroes:boom/boom_stelar_hair"),
    "shield": ("skyhighheroes:boom/boom_stelar_shield"),
    "katana": ("skyhighheroes:boom/boom_stelar_katana"),
    "katana_lights": ("skyhighheroes:boom/boom_stelar_katana_lights"),
    "scythe": ("skyhighheroes:boom/boom_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:boom/boom_stelar_scythe_lights")
});

function getCLR() {
    return 0xAA00FF;
}

function getID() {
    return "9af1da24-6827-4c48-848d-df07952ff161";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}

function initEffects(renderer) {
    parent.initEffects(renderer);
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