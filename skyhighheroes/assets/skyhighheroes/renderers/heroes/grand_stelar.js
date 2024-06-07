extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:grand/grand_stelar_base",
  "lights": "skyhighheroes:grand/grand_stelar_lights",
  "base_wave_change": "skyhighheroes:grand/grand_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:grand/grand_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:grand/grand_stelar_wave_changing_lights.tx.json",
  "predation_sides_wave_changing_lights": "skyhighheroes:grand/grand_stelar_predation_sides_wave_changing_lights.tx.json",
  "predation_front_wave_changing_lights": "skyhighheroes:grand/grand_stelar_predation_front_wave_changing_lights.tx.json",
  "sword_blade": "skyhighheroes:grand/grand_stelar_sword_blade.tx.json",
  "sword": "skyhighheroes:grand/grand_stelar_sword.tx.json",
  "sword_lights": "skyhighheroes:grand/grand_stelar_sword_lights.tx.json",
  "sword_wave_changing_lights": "skyhighheroes:grand/grand_stelar_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:grand/grand_stelar_sword_sides.tx.json",
  "sword_front": "skyhighheroes:grand/grand_stelar_sword_front.tx.json",
  "meteor_strike_sides": "skyhighheroes:grand/grand_stelar_meteor_strike_sides.tx.json",
  "meteor_strike_sides_lights": "skyhighheroes:grand/grand_stelar_meteor_strike_sides_lights.tx.json",
  "meteor_strike_front_lights": "skyhighheroes:grand/grand_stelar_meteor_strike_front_lights.tx.json",
  "gravity_strike_sides": "skyhighheroes:grand/grand_stelar_gravity_strike_sides.tx.json",
  "gravity_strike_sides_lights": "skyhighheroes:grand/grand_stelar_gravity_strike_sides_lights.tx.json",
  "gravity_strike_front": "skyhighheroes:grand/grand_stelar_gravity_strike_front.tx.json",
  "gravity_strike_front_lights": "skyhighheroes:grand/grand_stelar_gravity_strike_front_lights.tx.json",
  "ember_ray_sides": "skyhighheroes:grand/grand_stelar_ember_ray_sides.tx.json",
  "ember_ray_sides_lights": "skyhighheroes:grand/grand_stelar_ember_ray_sides_lights.tx.json",
  "ember_ray_front": "skyhighheroes:grand/grand_stelar_ember_ray_front.tx.json",
  "ember_ray_front_lights": "skyhighheroes:grand/grand_stelar_ember_ray_front_lights.tx.json",
  "head_right": "skyhighheroes:grand/grand_stelar_singularity_right.tx.json",
  "head_right_wave_change": "skyhighheroes:grand/grand_stelar_singularity_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:grand/grand_stelar_singularity_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:grand/grand_stelar_singularity_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:grand/grand_stelar_singularity_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:grand/grand_stelar_singularity_left.tx.json",
  "head_left_wave_change": "skyhighheroes:grand/grand_stelar_singularity_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:grand/grand_stelar_singularity_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:grand/grand_stelar_singularity_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:grand/grand_stelar_singularity_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:grand/grand_stelar_singularity_top.tx.json",
  "head_top_wave_change": "skyhighheroes:grand/grand_stelar_singularity_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:grand/grand_stelar_singularity_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:grand/grand_stelar_singularity_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:grand/grand_stelar_singularity_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:grand/grand_stelar_singularity_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:grand/grand_stelar_singularity_bottom_wave_change.tx.json",
  "head_bottom_lights": "skyhighheroes:grand/grand_stelar_singularity_bottom_lights.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:grand/grand_stelar_singularity_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:grand/grand_stelar_singularity_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:grand/grand_stelar_singularity_front.tx.json",
  "head_front_lights": "skyhighheroes:grand/grand_stelar_singularity_front_lights.tx.json",
  "head_front_wave_change": "skyhighheroes:grand/grand_stelar_singularity_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:grand/grand_stelar_singularity_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:grand/grand_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:grand/grand_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:grand/grand_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:grand/grand_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:grand/grand_stelar_transer",
  "transer_default_lights": "skyhighheroes:grand/grand_stelar_transer_lights",
  "shield": "skyhighheroes:grand/grand_stelar_shield",
  "shield_lights": "skyhighheroes:grand/grand_stelar_shield_lights",
  "katana": "skyhighheroes:grand/grand_stelar_katana",
  "katana_lights": "skyhighheroes:grand/grand_stelar_katana_lights",
  "scythe": "skyhighheroes:grand/grand_stelar_scythe",
  "scythe_lights": "skyhighheroes:grand/grand_stelar_scythe_lights",
  "rifle": "skyhighheroes:grand/grand_stelar_rifle",
  "rifle_lights": "skyhighheroes:grand/grand_stelar_rifle_lights"
});

