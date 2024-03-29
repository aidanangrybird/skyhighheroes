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
  anim.setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/predation_timer"));
    data.load(1, entity.getData("skyhighheroes:dyn/predation"));
  });
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

//Stelar Animations
function initStelarAnimations(renderer) {
  //Aiming
  addAnimationWithData(renderer, "stelar.AIMING", "skyhighheroes:stelar_aim", "fiskheroes:aiming_timer")
    .setCondition(entity => !entity.getHeldItem().doesNeedTwoHands() && !entity.getHeldItem().isRifle())
    .priority = 10;
  addAnimationEvent(renderer, "CEILING_CRAWL", "skyhighheroes:em_wall_ceiling_stand");
  addPredationAnimation(renderer, "stelar.PREDATION", "skyhighheroes:stelar_predation");
  addBasePredationAnimation(renderer, "stelar.PREDATION_BASE", "skyhighheroes:stelar_predation_base");
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
  bindBeam(renderer, "fiskheroes:lightning_cast", "skyhighheroes:wave_discharge", "rightArm", color_other, [
    { "firstPerson": [-8.0, 4.5, -10.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
  ]);
};

function initNV(renderer) {
  nv_wave_change = renderer.bindProperty("fiskheroes:night_vision");
  nv_wave_change.fogStrength = 0.0;
  nv_wave_change.factor = 1.0;
  nv_wave_change.setCondition(entity => entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0.75);
  nv_visualizer = renderer.bindProperty("fiskheroes:night_vision");
  nv_visualizer.fogStrength = 0.0;
  nv_visualizer.factor = 1.0;
  nv_visualizer.firstPersonOnly = true;
  nv_visualizer.setCondition(entity => entity.getData("skyhighheroes:dyn/visualizer_toggle") == 1);
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
}
function initEquipment(renderer) {
  //Katana
  katana = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.535, "offset": [-3.05, 0.52, 2.75], "rotation": [-148.0, 90.0, 0.0] },
    { "anchor": "body", "scale": 0.535, "offset": [3.05, 0.52, 2.75], "rotation": [-148.0, -90.0, 0.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1)).slotIndex = 0;
  //Scythe
  scythe_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.55, "offset": [0.5, 4.5, 2.75], "rotation": [0.0, -90.0, 35.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) && (entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2)).slotIndex = 1;
  scythe_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.55, "offset": [0.5, 4.5, 3.75], "rotation": [0.0, -90.0, 35.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0).slotIndex = 1;
  //Rifle
  rifle_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.7, "offset": [-3.5, 2.0, 2.75], "rotation": [0.0, -90.0, 60.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) && (entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 2 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1)).slotIndex = 2;
  rifle_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 0.7, "offset": [-3.5, 2.0, 3.75], "rotation": [0.0, -90.0, 60.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0).slotIndex = 2;
  //Shield
  shield_base = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 1.0, "offset": [0.0, 5.0, 2.75], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 3).slotIndex = 3;
  shield_1 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 1.0, "offset": [0.0, 5.0, 3.75], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) && (((entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") != 3) || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 2) || (entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(3).getInteger("Index") != 3 && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") != 3))).slotIndex = 3;
  shield_2 = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 1.0, "offset": [0.0, 5.0, 4.75], "rotation": [90.0, -180.0, 0.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) && ((entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(2).getInteger("Index") == 2 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 1 || entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(1).getInteger("Index") == 2) && entity.getWornChestplate().nbt().getTagList("Equipment").getCompoundTag(0).getInteger("Index") == 0)).slotIndex = 3;
  pickaxe = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 1.0, "offset": [-3.6, 5.0, 12.75], "rotation": [0.0, 90.0, 0.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1)).slotIndex = 4;
  shovel = renderer.bindProperty("fiskheroes:equipped_item").setItems([
    { "anchor": "body", "scale": 1.0, "offset": [4.6, 5.0, 12.75], "rotation": [0.0, 90.0, 0.0] }
  ]).setCondition(entity => ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW") || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1)).slotIndex = 5;
};

