extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0x0000FF;
}

loadTextures({
    "lights" : "skyhighheroes:comic/astro/comic_tenma_lights",
    "lights_flying" : "skyhighheroes:comic/astro/comic_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:comic/astro/comic_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:comic/astro/comic_tenma_lights_normal_flying",
    "base": "skyhighheroes:comic/astro/comic_tenma_base",
    "base_flying": "skyhighheroes:comic/astro/comic_tenma_base_flying",
    "long" : "skyhighheroes:comic/astro/comic_tenma_long",
    "long_flying" : "skyhighheroes:comic/astro/comic_tenma_long_flying",
    "short" : "skyhighheroes:comic/astro/comic_tenma_short",
    "short_flying" : "skyhighheroes:comic/astro/comic_tenma_short_flying",
    "normal" : "skyhighheroes:comic/astro/comic_tenma_normal",
    "normal_flying" : "skyhighheroes:comic/astro/comic_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:comic/astro/comic_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:comic/astro/comic_tenma_shield",
    "katana": "skyhighheroes:comic/astro/comic_tenma_katana",
    "katana_lights": "skyhighheroes:comic/astro/comic_tenma_katana_lights",
    "scythe": "skyhighheroes:comic/astro/comic_tenma_scythe",
    "scythe_lights": "skyhighheroes:comic/astro/comic_tenma_scythe_lights",
    "rifle": "skyhighheroes:comic/astro/comic_tenma_rifle",
    "rifle_lights": "skyhighheroes:comic/astro/comic_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.initBoosters(renderer, "skyhighheroes:blue_fire_layer1", "skyhighheroes:blue_fire_layer2");
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:comic_tenma_speed");
}

function getID() {
    return "02761162-3863-410d-ae8c-fede80c6fb27";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}