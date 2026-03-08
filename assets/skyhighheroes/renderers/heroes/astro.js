var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

var date = new Date();
var isChristmasSeason = (date.getDate() < 26 && date.getDate() > 0 && date.getMonth() == 11);
var santaHat;
var santaHatNormal;
var blank_model;
var metal_heat;

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

var left_leg_booster;
var right_leg_booster;

var locationBeam;
var entityLocationBeam;

loadTextures({
  "null": "skyhighheroes:null",
  "santa_hat_normal": "skyhighheroes:santa_hat",
  "blank": "skyhighheroes:astro_blank",
  "boots": "skyhighheroes:astro/astro_boots",
  "shorts": "skyhighheroes:astro/astro_shorts",
  "head": "skyhighheroes:astro_head_base",
  "body": "skyhighheroes:astro_body_base",
  "left_arm": "skyhighheroes:astro_left_arm_base",
  "right_arm": "skyhighheroes:astro_right_arm_base",
  "left_leg": "skyhighheroes:astro_left_leg_base",
  "right_leg": "skyhighheroes:astro_right_leg_base",
  "head_lights": "skyhighheroes:astro/astro_head_lights",
  "body_lights": "skyhighheroes:astro/astro_body_lights",
  "left_arm_lights": "skyhighheroes:astro/astro_left_arm_lights",
  "right_arm_lights": "skyhighheroes:astro/astro_right_arm_lights",
  "left_leg_lights": "skyhighheroes:astro/astro_left_leg_lights",
  "right_leg_lights": "skyhighheroes:astro/astro_right_leg_lights",
  "head_base": "skyhighheroes:astro/astro_head_base.tx.json",
  "head_hair_base": "skyhighheroes:astro/astro_head_hair_base.tx.json",
  "body_base": "skyhighheroes:astro/astro_body_base.tx.json",
  "left_arm_base": "skyhighheroes:astro/astro_left_arm_base.tx.json",
  "right_arm_base": "skyhighheroes:astro/astro_right_arm_base.tx.json",
  "left_leg_base": "skyhighheroes:astro/astro_left_leg_base.tx.json",
  "right_leg_base": "skyhighheroes:astro/astro_right_leg_base.tx.json",
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
      return "null"
    };
  });
  renderer.setItemIcon("LEGGINGS", "astro_shorts");
  renderer.setItemIcon("BOOTS", "astro_boots");
  renderer.showModel("LEGGINGS", "head", "headwear", "body", "rightArm", "leftArm");
  renderer.showModel("BOOTS", "rightLeg", "leftLeg");
  renderer.fixHatLayer("LEGGINGS");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  locationBeam = stuff.location(renderer);
  entityLocationBeam = stuff.entityLocation(renderer);
  var blank = renderer.createResource("MODEL", "skyhighheroes:BlankThing");
  blank.texture.set("blank");
  blank_model = renderer.createEffect("fiskheroes:model").setModel(blank);
  blank_model.anchor.set("head");
  blank_model.setScale(100.0);
  if (isChristmasSeason) {
    var santa_hat_model = renderer.createResource("MODEL", "skyhighheroes:SantaHat");
    santa_hat_model.texture.set("santa_hat_normal");
    santaHat = renderer.createEffect("fiskheroes:model").setModel(santa_hat_model);
    santaHat.anchor.set("head");
    santaHat.setScale(1.05);
    santaHat.setOffset(0.0, -5.25, 1.25);
    santaHat.setRotation(-45.0, 0.0, 0.0);
    var santa_hat_normal_model = renderer.createResource("MODEL", "skyhighheroes:SantaHat");
    santa_hat_normal_model.texture.set("santa_hat");
    santaHatNormal = renderer.createEffect("fiskheroes:model").setModel(santa_hat_normal_model);
    santaHatNormal.anchor.set("head");
    santaHatNormal.setScale(1.05);
    santaHatNormal.setOffset(0.0, -5.25, 1.25);
    santaHatNormal.setRotation(-45.0, 0.0, 0.0);
  };
  if (isChristmasSeason) {
    var santa_hat_model = renderer.createResource("MODEL", "skyhighheroes:SantaHat");
    santa_hat_model.texture.set("santa_hat_normal");
    santaHat = renderer.createEffect("fiskheroes:model").setModel(santa_hat_model);
    santaHat.anchor.set("head");
    santaHat.setScale(1.05);
    santaHat.setOffset(0.0, -5.25, 1.25);
    santaHat.setRotation(-45.0, 0.0, 0.0);
    var santa_hat_normal_model = renderer.createResource("MODEL", "skyhighheroes:SantaHat");
    santa_hat_normal_model.texture.set("santa_hat");
    santaHatNormal = renderer.createEffect("fiskheroes:model").setModel(santa_hat_normal_model);
    santaHatNormal.anchor.set("head");
    santaHatNormal.setScale(1.05);
    santaHatNormal.setOffset(0.0, -5.25, 1.25);
    santaHatNormal.setRotation(-45.0, 0.0, 0.0);
  };

  //Mechanical
  var head = renderer.createResource("MODEL", "skyhighheroes:AstroBoyHeadL1");
  head.texture.set("head", "head_lights");
  head.bindAnimation("skyhighheroes:astro_head").setData((entity, data) => astro.headAnimations(entity, data));
  head_model = renderer.createEffect("fiskheroes:model").setModel(head);
  head_model.anchor.set("head");
  head_model.setScale(1.0);
  var body = renderer.createResource("MODEL", "skyhighheroes:AstroBoyBodyL1");
  body.texture.set("body", "body_lights");
  body.bindAnimation("skyhighheroes:astro_body").setData((entity, data) => astro.bodyAnimations(entity, data));
  body_model = renderer.createEffect("fiskheroes:model").setModel(body);
  body_model.anchor.set("body");
  body_model.setScale(1.0);
  astro.initBodyBeams(renderer, 0xFFFFFF);
  var left_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftArmL1");
  left_arm.texture.set("left_arm", "left_arm_lights");
  left_arm.bindAnimation("skyhighheroes:astro_left_arm").setData((entity, data) => astro.leftArmAnimations(entity, data));
  left_arm_model = renderer.createEffect("fiskheroes:model").setModel(left_arm);
  left_arm_model.anchor.set("leftArm");
  left_arm_model.setScale(1.0);
  astro.initLeftArmBeams(renderer, 0xFFFFFF);
  var right_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightArmL1");
  right_arm.texture.set("right_arm", "right_arm_lights");
  right_arm.bindAnimation("skyhighheroes:astro_right_arm").setData((entity, data) => astro.rightArmAnimations(entity, data));
  right_arm_model = renderer.createEffect("fiskheroes:model").setModel(right_arm);
  right_arm_model.anchor.set("rightArm");
  right_arm_model.setScale(1.0);
  astro.initRightArmBeams(renderer, 0xFFFFFF);
  var left_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftLegL1");
  left_leg.texture.set("left_leg", "left_leg_lights");
  left_leg.bindAnimation("skyhighheroes:astro_left_leg").setData((entity, data) => astro.leftLegAnimations(entity, data));
  left_leg_model = renderer.createEffect("fiskheroes:model").setModel(left_leg);
  left_leg_model.anchor.set("leftLeg");
  left_leg_model.setScale(1.0);
  left_leg_booster = astro.initLeftLegBooster(renderer, left_leg, [0xFFAE00, 0xFF8900, 0xFF0000]);
  var right_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightLegL1");
  right_leg.texture.set("right_leg", "right_leg_lights");
  right_leg.bindAnimation("skyhighheroes:astro_right_leg").setData((entity, data) => astro.rightLegAnimations(entity, data));
  right_leg_model = renderer.createEffect("fiskheroes:model").setModel(right_leg);
  right_leg_model.anchor.set("rightLeg");
  right_leg_model.setScale(1.0);
  right_leg_booster = astro.initRightLegBooster(renderer, right_leg, [0xFFAE00, 0xFF8900, 0xFF0000]);

  //Base skin
  var head_base = renderer.createResource("MODEL", "skyhighheroes:AstroBoyHeadL2");
  head_base.texture.set("head_base");
  head_base.bindAnimation("skyhighheroes:astro_head").setData((entity, data) => astro.headAnimations(entity, data));
  head_base_model = renderer.createEffect("fiskheroes:model").setModel(head_base);
  head_base_model.anchor.set("head");
  head_base_model.setScale(1.0);
  var head_hair_base = renderer.createResource("MODEL", "skyhighheroes:AstroBoyHeadL2");
  head_hair_base.texture.set("head_hair_base");
  head_hair_base.bindAnimation("skyhighheroes:astro_head").setData((entity, data) => astro.headAnimations(entity, data));
  head_hair_base_model = renderer.createEffect("fiskheroes:model").setModel(head_hair_base);
  head_hair_base_model.anchor.set("head");
  head_hair_base_model.setOffset(0.0, 0.5, 0.0);
  head_hair_base_model.setScale(1.125);
  var body_base = renderer.createResource("MODEL", "skyhighheroes:AstroBoyBodyL2");
  body_base.texture.set("body_base");
  body_base.bindAnimation("skyhighheroes:astro_body").setData((entity, data) => astro.bodyAnimations(entity, data));
  body_base_model = renderer.createEffect("fiskheroes:model").setModel(body_base);
  body_base_model.anchor.set("body");
  body_base_model.setScale(1.0);
  var left_arm_base = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftArmL2");
  left_arm_base.texture.set("left_arm_base");
  left_arm_base.bindAnimation("skyhighheroes:astro_left_arm").setData((entity, data) => astro.leftArmAnimations(entity, data));
  left_arm_base_model = renderer.createEffect("fiskheroes:model").setModel(left_arm_base);
  left_arm_base_model.anchor.set("leftArm");
  left_arm_base_model.setScale(1.0);
  var right_arm_base = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightArmL2");
  right_arm_base.texture.set("right_arm_base");
  right_arm_base.bindAnimation("skyhighheroes:astro_right_arm").setData((entity, data) => astro.rightArmAnimations(entity, data));
  right_arm_base_model = renderer.createEffect("fiskheroes:model").setModel(right_arm_base);
  right_arm_base_model.anchor.set("rightArm");
  right_arm_base_model.setScale(1.0);
  var left_leg_base = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftLegL2");
  left_leg_base.texture.set("left_leg_base");
  left_leg_base.bindAnimation("skyhighheroes:astro_left_leg").setData((entity, data) => astro.leftLegAnimations(entity, data));
  left_leg_base_model = renderer.createEffect("fiskheroes:model").setModel(left_leg_base);
  left_leg_base_model.anchor.set("leftLeg");
  left_leg_base_model.setScale(1.0);
  var right_leg_base = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightLegL2");
  right_leg_base.texture.set("right_leg_base");
  right_leg_base.bindAnimation("skyhighheroes:astro_right_leg").setData((entity, data) => astro.rightLegAnimations(entity, data));
  right_leg_base_model = renderer.createEffect("fiskheroes:model").setModel(right_leg_base);
  right_leg_base_model.anchor.set("rightLeg");
  right_leg_base_model.setScale(1.0);

  //astro.initNV(renderer, getID());
  metal_heat = renderer.createEffect("fiskheroes:metal_heat");
  metal_heat.includeEffects(head_base_model, head_hair_base_model, body_base_model, left_arm_base_model, right_arm_base_model, left_leg_base_model, right_leg_base_model);
  renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
    return 0.999999;
  }).setCondition(entity => (entity.isWearingFullSuit() || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));
  
  var nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0.0;
  nv.factor = 1.0;
  nv.firstPersonOnly = false;
  nv.setCondition(entity => (entity.isWearingFullSuit()));
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "astro.HOLOGRAM_FLIGHT", "skyhighheroes:astro_holo_flight");
  astro.initAstroAnimations(renderer);
  stuff.addAnimationEvent(renderer, "FLIGHT_DIVE", "skyhighheroes:astro_dive");
  stuff.addAnimationEvent(renderer, "FLIGHT_DIVE_ROLL", "skyhighheroes:astro_dive_roll");
};

