//Beam setup
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
function addFlightAnimation(renderer, name, value, dataLoader) {
  var anim = renderer.createResource("ANIMATION", value);
  renderer.addCustomAnimation(name, anim);

  if (typeof dataLoader === "undefined") {
    anim.setData((entity, data) => {
      data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer"));
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
function addFlightAnimationWithLanding(renderer, name, value) {
  addFlightAnimation(renderer, name, value, (entity, data) => {
    data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer") * (1 - entity.getInterpolatedData("skyhighheroes:dyn/superhero_boosting_landing_timer") - entity.getInterpolatedData("skyhighheroes:dyn/superhero_landing_timer")));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
  });
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

//Cyber Animations
function initCyberneticAnimations(renderer) {
  addAnimation(renderer, "cybernetic.LEFT_ARM_BLADE", "skyhighheroes:cybernetic_left_arm_blade").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_timer") + getHoloBooleans(entity, "holoBlades", "bladesLeft"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_stealth_timer") + getHoloBooleans(entity, "holoBlades", "bladesLeftStealth"));
  });
  addAnimation(renderer, "cybernetic.RIGHT_ARM_BLADE", "skyhighheroes:cybernetic_right_arm_blade").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_timer") + getHoloBooleans(entity, "holoBlades", "bladesRight"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_stealth_timer") + getHoloBooleans(entity, "holoBlades", "bladesRightStealth"));
  });
  addAnimation(renderer, "cybernetic.LEFT_LEG_ROCKETS", "skyhighheroes:cybernetic_left_leg_rockets").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_inner_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_inner_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/rocket_inner_legs_timer") + getHoloBooleans(entity, "holoFlight", "innerRockets"));
  });
  addAnimation(renderer, "cybernetic.RIGHT_LEG_ROCKETS", "skyhighheroes:cybernetic_right_leg_rockets").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_inner_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_inner_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/rocket_inner_legs_timer") + getHoloBooleans(entity, "holoFlight", "innerRockets"));
  });
  addAnimation(renderer, "cybernetic.WING_LEFT", "skyhighheroes:cybernetic_wing_left").setData((entity, data) => {
    data.load(entity.getInterpolatedData("skyhighheroes:dyn/wing_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/wings_timer") + getHoloBooleans(entity, "holoFlight", "rocketsWings") + getHoloBoolean(entity, "holoGlide"));
  });
  addAnimation(renderer, "cybernetic.WING_RIGHT", "skyhighheroes:cybernetic_wing_right").setData((entity, data) => {
    data.load( entity.getInterpolatedData("skyhighheroes:dyn/wing_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/wings_timer") + getHoloBooleans(entity, "holoFlight", "rocketsWings") + getHoloBoolean(entity, "holoGlide"));
  });
  addAnimation(renderer, "cybernetic.LEFT_ARM_AIM", "skyhighheroes:cybernetic_left_arm_aim").setData((entity, data) => {
    data.load(entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + getHoloBooleans(entity, "holoCannons", "cannonsArms"));
  });
  addAnimation(renderer, "cybernetic.RIGHT_ARM_AIM", "skyhighheroes:cybernetic_right_arm_aim").setData((entity, data) => {
    data.load(entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + getHoloBooleans(entity, "holoCannons", "cannonsArms"));
  });
  addAnimation(renderer, "cybernetic.LEFT_ARM_SHIELD", "skyhighheroes:cybernetic_left_arm_shield").setData((entity, data) => {
    data.load(entity.getInterpolatedData("skyhighheroes:dyn/shield_left_arm_timer") * entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * (1 - entity.getInterpolatedData("fiskheroes:beam_charge")));
  });
  addAnimation(renderer, "cybernetic.RIGHT_ARM_SHIELD", "skyhighheroes:cybernetic_right_arm_shield").setData((entity, data) => {
    data.load(entity.getInterpolatedData("skyhighheroes:dyn/shield_right_arm_timer") * entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * (1 - entity.getInterpolatedData("fiskheroes:beam_charge")));
  });
  addAnimation(renderer, "cybernetic.BASE", "skyhighheroes:cybernetic_base").setData((entity, data) => {
    data.load(1.0);
  })
  .setCondition(entity => !entity.is("DISPLAY") && !entity.getWornHelmet().nbt().getBoolean("naturalArms") && (entity.getInterpolatedData("skyhighheroes:dyn/thermoptic_disguise_timer") < 1))
  .priority = -11;/* 
  addAnimation(renderer, "cybernetic.LEFT_ARM_PUNCH", "skyhighheroes:cybernetic_left_arm_punch").setData((entity, data) => {
    data.load(entity.getPunchTimerInterpolated());
  })
  .setCondition(entity => (entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_timer") == 1))
  .priority = -8;
  addAnimation(renderer, "cybernetic.RIGHT_ARM_PUNCH", "skyhighheroes:cybernetic_right_arm_punch").setData((entity, data) => {
    data.load(entity.getPunchTimerInterpolated());
  })
  .setCondition(entity => (entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_timer") == 1))
  .priority = -8; */
  addAnimation(renderer, "cybernetic.DUAL_PUNCH", "skyhighheroes:cybernetic_dual_punch").setData((entity, data) => {
    data.load(1.0);
  })
  .setCondition(entity => ((entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_timer") == 1) && (entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_timer") == 1)))
  .priority = -8;
  //Flight
  addFlightAnimationWithLanding(renderer, "cybernetic.FLIGHT", "skyhighheroes:flight/cybernetic_flight.anim.json");
  //Landing
  addAnimationWithData(renderer, "cybernetic.LAND", "skyhighheroes:cybernetic_landing", "skyhighheroes:dyn/superhero_landing_timer")
    .priority = -8;
  addAnimationWithData(renderer, "cybernetic.LAND_BOOST", "skyhighheroes:cybernetic_boosting_landing", "skyhighheroes:dyn/superhero_boosting_landing_timer")
    .priority = -8;
  addAnimationWithData(renderer, "cybernetic.ROLL", "skyhighheroes:flight/cybernetic_barrel_roll", "fiskheroes:barrel_roll_timer")
  addHoverAnimation(renderer, "cybernetic.HOVER", "skyhighheroes:cybernetic_hover");
  addAnimationWithData(renderer, "cybernetic.POWER", "skyhighheroes:cybernetic_powering_down", "skyhighheroes:dyn/powering_down_timer")
    .setCondition(entity => (!entity.is("DISPLAY") && entity.getInterpolatedData("skyhighheroes:dyn/powering_down_timer") > 0))
    .priority = -10;

  addAnimation(renderer, "cybernetic.HOLOGRAM_FLIGHT", "skyhighheroes:cybernetic_holo_flight").setData((entity, data) => {
    data.load(0, 0.0 + getHoloBoolean(entity, "holoFlight") ? (getHoloBoolean(entity, "rocketsAux") + getHoloBoolean(entity, "rocketsBody") + getHoloBoolean(entity, "rocketsLegs")) : 0.0);
    data.load(1, 0.0 + getHoloBoolean(entity, "holoBoostFlight"));
  }).priority = -9;
  
  addAnimation(renderer, "cybernetic.HOLOGRAM_GLIDE", "skyhighheroes:cybernetic_holo_glide").setData((entity, data) => {
    data.load(0.0 + getHoloBoolean(entity, "holoGlide"));
  }).priority = -9;
};

