setGlobal();

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

//Stelar Animations
function initStelarAnimations(renderer) {
    //Aiming
    addAnimationWithData(renderer, "stelar.AIMING", "skyhighheroes:stelar_aim", "fiskheroes:aiming_timer")
        .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
        .priority = 10;
    //Flight
    addFlightAnimationWithLanding(renderer, "stelar.FLIGHT", "skyhighheroes:flight/stelar_flight.anim.json");
    //Landing
    addAnimationWithData(renderer, "stelar.LAND", "skyhighheroes:stelar_landing", "skyhighheroes:dyn/superhero_landing_timer")
        .priority = -8;
}

function initMegaBuster(renderer, color) {
    bindBeam(renderer, "fiskheroes:energy_blast", "fiskheroes:repulsor_blast", "rightArm", color, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
}

function initHeadStuff(renderer) {
    hair = renderer.createEffect("fiskheroes:shield");
    hair.texture.set("hair", null);
    hair.anchor.set("head");
    hair.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
    hair.large = true;
    ears = renderer.createEffect("fiskheroes:ears");
    ears.anchor.set("head");
    ears.angle = 7.5;
    ears.inset = -0.02;
}

function initEars(renderer) {
    ears = renderer.createEffect("fiskheroes:ears");
    ears.anchor.set("head");
    ears.angle = 7.5;
    ears.inset = -0.02;
}

function initOmegaXis(renderer) {
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
}

function renderHeadStuff(entity, renderLayer) {
    if (renderLayer == "CHESTPLATE") {
        ears.render();
        hair.unfold = Math.min(Math.max(entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') < 0.5 ? (((-81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) + (50/32)) : (((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0) - entity.isDisplayStand();
        hair.render();
    }
}

function renderEars(renderLayer) {
    if (renderLayer == "CHESTPLATE") {
        ears.render();
    }
}

function renderOmegaXis(entity, renderLayer) {
    if (renderLayer == "CHESTPLATE") {
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
    }
}

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
    //Shield
    shield = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 1.0, "offset": [0.0, 5.0, 2.75], "rotation": [90.0, -180.0, 0.0] }
    ]).setCondition(entity => entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1).slotIndex = 0;
    //Katana
    katana = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.535, "offset": [-3.05, 0.52, 3.0], "rotation": [-148.0, 90.0, 0.0] },
        { "anchor": "body", "scale": 0.535, "offset": [3.05, 0.52, 3.0], "rotation": [-148.0, -90.0, 0.0] }
    ]).setCondition(entity => entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1).slotIndex = 1;
    //Scythe
    scythe = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.55, "offset": [0.5, 4.5, 3.0], "rotation": [0.0, -90.0, 35.0] }
    ]).setCondition(entity => entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1).slotIndex = 2;
}