function getColor() {
  return 0xFF0000;
};

function getID() {
  return "d699ffcd-8177-4325-91ac-3e815e87bb95";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  stelar.addAnimationWithData(renderer, "stelar.EMBER_RAY_AIM", "skyhighheroes:stelar_aim", "fiskheroes:energy_projection_timer")
  .priority = 10;
  stelar.addAnimationWithData(renderer, "stelar.GRAVITY_STRIKE_AIM", "skyhighheroes:stelar_aim", "skyhighheroes:dyn/telekinesis_timer")
  .priority = 10;
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stelar.bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:wave_ember_ray_grand", "rightArm", 0xFF0000, [
      { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [3.0, 3.0] }
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  stuff.bindCloud(renderer, "fiskheroes:telekinesis", "skyhighheroes:wave_gravity_strike_grand");
  var chain = stuff.bindCloud(renderer, "fiskheroes:telekinesis_chain", "skyhighheroes:wave_gravity_strike_grand");
  chain.anchor.set("rightArm");
  chain.setOffset(-0.5, 10.0, 0.0);
  chain.setFirstPerson(-4.75, 4.0, -8.5);
  stuff.bindFlightTrail(renderer, "skyhighheroes:grand_stelar_flight");
  //Battle card predation wave changing
  //Right
  predationRightWaveChanging = renderer.createEffect("fiskheroes:shield");
  predationRightWaveChanging.texture.set(null, "predation_sides_wave_changing_lights");
  predationRightWaveChanging.anchor.set("rightArm");
  predationRightWaveChanging.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  predationRightWaveChanging.large = true;
  //Left
  predationLeftWaveChanging = renderer.createEffect("fiskheroes:shield");
  predationLeftWaveChanging.texture.set(null, "predation_sides_wave_changing_lights");
  predationLeftWaveChanging.anchor.set("rightArm");
  predationLeftWaveChanging.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  predationLeftWaveChanging.large = true;
  //Top
  predationTopWaveChanging = renderer.createEffect("fiskheroes:shield");
  predationTopWaveChanging.texture.set(null, "predation_sides_wave_changing_lights");
  predationTopWaveChanging.anchor.set("rightArm");
  predationTopWaveChanging.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  predationTopWaveChanging.large = true;
  //Bottom
  predationBottomWaveChanging = renderer.createEffect("fiskheroes:shield");
  predationBottomWaveChanging.texture.set(null, "predation_sides_wave_changing_lights");
  predationBottomWaveChanging.anchor.set("rightArm");
  predationBottomWaveChanging.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  predationBottomWaveChanging.large = true;
  //Front
  predationFrontWaveChanging = renderer.createEffect("fiskheroes:shield");
  predationFrontWaveChanging.texture.set(null, "predation_front_wave_changing_lights");
  predationFrontWaveChanging.anchor.set("rightArm");
  predationFrontWaveChanging.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  predationFrontWaveChanging.large = true;
  //Ember Ray
  //Right
  emberRayRight = renderer.createEffect("fiskheroes:shield");
  emberRayRight.texture.set("ember_ray_sides", "ember_ray_sides_lights");
  emberRayRight.anchor.set("rightArm");
  emberRayRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  emberRayRight.large = true;
  //Left
  emberRayLeft = renderer.createEffect("fiskheroes:shield");
  emberRayLeft.texture.set("ember_ray_sides", "ember_ray_sides_lights");
  emberRayLeft.anchor.set("rightArm");
  emberRayLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  emberRayLeft.large = true;
  //Top
  emberRayTop = renderer.createEffect("fiskheroes:shield");
  emberRayTop.texture.set("ember_ray_sides", "ember_ray_sides_lights");
  emberRayTop.anchor.set("rightArm");
  emberRayTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  emberRayTop.large = true;
  //Bottom
  emberRayBottom = renderer.createEffect("fiskheroes:shield");
  emberRayBottom.texture.set("ember_ray_sides", "ember_ray_sides_lights");
  emberRayBottom.anchor.set("rightArm");
  emberRayBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  emberRayBottom.large = true;
  //Front
  emberRayFront = renderer.createEffect("fiskheroes:shield");
  emberRayFront.texture.set("ember_ray_front", "ember_ray_front_lights");
  emberRayFront.anchor.set("rightArm");
  emberRayFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  emberRayFront.large = true;
  //Gravity Strike
  //Right
  gravityStrikeRight = renderer.createEffect("fiskheroes:shield");
  gravityStrikeRight.texture.set("gravity_strike_sides", "gravity_strike_sides_lights");
  gravityStrikeRight.anchor.set("rightArm");
  gravityStrikeRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  gravityStrikeRight.large = true;
  //Left
  gravityStrikeLeft = renderer.createEffect("fiskheroes:shield");
  gravityStrikeLeft.texture.set("gravity_strike_sides", "gravity_strike_sides_lights");
  gravityStrikeLeft.anchor.set("rightArm");
  gravityStrikeLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  gravityStrikeLeft.large = true;
  //Top
  gravityStrikeTop = renderer.createEffect("fiskheroes:shield");
  gravityStrikeTop.texture.set("gravity_strike_sides", "gravity_strike_sides_lights");
  gravityStrikeTop.anchor.set("rightArm");
  gravityStrikeTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  gravityStrikeTop.large = true;
  //Bottom
  gravityStrikeBottom = renderer.createEffect("fiskheroes:shield");
  gravityStrikeBottom.texture.set("gravity_strike_sides", "gravity_strike_sides_lights");
  gravityStrikeBottom.anchor.set("rightArm");
  gravityStrikeBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  gravityStrikeBottom.large = true;
  //Front
  gravityStrikeFront = renderer.createEffect("fiskheroes:shield");
  gravityStrikeFront.texture.set("gravity_strike_front", "gravity_strike_front_lights");
  gravityStrikeFront.anchor.set("rightArm");
  gravityStrikeFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  gravityStrikeFront.large = true;
  //Meteor Strike
  //Right
  meteorStrikeRight = renderer.createEffect("fiskheroes:shield");
  meteorStrikeRight.texture.set("meteor_strike_sides", "meteor_strike_sides_lights");
  meteorStrikeRight.anchor.set("rightArm");
  meteorStrikeRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  meteorStrikeRight.large = true;
  //Left
  meteorStrikeLeft = renderer.createEffect("fiskheroes:shield");
  meteorStrikeLeft.texture.set("meteor_strike_sides", "meteor_strike_sides_lights");
  meteorStrikeLeft.anchor.set("rightArm");
  meteorStrikeLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  meteorStrikeLeft.large = true;
  //Top
  meteorStrikeTop = renderer.createEffect("fiskheroes:shield");
  meteorStrikeTop.texture.set("meteor_strike_sides", "meteor_strike_sides_lights");
  meteorStrikeTop.anchor.set("rightArm");
  meteorStrikeTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  meteorStrikeTop.large = true;
  //Bottom
  meteorStrikeBottom = renderer.createEffect("fiskheroes:shield");
  meteorStrikeBottom.texture.set("meteor_strike_sides", "meteor_strike_sides_lights");
  meteorStrikeBottom.anchor.set("rightArm");
  meteorStrikeBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  meteorStrikeBottom.large = true;
  //Front
  meteorStrikeFront = renderer.createEffect("fiskheroes:shield");
  meteorStrikeFront.texture.set(null, "meteor_strike_front_lights");
  meteorStrikeFront.anchor.set("rightArm");
  meteorStrikeFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  meteorStrikeFront.large = true;
  //Sword
  swordMain = renderer.createEffect("fiskheroes:shield");
  swordMain.texture.set("sword", "sword_lights");
  swordMain.anchor.set("rightArm");
  swordMain.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 14.5, 0.0);
  swordMain.large = true;
  swordBlade = renderer.createEffect("fiskheroes:shield");
  swordBlade.texture.set(null, "sword_blade");
  swordBlade.anchor.set("rightArm");
  swordBlade.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 14.5, 0.0);
  swordBlade.large = true;
  swordWaveChanging = renderer.createEffect("fiskheroes:shield");
  swordWaveChanging.texture.set(null, "sword_wave_changing_lights");
  swordWaveChanging.anchor.set("rightArm");
  swordWaveChanging.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 14.5, 0.0);
  swordWaveChanging.large = true;
  //Right
  swordRight = renderer.createEffect("fiskheroes:shield");
  swordRight.texture.set("sword_sides");
  swordRight.anchor.set("rightArm");
  swordRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  swordRight.large = true;
  //Left
  swordLeft = renderer.createEffect("fiskheroes:shield");
  swordLeft.texture.set("sword_sides");
  swordLeft.anchor.set("rightArm");
  swordLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  swordLeft.large = true;
  //Top
  swordTop = renderer.createEffect("fiskheroes:shield");
  swordTop.texture.set("sword_sides");
  swordTop.anchor.set("rightArm");
  swordTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  swordTop.large = true;
  //Bottom
  swordBottom = renderer.createEffect("fiskheroes:shield");
  swordBottom.texture.set("sword_sides");
  swordBottom.anchor.set("rightArm");
  swordBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  swordBottom.large = true;
  //Front
  swordFront = renderer.createEffect("fiskheroes:shield");
  swordFront.texture.set("sword_front");
  swordFront.anchor.set("rightArm");
  swordFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  swordFront.large = true;
  //Head
  //Right
  headRight = renderer.createEffect("fiskheroes:shield");
  headRight.texture.set("head_right", "head_right_lights");
  headRight.anchor.set("rightArm");
  headRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, 3.0);
  headRight.large = true;
  headRightWaveChange = renderer.createEffect("fiskheroes:shield");
  headRightWaveChange.texture.set("head_right_wave_change", "head_right_wave_change_lights");
  headRightWaveChange.anchor.set("rightArm");
  headRightWaveChange.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, 3.0);
  headRightWaveChange.large = true;
  headRightWaveChanging = renderer.createEffect("fiskheroes:shield");
  headRightWaveChanging.texture.set(null, "head_right_wave_changing_lights");
  headRightWaveChanging.anchor.set("rightArm");
  headRightWaveChanging.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, 3.0);
  headRightWaveChanging.large = true;
  //Left
  headLeft = renderer.createEffect("fiskheroes:shield");
  headLeft.texture.set("head_left", "head_left_lights");
  headLeft.anchor.set("rightArm");
  headLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, -3.0);
  headLeft.large = true;
  headLeftWaveChange = renderer.createEffect("fiskheroes:shield");
  headLeftWaveChange.texture.set("head_left_wave_change", "head_left_wave_change_lights");
  headLeftWaveChange.anchor.set("rightArm");
  headLeftWaveChange.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, -3.0);
  headLeftWaveChange.large = true;
  headLeftWaveChanging = renderer.createEffect("fiskheroes:shield");
  headLeftWaveChanging.texture.set(null, "head_left_wave_changing_lights");
  headLeftWaveChanging.anchor.set("rightArm");
  headLeftWaveChanging.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.5, -3.0);
  headLeftWaveChanging.large = true;
  //Top
  headTop = renderer.createEffect("fiskheroes:shield");
  headTop.texture.set("head_top", "head_top_lights");
  headTop.anchor.set("rightArm");
  headTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 8.5, 0.0);
  headTop.large = true;
  headTopWaveChange = renderer.createEffect("fiskheroes:shield");
  headTopWaveChange.texture.set("head_top_wave_change", "head_top_wave_change_lights");
  headTopWaveChange.anchor.set("rightArm");
  headTopWaveChange.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 8.5, 0.0);
  headTopWaveChange.large = true;
  headTopWaveChanging = renderer.createEffect("fiskheroes:shield");
  headTopWaveChanging.texture.set(null, "head_top_wave_changing_lights");
  headTopWaveChanging.anchor.set("rightArm");
  headTopWaveChanging.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 8.5, 0.0);
  headTopWaveChanging.large = true;
  //Bottom
  headBottom = renderer.createEffect("fiskheroes:shield");
  headBottom.texture.set("head_bottom", "head_bottom_lights");
  headBottom.anchor.set("rightArm");
  headBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 8.5, 0.0);
  headBottom.large = true;
  headBottomWaveChange = renderer.createEffect("fiskheroes:shield");
  headBottomWaveChange.texture.set("head_bottom_wave_change", "head_bottom_wave_change_lights");
  headBottomWaveChange.anchor.set("rightArm");
  headBottomWaveChange.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 8.5, 0.0);
  headBottomWaveChange.large = true;
  headBottomWaveChanging = renderer.createEffect("fiskheroes:shield");
  headBottomWaveChanging.texture.set(null, "head_bottom_wave_changing_lights");
  headBottomWaveChanging.anchor.set("rightArm");
  headBottomWaveChanging.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 8.5, 0.0);
  headBottomWaveChanging.large = true;
  //Front
  headFront = renderer.createEffect("fiskheroes:shield");
  headFront.texture.set("head_front", "head_front_lights");
  headFront.anchor.set("rightArm");
  headFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 13.5, 0.0);
  headFront.large = true;
  headFrontWaveChange = renderer.createEffect("fiskheroes:shield");
  headFrontWaveChange.texture.set("head_front_wave_change", null);
  headFrontWaveChange.anchor.set("rightArm");
  headFrontWaveChange.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 13.5, 0.0);
  headFrontWaveChange.large = true;
  headFrontWaveChanging = renderer.createEffect("fiskheroes:shield");
  headFrontWaveChanging.texture.set(null, "head_front_wave_changing_lights");
  headFrontWaveChanging.anchor.set("rightArm");
  headFrontWaveChanging.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 13.5, 0.0);
  headFrontWaveChanging.large = true;
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
  if (renderLayer == "CHESTPLATE") {
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 || ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW"))) {
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
        headRightWaveChange.render();
        headLeftWaveChange.render();
        headTopWaveChange.render();
        headBottomWaveChange.render();
        headFrontWaveChange.render();
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/ember_ray_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/meteor_strike_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/gravity_strike_timer") < 1)) {
        headRight.render();
        headLeft.render();
        headTop.render();
        headBottom.render();
        headFront.render();
      }
      if ((entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/ember_ray_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/meteor_strike_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/gravity_strike_timer") < 1)) {
        headRightWaveChanging.render();
        headLeftWaveChanging.render();
        headTopWaveChanging.render();
        headBottomWaveChanging.render();
        headFrontWaveChanging.render();
      }
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) {
      predationRightWaveChanging.render();
      predationLeftWaveChanging.render();
      predationTopWaveChanging.render();
      predationBottomWaveChanging.render();
      predationFrontWaveChanging.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") > 0) {
      swordWaveChanging.render();
      swordMain.render();
      swordRight.render();
      swordLeft.render();
      swordTop.render();
      swordBottom.render();
      swordFront.render();
      if (entity.getData("skyhighheroes:dyn/sword") && entity.getHeldItem().isEmpty()) {
        swordBlade.render();
      };
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/ember_ray_timer") > 0) {
      emberRayRight.render();
      emberRayLeft.render();
      emberRayTop.render();
      emberRayBottom.render();
      emberRayFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/meteor_strike_timer") > 0) {
      meteorStrikeRight.render();
      meteorStrikeLeft.render();
      meteorStrikeTop.render();
      meteorStrikeBottom.render();
      meteorStrikeFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/gravity_strike_timer") > 0) {
      gravityStrikeRight.render();
      gravityStrikeLeft.render();
      gravityStrikeTop.render();
      gravityStrikeBottom.render();
      gravityStrikeFront.render();
    };
  };
};