function initNV(renderer, uuid) {
  nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0.0;
  nv.factor = 1.0;
  nv.setCondition(entity => entity.getUUID() == uuid);
};

function initTentacles(renderer, model) {
  var tentacleBase = model.getCubeOffset("body_ext_arm_left");
  var arm = renderer.createResource("MODEL", "skyhighheroes:CyberneticArm");
  arm.texture.set("arm", "arm_lights");
  var claw = renderer.createResource("MODEL", "skyhighheroes:CyberneticClaw");
  claw.texture.set("claw", "claw_lights");
  claw.bindAnimation("fiskheroes:ock_claw").setData((entity, data) => {
      var t = entity.as("TENTACLE");
      data.load(0, 1 - Math.min(t.getCaster().getInterpolatedData("fiskheroes:tentacle_extend_timer") * 2, 1));
      data.load(1, t.getIndex());
      data.load(2, t.getGrabTimer());
      data.load(3, t.getStrikeTimer());
  });

  var tentacles = renderer.bindProperty("fiskheroes:tentacles").setTentacles([
      { "offset": [2.0, -7.5, -4.65], "direction": [2.0, 15.0, -25.0] },
      { "offset": [-2.0, -7.5, -4.65], "direction": [-2.0, 15.0, -25.0] }
  ]);
  tentacles.anchor.set("body", tentacleBase);
  tentacles.setSegmentModel(arm);
  tentacles.setHeadModel(claw);
  tentacles.segmentLength = 1.8;
  tentacles.segments = 16;
};

