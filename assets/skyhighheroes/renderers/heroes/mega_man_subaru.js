extend("skyhighheroes:mega_man");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:geo/mega_man_subaru_base",
  "lights": "skyhighheroes:geo/mega_man_subaru_lights",
  "base_wave_change": "skyhighheroes:geo/mega_man_subaru_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:geo/mega_man_subaru_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_wave_changing_lights.tx.json",
  "predation_sides_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_predation_sides_wave_changing_lights.tx.json",
  "predation_front_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_predation_front_wave_changing_lights.tx.json",
  "sword_blade": "skyhighheroes:geo/mega_man_sword_blade.tx.json",
  "sword": "skyhighheroes:geo/mega_man_subaru_sword.tx.json",
  "sword_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:geo/mega_man_subaru_sword_sides.tx.json",
  "sword_front": "skyhighheroes:geo/mega_man_subaru_sword_front.tx.json",
  "jet_attack_top": "skyhighheroes:geo/mega_man_jet_attack_top.tx.json",
  "jet_attack_bottom": "skyhighheroes:geo/mega_man_jet_attack_bottom.tx.json",
  "jet_attack_sides": "skyhighheroes:geo/mega_man_jet_attack_sides.tx.json",
  "jet_attack_front": "skyhighheroes:geo/mega_man_jet_attack_front.tx.json",
  "jet_attack_wings": "skyhighheroes:geo/mega_man_jet_attack_wings.tx.json",
  "jet_attack_wings_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_jet_attack_wings_wave_changing_lights.tx.json",
  "knuckle_top": "skyhighheroes:geo/mega_man_subaru_knuckle_top.tx.json",
  "knuckle_bottom": "skyhighheroes:geo/mega_man_subaru_knuckle_bottom.tx.json",
  "knuckle_right": "skyhighheroes:geo/mega_man_subaru_knuckle_right.tx.json",
  "knuckle_left": "skyhighheroes:geo/mega_man_subaru_knuckle_left.tx.json",
  "knuckle_front": "skyhighheroes:geo/mega_man_subaru_knuckle_front.tx.json",
  "cannon_sides": "skyhighheroes:geo/mega_man_subaru_cannon_sides.tx.json",
  "cannon_top": "skyhighheroes:geo/mega_man_subaru_cannon_top.tx.json",
  "cannon_bottom": "skyhighheroes:geo/mega_man_subaru_cannon_bottom.tx.json",
  "cannon_front": "skyhighheroes:geo/mega_man_subaru_cannon_front.tx.json",
  "head_right": "skyhighheroes:geo/omega_xis_subaru_right.tx.json",
  "head_right_wave_change": "skyhighheroes:geo/omega_xis_subaru_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:geo/omega_xis_subaru_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:geo/omega_xis_subaru_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:geo/omega_xis_subaru_left.tx.json",
  "head_left_wave_change": "skyhighheroes:geo/omega_xis_subaru_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:geo/omega_xis_subaru_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:geo/omega_xis_subaru_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:geo/omega_xis_subaru_top.tx.json",
  "head_top_wave_change": "skyhighheroes:geo/omega_xis_subaru_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:geo/omega_xis_subaru_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:geo/omega_xis_subaru_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:geo/omega_xis_subaru_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:geo/omega_xis_subaru_bottom_wave_change.tx.json",
  "head_bottom_lights": "skyhighheroes:geo/omega_xis_subaru_bottom_lights.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:geo/omega_xis_subaru_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:geo/omega_xis_subaru_front.tx.json",
  "head_front_wave_change": "skyhighheroes:geo/omega_xis_subaru_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_front_wave_changing_lights.tx.json",
  "hair_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_hair_wave_changing_lights.tx.json",
  "shield": "skyhighheroes:geo/mega_man_subaru_shield",
  "shield_lights": "skyhighheroes:geo/mega_man_subaru_shield_lights",
  "katana": "skyhighheroes:geo/mega_man_subaru_katana",
  "katana_lights": "skyhighheroes:geo/mega_man_subaru_katana_lights",
  "scythe": "skyhighheroes:geo/mega_man_subaru_scythe",
  "scythe_lights": "skyhighheroes:geo/mega_man_subaru_scythe_lights",
  "rifle": "skyhighheroes:geo/mega_man_subaru_rifle",
  "rifle_lights": "skyhighheroes:geo/mega_man_subaru_rifle_lights"
});

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
};

