extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
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
    "long" : "skyhighheroes:tobi/astro/tobi_tenma_long",
    "long_flying" : "skyhighheroes:tobi/astro/tobi_tenma_long_flying",
    "short" : "skyhighheroes:tobi/astro/tobi_tenma_short",
    "short_flying" : "skyhighheroes:tobi/astro/tobi_tenma_short_flying",
    "normal" : "skyhighheroes:tobi/astro/tobi_tenma_normal",
    "normal_flying" : "skyhighheroes:tobi/astro/tobi_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:tobi/astro/tobi_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back",
    "shield": "skyhighheroes:tobi/astro/tobi_tenma_shield",
    "katana": "skyhighheroes:tobi/astro/tobi_tenma_katana",
    "katana_lights": "skyhighheroes:tobi/astro/tobi_tenma_katana_lights",
    "scythe": "skyhighheroes:tobi/astro/tobi_tenma_scythe",
    "scythe_lights": "skyhighheroes:tobi/astro/tobi_tenma_scythe_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.initBoosters(renderer, "skyhighheroes:light_gray_fire_layer1", "skyhighheroes:light_gray_fire_layer2");
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