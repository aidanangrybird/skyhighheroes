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
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [1.0, 1.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", color, [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [1.0, 1.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    renderer.bindProperty("fiskheroes:energy_bolt").color.set(color);
    bindBeam(renderer, "fiskheroes:energy_manipulation", "fiskheroes:energy_discharge", "rightArm", color, [
        { "firstPerson": [-2.5, 0.0, -7.0], "offset": [-0.5, 19.0, -12.0], "size": [1.5, 1.5] }
    ]);
}
function initDualBeams(renderer, colorLeft, colorRight) {
    bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", colorRight, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [1.0, 1.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", colorLeft, [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [1.0, 1.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    renderer.bindProperty("fiskheroes:energy_bolt").color.set(colorRight);
    bindBeam(renderer, "fiskheroes:energy_manipulation", "fiskheroes:energy_discharge", "rightArm", colorRight, [
        { "firstPerson": [-2.5, 0.0, -7.0], "offset": [-0.5, 19.0, -12.0], "size": [1.5, 1.5] }
    ]);
}
//Cannon
function initCannon(renderer) {
    light_thing = renderer.createEffect("fiskheroes:overlay");
    light_thing.texture.set(null, "cannon_lights");
    var obj = {
        light_thing: light_thing,
        render: (entity, renderLayer) => {
            if (renderLayer == "CHESTPLATE" && entity.getHeldItem().isEmpty()) {
                light_thing.opacity = entity.getInterpolatedData('fiskheroes:aiming_timer');
                light_thing.render();
            }
        }
    };
    return obj;
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
    //Katana
    katana = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.45475, "offset": [-3.05, 0.52, 2.5], "rotation": [-148.0, 90.0, 0.0] },
        { "anchor": "body", "scale": 0.45475, "offset": [3.05, 0.52, 2.5], "rotation": [-148.0, -90.0, 0.0] }
    ]).slotIndex = 0;
    //Scythe
    scythe_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.4675, "offset": [0.5, 4.5, 2.5], "rotation": [0.0, -90.0, 35.0] }
    ]).setCondition(entity => (entity.getWornChestplate().nbt().getTagList("Equipment").tagCount() == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2)).slotIndex = 1;
    scythe_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.4675, "offset": [0.5, 4.5, 3.5], "rotation": [0.0, -90.0, 35.0] }
    ]).setCondition(entity => entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0).slotIndex = 1;
    //Rifle
    rifle_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.595, "offset": [-3.5, 2.0, 2.5], "rotation": [0.0, -90.0, 60.0] }
    ]).setCondition(entity => (entity.getWornChestplate().nbt().getTagList("Equipment").tagCount() == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1)).slotIndex = 2;
    rifle_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.595, "offset": [-3.5, 2.0, 3.5], "rotation": [0.0, -90.0, 60.0] }
    ]).setCondition(entity => entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0).slotIndex = 2;
    //Shield
    shield_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 2.5], "rotation": [90.0, -180.0, 0.0] }
    ]).setCondition(entity => entity.getWornChestplate().nbt().getTagList("Equipment").tagCount() == 1).slotIndex = 3;
    shield_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 3.5], "rotation": [90.0, -180.0, 0.0] }
    ]).setCondition(entity => ((entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") != 3) || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 2) || (entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(3).getInteger("Index") != 3 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") != 3)).slotIndex = 3;
    shield_2 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 4.5], "rotation": [90.0, -180.0, 0.0] }
    ]).setCondition(entity => ((entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") == 2 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2) && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0)).slotIndex = 3;
}

function initBoosters(renderer, color) {
    var icon = renderer.createResource("ICON", "skyhighheroes:null");
    //Left
    var boosterLeft = renderer.createEffect("fiskheroes:booster");
    boosterLeft.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterLeft.anchor.set("leftLeg");
    boosterLeft.mirror = false;
    //Right
    var boosterRight = renderer.createEffect("fiskheroes:booster");
    boosterRight.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterRight.anchor.set("rightLeg");
    boosterRight.mirror = false;

    var boosterLeftArm = renderer.createEffect("fiskheroes:booster");
    boosterLeftArm.setIcon(icon).setOffset(-1.0, 10.0, 0.0).setSize(4.0, 2.0);
    boosterLeftArm.anchor.set("leftArm");
    boosterLeftArm.mirror = false;
    
    var boosterRightArm = renderer.createEffect("fiskheroes:booster");
    boosterRightArm.setIcon(icon).setOffset(1.0, 10.0, 0.0).setSize(4.0, 2.0);
    boosterRightArm.anchor.set("rightArm");
    boosterRightArm.mirror = false;

    beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:astro_booster");

    //Outer
    var shapeOuter = renderer.createResource("SHAPE", null);
    var lineOuter = shapeOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
    var bloomLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuter).setOffset(0.0, 12.0, 0.0);
    var bloomRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuter).setOffset(0.0, 12.0, 0.0);
    bloomLeftOuter.anchor.set("leftLeg");
    bloomLeftOuter.color.set(color);
    bloomLeftOuter.mirror = false;
    bloomLeftOuter.setScale(16.0);
    bloomRightOuter.anchor.set("rightLeg");
    bloomRightOuter.color.set(color);
    bloomRightOuter.mirror = false;
    bloomRightOuter.setScale(16.0);

    //Middle
    var shapeMiddle = renderer.createResource("SHAPE", null);
    var lineMiddle = shapeMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
    var bloomLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMiddle).setOffset(0.0, 12.0, 0.0);
    var bloomRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMiddle).setOffset(0.0, 12.0, 0.0);
    bloomLeftMiddle.anchor.set("leftLeg");
    bloomLeftMiddle.color.set(color);
    bloomLeftMiddle.mirror = false;
    bloomLeftMiddle.setScale(16.0);
    bloomRightMiddle.anchor.set("rightLeg");
    bloomRightMiddle.color.set(color);
    bloomRightMiddle.mirror = false;
    bloomRightMiddle.setScale(16.0);

    //Inner
    var shapeInner = renderer.createResource("SHAPE", null);
    var lineInner = shapeInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
    var bloomLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInner).setOffset(0.0, 12.0, 0.0);
    var bloomRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInner).setOffset(0.0, 12.0, 0.0);
    bloomLeftInner.anchor.set("leftLeg");
    bloomLeftInner.color.set(color);
    bloomLeftInner.mirror = false;
    bloomLeftInner.setScale(16.0);
    bloomRightInner.anchor.set("rightLeg");
    bloomRightInner.color.set(color);
    bloomRightInner.mirror = false;
    bloomRightInner.setScale(16.0);
    
    //Arms
    //Outer
    var shapeArmOuter = renderer.createResource("SHAPE", null);
    var lineArmOuter = shapeArmOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
    var bloomLeftArmOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmOuter.anchor.set("leftArm");
    bloomLeftArmOuter.color.set(color);
    bloomLeftArmOuter.mirror = false;
    bloomLeftArmOuter.setScale(16.0);
    bloomRightArmOuter.anchor.set("rightArm");
    bloomRightArmOuter.color.set(color);
    bloomRightArmOuter.mirror = false;
    bloomRightArmOuter.setScale(16.0);

    //Middle
    var shapeArmMiddle = renderer.createResource("SHAPE", null);
    var lineArmMiddle = shapeArmMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
    var bloomLeftArmMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmMiddle.anchor.set("leftArm");
    bloomLeftArmMiddle.color.set(color);
    bloomLeftArmMiddle.mirror = false;
    bloomLeftArmMiddle.setScale(16.0);
    bloomRightArmMiddle.anchor.set("rightArm");
    bloomRightArmMiddle.color.set(color);
    bloomRightArmMiddle.mirror = false;
    bloomRightArmMiddle.setScale(16.0);

    //Inner
    var shapeArmInner = renderer.createResource("SHAPE", null);
    var lineArmInner = shapeArmInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
    var bloomLeftArmInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmInner.anchor.set("leftArm");
    bloomLeftArmInner.color.set(color);
    bloomLeftArmInner.mirror = false;
    bloomLeftArmInner.setScale(16.0);
    bloomRightArmMiddle.anchor.set("rightArm");
    bloomRightArmMiddle.color.set(color);
    bloomRightArmMiddle.mirror = false;
    bloomRightArmMiddle.setScale(16.0);

    var obj = {
        boosterLeft: boosterLeft,
        boosterRight: boosterRight,
        bloomLeftOuter: bloomLeftOuter,
        bloomRightOuter: bloomRightOuter,
        bloomLeftMiddle: bloomLeftMiddle,
        bloomRightMiddle: bloomRightMiddle,
        bloomLeftInner: bloomLeftInner,
        bloomRightInner: bloomRightInner,
        boosterLeftArm: boosterLeftArm,
        boosterRightArm: boosterRightArm,
        bloomLeftArmOuter: bloomLeftArmOuter,
        bloomLeftArmMiddle: bloomLeftArmMiddle,
        bloomLeftArmInner: bloomLeftArmInner,
        bloomRightArmOuter: bloomRightArmOuter,
        bloomRightArmMiddle: bloomRightArmMiddle,
        bloomRightArmInner: bloomRightArmInner,
        renderBoosters: (entity, renderLayer, isFirstPersonArm) => {
            if (!isFirstPersonArm) {

                if (renderLayer == "BOOTS") {
                    //Equations
                    var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
                    var flight = entity.getInterpolatedData("fiskheroes:flight_timer");
                    var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
                    b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
                    var f = Math.PI * 2;
                    f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
                    
                    //Left
                    //Booster
                    boosterLeft.progress = boost;
                    boosterLeft.speedScale = 0.5 * boost;
                    boosterLeft.flutter = 1 + boost;
                    boosterLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterLeft.render();
                    //Beams
                    lineOuter.end.y = (1 + f * boosterLeft.flutter / 4) * 3.5 * 3.5 / 8;
                    lineMiddle.end.y = (1 + f * boosterLeft.flutter / 4) * 3.25 * 3.25 / 8;
                    lineInner.end.y = (1 + f * boosterLeft.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomLeftOuter.progress = bloomLeftOuter.opacity = flight;
                    bloomLeftOuter.render();
                    //Middle
                    bloomLeftMiddle.progress = bloomLeftMiddle.opacity = flight;
                    bloomLeftMiddle.render();
                    //Inner
                    bloomLeftInner.progress = bloomLeftInner.opacity = flight;
                    bloomLeftInner.render();
        
                    //Right
                    //Booster
                    boosterRight.progress = boost;
                    boosterRight.speedScale = 0.5 * boost;
                    boosterRight.flutter = 1 + boost;
                    boosterRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterRight.render();
                    //Beam
                    lineOuter.end.y = (1 + f * boosterRight.flutter / 4) * 3.5 * 3.5 / 8;
                    lineMiddle.end.y = (1 + f * boosterRight.flutter / 4) * 3.25 * 3.25 / 8;
                    lineInner.end.y = (1 + f * boosterRight.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomRightOuter.progress = bloomRightOuter.opacity = flight;
                    bloomRightOuter.render();
                    //Middle
                    bloomRightMiddle.progress = bloomRightMiddle.opacity = flight;
                    bloomRightMiddle.render();
                    //Inner
                    bloomRightInner.progress = bloomRightInner.opacity = flight;
                    bloomRightInner.render();
                }

                if (renderLayer == "CHESTPLATE") {
                    //Equations
                    var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
                    var flight = entity.getInterpolatedData("fiskheroes:flight_timer");
                    var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
                    b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
                    var f = Math.PI * 2;
                    f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
                    
                    //Left Arm
                    //Booster
                    boosterLeftArm.progress = boost;
                    boosterLeftArm.speedScale = 0.5 * boost;
                    boosterLeftArm.flutter = 1 + boost;
                    boosterLeftArm.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterLeftArm.render();
                    //Beams
                    lineArmOuter.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3.5 * 3.5 / 8;
                    lineArmMiddle.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3.25 * 3.25 / 8;
                    lineArmInner.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomLeftArmOuter.opacity = boost;
                    bloomLeftArmOuter.render();
                    //Middle
                    bloomLeftArmMiddle.opacity = boost;
                    bloomLeftArmMiddle.render();
                    //Inner
                    bloomLeftInner.opacity = boost;
                    bloomLeftInner.render();

                    //Right
                    boosterRightArm.progress = boost;
                    boosterRightArm.speedScale = 0.5 * boost;
                    boosterRightArm.flutter = 1 + boost;
                    boosterRightArm.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterRightArm.render();
                    //Beams
                    lineArmOuter.end.y = (1 + f * boosterRightArm.flutter / 4) * 3.5 * 3.5 / 8;
                    lineArmMiddle.end.y = (1 + f * boosterRightArm.flutter / 4) * 3.25 * 3.25 / 8;
                    lineArmInner.end.y = (1 + f * boosterRightArm.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomRightArmOuter.opacity = boost;
                    bloomRightArmOuter.render();
                    //Middle
                    bloomRightArmMiddle.opacity = boost;
                    bloomRightArmMiddle.render();
                    //Inner
                    bloomRightInner.opacity = boost;
                    bloomRightInner.render();
                }
            }
        }
    };
    return obj;
}

function initNormalBoosters(renderer) {
    var icon = renderer.createResource("ICON", "skyhighheroes:null");
    //Left 1
    boosterLeft = renderer.createEffect("fiskheroes:booster");
    boosterLeft.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterLeft.anchor.set("leftLeg");
    boosterLeft.mirror = false;
    //Right 1
    boosterRight = renderer.createEffect("fiskheroes:booster");
    boosterRight.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterRight.anchor.set("rightLeg");
    boosterRight.mirror = false;

    var boosterLeftArm = renderer.createEffect("fiskheroes:booster");
    boosterLeftArm.setIcon(icon).setOffset(-1.0, 10.0, 0.0).setSize(4.0, 2.0);
    boosterLeftArm.anchor.set("leftArm");
    boosterLeftArm.mirror = false;

    var boosterRightArm = renderer.createEffect("fiskheroes:booster");
    boosterRightArm.setIcon(icon).setOffset(1.0, 10.0, 0.0).setSize(4.0, 2.0);
    boosterRightArm.anchor.set("rightArm");
    boosterRightArm.mirror = false;

    beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:astro_normal_booster");

    //Outer
    var shapeOuter = renderer.createResource("SHAPE", null);
    var lineOuter = shapeOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
    var bloomLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuter).setOffset(0.0, 12.0, 0.0);
    var bloomRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuter).setOffset(0.0, 12.0, 0.0);
    bloomLeftOuter.anchor.set("leftLeg");
    bloomLeftOuter.color.set(0xFFAE00);
    bloomLeftOuter.mirror = false;
    bloomLeftOuter.setScale(16.0);
    bloomRightOuter.anchor.set("rightLeg");
    bloomRightOuter.color.set(0xFFAE00);
    bloomRightOuter.mirror = false;
    bloomRightOuter.setScale(16.0);

    //Middle
    var shapeMiddle = renderer.createResource("SHAPE", null);
    var lineMiddle = shapeMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
    var bloomLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMiddle).setOffset(0.0, 12.0, 0.0);
    var bloomRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMiddle).setOffset(0.0, 12.0, 0.0);
    bloomLeftMiddle.anchor.set("leftLeg");
    bloomLeftMiddle.color.set(0xFF8900);
    bloomLeftMiddle.mirror = false;
    bloomLeftMiddle.setScale(16.0);
    bloomRightMiddle.anchor.set("rightLeg");
    bloomRightMiddle.color.set(0xFF8900);
    bloomRightMiddle.mirror = false;
    bloomRightMiddle.setScale(16.0);

    //Inner
    var shapeInner = renderer.createResource("SHAPE", null);
    var lineInner = shapeInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
    var bloomLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInner).setOffset(0.0, 12.0, 0.0);
    var bloomRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInner).setOffset(0.0, 12.0, 0.0);
    bloomLeftInner.anchor.set("leftLeg");
    bloomLeftInner.color.set(0xFF0000);
    bloomLeftInner.mirror = false;
    bloomLeftInner.setScale(16.0);
    bloomRightInner.anchor.set("rightLeg");
    bloomRightInner.color.set(0xFF0000);
    bloomRightInner.mirror = false;
    bloomRightInner.setScale(16.0);

    //Arms
    //Outer
    var shapeArmOuter = renderer.createResource("SHAPE", null);
    var lineArmOuter = shapeArmOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
    var bloomLeftArmOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmOuter.anchor.set("leftArm");
    bloomLeftArmOuter.color.set(0xFFAE00);
    bloomLeftArmOuter.mirror = false;
    bloomLeftArmOuter.setScale(16.0);
    bloomRightArmOuter.anchor.set("rightArm");
    bloomRightArmOuter.color.set(0xFFAE00);
    bloomRightArmOuter.mirror = false;
    bloomRightArmOuter.setScale(16.0);

    //Middle
    var shapeArmMiddle = renderer.createResource("SHAPE", null);
    var lineArmMiddle = shapeArmMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
    var bloomLeftArmMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmMiddle.anchor.set("leftArm");
    bloomLeftArmMiddle.color.set(0xFF8900);
    bloomLeftArmMiddle.mirror = false;
    bloomLeftArmMiddle.setScale(16.0);
    bloomRightArmMiddle.anchor.set("rightArm");
    bloomRightArmMiddle.color.set(0xFF8900);
    bloomRightArmMiddle.mirror = false;
    bloomRightArmMiddle.setScale(16.0);

    //Inner
    var shapeArmInner = renderer.createResource("SHAPE", null);
    var lineArmInner = shapeArmInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
    var bloomLeftArmInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmInner.anchor.set("leftArm");
    bloomLeftArmInner.color.set(0xFF0000);
    bloomLeftArmInner.mirror = false;
    bloomLeftArmInner.setScale(16.0);
    bloomRightArmMiddle.anchor.set("rightArm");
    bloomRightArmMiddle.color.set(0xFF0000);
    bloomRightArmMiddle.mirror = false;
    bloomRightArmMiddle.setScale(16.0);

    var obj = {
        boosterLeft: boosterLeft,
        boosterRight: boosterRight,
        bloomLeftOuter: bloomLeftOuter,
        bloomRightOuter: bloomRightOuter,
        bloomLeftMiddle: bloomLeftMiddle,
        bloomRightMiddle: bloomRightMiddle,
        bloomLeftInner: bloomLeftInner,
        bloomRightInner: bloomRightInner,
        boosterLeftArm: boosterLeftArm,
        boosterRightArm: boosterRightArm,
        bloomLeftArmOuter: bloomLeftArmOuter,
        bloomLeftArmMiddle: bloomLeftArmMiddle,
        bloomLeftArmInner: bloomLeftArmInner,
        bloomRightArmOuter: bloomRightArmOuter,
        bloomRightArmMiddle: bloomRightArmMiddle,
        bloomRightArmInner: bloomRightArmInner,
        renderBoosters: (entity, renderLayer, isFirstPersonArm) => {
            if (!isFirstPersonArm) {

                if (renderLayer == "BOOTS") {
                    //Equations
                    var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
                    var flight = entity.getInterpolatedData("fiskheroes:flight_timer");
                    var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
                    b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
                    var f = Math.PI * 2;
                    f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
                    
                    //Left
                    //Booster
                    boosterLeft.progress = boost;
                    boosterLeft.speedScale = 0.5 * boost;
                    boosterLeft.flutter = 1 + boost;
                    boosterLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterLeft.render();
                    //Beams
                    lineOuter.end.y = (1 + f * boosterLeft.flutter / 4) * 3.5 * 3.5 / 8;
                    lineMiddle.end.y = (1 + f * boosterLeft.flutter / 4) * 3.25 * 3.25 / 8;
                    lineInner.end.y = (1 + f * boosterLeft.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomLeftOuter.progress = bloomLeftOuter.opacity = flight;
                    bloomLeftOuter.render();
                    //Middle
                    bloomLeftMiddle.progress = bloomLeftMiddle.opacity = flight;
                    bloomLeftMiddle.render();
                    //Inner
                    bloomLeftInner.progress = bloomLeftInner.opacity = flight;
                    bloomLeftInner.render();
        
                    //Right
                    //Booster
                    boosterRight.progress = boost;
                    boosterRight.speedScale = 0.5 * boost;
                    boosterRight.flutter = 1 + boost;
                    boosterRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterRight.render();
                    //Beam
                    lineOuter.end.y = (1 + f * boosterRight.flutter / 4) * 3.5 * 3.5 / 8;
                    lineMiddle.end.y = (1 + f * boosterRight.flutter / 4) * 3.25 * 3.25 / 8;
                    lineInner.end.y = (1 + f * boosterRight.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomRightOuter.progress = bloomRightOuter.opacity = flight;
                    bloomRightOuter.render();
                    //Middle
                    bloomRightMiddle.progress = bloomRightMiddle.opacity = flight;
                    bloomRightMiddle.render();
                    //Inner
                    bloomRightInner.progress = bloomRightInner.opacity = flight;
                    bloomRightInner.render();
                }

                if (renderLayer == "CHESTPLATE") {
                    //Equations
                    var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
                    var flight = entity.getInterpolatedData("fiskheroes:flight_timer");
                    var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
                    b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
                    var f = Math.PI * 2;
                    f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
                    
                    //Left Arm
                    //Booster
                    boosterLeftArm.progress = boost;
                    boosterLeftArm.speedScale = 0.5 * boost;
                    boosterLeftArm.flutter = 1 + boost;
                    boosterLeftArm.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterLeftArm.render();
                    //Beams
                    lineArmOuter.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3.5 * 3.5 / 8;
                    lineArmMiddle.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3.25 * 3.25 / 8;
                    lineArmInner.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomLeftArmOuter.opacity = boost;
                    bloomLeftArmOuter.render();
                    //Middle
                    bloomLeftArmMiddle.opacity = boost;
                    bloomLeftArmMiddle.render();
                    //Inner
                    bloomLeftInner.opacity = boost;
                    bloomLeftInner.render();

                    //Right
                    boosterRightArm.progress = boost;
                    boosterRightArm.speedScale = 0.5 * boost;
                    boosterRightArm.flutter = 1 + boost;
                    boosterRightArm.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterRightArm.render();
                    //Beams
                    lineArmOuter.end.y = (1 + f * boosterRightArm.flutter / 4) * 3.5 * 3.5 / 8;
                    lineArmMiddle.end.y = (1 + f * boosterRightArm.flutter / 4) * 3.25 * 3.25 / 8;
                    lineArmInner.end.y = (1 + f * boosterRightArm.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomRightArmOuter.opacity = boost;
                    bloomRightArmOuter.render();
                    //Middle
                    bloomRightArmMiddle.opacity = boost;
                    bloomRightArmMiddle.render();
                    //Inner
                    bloomRightInner.opacity = boost;
                    bloomRightInner.render();
                }
            }
        }
    };
    return obj;
}

function initDualBoosters(renderer, colorLeft, colorRight) {
    var icon = renderer.createResource("ICON", "skyhighheroes:null");
    //Left
    var boosterLeft = renderer.createEffect("fiskheroes:booster");
    boosterLeft.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterLeft.anchor.set("leftLeg");
    boosterLeft.mirror = false;
    //Right
    var boosterRight = renderer.createEffect("fiskheroes:booster");
    boosterRight.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterRight.anchor.set("rightLeg");
    boosterRight.mirror = false;

    var boosterLeftArm = renderer.createEffect("fiskheroes:booster");
    boosterLeftArm.setIcon(icon).setOffset(-1.0, 10.0, 0.0).setSize(4.0, 2.0);
    boosterLeftArm.anchor.set("leftArm");
    boosterLeftArm.mirror = false;
    
    var boosterRightArm = renderer.createEffect("fiskheroes:booster");
    boosterRightArm.setIcon(icon).setOffset(1.0, 10.0, 0.0).setSize(4.0, 2.0);
    boosterRightArm.anchor.set("rightArm");
    boosterRightArm.mirror = false;

    beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:astro_booster");

    //Outer
    var shapeOuter = renderer.createResource("SHAPE", null);
    var lineOuter = shapeOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
    var bloomLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuter).setOffset(0.0, 12.0, 0.0);
    var bloomRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuter).setOffset(0.0, 12.0, 0.0);
    bloomLeftOuter.anchor.set("leftLeg");
    bloomLeftOuter.color.set(colorLeft);
    bloomLeftOuter.mirror = false;
    bloomLeftOuter.setScale(16.0);
    bloomRightOuter.anchor.set("rightLeg");
    bloomRightOuter.color.set(colorRight);
    bloomRightOuter.mirror = false;
    bloomRightOuter.setScale(16.0);

    //Middle
    var shapeMiddle = renderer.createResource("SHAPE", null);
    var lineMiddle = shapeMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
    var bloomLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMiddle).setOffset(0.0, 12.0, 0.0);
    var bloomRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMiddle).setOffset(0.0, 12.0, 0.0);
    bloomLeftMiddle.anchor.set("leftLeg");
    bloomLeftMiddle.color.set(colorLeft);
    bloomLeftMiddle.mirror = false;
    bloomLeftMiddle.setScale(16.0);
    bloomRightMiddle.anchor.set("rightLeg");
    bloomRightMiddle.color.set(colorRight);
    bloomRightMiddle.mirror = false;
    bloomRightMiddle.setScale(16.0);

    //Inner
    var shapeInner = renderer.createResource("SHAPE", null);
    var lineInner = shapeInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
    var bloomLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInner).setOffset(0.0, 12.0, 0.0);
    var bloomRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInner).setOffset(0.0, 12.0, 0.0);
    bloomLeftInner.anchor.set("leftLeg");
    bloomLeftInner.color.set(colorLeft);
    bloomLeftInner.mirror = false;
    bloomLeftInner.setScale(16.0);
    bloomRightInner.anchor.set("rightLeg");
    bloomRightInner.color.set(colorRight);
    bloomRightInner.mirror = false;
    bloomRightInner.setScale(16.0);
    
    //Arms
    //Outer
    var shapeArmOuter = renderer.createResource("SHAPE", null);
    var lineArmOuter = shapeArmOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
    var bloomLeftArmOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmOuter.anchor.set("leftArm");
    bloomLeftArmOuter.color.set(colorLeft);
    bloomLeftArmOuter.mirror = false;
    bloomLeftArmOuter.setScale(16.0);
    bloomRightArmOuter.anchor.set("rightArm");
    bloomRightArmOuter.color.set(colorRight);
    bloomRightArmOuter.mirror = false;
    bloomRightArmOuter.setScale(16.0);

    //Middle
    var shapeArmMiddle = renderer.createResource("SHAPE", null);
    var lineArmMiddle = shapeArmMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
    var bloomLeftArmMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmMiddle.anchor.set("leftArm");
    bloomLeftArmMiddle.color.set(colorLeft);
    bloomLeftArmMiddle.mirror = false;
    bloomLeftArmMiddle.setScale(16.0);
    bloomRightArmMiddle.anchor.set("rightArm");
    bloomRightArmMiddle.color.set(colorRight);
    bloomRightArmMiddle.mirror = false;
    bloomRightArmMiddle.setScale(16.0);

    //Inner
    var shapeArmInner = renderer.createResource("SHAPE", null);
    var lineArmInner = shapeArmInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
    var bloomLeftArmInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(-1.0, 10.0, 0.0);
    var bloomRightArmInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(1.0, 10.0, 0.0);
    bloomLeftArmInner.anchor.set("leftArm");
    bloomLeftArmInner.color.set(colorLeft);
    bloomLeftArmInner.mirror = false;
    bloomLeftArmInner.setScale(16.0);
    bloomRightArmMiddle.anchor.set("rightArm");
    bloomRightArmMiddle.color.set(colorRight);
    bloomRightArmMiddle.mirror = false;
    bloomRightArmMiddle.setScale(16.0);

    var obj = {
        boosterLeft: boosterLeft,
        boosterRight: boosterRight,
        bloomLeftOuter: bloomLeftOuter,
        bloomRightOuter: bloomRightOuter,
        bloomLeftMiddle: bloomLeftMiddle,
        bloomRightMiddle: bloomRightMiddle,
        bloomLeftInner: bloomLeftInner,
        bloomRightInner: bloomRightInner,
        boosterLeftArm: boosterLeftArm,
        boosterRightArm: boosterRightArm,
        bloomLeftArmOuter: bloomLeftArmOuter,
        bloomLeftArmMiddle: bloomLeftArmMiddle,
        bloomLeftArmInner: bloomLeftArmInner,
        bloomRightArmOuter: bloomRightArmOuter,
        bloomRightArmMiddle: bloomRightArmMiddle,
        bloomRightArmInner: bloomRightArmInner,
        renderBoosters: (entity, renderLayer, isFirstPersonArm) => {
            if (!isFirstPersonArm) {

                if (renderLayer == "BOOTS") {
                    //Equations
                    var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
                    var flight = entity.getInterpolatedData("fiskheroes:flight_timer");
                    var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
                    b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
                    var f = Math.PI * 2;
                    f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
                    
                    //Left
                    //Booster
                    boosterLeft.progress = boost;
                    boosterLeft.speedScale = 0.5 * boost;
                    boosterLeft.flutter = 1 + boost;
                    boosterLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterLeft.render();
                    //Beams
                    lineOuter.end.y = (1 + f * boosterLeft.flutter / 4) * 3.5 * 3.5 / 8;
                    lineMiddle.end.y = (1 + f * boosterLeft.flutter / 4) * 3.25 * 3.25 / 8;
                    lineInner.end.y = (1 + f * boosterLeft.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomLeftOuter.progress = bloomLeftOuter.opacity = flight;
                    bloomLeftOuter.render();
                    //Middle
                    bloomLeftMiddle.progress = bloomLeftMiddle.opacity = flight;
                    bloomLeftMiddle.render();
                    //Inner
                    bloomLeftInner.progress = bloomLeftInner.opacity = flight;
                    bloomLeftInner.render();
        
                    //Right
                    //Booster
                    boosterRight.progress = boost;
                    boosterRight.speedScale = 0.5 * boost;
                    boosterRight.flutter = 1 + boost;
                    boosterRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterRight.render();
                    //Beam
                    lineOuter.end.y = (1 + f * boosterRight.flutter / 4) * 3.5 * 3.5 / 8;
                    lineMiddle.end.y = (1 + f * boosterRight.flutter / 4) * 3.25 * 3.25 / 8;
                    lineInner.end.y = (1 + f * boosterRight.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomRightOuter.progress = bloomRightOuter.opacity = flight;
                    bloomRightOuter.render();
                    //Middle
                    bloomRightMiddle.progress = bloomRightMiddle.opacity = flight;
                    bloomRightMiddle.render();
                    //Inner
                    bloomRightInner.progress = bloomRightInner.opacity = flight;
                    bloomRightInner.render();
                }

                if (renderLayer == "CHESTPLATE") {
                    //Equations
                    var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
                    var flight = entity.getInterpolatedData("fiskheroes:flight_timer");
                    var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
                    b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
                    var f = Math.PI * 2;
                    f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
                    
                    //Left Arm
                    //Booster
                    boosterLeftArm.progress = boost;
                    boosterLeftArm.speedScale = 0.5 * boost;
                    boosterLeftArm.flutter = 1 + boost;
                    boosterLeftArm.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterLeftArm.render();
                    //Beams
                    lineArmOuter.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3.5 * 3.5 / 8;
                    lineArmMiddle.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3.25 * 3.25 / 8;
                    lineArmInner.end.y = (1 + f * boosterLeftArm.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomLeftArmOuter.opacity = boost;
                    bloomLeftArmOuter.render();
                    //Middle
                    bloomLeftArmMiddle.opacity = boost;
                    bloomLeftArmMiddle.render();
                    //Inner
                    bloomLeftInner.opacity = boost;
                    bloomLeftInner.render();

                    //Right
                    boosterRightArm.progress = boost;
                    boosterRightArm.speedScale = 0.5 * boost;
                    boosterRightArm.flutter = 1 + boost;
                    boosterRightArm.setSize(4.0 + b * 4, 2.0 - b * 3.9);
                    boosterRightArm.render();
                    //Beams
                    lineArmOuter.end.y = (1 + f * boosterRightArm.flutter / 4) * 3.5 * 3.5 / 8;
                    lineArmMiddle.end.y = (1 + f * boosterRightArm.flutter / 4) * 3.25 * 3.25 / 8;
                    lineArmInner.end.y = (1 + f * boosterRightArm.flutter / 4) * 3 * 3 / 8;
                    //Outer
                    bloomRightArmOuter.opacity = boost;
                    bloomRightArmOuter.render();
                    //Middle
                    bloomRightArmMiddle.opacity = boost;
                    bloomRightArmMiddle.render();
                    //Inner
                    bloomRightInner.opacity = boost;
                    bloomRightInner.render();
                }
            }
        }
    };
    return obj;
}