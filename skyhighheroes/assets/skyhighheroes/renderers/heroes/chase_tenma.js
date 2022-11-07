extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

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
    "long" : "skyhighheroes:chase/astro/chase_tenma_long",
    "long_flying" : "skyhighheroes:chase/astro/chase_tenma_long_flying",
    "short" : "skyhighheroes:chase/astro/chase_tenma_short",
    "short_flying" : "skyhighheroes:chase/astro/chase_tenma_short_flying",
    "normal" : "skyhighheroes:chase/astro/chase_tenma_normal",
    "normal_flying" : "skyhighheroes:chase/astro/chase_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:chase/astro/chase_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back",
    "shield": "skyhighheroes:chase/astro/chase_tenma_shield",
    "katana": "skyhighheroes:chase/astro/chase_tenma_katana",
    "katana_lights": "skyhighheroes:chase/astro/chase_tenma_katana_lights",
    "scythe": "skyhighheroes:chase/astro/chase_tenma_scythe",
    "scythe_lights": "skyhighheroes:chase/astro/chase_tenma_scythe_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:lime_fire_layer1", "skyhighheroes:lime_fire_layer2");
    utils.bindTrail(renderer, "skyhighheroes:chase_tenma_speed")
}

function getID() {
    return "4da600b8-582a-4fc3-ac2e-ada03d3e478c";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}