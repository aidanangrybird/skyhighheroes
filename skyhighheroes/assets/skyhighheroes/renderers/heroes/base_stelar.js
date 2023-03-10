var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

function init(renderer) {
    renderer.setTexture((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE") {
            if (entity.isDisplayStand()) {
                return "base";
            }
            if (entity.getUUID() != getID()) {
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
                return "lights"
            }
            if (entity.getUUID() != getID()) {
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
    initEffects(renderer);
    initAnimations(renderer);
}

function initEffects(renderer) {
    stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
    stuff.initForceField(renderer, getColor());
    omega_xis = stelar.initOmegaXis(renderer);
    stelar.initMegaBuster(renderer, getColor());
    stelar.initEquipment(renderer);
    ears = renderer.createEffect("fiskheroes:ears");
    ears.anchor.set("head");
    ears.angle = 7.5;
    ears.inset = -0.02;
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

function getNamePerson() {
    return "";
}
function getID() {
    return "";
}
function getColor() {
    return 0x00FF00;
}
function getSatellite() {
    return "pegasus";
}