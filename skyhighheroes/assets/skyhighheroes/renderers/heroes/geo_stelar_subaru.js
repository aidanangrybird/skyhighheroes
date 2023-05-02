extend("skyhighheroes:geo_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

var colorVar = 0x39D6BD;

loadTextures({
    "base": "skyhighheroes:geo/geo_stelar_subaru_base",
    "lights": "skyhighheroes:geo/geo_stelar_subaru_lights",
    "base_tx": "skyhighheroes:geo/geo_stelar_subaru_base.tx.json",
    "lights_tx": "skyhighheroes:geo/geo_stelar_subaru_lights.tx.json",
    "wave_change_lights": "skyhighheroes:geo/geo_stelar_subaru_wave_change_lights.tx.json",
    "cannon_bottom": "skyhighheroes:geo/geo_stelar_subaru_bottom_cannon",
    "cannon_left": "skyhighheroes:geo/geo_stelar_subaru_left_cannon",
    "cannon_right": "skyhighheroes:geo/geo_stelar_subaru_right_cannon",
    "cannon_top": "skyhighheroes:geo/geo_stelar_subaru_top_cannon",
    "cannon_front": "skyhighheroes:geo/geo_stelar_subaru_front_cannon",
    "cannon_left_lights": "skyhighheroes:geo/omega_xis_geo_stelar_subaru_left_eyes",
    "cannon_right_lights": "skyhighheroes:geo/omega_xis_geo_stelar_subaru_right_eyes",
    "blade": "skyhighheroes:geo/geo_stelar_subaru_blade",
    "shield": "skyhighheroes:geo/geo_stelar_subaru_shield",
    "shield_lights": "skyhighheroes:geo/geo_stelar_subaru_shield_lights",
    "katana": "skyhighheroes:geo/geo_stelar_subaru_katana",
    "katana_lights": "skyhighheroes:geo/geo_stelar_subaru_katana_lights",
    "scythe": "skyhighheroes:geo/geo_stelar_subaru_scythe",
    "scythe_lights": "skyhighheroes:geo/geo_stelar_subaru_scythe_lights",
    "rifle": "skyhighheroes:geo/geo_stelar_subaru_rifle",
    "rifle_lights": "skyhighheroes:geo/geo_stelar_subaru_rifle_lights"
});

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
}

function initEffects(renderer) {
    stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
    stuff.initForceField(renderer, colorVar);
    omega_xis = stelar.initOmegaXis(renderer);
    stelar.initMegaBuster(renderer, colorVar, colorVar);
    stelar.initEquipment(renderer);
    ears = renderer.createEffect("fiskheroes:ears");
    ears.anchor.set("head");
    ears.angle = 7.5;
    ears.inset = -0.02;
    stuff.bindFlightTrail(renderer, "skyhighheroes:geo_stelar_subaru_flight");
}

function initAnimations(renderer) {
    stuff.forcefieldAnimation(renderer);
    stelar.initStelarAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
    omega_xis.render(entity, renderLayer);
    ears.render();
}