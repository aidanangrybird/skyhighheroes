extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0x00FF00;
}

loadTextures({
    "lights" : "skyhighheroes:expo/astro/expo_tenma_lights",
    "lights_flying" : "skyhighheroes:expo/astro/expo_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:expo/astro/expo_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:expo/astro/expo_tenma_lights_normal_flying",
    "base": "skyhighheroes:expo/astro/expo_tenma_base",
    "base_flying": "skyhighheroes:expo/astro/expo_tenma_base_flying",
    "base_head": "skyhighheroes:expo/astro/expo_tenma_base_head",
    "base_torso_boots": "skyhighheroes:expo/astro/expo_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:expo/astro/expo_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:expo/astro/expo_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:expo/astro/expo_tenma_base_legs_boots",
    "long" : "skyhighheroes:expo/astro/expo_tenma_long",
    "long_flying" : "skyhighheroes:expo/astro/expo_tenma_long_flying",
    "long_head_torso": "skyhighheroes:expo/astro/expo_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:expo/astro/expo_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:expo/astro/expo_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:expo/astro/expo_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:expo/astro/expo_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:expo/astro/expo_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:expo/astro/expo_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:expo/astro/expo_tenma_short",
    "short_flying" : "skyhighheroes:expo/astro/expo_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:expo/astro/expo_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:expo/astro/expo_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:expo/astro/expo_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:expo/astro/expo_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:expo/astro/expo_tenma_short_torso_boots",
    "normal" : "skyhighheroes:expo/astro/expo_tenma_normal",
    "normal_flying" : "skyhighheroes:expo/astro/expo_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:expo/astro/expo_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:expo/astro/expo_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:expo/astro/expo_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:expo/astro/expo_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:expo/astro/expo_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:expo/astro/expo_tenma_normal_legs_torso_boots",
    "cannon_lights_inner" : "skyhighheroes:expo/astro/expo_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:expo/astro/expo_tenma_shield",
    "katana": "skyhighheroes:expo/astro/expo_tenma_katana",
    "katana_lights": "skyhighheroes:expo/astro/expo_tenma_katana_lights",
    "scythe": "skyhighheroes:expo/astro/expo_tenma_scythe",
    "scythe_lights": "skyhighheroes:expo/astro/expo_tenma_scythe_lights",
    "rifle": "skyhighheroes:expo/astro/expo_tenma_rifle",
    "rifle_lights": "skyhighheroes:expo/astro/expo_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, getCLR());
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:expo_tenma_speed");
}

function getSuitID() {
    return "skyhighheroes:aidan_tenma";
}

function getID() {
    return "37992cf8-6eb2-42b5-b748-c10f3f80d6e7";
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