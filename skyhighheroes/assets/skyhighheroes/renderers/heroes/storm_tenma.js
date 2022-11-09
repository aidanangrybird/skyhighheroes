extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0xFF0000;
}

loadTextures({
    "lights" : "skyhighheroes:storm/astro/storm_tenma_lights",
    "lights_flying" : "skyhighheroes:storm/astro/storm_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:storm/astro/storm_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:storm/astro/storm_tenma_lights_normal_flying",
    "base": "skyhighheroes:storm/astro/storm_tenma_base",
    "base_flying": "skyhighheroes:storm/astro/storm_tenma_base_flying",
    "long" : "skyhighheroes:storm/astro/storm_tenma_long",
    "long_flying" : "skyhighheroes:storm/astro/storm_tenma_long_flying",
    "short" : "skyhighheroes:storm/astro/storm_tenma_short",
    "short_flying" : "skyhighheroes:storm/astro/storm_tenma_short_flying",
    "normal" : "skyhighheroes:storm/astro/storm_tenma_normal",
    "normal_flying" : "skyhighheroes:storm/astro/storm_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:storm/astro/storm_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back",
    "shield": "skyhighheroes:storm/astro/storm_tenma_shield",
    "katana": "skyhighheroes:storm/astro/storm_tenma_katana",
    "katana_lights": "skyhighheroes:storm/astro/storm_tenma_katana_lights",
    "scythe": "skyhighheroes:storm/astro/storm_tenma_scythe",
    "scythe_lights": "skyhighheroes:storm/astro/storm_tenma_scythe_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.initBoosters(renderer, "skyhighheroes:red_fire_layer1", "skyhighheroes:red_fire_layer2");
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:storm_tenma_speed");
}

function getID() {
    return "0bafb632-bb1b-4c49-bb35-b23d3285f615";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}