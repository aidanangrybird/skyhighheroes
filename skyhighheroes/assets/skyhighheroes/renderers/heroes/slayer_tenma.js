extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

var colorVar = 0xBFFF00;

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
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:gold_fire_layer1", "skyhighheroes:gold_fire_layer2", true);
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", colorVar, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", colorVar, [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    renderer.bindProperty("fiskheroes:energy_bolt").color.set(colorVar);
    utils.bindTrail(renderer, "skyhighheroes:slayer_tenma_speed")
}

function getID() {
    return "0bafb632-bb1b-4c49-bb35-b23d3285f615";
}

function init(renderer) {
    parent.init(renderer)
    initEffects(renderer);
    initAnimations(renderer);
}