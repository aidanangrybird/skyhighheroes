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
  }
  else {
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
  }
  else {
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
  }
  else {
    anim.setData((entity, data) => dataLoader(entity, data));
  };

  anim.priority = -9.5;
  return anim;
};

//Astro Animations
function initAstroAnimations(renderer) {
  //Aiming
  addAnimationWithData(renderer, "astro.AIMING", "skyhighheroes:astro_aim", "fiskheroes:aiming_timer")
    .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
    .priority = 10;
  //Dual Aiming
  addAnimationWithData(renderer, "astro.DUAL_AIMING", "skyhighheroes:astro_dual_aim", "fiskheroes:energy_projection_timer")
    .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
    .priority = 10;
  //Flight
  addFlightAnimationWithLanding(renderer, "astro.FLIGHT", "skyhighheroes:flight/astro_flight.anim.json");
  //Landing
  addAnimationWithData(renderer, "astro.LAND", "skyhighheroes:astro_landing", "skyhighheroes:dyn/superhero_landing_timer")
    .priority = -8;
  addAnimationWithData(renderer, "astro.LAND_BOOST", "skyhighheroes:astro_boosting_landing", "skyhighheroes:dyn/superhero_boosting_landing_timer")
    .priority = -8;
  addAnimationWithData(renderer, "astro.ROLL", "skyhighheroes:flight/astro_barrel_roll", "fiskheroes:barrel_roll_timer")
  addHoverAnimation(renderer, "astro.HOVER", "skyhighheroes:astro_hover");
};

