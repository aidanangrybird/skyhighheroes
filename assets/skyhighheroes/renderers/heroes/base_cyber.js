var cybernetics = implement("skyhighheroes:external/cybernetics");
var cybernetic_boosters = implement("skyhighheroes:external/cybernetic_boosters");
var cybernetic_beams = implement("skyhighheroes:external/cybernetic_beams");
var stuff = implement("skyhighheroes:external/stuff");

var blank_model;
var metal_heat;
var text_renderer;

//Stuff models
var head_model;
var body_model;
var left_arm_model;
var right_arm_model;
var left_leg_model;
var right_leg_model;

//Base skin models
var head_base_model;
var head_hair_base_model;
var body_base_model;
var left_arm_base_model;
var right_arm_base_model;
var left_leg_base_model;
var right_leg_base_model;

//Camouflage models
var head_camouflage_model;
var head_hair_camouflage_model;
var body_camouflage_model;
var left_arm_camouflage_model;
var right_arm_camouflage_model;
var left_leg_camouflage_model;
var right_leg_camouflage_model;

//Beams and boosters
var satellite_beams;
var body_boosters;
var left_arm_boosters;
var right_arm_boosters;
var left_leg_boosters;
var right_leg_boosters;

loadTextures({
  "null": "skyhighheroes:null",
  "arm": "skyhighheroes:cybernetic_arm_base",
  "claw": "skyhighheroes:cybernetic_claw_base",
  "head": "skyhighheroes:cybernetic_head_base",
  "body": "skyhighheroes:cybernetic_body_base",
  "left_arm": "skyhighheroes:cybernetic_left_arm_base",
  "right_arm": "skyhighheroes:cybernetic_right_arm_base",
  "left_leg": "skyhighheroes:cybernetic_left_leg_base",
  "right_leg": "skyhighheroes:cybernetic_right_leg_base",
  "head_base": "skyhighheroes:cyber/cyber_head_base.tx.json",
  "head_hair_base": "skyhighheroes:cyber/cyber_head_hair_base.tx.json",
  "body_base": "skyhighheroes:cyber/cyber_body_base.tx.json",
  "left_arm_base": "skyhighheroes:cyber/cyber_left_arm_base.tx.json",
  "right_arm_base": "skyhighheroes:cyber/cyber_right_arm_base.tx.json",
  "left_leg_base": "skyhighheroes:cyber/cyber_left_leg_base.tx.json",
  "right_leg_base": "skyhighheroes:cyber/cyber_right_leg_base.tx.json",
});

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    return "null";
  });
  renderer.showModel("HELMET", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
  renderer.fixHatLayer("HELMET");
  renderer.setItemIcon("HELMET", "%s_cybernetic_brain");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  text_renderer = stuff.text(renderer);
  //Deploy + base
  //Add a clamp thing to the inner rockets so I can supress them with a timer instead of just a nbt boolean
  //Use motion and look in these animations
  //Mechanical parts
  var head = renderer.createResource("MODEL", "skyhighheroes:CyberneticHeadL1");
  head.texture.set("head", "head_lights");
  head.bindAnimation("skyhighheroes:cybernetic_head").setData((entity, data) => cybernetics.headAnimations(entity, data));
  head_model = renderer.createEffect("fiskheroes:model").setModel(head);
  head_model.anchor.set("head");
  head_model.setScale(1.0);
  satellite_beams = cybernetics.initSatelliteBeams(renderer, head, getColor());
  cybernetic_beams.initHeadBeams(renderer, getColor());
  var body = renderer.createResource("MODEL", "skyhighheroes:CyberneticBodyL1");
  body.texture.set("body", "body_lights");
  body.bindAnimation("skyhighheroes:cybernetic_body").setData((entity, data) => cybernetics.bodyAnimations(entity, data));
  body_model = renderer.createEffect("fiskheroes:model").setModel(body);
  body_model.anchor.set("body");
  body_model.setScale(1.0);
  cybernetics.initTentacles(renderer, body);
  body_boosters = cybernetic_boosters.initBodyBoosters(renderer, body, getColor());
  cybernetic_beams.initBodyBeams(renderer, getColor());
  var left_arm = renderer.createResource("MODEL", "skyhighheroes:CyberneticLeftArmL1");
  left_arm.texture.set("left_arm", "left_arm_lights");
  left_arm.bindAnimation("skyhighheroes:cybernetic_left_arm").setData((entity, data) => cybernetics.leftArmAnimations(entity, data));
  left_arm_model = renderer.createEffect("fiskheroes:model").setModel(left_arm);
  left_arm_model.anchor.set("leftArm");
  left_arm_model.setScale(1.0);
  left_arm_boosters = cybernetic_boosters.initLeftArmBoosters(renderer, left_arm, getColor());
  cybernetic_beams.initLeftArmBeams(renderer, getColor());
  var right_arm = renderer.createResource("MODEL", "skyhighheroes:CyberneticRightArmL1");
  right_arm.texture.set("right_arm", "right_arm_lights");
  right_arm.bindAnimation("skyhighheroes:cybernetic_right_arm").setData((entity, data) => cybernetics.rightArmAnimations(entity, data));
  right_arm_model = renderer.createEffect("fiskheroes:model").setModel(right_arm);
  right_arm_model.anchor.set("rightArm");
  right_arm_model.setScale(1.0);
  right_arm_boosters = cybernetic_boosters.initRightArmBoosters(renderer, right_arm, getColor());
  cybernetic_beams.initRightArmBeams(renderer, getColor());
  var left_leg = renderer.createResource("MODEL", "skyhighheroes:CyberneticLeftLegL1");
  left_leg.texture.set("left_leg", "left_leg_lights");
  left_leg.bindAnimation("skyhighheroes:cybernetic_left_leg").setData((entity, data) => cybernetics.leftLegAnimations(entity, data));
  left_leg_model = renderer.createEffect("fiskheroes:model").setModel(left_leg);
  left_leg_model.anchor.set("leftLeg");
  left_leg_model.setScale(1.0);
  left_leg_boosters = cybernetic_boosters.initLeftLegBoosters(renderer, left_leg, getColor());
  var right_leg = renderer.createResource("MODEL", "skyhighheroes:CyberneticRightLegL1");
  right_leg.texture.set("right_leg", "right_leg_lights");
  right_leg.bindAnimation("skyhighheroes:cybernetic_right_leg").setData((entity, data) => cybernetics.rightLegAnimations(entity, data));
  right_leg_model = renderer.createEffect("fiskheroes:model").setModel(right_leg);
  right_leg_model.anchor.set("rightLeg");
  right_leg_model.setScale(1.0);
  right_leg_boosters = cybernetic_boosters.initRightLegBoosters(renderer, right_leg, getColor());

  //Base skin
  var head_base = renderer.createResource("MODEL", "skyhighheroes:CyberneticHeadL2");
  head_base.texture.set("head_base", "head_base_lights");
  head_base.bindAnimation("skyhighheroes:cybernetic_head").setData((entity, data) => cybernetics.headAnimations(entity, data));
  head_base_model = renderer.createEffect("fiskheroes:model").setModel(head_base);
  head_base_model.anchor.set("head");
  head_base_model.setScale(1.0);
  var head_hair_base = renderer.createResource("MODEL", "skyhighheroes:CyberneticHeadL2");
  head_hair_base.texture.set("head_hair_base", "head_hair_base_lights");
  head_hair_base.bindAnimation("skyhighheroes:cybernetic_head").setData((entity, data) => cybernetics.headAnimations(entity, data));
  head_hair_base_model = renderer.createEffect("fiskheroes:model").setModel(head_hair_base);
  head_hair_base_model.anchor.set("head");
  head_hair_base_model.setOffset(0.0, 0.5, 0.0);
  head_hair_base_model.setScale(1.125);
  var body_base = renderer.createResource("MODEL", "skyhighheroes:CyberneticBodyL2");
  body_base.texture.set("body_base", "body_base_lights");
  body_base.bindAnimation("skyhighheroes:cybernetic_body").setData((entity, data) => cybernetics.bodyAnimations(entity, data));
  body_base_model = renderer.createEffect("fiskheroes:model").setModel(body_base);
  body_base_model.anchor.set("body");
  body_base_model.setScale(1.0);
  var left_arm_base = renderer.createResource("MODEL", "skyhighheroes:CyberneticLeftArmL2");
  left_arm_base.texture.set("left_arm_base", "left_arm_base_lights");
  left_arm_base.bindAnimation("skyhighheroes:cybernetic_left_arm").setData((entity, data) => cybernetics.leftArmAnimations(entity, data));
  left_arm_base_model = renderer.createEffect("fiskheroes:model").setModel(left_arm_base);
  left_arm_base_model.anchor.set("leftArm");
  left_arm_base_model.setScale(1.0);
  var right_arm_base = renderer.createResource("MODEL", "skyhighheroes:CyberneticRightArmL2");
  right_arm_base.texture.set("right_arm_base", "right_arm_base_lights");
  right_arm_base.bindAnimation("skyhighheroes:cybernetic_right_arm").setData((entity, data) => cybernetics.rightArmAnimations(entity, data));
  right_arm_base_model = renderer.createEffect("fiskheroes:model").setModel(right_arm_base);
  right_arm_base_model.anchor.set("rightArm");
  right_arm_base_model.setScale(1.0);
  var left_leg_base = renderer.createResource("MODEL", "skyhighheroes:CyberneticLeftLegL2");
  left_leg_base.texture.set("left_leg_base", "left_leg_base_lights");
  left_leg_base.bindAnimation("skyhighheroes:cybernetic_left_leg").setData((entity, data) => cybernetics.leftLegAnimations(entity, data));
  left_leg_base_model = renderer.createEffect("fiskheroes:model").setModel(left_leg_base);
  left_leg_base_model.anchor.set("leftLeg");
  left_leg_base_model.setScale(1.0);
  var right_leg_base = renderer.createResource("MODEL", "skyhighheroes:CyberneticRightLegL2");
  right_leg_base.texture.set("right_leg_base", "right_leg_base_lights");
  right_leg_base.bindAnimation("skyhighheroes:cybernetic_right_leg").setData((entity, data) => cybernetics.rightLegAnimations(entity, data));
  right_leg_base_model = renderer.createEffect("fiskheroes:model").setModel(right_leg_base);
  right_leg_base_model.anchor.set("rightLeg");
  right_leg_base_model.setScale(1.0);

  metal_heat = renderer.createEffect("fiskheroes:metal_heat");
  metal_heat.includeEffects(head_model, body_model, left_arm_model, right_arm_model, left_leg_model, right_leg_model, head_base_model, head_hair_base_model, body_base_model, left_arm_base_model, right_arm_base_model, left_leg_base_model, right_leg_base_model);
  renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
    return 0.999999;
  }).setCondition(entity => (entity.isWearingFullSuit() || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));

  var nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0.0;
  nv.firstPersonOnly = false;
  nv.factor = 1.0;
  nv.setCondition(entity => (entity.isWearingFullSuit() && entity.getWornHelmet().nbt().getBoolean("nightVision")));
};

