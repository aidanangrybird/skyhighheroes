//Beam stuff
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

function addPredationAnimation(renderer, key, value) {
  if (typeof value === "string") {
    anim = renderer.createResource("ANIMATION", value);
  };
  renderer.addCustomAnimation(key, anim);
  anim.setData((entity, data) => data.load(entity.getInterpolatedData("skyhighheroes:dyn/predation_timer")));
  anim.setCondition(entity => entity.getData("skyhighheroes:dyn/battle_card") > 0)
  anim.priority = -9.75;
};

function addBasePredationAnimation(renderer, key, value) {
  if (typeof value === "string") {
    anim = renderer.createResource("ANIMATION", value);
  };
  renderer.addCustomAnimation(key, anim);
  anim.setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/predation_timer"));
  });
  anim.setCondition(entity => entity.getData("skyhighheroes:dyn/battle_card") == 0)
  anim.priority = -9.75;
};

function addSwordAnimations(renderer, key, value) {
  if (typeof value === "string") {
    anim = renderer.createResource("ANIMATION", value);
  };
  renderer.addCustomAnimation(key, anim);
  anim.setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/sword_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:shield_blocking_timer"));
  });
  anim.setCondition(entity => entity.getData("skyhighheroes:dyn/battle_card") == 2);
  anim.priority = -9.75;
};

function addFlightHoldingAnimation(renderer, name, value, dataLoader) {
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
  anim.setCondition(entity => !entity.getHeldItem().isEmpty());

  anim.priority = -10;
  renderer.reprioritizeDefaultAnimation("PUNCH", -9);
  renderer.reprioritizeDefaultAnimation("HOLD_CHRONOS_RIFLE", -9);
  renderer.reprioritizeDefaultAnimation("HOLD_PIZZA", -9);
  renderer.reprioritizeDefaultAnimation("BLOCK_CAPS_SHIELD", -9);
  renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
};

function addFlightBaseAnimation(renderer, name, value, dataLoader) {
  var anim = renderer.createResource("ANIMATION", value);
  renderer.addCustomAnimation(name, anim);

  
  anim.setCondition(entity => entity.getHeldItem().isEmpty())
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

function initForceField(renderer, color) {
  addAnimationWithData(renderer, "skyhigh.BLOCKING", "skyhighheroes:force_field_holding", "fiskheroes:shield_blocking_timer")
    .setCondition(entity => entity.getData("skyhighheroes:dyn/battle_card") == 1)
    .priority = -5;
  var forcefield = renderer.bindProperty("fiskheroes:forcefield");
  forcefield.color.set(color);
  forcefield.setShape(36, 36).setOffset(0.0, 10.0, 0.0).setScale(2.0);
  forcefield.setCondition(entity => {
    forcefield.opacity = (entity.getData("skyhighheroes:dyn/battle_card") == 1) * entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.1;
    return true;
  });
};

//Stelar Animations
function initStelarAnimations(renderer) {
  //Aiming
  addAnimationWithData(renderer, "stelar.AIMING", "skyhighheroes:stelar_aim", "fiskheroes:aiming_timer")
    .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
    .priority = 10;
  addAnimationEvent(renderer, "CEILING_CRAWL", "skyhighheroes:em_wall_ceiling_stand");
  addPredationAnimation(renderer, "stelar.PREDATION", "skyhighheroes:stelar_predation");
  addSwordAnimations(renderer, "stelar.SWORD", "skyhighheroes:stelar_sword");
  //Flight
  addFlightBaseAnimation(renderer, "stelar.BASE_FLIGHT", "skyhighheroes:flight/stelar_base_flight.anim.json");
  addFlightHoldingAnimation(renderer, "stelar.HOLDING_FLIGHT", "skyhighheroes:flight/stelar_holding_flight.anim.json");
  addAnimationWithData(renderer, "stelar.LAND", "skyhighheroes:stelar_landing", "skyhighheroes:dyn/superhero_landing_timer")
    .priority = -8;
  addAnimationWithData(renderer, "stelar.LAND_BOOST", "skyhighheroes:stelar_boosting_landing", "skyhighheroes:dyn/superhero_boosting_landing_timer")
    .priority = -8;
  addAnimationWithData(renderer, "stelar.ROLL", "skyhighheroes:flight/stelar_barrel_roll", "fiskheroes:barrel_roll_timer")
    .priority = 10;
  addHoverAnimation(renderer, "stelar.HOVER", "skyhighheroes:stelar_hover");
};
//Mega Buster
function initMegaBuster(renderer, color, color_other) {
  renderer.bindProperty("fiskheroes:energy_bolt").color.set(color);
  bindBeam(renderer, "fiskheroes:energy_manipulation", "fiskheroes:energy_discharge", "rightArm", color_other, [
    { "firstPerson": [-2.5, 0.0, -7.0], "offset": [-0.5, 19.0, -12.0], "size": [1.5, 1.5] }
  ]);
};

function initNV(renderer) {
  nv_wave_change = renderer.bindProperty("fiskheroes:night_vision");
  nv_wave_change.fogStrength = 0.0;
  nv_wave_change.factor = 1.0;
  nv_wave_change.setCondition(entity => entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0.75);
  nv_visualizer = renderer.bindProperty("fiskheroes:night_vision");
  nv_visualizer.fogStrength = 0.0;
  nv_visualizer.factor = 1.0;
  nv_visualizer.firstPersonOnly = true;
  nv_visualizer.setCondition(entity => entity.getData("skyhighheroes:dyn/visualizer_toggle"));
};

//Equipment
function initLiveries(renderer) {
  var livery_shield = renderer.bindProperty("fiskheroes:livery");
  livery_shield.texture.set("shield", "shield_lights");
  livery_shield.weaponType = "SHIELD";
  var livery_katana = renderer.bindProperty("fiskheroes:livery");
  livery_katana.texture.set("katana", "katana_lights");
  livery_katana.weaponType = "KATANA";
  var livery_scythe = renderer.bindProperty("fiskheroes:livery");
  livery_scythe.texture.set("scythe", "scythe_lights");
  livery_scythe.weaponType = "RUPTURES_SCYTHE";
  var livery_rifle = renderer.bindProperty("fiskheroes:livery");
  livery_rifle.texture.set("rifle", "rifle_lights");
  livery_rifle.weaponType = "CHRONOS_RIFLE";
};

function blockBelowStand(entity, block) {
  return (entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM") && entity.world().getBlock(entity.pos().add(0, -1, 0)) == block;
};