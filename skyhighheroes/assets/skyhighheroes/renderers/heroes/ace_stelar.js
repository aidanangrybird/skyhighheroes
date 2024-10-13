extend("skyhighheroes:base_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:ace/ace_stelar_base",
  "lights": "skyhighheroes:ace/ace_stelar_lights",
  "base_wave_change": "skyhighheroes:ace/ace_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:ace/ace_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:ace/ace_stelar_wave_changing_lights.tx.json",
  "predation_sides_wave_changing_lights": "skyhighheroes:ace/ace_stelar_predation_sides_wave_changing_lights.tx.json",
  "predation_front_wave_changing_lights": "skyhighheroes:ace/ace_stelar_predation_front_wave_changing_lights.tx.json",
  "sword_blade": "skyhighheroes:ace/ace_stelar_sword_blade.tx.json",
  "sword": "skyhighheroes:ace/ace_stelar_sword.tx.json",
  "sword_wave_changing_lights": "skyhighheroes:ace/ace_stelar_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:ace/ace_stelar_sword_sides.tx.json",
  "sword_front": "skyhighheroes:ace/ace_stelar_sword_front.tx.json",
  "solar_wind_sides": "skyhighheroes:ace/ace_stelar_solar_wind_sides.tx.json",
  "solar_wind_front": "skyhighheroes:ace/ace_stelar_solar_wind_front.tx.json",
  "solar_wind_front_lights": "skyhighheroes:ace/ace_stelar_solar_wind_front_lights.tx.json",
  "solar_blast_sides": "skyhighheroes:ace/ace_stelar_solar_blast_sides.tx.json",
  "solar_blast_front": "skyhighheroes:ace/ace_stelar_solar_blast_front.tx.json",
  "solar_blast_front_lights": "skyhighheroes:ace/ace_stelar_solar_blast_front_lights.tx.json",
  "solar_flare_sides": "skyhighheroes:ace/ace_stelar_solar_flare_sides.tx.json",
  "solar_flare_front": "skyhighheroes:ace/ace_stelar_solar_flare_front.tx.json",
  "solar_flare_sides_lights": "skyhighheroes:ace/ace_stelar_solar_flare_sides_lights.tx.json",
  "solar_flare_front_lights": "skyhighheroes:ace/ace_stelar_solar_flare_front_lights.tx.json",
  "head_right": "skyhighheroes:ace/ace_stelar_flame_right.tx.json",
  "head_right_wave_change": "skyhighheroes:ace/ace_stelar_flame_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:ace/ace_stelar_flame_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:ace/ace_stelar_flame_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:ace/ace_stelar_flame_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:ace/ace_stelar_flame_left.tx.json",
  "head_left_wave_change": "skyhighheroes:ace/ace_stelar_flame_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:ace/ace_stelar_flame_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:ace/ace_stelar_flame_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:ace/ace_stelar_flame_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:ace/ace_stelar_flame_top.tx.json",
  "head_top_wave_change": "skyhighheroes:ace/ace_stelar_flame_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:ace/ace_stelar_flame_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:ace/ace_stelar_flame_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:ace/ace_stelar_flame_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:ace/ace_stelar_flame_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:ace/ace_stelar_flame_bottom_wave_change.tx.json",
  "head_bottom_lights": "skyhighheroes:ace/ace_stelar_flame_bottom_lights.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:ace/ace_stelar_flame_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:ace/ace_stelar_flame_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:ace/ace_stelar_flame_front.tx.json",
  "head_front_wave_change": "skyhighheroes:ace/ace_stelar_flame_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:ace/ace_stelar_flame_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:ace/ace_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:ace/ace_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:ace/ace_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:ace/ace_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:ace/ace_stelar_transer",
  "transer_default_lights": "skyhighheroes:ace/ace_stelar_transer_lights",
  "shield": "skyhighheroes:ace/ace_stelar_shield",
  "shield_lights": "skyhighheroes:ace/ace_stelar_shield_lights",
  "katana": "skyhighheroes:ace/ace_stelar_katana",
  "katana_lights": "skyhighheroes:ace/ace_stelar_katana_lights",
  "scythe": "skyhighheroes:ace/ace_stelar_scythe",
  "scythe_lights": "skyhighheroes:ace/ace_stelar_scythe_lights",
  "rifle": "skyhighheroes:ace/ace_stelar_rifle",
  "rifle_lights": "skyhighheroes:ace/ace_stelar_rifle_lights"
});

function getColor() {
  return 0xFF0000;
};

