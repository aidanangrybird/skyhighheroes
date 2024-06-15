extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:cash/cash_stelar_base",
  "lights": "skyhighheroes:cash/cash_stelar_lights",
  "base_wave_change": "skyhighheroes:cash/cash_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:cash/cash_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:cash/cash_stelar_wave_changing_lights.tx.json",
  "predation_sides_wave_changing_lights": "skyhighheroes:cash/cash_stelar_predation_sides_wave_changing_lights.tx.json",
  "predation_front_wave_changing_lights": "skyhighheroes:cash/cash_stelar_predation_front_wave_changing_lights.tx.json",
  "sword_blade": "skyhighheroes:cash/cash_stelar_sword_blade.tx.json",
  "sword": "skyhighheroes:cash/cash_stelar_sword.tx.json",
  "sword_wave_changing_lights": "skyhighheroes:cash/cash_stelar_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:cash/cash_stelar_sword_sides.tx.json",
  "sword_front": "skyhighheroes:cash/cash_stelar_sword_front.tx.json",
  "astroid_blast_sides": "skyhighheroes:cash/cash_stelar_astroid_blast_sides.tx.json",
  "astroid_blast_front": "skyhighheroes:cash/cash_stelar_astroid_blast_front.tx.json",
  "astroid_blast_front_lights": "skyhighheroes:cash/cash_stelar_astroid_blast_front_lights.tx.json",
  "star_cutter_sides": "skyhighheroes:cash/cash_stelar_star_cutter_sides.tx.json",
  "star_cutter_front": "skyhighheroes:cash/cash_stelar_star_cutter_front.tx.json",
  "star_cutter_front_lights": "skyhighheroes:cash/cash_stelar_star_cutter_front_lights.tx.json",
  "gravity_pulse_sides": "skyhighheroes:cash/cash_stelar_gravity_pulse_sides.tx.json",
  "gravity_pulse_front": "skyhighheroes:cash/cash_stelar_gravity_pulse_front.tx.json",
  "gravity_pulse_front_lights": "skyhighheroes:cash/cash_stelar_gravity_pulse_front_lights.tx.json",
  "head_right": "skyhighheroes:cash/cash_stelar_amethyst_right.tx.json",
  "head_right_wave_change": "skyhighheroes:cash/cash_stelar_amethyst_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:cash/cash_stelar_amethyst_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:cash/cash_stelar_amethyst_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:cash/cash_stelar_amethyst_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:cash/cash_stelar_amethyst_left.tx.json",
  "head_left_wave_change": "skyhighheroes:cash/cash_stelar_amethyst_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:cash/cash_stelar_amethyst_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:cash/cash_stelar_amethyst_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:cash/cash_stelar_amethyst_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:cash/cash_stelar_amethyst_top.tx.json",
  "head_top_wave_change": "skyhighheroes:cash/cash_stelar_amethyst_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:cash/cash_stelar_amethyst_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:cash/cash_stelar_amethyst_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:cash/cash_stelar_amethyst_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:cash/cash_stelar_amethyst_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:cash/cash_stelar_amethyst_bottom_wave_change.tx.json",
  "head_bottom_lights": "skyhighheroes:cash/cash_stelar_amethyst_bottom_lights.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:cash/cash_stelar_amethyst_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:cash/cash_stelar_amethyst_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:cash/cash_stelar_amethyst_front.tx.json",
  "head_front_wave_change": "skyhighheroes:cash/cash_stelar_amethyst_front_wave_change.tx.json",
  "head_front_lights": "skyhighheroes:cash/cash_stelar_amethyst_front_lights.tx.json",
  "head_front_wave_change_lights": "skyhighheroes:cash/cash_stelar_amethyst_front_wave_change_lights.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:cash/cash_stelar_amethyst_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:cash/cash_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:cash/cash_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:cash/cash_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:cash/cash_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:cash/cash_stelar_transer",
  "transer_default_lights": "skyhighheroes:cash/cash_stelar_transer_lights",
  "shield": "skyhighheroes:cash/cash_stelar_shield",
  "shield_lights": "skyhighheroes:cash/cash_stelar_shield_lights",
  "katana": "skyhighheroes:cash/cash_stelar_katana",
  "katana_lights": "skyhighheroes:cash/cash_stelar_katana_lights",
  "scythe": "skyhighheroes:cash/cash_stelar_scythe",
  "scythe_lights": "skyhighheroes:cash/cash_stelar_scythe_lights",
  "rifle": "skyhighheroes:cash/cash_stelar_rifle",
  "rifle_lights": "skyhighheroes:cash/cash_stelar_rifle_lights"
});

function getColor() {
  return 0xD000FF;
};

