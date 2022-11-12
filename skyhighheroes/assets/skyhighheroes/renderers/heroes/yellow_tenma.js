extend("skyhighheroes:base_tenma");

var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0x00FFFF;
}

loadTextures({
    "lights" : "skyhighheroes:yellow/astro/yellow_tenma_lights",
    "lights_flying" : "skyhighheroes:yellow/astro/yellow_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:yellow/astro/yellow_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:yellow/astro/yellow_tenma_lights_normal_flying",
    "base": "skyhighheroes:yellow/astro/yellow_tenma_base",
    "base_flying": "skyhighheroes:yellow/astro/yellow_tenma_base_flying",
    "long" : "skyhighheroes:yellow/astro/yellow_tenma_long",
    "long_flying" : "skyhighheroes:yellow/astro/yellow_tenma_long_flying",
    "short" : "skyhighheroes:yellow/astro/yellow_tenma_short",
    "short_flying" : "skyhighheroes:yellow/astro/yellow_tenma_short_flying",
    "normal" : "skyhighheroes:yellow/astro/yellow_tenma_normal",
    "normal_flying" : "skyhighheroes:yellow/astro/yellow_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:yellow/astro/yellow_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:yellow/astro/yellow_tenma_shield",
    "katana": "skyhighheroes:yellow/astro/yellow_tenma_katana",
    "katana_lights": "skyhighheroes:yellow/astro/yellow_tenma_katana_lights",
    "scythe": "skyhighheroes:yellow/astro/yellow_tenma_scythe",
    "scythe_lights": "skyhighheroes:yellow/astro/yellow_tenma_scythe_lights",
    "rifle": "skyhighheroes:yellow/astro/yellow_tenma_rifle",
    "rifle_lights": "skyhighheroes:yellow/astro/yellow_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets = astro.initBoosters(renderer, getCLR());
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:yellow_tenma_speed");
}

function getID() {
    return "60f30003-1148-416b-8b4d-347002891126";
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