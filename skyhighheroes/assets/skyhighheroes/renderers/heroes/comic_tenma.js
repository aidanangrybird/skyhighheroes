extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

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
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function initEffects(renderer) {
    parent.initEffects(renderer);
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:blue_fire_layer1", "skyhighheroes:blue_fire_layer2");
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", getCLR(), [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", getCLR(), [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    renderer.bindProperty("fiskheroes:energy_bolt").color.set(getCLR());
    utils.bindTrail(renderer, "skyhighheroes:comic_tenma_speed")
}

function getID() {
    return "02761162-3863-410d-ae8c-fede80c6fb27";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}