extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var em_aura = implement("skyhighheroes:external/em_aura");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "base": "skyhighheroes:minecraft/minecraft_stelar",
    "lights": "skyhighheroes:minecraft/minecraft_stelar_lights",
    "suit": "skyhighheroes:minecraft/minecraft_stelar_suit.tx.json",
    "suit_lights": "skyhighheroes:minecraft/minecraft_stelar_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:minecraft/minecraft_stelar_up_transer",
    "visualizer_down": "skyhighheroes:minecraft/minecraft_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:minecraft/minecraft_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:minecraft/minecraft_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:minecraft/minecraft_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:minecraft/minecraft_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:minecraft/minecraft_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:minecraft/minecraft_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:minecraft/minecraft_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:minecraft/minecraft_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:minecraft/minecraft_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:minecraft/minecraft_stelar_left_cannon",
    "cannon_right": "skyhighheroes:minecraft/minecraft_stelar_right_cannon",
    "cannon_top": "skyhighheroes:minecraft/minecraft_stelar_top_cannon",
    "cannon_front": "skyhighheroes:minecraft/minecraft_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:minecraft/omega_xis_minecraft_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:minecraft/omega_xis_minecraft_stelar_right_eyes",
    "transertx": "skyhighheroes:minecraft/minecraft_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:minecraft/minecraft_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:minecraft/minecraft_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:minecraft/minecraft_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_pegasus",
    "transer_lights": "skyhighheroes:minecraft/minecraft_stelar_transer_lights",
    "blade": "skyhighheroes:minecraft/minecraft_stelar_blade",
    "hair": "skyhighheroes:minecraft/minecraft_stelar_hair",
    "shield": "skyhighheroes:minecraft/minecraft_stelar_shield",
    "katana": "skyhighheroes:minecraft/minecraft_stelar_katana",
    "katana_lights": "skyhighheroes:minecraft/minecraft_stelar_katana_lights",
    "scythe": "skyhighheroes:minecraft/minecraft_stelar_scythe",
    "scythe_lights": "skyhighheroes:minecraft/minecraft_stelar_scythe_lights",
    "rifle": "skyhighheroes:minecraft/minecraft_stelar_rifle",
    "rifle_lights": "skyhighheroes:minecraft/minecraft_stelar_rifle_lights"
});

function getCLR() {
    return 0x0000D1;
}

function getID() {
    return "f849622f-b7cc-4ff5-8ce1-484f75c1ffa3";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}

function initEffects(renderer) {
    parent.initEffects(renderer);
    stuff.bindFlightTrail(renderer, "skyhighheroes:minecraft_stelar_flight");
    aura = em_aura.init(renderer, getCLR());
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
    aura.render(entity, renderLayer, isFirstPersonArm);
}