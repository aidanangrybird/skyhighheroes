extend("skyhighheroes:mega_man");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

var date = new Date();
var isChristmasSeason = (date.getDate() < 26 && date.getDate() > 0 && date.getMonth() == 11);
var santaHat;

loadTextures({
  "base": "skyhighheroes:geo/mega_man_subaru_base",
  "lights": "skyhighheroes:geo/mega_man_subaru_lights",
  "base_wave_change": "skyhighheroes:geo/mega_man_subaru_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:geo/mega_man_subaru_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_wave_changing_lights.tx.json",
  "predation_wave_changing_sides_lights": "skyhighheroes:geo/mega_man_subaru_predation_wave_changing_sides_lights.tx.json",
  "predation_wave_changing_front_lights": "skyhighheroes:geo/mega_man_subaru_predation_wave_changing_front_lights.tx.json",
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
  "head_wave_change_right": "skyhighheroes:geo/omega_xis_subaru_wave_change_right.tx.json",
  "head_wave_change_right_lights": "skyhighheroes:geo/omega_xis_subaru_wave_change_right_lights.tx.json",
  "head_right_lights": "skyhighheroes:geo/omega_xis_subaru_right_lights.tx.json",
  "head_wave_changing_right_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_right_lights.tx.json",
  "head_left": "skyhighheroes:geo/omega_xis_subaru_left.tx.json",
  "head_wave_change_left": "skyhighheroes:geo/omega_xis_subaru_wave_change_left.tx.json",
  "head_left_lights": "skyhighheroes:geo/omega_xis_subaru_left_lights.tx.json",
  "head_wave_change_left_lights": "skyhighheroes:geo/omega_xis_subaru_wave_change_left_lights.tx.json",
  "head_wave_changing_left_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_left_lights.tx.json",
  "head_top": "skyhighheroes:geo/omega_xis_subaru_top.tx.json",
  "head_wave_change_top": "skyhighheroes:geo/omega_xis_subaru_wave_change_top.tx.json",
  "head_top_lights": "skyhighheroes:geo/omega_xis_subaru_top_lights.tx.json",
  "head_wave_change_top_lights": "skyhighheroes:geo/omega_xis_subaru_wave_change_top_lights.tx.json",
  "head_wave_changing_top_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_top_lights.tx.json",
  "head_bottom": "skyhighheroes:geo/omega_xis_subaru_bottom.tx.json",
  "head_wave_change_bottom": "skyhighheroes:geo/omega_xis_subaru_wave_change_bottom.tx.json",
  "head_bottom_lights": "skyhighheroes:geo/omega_xis_subaru_bottom_lights.tx.json",
  "head_wave_change_bottom_lights": "skyhighheroes:geo/omega_xis_subaru_wave_change_bottom_lights.tx.json",
  "head_wave_changing_bottom_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_bottom_lights.tx.json",
  "head_front": "skyhighheroes:geo/omega_xis_subaru_front.tx.json",
  "head_wave_change_front": "skyhighheroes:geo/omega_xis_subaru_wave_change_front.tx.json",
  "head_wave_changing_front_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_front_lights.tx.json",
  "hair_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_hair_wave_changing_lights.tx.json",
  "shield": "skyhighheroes:geo/mega_man_subaru_shield",
  "shield_lights": "skyhighheroes:geo/mega_man_subaru_shield_lights",
  "katana": "skyhighheroes:geo/mega_man_subaru_katana",
  "katana_lights": "skyhighheroes:geo/mega_man_subaru_katana_lights",
  "scythe": "skyhighheroes:geo/mega_man_subaru_scythe",
  "scythe_lights": "skyhighheroes:geo/mega_man_subaru_scythe_lights",
  "rifle": "skyhighheroes:geo/mega_man_subaru_rifle",
  "rifle_lights": "skyhighheroes:geo/mega_man_subaru_rifle_lights",
  "santa_hat": "skyhighheroes:santa_hat",
  "santa_hat_em": "skyhighheroes:geo/mega_man_subaru_santa_hat",
});

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
};

