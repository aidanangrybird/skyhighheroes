extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

function getCLR() {
    return 0xBFFF00;
}

loadTextures({
    "lights" : "skyhighheroes:slayer/astro/slayer_tenma_lights",
    "lights_flying" : "skyhighheroes:slayer/astro/slayer_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:slayer/astro/slayer_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:slayer/astro/slayer_tenma_lights_normal_flying",
    "base": "skyhighheroes:slayer/astro/slayer_tenma_base",
    "base_flying": "skyhighheroes:slayer/astro/slayer_tenma_base_flying",
    "long" : "skyhighheroes:slayer/astro/slayer_tenma_long",
    "long_flying" : "skyhighheroes:slayer/astro/slayer_tenma_long_flying",
    "short" : "skyhighheroes:slayer/astro/slayer_tenma_short",
    "short_flying" : "skyhighheroes:slayer/astro/slayer_tenma_short_flying",
    "normal" : "skyhighheroes:slayer/astro/slayer_tenma_normal",
    "normal_flying" : "skyhighheroes:slayer/astro/slayer_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:slayer/astro/slayer_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back",
    "shield": "skyhighheroes:slayer/astro/slayer_tenma_shield",
    "katana": "skyhighheroes:slayer/astro/slayer_tenma_katana",
    "katana_lights": "skyhighheroes:slayer/astro/slayer_tenma_katana_lights",
    "scythe": "skyhighheroes:slayer/astro/slayer_tenma_scythe",
    "scythe_lights": "skyhighheroes:slayer/astro/slayer_tenma_scythe_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:gold_fire_layer1", "skyhighheroes:gold_fire_layer2");
    utils.bindTrail(renderer, "skyhighheroes:slayer_tenma_speed")
}

function getID() {
    return "0bafb632-bb1b-4c49-bb35-b23d3285f615";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}