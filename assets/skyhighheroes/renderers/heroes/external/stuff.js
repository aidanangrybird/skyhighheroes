//Flight Trail
function bindFlightTrail(renderer, trailType) {
  var prop = renderer.bindProperty("fiskheroes:trail");
  prop.setTrail(renderer.createResource("TRAIL", trailType));
  prop.setCondition(entity => entity.getData("fiskheroes:flight_boost_timer") > 0);
  return prop;
};

//Speed Trail
function bindSpeedTrail(renderer, trailType) {
  var prop = renderer.bindProperty("fiskheroes:trail");
  prop.setTrail(renderer.createResource("TRAIL", trailType));
  prop.setCondition(entity => entity.getData("fiskheroes:speeding"));
  return prop;
};

function bindCloud(renderer, propertyName, cloudType) {
  return renderer.bindProperty(propertyName).setCloud(renderer.createResource("PARTICLE_CLOUD", cloudType));
}

//Animation stuff
function parseAnimationEntry(renderer, value) {
  if (typeof value === "string") {
    return {
      "anim": renderer.createResource("ANIMATION", value),
      "weight": 1
    };
  };
  return {
    "anim": renderer.createResource("ANIMATION", value.key),
    "weight": value.hasOwnProperty("weight") ? value.weight : 1
  };
};
function addAnimationEvent(renderer, key, value) {
  var event = renderer.createResource("ANIMATION_EVENT", null);

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; ++i) {
      var e = parseAnimationEntry(renderer, value[i]);
      event.bindAnimation(e.anim, e.weight);
    };
  } else {
    var e = parseAnimationEntry(renderer, value);
    event.bindAnimation(e.anim, e.weight);
  };

  renderer.addAnimationEvent(key, event);
  return event;
};
function addAnimation(renderer, key, anim) {
  if (typeof anim === "string") {
    anim = renderer.createResource("ANIMATION", anim);
  };

  renderer.addCustomAnimation(key, anim);
  return anim;
};
function addAnimationWithData(renderer, key, anim, dataVar) {
  return addAnimation(renderer, key, anim).setData((entity, data) => data.load(entity.getInterpolatedData(dataVar)));
};

function setOpacityWithData(renderer, min, max, data) {
  renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
    return max + (min - max) * entity.getInterpolatedData(data);
  });
};

//Useful Stuff
function emCeilingAnimation(renderer) {
  addAnimationEvent(renderer, "CEILING_CRAWL", "skyhighheroes:em_wall_ceiling_stand");
};

function emTeleport(renderer) {
  setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
};

function initHoloFlightAnim(renderer, name, value) {
  var anim = renderer.createResource("ANIMATION", value);
  renderer.addCustomAnimation(name, anim);
  anim.setData((entity, data) => data.load(entity.loop(20 * Math.PI) + 0.4));
  anim.priority = -9.5;
  anim.setCondition(entity => (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));
  renderer.reprioritizeDefaultAnimation("PUNCH", -9);
  renderer.reprioritizeDefaultAnimation("HOLD_CHRONOS_RIFLE", -9);
  renderer.reprioritizeDefaultAnimation("HOLD_PIZZA", -9);
  renderer.reprioritizeDefaultAnimation("BLOCK_CAPS_SHIELD", -9);
  renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
  return anim;
};

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
};

/**
 * clamp as in FSK
 * @param timer - input timer
 * @param min - minimum value
 * @param max - maximum
 **/
function clamp(timer, min, max) {
  return Math.min(Math.max(timer, min), max);
};
/**
 * animate as in FSK
 * @param timer - input timer
 * @param duration - duration of frame
 * @param start - start of frame
 **/
function animate(timer, duration, start) {
  return (timer > start && timer <= start + duration) ? ((timer - start) / duration) : 0.0;
};
/**
 * animate2 as in FSK
 * @param timer - input timer
 * @param duration - duration of frame
 * @param start - start of frame
 * @param fadeIn - how long to fade in
 * @param fadeOut - how long to fade out
 **/
function animate2(timer, duration, start, fadeIn, fadeOut) {
  fadeIn = clamp(fadeIn, 0.0, duration);
  fadeOut = clamp(fadeOut, 0.0, duration - fadeIn);
  if (timer >= start && timer <= start + duration) {
    pos = timer - start;
    if (pos < fadeIn) {
      return animate(pos, fadeIn, 0.0);
    };
    if (pos >= duration - fadeOut) {
      return 1.0 - animate(pos, fadeOut, duration - fadeOut);
    };
    return 1.0;
  };
  return 0.0;
};