//Flight Trail
function bindFlightTrail(renderer, trailType) {
    var prop = renderer.bindProperty("fiskheroes:trail");
    prop.setTrail(renderer.createResource("TRAIL", trailType));
    prop.setCondition(entity => entity.getData("fiskheroes:flight_boost_timer") > 0);
    return prop;
}

//Speed Trail
function bindSpeedTrail(renderer, trailType) {
    var prop = renderer.bindProperty("fiskheroes:trail");
    prop.setTrail(renderer.createResource("TRAIL", trailType));
    prop.setCondition(entity => entity.getData("fiskheroes:speeding"));
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

function setOpacityWithData(renderer, min, max, data) {
    renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
        return max + (min - max) * entity.getInterpolatedData(data);
    });
}

//Useful Stuff
function forcefieldAnimation(renderer) {
    addAnimationWithData(renderer, "skyhigh.BLOCKING", "skyhighheroes:force_field_holding", "fiskheroes:shield_blocking_timer")
        .priority = -5;
}
function initForceField(renderer, color) {
    var forcefield = renderer.bindProperty("fiskheroes:forcefield");
    forcefield.color.set(color);
    forcefield.setShape(36, 36).setOffset(0.0, 10.0, 0.0).setScale(2.0);
    forcefield.setCondition(entity => {
        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.1;
        return true;
    });
}
function emCeilingAnimation(renderer) {
    addAnimationEvent(renderer, "em_wave.CEILING_CRAWL", "skyhighheroes:em_wall_ceiling_stand");
}

function emTeleport(renderer) {
    setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
}