function render(entity, renderLayer, isFirstPersonArm) {
  var nbt = entity.getWornLeggings().nbt();
  if (entity.isWearingFullSuit()) {
    if (isChristmasSeason) {
      if (entity.getData("skyhighheroes:dyn/astro_clothes") == 3) {
        santaHat.render();
      } else {
        santaHatNormal.render();
      };
    };

    head_model.render();
    body_model.render();
    left_arm_model.render();
    right_arm_model.render();
    left_leg_model.render();
    right_leg_model.render();

    head_base_model.render();
    head_hair_base_model.render();
    body_base_model.render();
    left_arm_base_model.render();
    right_arm_base_model.render();
    left_leg_base_model.render();
    right_leg_base_model.render();

    left_leg_booster.render(entity, renderLayer, isFirstPersonArm);
    right_leg_booster.render(entity, renderLayer, isFirstPersonArm);

    if (isFirstPersonArm) {
      blank_model.setOffset(0.0, 0.0, 0.0);
      blank_model.setScale(1000.0);
      blank_model.opacity = entity.getInterpolatedData("skyhighheroes:dyn/powering_down_timer") + (astro.isModuleDisabled(entity, "eyes") ? 1 : 0);
      blank_model.anchor.ignoreAnchor(true);
      blank_model.render();
    };
  };
  metal_heat.opacity = entity.getInterpolatedData("fiskheroes:metal_heat");
  metal_heat.render();
};