function getID() {
  return "2389f9cd-351e-4d96-a277-847a24fd9048";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  stelar.addAnimationWithData(renderer, "stelar.GALAXYS_PULSE_AIM", "skyhighheroes:stelar_aim", "skyhighheroes:dyn/gravity_manip_timer")
  .priority = 10;
  stelar.addAnimationWithData(renderer, "stelar.ASTROID_BLAST_AIM", "skyhighheroes:stelar_aim", "fiskheroes:energy_projection_timer")
  .priority = 10;
  stelar.addAnimationWithData(renderer, "stelar.STAR_CUTTER_AIM", "skyhighheroes:stelar_aim", "fiskheroes:beam_charge")
  .priority = 10;
  renderer.setItemIcon("CHESTPLATE", "dragon_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stelar.bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:wave_astroid_blast_cash", "rightArm", 0xD000FF, [
    { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [4.0, 4.0] }
  ]);
  stelar.bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:wave_star_cutter_cash", "rightArm", 0xD000FF, [
      { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [5.0, 5.0] }
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  renderer.bindProperty("fiskheroes:gravity_manipulation").color.set(0xD000FF);
  stuff.bindFlightTrail(renderer, "skyhighheroes:cash_stelar_flight");
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
  //Gravity Pulse
  //Right
  gravityPulseRight = renderer.createEffect("fiskheroes:shield");
  gravityPulseRight.texture.set("gravity_pulse_sides");
  gravityPulseRight.anchor.set("rightArm");
  gravityPulseRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  gravityPulseRight.large = true;
  //Left
  gravityPulseLeft = renderer.createEffect("fiskheroes:shield");
  gravityPulseLeft.texture.set("gravity_pulse_sides");
  gravityPulseLeft.anchor.set("rightArm");
  gravityPulseLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  gravityPulseLeft.large = true;
  //Top
  gravityPulseTop = renderer.createEffect("fiskheroes:shield");
  gravityPulseTop.texture.set("gravity_pulse_sides");
  gravityPulseTop.anchor.set("rightArm");
  gravityPulseTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  gravityPulseTop.large = true;
  //Bottom
  gravityPulseBottom = renderer.createEffect("fiskheroes:shield");
  gravityPulseBottom.texture.set("gravity_pulse_sides");
  gravityPulseBottom.anchor.set("rightArm");
  gravityPulseBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  gravityPulseBottom.large = true;
  //Front
  gravityPulseFront = renderer.createEffect("fiskheroes:shield");
  gravityPulseFront.texture.set("gravity_pulse_front", "gravity_pulse_front_lights");
  gravityPulseFront.anchor.set("rightArm");
  gravityPulseFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  gravityPulseFront.large = true;
  //Star Cutter
  //Right
  starCutterRight = renderer.createEffect("fiskheroes:shield");
  starCutterRight.texture.set("star_cutter_sides");
  starCutterRight.anchor.set("rightArm");
  starCutterRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  starCutterRight.large = true;
  //Left
  starCutterLeft = renderer.createEffect("fiskheroes:shield");
  starCutterLeft.texture.set("star_cutter_sides");
  starCutterLeft.anchor.set("rightArm");
  starCutterLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  starCutterLeft.large = true;
  //Top
  starCutterTop = renderer.createEffect("fiskheroes:shield");
  starCutterTop.texture.set("star_cutter_sides");
  starCutterTop.anchor.set("rightArm");
  starCutterTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  starCutterTop.large = true;
  //Bottom
  starCutterBottom = renderer.createEffect("fiskheroes:shield");
  starCutterBottom.texture.set("star_cutter_sides");
  starCutterBottom.anchor.set("rightArm");
  starCutterBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  starCutterBottom.large = true;
  //Front
  starCutterFront = renderer.createEffect("fiskheroes:shield");
  starCutterFront.texture.set("star_cutter_front", "star_cutter_front_lights");
  starCutterFront.anchor.set("rightArm");
  starCutterFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  starCutterFront.large = true;
  //Astroid Blast
  //Right
  astroidBlastRight = renderer.createEffect("fiskheroes:shield");
  astroidBlastRight.texture.set("astroid_blast_sides");
  astroidBlastRight.anchor.set("rightArm");
  astroidBlastRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  astroidBlastRight.large = true;
  //Left
  astroidBlastLeft = renderer.createEffect("fiskheroes:shield");
  astroidBlastLeft.texture.set("astroid_blast_sides");
  astroidBlastLeft.anchor.set("rightArm");
  astroidBlastLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  astroidBlastLeft.large = true;
  //Top
  astroidBlastTop = renderer.createEffect("fiskheroes:shield");
  astroidBlastTop.texture.set("astroid_blast_sides");
  astroidBlastTop.anchor.set("rightArm");
  astroidBlastTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  astroidBlastTop.large = true;
  //Bottom
  astroidBlastBottom = renderer.createEffect("fiskheroes:shield");
  astroidBlastBottom.texture.set("astroid_blast_sides");
  astroidBlastBottom.anchor.set("rightArm");
  astroidBlastBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  astroidBlastBottom.large = true;
  //Front
  astroidBlastFront = renderer.createEffect("fiskheroes:shield");
  astroidBlastFront.texture.set("astroid_blast_front", "astroid_blast_front_lights");
  astroidBlastFront.anchor.set("rightArm");
  astroidBlastFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  astroidBlastFront.large = true;
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
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/gravity_pulse_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/astroid_blast_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/star_cutter_timer") < 1)) {
        headRight.render();
        headLeft.render();
        headTop.render();
        headBottom.render();
        headFront.render();
      }
      if ((entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/gravity_pulse_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/astroid_blast_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/star_cutter_timer") < 1)) {
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
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/gravity_pulse_timer") > 0) {
      gravityPulseRight.render();
      gravityPulseLeft.render();
      gravityPulseTop.render();
      gravityPulseBottom.render();
      gravityPulseFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/astroid_blast_timer") > 0) {
      astroidBlastRight.render();
      astroidBlastLeft.render();
      astroidBlastTop.render();
      astroidBlastBottom.render();
      astroidBlastFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/star_cutter_timer") > 0) {
      starCutterRight.render();
      starCutterLeft.render();
      starCutterTop.render();
      starCutterBottom.render();
      starCutterFront.render();
    };
  };
};