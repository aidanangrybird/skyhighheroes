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

function createModel(renderer, modelType, texture, textureLights) {
    var model = renderer.createResource("MODEL", modelType);

    if (typeof textureLights !== "undefined") {
        model.texture.set(texture, textureLights);
    }
    else {
        model.texture.set(texture);
    }

    return model;
}

function init(renderer, texture_head, lights_head, texture_body, lights_body, texture_rightArm, lights_rightArm, texture_leftArm, lights_leftArm, texture_rightLeg, lights_rightLeg, texture_leftLeg, lights_leftLeg) {
	
	var model_head = createModel(renderer, texture_head)
	model_head.bindAnimation("ironmaniac:mark_41_suitdown_helmet").setData((entity, data) => {
        data.load(entity.getInterpolatedData("skyhighheroes:dyn/yoroi_transform_timer")); 
    });
	
    var model_body = renderer.createResource("MODEL", "ironmaniac:player_chest");
	model_body.bindAnimation("ironmaniac:mark_41_suitdown_chest").setData((entity, data) => {
        data.load(entity.getInterpolatedData("skyhighheroes:dyn/yoroi_transform_timer")); 
    });
    model_body.texture.set(texture_body, lights_body);
	
	var model_rightArm = renderer.createResource("MODEL", "ironmaniac:player_limb");
	model_rightArm.bindAnimation("ironmaniac:mark_41_suitdown_limb").setData((entity, data) => {
        data.load(entity.getInterpolatedData("skyhighheroes:dyn/yoroi_transform_timer"));
        });
    model_rightArm.texture.set(texture_rightArm, lights_rightArm);
	
    var model_leftArm = renderer.createResource("MODEL", "ironmaniac:player_limb");
	model_leftArm.bindAnimation("ironmaniac:mark_41_suitdown_limb").setData((entity, data) => {
        data.load(entity.getInterpolatedData("skyhighheroes:dyn/yoroi_transform_timer")); 
        });
    model_leftArm.texture.set(texture_leftArm, lights_leftArm);
	
	var model_rightLeg = renderer.createResource("MODEL", "ironmaniac:player_limb");
	model_rightLeg.bindAnimation("ironmaniac:mark_41_suitdown_limb").setData((entity, data) => {
        data.load(entity.getInterpolatedData("skyhighheroes:dyn/yoroi_transform_timer")); 
       });
    model_rightLeg.texture.set(texture_rightLeg, lights_rightLeg);
	
    var model_leftLeg = renderer.createResource("MODEL", "ironmaniac:player_limb");
	model_leftLeg.bindAnimation("ironmaniac:mark_41_suitdown_limb").setData((entity, data) => {
        data.load(entity.getInterpolatedData("skyhighheroes:dyn/yoroi_transform_timer")); 
        });
    model_leftLeg.texture.set(texture_leftLeg, lights_leftLeg);
	
    head = renderer.createEffect("fiskheroes:model").setModel(model_head);
    head.anchor.set("head");
	
	body = renderer.createEffect("fiskheroes:model").setModel(model_body);
    body.anchor.set("body");
	
	rightArm = renderer.createEffect("fiskheroes:model").setModel(model_rightArm);
    rightArm.anchor.set("rightArm");
	
	leftArm = renderer.createEffect("fiskheroes:model").setModel(model_leftArm);
    leftArm.anchor.set("leftArm");
	
	rightLeg = renderer.createEffect("fiskheroes:model").setModel(model_rightLeg);
    rightLeg.anchor.set("rightLeg");
	
	leftLeg = renderer.createEffect("fiskheroes:model").setModel(model_leftLeg);
    leftLeg.anchor.set("leftLeg");

    return {
        blade: blade,
        omegaXisRight: omegaXisRight,
        omegaXisLeft: omegaXisLeft,
        omegaXisTop: omegaXisTop,
        omegaXisBottom: omegaXisBottom,
        omegaXisFront: omegaXisFront,
        render: (entity, renderLayer) => {
            if (!entity.isDisplayStand()) {
                if(entity.getInterpolatedData("skyhighheroes:dyn/yoroi_transform_timer") > 0 && entity.getData("skyhighheroes:dyn/yoroi_transformed")) {
                    rightLeg.render();
                    leftLeg.render(); head.render();
                    body.render();
                    rightArm.render();
                    leftArm.render();
                }
            }
        }
    };
}

function render(entity, renderLayer, isFirstPersonArm) {
	
}