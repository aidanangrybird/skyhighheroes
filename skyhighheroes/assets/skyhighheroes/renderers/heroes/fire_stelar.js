extend("skyhighheroes:base_stelar");

loadTextures({
    "base": ("skyhighheroes:fire/fire_stelar"),
    "lights": ("skyhighheroes:fire/fire_stelar_lights"),
    "suit": ("skyhighheroes:fire/fire_stelar_suit.tx.json"),
    "suit_lights": ("skyhighheroes:fire/fire_stelar_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:fire/fire_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:fire/fire_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:fire/fire_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:fire/fire_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:fire/fire_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:fire/fire_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:fire/fire_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:fire/fire_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:fire/fire_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:fire/fire_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:fire/fire_stelar_bottom_cannon"),
    "cannon_left": ("skyhighheroes:fire/fire_stelar_left_cannon"),
    "cannon_right": ("skyhighheroes:fire/fire_stelar_right_cannon"),
    "cannon_top": ("skyhighheroes:fire/fire_stelar_top_cannon"),
    "cannon_front": ("skyhighheroes:fire/fire_stelar_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:fire/omega_xis_fire_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:fire/omega_xis_fire_stelar_right_eyes"),
    "transertx": ("skyhighheroes:fire/fire_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:fire/fire_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:fire/fire_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:fire/fire_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:fire/fire_stelar_transer_lights"),
    "blade": ("skyhighheroes:fire/fire_stelar_blade"),
    "hair": ("skyhighheroes:fire/fire_stelar_hair"),
    "shield": ("skyhighheroes:fire/fire_stelar_shield"),
    "katana": ("skyhighheroes:fire/fire_stelar_katana"),
    "katana_lights": ("skyhighheroes:fire/fire_stelar_katana_lights"),
    "scythe": ("skyhighheroes:fire/fire_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:fire/fire_stelar_scythe_lights")
});

var blue = 0x0000FF;
var red = 0xFF0000;

function getID() {
    return "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    renderer.setItemIcons(null, "pegasus_transer", null, null);
}

var thing = implement("skyhighheroes:external/thing");