//Omega-Xis
function initOmegaXis(renderer) {
  //Blade
  var blade = renderer.createEffect("fiskheroes:shield");
  blade.texture.set(null, "blade");
  blade.anchor.set("rightArm");
  blade.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.5, 8.0, 0.0);
  blade.large = true;
  //Right
  var omegaXisRight = renderer.createEffect("fiskheroes:shield");
  omegaXisRight.texture.set("omega_xis_right", "omega_xis_right_lights");
  omegaXisRight.anchor.set("rightArm");
  omegaXisRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, 3.0);
  omegaXisRight.large = true;
  var omegaXisRightWaveChange = renderer.createEffect("fiskheroes:shield");
  omegaXisRightWaveChange.texture.set(null, "omega_xis_right_wave_change_lights");
  omegaXisRightWaveChange.anchor.set("rightArm");
  omegaXisRightWaveChange.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, 3.0);
  omegaXisRightWaveChange.large = true;
  //Left
  var omegaXisLeft = renderer.createEffect("fiskheroes:shield");
  omegaXisLeft.texture.set("omega_xis_left", "omega_xis_left_lights");
  omegaXisLeft.anchor.set("rightArm");
  omegaXisLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, -3.0);
  omegaXisLeft.large = true;
  var omegaXisLeftWaveChange = renderer.createEffect("fiskheroes:shield");
  omegaXisLeftWaveChange.texture.set(null, "omega_xis_left_wave_change_lights");
  omegaXisLeftWaveChange.anchor.set("rightArm");
  omegaXisLeftWaveChange.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, -3.0);
  omegaXisLeftWaveChange.large = true;
  //Top
  var omegaXisTop = renderer.createEffect("fiskheroes:shield");
  omegaXisTop.texture.set("omega_xis_top", "omega_xis_top_lights");
  omegaXisTop.anchor.set("rightArm");
  omegaXisTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 8.5, 0.0);
  omegaXisTop.large = true;
  var omegaXisTopWaveChange = renderer.createEffect("fiskheroes:shield");
  omegaXisTopWaveChange.texture.set(null, "omega_xis_top_wave_change_lights");
  omegaXisTopWaveChange.anchor.set("rightArm");
  omegaXisTopWaveChange.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 8.5, 0.0);
  omegaXisTopWaveChange.large = true;
  //Bottom
  var omegaXisBottom = renderer.createEffect("fiskheroes:shield");
  omegaXisBottom.texture.set("omega_xis_bottom", "omega_xis_bottom_lights");
  omegaXisBottom.anchor.set("rightArm");
  omegaXisBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 8.5, 0.0);
  omegaXisBottom.large = true;
  var omegaXisBottomWaveChange = renderer.createEffect("fiskheroes:shield");
  omegaXisBottomWaveChange.texture.set(null, "omega_xis_bottom_wave_change_lights");
  omegaXisBottomWaveChange.anchor.set("rightArm");
  omegaXisBottomWaveChange.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 8.5, 0.0);
  omegaXisBottomWaveChange.large = true;
  //Front
  var omegaXisFront = renderer.createEffect("fiskheroes:shield");
  omegaXisFront.texture.set("omega_xis_front", null);
  omegaXisFront.anchor.set("rightArm");
  omegaXisFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 13.5, 0.0);
  omegaXisFront.large = true;
  var omegaXisFrontWaveChange = renderer.createEffect("fiskheroes:shield");
  omegaXisFrontWaveChange.texture.set(null, "omega_xis_front_wave_change_lights");
  omegaXisFrontWaveChange.anchor.set("rightArm");
  omegaXisFrontWaveChange.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 13.5, 0.0);
  omegaXisFrontWaveChange.large = true;
  return {
    blade: blade,
    omegaXisRight: omegaXisRight,
    omegaXisLeft: omegaXisLeft,
    omegaXisTop: omegaXisTop,
    omegaXisBottom: omegaXisBottom,
    omegaXisFront: omegaXisFront,
    omegaXisRightWaveChange: omegaXisRightWaveChange,
    omegaXisLeftWaveChange: omegaXisLeftWaveChange,
    omegaXisTopWaveChange: omegaXisTopWaveChange,
    omegaXisBottomWaveChange: omegaXisBottomWaveChange,
    omegaXisFrontWaveChange: omegaXisFrontWaveChange,
    render: (entity, renderLayer) => {
      blade.unfold = entity.getInterpolatedData("skyhighheroes:dyn/sword_timer")
      blade.opacity = Math.min(Math.max((2 * entity.getInterpolatedData("skyhighheroes:dyn/sword_timer")), 0), 1);
      blade.setOffset(1.5, Math.min(Math.max((16.0 * (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer")) - 4), 0), 8), 0.0);
      blade.setScale(Math.min(Math.max((2 * (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer")) + 0.5), 0), 1), Math.min(Math.max((1.75 * (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer"))), 0), 1), Math.min(Math.max((1 * (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer"))), 0), 1));
      //Base Omega-Xis
      omegaXisRight.unfold = omegaXisLeft.unfold = omegaXisTop.unfold = omegaXisBottom.unfold = omegaXisFront.unfold = 1.0;
      //Wave Change Omega-Xis
      omegaXisRightWaveChange.unfold = omegaXisLeftWaveChange.unfold = omegaXisTopWaveChange.unfold = omegaXisBottomWaveChange.unfold = omegaXisFrontWaveChange.unfold = 1.0;
      if (renderLayer == "CHESTPLATE") {
        if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 || ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW"))) {
          omegaXisRight.render();
          omegaXisLeft.render();
          omegaXisTop.render();
          omegaXisBottom.render();
          omegaXisFront.render();
          omegaXisRightWaveChange.render();
          omegaXisLeftWaveChange.render();
          omegaXisTopWaveChange.render();
          omegaXisBottomWaveChange.render();
          omegaXisFrontWaveChange.render();
        };
        if (entity.getHeldItem().isEmpty() && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("fiskheroes:blade_timer") > 0) {
          blade.render();
        };
      };
    }
  };
};