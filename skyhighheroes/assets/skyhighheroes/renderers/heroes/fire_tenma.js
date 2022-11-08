extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var astro = implement("skyhighheroes:external/astro");

function getCLR() {
    return 0xFF0000;
}

loadTextures({
    "lights" : "skyhighheroes:fire/astro/fire_tenma_lights",
    "lights_flying" : "skyhighheroes:fire/astro/fire_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:fire/astro/fire_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:fire/astro/fire_tenma_lights_normal_flying",
    "base": "skyhighheroes:fire/astro/fire_tenma_base",
    "base_flying": "skyhighheroes:fire/astro/fire_tenma_base_flying",
    "long" : "skyhighheroes:fire/astro/fire_tenma_long",
    "long_flying" : "skyhighheroes:fire/astro/fire_tenma_long_flying",
    "short" : "skyhighheroes:fire/astro/fire_tenma_short",
    "short_flying" : "skyhighheroes:fire/astro/fire_tenma_short_flying",
    "normal" : "skyhighheroes:fire/astro/fire_tenma_normal",
    "normal_flying" : "skyhighheroes:fire/astro/fire_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:fire/astro/fire_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back",
    "shield": "skyhighheroes:fire/astro/fire_tenma_shield",
    "katana": "skyhighheroes:fire/astro/fire_tenma_katana",
    "katana_lights": "skyhighheroes:fire/astro/fire_tenma_katana_lights",
    "scythe": "skyhighheroes:fire/astro/fire_tenma_scythe",
    "scythe_lights": "skyhighheroes:fire/astro/fire_tenma_scythe_lights"
});

function initEffects(renderer) {
    //Boot Rockets
    rockets.initDualBoosters(renderer, "skyhighheroes:red_fire_layer1", "skyhighheroes:blue_fire_layer1", "skyhighheroes:red_fire_layer2", "skyhighheroes:blue_fire_layer2");
    astro.initDualBeams(renderer, 0x0000FF, 0xFF0000);
}

function getID() {
    return "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}