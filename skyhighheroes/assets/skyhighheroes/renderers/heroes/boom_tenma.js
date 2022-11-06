extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

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
    "long" : "skyhighheroes:boom/astro/boom_tenma_long",
    "long_flying" : "skyhighheroes:boom/astro/boom_tenma_long_flying",
    "short" : "skyhighheroes:boom/astro/boom_tenma_short",
    "short_flying" : "skyhighheroes:boom/astro/boom_tenma_short_flying",
    "normal" : "skyhighheroes:boom/astro/boom_tenma_normal",
    "normal_flying" : "skyhighheroes:boom/astro/boom_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:boom/astro/boom_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:purple_fire_layer1", "skyhighheroes:purple_fire_layer2");
    utils.bindTrail(renderer, "skyhighheroes:boom_tenma_speed")
}

function getID() {
    return "9af1da24-6827-4c48-848d-df07952ff161";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}