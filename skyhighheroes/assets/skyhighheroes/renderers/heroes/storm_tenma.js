extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0xFF0000;
}

loadTextures({
    "lights" : "skyhighheroes:storm/astro/storm_tenma_lights",
    "lights_flying" : "skyhighheroes:storm/astro/storm_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:storm/astro/storm_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:storm/astro/storm_tenma_lights_normal_flying",
    "base": "skyhighheroes:storm/astro/storm_tenma_base",
    "base_flying": "skyhighheroes:storm/astro/storm_tenma_base_flying",
    "base_head": "skyhighheroes:storm/astro/storm_tenma_base_head",
    "base_torso_boots": "skyhighheroes:storm/astro/storm_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:storm/astro/storm_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:storm/astro/storm_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:storm/astro/storm_tenma_base_legs_boots",
    "long" : "skyhighheroes:storm/astro/storm_tenma_long",
    "long_flying" : "skyhighheroes:storm/astro/storm_tenma_long_flying",
    "long_head_torso": "skyhighheroes:storm/astro/storm_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:storm/astro/storm_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:storm/astro/storm_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:storm/astro/storm_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:storm/astro/storm_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:storm/astro/storm_tenma_long_legs_boots",
    "head_legs_torso_boots": "skyhighheroes:storm/astro/storm_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:storm/astro/storm_tenma_short",
    "short_flying" : "skyhighheroes:storm/astro/storm_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:storm/astro/storm_tenma_short",
    "short_legs": "skyhighheroes:storm/astro/storm_tenma_short",
    "short_legs_torso": "skyhighheroes:storm/astro/storm_tenma_short",
    "short_legs_boots": "skyhighheroes:storm/astro/storm_tenma_short",
    "short_legs_torso_boots": "skyhighheroes:storm/astro/storm_tenma_short",
    "normal" : "skyhighheroes:storm/astro/storm_tenma_normal",
    "normal_flying" : "skyhighheroes:storm/astro/storm_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:storm/astro/storm_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:storm/astro/storm_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:storm/astro/storm_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:storm/astro/storm_tenma_legs_torso",
    "normal_legs_boots": "skyhighheroes:storm/astro/storm_tenma_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:storm/astro/storm_tenma_normal_legs_torso_boots",
    "cannon_lights_inner" : "skyhighheroes:storm/astro/storm_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:storm/astro/storm_tenma_shield",
    "katana": "skyhighheroes:storm/astro/storm_tenma_katana",
    "katana_lights": "skyhighheroes:storm/astro/storm_tenma_katana_lights",
    "scythe": "skyhighheroes:storm/astro/storm_tenma_scythe",
    "scythe_lights": "skyhighheroes:storm/astro/storm_tenma_scythe_lights",
    "rifle": "skyhighheroes:storm/astro/storm_tenma_rifle",
    "rifle_lights": "skyhighheroes:storm/astro/storm_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, getCLR());
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:storm_tenma_speed");
}

function getID() {
    return "0bafb632-bb1b-4c49-bb35-b23d3285f615";
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