function initTransceiveBeams(renderer, model, color) {
  var receiveBase = model.getCubeOffset("head_satellite_dish_base");
  var transmitBase = model.getCubeOffset("head_satellite_dish_antenna");

  var transmitBeamRenderer = renderer.createResource("BEAM_RENDERER", "skyhighheroes:cybernetic_transmit");
  var transmitShape = renderer.createResource("SHAPE", null);
  var transmitLine = transmitShape.bindLine({ "start": [0.0, 0.1875, 0.0], "end": [0.0, 0.1875, 0.0], "size": [0.5, 0.5] });
  var transmitBeam = renderer.createEffect("fiskheroes:lines").setRenderer(transmitBeamRenderer).setShape(transmitShape).setOffset(0.0, 0.0, 0.0);
  transmitBeam.mirror = false;
  transmitBeam.setScale(16.0);
  transmitBeam.anchor.set("head", transmitBase);
  transmitBeam.color.set(color);

  var receiveBeamRenderer = renderer.createResource("BEAM_RENDERER", "skyhighheroes:cybernetic_receive");
  var receiveShape = renderer.createResource("SHAPE", null);
  var receiveLine = receiveShape.bindLine({ "start": [0.0, 300.375, 0.0], "end": [0.0, 300.375, 0.0], "size": [15.0, 15.0] });
  var receiveBeam = renderer.createEffect("fiskheroes:lines").setRenderer(receiveBeamRenderer).setShape(receiveShape).setOffset(0.0, 0.0, 0.0);
  receiveBeam.mirror = false;
  receiveBeam.setScale(16.0);
  receiveBeam.anchor.set("head", receiveBase);
  receiveBeam.color.set(color);
  
  return {
    render: function (entity, renderLayer, isFirstPersonArm) {
      if (!isFirstPersonArm) {
        var transmitTimer = entity.getInterpolatedData("skyhighheroes:dyn/transmit_beam_timer");
        var receiveTimer = entity.getInterpolatedData("skyhighheroes:dyn/receive_beam_timer");
        transmitLine.end.y = transmitLine.start.y+300*transmitTimer;
        receiveLine.end.y = receiveLine.start.y-300*receiveTimer;
        if (transmitTimer > 0) {
          transmitBeam.render();
        };
        if (receiveTimer > 0) {
          receiveBeam.render();
        };
      };
    }
  };
};

/**
 * Gets direction from one vector to another
 * @param {JSVector3} base - Base vector
 * @param {JSVector3} other - Vector to measure to
 * @returns Direction
 **/
function direction(base, other) {
  var angle = (((Math.atan2(-1*(other.z()-base.z()), -1*(other.x()-base.x())) * 180) / Math.PI) + 270) % 360;
  var direction = angleToDirection(angle);
  return direction;
};

function beamThing(renderer, color) {
  
  var beamRenderer = renderer.createResource("BEAM_RENDERER", "fiskheroes:energy_projection");
  var shape = renderer.createResource("SHAPE", null);
  var line = shape.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [5.0, 5.0] });
  var beam = renderer.createEffect("fiskheroes:lines").setRenderer(beamRenderer).setShape(shape).setOffset(0.0, 0.0, 0.0);
  beam.mirror = false;
  beam.setScale(16.0);
  beam.anchor.set("head");
  beam.anchor.ignoreAnchor(true);
  beam.color.set(color);
  
  return {
    render: function (entity, renderLayer, isFirstPersonArm) {
      if (isFirstPersonArm) {
        var distance = entity.pos().distanceTo(208.5, 75.5, 410.5);
        //Pitch
        var pitch = (entity.rotPitch()/180)*Math.PI;
        //Yaw
        var yaw = (entity.rotYaw()/180)*Math.PI;
        var direction = (((Math.atan2(-1*(208.5-entity.pos().z()), -1*(410.5-entity.pos().x())) * 180) / Math.PI) + 270) % 360;
        var rotation = entity.rotYaw()%360;
        var bearing = (((Math.abs((rotation < 0) ? (rotation+360) : rotation)+180) % 360)/180)*Math.PI;
        line.end.x = line.start.x = distance*Math.cos(yaw-direction)*16;
        line.start.y = 0.0;
        line.end.y = line.start.y - 5.0;
        line.end.z = line.start.z = distance*Math.sin(yaw-direction)*16;
        beam.setRotation(0.0, -1*entity.rotPitch(), 0.0)
        beam.render();
      };
    }
  };
};

/**
 * Checks a NBT boolean to be used on holographic display stand
 * @param {JSEntity} entity - required
 * @param {string} value - NBT boolean to check
 * @returns NBT boolean if the entity is a holographic display stand
 **/
function getHoloBoolean(entity, value) {
  return entity.is("DISPLAY") && entity.getWornHelmet().nbt().getBoolean(value) && (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM");
};

/**
 * Checks two NBT booleans to be used on holographic display stand
 * @param {JSEntity} entity - required
 * @param {string} condition - NBT boolean to use for condition
 * @param {string} value - NBT boolean to use for condition
 * @returns NBT boolean if the entity is a holographic display stand
 **/
function getHoloBooleans(entity, condition, value) {
  return entity.is("DISPLAY") && entity.getWornHelmet().nbt().getBoolean(condition) && entity.getWornHelmet().nbt().getBoolean(value) && (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM");
};