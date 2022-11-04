extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

var colorVar = 0x00FFFF;

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
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:cyan_fire_layer1", "skyhighheroes:cyan_fire_layer2", true);
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", colorVar, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", colorVar, [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    renderer.bindProperty("fiskheroes:energy_bolt").color.set(colorVar);
    utils.bindTrail(renderer, "skyhighheroes:yellow_tenma_speed")
}

function getID() {
    return "60f30003-1148-416b-8b4d-347002891126";
}

function init(renderer) {
    parent.init(renderer)
    initEffects(renderer);
    initAnimations(renderer);
}