function getID() {
  return "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0";
};

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  stelar.addAnimationWithData(renderer, "stelar.SOLAR_WIND_AIM", "skyhighheroes:stelar_aim", "fiskheroes:energy_projection_timer")
  .priority = 10;
  stelar.addAnimationWithData(renderer, "stelar.SOLAR_BLAST_AIM", "skyhighheroes:stelar_aim", "fiskheroes:beam_charge")
  .priority = 10;
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stelar.bindBeam(renderer, "fiskheroes:lightning_cast", "fiskheroes:lightning_cast", "rightArm", 0xFF0000, [
    { "firstPerson": [-8.0, 4.5, -10.0], "offset": [-0.5, 9.0, 0.0], "size": [1.0, 1.0] }
  ]);
  stelar.bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:wave_solar_wind_ace", "rightArm", 0xFF0000, [
    { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [6.0, 6.0] }
  ]);
  stelar.bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:wave_solar_blast_ace", "rightArm", 0xFF0000, [
    { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-1.0, 9.0, -0.5], "size": [3.0, 3.0] }
  ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  stuff.bindFlightTrail(renderer, "skyhighheroes:ace_stelar_flight");
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
  //solar Flare
  //Right
  solarFlareRight = renderer.createEffect("fiskheroes:shield");
  solarFlareRight.texture.set("solar_flare_sides", "solar_flare_sides_lights");
  solarFlareRight.anchor.set("rightArm");
  solarFlareRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  solarFlareRight.large = true;
  //Left
  solarFlareLeft = renderer.createEffect("fiskheroes:shield");
  solarFlareLeft.texture.set("solar_flare_sides", "solar_flare_sides_lights");
  solarFlareLeft.anchor.set("rightArm");
  solarFlareLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  solarFlareLeft.large = true;
  //Top
  solarFlareTop = renderer.createEffect("fiskheroes:shield");
  solarFlareTop.texture.set("solar_flare_sides", "solar_flare_sides_lights");
  solarFlareTop.anchor.set("rightArm");
  solarFlareTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  solarFlareTop.large = true;
  //Bottom
  solarFlareBottom = renderer.createEffect("fiskheroes:shield");
  solarFlareBottom.texture.set("solar_flare_sides", "solar_flare_sides_lights");
  solarFlareBottom.anchor.set("rightArm");
  solarFlareBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  solarFlareBottom.large = true;
  //Front
  solarFlareFront = renderer.createEffect("fiskheroes:shield");
  solarFlareFront.texture.set("solar_flare_front", "solar_flare_front_lights");
  solarFlareFront.anchor.set("rightArm");
  solarFlareFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  solarFlareFront.large = true;
  //Solar Blast
  //Right
  solarBlastRight = renderer.createEffect("fiskheroes:shield");
  solarBlastRight.texture.set("solar_blast_sides");
  solarBlastRight.anchor.set("rightArm");
  solarBlastRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  solarBlastRight.large = true;
  //Left
  solarBlastLeft = renderer.createEffect("fiskheroes:shield");
  solarBlastLeft.texture.set("solar_blast_sides");
  solarBlastLeft.anchor.set("rightArm");
  solarBlastLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  solarBlastLeft.large = true;
  //Top
  solarBlastTop = renderer.createEffect("fiskheroes:shield");
  solarBlastTop.texture.set("solar_blast_sides");
  solarBlastTop.anchor.set("rightArm");
  solarBlastTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  solarBlastTop.large = true;
  //Bottom
  solarBlastBottom = renderer.createEffect("fiskheroes:shield");
  solarBlastBottom.texture.set("solar_blast_sides");
  solarBlastBottom.anchor.set("rightArm");
  solarBlastBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  solarBlastBottom.large = true;
  //Front
  solarBlastFront = renderer.createEffect("fiskheroes:shield");
  solarBlastFront.texture.set("solar_blast_front", "solar_blast_front_lights");
  solarBlastFront.anchor.set("rightArm");
  solarBlastFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  solarBlastFront.large = true;
  //solarWind
  //Right
  solarWindRight = renderer.createEffect("fiskheroes:shield");
  solarWindRight.texture.set("solar_wind_sides");
  solarWindRight.anchor.set("rightArm");
  solarWindRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  solarWindRight.large = true;
  //Left
  solarWindLeft = renderer.createEffect("fiskheroes:shield");
  solarWindLeft.texture.set("solar_wind_sides");
  solarWindLeft.anchor.set("rightArm");
  solarWindLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  solarWindLeft.large = true;
  //Top
  solarWindTop = renderer.createEffect("fiskheroes:shield");
  solarWindTop.texture.set("solar_wind_sides");
  solarWindTop.anchor.set("rightArm");
  solarWindTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  solarWindTop.large = true;
  //Bottom
  solarWindBottom = renderer.createEffect("fiskheroes:shield");
  solarWindBottom.texture.set("solar_wind_sides");
  solarWindBottom.anchor.set("rightArm");
  solarWindBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  solarWindBottom.large = true;
  //Front
  solarWindFront = renderer.createEffect("fiskheroes:shield");
  solarWindFront.texture.set("solar_wind_front", "solar_wind_front_lights");
  solarWindFront.anchor.set("rightArm");
  solarWindFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  solarWindFront.large = true;
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
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 || ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW"))) {
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
        headRightWaveChange.render();
        headLeftWaveChange.render();
        headTopWaveChange.render();
        headBottomWaveChange.render();
        headFrontWaveChange.render();
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/solar_flare_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/solar_wind_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/solar_blast_timer") < 1)) {
        headRight.render();
        headLeft.render();
        headTop.render();
        headBottom.render();
        headFront.render();
      }
      if ((entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/solar_flare_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/solar_wind_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/solar_blast_timer") < 1)) {
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
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/solar_flare_timer") > 0) {
      solarFlareRight.render();
      solarFlareLeft.render();
      solarFlareTop.render();
      solarFlareBottom.render();
      solarFlareFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/solar_wind_timer") > 0) {
      solarWindRight.render();
      solarWindLeft.render();
      solarWindTop.render();
      solarWindBottom.render();
      solarWindFront.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/solar_blast_timer") > 0) {
      solarBlastRight.render();
      solarBlastLeft.render();
      solarBlastTop.render();
      solarBlastBottom.render();
      solarBlastFront.render();
    };
  };
};