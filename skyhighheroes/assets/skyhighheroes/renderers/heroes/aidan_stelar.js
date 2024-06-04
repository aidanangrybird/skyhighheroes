extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:aidan/aidan_stelar_base",
  "lights": "skyhighheroes:aidan/aidan_stelar_lights",
  "base_wave_change": "skyhighheroes:aidan/aidan_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:aidan/aidan_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_wave_changing_lights.tx.json",
  "helmet": "skyhighheroes:aidan/aidan_stelar_helmet.tx.json",
  "helmet_lights": "skyhighheroes:aidan/aidan_stelar_helmet_lights.tx.json",
  "helmet_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_helmet_wave_changing_lights.tx.json",
  "predation_sides_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_predation_sides_wave_changing_lights.tx.json",
  "predation_front_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_predation_front_wave_changing_lights.tx.json",
  "sword_blade": "skyhighheroes:aidan/aidan_stelar_sword_blade.tx.json",
  "sword": "skyhighheroes:aidan/aidan_stelar_sword.tx.json",
  "sword_lights": "skyhighheroes:aidan/aidan_stelar_sword_lights.tx.json",
  "sword_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:aidan/aidan_stelar_sword_sides.tx.json",
  "sword_front": "skyhighheroes:aidan/aidan_stelar_sword_front.tx.json",
  "derecho_sides": "skyhighheroes:aidan/aidan_stelar_derecho_sides.tx.json",
  "derecho_front": "skyhighheroes:aidan/aidan_stelar_derecho_front.tx.json",
  "hail_cannon_sides": "skyhighheroes:aidan/aidan_stelar_hail_cannon_sides.tx.json",
  "hail_cannon_front": "skyhighheroes:aidan/aidan_stelar_hail_cannon_front.tx.json",
  "lightning_sides": "skyhighheroes:aidan/aidan_stelar_lightning_sides.tx.json",
  "lightning_front": "skyhighheroes:aidan/aidan_stelar_lightning_front.tx.json",
  "lightning_sides_lights": "skyhighheroes:aidan/aidan_stelar_lightning_sides_lights.tx.json",
  "lightning_front_lights": "skyhighheroes:aidan/aidan_stelar_lightning_front_lights.tx.json",
  "head_right": "skyhighheroes:aidan/aidan_stelar_jet_streak_right.tx.json",
  "head_right_wave_change": "skyhighheroes:aidan/aidan_stelar_jet_streak_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:aidan/aidan_stelar_jet_streak_left.tx.json",
  "head_left_wave_change": "skyhighheroes:aidan/aidan_stelar_jet_streak_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:aidan/aidan_stelar_jet_streak_top.tx.json",
  "head_top_wave_change": "skyhighheroes:aidan/aidan_stelar_jet_streak_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:aidan/aidan_stelar_jet_streak_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:aidan/aidan_stelar_jet_streak_bottom_wave_change.tx.json",
  "head_bottom_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_bottom_lights.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:aidan/aidan_stelar_jet_streak_front.tx.json",
  "head_front_wave_change": "skyhighheroes:aidan/aidan_stelar_jet_streak_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:aidan/aidan_stelar_jet_streak_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:aidan/aidan_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:aidan/aidan_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:aidan/aidan_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:aidan/aidan_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:aidan/aidan_stelar_transer",
  "transer_default_lights": "skyhighheroes:aidan/aidan_stelar_transer_lights",
  "shield": "skyhighheroes:aidan/aidan_stelar_shield",
  "shield_lights": "skyhighheroes:aidan/aidan_stelar_shield_lights",
  "katana": "skyhighheroes:aidan/aidan_stelar_katana",
  "katana_lights": "skyhighheroes:aidan/aidan_stelar_katana_lights",
  "scythe": "skyhighheroes:aidan/aidan_stelar_scythe",
  "scythe_lights": "skyhighheroes:aidan/aidan_stelar_scythe_lights",
  "rifle": "skyhighheroes:aidan/aidan_stelar_rifle",
  "rifle_lights": "skyhighheroes:aidan/aidan_stelar_rifle_lights"
});

function getColor() {
  return 0xFF8900;
};

