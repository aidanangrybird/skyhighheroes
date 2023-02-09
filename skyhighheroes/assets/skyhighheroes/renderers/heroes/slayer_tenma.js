extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getColor() {
    return 0xBFFF00;
}

loadTextures({
    "eyes": "skyhighheroes:slayer/astro/slayer_tenma_eyes",
    "boots_lights": "skyhighheroes:slayer/astro/slayer_tenma_boots_lights",
    "arms_lights": "skyhighheroes:slayer/astro/slayer_tenma_arms_lights",
    "eyes_normal": "skyhighheroes:slayer/astro/slayer_tenma_eyes_normal",
    "base": "skyhighheroes:slayer/astro/slayer_tenma_base",
    "base_flying": "skyhighheroes:slayer/astro/slayer_tenma_base_flying",
    "base_head": "skyhighheroes:slayer/astro/slayer_tenma_base_head",
    "base_torso_boots": "skyhighheroes:slayer/astro/slayer_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:slayer/astro/slayer_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:slayer/astro/slayer_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:slayer/astro/slayer_tenma_base_legs_boots",
    "long": "skyhighheroes:slayer/astro/slayer_tenma_long",
    "long_flying": "skyhighheroes:slayer/astro/slayer_tenma_long_flying",
    "long_head_torso": "skyhighheroes:slayer/astro/slayer_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:slayer/astro/slayer_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:slayer/astro/slayer_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:slayer/astro/slayer_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:slayer/astro/slayer_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:slayer/astro/slayer_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:slayer/astro/slayer_tenma_long_legs_torso_boots",
    "short": "skyhighheroes:slayer/astro/slayer_tenma_short",
    "short_flying": "skyhighheroes:slayer/astro/slayer_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:slayer/astro/slayer_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:slayer/astro/slayer_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:slayer/astro/slayer_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:slayer/astro/slayer_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:slayer/astro/slayer_tenma_short_torso_boots",
    "normal": "skyhighheroes:slayer/astro/slayer_tenma_normal",
    "normal_flying": "skyhighheroes:slayer/astro/slayer_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:slayer/astro/slayer_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:slayer/astro/slayer_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:slayer/astro/slayer_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:slayer/astro/slayer_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:slayer/astro/slayer_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:slayer/astro/slayer_tenma_normal_legs_torso_boots",
    "cannon_lights": "skyhighheroes:slayer/astro/slayer_tenma_cannon_lights",
    "shield": "skyhighheroes:slayer/astro/slayer_tenma_shield",
    "katana": "skyhighheroes:slayer/astro/slayer_tenma_katana",
    "katana_lights": "skyhighheroes:slayer/astro/slayer_tenma_katana_lights",
    "scythe": "skyhighheroes:slayer/astro/slayer_tenma_scythe",
    "scythe_lights": "skyhighheroes:slayer/astro/slayer_tenma_scythe_lights",
    "rifle": "skyhighheroes:slayer/astro/slayer_tenma_rifle",
    "rifle_lights": "skyhighheroes:slayer/astro/slayer_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, getColor());
    astro.initBeams(renderer, getColor());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:slayer_tenma_speed");
}

function getSuitID() {
    return "skyhighheroes:slayer_tenma";
}

function getID() {
    return "85f45fed-d7f1-4966-bfad-915c3dba0153";
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