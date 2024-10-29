var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

var metal_heat;
var head_model;
var eyes_model;
var body_model;
var left_arm_model;
var cannon_left_arm_model;
var cannon_left_arm_lights_model;
var rocket_left_arm_lights_model;
var right_arm_model;
var cannon_right_arm_model;
var cannon_right_arm_lights_model;
var rocket_right_arm_lights_model;
var left_leg_model;
var rocket_left_leg_model;
var rocket_left_leg_lights_model;
var right_leg_model;
var rocket_right_leg_model;
var rocket_right_leg_lights_model;

var cannon_normal_left_arm_model;
var cannon_normal_right_arm_model;
var rocket_normal_lights_left_arm_model;
var rocket_normal_lights_right_arm_model;
var rocket_normal_lights_left_leg_model;
var rocket_normal_lights_right_leg_model;
var rocket_normal_opening_left_leg_model;
var rocket_normal_opening_right_leg_model;

loadTextures({
  "null": "skyhighheroes:null",
  "base": "skyhighheroes:tobio/astro.tx.json",
  "rocket_legs": "skyhighheroes:tobio/astro_rocket_legs.tx.json",
  "rocket_arms_lights": "skyhighheroes:tobio/astro_rocket_arms_lights.tx.json",
  "rocket_legs_lights": "skyhighheroes:tobio/astro_rocket_legs_lights.tx.json",
  "cannon_arm": "skyhighheroes:tobio/astro_cannon_arm.tx.json",
  "cannon_arm_lights": "skyhighheroes:tobio/astro_cannon_arm_lights.tx.json",
  "eyes": "skyhighheroes:tobio/astro_eyes",
  "boots_lights": "skyhighheroes:tobio/astro_boots_lights",
  "boots_opening": "skyhighheroes:tobio/boots_normal",
  "arms_lights": "skyhighheroes:tobio/astro_arms_lights",
  "boots": "skyhighheroes:tobio/astro_boots",
  "shorts": "skyhighheroes:tobio/astro_shorts",
  "cannon": "skyhighheroes:cannon",
  "cannon_lights": "skyhighheroes:tobio/astro_cannon_lights",
});

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (!entity.isWearingFullSuit()) {
      if (renderLayer == "BOOTS") {
        return "boots";
      };
      if (renderLayer == "LEGGINGS") {
        return "shorts";
      };
    };
    if (entity.isWearingFullSuit() && (entity.as("DISPLAY").getDisplayType() != "null")) {
      return "null";
    } else {
      return "null";
    };
  });
  renderer.setItemIcon("LEGGINGS", "%s_shorts");
  renderer.setItemIcon("BOOTS", "%s_boots");
  renderer.showModel("LEGGINGS", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
  renderer.showModel("BOOTS", "rightLeg", "leftLeg");
  renderer.fixHatLayer("LEGGINGS");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  //Head
  var head = renderer.createResource("MODEL", "skyhighheroes:AstroBoyHead");
  head.texture.set("base");
  head_model = renderer.createEffect("fiskheroes:model").setModel(head);
  head_model.anchor.set("head");
  head_model.setScale(1.0);
  var eyes = renderer.createResource("MODEL", "skyhighheroes:AstroBoyHead");
  eyes.texture.set(null, "eyes");
  eyes_model = renderer.createEffect("fiskheroes:model").setModel(eyes);
  eyes_model.anchor.set("head");
  eyes_model.setScale(1.0);
  //Body
  var body = renderer.createResource("MODEL", "skyhighheroes:AstroBoyBody");
  body.texture.set("base");
  body_model = renderer.createEffect("fiskheroes:model").setModel(body);
  body_model.anchor.set("body");
  body_model.setScale(1.0);
  //Left Arm
  var left_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftArm");
  left_arm.texture.set("base");
  left_arm_model = renderer.createEffect("fiskheroes:model").setModel(left_arm);
  left_arm_model.anchor.set("leftArm");
  left_arm_model.setScale(1.0);
  var cannon_left_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyCannonArmLeft");
  cannon_left_arm.texture.set("cannon_arm");
  cannon_left_arm.bindAnimation("skyhighheroes:astro_cannon_left").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
  });
  cannon_left_arm_model = renderer.createEffect("fiskheroes:model").setModel(cannon_left_arm);
  cannon_left_arm_model.anchor.set("leftArm");
  cannon_left_arm_model.setScale(1.0);
  var cannon_left_arm_lights = renderer.createResource("MODEL", "skyhighheroes:AstroBoyCannonArmLeft");
  cannon_left_arm_lights.texture.set(null, "cannon_arm_lights");
  cannon_left_arm_lights.bindAnimation("skyhighheroes:astro_cannon_left").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
  });
  cannon_left_arm_lights_model = renderer.createEffect("fiskheroes:model").setModel(cannon_left_arm_lights);
  cannon_left_arm_lights_model.anchor.set("leftArm");
  cannon_left_arm_lights_model.setScale(1.0);
  var rocket_left_arm_lights = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRocketArmLeft");
  rocket_left_arm_lights.texture.set(null, "rocket_arms_lights");
  rocket_left_arm_lights.bindAnimation("skyhighheroes:astro_cannon_left").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
  });
  rocket_left_arm_lights_model = renderer.createEffect("fiskheroes:model").setModel(rocket_left_arm_lights);
  rocket_left_arm_lights_model.anchor.set("leftArm");
  rocket_left_arm_lights_model.setScale(1.0);
  //Right Arm
  var right_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightArm");
  right_arm.texture.set("base");
  right_arm_model = renderer.createEffect("fiskheroes:model").setModel(right_arm);
  right_arm_model.anchor.set("rightArm");
  right_arm_model.setScale(1.0);
  var cannon_right_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyCannonArmRight");
  cannon_right_arm.texture.set("cannon_arm");
  cannon_right_arm.bindAnimation("skyhighheroes:astro_cannon_right").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") + entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
  });
  cannon_right_arm_model = renderer.createEffect("fiskheroes:model").setModel(cannon_right_arm);
  cannon_right_arm_model.anchor.set("rightArm");
  cannon_right_arm_model.setScale(1.0);
  var cannon_right_arm_lights = renderer.createResource("MODEL", "skyhighheroes:AstroBoyCannonArmRight");
  cannon_right_arm_lights.texture.set(null, "cannon_arm_lights");
  cannon_right_arm_lights.bindAnimation("skyhighheroes:astro_cannon_right").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") + entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
  });
  cannon_right_arm_lights_model = renderer.createEffect("fiskheroes:model").setModel(cannon_right_arm_lights);
  cannon_right_arm_lights_model.anchor.set("rightArm");
  cannon_right_arm_lights_model.setScale(1.0);
  var rocket_right_arm_lights = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRocketArmRight");
  rocket_right_arm_lights.texture.set(null, "rocket_arms_lights");
  rocket_right_arm_lights.bindAnimation("skyhighheroes:astro_rockets_right").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") + entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
  });
  rocket_right_arm_lights_model = renderer.createEffect("fiskheroes:model").setModel(rocket_right_arm_lights);
  rocket_right_arm_lights_model.anchor.set("rightArm");
  rocket_right_arm_lights_model.setScale(1.0);
  //Left Leg
  var left_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftLeg");
  left_leg.texture.set("base");
  left_leg_model = renderer.createEffect("fiskheroes:model").setModel(left_leg);
  left_leg_model.anchor.set("leftLeg");
  left_leg_model.setScale(1.0);
  var rocket_left_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRocketLegs");
  rocket_left_leg.texture.set("rocket_legs");
  rocket_left_leg.bindAnimation("skyhighheroes:astro_rockets_left").setData((entity, data) => {
    data.load(entity.getInterpolatedData("fiskheroes:flight_timer") + (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));
  });
  rocket_left_leg_model = renderer.createEffect("fiskheroes:model").setModel(rocket_left_leg);
  rocket_left_leg_model.anchor.set("leftLeg");
  rocket_left_leg_model.setScale(1.0);
  var rocket_left_leg_lights = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRocketLegs");
  rocket_left_leg_lights.texture.set(null, "rocket_legs_lights");
  rocket_left_leg_lights.bindAnimation("skyhighheroes:astro_rockets_left").setData((entity, data) => {
    data.load(entity.getInterpolatedData("fiskheroes:flight_timer") + (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));
  });
  rocket_left_leg_lights_model = renderer.createEffect("fiskheroes:model").setModel(rocket_left_leg_lights);
  rocket_left_leg_lights_model.anchor.set("leftLeg");
  rocket_left_leg_lights_model.setScale(1.0);
  //Right Leg
  var right_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightLeg");
  right_leg.texture.set("base");
  right_leg_model = renderer.createEffect("fiskheroes:model").setModel(right_leg);
  right_leg_model.anchor.set("rightLeg");
  right_leg_model.setScale(1.0);
  var rocket_right_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRocketLegs");
  rocket_right_leg.texture.set("rocket_legs");
  rocket_right_leg.bindAnimation("skyhighheroes:astro_rockets_right").setData((entity, data) => {
    data.load(entity.getInterpolatedData("fiskheroes:flight_timer") + (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));
  });
  rocket_right_leg_model = renderer.createEffect("fiskheroes:model").setModel(rocket_right_leg);
  rocket_right_leg_model.anchor.set("rightLeg");
  rocket_right_leg_model.setScale(1.0);
  var rocket_right_leg_lights = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRocketLegs");
  rocket_right_leg_lights.texture.set(null, "rocket_legs_lights");
  rocket_right_leg_lights.bindAnimation("skyhighheroes:astro_rockets_left").setData((entity, data) => {
    data.load(entity.getInterpolatedData("fiskheroes:flight_timer") + (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));
  });
  rocket_right_leg_lights_model = renderer.createEffect("fiskheroes:model").setModel(rocket_right_leg_lights);
  rocket_right_leg_lights_model.anchor.set("rightLeg");
  rocket_right_leg_lights_model.setScale(1.0);

  var cannon_normal_left_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftArm");
  cannon_normal_left_arm.texture.set("cannon", "cannon_lights");
  cannon_normal_left_arm_model = renderer.createEffect("fiskheroes:model").setModel(cannon_normal_left_arm);
  cannon_normal_left_arm_model.anchor.set("leftArm");
  cannon_normal_left_arm_model.setScale(1.0);
  var cannon_normal_right_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightArm");
  cannon_normal_right_arm.texture.set("cannon", "cannon_lights");
  cannon_normal_right_arm_model = renderer.createEffect("fiskheroes:model").setModel(cannon_normal_right_arm);
  cannon_normal_right_arm_model.anchor.set("rightArm");
  cannon_normal_right_arm_model.setScale(1.0);

  var rocket_normal_lights_left_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftArm");
  rocket_normal_lights_left_arm.texture.set(null, "arms_lights");
  rocket_normal_lights_left_arm_model = renderer.createEffect("fiskheroes:model").setModel(rocket_normal_lights_left_arm);
  rocket_normal_lights_left_arm_model.anchor.set("leftArm");
  rocket_normal_lights_left_arm_model.setScale(1.0);
  var rocket_normal_lights_right_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightArm");
  rocket_normal_lights_right_arm.texture.set(null, "arms_lights");
  rocket_normal_lights_right_arm_model = renderer.createEffect("fiskheroes:model").setModel(rocket_normal_lights_right_arm);
  rocket_normal_lights_right_arm_model.anchor.set("rightArm");
  rocket_normal_lights_right_arm_model.setScale(1.0);

  var rocket_normal_lights_left_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftLeg");
  rocket_normal_lights_left_leg.texture.set(null, "boots_lights");
  rocket_normal_lights_left_leg_model = renderer.createEffect("fiskheroes:model").setModel(rocket_normal_lights_left_leg);
  rocket_normal_lights_left_leg_model.anchor.set("leftLeg");
  rocket_normal_lights_left_leg_model.setScale(1.0);
  var rocket_normal_lights_right_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightLeg");
  rocket_normal_lights_right_leg.texture.set(null, "boots_lights");
  rocket_normal_lights_right_leg_model = renderer.createEffect("fiskheroes:model").setModel(rocket_normal_lights_right_leg);
  rocket_normal_lights_right_leg_model.anchor.set("rightLeg");
  rocket_normal_lights_right_leg_model.setScale(1.0);

  var rocket_normal_opening_left_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftLeg");
  rocket_normal_opening_left_leg.texture.set("boots_opening");
  rocket_normal_opening_left_leg_model = renderer.createEffect("fiskheroes:model").setModel(rocket_normal_opening_left_leg);
  rocket_normal_opening_left_leg_model.anchor.set("leftLeg");
  rocket_normal_opening_left_leg_model.setScale(1.0);
  var rocket_normal_opening_right_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightLeg");
  rocket_normal_opening_right_leg.texture.set("boots_opening");
  rocket_normal_opening_right_leg_model = renderer.createEffect("fiskheroes:model").setModel(rocket_normal_opening_right_leg);
  rocket_normal_opening_right_leg_model.anchor.set("rightLeg");
  rocket_normal_opening_right_leg_model.setScale(1.0);

  nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0.0;
  nv.factor = 1.0;
  rockets = astro.initNormalBoosters(renderer);
  astro.initBeams(renderer, 0xFFFFFF);
  stuff.bindSpeedTrail(renderer, "skyhighheroes:astro_speed");
  metal_heat = renderer.createEffect("fiskheroes:metal_heat");
  metal_heat.includeEffects(cannon_normal_left_arm_model, cannon_normal_right_arm_model, rocket_normal_lights_left_arm_model, rocket_normal_lights_right_arm_model, rocket_normal_lights_left_leg_model, rocket_normal_lights_right_leg_model, rocket_normal_opening_left_leg_model, rocket_normal_opening_right_leg_model, eyes_model, head_model, body_model, left_arm_model, right_arm_model, left_leg_model, right_leg_model, cannon_right_arm_model, cannon_right_arm_lights_model, cannon_left_arm_model, cannon_left_arm_lights_model, rocket_left_arm_lights_model, rocket_right_arm_lights_model, rocket_left_leg_model, rocket_left_leg_lights_model, rocket_right_leg_model, rocket_right_leg_lights_model);
  renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
    return 0.999999;
  }).setCondition(entity => (entity.isWearingFullSuit() || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "astro.HOLOGRAM_FLIGHT", "skyhighheroes:astro_holo_flight");
  astro.initAstroAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
  if (entity.isWearingFullSuit()) {
    head_model.render();
    body_model.render();
    eyes_model.opacity = entity.getInterpolatedData("fiskheroes:energy_projection_timer") + entity.getInterpolatedData("fiskheroes:aimed_timer") + entity.getInterpolatedData("fiskheroes:energy_charge") + entity.getInterpolatedData("fiskheroes:flight_timer") + entity.getInterpolatedData("fiskheroes:beam_charge") + entity.getData("fiskheroes:speeding") + (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM");
    eyes_model.render();
    if (!isFirstPersonArm && ((entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") == 0 && entity.getInterpolatedData("fiskheroes:flight_boost_timer") == 0 && entity.getData("skyhighheroes:dyn/astro_clothes") != 3) || entity.getData("skyhighheroes:dyn/astro_clothes") == 3) || (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM")) {
      left_arm_model.render();
    };
    if (((entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") == 0 && entity.getInterpolatedData("fiskheroes:flight_boost_timer") == 0 && entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer") == 0 && entity.getData("skyhighheroes:dyn/astro_clothes") != 3) || entity.getData("skyhighheroes:dyn/astro_clothes") == 3) || !entity.getHeldItem().isEmpty() || (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM")) {
      right_arm_model.render();
    };
    if (!isFirstPersonArm && ((entity.getInterpolatedData("fiskheroes:flight_timer") == 0 && entity.getData("skyhighheroes:dyn/astro_clothes") != 3) || entity.getData("skyhighheroes:dyn/astro_clothes") == 3) && !(entity.as("DISPLAY").getDisplayType() == "HOLOGRAM")) {
      left_leg_model.render();
      right_leg_model.render();
    };
    if (entity.getData("skyhighheroes:dyn/astro_clothes") != 3) {
      if (entity.getHeldItem().isEmpty()) {
        if ((entity.getInterpolatedData("fiskheroes:flight_boost_timer") > 0 || entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") > 0 || entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer") > 0)) {
          cannon_right_arm_model.render();
          if (entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") > 0) {
            cannon_right_arm_lights_model.opacity = Math.min(Math.max((4*(entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer"))-3), 0), 1);
            cannon_right_arm_lights_model.render();
          };
          if ((entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer") > 0)) {
            cannon_right_arm_lights_model.opacity = Math.min(Math.max((4*(entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer"))-3), 0), 1);
            cannon_right_arm_lights_model.render();
          };
        };
        if (entity.getInterpolatedData("fiskheroes:flight_boost_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") == 0 && entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer") == 0) {
          rocket_right_arm_lights_model.opacity = ((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("fiskheroes:flight_boost_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
          rocket_right_arm_lights_model.render();
        };
      };
      if (!isFirstPersonArm && ((entity.getInterpolatedData("fiskheroes:flight_boost_timer") > 0 || entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") > 0)) && !(entity.as("DISPLAY").getDisplayType() == "HOLOGRAM")) {
        cannon_left_arm_model.render();
        cannon_left_arm_lights_model.opacity = Math.min(Math.max((4*(entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer"))-3), 0), 1);
        cannon_left_arm_lights_model.render();
      };
      if (!isFirstPersonArm && entity.getInterpolatedData("fiskheroes:flight_boost_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer") == 0 || (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM")) {
        rocket_left_arm_lights_model.opacity = ((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("fiskheroes:flight_boost_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
        rocket_left_arm_lights_model.render();
      };
      if (!isFirstPersonArm && (entity.getInterpolatedData("fiskheroes:flight_timer") > 0) || (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM")) {
        rocket_left_leg_model.render();
        rocket_left_leg_lights_model.opacity = ((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("fiskheroes:flight_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
        rocket_left_leg_lights_model.render();
        rocket_right_leg_model.render();
        rocket_right_leg_lights_model.opacity = ((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("fiskheroes:flight_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
        rocket_right_leg_lights_model.render();
      };
    }
    if (entity.getData("skyhighheroes:dyn/astro_clothes") == 3) {
      cannon_normal_left_arm_model.opacity = entity.getInterpolatedData("fiskheroes:energy_projection_timer");
      cannon_normal_left_arm_model.render();
      rocket_normal_lights_left_arm_model.opacity = entity.getInterpolatedData("fiskheroes:flight_boost_timer")*(1-entity.getInterpolatedData("fiskheroes:energy_projection_timer"));
      rocket_normal_lights_left_arm_model.render();
      if (entity.getHeldItem().isEmpty()) {
        cannon_normal_right_arm_model.opacity = entity.getInterpolatedData("fiskheroes:aiming_timer") + entity.getInterpolatedData("fiskheroes:energy_projection_timer");
        cannon_normal_right_arm_model.render();
        rocket_normal_lights_right_arm_model.opacity = entity.getInterpolatedData("fiskheroes:flight_boost_timer")*(1-entity.getInterpolatedData("fiskheroes:energy_projection_timer"))*(1-entity.getInterpolatedData("fiskheroes:aiming_timer"));
        rocket_normal_lights_right_arm_model.render();
      };
      if (entity.getInterpolatedData("fiskheroes:flight_timer") > 0) {
        rocket_normal_opening_left_leg_model.opacity = (-1 * entity.getInterpolatedData("fiskheroes:flight_timer")) + 1;
        rocket_normal_opening_left_leg_model.render();
        rocket_normal_opening_right_leg_model.opacity = (-1 * entity.getInterpolatedData("fiskheroes:flight_timer")) + 1;
        rocket_normal_opening_right_leg_model.render();
        rocket_normal_lights_left_leg_model.opacity = entity.getInterpolatedData("fiskheroes:flight_timer");
        rocket_normal_lights_left_leg_model.render();
        rocket_normal_lights_right_leg_model.opacity = entity.getInterpolatedData("fiskheroes:flight_timer");
        rocket_normal_lights_right_leg_model.render();
      };
    };
  };
  metal_heat.opacity = entity.getInterpolatedData("fiskheroes:metal_heat");
  metal_heat.render();
};