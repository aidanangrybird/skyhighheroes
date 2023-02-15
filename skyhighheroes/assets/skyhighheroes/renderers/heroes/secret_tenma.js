extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getColor() {
    return 0xFF0000;
}

loadTextures({
    "eyes": "skyhighheroes:secret/astro/secret_tenma_eyes",
    "boots_lights": "skyhighheroes:secret/astro/secret_tenma_boots_lights",
    "arms_lights": "skyhighheroes:secret/astro/secret_tenma_arms_lights",
    "eyes_normal": "skyhighheroes:secret/astro/secret_tenma_eyes_normal",
    "base": "skyhighheroes:secret/astro/secret_tenma_base",
    "base_flying": "skyhighheroes:secret/astro/secret_tenma_base_flying",
    "base_head": "skyhighheroes:secret/astro/secret_tenma_base_head",
    "base_torso_boots": "skyhighheroes:secret/astro/secret_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:secret/astro/secret_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:secret/astro/secret_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:secret/astro/secret_tenma_base_legs_boots",
    "long": "skyhighheroes:secret/astro/secret_tenma_long",
    "long_flying": "skyhighheroes:secret/astro/secret_tenma_long_flying",
    "long_head_torso": "skyhighheroes:secret/astro/secret_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:secret/astro/secret_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:secret/astro/secret_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:secret/astro/secret_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:secret/astro/secret_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:secret/astro/secret_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:secret/astro/secret_tenma_long_legs_torso_boots",
    "short": "skyhighheroes:secret/astro/secret_tenma_short",
    "short_flying": "skyhighheroes:secret/astro/secret_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:secret/astro/secret_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:secret/astro/secret_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:secret/astro/secret_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:secret/astro/secret_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:secret/astro/secret_tenma_short_torso_boots",
    "normal": "skyhighheroes:secret/astro/secret_tenma_normal",
    "normal_flying": "skyhighheroes:secret/astro/secret_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:secret/astro/secret_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:secret/astro/secret_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:secret/astro/secret_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:secret/astro/secret_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:secret/astro/secret_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:secret/astro/secret_tenma_normal_legs_torso_boots",
    "cannon_lights": "skyhighheroes:secret/astro/secret_tenma_cannon_lights",
    "shield": "skyhighheroes:secret/astro/secret_tenma_shield",
    "katana": "skyhighheroes:secret/astro/secret_tenma_katana",
    "katana_lights": "skyhighheroes:secret/astro/secret_tenma_katana_lights",
    "scythe": "skyhighheroes:secret/astro/secret_tenma_scythe",
    "scythe_lights": "skyhighheroes:secret/astro/secret_tenma_scythe_lights",
    "rifle": "skyhighheroes:secret/astro/secret_tenma_rifle",
    "rifle_lights": "skyhighheroes:secret/astro/secret_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, getColor());
    astro.initBeams(renderer, getColor());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:secret_tenma_speed");
}

function getSuitID() {
    return "skyhighheroes:secret_tenma";
}

function getID() {
    return "68963b64-70c9-447f-b499-ff9eb938e520";
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