extend("skyhighheroes:geo_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var aura = implement("skyhighheroes:external/stelar_aura");
var stuff = implement("skyhighheroes:external/stuff");

var colorVar = 0x39D6BD;

loadTextures({
    "base": "skyhighheroes:geo/subaru/geo_stelar_subaru",
    "lights": "skyhighheroes:geo/subaru/geo_stelar_subaru_lights",
    "suit": "skyhighheroes:geo/subaru/geo_stelar_subaru_suit.tx.json",
    "suit_lights": "skyhighheroes:geo/subaru/geo_stelar_subaru_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:geo/subaru/geo_stelar_subaru_bottom_cannon",
    "cannon_left": "skyhighheroes:geo/subaru/geo_stelar_subaru_left_cannon",
    "cannon_right": "skyhighheroes:geo/subaru/geo_stelar_subaru_right_cannon",
    "cannon_top": "skyhighheroes:geo/subaru/geo_stelar_subaru_top_cannon",
    "cannon_front": "skyhighheroes:geo/subaru/geo_stelar_subaru_front_cannon",
    "cannon_left_lights": "skyhighheroes:geo/subaru/omega_xis_geo_stelar_subaru_left_eyes",
    "cannon_right_lights": "skyhighheroes:geo/subaru/omega_xis_geo_stelar_subaru_right_eyes",
    "blade": "skyhighheroes:geo/subaru/geo_stelar_subaru_blade",
    "shield": "skyhighheroes:geo/subaru/geo_stelar_subaru_shield",
    "katana": "skyhighheroes:geo/subaru/geo_stelar_subaru_katana",
    "katana_lights": "skyhighheroes:geo/subaru/geo_stelar_subaru_katana_lights",
    "scythe": "skyhighheroes:geo/subaru/geo_stelar_subaru_scythe",
    "scythe_lights": "skyhighheroes:geo/subaru/geo_stelar_subaru_scythe_lights",
    "rifle": "skyhighheroes:geo/subaru/geo_stelar_subaru_rifle",
    "rifle_lights": "skyhighheroes:geo/subaru/geo_stelar_subaru_rifle_lights"
});

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
}

function initEffects(renderer) {
    stuff.emTeleport(renderer);
    stuff.initForceField(renderer, colorVar);
    stuff.bindFlightTrail(renderer, "skyhighheroes:geo_stelar_subaru_flight");
    stelar.initMegaBuster(renderer, colorVar);
    aura.initAura(renderer, colorVar);
    aura.initOmegaXisAura(renderer, colorVar);
}