function initAnimations(renderer) {
  cybernetics.initCyberneticAnimations(renderer);
  stuff.addAnimationEvent(renderer, "FLIGHT_DIVE", "skyhighheroes:cybernetic_dive");
  stuff.addAnimationEvent(renderer, "FLIGHT_DIVE_ROLL", "skyhighheroes:cybernetic_dive_roll");
};

function render(entity, renderLayer, isFirstPersonArm) {
  var suit = entity.getWornHelmet();
  var nbt = suit.nbt();
  if (entity.is("DISPLAY")) {
    head_base_model.render();
    head_hair_base_model.render();
    body_base_model.render();
    left_arm_base_model.render();
    right_arm_base_model.render();
    left_leg_base_model.render();
    right_leg_base_model.render();
    head_model.render();
    body_model.render();
    left_arm_model.render();
    right_arm_model.render();
    left_leg_model.render();
    right_leg_model.render();
  };
  if (entity.isWearingFullSuit()) {
    if (entity.getInterpolatedData("skyhighheroes:dyn/thermoptic_camouflage_timer") < 1) {
      head_base_model.render();
      head_hair_base_model.render();
      body_base_model.render();
      left_arm_base_model.render();
      right_arm_base_model.render();
      left_leg_base_model.render();
      right_leg_base_model.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/thermoptic_camouflage_timer") == 0) {
      head_model.render();
      body_model.render();
      left_arm_model.render();
      right_arm_model.render();
      left_leg_model.render();
      right_leg_model.render();
    };

    satellite_beams.render(entity, isFirstPersonArm);
    body_boosters.render(entity, renderLayer, isFirstPersonArm);
    left_arm_boosters.render(entity, renderLayer, isFirstPersonArm);
    right_arm_boosters.render(entity, renderLayer, isFirstPersonArm);
    left_leg_boosters.render(entity, renderLayer, isFirstPersonArm);
    right_leg_boosters.render(entity, renderLayer, isFirstPersonArm);
    
    metal_heat.opacity = entity.getInterpolatedData("fiskheroes:metal_heat");
    metal_heat.render();
  };
  if (entity.isWearingFullSuit() && isFirstPersonArm) {
    var leftSide = "OFF";
    var topSide = "OFF";
    var rightSide = "OFF";
    //Left
    if (nbt.getInteger("hudLeftSide") == 1) {
      leftSide = "Shields";
      var shieldsToRender = ["Shields:"];
      var leftShield = "Left: " + (nbt.getBoolean("shieldsLeft") ? "ARMED" : "DISARMED") + " (" + ((entity.getInterpolatedData("skyhighheroes:dyn/shield_left_arm_deploy_timer") > 0 || entity.getInterpolatedData("skyhighheroes:dyn/shield_left_arm_timer") > 0) ? "DEPLOYED" : "STOWED") + ")";
      var rightShield = "Right: " + (nbt.getBoolean("shieldsRight") ? "ARMED" : "DISARMED") + " (" + ((entity.getInterpolatedData("skyhighheroes:dyn/shield_right_arm_deploy_timer") > 0 || entity.getInterpolatedData("skyhighheroes:dyn/shield_right_arm_timer") > 0) ? "DEPLOYED" : "STOWED") + ")";
      shieldsToRender.push(leftShield);
      shieldsToRender.push(rightShield);
      text_renderer.renderLines(isFirstPersonArm, "left", "center", shieldsToRender, -210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    if (nbt.getInteger("hudLeftSide") == 2) {
      leftSide = "Blades";
      var bladesToRender = ["Blades:"];
      var leftBlade = "Left: " + (nbt.getBoolean("bladesLeft") ? "ARMED" : "DISARMED") + " (" + ((entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_deploy_timer") > 0 || entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_timer") > 0) ? "DEPLOYED" : "STOWED") + ")";
      var rightBlade = "Right: " + (nbt.getBoolean("bladesRight") ? "ARMED" : "DISARMED") + " (" + ((entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_deploy_timer") > 0 || entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_timer") > 0) ? "DEPLOYED" : "STOWED") + ")";
      var leftBladeMode = "Left mode: " + (nbt.getBoolean("bladesLeftStealth") ? "STEALTH" : "NORMAL");
      var rightBladeMode = "Right mode: " + (nbt.getBoolean("bladesRightStealth") ? "STEALTH" : "NORMAL");
      bladesToRender.push(leftBlade);
      bladesToRender.push(rightBlade);
      bladesToRender.push(leftBladeMode);
      bladesToRender.push(rightBladeMode);
      text_renderer.renderLines(isFirstPersonArm, "left", "center", bladesToRender, -210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    if (nbt.getInteger("hudLeftSide") == 3) {
      leftSide = "Rockets";
      var auxSet = (entity.getData("skyhighheroes:dyn/rockets_aux_timer") > 0);
      var bodySet = (entity.getData("skyhighheroes:dyn/rockets_body_timer") > 0);
      var legsSet = (entity.getData("skyhighheroes:dyn/rockets_legs_timer") > 0);
      var rocketsToRender = ["Rockets:"];
      var auxRocket = "Aux: " + (nbt.getBoolean("rocketsAux") ? "ARMED" : "DISARMED") + " (" + (nbt.getBoolean("auxRocketsOnFall") ? "ON FALL" : "OFF") + ")";
      var bodyRocket = "Body: " + (nbt.getBoolean("rocketsBody") ? "ARMED" : "DISARMED") + " (" + (nbt.getBoolean("bodyRocketsOnFall") ? "ON FALL" : "OFF") + ")";
      var legRocket = "Legs: " + (nbt.getBoolean("rocketsLegs") ? "ARMED" : "DISARMED") + " (" + (nbt.getBoolean("legRocketsOnFall") ? "ON FALL" : "OFF") + ")";
      var wingRocket = "Wings: " + (nbt.getBoolean("rocketsWings") ? "ARMED" : "DISARMED");

      var bodyRockets = "Body: " + ((bodySet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_body_left_deploy_timer") > 0) ? "L" : "-") + ((bodySet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_body_right_deploy_timer") > 0) ? "R" : "-");
      var leftArmRockets = "Left Arm: " + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_outer_booster_deploy_timer") > 0) ? "O" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_front_booster_deploy_timer") > 0) ? "F" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_back_booster_deploy_timer") > 0) ? "B" : "-");
      var rightArmRockets = "Right Arm: " + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_outer_booster_deploy_timer") > 0) ? "O" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_front_booster_deploy_timer") > 0) ? "F" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_back_booster_deploy_timer") > 0) ? "B" : "-");
      var upperLeftLegRockets = "Upper Left Leg: " + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_outer_booster_deploy_timer") > 0) ? "O" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_front_booster_deploy_timer") > 0) ? "F" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_back_booster_deploy_timer") > 0) ? "B" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_inner_booster_deploy_timer") > 0) ? "I" : "-");
      var upperRightLegRockets = "Upper Right Leg: " + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_outer_booster_deploy_timer") > 0) ? "O" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_front_booster_deploy_timer") > 0) ? "F" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_back_booster_deploy_timer") > 0) ? "B" : "-") + ((auxSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_inner_booster_deploy_timer") > 0) ? "I" : "-");
      var leftLegRockets = "Left Leg: " + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_main_deploy_timer") > 0) ? "M" : "-") + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_outer_deploy_timer") > 0) ? "O" : "-") + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_front_deploy_timer") > 0) ? "F" : "-") + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_back_deploy_timer") > 0) ? "B" : "-") + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_inner_deploy_timer") > 0) ? "I" : "-");
      var rightLegRockets = "Right Leg: " + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_main_deploy_timer") > 0) ? "M" : "-") + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_outer_deploy_timer") > 0) ? "O" : "-") + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_front_deploy_timer") > 0) ? "F" : "-") + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_back_deploy_timer") > 0) ? "B" : "-") + ((legsSet || entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_inner_deploy_timer") > 0) ? "I" : "-");
      
      rocketsToRender.push(auxRocket);
      rocketsToRender.push(bodyRocket);
      rocketsToRender.push(legRocket);
      rocketsToRender.push(wingRocket);
      rocketsToRender.push(bodyRockets);
      rocketsToRender.push(leftArmRockets);
      rocketsToRender.push(rightArmRockets);
      rocketsToRender.push(upperLeftLegRockets);
      rocketsToRender.push(upperRightLegRockets);
      rocketsToRender.push(leftLegRockets);
      rocketsToRender.push(rightLegRockets);

      text_renderer.renderLines(isFirstPersonArm, "left", "center", rocketsToRender, -210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    if (nbt.getInteger("hudLeftSide") == 4) {
      leftSide = "Cannons";
      var headSet = (entity.getData("skyhighheroes:dyn/cannons_head_timer") > 0);
      var bodySet = (entity.getData("skyhighheroes:dyn/cannons_body_timer") > 0);
      var armsSet = (entity.getData("skyhighheroes:dyn/cannons_arms_timer") > 0);
      var cannonsToRender = ["Cannons:"];
      var headCannon = "Head: " + (nbt.getBoolean("cannonsHead") ? "ARMED" : "DISARMED");
      var bodyCannon = "Body: " + (nbt.getBoolean("cannonsBody") ? "ARMED" : "DISARMED");
      var armCannon = "Arms: " + (nbt.getBoolean("cannonsArms") ? "ARMED" : "DISARMED");

      var headCannons = "Head: " + ((headSet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_left_deploy_timer") > 0) ? "L" : "-") + ((headSet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_right_deploy_timer") > 0) ? "R" : "-");
      var bodyCannons = "Body: " + ((bodySet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_body_left_deploy_timer") > 0) ? "L" : "-") + ((bodySet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_body_right_deploy_timer") > 0) ? "R" : "-");
      var leftArmCannons = "Left Arm: " + ((armsSet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_bottom_deploy_timer") > 0) ? "M" : "-") + ((armsSet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_front_deploy_timer") > 0) ? "F" : "-") + ((armsSet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_back_deploy_timer") > 0) ? "B" : "-");
      var rightArmCannons = "Right Arm: " + ((armsSet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_bottom_deploy_timer") > 0) ? "M" : "-") + ((armsSet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_front_deploy_timer") > 0) ? "F" : "-") + ((armsSet || entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_back_deploy_timer") > 0) ? "B" : "-");

      cannonsToRender.push(headCannon);
      cannonsToRender.push(bodyCannon);
      cannonsToRender.push(armCannon);
      cannonsToRender.push(headCannons);
      cannonsToRender.push(bodyCannons);
      cannonsToRender.push(leftArmCannons);
      cannonsToRender.push(rightArmCannons);
      text_renderer.renderLines(isFirstPersonArm, "left", "center", cannonsToRender, -210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    if (nbt.getInteger("hudLeftSide") == 5) {
      leftSide = "Comms";
      var commsToRender = ["Comms:"];
      var satellite = "Satellite Dish: " + ((entity.getInterpolatedData("skyhighheroes:dyn/satellite_timer") > 0) ? "DEPLOYED" : "STOWED") + ((entity.getInterpolatedData("skyhighheroes:dyn/satellite_rain_mode_timer") > 0) ? " (RAIN MODE)" : "");
      var antenna = "Antenna: " + ((entity.getInterpolatedData("skyhighheroes:dyn/antenna_timer") > 0) ? "DEPLOYED" : "STOWED");
      var connectedSatellite = "Satellite: " + nbt.getShort("xSat") + ", " + nbt.getShort("ySat") + ", " + nbt.getShort("zSat");
      var frequency = "Frequency: " + nbt.getShort("freq");
      commsToRender.push(satellite);
      commsToRender.push(antenna);
      commsToRender.push(connectedSatellite);
      commsToRender.push(frequency);
      var cybers = cybernetics.availableCybers(entity);
      if (cybers.length > 0) {
        cybers.forEach(cyber => {
          commsToRender.push(cyber);
        });
      };
      text_renderer.renderLines(isFirstPersonArm, "left", "center", commsToRender, -210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    if (nbt.getInteger("hudLeftSide") == 6) {
      leftSide = "Wings";
      var wingsToRender = ["Wings:"];
      var wings = "Wings: " + (nbt.getBoolean("wings") ? "ARMED" : "DISARMED");
      var leftWing = "Left wing: " + ((entity.getData("skyhighheroes:dyn/wing_left_deploy_timer") > 0) || (entity.getData("skyhighheroes:dyn/wings_timer") > 0) ? "DEPLOYED" : "STOWED");
      var rightWing = "Right wing: " + ((entity.getData("skyhighheroes:dyn/wing_right_deploy_timer") > 0) || (entity.getData("skyhighheroes:dyn/wings_timer") > 0) ? "DEPLOYED" : "STOWED");
      wingsToRender.push(wings);
      wingsToRender.push(leftWing);
      wingsToRender.push(rightWing);
      text_renderer.renderLines(isFirstPersonArm, "left", "center", wingsToRender, -210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    if (nbt.getInteger("hudLeftSide") == 7) {
      leftSide = "Mouth";
      var mouthToRender = ["Mouth:"];
      var armed = "" + (nbt.getBoolean("mouth") ? "ARMED" : "DISARMED");
      var deployed = "" + ((entity.getData("skyhighheroes:dyn/mouth_deploy_timer") > 0) || (entity.getData("skyhighheroes:dyn/mouth_timer") > 0) ? "DEPLOYED" : "STOWED");
      mouthToRender.push(armed);
      mouthToRender.push(deployed);
      text_renderer.renderLines(isFirstPersonArm, "left", "center", mouthToRender, -210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    //Top
    if (nbt.getInteger("hudTopSide") == 1) {
      topSide = "Thermoptics";
      var thermoToRender = [];
      var camouflage = "" + (entity.getInterpolatedData("skyhighheroes:dyn/thermoptic_camouflage_timer") == 1 ? "CAMOUFLAGED" : "UNCAMOUFLAGED");
      thermoToRender.push(camouflage);
      text_renderer.renderLines(isFirstPersonArm, "center", "center", thermoToRender, 0.0, -100.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    if (nbt.getInteger("hudTopSide") == 2) {
      topSide = "Coords";
      var coordsToRender = [];
      var coords = "" + Math.round(entity.posX()) + " " + Math.round(entity.posY()) + " " + Math.round(entity.posZ());
      var direction = stuff.angleToDirection(entity.getInterpolatedData("skyhighheroes:dyn/bearing"));
      coordsToRender.push(coords);
      coordsToRender.push(direction);
      text_renderer.renderLines(isFirstPersonArm, "center", "center", coordsToRender, 0.0, -100.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    //Right
    if (nbt.getInteger("hudRightSide") == 1) {
      rightSide = "Status";
      var statusToRender = [];
      var model = nbt.getString("cyberModelID");
      var name = "(" + nbt.getString("cyberAliasName") + ")";
      var health = "Health: " + entity.getHealth() + "/" + entity.getMaxHealth();
      var chatMode = "Chat Mode: " + nbt.getString("chatMode");
      statusToRender.push(model);
      statusToRender.push(name);
      statusToRender.push(health);
      statusToRender.push(chatMode);
      if (nbt.getString("chatMode") == "group") {
        var selectedGroup = "Group: " + nbt.getString("groupSelected");
        statusToRender.push(selectedGroup);
      };
      if (nbt.getString("chatMode") == "normal") {
        var selectedContact = "Contact: " + nbt.getString("normalSelected");
        statusToRender.push(selectedContact);
      };
      text_renderer.renderLines(isFirstPersonArm, "right", "center", statusToRender, 210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    if (nbt.getInteger("hudRightSide") == 2) {
      rightSide = "Coords";
      var locationToRender = [];
      var coords = "X: " + Math.round(entity.posX()) + " Y: " + Math.round(entity.posY()) + " Z: " + Math.round(entity.posZ());
      var dimension = "Dimension: " + entity.world().getDimension();
      var biome = "Biome: " + entity.world().getLocation(entity.pos()).biome();
      locationToRender.push(coords);
      locationToRender.push(dimension);
      locationToRender.push(biome);
      text_renderer.renderLines(isFirstPersonArm, "right", "center", locationToRender, 210.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    //Switcher
    if (entity.getData("fiskheroes:gravity_manip")) {
      var hudsToRender = [];
      if (nbt.getInteger("hudSelectedSide") == 0) {
        hudsToRender.push("> Left: " + leftSide + " <");
      } else {
        hudsToRender.push("Left: " + leftSide);
      };
      if (nbt.getInteger("hudSelectedSide") == 1) {
        hudsToRender.push("> Top: " + topSide + " <");
      } else {
        hudsToRender.push("Top: " + topSide);
      };
      if (nbt.getInteger("hudSelectedSide") == 2) {
        hudsToRender.push("> Right: " + rightSide + " <");
      } else {
        hudsToRender.push("Right: " + rightSide);
      };
      text_renderer.renderLines(isFirstPersonArm, "center", "center", hudsToRender, 0.0, 0.0, -180.0, 1.0*nbt.getFloat("hudScale"));
    };
    leftSide = "OFF";
    topSide = "OFF";
    rightSide = "OFF";
  };
};
function getColor() {
  return "";
};