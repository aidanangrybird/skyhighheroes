extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0xBFFF00;
}

loadTextures({
    "lights" : "skyhighheroes:chase/astro/chase_tenma_lights",
    "lights_flying" : "skyhighheroes:chase/astro/chase_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:chase/astro/chase_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:chase/astro/chase_tenma_lights_normal_flying",
    "base": "skyhighheroes:chase/astro/chase_tenma_base",
    "base_flying": "skyhighheroes:chase/astro/chase_tenma_base_flying",
    "base_head": "skyhighheroes:chase/astro/chase_tenma_base_head",
    "base_torso_boots": "skyhighheroes:chase/astro/chase_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:chase/astro/chase_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:chase/astro/chase_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:chase/astro/chase_tenma_base_legs_boots",
    "long" : "skyhighheroes:chase/astro/chase_tenma_long",
    "long_flying" : "skyhighheroes:chase/astro/chase_tenma_long_flying",
    "long_head_torso": "skyhighheroes:chase/astro/chase_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:chase/astro/chase_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:chase/astro/chase_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:chase/astro/chase_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:chase/astro/chase_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:chase/astro/chase_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:chase/astro/chase_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:chase/astro/chase_tenma_short",
    "short_flying" : "skyhighheroes:chase/astro/chase_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:chase/astro/chase_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:chase/astro/chase_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:chase/astro/chase_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:chase/astro/chase_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:chase/astro/chase_tenma_short_torso_boots",
    "normal" : "skyhighheroes:chase/astro/chase_tenma_normal",
    "normal_flying" : "skyhighheroes:chase/astro/chase_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:chase/astro/chase_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:chase/astro/chase_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:chase/astro/chase_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:chase/astro/chase_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:chase/astro/chase_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:chase/astro/chase_tenma_normal_legs_torso_boots",
    "cannon_lights_inner" : "skyhighheroes:chase/astro/chase_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:chase/astro/chase_tenma_shield",
    "katana": "skyhighheroes:chase/astro/chase_tenma_katana",
    "katana_lights": "skyhighheroes:chase/astro/chase_tenma_katana_lights",
    "scythe": "skyhighheroes:chase/astro/chase_tenma_scythe",
    "scythe_lights": "skyhighheroes:chase/astro/chase_tenma_scythe_lights",
    "rifle": "skyhighheroes:chase/astro/chase_tenma_rifle",
    "rifle_lights": "skyhighheroes:chase/astro/chase_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, getCLR());
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:chase_tenma_speed");
}

function getSuitID() {
    return "skyhighheroes:chase_tenma";
}

function getID() {
    return "4da600b8-582a-4fc3-ac2e-ada03d3e478c";
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