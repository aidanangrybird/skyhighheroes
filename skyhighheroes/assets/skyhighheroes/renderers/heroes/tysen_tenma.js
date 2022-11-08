extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets_dc");
var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

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
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back",
    "shield": "skyhighheroes:tysen/astro/tysen_tenma_shield",
    "katana": "skyhighheroes:tysen/astro/tysen_tenma_katana",
    "katana_lights": "skyhighheroes:tysen/astro/tysen_tenma_katana_lights",
    "scythe": "skyhighheroes:tysen/astro/tysen_tenma_scythe",
    "scythe_lights": "skyhighheroes:tysen/astro/tysen_tenma_scythe_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.initBoosters(renderer, "skyhighheroes:purple_fire_layer1", "skyhighheroes:purple_fire_layer2");
    astro.initBeams(renderer, getCLR());
}

function getID() {
    return "0ccdd53f-70bc-4039-b89b-fd3781f746f2";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}