extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0x757575;
}

loadTextures({
    "lights" : "skyhighheroes:tobi/astro/tobi_tenma_lights",
    "lights_flying" : "skyhighheroes:tobi/astro/tobi_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:tobi/astro/tobi_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:tobi/astro/tobi_tenma_lights_normal_flying",
    "base": "skyhighheroes:tobi/astro/tobi_tenma_base",
    "base_flying": "skyhighheroes:tobi/astro/tobi_tenma_base_flying",
    "base_head": "skyhighheroes:tobi/astro/tobi_tenma_base_head",
    "base_torso_boots": "skyhighheroes:tobi/astro/tobi_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:tobi/astro/tobi_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:tobi/astro/tobi_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:tobi/astro/tobi_tenma_base_legs_boots",
    "long" : "skyhighheroes:tobi/astro/tobi_tenma_long",
    "long_flying" : "skyhighheroes:tobi/astro/tobi_tenma_long_flying",
    "long_head_torso": "skyhighheroes:tobi/astro/tobi_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:tobi/astro/tobi_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:tobi/astro/tobi_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:tobi/astro/tobi_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:tobi/astro/tobi_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:tobi/astro/tobi_tenma_long_legs_boots",
    "head_legs_torso_boots": "skyhighheroes:tobi/astro/tobi_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:tobi/astro/tobi_tenma_short",
    "short_flying" : "skyhighheroes:tobi/astro/tobi_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:tobi/astro/tobi_tenma_short",
    "short_legs": "skyhighheroes:tobi/astro/tobi_tenma_short",
    "short_legs_torso": "skyhighheroes:tobi/astro/tobi_tenma_short",
    "short_legs_boots": "skyhighheroes:tobi/astro/tobi_tenma_short",
    "short_legs_torso_boots": "skyhighheroes:tobi/astro/tobi_tenma_short",
    "normal" : "skyhighheroes:tobi/astro/tobi_tenma_normal",
    "normal_flying" : "skyhighheroes:tobi/astro/tobi_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:tobi/astro/tobi_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:tobi/astro/tobi_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:tobi/astro/tobi_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:tobi/astro/tobi_tenma_legs_torso",
    "normal_legs_boots": "skyhighheroes:tobi/astro/tobi_tenma_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:tobi/astro/tobi_tenma_normal_legs_torso_boots",
    "cannon_lights_inner" : "skyhighheroes:tobi/astro/tobi_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:tobi/astro/tobi_tenma_shield",
    "katana": "skyhighheroes:tobi/astro/tobi_tenma_katana",
    "katana_lights": "skyhighheroes:tobi/astro/tobi_tenma_katana_lights",
    "scythe": "skyhighheroes:tobi/astro/tobi_tenma_scythe",
    "scythe_lights": "skyhighheroes:tobi/astro/tobi_tenma_scythe_lights",
    "rifle": "skyhighheroes:tobi/astro/tobi_tenma_rifle",
    "rifle_lights": "skyhighheroes:tobi/astro/tobi_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, "skyhighheroes:light_gray_fire_layer1", "skyhighheroes:light_gray_fire_layer2", getCLR());
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:tobi_tenma_speed");
}

function getID() {
    return "19162f0a-d2c3-47b1-a640-fef7a624850d";
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