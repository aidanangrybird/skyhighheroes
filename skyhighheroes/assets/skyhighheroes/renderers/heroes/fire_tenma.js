extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

var colorLeft = 0x0000FF;
var colorRight = 0xFF0000;

function getCLR() {
    return 0xFF0000;
}

loadTextures({
    "eyes" : "skyhighheroes:fire/astro/fire_tenma_eyes",
    "boots_lights" : "skyhighheroes:fire/astro/fire_tenma_boots_lights",
    "eyes_normal" : "skyhighheroes:fire/astro/fire_tenma_eyes_normal",
    "base": "skyhighheroes:fire/astro/fire_tenma_base",
    "base_flying": "skyhighheroes:fire/astro/fire_tenma_base_flying",
    "base_head": "skyhighheroes:fire/astro/fire_tenma_base_head",
    "base_torso_boots": "skyhighheroes:fire/astro/fire_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:fire/astro/fire_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:fire/astro/fire_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:fire/astro/fire_tenma_base_legs_boots",
    "long" : "skyhighheroes:fire/astro/fire_tenma_long",
    "long_flying" : "skyhighheroes:fire/astro/fire_tenma_long_flying",
    "long_head_torso": "skyhighheroes:fire/astro/fire_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:fire/astro/fire_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:fire/astro/fire_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:fire/astro/fire_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:fire/astro/fire_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:fire/astro/fire_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:fire/astro/fire_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:fire/astro/fire_tenma_short",
    "short_flying" : "skyhighheroes:fire/astro/fire_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:fire/astro/fire_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:fire/astro/fire_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:fire/astro/fire_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:fire/astro/fire_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:fire/astro/fire_tenma_short_torso_boots",
    "normal" : "skyhighheroes:fire/astro/fire_tenma_normal",
    "normal_flying" : "skyhighheroes:fire/astro/fire_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:fire/astro/fire_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:fire/astro/fire_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:fire/astro/fire_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:fire/astro/fire_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:fire/astro/fire_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:fire/astro/fire_tenma_normal_legs_torso_boots",
    "cannon_lights_inner" : "skyhighheroes:fire/astro/fire_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:fire/astro/fire_tenma_shield",
    "katana": "skyhighheroes:fire/astro/fire_tenma_katana",
    "katana_lights": "skyhighheroes:fire/astro/fire_tenma_katana_lights",
    "scythe": "skyhighheroes:fire/astro/fire_tenma_scythe",
    "scythe_lights": "skyhighheroes:fire/astro/fire_tenma_scythe_lights",
    "rifle": "skyhighheroes:fire/astro/fire_tenma_rifle",
    "rifle_lights": "skyhighheroes:fire/astro/fire_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initDualBoosters(renderer, 0x0000FF, 0xFF0000);
    astro.initDualBeams(renderer, 0x0000FF, 0xFF0000);
    stuff.bindSpeedTrail(renderer, "skyhighheroes:fire_tenma_speed");
}

function getSuitID() {
    return "skyhighheroes:fire_tenma";
}

function getID() {
    return "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
    rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
}