//Init
//Beams
function initBeams(renderer, color) {
  bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", color, [
    { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [1.0, 1.0] }
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
  bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", color, [
    { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [1.0, 1.0] }
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
  renderer.bindProperty("fiskheroes:energy_bolt").color.set(color);
  bindBeam(renderer, "fiskheroes:energy_manipulation", "fiskheroes:energy_discharge", "rightArm", color, [
    { "firstPerson": [-2.5, 0.0, -7.0], "offset": [-0.5, 19.0, -12.0], "size": [1.5, 1.5] }
  ]);
  bindBeam(renderer, "fiskheroes:charged_beam", "fiskheroes:charged_beam", "head", color, [
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
};
function initDualBeams(renderer, colorLeft, colorRight) {
  bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", colorRight, [
    { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [1.0, 1.0] }
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
  bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", colorLeft, [
    { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [1.0, 1.0] }
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
  renderer.bindProperty("fiskheroes:energy_bolt").color.set(colorRight);
  bindBeam(renderer, "fiskheroes:energy_manipulation", "fiskheroes:energy_discharge", "rightArm", colorRight, [
    { "firstPerson": [-2.5, 0.0, -7.0], "offset": [-0.5, 19.0, -12.0], "size": [1.5, 1.5] }
  ]);
  bindBeam(renderer, "fiskheroes:charged_beam", "fiskheroes:charged_beam", "head", colorRight, [
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
};
//Cannon
function initCannon(renderer) {
  var light_thing = renderer.createEffect("fiskheroes:overlay");
  light_thing.texture.set(null, "cannon_lights");
  var obj = {
    light_thing: light_thing,
    render: (entity, renderLayer) => {
      if (entity.getHeldItem().isEmpty()) {
        light_thing.opacity = entity.getInterpolatedData("fiskheroes:aiming_timer");
        light_thing.render();
      };
    }
  };
  return obj;
};

//Equipment
function initCustomEquipment(renderer, uuid) {
  var livery_shield = renderer.bindProperty("fiskheroes:livery");
  livery_shield.texture.set("shield");
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
  //Katana
  katana = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.45475, "offset": [-3.05, 0.52, 2.5], "rotation": [-148.0, 90.0, 0.0] },
    { "anchor": "body", "scale": 0.45475, "offset": [3.05, 0.52, 2.5], "rotation": [-148.0, -90.0, 0.0] }
  ]).setCondition(entity => entity.getUUID() == uuid).slotIndex = 0;
  //Scythe
  scythe_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.4675, "offset": [0.5, 4.5, 2.5], "rotation": [0.0, -90.0, 35.0] }
  ]).setCondition(entity => entity.getUUID() == uuid && (entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2)).slotIndex = 1;
  scythe_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.4675, "offset": [0.5, 4.5, 3.5], "rotation": [0.0, -90.0, 35.0] }
  ]).setCondition(entity => entity.getUUID() == uuid && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0).slotIndex = 1;
  //Rifle
  rifle_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.595, "offset": [-3.5, 2.0, 2.5], "rotation": [0.0, -90.0, 60.0] }
  ]).setCondition(entity => entity.getUUID() == uuid && (entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 2 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1)).slotIndex = 2;
  rifle_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.595, "offset": [-3.5, 2.0, 3.5], "rotation": [0.0, -90.0, 60.0] }
  ]).setCondition(entity => entity.getUUID() == uuid && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0).slotIndex = 2;
  //Shield
  shield_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 2.5], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => entity.getUUID() == uuid && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 3).slotIndex = 3;
  shield_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 3.5], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => entity.getUUID() == uuid && ((entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2 && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") != 3) || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 2) || (entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0 && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(3).getInteger("Index") != 3 && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") != 3)).slotIndex = 3;
  shield_2 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 4.5], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => entity.getUUID() == uuid && ((entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") == 2 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 1 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2) && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0)).slotIndex = 3;
};

function initEquipment(renderer) {
  var livery_shield = renderer.bindProperty("fiskheroes:livery");
  livery_shield.texture.set("shield");
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
  //Katana
  katana = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.45475, "offset": [-3.05, 0.52, 2.5], "rotation": [-148.0, 90.0, 0.0] },
    { "anchor": "body", "scale": 0.45475, "offset": [3.05, 0.52, 2.5], "rotation": [-148.0, -90.0, 0.0] }
  ]).slotIndex = 0;
  //Scythe
  scythe_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.4675, "offset": [0.5, 4.5, 2.5], "rotation": [0.0, -90.0, 35.0] }
  ]).setCondition(entity => (entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2)).slotIndex = 1;
  scythe_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.4675, "offset": [0.5, 4.5, 3.5], "rotation": [0.0, -90.0, 35.0] }
  ]).setCondition(entity => entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0).slotIndex = 1;
  //Rifle
  rifle_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.595, "offset": [-3.5, 2.0, 2.5], "rotation": [0.0, -90.0, 60.0] }
  ]).setCondition(entity => (entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 2 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1)).slotIndex = 2;
  rifle_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.595, "offset": [-3.5, 2.0, 3.5], "rotation": [0.0, -90.0, 60.0] }
  ]).setCondition(entity => entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0).slotIndex = 2;
  //Shield
  shield_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 2.5], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 3).slotIndex = 3;
  shield_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 3.5], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => ((entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2 && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") != 3) || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 2) || (entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0 && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(3).getInteger("Index") != 3 && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") != 3)).slotIndex = 3;
  shield_2 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.85, "offset": [0.0, 5.0, 4.5], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => ((entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") == 2 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 1 || entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2) && entity.getWornLeggings().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0)).slotIndex = 3;
};

function initCustomBoosters(renderer, color) {
  var armLights = renderer.createEffect("fiskheroes:overlay");
  armLights.texture.set(null, "arms_lights");
  var bootLights = renderer.createEffect("fiskheroes:overlay");
  bootLights.texture.set(null, "boots_lights");
  var bootOpening = renderer.createEffect("fiskheroes:overlay");
  bootOpening.texture.set("boots_opening", null);

  var icon = renderer.createResource("ICON", "skyhighheroes:null");
  
  var boosterLegLeft = renderer.createEffect("fiskheroes:booster");
  boosterLegLeft.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
  boosterLegLeft.anchor.set("leftLeg");
  boosterLegLeft.mirror = false;
  
  var boosterLegRight = renderer.createEffect("fiskheroes:booster");
  boosterLegRight.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
  boosterLegRight.anchor.set("rightLeg");
  boosterLegRight.mirror = false;

  var boosterArmLeft = renderer.createEffect("fiskheroes:booster");
  boosterArmLeft.setIcon(icon).setOffset(-1.0, 10.0, 0.0).setSize(4.0, 2.0);
  boosterArmLeft.anchor.set("leftArm");
  boosterArmLeft.mirror = false;
  
  var boosterArmRight = renderer.createEffect("fiskheroes:booster");
  boosterArmRight.setIcon(icon).setOffset(1.0, 10.0, 0.0).setSize(4.0, 2.0);
  boosterArmRight.anchor.set("rightArm");
  boosterArmRight.mirror = false;

  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:astro_booster");

  //Outer
  var shapeLegOuter = renderer.createResource("SHAPE", null);
  var lineLegOuter = shapeLegOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
  var bloomLegLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegOuter).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegOuter).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftOuter.anchor.set("leftLeg");
  bloomLegLeftOuter.color.set(color);
  bloomLegLeftOuter.mirror = false;
  bloomLegLeftOuter.setScale(16.0);
  bloomLegRightOuter.anchor.set("rightLeg");
  bloomLegRightOuter.color.set(color);
  bloomLegRightOuter.mirror = false;
  bloomLegRightOuter.setScale(16.0);

  //Middle
  var shapeLegMiddle = renderer.createResource("SHAPE", null);
  var lineLegMiddle = shapeLegMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
  var bloomLegLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegMiddle).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegMiddle).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftMiddle.anchor.set("leftLeg");
  bloomLegLeftMiddle.color.set(color);
  bloomLegLeftMiddle.mirror = false;
  bloomLegLeftMiddle.setScale(16.0);
  bloomLegRightMiddle.anchor.set("rightLeg");
  bloomLegRightMiddle.color.set(color);
  bloomLegRightMiddle.mirror = false;
  bloomLegRightMiddle.setScale(16.0);

  //Inner
  var shapeLegInner = renderer.createResource("SHAPE", null);
  var lineLegInner = shapeLegInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
  var bloomLegLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegInner).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegInner).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftInner.anchor.set("leftLeg");
  bloomLegLeftInner.color.set(color);
  bloomLegLeftInner.mirror = false;
  bloomLegLeftInner.setScale(16.0);
  bloomLegRightInner.anchor.set("rightLeg");
  bloomLegRightInner.color.set(color);
  bloomLegRightInner.mirror = false;
  bloomLegRightInner.setScale(16.0);
  
  //Arms
  //Outer
  var shapeArmOuter = renderer.createResource("SHAPE", null);
  var lineArmOuter = shapeArmOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
  var bloomArmLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftOuter.anchor.set("leftArm");
  bloomArmLeftOuter.color.set(color);
  bloomArmLeftOuter.mirror = false;
  bloomArmLeftOuter.setScale(16.0);
  bloomArmRightOuter.anchor.set("rightArm");
  bloomArmRightOuter.color.set(color);
  bloomArmRightOuter.mirror = false;
  bloomArmRightOuter.setScale(16.0);

  //Middle
  var shapeArmMiddle = renderer.createResource("SHAPE", null);
  var lineArmMiddle = shapeArmMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
  var bloomArmLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftMiddle.anchor.set("leftArm");
  bloomArmLeftMiddle.color.set(color);
  bloomArmLeftMiddle.mirror = false;
  bloomArmLeftMiddle.setScale(16.0);
  bloomArmRightMiddle.anchor.set("rightArm");
  bloomArmRightMiddle.color.set(color);
  bloomArmRightMiddle.mirror = false;
  bloomArmRightMiddle.setScale(16.0);

  //Inner
  var shapeArmInner = renderer.createResource("SHAPE", null);
  var lineArmInner = shapeArmInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
  var bloomArmLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftInner.anchor.set("leftArm");
  bloomArmLeftInner.color.set(color);
  bloomArmLeftInner.mirror = false;
  bloomArmLeftInner.setScale(16.0);
  bloomArmRightMiddle.anchor.set("rightArm");
  bloomArmRightMiddle.color.set(color);
  bloomArmRightMiddle.mirror = false;
  bloomArmRightMiddle.setScale(16.0);

  var obj = {
    armLights: armLights,
    bootLights: bootLights,
    bootOpening: bootOpening,
    boosterLegLeft: boosterLegLeft,
    boosterLegRight: boosterLegRight,
    boosterArmLeft: boosterArmLeft,
    boosterArmRight: boosterArmRight,
    bloomLegLeftOuter: bloomLegLeftOuter,
    bloomLegLeftMiddle: bloomLegLeftMiddle,
    bloomLegLeftInner: bloomLegLeftInner,
    bloomLegRightOuter: bloomLegRightOuter,
    bloomLegRightMiddle: bloomLegRightMiddle,
    bloomLegRightInner: bloomLegRightInner,
    bloomArmLeftOuter: bloomArmLeftOuter,
    bloomArmLeftMiddle: bloomArmLeftMiddle,
    bloomArmLeftInner: bloomArmLeftInner,
    bloomArmRightOuter: bloomArmRightOuter,
    bloomArmRightMiddle: bloomArmRightMiddle,
    bloomArmRightInner: bloomArmRightInner,
    renderBoosters: (entity, renderLayer, isFirstPersonArm) => {
      if (!isFirstPersonArm) {
        //Boots
        //Equations
        var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
        var flight = entity.getInterpolatedData("fiskheroes:flight_timer") + (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM");
        var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
        b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
        var f = Math.PI * 2;
        f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
        
        if (flight > 0) {
          bootOpening.opacity = (-1 * flight) + 1;
          bootOpening.render();
          bootLights.opacity = flight;
          bootLights.render();
        };

        //Left
        //Booster
        boosterLegLeft.progress = boost;
        boosterLegLeft.speedScale = 0.5 * boost;
        boosterLegLeft.flutter = 1 + boost;
        boosterLegLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        boosterLegLeft.render();
        //Beams
        lineLegOuter.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3.5 * 3.5 / 8;
        lineLegMiddle.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3.25 * 3.25 / 8;
        lineLegInner.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomLegLeftOuter.progress = bloomLegLeftOuter.opacity = flight;
        bloomLegLeftOuter.render();
        //Middle
        bloomLegLeftMiddle.progress = bloomLegLeftMiddle.opacity = flight;
        bloomLegLeftMiddle.render();
        //Inner
        bloomLegLeftInner.progress = bloomLegLeftInner.opacity = flight;
        bloomLegLeftInner.render();
  
        //Right
        //Booster
        boosterLegRight.progress = boost;
        boosterLegRight.speedScale = 0.5 * boost;
        boosterLegRight.flutter = 1 + boost;
        boosterLegRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        boosterLegRight.render();
        //Beam
        lineLegOuter.end.y = (1 + f * boosterLegRight.flutter / 4) * 3.5 * 3.5 / 8;
        lineLegMiddle.end.y = (1 + f * boosterLegRight.flutter / 4) * 3.25 * 3.25 / 8;
        lineLegInner.end.y = (1 + f * boosterLegRight.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomLegRightOuter.progress = bloomLegRightOuter.opacity = flight;
        bloomLegRightOuter.render();
        //Middle
        bloomLegRightMiddle.progress = bloomLegRightMiddle.opacity = flight;
        bloomLegRightMiddle.render();
        //Inner
        bloomLegRightInner.progress = bloomLegRightInner.opacity = flight;
        bloomLegRightInner.render();

        //Arms
        //Equations
        var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
        var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
        b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
        var f = Math.PI * 2;
        f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
        
        armLights.opacity = boost;
        armLights.render();

        //Left
        //Booster
        boosterArmLeft.progress = boost;
        boosterArmLeft.speedScale = 0.5 * boost;
        boosterArmLeft.flutter = 1 + boost;
        boosterArmLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        //Beams
        lineArmOuter.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3.5 * 3.5 / 8;
        lineArmMiddle.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3.25 * 3.25 / 8;
        lineArmInner.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomArmLeftOuter.opacity = boost;
        //Middle
        bloomArmLeftMiddle.opacity = boost;
        //Inner
        bloomLegLeftInner.opacity = boost;
        if (entity.getData("fiskheroes:energy_projection_timer") == 0) {
          boosterArmLeft.render();
          bloomArmLeftOuter.render();
          bloomArmLeftMiddle.render();
          bloomLegLeftInner.render();
        };

        //Right
        //Booster
        boosterArmRight.progress = boost;
        boosterArmRight.speedScale = 0.5 * boost;
        boosterArmRight.flutter = 1 + boost;
        boosterArmRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        //Beams
        lineArmOuter.end.y = (1 + f * boosterArmRight.flutter / 4) * 3.5 * 3.5 / 8;
        lineArmMiddle.end.y = (1 + f * boosterArmRight.flutter / 4) * 3.25 * 3.25 / 8;
        lineArmInner.end.y = (1 + f * boosterArmRight.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomArmRightOuter.opacity = boost;
        //Middle
        bloomArmRightMiddle.opacity = boost;
        //Inner
        bloomLegRightInner.opacity = boost;
        if (entity.getInterpolatedData("fiskheroes:aiming_timer") == 0 && entity.getHeldItem().isEmpty() && entity.getInterpolatedData("fiskheroes:energy_projection_timer") == 0) {
          boosterArmRight.render();
          bloomArmRightOuter.render();
          bloomArmRightMiddle.render();
          bloomLegRightInner.render();
        };
      };
    }
  };
  return obj;
};

function initNormalBoosters(renderer) {
  var armLights = renderer.createEffect("fiskheroes:overlay");
  armLights.texture.set(null, "arms_lights");
  var bootLights = renderer.createEffect("fiskheroes:overlay");
  bootLights.texture.set(null, "boots_lights");
  var bootOpening = renderer.createEffect("fiskheroes:overlay");
  bootOpening.texture.set("boots", null);

  var icon = renderer.createResource("ICON", "skyhighheroes:null");
  
  var boosterLegLeft = renderer.createEffect("fiskheroes:booster");
  boosterLegLeft.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
  boosterLegLeft.anchor.set("leftLeg");
  boosterLegLeft.mirror = false;
  
  var boosterLegRight = renderer.createEffect("fiskheroes:booster");
  boosterLegRight.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
  boosterLegRight.anchor.set("rightLeg");
  boosterLegRight.mirror = false;

  var boosterArmLeft = renderer.createEffect("fiskheroes:booster");
  boosterArmLeft.setIcon(icon).setOffset(-1.0, 10.0, 0.0).setSize(4.0, 2.0);
  boosterArmLeft.anchor.set("leftArm");
  boosterArmLeft.mirror = false;

  var boosterArmRight = renderer.createEffect("fiskheroes:booster");
  boosterArmRight.setIcon(icon).setOffset(1.0, 10.0, 0.0).setSize(4.0, 2.0);
  boosterArmRight.anchor.set("rightArm");
  boosterArmRight.mirror = false;

  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:astro_normal_booster");

  //Outer
  var shapeLegOuter = renderer.createResource("SHAPE", null);
  var lineLegOuter = shapeLegOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
  var bloomLegLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegOuter).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegOuter).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftOuter.anchor.set("leftLeg");
  bloomLegLeftOuter.color.set(0xFFAE00);
  bloomLegLeftOuter.mirror = false;
  bloomLegLeftOuter.setScale(16.0);
  bloomLegRightOuter.anchor.set("rightLeg");
  bloomLegRightOuter.color.set(0xFFAE00);
  bloomLegRightOuter.mirror = false;
  bloomLegRightOuter.setScale(16.0);

  //Middle
  var shapeLegMiddle = renderer.createResource("SHAPE", null);
  var lineLegMiddle = shapeLegMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
  var bloomLegLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegMiddle).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegMiddle).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftMiddle.anchor.set("leftLeg");
  bloomLegLeftMiddle.color.set(0xFF8900);
  bloomLegLeftMiddle.mirror = false;
  bloomLegLeftMiddle.setScale(16.0);
  bloomLegRightMiddle.anchor.set("rightLeg");
  bloomLegRightMiddle.color.set(0xFF8900);
  bloomLegRightMiddle.mirror = false;
  bloomLegRightMiddle.setScale(16.0);

  //Inner
  var shapeLegInner = renderer.createResource("SHAPE", null);
  var lineLegInner = shapeLegInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
  var bloomLegLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegInner).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegInner).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftInner.anchor.set("leftLeg");
  bloomLegLeftInner.color.set(0xFF0000);
  bloomLegLeftInner.mirror = false;
  bloomLegLeftInner.setScale(16.0);
  bloomLegRightInner.anchor.set("rightLeg");
  bloomLegRightInner.color.set(0xFF0000);
  bloomLegRightInner.mirror = false;
  bloomLegRightInner.setScale(16.0);

  //Arms
  //Outer
  var shapeArmOuter = renderer.createResource("SHAPE", null);
  var lineArmOuter = shapeArmOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
  var bloomArmLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftOuter.anchor.set("leftArm");
  bloomArmLeftOuter.color.set(0xFFAE00);
  bloomArmLeftOuter.mirror = false;
  bloomArmLeftOuter.setScale(16.0);
  bloomArmRightOuter.anchor.set("rightArm");
  bloomArmRightOuter.color.set(0xFFAE00);
  bloomArmRightOuter.mirror = false;
  bloomArmRightOuter.setScale(16.0);

  //Middle
  var shapeArmMiddle = renderer.createResource("SHAPE", null);
  var lineArmMiddle = shapeArmMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
  var bloomArmLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftMiddle.anchor.set("leftArm");
  bloomArmLeftMiddle.color.set(0xFF8900);
  bloomArmLeftMiddle.mirror = false;
  bloomArmLeftMiddle.setScale(16.0);
  bloomArmRightMiddle.anchor.set("rightArm");
  bloomArmRightMiddle.color.set(0xFF8900);
  bloomArmRightMiddle.mirror = false;
  bloomArmRightMiddle.setScale(16.0);

  //Inner
  var shapeArmInner = renderer.createResource("SHAPE", null);
  var lineArmInner = shapeArmInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
  var bloomArmLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftInner.anchor.set("leftArm");
  bloomArmLeftInner.color.set(0xFF0000);
  bloomArmLeftInner.mirror = false;
  bloomArmLeftInner.setScale(16.0);
  bloomArmRightMiddle.anchor.set("rightArm");
  bloomArmRightMiddle.color.set(0xFF0000);
  bloomArmRightMiddle.mirror = false;
  bloomArmRightMiddle.setScale(16.0);

  var obj = {
    armLights: armLights,
    bootLights: bootLights,
    bootOpening: bootOpening,
    boosterLegLeft: boosterLegLeft,
    boosterLegRight: boosterLegRight,
    boosterArmLeft: boosterArmLeft,
    boosterArmRight: boosterArmRight,
    bloomLegLeftOuter: bloomLegLeftOuter,
    bloomLegLeftMiddle: bloomLegLeftMiddle,
    bloomLegLeftInner: bloomLegLeftInner,
    bloomLegRightOuter: bloomLegRightOuter,
    bloomLegRightMiddle: bloomLegRightMiddle,
    bloomLegRightInner: bloomLegRightInner,
    bloomArmLeftOuter: bloomArmLeftOuter,
    bloomArmLeftMiddle: bloomArmLeftMiddle,
    bloomArmLeftInner: bloomArmLeftInner,
    bloomArmRightOuter: bloomArmRightOuter,
    bloomArmRightMiddle: bloomArmRightMiddle,
    bloomArmRightInner: bloomArmRightInner,
    renderBoosters: (entity, renderLayer, isFirstPersonArm) => {
      if (!isFirstPersonArm) {
        //Boots
        //Equations
        var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
        var flight = entity.getInterpolatedData("fiskheroes:flight_timer") + (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM");
        var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
        b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
        var f = Math.PI * 2;
        f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
        
        if (flight > 0) {
          bootOpening.opacity = (-1 * flight) + 1;
          bootOpening.render();
          bootLights.opacity = flight;
          bootLights.render();
        };
        
        //Left
        //Booster
        boosterLegLeft.progress = boost;
        boosterLegLeft.speedScale = 0.5 * boost;
        boosterLegLeft.flutter = 1 + boost;
        boosterLegLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        boosterLegLeft.render();
        //Beams
        lineLegOuter.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3.5 * 3.5 / 8;
        lineLegMiddle.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3.25 * 3.25 / 8;
        lineLegInner.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomLegLeftOuter.progress = bloomLegLeftOuter.opacity = flight;
        bloomLegLeftOuter.render();
        //Middle
        bloomLegLeftMiddle.progress = bloomLegLeftMiddle.opacity = flight;
        bloomLegLeftMiddle.render();
        //Inner
        bloomLegLeftInner.progress = bloomLegLeftInner.opacity = flight;
        bloomLegLeftInner.render();
  
        //Right
        //Booster
        boosterLegRight.progress = boost;
        boosterLegRight.speedScale = 0.5 * boost;
        boosterLegRight.flutter = 1 + boost;
        boosterLegRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        boosterLegRight.render();
        //Beam
        lineLegOuter.end.y = (1 + f * boosterLegRight.flutter / 4) * 3.5 * 3.5 / 8;
        lineLegMiddle.end.y = (1 + f * boosterLegRight.flutter / 4) * 3.25 * 3.25 / 8;
        lineLegInner.end.y = (1 + f * boosterLegRight.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomLegRightOuter.progress = bloomLegRightOuter.opacity = flight;
        bloomLegRightOuter.render();
        //Middle
        bloomLegRightMiddle.progress = bloomLegRightMiddle.opacity = flight;
        bloomLegRightMiddle.render();
        //Inner
        bloomLegRightInner.progress = bloomLegRightInner.opacity = flight;
        bloomLegRightInner.render();

        //Arms
        //Equations
        var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
        var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
        b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
        var f = Math.PI * 2;
        f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
        
        armLights.opacity = boost;
        armLights.render();

        //Left
        //Booster
        boosterArmLeft.progress = boost;
        boosterArmLeft.speedScale = 0.5 * boost;
        boosterArmLeft.flutter = 1 + boost;
        boosterArmLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        //Beams
        lineArmOuter.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3.5 * 3.5 / 8;
        lineArmMiddle.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3.25 * 3.25 / 8;
        lineArmInner.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomArmLeftOuter.opacity = boost;
        //Middle
        bloomArmLeftMiddle.opacity = boost;
        //Inner
        bloomLegLeftInner.opacity = boost;
        if (entity.getData("fiskheroes:energy_projection_timer") == 0) {
          boosterArmLeft.render();
          bloomArmLeftOuter.render();
          bloomArmLeftMiddle.render();
          bloomLegLeftInner.render();
        };

        //Right
        //Booster
        boosterArmRight.progress = boost;
        boosterArmRight.speedScale = 0.5 * boost;
        boosterArmRight.flutter = 1 + boost;
        boosterArmRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        //Beams
        lineArmOuter.end.y = (1 + f * boosterArmRight.flutter / 4) * 3.5 * 3.5 / 8;
        lineArmMiddle.end.y = (1 + f * boosterArmRight.flutter / 4) * 3.25 * 3.25 / 8;
        lineArmInner.end.y = (1 + f * boosterArmRight.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomArmRightOuter.opacity = boost;
        //Middle
        bloomArmRightMiddle.opacity = boost;
        //Inner
        bloomLegRightInner.opacity = boost;
        if (entity.getInterpolatedData("fiskheroes:aiming_timer") == 0 && entity.getHeldItem().isEmpty() && entity.getInterpolatedData("fiskheroes:energy_projection_timer") == 0) {
          boosterArmRight.render();
          bloomArmRightOuter.render();
          bloomArmRightMiddle.render();
          bloomLegRightInner.render();
        };

        if (renderLayer == "BOOTS") {
        };

        if (renderLayer == "CHESTPLATE") {
        };
      };
    }
  };
  return obj;
};

function initCustomDualBoosters(renderer, colorLeft, colorRight) {
  var armLights = renderer.createEffect("fiskheroes:overlay");
  armLights.texture.set(null, "arms_lights");
  var bootLights = renderer.createEffect("fiskheroes:overlay");
  bootLights.texture.set(null, "boots_lights");
  var bootOpening = renderer.createEffect("fiskheroes:overlay");
  bootOpening.texture.set("boots", null);

  var icon = renderer.createResource("ICON", "skyhighheroes:null");
  
  var boosterLegLeft = renderer.createEffect("fiskheroes:booster");
  boosterLegLeft.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
  boosterLegLeft.anchor.set("leftLeg");
  boosterLegLeft.mirror = false;
  
  var boosterLegRight = renderer.createEffect("fiskheroes:booster");
  boosterLegRight.setIcon(icon).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
  boosterLegRight.anchor.set("rightLeg");
  boosterLegRight.mirror = false;

  var boosterArmLeft = renderer.createEffect("fiskheroes:booster");
  boosterArmLeft.setIcon(icon).setOffset(-1.0, 10.0, 0.0).setSize(4.0, 2.0);
  boosterArmLeft.anchor.set("leftArm");
  boosterArmLeft.mirror = false;
  
  var boosterArmRight = renderer.createEffect("fiskheroes:booster");
  boosterArmRight.setIcon(icon).setOffset(1.0, 10.0, 0.0).setSize(4.0, 2.0);
  boosterArmRight.anchor.set("rightArm");
  boosterArmRight.mirror = false;

  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:astro_booster");

  //Outer
  var shapeLegOuter = renderer.createResource("SHAPE", null);
  var lineLegOuter = shapeLegOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
  var bloomLegLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegOuter).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegOuter).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftOuter.anchor.set("leftLeg");
  bloomLegLeftOuter.color.set(colorLeft);
  bloomLegLeftOuter.mirror = false;
  bloomLegLeftOuter.setScale(16.0);
  bloomLegRightOuter.anchor.set("rightLeg");
  bloomLegRightOuter.color.set(colorRight);
  bloomLegRightOuter.mirror = false;
  bloomLegRightOuter.setScale(16.0);

  //Middle
  var shapeLegMiddle = renderer.createResource("SHAPE", null);
  var lineLegMiddle = shapeMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
  var bloomLegLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegMiddle).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegMiddle).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftMiddle.anchor.set("leftLeg");
  bloomLegLeftMiddle.color.set(colorLeft);
  bloomLegLeftMiddle.mirror = false;
  bloomLegLeftMiddle.setScale(16.0);
  bloomLegRightMiddle.anchor.set("rightLeg");
  bloomLegRightMiddle.color.set(colorRight);
  bloomLegRightMiddle.mirror = false;
  bloomLegRightMiddle.setScale(16.0);

  //Inner
  var shapeLegInner = renderer.createResource("SHAPE", null);
  var lineLegInner = shapeLegInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
  var bloomLegLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegInner).setOffset(0.0, 12.0, 0.0);
  var bloomLegRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLegInner).setOffset(0.0, 12.0, 0.0);
  bloomLegLeftInner.anchor.set("leftLeg");
  bloomLegLeftInner.color.set(colorLeft);
  bloomLegLeftInner.mirror = false;
  bloomLegLeftInner.setScale(16.0);
  bloomLegRightInner.anchor.set("rightLeg");
  bloomLegRightInner.color.set(colorRight);
  bloomLegRightInner.mirror = false;
  bloomLegRightInner.setScale(16.0);
  
  //Arms
  //Outer
  var shapeArmOuter = renderer.createResource("SHAPE", null);
  var lineArmOuter = shapeArmOuter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [3.5, 3.5] });
  var bloomArmLeftOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightOuter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmOuter).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftOuter.anchor.set("leftArm");
  bloomArmLeftOuter.color.set(colorLeft);
  bloomArmLeftOuter.mirror = false;
  bloomArmLeftOuter.setScale(16.0);
  bloomArmRightOuter.anchor.set("rightArm");
  bloomArmRightOuter.color.set(colorRight);
  bloomArmRightOuter.mirror = false;
  bloomArmRightOuter.setScale(16.0);

  //Middle
  var shapeArmMiddle = renderer.createResource("SHAPE", null);
  var lineArmMiddle = shapeArmMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.75, 1.75] });
  var bloomArmLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmMiddle).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftMiddle.anchor.set("leftArm");
  bloomArmLeftMiddle.color.set(colorLeft);
  bloomArmLeftMiddle.mirror = false;
  bloomArmLeftMiddle.setScale(16.0);
  bloomArmRightMiddle.anchor.set("rightArm");
  bloomArmRightMiddle.color.set(colorRight);
  bloomArmRightMiddle.mirror = false;
  bloomArmRightMiddle.setScale(16.0);

  //Inner
  var shapeArmInner = renderer.createResource("SHAPE", null);
  var lineArmInner = shapeArmInner.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.875, 0.875] });
  var bloomArmLeftInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(-1.0, 10.0, 0.0);
  var bloomArmRightInner = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeArmInner).setOffset(1.0, 10.0, 0.0);
  bloomArmLeftInner.anchor.set("leftArm");
  bloomArmLeftInner.color.set(colorLeft);
  bloomArmLeftInner.mirror = false;
  bloomArmLeftInner.setScale(16.0);
  bloomArmRightMiddle.anchor.set("rightArm");
  bloomArmRightMiddle.color.set(colorRight);
  bloomArmRightMiddle.mirror = false;
  bloomArmRightMiddle.setScale(16.0);

  var obj = {
    armLights: armLights,
    bootLights: bootLights,
    bootOpening: bootOpening,
    boosterLegLeft: boosterLegLeft,
    boosterLegRight: boosterLegRight,
    boosterArmLeft: boosterArmLeft,
    boosterArmRight: boosterArmRight,
    bloomLegLeftOuter: bloomLegLeftOuter,
    bloomLegLeftMiddle: bloomLegLeftMiddle,
    bloomLegLeftInner: bloomLegLeftInner,
    bloomLegRightOuter: bloomLegRightOuter,
    bloomLegRightMiddle: bloomLegRightMiddle,
    bloomLegRightInner: bloomLegRightInner,
    bloomArmLeftOuter: bloomArmLeftOuter,
    bloomArmLeftMiddle: bloomArmLeftMiddle,
    bloomArmLeftInner: bloomArmLeftInner,
    bloomArmRightOuter: bloomArmRightOuter,
    bloomArmRightMiddle: bloomArmRightMiddle,
    bloomArmRightInner: bloomArmRightInner,
    renderBoosters: (entity, renderLayer, isFirstPersonArm) => {
      if (!isFirstPersonArm) {
        //Boots
        //Equations
        var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
        var flight = entity.getInterpolatedData("fiskheroes:flight_timer") + (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM");
        var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
        b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
        var f = Math.PI * 2;
        f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
        
        if (flight > 0) {
          bootOpening.opacity = (-1 * flight) + 1;
          bootOpening.render();
          bootLights.opacity = flight;
          bootLights.render();
        };
        
        //Left
        //Booster
        boosterLegLeft.progress = boost;
        boosterLegLeft.speedScale = 0.5 * boost;
        boosterLegLeft.flutter = 1 + boost;
        boosterLegLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        boosterLegLeft.render();
        //Beams
        lineLegOuter.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3.5 * 3.5 / 8;
        lineLegMiddle.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3.25 * 3.25 / 8;
        lineLegInner.end.y = (1 + f * boosterLegLeft.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomLegLeftOuter.progress = bloomLegLeftOuter.opacity = flight;
        bloomLegLeftOuter.render();
        //Middle
        bloomLegLeftMiddle.progress = bloomLegLeftMiddle.opacity = flight;
        bloomLegLeftMiddle.render();
        //Inner
        bloomLegLeftInner.progress = bloomLegLeftInner.opacity = flight;
        bloomLegLeftInner.render();
  
        //Right
        //Booster
        boosterLegRight.progress = boost;
        boosterLegRight.speedScale = 0.5 * boost;
        boosterLegRight.flutter = 1 + boost;
        boosterLegRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        boosterLegRight.render();
        //Beam
        lineLegOuter.end.y = (1 + f * boosterLegRight.flutter / 4) * 3.5 * 3.5 / 8;
        lineLegMiddle.end.y = (1 + f * boosterLegRight.flutter / 4) * 3.25 * 3.25 / 8;
        lineLegInner.end.y = (1 + f * boosterLegRight.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomLegRightOuter.progress = bloomLegRightOuter.opacity = flight;
        bloomLegRightOuter.render();
        //Middle
        bloomLegRightMiddle.progress = bloomLegRightMiddle.opacity = flight;
        bloomLegRightMiddle.render();
        //Inner
        bloomLegRightInner.progress = bloomLegRightInner.opacity = flight;
        bloomLegRightInner.render();

        //Arms
        //Equations
        var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
        var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
        b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
        var f = Math.PI * 2;
        f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
        
        armLights.opacity = boost;
        armLights.render();

        //Left
        //Booster
        boosterArmLeft.progress = boost;
        boosterArmLeft.speedScale = 0.5 * boost;
        boosterArmLeft.flutter = 1 + boost;
        boosterArmLeft.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        //Beams
        lineArmOuter.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3.5 * 3.5 / 8;
        lineArmMiddle.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3.25 * 3.25 / 8;
        lineArmInner.end.y = (1 + f * boosterArmLeft.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomArmLeftOuter.opacity = boost;
        //Middle
        bloomArmLeftMiddle.opacity = boost;
        //Inner
        bloomLegLeftInner.opacity = boost;
        if (entity.getData("fiskheroes:energy_projection_timer") == 0) {
          boosterArmLeft.render();
          bloomArmLeftOuter.render();
          bloomArmLeftMiddle.render();
          bloomLegLeftInner.render();
        };

        //Right
        //Booster
        boosterArmRight.progress = boost;
        boosterArmRight.speedScale = 0.5 * boost;
        boosterArmRight.flutter = 1 + boost;
        boosterArmRight.setSize(4.0 + b * 4, 2.0 - b * 3.9);
        //Beams
        lineArmOuter.end.y = (1 + f * boosterArmRight.flutter / 4) * 3.5 * 3.5 / 8;
        lineArmMiddle.end.y = (1 + f * boosterArmRight.flutter / 4) * 3.25 * 3.25 / 8;
        lineArmInner.end.y = (1 + f * boosterArmRight.flutter / 4) * 3 * 3 / 8;
        //Outer
        bloomArmRightOuter.opacity = boost;
        //Middle
        bloomArmRightMiddle.opacity = boost;
        //Inner
        bloomLegRightInner.opacity = boost;
        if (entity.getInterpolatedData("fiskheroes:aiming_timer") == 0 && entity.getHeldItem().isEmpty() && entity.getInterpolatedData("fiskheroes:energy_projection_timer") == 0) {
          boosterArmRight.render();
          bloomArmRightOuter.render();
          bloomArmRightMiddle.render();
          bloomLegRightInner.render();
        };
      };
    }
  };
  return obj;
};