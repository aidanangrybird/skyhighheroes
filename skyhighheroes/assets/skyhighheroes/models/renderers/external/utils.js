setGlobal();

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

function bindParticles(renderer, particleType) {
    return renderer.bindProperty("fiskheroes:particles").setParticles(renderer.createResource("PARTICLE_EMITTER", particleType));
}

function bindCloud(renderer, propertyName, cloudType) {
    return renderer.bindProperty(propertyName).setCloud(renderer.createResource("PARTICLE_CLOUD", cloudType));
}

function bindTrail(renderer, trailType) {
    var prop = renderer.bindProperty("fiskheroes:trail");
    prop.setTrail(renderer.createResource("TRAIL", trailType));
    prop.setCondition(entity => entity.getData("fiskheroes:speeding"));
    return prop;
}

function setOpacity(renderer, min, max, delta) {
    renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
        return max + (min - max) * delta;
    });
}

function setOpacityWithData(renderer, min, max, data) {
    renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
        return max + (min - max) * entity.getInterpolatedData(data);
    });
}

function isJetpacking(entity) {
    return entity.getData("fiskheroes:jetpacking") || entity.getData("fiskheroes:hovering");
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

function createLines(renderer, beam, color, entries) {
    var lines = renderer.createEffect("fiskheroes:lines");
    var shape = renderer.createResource("SHAPE", null);

    for (var i = 0; i < entries.length; ++i) {
        shape.bindLine(entries[i]);
    }

    if (typeof beam === "string") {
        beam = renderer.createResource("BEAM_RENDERER", beam);
    }

    lines.setShape(shape);
    lines.setRenderer(beam);
    lines.color.set(color);
    return lines;
}

function addCameraShake(renderer, factor, intensity, data) {
    var shake = renderer.bindProperty("fiskheroes:camera_shake").setCondition(entity => {
        shake.factor = factor * entity.getInterpolatedData(data);
        shake.intensity = intensity;
        return true;
    });
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
        data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer") * (1 - entity.getInterpolatedData("fiskheroes:dyn/superhero_landing_timer")));
        data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
    });
}