function getID() {
  return "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  stelar.addAnimationWithData(renderer, "stelar.DERECHO_AIM", "skyhighheroes:stelar_aim", "fiskheroes:energy_projection_timer")
  .priority = 10;
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  helmetWaveChangingLights = renderer.createEffect("fiskheroes:overlay");
  helmetWaveChangingLights.texture.set(null, "helmet_wave_changing_lights");
  helmet = renderer.createEffect("fiskheroes:overlay");
  helmet.texture.set("helmet", "helmet_lights");
  stelar.bindBeam(renderer, "fiskheroes:lightning_cast", "skyhighheroes:wave_lightning_aidan", "rightArm", 0xFFFF00, [
    { "firstPerson": [-8.0, 4.5, -10.0], "offset": [-0.5, 9.0, 0.0], "size": [1.0, 1.0] }
  ]);
  stelar.bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:wave_derecho_aidan", "rightArm", 0x777777, [
    { "firstPerson": [-4.5, 4.5, -20.0], "offset": [-0.5, 14.0, 0.0], "size": [50.0, 50.0] }
  ]);
  stuff.bindFlightTrail(renderer, "skyhighheroes:aidan_stelar_flight");
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
  //Lightning
  //Right
  lightningRight = renderer.createEffect("fiskheroes:shield");
  lightningRight.texture.set("lightning_sides", "lightning_sides_lights");
  lightningRight.anchor.set("rightArm");
  lightningRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  lightningRight.large = true;
  //Left
  lightningLeft = renderer.createEffect("fiskheroes:shield");
  lightningLeft.texture.set("lightning_sides", "lightning_sides_lights");
  lightningLeft.anchor.set("rightArm");
  lightningLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  lightningLeft.large = true;
  //Top
  lightningTop = renderer.createEffect("fiskheroes:shield");
  lightningTop.texture.set("lightning_sides", "lightning_sides_lights");
  lightningTop.anchor.set("rightArm");
  lightningTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  lightningTop.large = true;
  //Bottom
  lightningBottom = renderer.createEffect("fiskheroes:shield");
  lightningBottom.texture.set("lightning_sides", "lightning_sides_lights");
  lightningBottom.anchor.set("rightArm");
  lightningBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  lightningBottom.large = true;
  //Front
  lightningFront = renderer.createEffect("fiskheroes:shield");
  lightningFront.texture.set("lightning_front", "lightning_front_lights");
  lightningFront.anchor.set("rightArm");
  lightningFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  lightningFront.large = true;
  //Hail cannon
  //Right
  hailCannonRight = renderer.createEffect("fiskheroes:shield");
  hailCannonRight.texture.set("hail_cannon_sides");
  hailCannonRight.anchor.set("rightArm");
  hailCannonRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  hailCannonRight.large = true;
  //Left
  hailCannonLeft = renderer.createEffect("fiskheroes:shield");
  hailCannonLeft.texture.set("hail_cannon_sides");
  hailCannonLeft.anchor.set("rightArm");
  hailCannonLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  hailCannonLeft.large = true;
  //Top
  hailCannonTop = renderer.createEffect("fiskheroes:shield");
  hailCannonTop.texture.set("hail_cannon_sides");
  hailCannonTop.anchor.set("rightArm");
  hailCannonTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  hailCannonTop.large = true;
  //Bottom
  hailCannonBottom = renderer.createEffect("fiskheroes:shield");
  hailCannonBottom.texture.set("hail_cannon_sides");
  hailCannonBottom.anchor.set("rightArm");
  hailCannonBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  hailCannonBottom.large = true;
  //Front
  hailCannonFront = renderer.createEffect("fiskheroes:shield");
  hailCannonFront.texture.set("hail_cannon_front");
  hailCannonFront.anchor.set("rightArm");
  hailCannonFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  hailCannonFront.large = true;
  //Derecho
  //Right
  derechoRight = renderer.createEffect("fiskheroes:shield");
  derechoRight.texture.set("derecho_sides");
  derechoRight.anchor.set("rightArm");
  derechoRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  derechoRight.large = true;
  //Left
  derechoLeft = renderer.createEffect("fiskheroes:shield");
  derechoLeft.texture.set("derecho_sides");
  derechoLeft.anchor.set("rightArm");
  derechoLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  derechoLeft.large = true;
  //Top
  derechoTop = renderer.createEffect("fiskheroes:shield");
  derechoTop.texture.set("derecho_sides");
  derechoTop.anchor.set("rightArm");
  derechoTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  derechoTop.large = true;
  //Bottom
  derechoBottom = renderer.createEffect("fiskheroes:shield");
  derechoBottom.texture.set("derecho_sides");
  derechoBottom.anchor.set("rightArm");
  derechoBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  derechoBottom.large = true;
  //Front
  derechoFront = renderer.createEffect("fiskheroes:shield");
  derechoFront.texture.set("derecho_front");
  derechoFront.anchor.set("rightArm");
  derechoFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  derechoFront.large = true;
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
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/lightning_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/derecho_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/hail_cannon_timer") < 1)) {
        headRight.render();
        headLeft.render();
        headTop.render();
        headBottom.render();
        headFront.render();
      }
      if ((entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/lightning_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/derecho_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/hail_cannon_timer") < 1)) {
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
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/lightning_timer") > 0) {
      lightningRight.render();
      lightningLeft.render();
      lightningTop.render();
      lightningBottom.render();
      lightningFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/derecho_timer") > 0) {
      derechoRight.render();
      derechoLeft.render();
      derechoTop.render();
      derechoBottom.render();
      derechoFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/hail_cannon_timer") > 0) {
      hailCannonRight.render();
      hailCannonLeft.render();
      hailCannonTop.render();
      hailCannonBottom.render();
      hailCannonFront.render();
    };
  };
};