extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

function getCLR() {
    return 0x00FF00;
}

loadTextures({
    "lights" : "skyhighheroes:expo/astro/expo_tenma_lights",
    "lights_flying" : "skyhighheroes:expo/astro/expo_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:expo/astro/expo_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:expo/astro/expo_tenma_lights_normal_flying",
    "base": "skyhighheroes:expo/astro/expo_tenma_base",
    "base_flying": "skyhighheroes:expo/astro/expo_tenma_base_flying",
    "long" : "skyhighheroes:expo/astro/expo_tenma_long",
    "long_flying" : "skyhighheroes:expo/astro/expo_tenma_long_flying",
    "short" : "skyhighheroes:expo/astro/expo_tenma_short",
    "short_flying" : "skyhighheroes:expo/astro/expo_tenma_short_flying",
    "normal" : "skyhighheroes:expo/astro/expo_tenma_normal",
    "normal_flying" : "skyhighheroes:expo/astro/expo_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:expo/astro/expo_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:green_fire_layer1", "skyhighheroes:green_fire_layer2");
    utils.bindTrail(renderer, "skyhighheroes:expo_tenma_speed");
}

function getID() {
    return "37992cf8-6eb2-42b5-b748-c10f3f80d6e7";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}