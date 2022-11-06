var utils = implement("fiskheroes:external/utils");
var body_lines = implement("fiskheroes:external/body_lines");
var thing = implement("skyhighheroes:external/thing");

var teleport;
var blade;
var ears;
var omegaXisBottom;
var omegaXisFront;
var omegaXisLeft;
var omegaXisRight;
var omegaXisTop;
var hair;

function init(renderer) {

    renderer.setTexture((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE") {
        
        if (entity.isDisplayStand() || entity.getUUID() != getID()) {
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
        if (entity.isDisplayStand() || entity.getUUID() != getID()) {
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
    
    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
    renderer.fixHatLayer("CHESTPLATE");
    initEffects(renderer);
    initAnimations(renderer);
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

function initEffects(renderer) {
    
    //Head
    head_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.5, -0.0], "end": [0.0, -9.5, 0.0], "size": [10.0, 10.0] }
        ]}
    ]);
    //Body
    body_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.0, 0.0], "size": [5.0, 8.0] }
        ]}
    ]);
    //Arms start
    armsStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, -3.0, 0.0], "end": [-1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Blade
    blade_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 19.0, 0.0], "end": [-1.0, 4.0, 0.0], "size": [10.0, 7.0] }
        ]}
    ]);
    //Right arm
    armRightStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 11.0, 0.0], "end": [-1.0, -3.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left arm
    armLeftStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "leftArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [1.0, -3.0, 0.0], "end": [1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left Leg
    legLeftStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "leftLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right Leg
    legRightStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "rightLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Teleportation Opacity
    teleport = utils.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
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
    //Omega-Xis Beams
    omegaXis_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 0.0], "end": [-1.0, 12.5, 0.0], "size": [6.0, 6.0] },
            { "start": [-6.0, 3.7, -3.0], "end": [-5.5, 7.7, -3.0], "size": [1.0, 1.0] },
            { "start": [-6.0, 3.7, 3.0], "end": [-5.5, 7.7, 3.0], "size": [1.0, 1.0] },
            { "start": [-5.0, 3.6, -3.0], "end": [-4.5, 10.6, -3.0], "size": [1.0, 1.0] },
            { "start": [-5.0, 3.6, 3.0], "end": [-4.5, 10.6, 3.0], "size": [1.0, 1.0] },
            { "start": [3.0, 11.75, 2.5], "end": [0.0, 11.75, 2.5], "size": [0.5, 0.5] },
            { "start": [3.0, 11.75, -2.5], "end": [0.0, 11.75, -2.5], "size": [0.5, 0.5] }
        ]},
    ]);
    //Omega-Xis First Person
    omegaXisFP_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 0.0], "end": [-1.0, 15.5, 0.0], "size": [9.0, 9.0] }
        ]}
    ]);
    //Hair
    hair = renderer.createEffect("fiskheroes:shield");
    hair.texture.set("hair", null);
    hair.anchor.set("head");
    hair.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
    hair.large = true;
    //Beams
    hair_beams = body_lines.create(renderer, "skyhighheroes:wave_glow", getCLR(), [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, -8.0, 2.3125], "end": [0.0, -15.5, 2.3125], "size": [4.0, 4.0] },
            { "start": [0.0, -5.5, 5.3125], "end": [0.0, -10.5, 5.3125], "size": [2.0, 2.0] }
        ]}
    ]);
    //Forcefield
    var forcefield = renderer.bindProperty("fiskheroes:forcefield");
    forcefield.color.set(getCLR());
    forcefield.setShape(36, 36).setOffset(0.0, 10.0, 0.0).setScale(2.0);
    forcefield.setCondition(entity => {
        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.1;
        return true;
    });
    utils.bindBeam(renderer, "fiskheroes:energy_blast", "fiskheroes:repulsor_blast", "rightArm", getCLR(), [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
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
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 1.0, "offset": [0.0, 5.0, 2.75], "rotation": [90.0, -180.0, 0.0] }
    ]).setCondition(entity => entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1).slotIndex = 0;
    //Katana
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.535, "offset": [-3.05, 0.52, 3.0], "rotation": [-148.0, 90.0, 0.0] },
        { "anchor": "body", "scale": 0.535, "offset": [3.05, 0.52, 3.0], "rotation": [-148.0, -90.0, 0.0] }
    ]).setCondition(entity => entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1).slotIndex = 1;
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.55, "offset": [0.5, 4.5, 3.0], "rotation": [0.0, -90.0, 35.0] }
    ]).setCondition(entity => entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1).slotIndex = 2;
}

function initAnimations(renderer) {
    addAnimationWithData(renderer, "basic.BLOCKING", "skyhighheroes:force_field_holding", "fiskheroes:shield_blocking_timer")
        .priority = -5;

    addAnimationWithData(renderer, "basic.AIMING", "skyhighheroes:stelar_aim", "fiskheroes:aiming_timer")
        .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
        .priority = 10;

    utils.addAnimationEvent(renderer, "CEILING_CRAWL", "skyhighheroes:em_wall_ceiling_stand");

    utils.addFlightAnimationWithLanding(renderer, "iron_man.FLIGHT", "skyhighheroes:wave_flight/stelar_flight.anim.json");
    addAnimationWithData(renderer, "iron_man.LAND", "fiskheroes:superhero_landing", "fiskheroes:dyn/superhero_landing_timer")
        .priority = -8;
    renderer.reprioritizeDefaultAnimation("PUNCH", -9);
    renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
}

function render(entity, renderLayer, isFirstPersonArm) {
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
            hair_beams.progress = Math.min(Math.max((((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0);
            hair_beams.render(renderLayer);
            head_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (32/32)), 0.0), 1.0);
            head_beam.render(renderLayer);
            body_beam.progress = Math.min(Math.max(((81/13) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (26/26)), 0.0), 1.0);
            body_beam.render(renderLayer);
            armsStart_beam.progress = (entity.getData('skyhighheroes:dyn/wave_changing_timer') == 1 ? 1.0 : 0.0);
            armsStart_beam.render(renderLayer);
            blade_beam.progress = (entity.getData('skyhighheroes:dyn/battle_card') == 2 ? 1.0 : 0.0);
            blade_beam.render(renderLayer);
            armRightStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (2/32)), 0.0), 1.0) - (entity.getData('skyhighheroes:dyn/wave_changing_timer') == 1 ? 1.0 : 0.0);
            armRightStart_beam.render(renderLayer);
            armLeftStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (36/32)), 0.0), 1.0);
            armLeftStart_beam.render(renderLayer);
            legRightStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (50/32)), 0.0), 1.0);
            legRightStart_beam.render(renderLayer);
            legLeftStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (50/32)), 0.0), 1.0);
            legLeftStart_beam.render(renderLayer);
            if (!isFirstPersonArm) {
                omegaXis_beam.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                omegaXis_beam.render(renderLayer);
            }
            if (isFirstPersonArm) {
                omegaXisFP_beam.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                omegaXisFP_beam.render(renderLayer);
            }
    }
}

function getID() {
    return "";
}
function getNamePerson() {
    return "";
}
function getCLR() {
    return 0x00FF00;
}
function getSatellite() {
    return "pegasus";
}