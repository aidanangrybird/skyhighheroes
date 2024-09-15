extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:lucas/lucas_stelar_base",
  "lights": "skyhighheroes:lucas/lucas_stelar_lights",
  "base_wave_change": "skyhighheroes:lucas/lucas_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:lucas/lucas_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_wave_changing_lights.tx.json",
  "helmet": "skyhighheroes:lucas/lucas_stelar_helmet.tx.json",
  "helmet_lights": "skyhighheroes:lucas/lucas_stelar_helmet_lights.tx.json",
  "helmet_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_helmet_wave_changing_lights.tx.json",
  "predation_sides_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_predation_sides_wave_changing_lights.tx.json",
  "predation_front_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_predation_front_wave_changing_lights.tx.json",
  "sword_blade": "skyhighheroes:lucas/lucas_stelar_sword_blade.tx.json",
  "sword": "skyhighheroes:lucas/lucas_stelar_sword.tx.json",
  "sword_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:lucas/lucas_stelar_sword_sides.tx.json",
  "sword_front": "skyhighheroes:lucas/lucas_stelar_sword_front.tx.json",
  "asteroid_pull_sides": "skyhighheroes:lucas/lucas_stelar_asteroid_pull_sides.tx.json",
  "asteroid_pull_front": "skyhighheroes:lucas/lucas_stelar_asteroid_pull_front.tx.json",
  "asteroid_pull_front_lights": "skyhighheroes:lucas/lucas_stelar_asteroid_pull_front_lights.tx.json",
  "asteroid_blast_sides": "skyhighheroes:lucas/lucas_stelar_asteroid_blast_sides.tx.json",
  "asteroid_blast_front": "skyhighheroes:lucas/lucas_stelar_asteroid_blast_front.tx.json",
  "asteroid_blast_front_lights": "skyhighheroes:lucas/lucas_stelar_asteroid_blast_front_lights.tx.json",
  "asteroid_crash_sides": "skyhighheroes:lucas/lucas_stelar_asteroid_crash_sides.tx.json",
  "asteroid_crash_front": "skyhighheroes:lucas/lucas_stelar_asteroid_crash_front.tx.json",
  "head_right": "skyhighheroes:lucas/lucas_stelar_crimson_right.tx.json",
  "head_right_wave_change": "skyhighheroes:lucas/lucas_stelar_crimson_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:lucas/lucas_stelar_crimson_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:lucas/lucas_stelar_crimson_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_crimson_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:lucas/lucas_stelar_crimson_left.tx.json",
  "head_left_wave_change": "skyhighheroes:lucas/lucas_stelar_crimson_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:lucas/lucas_stelar_crimson_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:lucas/lucas_stelar_crimson_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_crimson_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:lucas/lucas_stelar_crimson_top.tx.json",
  "head_top_wave_change": "skyhighheroes:lucas/lucas_stelar_crimson_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:lucas/lucas_stelar_crimson_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:lucas/lucas_stelar_crimson_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_crimson_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:lucas/lucas_stelar_crimson_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:lucas/lucas_stelar_crimson_bottom_wave_change.tx.json",
  "head_bottom_lights": "skyhighheroes:lucas/lucas_stelar_crimson_bottom_lights.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:lucas/lucas_stelar_crimson_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_crimson_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:lucas/lucas_stelar_crimson_front.tx.json",
  "head_front_wave_change": "skyhighheroes:lucas/lucas_stelar_crimson_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:lucas/lucas_stelar_crimson_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:lucas/lucas_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:lucas/lucas_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:lucas/lucas_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:lucas/lucas_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:lucas/lucas_stelar_transer",
  "transer_default_lights": "skyhighheroes:lucas/lucas_stelar_transer_lights",
  "shield": "skyhighheroes:lucas/lucas_stelar_shield",
  "shield_lights": "skyhighheroes:lucas/lucas_stelar_shield_lights",
  "katana": "skyhighheroes:lucas/lucas_stelar_katana",
  "katana_lights": "skyhighheroes:lucas/lucas_stelar_katana_lights",
  "scythe": "skyhighheroes:lucas/lucas_stelar_scythe",
  "scythe_lights": "skyhighheroes:lucas/lucas_stelar_scythe_lights",
  "rifle": "skyhighheroes:lucas/lucas_stelar_rifle",
  "rifle_lights": "skyhighheroes:lucas/lucas_stelar_rifle_lights"
});

