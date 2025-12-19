var cybernetics = implement("skyhighheroes:external/cybernetics");
var cybernetic_boosters = implement("skyhighheroes:external/cybernetic_boosters");
var cybernetic_beams = implement("skyhighheroes:external/cybernetic_beams");
var stuff = implement("skyhighheroes:external/stuff");

var blank_model;
var metal_heat;
var head_model;
var head_hair_model;
var body_model;
var left_arm_model;
var right_arm_model;
var left_leg_model;
var right_leg_model;

var head_camouflage_model;
var head_hair_camouflage_model;
var body_camouflage_model;
var left_arm_camouflage_model;
var right_arm_camouflage_model;
var left_leg_camouflage_model;
var right_leg_camouflage_model;

var satellite_beams;
var body_boosters;
var left_arm_boosters;
var right_arm_boosters;
var left_leg_boosters;
var right_leg_boosters;

var locationBeam;
var entityLocationBeam;

loadTextures({
  "null": "skyhighheroes:null",
  "head": "skyhighheroes:cyber/cyber_head_base.tx.json",
  "head_hair": "skyhighheroes:cyber/cyber_head_hair_base.tx.json",
  "body": "skyhighheroes:cyber/cyber_body_base.tx.json",
  "left_arm": "skyhighheroes:cyber/cyber_left_arm_base.tx.json",
  "right_arm": "skyhighheroes:cyber/cyber_right_arm_base.tx.json",
  "left_leg": "skyhighheroes:cyber/cyber_left_leg_base.tx.json",
  "right_leg": "skyhighheroes:cyber/cyber_right_leg_base.tx.json",
  "head_camouflage": "skyhighheroes:cyber/cyber_head_camouflage.tx.json",
  "head_hair_camouflage": "skyhighheroes:cyber/cyber_head_hair_camouflage.tx.json",
  "body_camouflage": "skyhighheroes:cyber/cyber_body_camouflage.tx.json",
  "left_arm_camouflage": "skyhighheroes:cyber/cyber_left_arm_camouflage.tx.json",
  "right_arm_camouflage": "skyhighheroes:cyber/cyber_right_arm_camouflage.tx.json",
  "left_leg_camouflage": "skyhighheroes:cyber/cyber_left_leg_camouflage.tx.json",
  "right_leg_camouflage": "skyhighheroes:cyber/cyber_right_leg_camouflage.tx.json",
  "arm": "skyhighheroes:cybernetic_arm_base",
  "claw": "skyhighheroes:cybernetic_claw_base",
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
  locationBeam = stuff.location(renderer);
  entityLocationBeam = stuff.entityLocation(renderer);
  //Deploy + base
  //Add a clamp thing to the inner rockets so I can supress them with a timer instead of just a nbt boolean
  //Use motion and look in these animations
  var head = renderer.createResource("MODEL", "skyhighheroes:CyberneticHead");
  head.texture.set("head", "head_lights");
  head.bindAnimation("skyhighheroes:cybernetic_head").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_head_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsHead"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_head_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsHead"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/mouth_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/mouth_timer") + cybernetics.getHoloBoolean(entity, "holoMouth"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/satellite_timer") + cybernetics.getHoloBoolean(entity, "holoSat"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/satellite_rain_mode_timer"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/antenna_timer") + cybernetics.getHoloBoolean(entity, "holoAnt"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_flush_timer"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/mouth_flush_timer"));
    data.load(8, stuff.getBearing(entity));
    data.load(9, entity.rotationInterpolated().y());
    data.load(10, stuff.directionAngle(entity, entity.getWornHelmet().nbt().getShort("xSat")+0.5, entity.getWornHelmet().nbt().getShort("zSat")+0.5));
    data.load(11, stuff.elevation(entity, entity.getWornHelmet().nbt().getShort("xSat")+0.5, entity.getWornHelmet().nbt().getShort("ySat")+0.5, entity.getWornHelmet().nbt().getShort("zSat")+0.5));
    data.load(12, entity.getInterpolatedData("skyhighheroes:dyn/eye_left_lid_timer"));
    data.load(13, entity.getInterpolatedData("skyhighheroes:dyn/eye_right_lid_timer"));
    data.load(14, entity.getInterpolatedData("skyhighheroes:dyn/eye_left_X_timer"));
    data.load(15, entity.getInterpolatedData("skyhighheroes:dyn/eye_right_X_timer"));
    data.load(16, entity.getInterpolatedData("skyhighheroes:dyn/eye_left_Y_timer"));
    data.load(17, entity.getInterpolatedData("skyhighheroes:dyn/eye_right_Y_timer"));
  });
  head_model = renderer.createEffect("fiskheroes:model").setModel(head);
  head_model.anchor.set("head");
  head_model.setScale(1.0);
  satellite_beams = cybernetics.initSatelliteBeams(renderer, head, getColor());
  cybernetic_beams.initHeadBeams(renderer, getColor());
  var head_hair = renderer.createResource("MODEL", "skyhighheroes:CyberneticHeadL2");
  head_hair.texture.set("head_hair", "head_hair_lights");
  head_hair.bindAnimation("skyhighheroes:cybernetic_head").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_head_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsHead"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_head_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsHead"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/mouth_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/mouth_timer") + cybernetics.getHoloBoolean(entity, "holoMouth"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/satellite_timer") + cybernetics.getHoloBoolean(entity, "holoSat"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/satellite_rain_mode_timer"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/antenna_timer") + cybernetics.getHoloBoolean(entity, "holoAnt"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_flush_timer"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/mouth_flush_timer"));
    data.load(8, stuff.getBearing(entity));
    data.load(9, entity.rotationInterpolated().y());
    data.load(10, stuff.directionAngle(entity, entity.getWornHelmet().nbt().getShort("xSat")+0.5, entity.getWornHelmet().nbt().getShort("zSat")+0.5));
    data.load(11, stuff.elevation(entity, entity.getWornHelmet().nbt().getShort("xSat")+0.5, entity.getWornHelmet().nbt().getShort("ySat")+0.5, entity.getWornHelmet().nbt().getShort("zSat")+0.5));
  });
  head_hair_model = renderer.createEffect("fiskheroes:model").setModel(head_hair);
  head_hair_model.setOffset(0.0, 0.5, 0.0);
  head_hair_model.anchor.set("head");
  head_hair_model.setScale(1.125);
  var body = renderer.createResource("MODEL", "skyhighheroes:CyberneticBody");
  body.texture.set("body", "body_lights");
  body.bindAnimation("skyhighheroes:cybernetic_body").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/rocket_body_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_body_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsBody"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/rocket_body_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_body_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsBody"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/cannon_body_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_body_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsBody"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/cannon_body_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_body_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsBody"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/wing_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/wings_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsWings") + cybernetics.getHoloBoolean(entity, "holoGlide"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/wing_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/wings_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsWings") + cybernetics.getHoloBoolean(entity, "holoGlide"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/external_arm_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/external_arms_timer"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/external_arm_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/external_arms_timer"));
  });
  body_model = renderer.createEffect("fiskheroes:model").setModel(body);
  body_model.anchor.set("body");
  body_model.setScale(1.0);
  cybernetics.initTentacles(renderer, body);
  body_boosters = cybernetic_boosters.initBodyBoosters(renderer, body, getColor());
  cybernetic_beams.initBodyBeams(renderer, getColor());
  var left_arm = renderer.createResource("MODEL", "skyhighheroes:CyberneticLeftArm");
  left_arm.texture.set("left_arm", "left_arm_lights");
  left_arm.bindAnimation("skyhighheroes:cybernetic_left_arm").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_bottom_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_front_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_back_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_outer_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_front_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_back_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_timer") + cybernetics.getHoloBooleans(entity, "holoBlades", "bladesLeft"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/shield_left_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/shield_left_arm_timer") + cybernetics.getHoloBooleans(entity, "holoShields", "shieldsLeft"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_stealth_timer") + cybernetics.getHoloBooleans(entity, "holoBlades", "bladesLeftStealth"));
    data.load(9, entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_flush_timer"));
  });
  left_arm_model = renderer.createEffect("fiskheroes:model").setModel(left_arm);
  left_arm_model.anchor.set("leftArm");
  left_arm_model.setScale(1.0);
  left_arm_boosters = cybernetic_boosters.initLeftArmBoosters(renderer, left_arm, getColor());
  cybernetic_beams.initLeftArmBeams(renderer, getColor());
  var right_arm = renderer.createResource("MODEL", "skyhighheroes:CyberneticRightArm");
  right_arm.texture.set("right_arm", "right_arm_lights");
  right_arm.bindAnimation("skyhighheroes:cybernetic_right_arm").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_bottom_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_front_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_back_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_outer_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_front_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_back_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_timer") + cybernetics.getHoloBooleans(entity, "holoBlades", "bladesRight"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/shield_right_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/shield_right_arm_timer") + cybernetics.getHoloBooleans(entity, "holoShields", "shieldsRight"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_stealth_timer") + cybernetics.getHoloBooleans(entity, "holoBlades", "bladesRightStealth"));
    data.load(9, entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_flush_timer"));
  });
  right_arm_model = renderer.createEffect("fiskheroes:model").setModel(right_arm);
  right_arm_model.anchor.set("rightArm");
  right_arm_model.setScale(1.0);
  right_arm_boosters = cybernetic_boosters.initRightArmBoosters(renderer, right_arm, getColor());
  cybernetic_beams.initRightArmBeams(renderer, getColor());
  var left_leg = renderer.createResource("MODEL", "skyhighheroes:CyberneticLeftLeg");
  left_leg.texture.set("left_leg", "left_leg_lights");
  left_leg.bindAnimation("skyhighheroes:cybernetic_left_leg").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_main_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_outer_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_inner_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_front_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_back_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_outer_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_inner_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_front_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_back_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(9, entity.getInterpolatedData("skyhighheroes:dyn/rocket_inner_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "innerRockets"));
  });
  left_leg_model = renderer.createEffect("fiskheroes:model").setModel(left_leg);
  left_leg_model.anchor.set("leftLeg");
  left_leg_model.setScale(1.0);
  left_leg_boosters = cybernetic_boosters.initLeftLegBoosters(renderer, left_leg, getColor());
  var right_leg = renderer.createResource("MODEL", "skyhighheroes:CyberneticRightLeg");
  right_leg.texture.set("right_leg", "right_leg_lights");
  right_leg.bindAnimation("skyhighheroes:cybernetic_right_leg").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_main_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_outer_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_inner_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_front_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_back_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_outer_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_inner_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_front_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_back_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(9, entity.getInterpolatedData("skyhighheroes:dyn/rocket_inner_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "innerRockets"));
  });
  right_leg_model = renderer.createEffect("fiskheroes:model").setModel(right_leg);
  right_leg_model.anchor.set("rightLeg");
  right_leg_model.setScale(1.0);
  right_leg_boosters = cybernetic_boosters.initRightLegBoosters(renderer, right_leg, getColor());
  
  var head_camouflage = renderer.createResource("MODEL", "skyhighheroes:CyberneticHead");
  head_camouflage.texture.set("head_camouflage");
  head_camouflage.bindAnimation("skyhighheroes:cybernetic_head").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_head_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsHead"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_head_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsHead"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/mouth_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/mouth_timer") + cybernetics.getHoloBoolean(entity, "holoMouth"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/satellite_timer") + cybernetics.getHoloBoolean(entity, "holoSat"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/satellite_rain_mode_timer"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/antenna_timer") + cybernetics.getHoloBoolean(entity, "holoAnt"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_flush_timer"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/mouth_flush_timer"));
    data.load(8, stuff.getBearing(entity));
    data.load(9, entity.rotationInterpolated().y());
    data.load(10, stuff.directionAngle(entity, entity.getWornHelmet().nbt().getShort("xSat")+0.5, entity.getWornHelmet().nbt().getShort("zSat")+0.5));
    data.load(11, stuff.elevation(entity, entity.getWornHelmet().nbt().getShort("xSat")+0.5, entity.getWornHelmet().nbt().getShort("ySat")+0.5, entity.getWornHelmet().nbt().getShort("zSat")+0.5));
    data.load(12, entity.getInterpolatedData("skyhighheroes:dyn/eye_left_lid_timer"));
    data.load(13, entity.getInterpolatedData("skyhighheroes:dyn/eye_right_lid_timer"));
    data.load(14, entity.getInterpolatedData("skyhighheroes:dyn/eye_left_X_timer"));
    data.load(15, entity.getInterpolatedData("skyhighheroes:dyn/eye_right_X_timer"));
    data.load(16, entity.getInterpolatedData("skyhighheroes:dyn/eye_left_Y_timer"));
    data.load(17, entity.getInterpolatedData("skyhighheroes:dyn/eye_right_Y_timer"));
  });
  head_camouflage_model = renderer.createEffect("fiskheroes:model").setModel(head_camouflage);
  head_camouflage_model.anchor.set("head");
  head_camouflage_model.setScale(1.0);
  var head_hair_camouflage = renderer.createResource("MODEL", "skyhighheroes:CyberneticHeadL2");
  head_hair_camouflage.texture.set("head_hair_camouflage");
  head_hair_camouflage.bindAnimation("skyhighheroes:cybernetic_head").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_head_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsHead"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_head_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsHead"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/mouth_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/mouth_timer") + cybernetics.getHoloBoolean(entity, "holoMouth"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/satellite_timer") + cybernetics.getHoloBoolean(entity, "holoSat"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/satellite_rain_mode_timer"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/antenna_timer") + cybernetics.getHoloBoolean(entity, "holoAnt"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/cannon_head_flush_timer"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/mouth_flush_timer"));
    data.load(8, stuff.getBearing(entity));
    data.load(9, entity.rotationInterpolated().y());
    data.load(10, stuff.directionAngle(entity, entity.getWornHelmet().nbt().getShort("xSat")+0.5, entity.getWornHelmet().nbt().getShort("zSat")+0.5));
    data.load(11, stuff.elevation(entity, entity.getWornHelmet().nbt().getShort("xSat")+0.5, entity.getWornHelmet().nbt().getShort("ySat")+0.5, entity.getWornHelmet().nbt().getShort("zSat")+0.5));
  });
  head_hair_camouflage_model = renderer.createEffect("fiskheroes:model").setModel(head_hair_camouflage);
  head_hair_camouflage_model.setOffset(0.0, 0.5, 0.0);
  head_hair_camouflage_model.anchor.set("head");
  head_hair_camouflage_model.setScale(1.125);
  var body_camouflage = renderer.createResource("MODEL", "skyhighheroes:CyberneticBody");
  body_camouflage.texture.set("body_camouflage");
  body_camouflage.bindAnimation("skyhighheroes:cybernetic_body").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/rocket_body_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_body_timer"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/rocket_body_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_body_timer"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/cannon_body_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_body_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsBody"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/cannon_body_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_body_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsBody"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/wing_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/wings_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsWings") + cybernetics.getHoloBoolean(entity, "holoGlide"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/wing_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/wings_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsWings") + cybernetics.getHoloBoolean(entity, "holoGlide"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/external_arm_left_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/external_arms_timer"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/external_arm_right_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/external_arms_timer"));
  });
  body_camouflage_model = renderer.createEffect("fiskheroes:model").setModel(body_camouflage);
  body_camouflage_model.anchor.set("body");
  body_camouflage_model.setScale(1.0);
  var left_arm_camouflage = renderer.createResource("MODEL", "skyhighheroes:CyberneticLeftArm");
  left_arm_camouflage.texture.set("left_arm_camouflage");
  left_arm_camouflage.bindAnimation("skyhighheroes:cybernetic_left_arm").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_bottom_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_front_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_back_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_outer_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_front_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_arm_back_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_timer") + cybernetics.getHoloBooleans(entity, "holoBlades", "bladesLeft"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/shield_left_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/shield_left_arm_timer") + cybernetics.getHoloBooleans(entity, "holoShields", "shieldsLeft"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_stealth_timer") + cybernetics.getHoloBooleans(entity, "holoBlades", "bladesLeftStealth"));
    data.load(9, entity.getInterpolatedData("skyhighheroes:dyn/cannon_left_arm_flush_timer"));
  });
  left_arm_camouflage_model = renderer.createEffect("fiskheroes:model").setModel(left_arm_camouflage);
  left_arm_camouflage_model.anchor.set("leftArm");
  left_arm_camouflage_model.setScale(1.0);
  var right_arm_camouflage = renderer.createResource("MODEL", "skyhighheroes:CyberneticRightArm");
  right_arm_camouflage.texture.set("right_arm_camouflage");
  right_arm_camouflage.bindAnimation("skyhighheroes:cybernetic_right_arm").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_bottom_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_front_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_back_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/cannons_arms_timer") + cybernetics.getHoloBooleans(entity, "holoCannons", "cannonsArms"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_outer_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_front_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_arm_back_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/blade_right_arm_timer") + cybernetics.getHoloBooleans(entity, "holoBlades", "bladesRight"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/shield_right_arm_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/shield_right_arm_timer") + cybernetics.getHoloBooleans(entity, "holoShields", "shieldsRight"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/blade_left_arm_stealth_timer") + cybernetics.getHoloBooleans(entity, "holoBlades", "bladesRightStealth"));
    data.load(9, entity.getInterpolatedData("skyhighheroes:dyn/cannon_right_arm_flush_timer"));
  });
  right_arm_camouflage_model = renderer.createEffect("fiskheroes:model").setModel(right_arm_camouflage);
  right_arm_camouflage_model.anchor.set("rightArm");
  right_arm_camouflage_model.setScale(1.0);
  var left_leg_camouflage = renderer.createResource("MODEL", "skyhighheroes:CyberneticLeftLeg");
  left_leg_camouflage.texture.set("left_leg_camouflage");
  left_leg_camouflage.bindAnimation("skyhighheroes:cybernetic_left_leg").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_main_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_outer_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_inner_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_front_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_back_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_outer_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_inner_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_front_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/rocket_left_leg_back_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(9, entity.getInterpolatedData("skyhighheroes:dyn/rocket_inner_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "innerRockets"));
  });
  left_leg_camouflage_model = renderer.createEffect("fiskheroes:model").setModel(left_leg_camouflage);
  left_leg_camouflage_model.anchor.set("leftLeg");
  left_leg_camouflage_model.setScale(1.0);
  var right_leg_camouflage = renderer.createResource("MODEL", "skyhighheroes:CyberneticRightLeg");
  right_leg_camouflage.texture.set("right_leg_camouflage");
  right_leg_camouflage.bindAnimation("skyhighheroes:cybernetic_right_leg").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_main_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_outer_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_inner_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_front_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_back_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsLegs"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_outer_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_inner_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_front_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/rocket_right_leg_back_booster_deploy_timer") + entity.getInterpolatedData("skyhighheroes:dyn/rockets_aux_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "rocketsAux"));
    data.load(9, entity.getInterpolatedData("skyhighheroes:dyn/rocket_inner_legs_timer") + cybernetics.getHoloBooleans(entity, "holoFlight", "innerRockets"));
  });
  right_leg_camouflage_model = renderer.createEffect("fiskheroes:model").setModel(right_leg_camouflage);
  right_leg_camouflage_model.anchor.set("rightLeg");
  right_leg_camouflage_model.setScale(1.0);

  metal_heat = renderer.createEffect("fiskheroes:metal_heat");
  metal_heat.includeEffects(head_model, head_hair_model, body_model, left_arm_model, right_arm_model, left_leg_model, right_leg_model);
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
  var nbt = entity.getWornHelmet().nbt();
  var entities = [];
  if (nbt.getBoolean("hostilesOnHud") || nbt.getBoolean("friendliesOnHud") || nbt.getBoolean("playersOnHud")) {
    entities = entity.world().getEntitiesInRangeOf(entity.pos(), nbt.getInteger("hudRange"));
  };
  if (entities.length > 0) {
    entities.forEach(scannedEntity => {
      if (scannedEntity.isAlive()) {
        if (nbt.getBoolean("hostilesOnHud") && stuff.hostileEntities.indexOf(scannedEntity.getEntityName()) > -1) {
          entityLocationBeam.render(isFirstPersonArm, entity, scannedEntity, 0x770000);
        };
        if (nbt.getBoolean("friendliesOnHud") && stuff.friendlyEntities.indexOf(scannedEntity.getEntityName()) > -1) {
          entityLocationBeam.render(isFirstPersonArm, entity, scannedEntity, 0x007700);
        };
        if (nbt.getBoolean("playersOnHud") && entity.getUUID() != scannedEntity.getUUID() && scannedEntity.is("PLAYER") && !scannedEntity.getData("fiskheroes:invisible")) {
          var color = 0x000077;
          if (scannedEntity.isWearingFullSuit()) {
            if (scannedEntity.getWornHelmet().nbt().hasKey("hudColorSkyHigh")) {
              color = scannedEntity.getWornHelmet().nbt().getString("hudColorSkyHigh");
            };
            if (scannedEntity.getWornChestplate().nbt().hasKey("hudColorSkyHigh")) {
              color = scannedEntity.getWornChestplate().nbt().getString("hudColorSkyHigh");
            };
            if (scannedEntity.getWornLeggings().nbt().hasKey("hudColorSkyHigh")) {
              color = scannedEntity.getWronLeggings().nbt().getString("hudColorSkyHigh");
            };
            if (scannedEntity.getWornBoots().nbt().hasKey("hudColorSkyHigh")) {
              color = scannedEntity.getWornBoots().nbt().getString("hudColorSkyHigh");
            };
          };
          entityLocationBeam.render(isFirstPersonArm, entity, scannedEntity, color);
        };
      };
    });
  };
  if (entity.is("DISPLAY")) {
    if (entity.getWornHelmet().nbt().getBoolean("camoOnStand")) {
      head_camouflage_model.render();
      head_hair_camouflage_model.render();
      body_camouflage_model.render();
      left_arm_camouflage_model.render();
      right_arm_camouflage_model.render();
      left_leg_camouflage_model.render();
      right_leg_camouflage_model.render();
    };
    head_model.render();
    head_hair_model.render();
    body_model.render();
    left_arm_model.render();
    right_arm_model.render();
    left_leg_model.render();
    right_leg_model.render();
  };
  
  if (entity.isWearingFullSuit() && (entity.getInterpolatedData("skyhighheroes:dyn/thermoptic_camouflage_timer") < 1)) {
    head_model.render();
    head_hair_model.render();
    body_model.render();
    left_arm_model.render();
    right_arm_model.render();
    left_leg_model.render();
    right_leg_model.render();

    head_camouflage_model.render();
    head_hair_camouflage_model.render();
    body_camouflage_model.render();
    left_arm_camouflage_model.render();
    right_arm_camouflage_model.render();
    left_leg_camouflage_model.render();
    right_leg_camouflage_model.render();

    satellite_beams.render(entity, isFirstPersonArm);
    body_boosters.render(entity, renderLayer, isFirstPersonArm);
    left_arm_boosters.render(entity, renderLayer, isFirstPersonArm);
    right_arm_boosters.render(entity, renderLayer, isFirstPersonArm);
    left_leg_boosters.render(entity, renderLayer, isFirstPersonArm);
    right_leg_boosters.render(entity, renderLayer, isFirstPersonArm);
    
    metal_heat.opacity = entity.getInterpolatedData("fiskheroes:metal_heat");
    metal_heat.render();
  };
};
function getColor() {
  return "";
};