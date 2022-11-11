extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function getCLR() {
    return 0x0000E8;
}

loadTextures({
    "lights" : "skyhighheroes:minecraft/astro/minecraft_tenma_lights",
    "lights_flying" : "skyhighheroes:minecraft/astro/minecraft_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:minecraft/astro/minecraft_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:minecraft/astro/minecraft_tenma_lights_normal_flying",
    "base": "skyhighheroes:minecraft/astro/minecraft_tenma_base",
    "base_flying": "skyhighheroes:minecraft/astro/minecraft_tenma_base_flying",
    "long" : "skyhighheroes:minecraft/astro/minecraft_tenma_long",
    "long_flying" : "skyhighheroes:minecraft/astro/minecraft_tenma_long_flying",
    "short" : "skyhighheroes:minecraft/astro/minecraft_tenma_short",
    "short_flying" : "skyhighheroes:minecraft/astro/minecraft_tenma_short_flying",
    "normal" : "skyhighheroes:minecraft/astro/minecraft_tenma_normal",
    "normal_flying" : "skyhighheroes:minecraft/astro/minecraft_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:minecraft/astro/minecraft_tenma_cannon_lights_inner",
    "shield": "skyhighheroes:minecraft/astro/minecraft_tenma_shield",
    "katana": "skyhighheroes:minecraft/astro/minecraft_tenma_katana",
    "katana_lights": "skyhighheroes:minecraft/astro/minecraft_tenma_katana_lights",
    "scythe": "skyhighheroes:minecraft/astro/minecraft_tenma_scythe",
    "scythe_lights": "skyhighheroes:minecraft/astro/minecraft_tenma_scythe_lights",
    "rifle": "skyhighheroes:minecraft/astro/minecraft_tenma_rifle",
    "rifle_lights": "skyhighheroes:minecraft/astro/minecraft_tenma_rifle_lights"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.initBoosters(renderer, "skyhighheroes:dark_blue_fire_layer1", "skyhighheroes:dark_blue_fire_layer2");
    astro.initBeams(renderer, getCLR());
    stuff.bindSpeedTrail(renderer, "skyhighheroes:minecraft_tenma_speed");
}

function getID() {
    return "f849622f-b7cc-4ff5-8ce1-484f75c1ffa3";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}