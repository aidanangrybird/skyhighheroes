var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

var date = new Date();
var isChristmasSeason = (date.getDate() < 26 && date.getDate() > 0 && date.getMonth() == 11);
var santaHat;
var blank_model;
var metal_heat;
var head_model;
var head_hair_model;
var body_model;
var left_arm_model;
var right_arm_model;
var left_leg_model;
var right_leg_model;

loadTextures({
  "null": "skyhighheroes:null",
  "full": "skyhighheroes:astro/astro_full_base",
  "full_lights": "skyhighheroes:astro/astro_full_lights",
  "head": "skyhighheroes:astro/astro_head.tx.json",
  "body": "skyhighheroes:astro/astro_body.tx.json",
  "left_arm": "skyhighheroes:astro/astro_left_arm.tx.json",
  "right_arm": "skyhighheroes:astro/astro_right_arm.tx.json",
  "left_leg": "skyhighheroes:astro/astro_left_leg.tx.json",
  "right_leg": "skyhighheroes:astro/astro_right_leg.tx.json",
  "boots": "skyhighheroes:astro/astro_boots",
  "shorts": "skyhighheroes:astro/astro_shorts",
  "santa_hat": "skyhighheroes:santa_hat",
  "blank": "skyhighheroes:astro_blank"
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
      return "null";
    };
  });
  renderer.setItemIcon("LEGGINGS", "%s_shorts");
  renderer.setItemIcon("BOOTS", "%s_boots");
  renderer.showModel("LEGGINGS", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
  renderer.showModel("BOOTS", "rightLeg", "leftLeg");
  renderer.fixHatLayer("LEGGINGS");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
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
  var head = renderer.createResource("MODEL", "skyhighheroes:AstroBoyHead");
  head.texture.set("full", "full_lights");
  head.bindAnimation("skyhighheroes:astro_head").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer"));
    data.load(4, entity.getInterpolatedData("fiskheroes:beam_charge"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/head_top_front_open_timer"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/head_top_back_open_timer"));
    data.load(7, entity.getInterpolatedData("skyhighheroes:dyn/head_bottom_front_open_timer"));
    data.load(8, entity.getInterpolatedData("skyhighheroes:dyn/head_bottom_back_open_timer"));
    data.load(9, entity.loop(20));
  });
  head_model = renderer.createEffect("fiskheroes:model").setModel(head);
  head_model.anchor.set("head");
  head_model.setScale(0.999999999);
  var head_hair = renderer.createResource("MODEL", "skyhighheroes:AstroBoyHeadLayer2");
  head_hair.texture.set("full", "full_lights");
  head_hair.bindAnimation("skyhighheroes:astro_head_layer2").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/head_top_front_open_timer"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/head_top_back_open_timer"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/head_bottom_front_open_timer"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/head_bottom_back_open_timer"));
  });
  head_hair_model = renderer.createEffect("fiskheroes:model").setModel(head_hair);
  head_hair_model.anchor.set("head");
  head_hair_model.setOffset(0.0, 0.5, 0.0);
  head_hair_model.setScale(1.125);
  var body = renderer.createResource("MODEL", "skyhighheroes:AstroBoyBody");
  body.texture.set("full", "full_lights");
  body.bindAnimation("skyhighheroes:astro_body").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("fiskheroes:beam_charge"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/body_upper_front_open_timer"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/body_upper_back_open_timer"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/body_lower_front_open_timer"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/body_lower_back_open_timer"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/body_machine_gun_open_timer"));
  });
  body_model = renderer.createEffect("fiskheroes:model").setModel(body);
  body_model.anchor.set("body");
  body_model.setScale(0.999999999);
  var left_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftArm");
  left_arm.texture.set("full", "full_lights");
  left_arm.bindAnimation("skyhighheroes:astro_left_arm").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/left_arm_outer_open_timer"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/left_arm_cannon_outer_open_timer"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/left_arm_cannon_inner_open_timer"));
  });
  left_arm_model = renderer.createEffect("fiskheroes:model").setModel(left_arm);
  left_arm_model.anchor.set("leftArm");
  left_arm_model.setOffset(-1.0, -2.0, 0.0);
  left_arm_model.setScale(0.999999999);
  var right_arm = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightArm");
  right_arm.texture.set("full", "full_lights");
  right_arm.bindAnimation("skyhighheroes:astro_right_arm").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("skyhighheroes:dyn/arm_cannon_timer"));
    data.load(1, entity.getInterpolatedData("skyhighheroes:dyn/dual_arm_cannon_timer"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/right_arm_outer_open_timer"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/right_arm_cannon_outer_open_timer"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/right_arm_cannon_inner_open_timer"));
  });
  right_arm_model = renderer.createEffect("fiskheroes:model").setModel(right_arm);
  right_arm_model.anchor.set("rightArm");
  right_arm_model.setOffset(1.0, -2.0, 0.0);
  right_arm_model.setScale(0.999999999);
  var left_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyLeftLeg");
  left_leg.texture.set("full", "full_lights");
  left_leg.bindAnimation("skyhighheroes:astro_left_leg").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/left_leg_boot_front_open_timer"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/left_leg_boot_back_open_timer"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/left_leg_front_open_timer"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/left_leg_back_open_timer"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/left_leg_boot_open_timer"));
  });
  left_leg_model = renderer.createEffect("fiskheroes:model").setModel(left_leg);
  left_leg_model.anchor.set("leftLeg");
  left_leg_model.setScale(0.999999999);
  var right_leg = renderer.createResource("MODEL", "skyhighheroes:AstroBoyRightLeg");
  right_leg.texture.set("full", "full_lights");
  right_leg.bindAnimation("skyhighheroes:astro_right_leg").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer"));
    data.load(1, entity.getInterpolatedData("fiskheroes:flight_boost_timer"));
    data.load(2, entity.getInterpolatedData("skyhighheroes:dyn/right_leg_boot_front_open_timer"));
    data.load(3, entity.getInterpolatedData("skyhighheroes:dyn/right_leg_boot_back_open_timer"));
    data.load(4, entity.getInterpolatedData("skyhighheroes:dyn/right_leg_front_open_timer"));
    data.load(5, entity.getInterpolatedData("skyhighheroes:dyn/right_leg_back_open_timer"));
    data.load(6, entity.getInterpolatedData("skyhighheroes:dyn/right_leg_boot_open_timer"));
  });
  right_leg_model = renderer.createEffect("fiskheroes:model").setModel(right_leg);
  right_leg_model.anchor.set("rightLeg");
  right_leg_model.setScale(0.999999999);

  astro.initNV(renderer);
  rockets = astro.initNormalBoosters(renderer);
  astro.initBeams(renderer, 0xFFFFFF);
  metal_heat = renderer.createEffect("fiskheroes:metal_heat");
  metal_heat.includeEffects(head_model, head_hair_model, body_model, left_arm_model, right_arm_model, left_leg_model, right_leg_model);
  renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
    return 0.999999;
  }).setCondition(entity => (entity.isWearingFullSuit() || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));

  clothing_head = renderer.createEffect("fiskheroes:overlay");
  clothing_head.texture.set("head");
  clothing_body = renderer.createEffect("fiskheroes:overlay");
  clothing_body.texture.set("body");
  clothing_left_arm = renderer.createEffect("fiskheroes:overlay");
  clothing_left_arm.texture.set("left_arm");
  clothing_right_arm = renderer.createEffect("fiskheroes:overlay");
  clothing_right_arm.texture.set("right_arm");
  clothing_left_leg = renderer.createEffect("fiskheroes:overlay");
  clothing_left_leg.texture.set("left_leg");
  clothing_right_leg = renderer.createEffect("fiskheroes:overlay");
  clothing_right_leg.texture.set("right_leg");
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "astro.HOLOGRAM_FLIGHT", "skyhighheroes:astro_holo_flight");
  astro.initAstroAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
  if (entity.isWearingFullSuit()) {
    if (isChristmasSeason && entity.getInterpolatedData("skyhighheroes:dyn/head_top_front_open_timer") == 0 && entity.getInterpolatedData("skyhighheroes:dyn/head_top_back_open_timer") == 0 && entity.getInterpolatedData("skyhighheroes:dyn/head_bottom_front_open_timer") == 0 && entity.getInterpolatedData("skyhighheroes:dyn/head_bottom_back_open_timer") == 0) {
      if (entity.getData("skyhighheroes:dyn/astro_clothes") == 3) {
        santaHat.render();
      } else {
        santaHatNormal.render();
      };
    };
    head_model.render();
    head_hair_model.render();
    body_model.render();
    left_arm_model.render();
    right_arm_model.render();
    left_leg_model.render();
    right_leg_model.render();

    clothing_head.render();
    clothing_body.render();
    clothing_left_arm.render();
    clothing_right_arm.render();
    clothing_left_leg.render();
    clothing_right_leg.render();
    if (isFirstPersonArm) {
      blank_model.setOffset(0.0, 0.0, 0.0);
      blank_model.setScale(1000.0);
      blank_model.opacity = 1-entity.getInterpolatedData("skyhighheroes:dyn/power_timer") + (astro.isModuleDisabled(entity, "eyes") ? 1 : 0);
      blank_model.anchor.ignoreAnchor(true);
      blank_model.render();
    };
  };
  metal_heat.opacity = entity.getInterpolatedData("fiskheroes:metal_heat");
  metal_heat.render();
};