function initEffects(renderer) {
  hair = renderer.createEffect("fiskheroes:shield");
  hair.texture.set("hair");
  hair.anchor.set("head");
  hair.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
  hair.large = true;
  hairWaveChange = renderer.createEffect("fiskheroes:shield");
  hairWaveChange.texture.set(null, "hair_wave_changing_lights");
  hairWaveChange.anchor.set("head");
  hairWaveChange.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
  hairWaveChange.large = true;
  stelar.initNV(renderer);
  stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
  stelar.initForceField(renderer, 0x39D6BD);
  stelar.initMegaBuster(renderer, 0x39D6BD, 0x39D6BD);
  stelar.initLiveries(renderer);
  stuff.bindBeam(renderer, "fiskheroes:repulsor_blast", "fiskheroes:repulsor_blast", "rightArm", 0x39D6BD, [
      { "firstPerson": [-4.5, 3.75, -7.0], "offset": [-0.5, 9.0, 0.0], "size": [1.5, 1.5] }
  ]);
  stuff.bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:invisible", "rightArm", 0xFFFFFF, [
      { "firstPerson": [-4.5, 3.75, -7.0], "offset": [-0.5, 9.0, 0.0], "size": [1.5, 1.5] }
  ]);
  waveChangeLights = renderer.createEffect("fiskheroes:overlay");
  waveChangeLights.texture.set(null, "wave_changing_lights");
  ears = renderer.createEffect("fiskheroes:ears");
  ears.anchor.set("head");
  ears.angle = 0;
  ears.inset = -0.039;
  stuff.bindFlightTrail(renderer, "skyhighheroes:mega_man_subaru_flight");
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
  //Cannon
  //Right
  cannonRight = renderer.createEffect("fiskheroes:shield");
  cannonRight.texture.set("cannon_sides");
  cannonRight.anchor.set("rightArm");
  cannonRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  cannonRight.large = true;
  //Left
  cannonLeft = renderer.createEffect("fiskheroes:shield");
  cannonLeft.texture.set("cannon_sides");
  cannonLeft.anchor.set("rightArm");
  cannonLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  cannonLeft.large = true;
  //Top
  cannonTop = renderer.createEffect("fiskheroes:shield");
  cannonTop.texture.set("cannon_top");
  cannonTop.anchor.set("rightArm");
  cannonTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  cannonTop.large = true;
  //Bottom
  cannonBottom = renderer.createEffect("fiskheroes:shield");
  cannonBottom.texture.set("cannon_bottom");
  cannonBottom.anchor.set("rightArm");
  cannonBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  cannonBottom.large = true;
  //Front
  cannonFront = renderer.createEffect("fiskheroes:shield");
  cannonFront.texture.set("cannon_front");
  cannonFront.anchor.set("rightArm");
  cannonFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  cannonFront.large = true;
  //Hail cannon
  //Right
  jetAttackRight = renderer.createEffect("fiskheroes:shield");
  jetAttackRight.texture.set("jet_attack_sides");
  jetAttackRight.anchor.set("rightArm");
  jetAttackRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  jetAttackRight.large = true;
  //Left
  jetAttackLeft = renderer.createEffect("fiskheroes:shield");
  jetAttackLeft.texture.set("jet_attack_sides");
  jetAttackLeft.anchor.set("rightArm");
  jetAttackLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  jetAttackLeft.large = true;
  //Top
  jetAttackTop = renderer.createEffect("fiskheroes:shield");
  jetAttackTop.texture.set("jet_attack_top");
  jetAttackTop.anchor.set("rightArm");
  jetAttackTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  jetAttackTop.large = true;
  //Bottom
  jetAttackBottom = renderer.createEffect("fiskheroes:shield");
  jetAttackBottom.texture.set("jet_attack_bottom");
  jetAttackBottom.anchor.set("rightArm");
  jetAttackBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  jetAttackBottom.large = true;
  //Front
  jetAttackFront = renderer.createEffect("fiskheroes:shield");
  jetAttackFront.texture.set("jet_attack_front");
  jetAttackFront.anchor.set("rightArm");
  jetAttackFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  jetAttackFront.large = true;
  //Wings
  jetAttackWings = renderer.createEffect("fiskheroes:shield");
  jetAttackWings.texture.set("jet_attack_wings");
  jetAttackWings.anchor.set("rightArm");
  jetAttackWings.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 12.5, 0.0);
  jetAttackWings.large = true;
  jetAttackWingsWaveChanging = renderer.createEffect("fiskheroes:shield");
  jetAttackWingsWaveChanging.texture.set(null, "jet_attack_wings_wave_changing_lights");
  jetAttackWingsWaveChanging.anchor.set("rightArm");
  jetAttackWingsWaveChanging.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 12.5, 0.0);
  jetAttackWingsWaveChanging.large = true;
  //Knuckle
  //Right
  knuckleRight = renderer.createEffect("fiskheroes:shield");
  knuckleRight.texture.set("knuckle_right");
  knuckleRight.anchor.set("rightArm");
  knuckleRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, 3.0);
  knuckleRight.large = true;
  //Left
  knuckleLeft = renderer.createEffect("fiskheroes:shield");
  knuckleLeft.texture.set("knuckle_left");
  knuckleLeft.anchor.set("rightArm");
  knuckleLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 5.5, -3.0);
  knuckleLeft.large = true;
  //Top
  knuckleTop = renderer.createEffect("fiskheroes:shield");
  knuckleTop.texture.set("knuckle_top");
  knuckleTop.anchor.set("rightArm");
  knuckleTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 5.5, 0.0);
  knuckleTop.large = true;
  //Bottom
  knuckleBottom = renderer.createEffect("fiskheroes:shield");
  knuckleBottom.texture.set("knuckle_bottom");
  knuckleBottom.anchor.set("rightArm");
  knuckleBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 5.5, 0.0);
  knuckleBottom.large = true;
  //Front
  knuckleFront = renderer.createEffect("fiskheroes:shield");
  knuckleFront.texture.set("knuckle_front");
  knuckleFront.anchor.set("rightArm");
  knuckleFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(3.0, 10.5, 0.0);
  knuckleFront.large = true;
  //Sword
  swordMain = renderer.createEffect("fiskheroes:shield");
  swordMain.texture.set("sword");
  swordMain.anchor.set("rightArm");
  swordMain.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 12.5, 0.0);
  swordMain.large = true;
  swordBlade = renderer.createEffect("fiskheroes:shield");
  swordBlade.texture.set(null, "sword_blade");
  swordBlade.anchor.set("rightArm");
  swordBlade.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 14.5, 0.0);
  swordBlade.large = true;
  swordWaveChanging = renderer.createEffect("fiskheroes:shield");
  swordWaveChanging.texture.set(null, "sword_wave_changing_lights");
  swordWaveChanging.anchor.set("rightArm");
  swordWaveChanging.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 12.5, 0.0);
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

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "wave.HOLOGRAM_FLIGHT", "skyhighheroes:stelar_holo_flight");
  stelar.addAnimationWithData(renderer, "stelar.JET_ATTACK_AIM", "skyhighheroes:stelar_aim", "fiskheroes:energy_projection_timer")
  .priority = 10;
  stuff.emCeilingAnimation(renderer);
  stelar.initStelarAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  ears.render();
  if (entity.getData("skyhighheroes:dyn/stelar_clothes") < 3 || (!entity.getData("skyhighheroes:dyn/hood_toggle") && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3)) {
    hair.render();
    hairWaveChange.render();
  };
  if (entity.getData("skyhighheroes:dyn/hood_toggle") && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > (65/81)) {
      hair.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > (25/81)) {
      hairWaveChange.render();
    };
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
    waveChangeLights.render();
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 || (entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW")) {
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getHeldItem().isEmpty()) {
      headRightWaveChange.render();
      headLeftWaveChange.render();
      headTopWaveChange.render();
      headBottomWaveChange.render();
      headFrontWaveChange.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/cannon_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/jet_attack_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/knuckle_timer") < 1) || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW") {
      headRight.render();
      headLeft.render();
      headTop.render();
      headBottom.render();
      headFront.render();
    }
    if (((entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getHeldItem().isEmpty()) || entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/cannon_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/jet_attack_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/knuckle_timer") < 1)) {
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
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/cannon_timer") > 0) {
    cannonRight.render();
    cannonLeft.render();
    cannonTop.render();
    cannonBottom.render();
    cannonFront.render();
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/jet_attack_timer") > 0) {
    jetAttackRight.render();
    jetAttackLeft.render();
    jetAttackTop.render();
    jetAttackBottom.render();
    jetAttackFront.render();
    jetAttackWings.render();
    jetAttackWingsWaveChanging.render();
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/knuckle_timer") > 0) {
    knuckleRight.render();
    knuckleLeft.render();
    knuckleTop.render();
    knuckleBottom.render();
    knuckleFront.render();
  };
};