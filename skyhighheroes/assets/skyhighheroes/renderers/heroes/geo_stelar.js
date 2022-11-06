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
var colorVar = 0x00FF00;

loadTextures({
    "base": ("skyhighheroes:geo/geo_stelar"),
    "lights": ("skyhighheroes:geo/geo_stelar_lights"),
    "suit": ("skyhighheroes:geo/geo_stelar_suit.tx.json"),
    "suit_lights": ("skyhighheroes:geo/geo_stelar_suit_lights.tx.json"),
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
    "cannon_bottom": ("skyhighheroes:geo/geo_stelar_bottom_cannon"),
    "cannon_left": ("skyhighheroes:geo/geo_stelar_left_cannon"),
    "cannon_right": ("skyhighheroes:geo/geo_stelar_right_cannon"),
    "cannon_top": ("skyhighheroes:geo/geo_stelar_top_cannon"),
    "cannon_front": ("skyhighheroes:geo/geo_stelar_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:geo/omega_xis_geo_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:geo/omega_xis_geo_stelar_right_eyes"),
    "transertx": ("skyhighheroes:geo/geo_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:geo/geo_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:geo/geo_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:geo/geo_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:stelar_transer_lights"),
    "blade": ("skyhighheroes:geo/geo_stelar_blade"),
    "shield": ("skyhighheroes:geo/geo_stelar_shield"),
    "katana": ("skyhighheroes:geo/geo_stelar_katana"),
    "katana_lights": ("skyhighheroes:geo/geo_stelar_katana_lights"),
    "scythe": ("skyhighheroes:geo/geo_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:geo/geo_stelar_scythe_lights")
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
        if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) {
            return "base"
        }
        if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
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
        if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
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
            return "transer_lights";
        }
        if (entity.getData("skyhighheroes:dyn/visualizer_toggle") == 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0) {
            return "visualizer_up_lights";
        }
        if (entity.getData("skyhighheroes:dyn/visualizer_toggle") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0) {
            return "visualizer_down_lights";
        }
        if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0) {
            return "suit_lights";
        }
        if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) {
            return "lights";
        }
        else {
            return "null";
        }
    }
    });
    
    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
    renderer.fixHatLayer("CHESTPLATE");
    renderer.setItemIcons(null, "pegasus_transer", null, null);
    initEffects(renderer);
    initAnimations(renderer);
}



function initEffects(renderer) {
    //Head
    head_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.5, -0.0], "end": [0.0, -9.5, 0.0], "size": [10.0, 10.0] }
        ]}
    ]);
    //Body
    body_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.0, 0.0], "size": [5.0, 8.0] }
        ]}
    ]);
    //Arms start
    armsStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, -3.0, 0.0], "end": [-1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Blade
    blade_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 19.0, 0.0], "end": [-1.0, 4.0, 0.0], "size": [10.0, 7.0] }
        ]}
    ]);
    //Right arm
    armRightStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 11.0, 0.0], "end": [-1.0, -3.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left arm
    armLeftStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "leftArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [1.0, -3.0, 0.0], "end": [1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left Leg
    legLeftStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "leftLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.5, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right Leg
    legRightStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "rightLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.5, 0.0], "size": [4.75, 4.75] }
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
    omegaXis_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, -1.5], "end": [-1.0, 12.5, 0.0], "size": [6.0, 6.0] },
            { "start": [-6.0, 3.7, -3.0], "end": [-5.5, 7.7, -3.0], "size": [1.0, 1.0] },
            { "start": [-6.0, 3.7, 3.0], "end": [-5.5, 7.7, 3.0], "size": [1.0, 1.0] },
            { "start": [-5.0, 3.6, -3.0], "end": [-4.5, 10.6, -3.0], "size": [1.0, 1.0] },
            { "start": [-5.0, 3.6, 3.0], "end": [-4.5, 10.6, 3.0], "size": [1.0, 1.0] },
            { "start": [3.0, 11.75, 2.5], "end": [0.0, 11.75, 2.5], "size": [0.5, 0.5] },
            { "start": [3.0, 11.75, -2.5], "end": [0.0, 11.75, -2.5], "size": [0.5, 0.5] }
        ]},
    ]);
    //Omega-Xis First Person
    omegaXisFP_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", colorVar, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 0.0], "end": [-1.0, 15.5, 0.0], "size": [9.0, 9.0] }
        ]}
    ]);
    renderer.bindProperty("fiskheroes:energy_bolt").color.set(0xFF00FF);
    thing.bindTrail(renderer, "skyhighheroes:geo_stelar_flight");
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
    ]).setCondition(entity => entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1).addOffset("CHRONOS_RIFLE", 0.0, 0.0, 3.5).slotIndex = 0;
    //Katana
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.535, "offset": [-3.05, 0.52, 3.0], "rotation": [-148.0, 90.0, 0.0] },
        { "anchor": "body", "scale": 0.535, "offset": [3.05, 0.52, 3.0], "rotation": [-148.0, -90.0, 0.0] }
    ]).setCondition(entity => entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1).slotIndex = 1;
    renderer.bindProperty("fiskheroes:equipped_item").setItems([
        { "anchor": "body", "scale": 0.55, "offset": [0.5, 4.5, 3.0], "rotation": [0.0, -90.0, 35.0] }
    ]).setCondition(entity => entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1).slotIndex = 2;
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
    if (renderLayer == "CHESTPLATE") {
            blade.unfold = 0 + (entity.getHeldItem().isEmpty() && entity.getData('skyhighheroes:dyn/battle_card') == 2) - (entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - 1);
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