function initEffects(renderer) {
    thing.bindTrail(renderer, "skyhighheroes:fire_stelar_flight");
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
    //Hair
    hair = renderer.createEffect("fiskheroes:shield");
    hair.texture.set("hair", null);
    hair.anchor.set("head");
    hair.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
    hair.large = true;
    //Forcefield
    var forcefield = renderer.bindProperty("fiskheroes:forcefield");
    forcefield.color.set(red);
    forcefield.setShape(36, 36).setOffset(0.0, 10.0, 0.0).setScale(2.0);
    forcefield.setCondition(entity => {
        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.1;
        return true;
    });
    utils.bindBeam(renderer, "fiskheroes:energy_blast", "fiskheroes:repulsor_blast", "rightArm", red, [
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
    //Head
    head_beam_red = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-2.0, 0.5, 0.0], "end": [-2.0, -9.5, 0.0], "size": [10.0, 4.6875] }
        ]}
    ]);
    head_beam_blue = body_lines.create(renderer, "skyhighheroes:wave_glow", blue, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [2.0, 0.5, 0.0], "end": [2.0, -9.5, 0.0], "size": [10.0, 4.6875] }
        ]}
    ]);
    //Body
    body_beam_blue = body_lines.create(renderer, "skyhighheroes:wave_glow", blue, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [2.0, 0.0, 0.0], "end": [2.0, 12.0, 0.0], "size": [4.6875, 4.6875] }
        ]}
    ]);
    body_beam_red = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-2.0, 0.0, 0.0], "end": [-2.0, 12.0, 0.0], "size": [4.6875, 4.6875] }
        ]}
    ]);
    //Arms start
    armsStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, -3.0, 0.0], "end": [-1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Blade
    blade_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 19.0, 0.0], "end": [-1.0, 4.0, 0.0], "size": [10.0, 7.0] }
        ]}
    ]);
    //Right arm
    armRightStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 11.0, 0.0], "end": [-1.0, -3.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left arm
    armLeftStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", blue, [
        { anchor: "leftArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [1.0, -3.0, 0.0], "end": [1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left Leg
    legLeftStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", blue, [
        { anchor: "leftLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right Leg
    legRightStart_beam = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "rightLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Omega-Xis Beams
    omegaXis_beam_red = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 2.0], "end": [-1.0, 12.5, 2.0], "size": [3.0, 6.0] },
            { "start": [-6.0, 3.7, 3.0], "end": [-5.5, 7.7, 3.0], "size": [1.0, 1.0] },
            { "start": [-5.0, 3.6, 3.0], "end": [-4.5, 10.6, 3.0], "size": [1.0, 1.0] },
            { "start": [3.0, 11.75, 2.5], "end": [0.0, 11.75, 2.5], "size": [0.5, 0.5] }
        ]},
    ]);
    omegaXis_beam_blue = body_lines.create(renderer, "skyhighheroes:wave_glow", blue, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, -2.0], "end": [-1.0, 12.5, -2.0], "size": [3.0, 6.0] },
            { "start": [-6.0, 3.7, -3.0], "end": [-5.5, 7.7, -3.0], "size": [1.0, 1.0] },
            { "start": [-5.0, 3.6, -3.0], "end": [-4.5, 10.6, -3.0], "size": [1.0, 1.0] },
            { "start": [3.0, 11.75, -2.5], "end": [0.0, 11.75, -2.5], "size": [0.5, 0.5] }
        ]},
    ]);
    //Omega-Xis First Person
    omegaXisFP_beam_blue = body_lines.create(renderer, "skyhighheroes:wave_glow", blue, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, -2.0], "end": [-1.0, 15.5, -2.0], "size": [3.0, 9.0] }
        ]}
    ]);
    omegaXisFP_beam_red = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 2.0], "end": [-1.0, 15.5, 2.0], "size": [3.0, 9.0] }
        ]}
    ]);
    //Hair Beams
    hair_beams_blue = body_lines.create(renderer, "skyhighheroes:wave_glow", blue, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [1.5, -8.0, 2.3125], "end": [1.5, -15.5, 2.3125], "size": [4.0, 2.0] },
            { "start": [0.75, -5.5, 5.3125], "end": [0.75, -10.5, 5.3125], "size": [2.0, 1.0] }
        ]}
    ]);
    hair_beams_red = body_lines.create(renderer, "skyhighheroes:wave_glow", red, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.5, -8.0, 2.3125], "end": [-1.5, -15.5, 2.3125], "size": [4.0, 2.0] },
            { "start": [-0.75, -5.5, 5.3125], "end": [-0.75, -10.5, 5.3125], "size": [2.0, 1.0] }
        ]}
    ]);
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE") {
            ears.render();
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
            hair.unfold = Math.min(Math.max(entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') < 0.5 ? (((-81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) + (50/32)) : (((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0) - entity.isDisplayStand();
            hair.render();
            hair_beams_blue.progress = Math.min(Math.max((((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0);
            hair_beams_blue.render(renderLayer);
            hair_beams_red.progress = Math.min(Math.max((((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0);
            hair_beams_red.render(renderLayer);
            head_beam_blue.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (32/32)), 0.0), 1.0);
            head_beam_blue.render(renderLayer);
            head_beam_red.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (32/32)), 0.0), 1.0);
            head_beam_red.render(renderLayer);
            body_beam_blue.progress = Math.min(Math.max(((81/13) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (26/26)), 0.0), 1.0);
            body_beam_blue.render(renderLayer);
            body_beam_red.progress = Math.min(Math.max(((81/13) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (26/26)), 0.0), 1.0);
            body_beam_red.render(renderLayer);
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
                omegaXis_beam_blue.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                omegaXis_beam_blue.render(renderLayer);
                omegaXis_beam_red.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                omegaXis_beam_red.render(renderLayer);
            }
            if (isFirstPersonArm) {
                omegaXisFP_beam_blue.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                omegaXisFP_beam_blue.render(renderLayer);
                omegaXisFP_beam_red.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                omegaXisFP_beam_red.render(renderLayer);
            }
    }
}