extend("skyhighheroes:geo_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var aura = implement("skyhighheroes:external/stelar_aura");
var stuff = implement("skyhighheroes:external/stuff");

var colorVar = 0x39D6BD;

loadTextures({
    "base": ("skyhighheroes:geo/subaru/geo_stelar_subaru"),
    "lights": ("skyhighheroes:geo/subaru/geo_stelar_subaru_lights"),
    "suit": ("skyhighheroes:geo/subaru/geo_stelar_subaru_suit.tx.json"),
    "suit_lights": ("skyhighheroes:geo/subaru/geo_stelar_subaru_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:geo/geo_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:geo/geo_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:geo/geo_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:geo/geo_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:geo/geo_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:geo/geo_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:geo/geo_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:geo/geo_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:geo/geo_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:geo/geo_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:geo/subaru/geo_stelar_subaru_bottom_cannon"),
    "cannon_left": ("skyhighheroes:geo/subaru/geo_stelar_subaru_left_cannon"),
    "cannon_right": ("skyhighheroes:geo/subaru/geo_stelar_subaru_right_cannon"),
    "cannon_top": ("skyhighheroes:geo/subaru/geo_stelar_subaru_top_cannon"),
    "cannon_front": ("skyhighheroes:geo/subaru/geo_stelar_subaru_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:geo/subaru/omega_xis_geo_stelar_subaru_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:geo/subaru/omega_xis_geo_stelar_subaru_right_eyes"),
    "transertx": ("skyhighheroes:geo/geo_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:geo/geo_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:geo/geo_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:geo/geo_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:stelar_transer_lights"),
    "blade": ("skyhighheroes:geo/subaru/geo_stelar_subaru_blade"),
    "shield": ("skyhighheroes:geo/subaru/geo_stelar_subaru_shield"),
    "katana": ("skyhighheroes:geo/subaru/geo_stelar_subaru_katana"),
    "katana_lights": ("skyhighheroes:geo/subaru/geo_stelar_subaru_katana_lights"),
    "scythe": ("skyhighheroes:geo/subaru/geo_stelar_subaru_scythe"),
    "scythe_lights": ("skyhighheroes:geo/subaru/geo_stelar_subaru_scythe_lights")
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