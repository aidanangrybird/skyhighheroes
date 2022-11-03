extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var stuff = implement("skyhighheroes:external/foosh");

loadTextures({
    "lights" : "skyhighheroes:aidan/astro/aidan_tenma_lights",
    "lights_flying" : "skyhighheroes:aidan/astro/aidan_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:aidan/astro/aidan_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:aidan/astro/aidan_tenma_lights_normal_flying",
    "base": "skyhighheroes:aidan/astro/aidan_tenma_base",
    "base_flying": "skyhighheroes:aidan/astro/aidan_tenma_base_flying",
    "long" : "skyhighheroes:aidan/astro/aidan_tenma_long",
    "long_flying" : "skyhighheroes:aidan/astro/aidan_tenma_long_flying",
    "short" : "skyhighheroes:aidan/astro/aidan_tenma_short",
    "short_flying" : "skyhighheroes:aidan/astro/aidan_tenma_short_flying",
    "normal" : "skyhighheroes:aidan/astro/aidan_tenma_normal",
    "normal_flying" : "skyhighheroes:aidan/astro/aidan_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:aidan/astro/aidan_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:orange_fire_layer1", "skyhighheroes:orange_fire_layer2", true);
    stuff.bindLeftDigitBeam(renderer, 0xFF8900);
    stuff.bindRightDigitBeam(renderer, 0xFF8900);
}

function getID() {
    return "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
}

function init(renderer) {
    parent.init(renderer)
    initEffects(renderer);
    initAnimations(renderer);
}