extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

function getCLR() {
    return 0xAA00FF;
}

loadTextures({
    "lights" : "skyhighheroes:tysen/astro/tysen_tenma_lights",
    "lights_flying" : "skyhighheroes:tysen/astro/tysen_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:tysen/astro/tysen_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:tysen/astro/tysen_tenma_lights_normal_flying",
    "base": "skyhighheroes:tysen/astro/tysen_tenma_base",
    "base_flying": "skyhighheroes:tysen/astro/tysen_tenma_base_flying",
    "long" : "skyhighheroes:tysen/astro/tysen_tenma_long",
    "long_flying" : "skyhighheroes:tysen/astro/tysen_tenma_long_flying",
    "short" : "skyhighheroes:tysen/astro/tysen_tenma_short",
    "short_flying" : "skyhighheroes:tysen/astro/tysen_tenma_short_flying",
    "normal" : "skyhighheroes:tysen/astro/tysen_tenma_normal",
    "normal_flying" : "skyhighheroes:tysen/astro/tysen_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:tysen/astro/tysen_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:purple_fire_layer1", "skyhighheroes:purple_fire_layer2");
    utils.bindTrail(renderer, "skyhighheroes:tysen_tenma_speed")
}

function getID() {
    return "0ccdd53f-70bc-4039-b89b-fd3781f746f2";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}