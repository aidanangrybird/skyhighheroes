
function bindBeam(renderer, propertyName, beam, anchor, color, entries) {
  var prop = renderer.bindProperty(propertyName).setAnchor(anchor);
  var constln = renderer.createResource("BEAM_CONSTELLATION", null);

  for (var i = 0; i < entries.length; ++i) {
    constln.bindBeam(entries[i]);
  };

  if (typeof beam === "string") {
    beam = renderer.createResource("BEAM_RENDERER", beam);
  };

  prop.setConstellation(constln);
  prop.setRenderer(beam);
  prop.color.set(color);
  return prop;
};

//Animation stuff
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

function addFlightAnimation(renderer, name, value, dataLoader) {
  var anim = renderer.createResource("ANIMATION", value);
  renderer.addCustomAnimation(name, anim);
  
  if (typeof dataLoader === "undefined") {
    anim.setData((entity, data) => {
      data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer") * (1 - entity.getInterpolatedData("skyhighheroes:dyn/superhero_boosting_landing_timer") - entity.getInterpolatedData("skyhighheroes:dyn/superhero_landing_timer")));
      data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
    });
  } else {
    anim.setData((entity, data) => dataLoader(entity, data));
  };
  
  anim.priority = -10;
  renderer.reprioritizeDefaultAnimation("PUNCH", -9);
  renderer.reprioritizeDefaultAnimation("HOLD_CHRONOS_RIFLE", -9);
  renderer.reprioritizeDefaultAnimation("HOLD_PIZZA", -9);
  renderer.reprioritizeDefaultAnimation("BLOCK_CAPS_SHIELD", -9);
  renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
};

function addHoverAnimation(renderer, name, value, dataLoader) {
  var anim = renderer.createResource("ANIMATION", value);
  renderer.addCustomAnimation(name, anim);

  if (typeof dataLoader === "undefined") {
    anim.setData((entity, data) => {
      data.load(0, entity.getInterpolatedData("fiskheroes:levitate_timer"));
      data.load(1, entity.loop(20 * Math.PI) + 0.4);
    });
  } else {
    anim.setData((entity, data) => dataLoader(entity, data));
  };

  anim.priority = -9.5;
  return anim;
};

function bindCloud(renderer, propertyName, cloudType) {
    return renderer.bindProperty(propertyName).setCloud(renderer.createResource("PARTICLE_CLOUD", cloudType));
}

function initForceField(renderer, color) {
  var forcefield = renderer.bindProperty("fiskheroes:forcefield");
  forcefield.color.set(color);
  forcefield.setShape(36, 36).setOffset(0.0, 10.0, 0.0).setScale(2.0);
  forcefield.setCondition(entity => {
    forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.5;
    return true;
  });
};

function initChakraAnimations(renderer) {
  //Aiming
  addAnimationWithData(renderer, "chakra.AIMING", "skyhighheroes:chakra_aim", "fiskheroes:aiming_timer")
    .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
    .priority = 10;
  addAnimationWithData(renderer, "chakra.ENERGY_PROJECTION", "skyhighheroes:chakra_aim", "fiskheroes:energy_projection_timer")
    .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
    .priority = 10;
  //Flight
  addFlightAnimation(renderer, "chakra.BASE_FLIGHT", "skyhighheroes:flight/chakra_flight.anim.json");
  addAnimationWithData(renderer, "chakra.LAND", "skyhighheroes:chakra_landing", "skyhighheroes:dyn/superhero_landing_timer")
    .priority = -8;
  addAnimationWithData(renderer, "chakra.LAND_BOOST", "skyhighheroes:chakra_boosting_landing", "skyhighheroes:dyn/superhero_boosting_landing_timer")
    .priority = -8;
  addAnimationWithData(renderer, "chakra.ROLL", "skyhighheroes:flight/chakra_barrel_roll", "fiskheroes:barrel_roll_timer")
    .priority = 10;
  addHoverAnimation(renderer, "chakra.HOVER", "skyhighheroes:chakra_hover");
};

function initBeams(renderer, color) {
  renderer.bindProperty("fiskheroes:energy_bolt").color.set(color);
  bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", color, [
    { "firstPerson": [-4.5, 3.75, -11.4], "offset": [-0.5, 10.0, 0.0], "size": [2.0, 2.0] },
  ]);
};

function initTelekinesis(renderer, name) {
  bindCloud(renderer, "fiskheroes:telekinesis", "skyhighheroes:" + name + "_the_invincible");
};