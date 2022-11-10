var cannonRight;
var cannonLeft;
var cannonTop;
var cannonBottom;
var cannonFront;
var cannonBack;

//Beam setup
function bindBeam(renderer, propertyName, beam, anchor, color, entries) {
    var prop = renderer.bindProperty(propertyName).setAnchor(anchor);
    var constln = renderer.createResource("BEAM_CONSTELLATION", null);

    for (var i = 0; i < entries.length; ++i) {
        constln.bindBeam(entries[i]);
    }

    if (typeof beam === "string") {
        beam = renderer.createResource("BEAM_RENDERER", beam);
    }

    prop.setConstellation(constln);
    prop.setRenderer(beam);
    prop.color.set(color);
    return prop;
}

//Animation stuff
function parseAnimationEntry(renderer, value) {
    if (typeof value === "string") {
        return {
            "anim": renderer.createResource("ANIMATION", value),
            "weight": 1
        };
    }
    return {
        "anim": renderer.createResource("ANIMATION", value.key),
        "weight": value.hasOwnProperty("weight") ? value.weight : 1
    };
}
function addAnimationEvent(renderer, key, value) {
    var event = renderer.createResource("ANIMATION_EVENT", null);

    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; ++i) {
            var e = parseAnimationEntry(renderer, value[i]);
            event.bindAnimation(e.anim, e.weight);
        }
    }
    else {
        var e = parseAnimationEntry(renderer, value);
        event.bindAnimation(e.anim, e.weight);
    }

    renderer.addAnimationEvent(key, event);
    return event;
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
function addFlightAnimation(renderer, name, value, dataLoader) {
    var anim = renderer.createResource("ANIMATION", value);
    renderer.addCustomAnimation(name, anim);

    if (typeof dataLoader === "undefined") {
        anim.setData((entity, data) => {
            data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer"));
            data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
        });
    }
    else {
        anim.setData((entity, data) => dataLoader(entity, data));
    }

    anim.priority = -10;
    renderer.reprioritizeDefaultAnimation("PUNCH", -9);
    renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
}
function addFlightAnimationWithLanding(renderer, name, value) {
    addFlightAnimation(renderer, name, value, (entity, data) => {
        data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer") * (1 - entity.getInterpolatedData("skyhighheroes:dyn/superhero_landing_timer")));
        data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
    });
}

//Astro Animations
function initAstroAnimations(renderer) {
    //Aiming
    addAnimationWithData(renderer, "astro.AIMING", "skyhighheroes:astro_aim", "fiskheroes:aiming_timer")
        .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
        .priority = 10;
    //Dual Aiming
    addAnimationWithData(renderer, "astro.DUAL_AIMING", "skyhighheroes:astro_dual_aim", "fiskheroes:energy_projection_timer")
        .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
        .priority = 10;
    //Flight
    addFlightAnimationWithLanding(renderer, "astro.FLIGHT", "skyhighheroes:flight/astro_flight.anim.json");
    //Landing
    addAnimationWithData(renderer, "astro.LAND", "skyhighheroes:astro_landing", "skyhighheroes:dyn/superhero_landing_timer")
        .priority = -8;
}

//Init
//Beams
function initBeams(renderer, color) {
    bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", color, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", color, [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    bindBeam(renderer, "fiskheroes:energy_blast", "fiskheroes:repulsor_blast", "rightArm", color, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
}
function initDualBeams(renderer, colorLeft, colorRight) {
    bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", colorRight, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", colorLeft, [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    bindBeam(renderer, "fiskheroes:energy_blast", "fiskheroes:repulsor_blast", "rightArm", colorRight, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
}
//Cannon
function initCannon(renderer) {
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
    cannonFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(2.0, 13.0, 0.0);
    cannonFront.large = true;
    //Back
    cannonBack = renderer.createEffect("fiskheroes:shield");
    cannonBack.texture.set("cannon_back", null);
    cannonBack.anchor.set("rightArm");
    cannonBack.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(2.0, 4.0, 0.0);
    cannonBack.large = true;
}
//Equipment
function initEquipment(renderer) {
    var livery_shield = renderer.bindProperty("fiskheroes:livery");
    livery_shield.texture.set("shield");
    livery_shield.weaponType = "SHIELD";
    var livery_katana = renderer.bindProperty("fiskheroes:livery");
    livery_katana.texture.set("katana", "katana_lights");
    livery_katana.weaponType = "KATANA";
    var livery_scythe = renderer.bindProperty("fiskheroes:livery");
    livery_scythe.texture.set("scythe", "scythe_lights");
    livery_scythe.weaponType = "RUPTURES_SCYTHE";
    var livery_rifle = renderer.bindProperty("fiskheroes:livery");
    livery_rifle.texture.set("rifle", "rifle_lights");
    livery_rifle.weaponType = "CHRONOS_RIFLE";
    //Shield
    shield = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 2.75], "rotation": [90.0, -180.0, 0.0] }
    ]).slotIndex = 0;
    //Katana
    katana = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.45475, "offset": [-3.05, 0.52, 3.0], "rotation": [-148.0, 90.0, 0.0] },
        { "anchor": "body", "scale": 0.45475, "offset": [3.05, 0.52, 3.0], "rotation": [-148.0, -90.0, 0.0] }
    ]).slotIndex = 1;
    //Scythe
    scythe = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.4675, "offset": [0.5, 4.5, 3.0], "rotation": [0.0, -90.0, 35.0] }
    ]).slotIndex = 2;
    //Rifle
    rifle = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.595, "offset": [-3.5, 2.0, 3.0], "rotation": [0.0, -90.0, 60.0] }
    ]).slotIndex = 3;
}

//Render
function renderCannon(entity, renderLayer) {
    if (renderLayer == "CHESTPLATE") {
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