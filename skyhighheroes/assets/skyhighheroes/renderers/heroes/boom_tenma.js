extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0xAA00FF;
}

loadTextures({
    "lights" : "skyhighheroes:boom/astro/boom_tenma_lights",
    "lights_flying" : "skyhighheroes:boom/astro/boom_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:boom/astro/boom_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:boom/astro/boom_tenma_lights_normal_flying",
    "base": "skyhighheroes:boom/astro/boom_tenma_base",
    "base_flying": "skyhighheroes:boom/astro/boom_tenma_base_flying",
    "base_head": "skyhighheroes:boom/astro/boom_tenma_base_head",
    "base_torso_boots": "skyhighheroes:boom/astro/boom_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:boom/astro/boom_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:boom/astro/boom_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:boom/astro/boom_tenma_base_legs_boots",
    "long" : "skyhighheroes:boom/astro/boom_tenma_long",
    "long_flying" : "skyhighheroes:boom/astro/boom_tenma_long_flying",
    "long_head_torso": "skyhighheroes:boom/astro/boom_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:boom/astro/boom_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:boom/astro/boom_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:boom/astro/boom_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:boom/astro/boom_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:boom/astro/boom_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:boom/astro/boom_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:boom/astro/boom_tenma_short",
    "short_flying" : "skyhighheroes:boom/astro/boom_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:boom/astro/boom_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:boom/astro/boom_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:boom/astro/boom_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:boom/astro/boom_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:boom/astro/boom_tenma_short_torso_boots",
    "normal" : "skyhighheroes:boom/astro/boom_tenma_normal",
    "normal_flying" : "skyhighheroes:boom/astro/boom_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:boom/astro/boom_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:boom/astro/boom_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:boom/astro/boom_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:boom/astro/boom_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:boom/astro/boom_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:boom/astro/boom_tenma_normal_legs_torso_boots",
    "cannon_lights_inner" : "skyhighheroes:boom/astro/boom_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:boom/astro/boom_tenma_shield",
    "katana": "skyhighheroes:boom/astro/boom_tenma_katana",
    "katana_lights": "skyhighheroes:boom/astro/boom_tenma_katana_lights",
    "scythe": "skyhighheroes:boom/astro/boom_tenma_scythe",
    "scythe_lights": "skyhighheroes:boom/astro/boom_tenma_scythe_lights",
    "rifle": "skyhighheroes:boom/astro/boom_tenma_rifle",
    "rifle_lights": "skyhighheroes:boom/astro/boom_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, getCLR());
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:boom_tenma_speed");
}

function getSuitID() {
    return "skyhighheroes:boom_tenma";
}

function getID() {
    return "9af1da24-6827-4c48-848d-df07952ff161";
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