function initEffects(renderer) {
  if (isChristmasSeason) {
    var santa_hat_model = renderer.createResource("MODEL", "skyhighheroes:SantaHat");
    santa_hat_model.texture.set("santa_hat");
    santaHat = renderer.createEffect("fiskheroes:model").setModel(santa_hat_model);
    santaHat.anchor.set("head");
    santaHat.setScale(1.05);
    santaHat.setOffset(0.0, -5.25, 1.25);
    santaHat.setRotation(-45.0, 0.0, 0.0);
    var santa_hat_em_model = renderer.createResource("MODEL", "skyhighheroes:SantaHat");
    santa_hat_em_model.texture.set("santa_hat_em");
    santaHatEM = renderer.createEffect("fiskheroes:model").setModel(santa_hat_em_model);
    santaHatEM.anchor.set("head");
    santaHatEM.setScale(1.05);
    santaHatEM.setOffset(0.0, -5.25, 1.25);
    santaHatEM.setRotation(-45.0, 0.0, 0.0);
  };
  if (!isChristmasSeason) {
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
  };
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
  predation = stelar.initHandThing(renderer, "predation_wave_changing", 0, 2);
  //Cannon
  cannon = stelar.initHandThing(renderer, "cannon", 3, 0);
  //Jet Attack
  jetAttack = stelar.initHandThing(renderer, "jet_attack", 3, 0);
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
  knuckle = stelar.initHandThing(renderer, "knuckle", 1, 0);
  //Sword
  swordMain = renderer.createEffect("fiskheroes:shield");
  swordMain.texture.set("sword", "sword_lights");
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
  sword = stelar.initHandThing(renderer, "sword", 2, 0);
  //Head
  head = stelar.initHandThing(renderer, "head", 1, 4, 3);
  headWaveChange = stelar.initHandThing(renderer, "head_wave_change", 1, 4, 3);
  headWaveChanging = stelar.initHandThing(renderer, "head_wave_changing", 0, 1, 3);
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "wave.HOLOGRAM_FLIGHT", "skyhighheroes:stelar_holo_flight");
  stelar.addAnimationWithData(renderer, "stelar.JET_ATTACK_AIM", "skyhighheroes:stelar_aim", "fiskheroes:energy_projection_timer")
  .priority = 10;
  stuff.emCeilingAnimation(renderer);
  stelar.initStelarAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  if (isChristmasSeason) {
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0) {
      if (entity.getData("skyhighheroes:dyn/stelar_clothes") < 3 || (!entity.getData("skyhighheroes:dyn/hood_toggle") && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3)) {
        santaHat.setOffset(0.0, -5.25, 1.25);
        santaHat.setRotation(-45.0, 0.0, 0.0);
        santaHat.setScale(1.05);
      } else {
        santaHat.setOffset(0.0, -6.5, 0);
        santaHat.setRotation(0.0, 0.0, 0.0);
        santaHat.setScale(1.08);
      };
      santaHat.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 || (entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW")) {
      santaHatEM.render();
    };
  };
  if (!isChristmasSeason) {
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
  };
  ears.render();
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
    waveChangeLights.render();
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 || (entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW")) {
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getHeldItem().isEmpty()) {
      headWaveChange.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/cannon_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/jet_attack_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/knuckle_timer") < 1) || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW") {
      head.render();
    }
    if (((entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getHeldItem().isEmpty()) || entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) && (entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/cannon_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/jet_attack_timer") < 1) && (entity.getInterpolatedData("skyhighheroes:dyn/knuckle_timer") < 1)) {
      headWaveChanging.render();
    }
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    predation.render();
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/sword_timer") > 0) {
    swordWaveChanging.render();
    swordMain.render();
    sword.render();
    if (entity.getData("skyhighheroes:dyn/sword") && entity.getHeldItem().isEmpty()) {
      swordBlade.render();
    };
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/cannon_timer") > 0) {
    cannon.render();
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/jet_attack_timer") > 0) {
    jetAttack.render();
    jetAttackWings.render();
    jetAttackWingsWaveChanging.render();
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/knuckle_timer") > 0) {
    knuckle.render();
  };
};