function getColor() {
  return 0xFF0000;
};

function getID() {
  return "c4bc5db6-3cf6-44fe-8427-304a7b211bc4";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  stelar.addAnimationWithData(renderer, "stelar.ASTEROID_BLAST_AIM", "skyhighheroes:stelar_aim", "fiskheroes:energy_projection_timer")
  .priority = 10;
  stelar.addAnimationWithData(renderer, "stelar.ASTEROID_PULL_AIM", "skyhighheroes:stelar_aim", "skyhighheroes:dyn/telekinesis_timer")
  .priority = 10;
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  helmetWaveChangingLights = renderer.createEffect("fiskheroes:overlay");
  helmetWaveChangingLights.texture.set(null, "helmet_wave_changing_lights");
  helmet = renderer.createEffect("fiskheroes:overlay");
  helmet.texture.set("helmet", "helmet_lights");
  stelar.bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:wave_asteroid_blast_lucas", "rightArm", 0xFF0000, [
    { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [4.0, 4.0] }
  ]);
  stuff.bindCloud(renderer, "fiskheroes:telekinesis", "skyhighheroes:wave_asteroid_pull_lucas");
  var chain = stuff.bindCloud(renderer, "fiskheroes:telekinesis_chain", "skyhighheroes:wave_asteroid_pull_lucas");
  chain.anchor.set("rightArm");
  chain.setOffset(-0.5, 10.0, 0.0);
  chain.setFirstPerson(-4.75, 4.0, -8.5);
  stuff.bindFlightTrail(renderer, "skyhighheroes:lucas_stelar_flight");
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
  //Asteroid Crash
  //Right
  asteroidCrashRight = renderer.createEffect("fiskheroes:shield");
  asteroidCrashRight.texture.set("asteroid_crash_sides");
  asteroidCrashRight.anchor.set("rightArm");
  asteroidCrashRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  asteroidCrashRight.large = true;
  //Left
  asteroidCrashLeft = renderer.createEffect("fiskheroes:shield");
  asteroidCrashLeft.texture.set("asteroid_crash_sides");
  asteroidCrashLeft.anchor.set("rightArm");
  asteroidCrashLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  asteroidCrashLeft.large = true;
  //Top
  asteroidCrashTop = renderer.createEffect("fiskheroes:shield");
  asteroidCrashTop.texture.set("asteroid_crash_sides");
  asteroidCrashTop.anchor.set("rightArm");
  asteroidCrashTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  asteroidCrashTop.large = true;
  //Bottom
  asteroidCrashBottom = renderer.createEffect("fiskheroes:shield");
  asteroidCrashBottom.texture.set("asteroid_crash_sides");
  asteroidCrashBottom.anchor.set("rightArm");
  asteroidCrashBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  asteroidCrashBottom.large = true;
  //Front
  asteroidCrashFront = renderer.createEffect("fiskheroes:shield");
  asteroidCrashFront.texture.set("asteroid_crash_front");
  asteroidCrashFront.anchor.set("rightArm");
  asteroidCrashFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  asteroidCrashFront.large = true;
  //Asteroid Blast
  //Right
  asteroidBlastRight = renderer.createEffect("fiskheroes:shield");
  asteroidBlastRight.texture.set("asteroid_blast_sides");
  asteroidBlastRight.anchor.set("rightArm");
  asteroidBlastRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  asteroidBlastRight.large = true;
  //Left
  asteroidBlastLeft = renderer.createEffect("fiskheroes:shield");
  asteroidBlastLeft.texture.set("asteroid_blast_sides");
  asteroidBlastLeft.anchor.set("rightArm");
  asteroidBlastLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  asteroidBlastLeft.large = true;
  //Top
  asteroidBlastTop = renderer.createEffect("fiskheroes:shield");
  asteroidBlastTop.texture.set("asteroid_blast_sides");
  asteroidBlastTop.anchor.set("rightArm");
  asteroidBlastTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  asteroidBlastTop.large = true;
  //Bottom
  asteroidBlastBottom = renderer.createEffect("fiskheroes:shield");
  asteroidBlastBottom.texture.set("asteroid_blast_sides");
  asteroidBlastBottom.anchor.set("rightArm");
  asteroidBlastBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  asteroidBlastBottom.large = true;
  //Front
  asteroidBlastFront = renderer.createEffect("fiskheroes:shield");
  asteroidBlastFront.texture.set("asteroid_blast_front", "asteroid_blast_front_lights");
  asteroidBlastFront.anchor.set("rightArm");
  asteroidBlastFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  asteroidBlastFront.large = true;
  //Asteroid Pull
  //Right
  asteroidPullRight = renderer.createEffect("fiskheroes:shield");
  asteroidPullRight.texture.set("asteroid_pull_sides");
  asteroidPullRight.anchor.set("rightArm");
  asteroidPullRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  asteroidPullRight.large = true;
  //Left
  asteroidPullLeft = renderer.createEffect("fiskheroes:shield");
  asteroidPullLeft.texture.set("asteroid_pull_sides");
  asteroidPullLeft.anchor.set("rightArm");
  asteroidPullLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  asteroidPullLeft.large = true;
  //Top
  asteroidPullTop = renderer.createEffect("fiskheroes:shield");
  asteroidPullTop.texture.set("asteroid_pull_sides");
  asteroidPullTop.anchor.set("rightArm");
  asteroidPullTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  asteroidPullTop.large = true;
  //Bottom
  asteroidPullBottom = renderer.createEffect("fiskheroes:shield");
  asteroidPullBottom.texture.set("asteroid_pull_sides");
  asteroidPullBottom.anchor.set("rightArm");
  asteroidPullBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  asteroidPullBottom.large = true;
  //Front
  asteroidPullFront = renderer.createEffect("fiskheroes:shield");
  asteroidPullFront.texture.set("asteroid_pull_front", "asteroid_pull_front_lights");
  asteroidPullFront.anchor.set("rightArm");
  asteroidPullFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  asteroidPullFront.large = true;
  //Sword
  swordMain = renderer.createEffect("fiskheroes:shield");
  swordMain.texture.set("sword");
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
  headFront.texture.set("head_front", null);
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
    if ((entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("fiskheroes:mask_open_timer2") > 0) || (entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND")) {
      helmetWaveChangingLights.render();
      helmet.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 || ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW"))) {
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
        headRightWaveChange.render();
        headLeftWaveChange.render();
        headTopWaveChange.render();
        headBottomWaveChange.render();
        headFrontWaveChange.render();
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/asteroid_crash_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/asteroid_pull_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/asteroid_blast_timer") < 1)) {
        headRight.render();
        headLeft.render();
        headTop.render();
        headBottom.render();
        headFront.render();
      }
      if ((entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/asteroid_crash_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/asteroid_pull_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/asteroid_blast_timer") < 1)) {
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
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/asteroid_crash_timer") > 0) {
      asteroidCrashRight.render();
      asteroidCrashLeft.render();
      asteroidCrashTop.render();
      asteroidCrashBottom.render();
      asteroidCrashFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/asteroid_pull_timer") > 0) {
      asteroidPullRight.render();
      asteroidPullLeft.render();
      asteroidPullTop.render();
      asteroidPullBottom.render();
      asteroidPullFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/asteroid_blast_timer") > 0) {
      asteroidBlastRight.render();
      asteroidBlastLeft.render();
      asteroidBlastTop.render();
      asteroidBlastBottom.render();
      asteroidBlastFront.render();
    };
  };
};