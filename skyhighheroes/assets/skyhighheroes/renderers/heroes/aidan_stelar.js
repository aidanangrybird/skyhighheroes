namePerson = "aidan"

satellite = "pegasus"

uuid = "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"

extend("skyhighheroes:base_stelar")

var utils = implement("fiskheroes:external/utils");

loadTextures({
    "base": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar"),
    "lights": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_lights"),
    "suit": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_suit.tx.json"),
    "suit_lights": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_bottom_cannon"),
    "cannon_left": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_left_cannon"),
    "cannon_right": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_right_cannon"),
    "cannon_top": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_top_cannon"),
    "cannon_front": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:" + namePerson + "/omega_xis_" + namePerson + "_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:" +  namePerson + "/omega_xis_" + namePerson + "_stelar_right_eyes"),
    "transertx": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_" + satellite),
    "transer_lights": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_transer_lights"),
    "blade": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_blade"),
    "hair": ("skyhighheroes:" + namePerson + "/" + namePerson + "_stelar_hair")
});


var teleport
var blade
var ears
var omegaXisBottom
var omegaXisFront
var omegaXisLeft
var omegaXisRight
var omegaXisTop
var hair

function init(renderer) {

    renderer.setTexture((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE") {
        
        if (entity.isDisplayStand() || entity.getUUID() != uuid) {
            return "transer";
        }
        if (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 0.5 && entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0) {
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
        if (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getData("skyhighheroes:dyn/wave_changing_timer") >= 0.5) {
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
        if (entity.isDisplayStand() || entity.getUUID() != uuid) {
            return "transer_lights";
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
    initEffects(renderer);
    renderer.setItemIcons("skyhighheroes:pegasus_transer");
    initAnimations(renderer);
}


function initEffects(renderer) {
    //Teleportation Opacity
    teleport = utils.setOpacityWithData(renderer, 0.5, 1.0, "fiskheroes:teleport_timer");
    //Ears
    ears = renderer.createEffect("fiskheroes:ears");
    ears.anchor.set("head");
    ears.angle = 7.5;
    ears.inset = -0.02;
    //Blade
    blade = renderer.createEffect("fiskheroes:shield");
    blade.texture.set(null, "blade");
    blade.anchor.set("rightArm");
    blade.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.5, 8.0, 0.0);
    blade.large = true;
    //Right
    omegaXisRight = renderer.createEffect("fiskheroes:shield");
    omegaXisRight.texture.set("cannon_right", "cannon_right_lights");
    omegaXisRight.anchor.set("rightArm");
    omegaXisRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 7.0, 3.0);
    omegaXisRight.large = true;
    //Left
    omegaXisLeft = renderer.createEffect("fiskheroes:shield");
    omegaXisLeft.texture.set("cannon_left", "cannon_left_lights");
    omegaXisLeft.anchor.set("rightArm");
    omegaXisLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 7.0, -3.0);
    omegaXisLeft.large = true;
    //Top
    omegaXisTop = renderer.createEffect("fiskheroes:shield");
    omegaXisTop.texture.set("cannon_top", null);
    omegaXisTop.anchor.set("rightArm");
    omegaXisTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 7.0, 0.0);
    omegaXisTop.large = true;
    //Bottom
    omegaXisBottom = renderer.createEffect("fiskheroes:shield");
    omegaXisBottom.texture.set("cannon_bottom", null);
    omegaXisBottom.anchor.set("rightArm");
    omegaXisBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 7.0, 0.0);
    omegaXisBottom.large = true;
    //Front
    omegaXisFront = renderer.createEffect("fiskheroes:shield");
    omegaXisFront.texture.set("cannon_front", null);
    omegaXisFront.anchor.set("rightArm");
    omegaXisFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 12.0, 0.0);
    omegaXisFront.large = true;
    //Hair
    hair = renderer.createEffect("fiskheroes:shield");
    hair.texture.set("hair", null);
    hair.anchor.set("head");
    hair.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
    hair.large = true;
}

function initAnimations(renderer) {
    addAnimationWithData(renderer, "basic.BLOCKING", "skyhighheroes:force_field_holding", "fiskheroes:shield_blocking_timer")
        .priority = -5;

    addAnimationWithData(renderer, "basic.AIMING", "skyhighheroes:stelar_aim", "fiskheroes:aiming_timer")
        .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
        .priority = 10;

    utils.addAnimationEvent(renderer, "CEILING_CRAWL", "skyhighheroes:em_wall_ceiling_stand");

    utils.addFlightAnimationWithLanding(renderer, "iron_man.FLIGHT", "fiskheroes:flight/iron_man.anim.json");
    addAnimationWithData(renderer, "iron_man.LAND", "fiskheroes:superhero_landing", "fiskheroes:dyn/superhero_landing_timer")
        .priority = -8;
}

function addAnimation(renderer, key, anim) {
    if (typeof anim === "string") {
        anim = renderer.createResource("ANIMATION", anim);
    }

    renderer.addCustomAnimation(key, anim);
    return anim;
}

function addAnimationWithData(renderer, key, anim, dataVar) {
    return addAnimation(renderer, key, anim).setData((entity, data) => data.load(entity.getInterpolatedData(dataVar)));
}

function render(entity, renderLayer) {
    if (renderLayer == "CHESTPLATE") {
        ears.render();
        blade.unfold = 0 + (entity.getHeldItem().isEmpty() && entity.getData('skyhighheroes:dyn/battle_card') == 2);
        blade.render();
        omegaXisRight.unfold = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
        omegaXisRight.render();
        omegaXisLeft.unfold = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
        omegaXisLeft.render();
        omegaXisTop.unfold = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
        omegaXisTop.render();
        omegaXisBottom.unfold = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
        omegaXisBottom.render();
        omegaXisFront.unfold = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
        omegaXisFront.render();
        hair.unfold = Math.min(Math.max(entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') < 0.5 ? (((-81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) + (50/32)) : (((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0) - entity.isDisplayStand();
        hair.render();
    }
}