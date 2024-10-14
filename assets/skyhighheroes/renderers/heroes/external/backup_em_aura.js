//Body Lines Beams
//Deprecated for now while I figure out stuff
/*
function create(renderer, beam, color, map) {
    if (typeof beam === "string") {
        beam = renderer.createResource("BEAM_RENDERER", beam);
    }

    var effects = [];

    for (var i = 0; i < map.length; ++i) {
        var shape = renderer.createResource("SHAPE", null);
        var effect = renderer.createEffect("fiskheroes:lines").setShape(shape);
        var scale = [16.0, 16.0, 16.0];
        var lines = [];
        
        if (map[i].hasOwnProperty("anchor")) {
            effect.anchor.set(map[i].anchor);
        }
        
        if (map[i].hasOwnProperty("mirror")) {
            effect.mirror = map[i].mirror;
        }

        if (map[i].hasOwnProperty("offset") && Array.isArray(map[i].offset)) {
            effect.setOffset(map[i].offset[0], map[i].offset[1], map[i].offset[2]);
        }

        if (map[i].hasOwnProperty("rotation") && Array.isArray(map[i].rotation)) {
            effect.setRotation(map[i].rotation[0], map[i].rotation[1], map[i].rotation[2]);
        }

        if (map[i].hasOwnProperty("scale")) {
            if (Array.isArray(map[i].scale)) {
                scale = map[i].scale;
            } else if (typeof map[i].scale === "number") {
                scale = [map[i].scale, map[i].scale, map[i].scale];
            }
        }

        if (Array.isArray(map[i].entries)) {
            for (var j = 0; j < map[i].entries.length; ++j) {
                var entry = map[i].entries[j];

                if (entry.hasOwnProperty("start") && Array.isArray(entry.start)) {
                    for (var k = 0; k < entry.start.length; ++k) {
                        entry.start[k] = entry.start[k] / scale[k];
                    }
                }
                
                if (entry.hasOwnProperty("end") && Array.isArray(entry.end)) {
                    for (var k = 0; k < entry.end.length; ++k) {
                        entry.end[k] = entry.end[k] / scale[k];
                    }
                }

                lines[j] = shape.bindLine(entry);
            }
        }

        effect.color.set(color);
        effect.setScale(scale[0], scale[1], scale[2]);
        effect.setRenderer(beam);
        effects[i] = {
            renderLayer: map[i].renderLayer,
            effect: effect,
            lines: lines
        };
    }

    var obj = {
        opacity: 1.0,
        progress: 1.0,
        effects: effects,
        render: renderLayer => {
            effects.forEach(element => {
                if (element.renderLayer == renderLayer) {
                    element.effect.opacity = obj.opacity;
                    element.effect.progress = obj.progress;
                    element.effect.render();
                }
            });
        }
    };
    return obj;
}
//Init Custom suit auras
function init(renderer, color) {
    //Head
    var head_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.5, -0.0], "end": [0.0, -9.5, 0.0], "size": [10.0, 10.0] }
        ]}
    ]);
    //Body
    var body_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.0, 0.0], "size": [5.0, 8.0] }
        ]}
    ]);
    //Arms start
    var armsStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, -3.0, 0.0], "end": [-1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right arm
    var armRightStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 11.0, 0.0], "end": [-1.0, -3.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left arm
    var armLeftStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "leftArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [1.0, -3.0, 0.0], "end": [1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left Leg
    var legLeftStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "leftLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right Leg
    var legRightStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Hair
    var hair_beams = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, -8.0, 2.3125], "end": [0.0, -15.5, 2.3125], "size": [4.0, 2.0] },
            { "start": [0.0, -5.5, 5.3125], "end": [0.0, -10.5, 5.3125], "size": [2.0, 2.0] }
        ]}
    ]);
    //Omega-Xis Beams
    var omegaXis_beam = create(renderer, "skyhighheroes:wave_glow", color, [
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
    var omegaXisFP_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 0.0], "end": [-1.0, 12.5, 0.0], "size": [9.0, 9.0] }
        ]}
    ]);
    //sword
    var sword_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 19.0, 0.0], "end": [-1.0, 4.0, 0.0], "size": [10.0, 7.0] }
        ]}
    ]);
    //Katana
    var katana_base_left_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, offset: [-3.05, 0.52, 2.75], rotation: [90.0, -58.0, 90.0], entries: [
            { "start": [-0.5, 17.0, 0.0], "end": [-0.5, -7.0, 0.0], "size": [1.5, 1.5] }
        ]}
    ]);
    var katana_base_right_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, offset: [3.05, 0.52, 2.75], rotation: [90.0, 58.0, -90.0], entries: [
            { "start": [-0.5, 17.0, 0.0], "end": [-0.5, -7.0, 0.0], "size": [1.5, 1.5] }
        ]}
    ]);
    var katana_holding_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: true, offset: [1.0, 8.25, -3.0], rotation: [-70.0, 85.0, -10.0], entries: [
            { "start": [0.5, 20.0, 0.0], "end": [0.5, -8.0, 0.0], "size": [2.0, 2.0] }
        ]}
    ]);
    //Scythe
    var scythe_base_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, offset: [0.5, 4.5, 2.75], rotation: [0.0, 0.0, 35.0], entries: [
            { "start": [0.75, 18.0, 0.0], "end": [0.75, -4.0, 0.0], "size": [1.0, 1.0] },
            { "start": [0.75, -4.0, 0.0], "end": [0.75, -14.0, 0.0], "size": [2.0, 2.0] },
            { "start": [-2.75, -12.0, 0.0], "end": [10.75, -12.0, 0.0], "size": [1.5, 3.0] }
        ]}
    ]);
    var scythe_1_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, offset: [0.5, 4.5, 3.75], rotation: [0.0, 0.0, 35.0], entries: [
            { "start": [0.75, 18.0, 0.0], "end": [0.75, -4.0, 0.0], "size": [1.0, 1.0] },
            { "start": [0.75, -4.0, 0.0], "end": [0.75, -14.0, 0.0], "size": [2.0, 2.0] },
            { "start": [-2.75, -12.0, 0.0], "end": [10.75, -12.0, 0.0], "size": [1.5, 3.0] }
        ]}
    ]);
    var scythe_holding_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, offset: [1.0, 8.25, -3.0], rotation: [100.0, 90.0, 0.0], entries: [
            { "start": [0.75, 20.0, 0.0], "end": [0.75, -4.0, 0.0], "size": [1.0, 1.0] },
            { "start": [0.75, -4.0, 0.0], "end": [0.75, -14.0, 0.0], "size": [2.0, 2.0] },
            { "start": [-3.75, -12.5, 0.0], "end": [11.75, -12.5, 0.0], "size": [1.5, 3.0] }
        ]}
    ]);
    //Shield
    var shield_base_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, offset: [0.0, 5.0, 2.75], rotation: [90.0, -180.0, 0.0], entries: [
            { "start": [0.0, -0.25, 0.0], "end": [0.0, 1.75, 0.0], "size": [14.0, 14.0] }
        ]}
    ]);
    var shield_1_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, offset: [0.0, 5.0, 3.75], rotation: [90.0, -180.0, 0.0], entries: [
            { "start": [0.0, -0.25, 0.0], "end": [0.0, 1.75, 0.0], "size": [14.0, 14.0] }
        ]}
    ]);
    var shield_2_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, offset: [0.0, 5.0, 4.75], rotation: [90.0, -180.0, 0.0], entries: [
            { "start": [0.0, -0.25, 0.0], "end": [0.0, 1.75, 0.0], "size": [14.0, 14.0] }
        ]}
    ]);
    var shield_holding_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, offset: [2.0, 6.0, 0.0], rotation: [90.0, -5.0, 90.0], entries: [
            { "start": [0.0, -0.25, 0.0], "end": [0.0, 1.75, 0.0], "size": [14.0, 14.0] }
        ]}
    ]);
    var shield_holding_blocking_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, offset: [0.1, 0.22, -0.05], rotation: [-95.0, -15.0, -57.0], entries: [
            { "start": [0.0, -0.25, 0.0], "end": [0.0, 1.75, 0.0], "size": [14.0, 14.0] }
        ]}
    ]);
    return {
        head_beam: head_beam,
        body_beam: body_beam,
        armsStart_beam: armsStart_beam,
        armRightStart_beam: armRightStart_beam,
        armLeftStart_beam: armLeftStart_beam,
        legRightStart_beam: legRightStart_beam,
        legLeftStart_beam: legLeftStart_beam,
        omegaXis_beam: omegaXis_beam,
        omegaXisFP_beam: omegaXisFP_beam,
        sword_beam: sword_beam,
        scythe_base_beam: scythe_base_beam,
        scythe_1_beam: scythe_1_beam,
        scythe_holding_beam: scythe_holding_beam,
        katana_base_left_beam: katana_base_left_beam,
        katana_base_right_beam: katana_base_right_beam,
        katana_holding_beam: katana_holding_beam,
        shield_base_beam: shield_base_beam,
        shield_1_beam: shield_1_beam,
        shield_2_beam: shield_2_beam,
        shield_holding_beam: shield_holding_beam,
        shield_holding_blocking_beam: shield_holding_blocking_beam,
        render: (entity, renderLayer, isFirstPersonArm) => {
            if (renderLayer == "CHESTPLATE") {
                head_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (32/32)), 0.0), 1.0);
                head_beam.render(renderLayer);
                body_beam.progress = Math.min(Math.max(((81/13) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (26/26)), 0.0), 1.0);
                body_beam.render(renderLayer);
                armsStart_beam.progress = (entity.getData('skyhighheroes:dyn/wave_changing_timer') == 1 ? 1.0 : 0.0);
                armsStart_beam.render(renderLayer);
                armRightStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (2/32)), 0.0), 1.0) - (entity.getData('skyhighheroes:dyn/wave_changing_timer') == 1 ? 1.0 : 0.0);
                armRightStart_beam.render(renderLayer);
                armLeftStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (36/32)), 0.0), 1.0);
                armLeftStart_beam.render(renderLayer);
                legRightStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (50/32)), 0.0), 1.0);
                legRightStart_beam.render(renderLayer);
                legLeftStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (50/32)), 0.0), 1.0);
                legLeftStart_beam.render(renderLayer);
                hair_beams.progress = Math.min(Math.max((((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0);
                hair_beams.render(renderLayer);
                sword_beam.progress = (entity.getData('skyhighheroes:dyn/battle_card') == 2 ? 1.0 : 0.0);
                sword_beam.render(renderLayer);
                scythe_base_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1) ? 1.0 : 0.0);
                scythe_base_beam.render(renderLayer);
                scythe_1_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 1) ? 1.0 : 0.0);
                scythe_1_beam.render(renderLayer);
                katana_base_left_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0 && entity.getWornChestplate().nbt().getTagList("Equipment").tagCount() != 0) ? 1.0 : 0.0);
                katana_base_left_beam.render(renderLayer);
                katana_base_right_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0 && entity.getWornChestplate().nbt().getTagList("Equipment").tagCount() != 0) ? 1.0 : 0.0);
                katana_base_right_beam.render(renderLayer);
                shield_base_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getWornChestplate().nbt().getTagList("Equipment").tagCount() == 1 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 3) ? 1.0 : 0.0);
                shield_base_beam.render(renderLayer);
                shield_1_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && ((entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 3) || ((entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 2) && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 3))) ? 1.0 : 0.0);
                shield_1_beam.render(renderLayer);
                shield_2_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && ((entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") == 2 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2) && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0)) ? 1.0 : 0.0);
                shield_2_beam.render(renderLayer);
                if (!isFirstPersonArm) {
                    omegaXis_beam.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                    omegaXis_beam.render(renderLayer);
                    scythe_holding_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe") ? 1.0 : 0.0);
                    scythe_holding_beam.render(renderLayer);
                    katana_holding_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:katana") ? 1.0 : 0.0);
                    katana_holding_beam.render(renderLayer);
                    if (entity.getInterpolatedData("fiskheroes:shield_blocking_timer") != 0){
                        shield_holding_blocking_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield") ? 1.0 : 0.0);
                        shield_holding_blocking_beam.render(renderLayer);
                    }
                    if (entity.getInterpolatedData("fiskheroes:shield_blocking_timer") == 0){
                        shield_holding_beam.progress = ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield") ? 1.0 : 0.0);
                        shield_holding_beam.render(renderLayer);
                    }
                }
                if (isFirstPersonArm) {
                    omegaXisFP_beam.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                    omegaXisFP_beam.render(renderLayer);
                }
            }
        }
    };
}
function initDual(renderer, colorLeft, colorRight) {
    //Head
    var head_beam_right = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-2.0, 0.5, 0.0], "end": [-2.0, -9.5, 0.0], "size": [10.0, 4.6875] }
        ]}
    ]);
    var head_beam_left = create(renderer, "skyhighheroes:wave_glow", colorLeft, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [2.0, 0.5, 0.0], "end": [2.0, -9.5, 0.0], "size": [10.0, 4.6875] }
        ]}
    ]);
    //Body
    var body_beam_left = create(renderer, "skyhighheroes:wave_glow", colorLeft, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [2.0, 0.0, 0.0], "end": [2.0, 12.0, 0.0], "size": [4.6875, 4.6875] }
        ]}
    ]);
    var body_beam_right = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-2.0, 0.0, 0.0], "end": [-2.0, 12.0, 0.0], "size": [4.6875, 4.6875] }
        ]}
    ]);
    //Arms start
    var armsStart_beam = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, -3.0, 0.0], "end": [-1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right arm
    var armRightStart_beam = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 11.0, 0.0], "end": [-1.0, -3.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left arm
    var armLeftStart_beam = create(renderer, "skyhighheroes:wave_glow", colorLeft, [
        { anchor: "leftArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [1.0, -3.0, 0.0], "end": [1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left Leg
    var legLeftStart_beam = create(renderer, "skyhighheroes:wave_glow", colorLeft, [
        { anchor: "leftLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right Leg
    var legRightStart_beam = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "rightLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Hair
    var hair_beams_left = create(renderer, "skyhighheroes:wave_glow", colorLeft, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [1.5, -8.0, 2.3125], "end": [1.5, -15.5, 2.3125], "size": [4.0, 2.0] },
            { "start": [0.75, -5.5, 5.3125], "end": [0.75, -10.5, 5.3125], "size": [2.0, 1.0] }
        ]}
    ]);
    var hair_beams_right = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.5, -8.0, 2.3125], "end": [-1.5, -15.5, 2.3125], "size": [4.0, 2.0] },
            { "start": [-0.75, -5.5, 5.3125], "end": [-0.75, -10.5, 5.3125], "size": [2.0, 1.0] }
        ]}
    ]);
    //Omega-Xis Beams
    var omegaXis_beam_right = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 2.0], "end": [-1.0, 12.5, 2.0], "size": [3.0, 6.0] },
            { "start": [-6.0, 3.7, 3.0], "end": [-5.5, 7.7, 3.0], "size": [1.0, 1.0] },
            { "start": [-5.0, 3.6, 3.0], "end": [-4.5, 10.6, 3.0], "size": [1.0, 1.0] },
            { "start": [3.0, 11.75, 2.5], "end": [0.0, 11.75, 2.5], "size": [0.5, 0.5] }
        ]},
    ]);
    var omegaXis_beam_left = create(renderer, "skyhighheroes:wave_glow", colorLeft, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, -2.0], "end": [-1.0, 12.5, -2.0], "size": [3.0, 6.0] },
            { "start": [-6.0, 3.7, -3.0], "end": [-5.5, 7.7, -3.0], "size": [1.0, 1.0] },
            { "start": [-5.0, 3.6, -3.0], "end": [-4.5, 10.6, -3.0], "size": [1.0, 1.0] },
            { "start": [3.0, 11.75, -2.5], "end": [0.0, 11.75, -2.5], "size": [0.5, 0.5] }
        ]},
    ]);
    //Omega-Xis First Person
    var omegaXisFP_beam_left = create(renderer, "skyhighheroes:wave_glow", colorLeft, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, -2.0], "end": [-1.0, 12.5, -2.0], "size": [3.0, 9.0] }
        ]}
    ]);
    var omegaXisFP_beam_right = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 2.0], "end": [-1.0, 12.5, 2.0], "size": [3.0, 9.0] }
        ]}
    ]);
    //sword
    var sword_beam = create(renderer, "skyhighheroes:wave_glow", colorRight, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 19.0, 0.0], "end": [-1.0, 4.0, 0.0], "size": [10.0, 7.0] }
        ]}
    ]);
    return {
        head_beam_left: head_beam_left,
        head_beam_right: head_beam_right,
        body_beam_left: body_beam_left,
        body_beam_right: body_beam_right,
        armsStart_beam: armsStart_beam,
        armRightStart_beam: armRightStart_beam,
        armLeftStart_beam: armLeftStart_beam,
        legRightStart_beam: legRightStart_beam,
        legLeftStart_beam: legLeftStart_beam,
        hair_beams_left: hair_beams_left,
        hair_beams_right: hair_beams_right,
        sword_beam: sword_beam,
        omegaXis_beam_right: omegaXis_beam_right,
        omegaXis_beam_left: omegaXis_beam_left,
        omegaXisFP_beam_right: omegaXisFP_beam_right,
        omegaXisFP_beam_left: omegaXisFP_beam_left,
        render: (entity, renderLayer, isFirstPersonArm) => {
            if (renderLayer == "CHESTPLATE") {
                head_beam_left.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (32/32)), 0.0), 1.0);
                head_beam_left.render(renderLayer);
                head_beam_right.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (32/32)), 0.0), 1.0);
                head_beam_right.render(renderLayer);
                body_beam_left.progress = Math.min(Math.max(((81/13) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (26/26)), 0.0), 1.0);
                body_beam_left.render(renderLayer);
                body_beam_right.progress = Math.min(Math.max(((81/13) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (26/26)), 0.0), 1.0);
                body_beam_right.render(renderLayer);
                armsStart_beam.progress = (entity.getData('skyhighheroes:dyn/wave_changing_timer') == 1 ? 1.0 : 0.0);
                armsStart_beam.render(renderLayer);
                armRightStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (2/32)), 0.0), 1.0) - (entity.getData('skyhighheroes:dyn/wave_changing_timer') == 1 ? 1.0 : 0.0);
                armRightStart_beam.render(renderLayer);
                armLeftStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (36/32)), 0.0), 1.0);
                armLeftStart_beam.render(renderLayer);
                legRightStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (50/32)), 0.0), 1.0);
                legRightStart_beam.render(renderLayer);
                legLeftStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (50/32)), 0.0), 1.0);
                legLeftStart_beam.render(renderLayer);
                hair_beams_left.progress = Math.min(Math.max((((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0);
                hair_beams_left.render(renderLayer);
                hair_beams_right.progress = Math.min(Math.max((((162/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - (284/32)), 0.0), 1.0);
                hair_beams_right.render(renderLayer);
                sword_beam.progress = (entity.getData('skyhighheroes:dyn/battle_card') == 2 ? 1.0 : 0.0);
                sword_beam.render(renderLayer);
                if (!isFirstPersonArm) {
                    omegaXis_beam_left.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                    omegaXis_beam_left.render(renderLayer);
                    omegaXis_beam_right.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                    omegaXis_beam_right.render(renderLayer);
                }
                if (isFirstPersonArm) {
                    omegaXisFP_beam_left.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                    omegaXisFP_beam_left.render(renderLayer);
                    omegaXisFP_beam_right.progress = Math.min(Math.max(((2.5 * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer')) - 0.6), 0.0), 1.0) - (!entity.getHeldItem().isEmpty() || entity.getData('skyhighheroes:dyn/battle_card') == 2 || entity.getData('skyhighheroes:dyn/head_toggle') == 1) + ((entity.getData('fiskheroes:flight_timer') > 0 || entity.getData('fiskheroes:flight_boost_timer') > 0) && entity.getData('skyhighheroes:dyn/head_toggle') == 1);
                    omegaXisFP_beam_right.render(renderLayer);
                }
            }
        }
    };
}
//Normal Auras so like only geo
function initNormal(renderer, color) {
    //Head
    var head_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "head", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.5, -0.0], "end": [0.0, -9.5, 0.0], "size": [10.0, 10.0] }
        ]}
    ]);
    //Body
    var body_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "body", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.0, 0.0], "size": [5.0, 8.0] }
        ]}
    ]);
    //Arms start
    var armsStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, -3.0, 0.0], "end": [-1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right arm
    var armRightStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 11.0, 0.0], "end": [-1.0, -3.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left arm
    var armLeftStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "leftArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [1.0, -3.0, 0.0], "end": [1.0, 11.0, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Left Leg
    var legLeftStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "leftLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Right Leg
    var legRightStart_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightLeg", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [0.0, 0.0, 0.0], "end": [0.0, 12.75, 0.0], "size": [4.75, 4.75] }
        ]}
    ]);
    //Omega-Xis Beams
    var omegaXis_beam = create(renderer, "skyhighheroes:wave_glow", color, [
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
    var omegaXisFP_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 3.5, 0.0], "end": [-1.0, 12.5, 0.0], "size": [9.0, 9.0] }
        ]}
    ]);
    //sword
    var sword_beam = create(renderer, "skyhighheroes:wave_glow", color, [
        { anchor: "rightArm", renderLayer: "CHESTPLATE", mirror: false, entries: [
            { "start": [-1.0, 19.0, 0.0], "end": [-1.0, 4.0, 0.0], "size": [10.0, 7.0] }
        ]}
    ]);
    return {
        head_beam: head_beam,
        body_beam: body_beam,
        armsStart_beam: armsStart_beam,
        armRightStart_beam: armRightStart_beam,
        armLeftStart_beam: armLeftStart_beam,
        legRightStart_beam: legRightStart_beam,
        legLeftStart_beam: legLeftStart_beam,
        omegaXis_beam: omegaXis_beam,
        omegaXisFP_beam: omegaXisFP_beam,
        sword_beam: sword_beam,
        render: (entity, renderLayer, isFirstPersonArm) => {
            if (renderLayer == "CHESTPLATE") {
                head_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (32/32)), 0.0), 1.0);
                head_beam.render(renderLayer);
                body_beam.progress = Math.min(Math.max(((81/13) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (26/26)), 0.0), 1.0);
                body_beam.render(renderLayer);
                armsStart_beam.progress = (entity.getData('skyhighheroes:dyn/wave_changing_timer') == 1 ? 1.0 : 0.0);
                armsStart_beam.render(renderLayer);
                armRightStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (2/32)), 0.0), 1.0) - (entity.getData('skyhighheroes:dyn/wave_changing_timer') == 1 ? 1.0 : 0.0);
                armRightStart_beam.render(renderLayer);
                armLeftStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (36/32)), 0.0), 1.0);
                armLeftStart_beam.render(renderLayer);
                legRightStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (50/32)), 0.0), 1.0);
                legRightStart_beam.render(renderLayer);
                legLeftStart_beam.progress = Math.min(Math.max(((81/16) * entity.getInterpolatedData('skyhighheroes:dyn/wave_changing_timer') - (50/32)), 0.0), 1.0);
                legLeftStart_beam.render(renderLayer);
                sword_beam.progress = (entity.getData('skyhighheroes:dyn/battle_card') == 2 ? 1.0 : 0.0);
                sword_beam.render(renderLayer);
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
    };
}
*/