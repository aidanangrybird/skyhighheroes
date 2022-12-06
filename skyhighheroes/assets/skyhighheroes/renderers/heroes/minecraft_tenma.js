extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0x0000E8;
}

loadTextures({
    "eyes" : "skyhighheroes:minecraft/astro/minecraft_tenma_eyes",
    "boots_lights" : "skyhighheroes:minecraft/astro/minecraft_tenma_boots_lights",
    "eyes_normal" : "skyhighheroes:minecraft/astro/minecraft_tenma_eyes_normal",
    "base": "skyhighheroes:minecraft/astro/minecraft_tenma_base",
    "base_flying": "skyhighheroes:minecraft/astro/minecraft_tenma_base_flying",
    "base_head": "skyhighheroes:minecraft/astro/minecraft_tenma_base_head",
    "base_torso_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:minecraft/astro/minecraft_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:minecraft/astro/minecraft_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_base_legs_boots",
    "long" : "skyhighheroes:minecraft/astro/minecraft_tenma_long",
    "long_flying" : "skyhighheroes:minecraft/astro/minecraft_tenma_long_flying",
    "long_head_torso": "skyhighheroes:minecraft/astro/minecraft_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:minecraft/astro/minecraft_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:minecraft/astro/minecraft_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:minecraft/astro/minecraft_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:minecraft/astro/minecraft_tenma_short",
    "short_flying" : "skyhighheroes:minecraft/astro/minecraft_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:minecraft/astro/minecraft_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:minecraft/astro/minecraft_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_short_torso_boots",
    "normal" : "skyhighheroes:minecraft/astro/minecraft_tenma_normal",
    "normal_flying" : "skyhighheroes:minecraft/astro/minecraft_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:minecraft/astro/minecraft_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:minecraft/astro/minecraft_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:minecraft/astro/minecraft_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:minecraft/astro/minecraft_tenma_normal_legs_torso_boots",
    "cannon_lights_inner" : "skyhighheroes:minecraft/astro/minecraft_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:minecraft/astro/minecraft_tenma_shield",
    "katana": "skyhighheroes:minecraft/astro/minecraft_tenma_katana",
    "katana_lights": "skyhighheroes:minecraft/astro/minecraft_tenma_katana_lights",
    "scythe": "skyhighheroes:minecraft/astro/minecraft_tenma_scythe",
    "scythe_lights": "skyhighheroes:minecraft/astro/minecraft_tenma_scythe_lights",
    "rifle": "skyhighheroes:minecraft/astro/minecraft_tenma_rifle",
    "rifle_lights": "skyhighheroes:minecraft/astro/minecraft_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    rockets = astro.initBoosters(renderer, getCLR());
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:minecraft_tenma_speed");
}

function getSuitID() {
    return "skyhighheroes:minecraft_tenma";
}

function getID() {
    return "f849622f-b7cc-4ff5-8ce1-484f75c1ffa3";
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