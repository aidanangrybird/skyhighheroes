extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var aura = implement("skyhighheroes:external/stelar_aura");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": ("skyhighheroes:expo/expo_stelar"),
    "lights": ("skyhighheroes:expo/expo_stelar_lights"),
    "suit": ("skyhighheroes:expo/expo_stelar_suit.tx.json"),
    "suit_lights": ("skyhighheroes:expo/expo_stelar_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:expo/expo_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:expo/expo_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:expo/expo_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:expo/expo_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:expo/expo_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:expo/expo_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:expo/expo_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:expo/expo_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:expo/expo_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:expo/expo_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:expo/expo_stelar_bottom_cannon"),
    "cannon_left": ("skyhighheroes:expo/expo_stelar_left_cannon"),
    "cannon_right": ("skyhighheroes:expo/expo_stelar_right_cannon"),
    "cannon_top": ("skyhighheroes:expo/expo_stelar_top_cannon"),
    "cannon_front": ("skyhighheroes:expo/expo_stelar_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:expo/omega_xis_expo_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:expo/omega_xis_expo_stelar_right_eyes"),
    "transertx": ("skyhighheroes:expo/expo_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:expo/expo_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:expo/expo_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:expo/expo_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:expo/expo_stelar_transer_lights"),
    "blade": ("skyhighheroes:expo/expo_stelar_blade"),
    "hair": ("skyhighheroes:expo/expo_stelar_hair"),
    "shield": ("skyhighheroes:expo/expo_stelar_shield"),
    "katana": ("skyhighheroes:expo/expo_stelar_katana"),
    "katana_lights": ("skyhighheroes:expo/expo_stelar_katana_lights"),
    "scythe": ("skyhighheroes:expo/expo_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:expo/expo_stelar_scythe_lights")
});

function getCLR() {
    return 0x00FF00;
}

function getID() {
    return "37992cf8-6eb2-42b5-b748-c10f3f80d6e7";
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