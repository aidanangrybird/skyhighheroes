var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

var colorVar = 0x00FF00;

loadTextures({
    "base": "skyhighheroes:geo/geo_stelar",
    "lights": "skyhighheroes:geo/geo_stelar_lights",
    "suit": "skyhighheroes:geo/geo_stelar_suit.tx.json",
    "suit_lights": "skyhighheroes:geo/geo_stelar_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:geo/geo_stelar_up_transer",
    "visualizer_down": "skyhighheroes:geo/geo_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:geo/geo_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:geo/geo_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:geo/geo_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:geo/geo_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:geo/geo_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:geo/geo_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:geo/geo_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:geo/geo_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:geo/geo_stelar_bottom_cannon",
    "cannon_left": "skyhighheroes:geo/geo_stelar_left_cannon",
    "cannon_right": "skyhighheroes:geo/geo_stelar_right_cannon",
    "cannon_top": "skyhighheroes:geo/geo_stelar_top_cannon",
    "cannon_front": "skyhighheroes:geo/geo_stelar_front_cannon",
    "cannon_left_lights": "skyhighheroes:geo/omega_xis_geo_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:geo/omega_xis_geo_stelar_right_eyes",
    "transertx": "skyhighheroes:geo/geo_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:geo/geo_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:geo/geo_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:geo/geo_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_pegasus",
    "transer_lights": "skyhighheroes:stelar_transer_lights",
    "blade": "skyhighheroes:geo/geo_stelar_blade",
    "shield": "skyhighheroes:geo/geo_stelar_shield",
    "katana": "skyhighheroes:geo/geo_stelar_katana",
    "katana_lights": "skyhighheroes:geo/geo_stelar_katana_lights",
    "scythe": "skyhighheroes:geo/geo_stelar_scythe",
    "scythe_lights": "skyhighheroes:geo/geo_stelar_scythe_lights",
    "rifle": "skyhighheroes:geo/geo_stelar_rifle",
    "rifle_lights": "skyhighheroes:geo/geo_stelar_rifle_lights"
});

function init(renderer) {
    renderer.setTexture((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE") {
            if (entity.isDisplayStand()) {
                return "transer";
            }
            if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 0.5 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0) {
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 0) {
                    return "transertx";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 1) {
                    return "shorttx";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 2) {
                    return "swimsuittx";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
                    return "normaltx";
                }
            }
            if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") >= 0.5) {
                return "suit";
            }
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                return "base"
            }
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 0) {
                    return "visualizer_up";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 1) {
                    return "visualizer_up_short";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 2) {
                    return "visualizer_up_swimsuit";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
                    return "visualizer_up_normal";
                }
            }
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 0) {
                    return "visualizer_down";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 1) {
                    return "visualizer_down_short";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 2) {
                    return "visualizer_down_swimsuit";
                }
                if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
                    return "visualizer_down_normal";
                }
            }
            else {
                return "null";
            }
        }
    });
    renderer.setLights((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE") {
            if (entity.isDisplayStand()) {
                return "transer_lights"
            }
            if (entity.getData("skyhighheroes:dyn/visualizer_toggle") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) {
                return "visualizer_up_lights";
            }
            if (entity.getData("skyhighheroes:dyn/visualizer_toggle") == 1 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) {
                return "visualizer_down_lights";
            }
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0) {
                return "suit_lights";
            }
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                return "lights";
            }
            else {
                return "null";
            }
        }
    });
    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
    renderer.fixHatLayer("CHESTPLATE");
    renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
    initEffects(renderer);
    initAnimations(renderer);
}

function initEffects(renderer) {
    stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
    stuff.initForceField(renderer, colorVar);
    omega_xis = stelar.initOmegaXis(renderer);
    stelar.initMegaBuster(renderer, colorVar);
    stelar.initEquipment(renderer);
    ears = renderer.createEffect("fiskheroes:ears");
    ears.anchor.set("head");
    ears.angle = 7.5;
    ears.inset = -0.02;
    stuff.bindFlightTrail(renderer, "skyhighheroes:geo_stelar_flight");
}

function initAnimations(renderer) {
    stuff.forcefieldAnimation(renderer);
    stuff.emCeilingAnimation(renderer);
    stelar.initStelarAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
    omega_xis.render(entity, renderLayer);
    ears.render();
}