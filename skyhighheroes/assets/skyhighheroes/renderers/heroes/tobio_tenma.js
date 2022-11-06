var utils = implement("fiskheroes:external/utils");
var rockets = implement("skyhighheroes:external/astro_rockets");

var cannonBottom;
var cannonFront;
var cannonLeft;
var cannonRight;
var cannonTop;
var cannonBack;

loadTextures({
    "lights" : "skyhighheroes:astro/tobio_tenma_lights",
    "lights_flying" : "skyhighheroes:astro/tobio_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:astro/tobio_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:astro/tobio_tenma_lights_normal_flying",
    "base": "skyhighheroes:astro/tobio_tenma_base",
    "base_flying": "skyhighheroes:astro/tobio_tenma_base_flying",
    "long" : "skyhighheroes:astro/tobio_tenma_long",
    "long_flying" : "skyhighheroes:astro/tobio_tenma_long_flying",
    "short" : "skyhighheroes:astro/tobio_tenma_short",
    "short_flying" : "skyhighheroes:astro/tobio_tenma_short_flying",
    "normal" : "skyhighheroes:astro/tobio_tenma_normal",
    "normal_flying" : "skyhighheroes:astro/tobio_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:astro/tobio_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function init(renderer) {

    renderer.setTexture((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE" || renderLayer == "LEGGINGS" || renderLayer == "HELMET" || renderLayer == "BOOTS") {
        
        if (entity.isDisplayStand()) {
            return "base";
        }
        if (entity.getData("fiskheroes:flying")) {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                return "base_flying";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                return "long_flying";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                return "short_flying";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "normal_flying";
            }
        }
        if (!entity.getData("fiskheroes:flying")) {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                return "base";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                return "long";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                return "short";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "normal";
            }
        }
        else {
            return "null";
        }
    }
    });
    renderer.setLights((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE" || renderLayer == "LEGGINGS" || renderLayer == "HELMET" || renderLayer == "BOOTS") {
        if (entity.isDisplayStand()) {
            return "lights";
        }
        if (entity.getData("fiskheroes:flying")) {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") != 3) {
                return "lights_flying";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "lights_normal_flying";
            }
        }
        if (!entity.getData("fiskheroes:flying")) {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") != 3) {
                return "lights";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "lights_normal";
            }
        }
        else {
            return "null";
        }
    }
    });
    
    renderer.setItemIcons("%s_head", "%s_torso", "%s_legs", "%s_boots");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm");
    renderer.showModel("LEGGINGS", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
    renderer.fixHatLayer("HELMET");
    initEffects(renderer);
    initAnimations(renderer);
}



function initEffects(renderer) {
    //Boot Rockets
    rockets.init(renderer, "skyhighheroes:normal_fire_layer1", "skyhighheroes:normal_fire_layer2");
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", colorVar, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", colorVar, [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    utils.bindBeam(renderer, "fiskheroes:energy_blast", "fiskheroes:repulsor_blast", "rightArm", colorVar, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    utils.bindTrail(renderer, "skyhighheroes:tobio_tenma_speed")
    //Right
    cannonRight = renderer.createEffect("fiskheroes:shield");
    cannonRight.texture.set("cannon", null);
    cannonRight.anchor.set("rightArm");
    cannonRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.0, 3.0);
    cannonRight.large = true;
    //Left
    cannonLeft = renderer.createEffect("fiskheroes:shield");
    cannonLeft.texture.set("cannon", null);
    cannonLeft.anchor.set("rightArm");
    cannonLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.0, -3.0);
    cannonLeft.large = true;
    //Top
    cannonTop = renderer.createEffect("fiskheroes:shield");
    cannonTop.texture.set("cannon", null);
    cannonTop.anchor.set("rightArm");
    cannonTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 8.0, 0.0);
    cannonTop.large = true;
    //Bottom
    cannonBottom = renderer.createEffect("fiskheroes:shield");
    cannonBottom.texture.set("cannon", null);
    cannonBottom.anchor.set("rightArm");
    cannonBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 8.0, 0.0);
    cannonBottom.large = true;
    //Front
    cannonFront = renderer.createEffect("fiskheroes:shield");
    cannonFront.texture.set(null, "cannon_lights_inner");
    cannonFront.anchor.set("rightArm");
    cannonFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 13.0, 0.0);
    cannonFront.large = true;
    //Back
    cannonBack = renderer.createEffect("fiskheroes:shield");
    cannonBack.texture.set("cannon_back", null);
    cannonBack.anchor.set("rightArm");
    cannonBack.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(2.0, 4.0, 0.0);
    cannonBack.large = true;
}

function initAnimations(renderer) {
    addAnimationWithData(renderer, "skyhigh.BLOCKING", "skyhighheroes:force_field_holding", "fiskheroes:shield_blocking_timer")
        .priority = -5;

    addAnimationWithData(renderer, "basic.AIMING", "fiskheroes:aiming", "fiskheroes:aiming_timer")
        .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
        .priority = 10;
    addAnimationWithData(renderer, "astro.AIMING_DUAL", "skyhighheroes:astro_aiming", "fiskheroes:energy_projection_timer")
        .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
        .priority = 10;

    utils.addFlightAnimationWithLanding(renderer, "iron_man.FLIGHT", "fiskheroes:flight/iron_man.anim.json");
    addAnimationWithData(renderer, "iron_man.LAND", "fiskheroes:superhero_landing", "fiskheroes:dyn/superhero_landing_timer")
        .priority = -8;
    renderer.reprioritizeDefaultAnimation("PUNCH", -9);
    renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
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

function render(entity, renderLayer, isFirstPersonArm) {
    rockets.render(entity, renderLayer, isFirstPersonArm, false);
    if (renderLayer == "CHESTPLATE" || renderLayer == "LEGGINGS" || renderLayer == "HELMET" || renderLayer == "BOOTS") {
            cannonRight.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
            cannonRight.render();
            cannonLeft.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
            cannonLeft.render();
            cannonTop.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
            cannonTop.render();
            cannonBottom.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
            cannonBottom.render();
            cannonFront.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
            cannonFront.render();
            cannonBack.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
            cannonBack.render();
        }
}

var colorVar = 0xFFFFFF