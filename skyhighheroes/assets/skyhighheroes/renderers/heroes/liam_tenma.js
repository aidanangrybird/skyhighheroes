extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getColor() {
    return 0x0000FF;
}

loadTextures({
    "eyes": "skyhighheroes:liam/astro/liam_tenma_eyes",
    "boots_lights": "skyhighheroes:liam/astro/liam_tenma_boots_lights",
    "arms_lights": "skyhighheroes:liam/astro/liam_tenma_arms_lights",
    "eyes_normal": "skyhighheroes:liam/astro/liam_tenma_eyes_normal",
    "base": "skyhighheroes:liam/astro/liam_tenma_base",
    "base_flying": "skyhighheroes:liam/astro/liam_tenma_base_flying",
    "base_head": "skyhighheroes:liam/astro/liam_tenma_base_head",
    "base_torso_boots": "skyhighheroes:liam/astro/liam_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:liam/astro/liam_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:liam/astro/liam_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:liam/astro/liam_tenma_base_legs_boots",
    "long": "skyhighheroes:liam/astro/liam_tenma_long",
    "long_flying": "skyhighheroes:liam/astro/liam_tenma_long_flying",
    "long_head_torso": "skyhighheroes:liam/astro/liam_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:liam/astro/liam_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:liam/astro/liam_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:liam/astro/liam_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:liam/astro/liam_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:liam/astro/liam_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:liam/astro/liam_tenma_long_legs_torso_boots",
    "short": "skyhighheroes:liam/astro/liam_tenma_short",
    "short_flying": "skyhighheroes:liam/astro/liam_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:liam/astro/liam_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:liam/astro/liam_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:liam/astro/liam_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:liam/astro/liam_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:liam/astro/liam_tenma_short_torso_boots",
    "normal": "skyhighheroes:liam/astro/liam_tenma_normal",
    "normal_flying": "skyhighheroes:liam/astro/liam_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:liam/astro/liam_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:liam/astro/liam_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:liam/astro/liam_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:liam/astro/liam_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:liam/astro/liam_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:liam/astro/liam_tenma_normal_legs_torso_boots",
    "cannon_lights": "skyhighheroes:liam/astro/liam_tenma_cannon_lights",
    "shield": "skyhighheroes:liam/astro/liam_tenma_shield",
    "katana": "skyhighheroes:liam/astro/liam_tenma_katana",
    "katana_lights": "skyhighheroes:liam/astro/liam_tenma_katana_lights",
    "scythe": "skyhighheroes:liam/astro/liam_tenma_scythe",
    "scythe_lights": "skyhighheroes:liam/astro/liam_tenma_scythe_lights",
    "rifle": "skyhighheroes:liam/astro/liam_tenma_rifle",
    "rifle_lights": "skyhighheroes:liam/astro/liam_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, getColor());
    astro.initBeams(renderer, getColor());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:liam_tenma_speed");
}

function getSuitID() {
    return "skyhighheroes:liam_tenma";
}

function getID() {
    return "cd71352c-8cb2-448c-a69d-a310a905ce7b";
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