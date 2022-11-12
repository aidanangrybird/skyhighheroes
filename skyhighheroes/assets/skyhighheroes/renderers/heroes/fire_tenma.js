extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

var colorLeft = 0x0000FF;
var colorRight = 0xFF0000;

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
    "shield": "skyhighheroes:fire/astro/fire_tenma_shield",
    "katana": "skyhighheroes:fire/astro/fire_tenma_katana",
    "katana_lights": "skyhighheroes:fire/astro/fire_tenma_katana_lights",
    "scythe": "skyhighheroes:fire/astro/fire_tenma_scythe",
    "scythe_lights": "skyhighheroes:fire/astro/fire_tenma_scythe_lights",
    "rifle": "skyhighheroes:fire/astro/fire_tenma_rifle",
    "rifle_lights": "skyhighheroes:fire/astro/fire_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initDualBoosters(renderer, getCLR());
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:expo_tenma_speed")
}

function getID() {
    return "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
    parent.render(entity, renderLayer, isFirstPersonArm);
    rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
}