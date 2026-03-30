var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

var date = new Date();
var isChristmasSeason = (date.getDate() < 26 && date.getDate() > 0 && date.getMonth() == 11);
var santaHat;
var santaHatNormal;
var darkness_model;
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
var text_renderer;

var panelList = astro.panels;

loadTextures({
  "null": "skyhighheroes:null",
  "santa_hat_normal": "skyhighheroes:santa_hat",
  "darkness": "skyhighheroes:darkness",
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
  "character_0": "skyhighheroes:characters/red/red_character_0",
  "character_1": "skyhighheroes:characters/red/red_character_1",
  "character_2": "skyhighheroes:characters/red/red_character_2",
  "character_3": "skyhighheroes:characters/red/red_character_3",
  "character_4": "skyhighheroes:characters/red/red_character_4",
  "character_5": "skyhighheroes:characters/red/red_character_5",
  "character_6": "skyhighheroes:characters/red/red_character_6",
  "character_7": "skyhighheroes:characters/red/red_character_7",
  "character_8": "skyhighheroes:characters/red/red_character_8",
  "character_9": "skyhighheroes:characters/red/red_character_9",
  "character_10": "skyhighheroes:characters/red/red_character_10",
  "character_11": "skyhighheroes:characters/red/red_character_11",
  "character_12": "skyhighheroes:characters/red/red_character_12",
  "character_13": "skyhighheroes:characters/red/red_character_13",
  "character_14": "skyhighheroes:characters/red/red_character_14",
  "character_15": "skyhighheroes:characters/red/red_character_15",
  "character_16": "skyhighheroes:characters/red/red_character_16",
  "character_17": "skyhighheroes:characters/red/red_character_17",
  "character_18": "skyhighheroes:characters/red/red_character_18",
  "character_19": "skyhighheroes:characters/red/red_character_19",
  "character_20": "skyhighheroes:characters/red/red_character_20",
  "character_21": "skyhighheroes:characters/red/red_character_21",
  "character_22": "skyhighheroes:characters/red/red_character_22",
  "character_23": "skyhighheroes:characters/red/red_character_23",
  "character_24": "skyhighheroes:characters/red/red_character_24",
  "character_25": "skyhighheroes:characters/red/red_character_25",
  "character_26": "skyhighheroes:characters/red/red_character_26",
  "character_27": "skyhighheroes:characters/red/red_character_27",
  "character_28": "skyhighheroes:characters/red/red_character_28",
  "character_29": "skyhighheroes:characters/red/red_character_29",
  "character_30": "skyhighheroes:characters/red/red_character_30",
  "character_31": "skyhighheroes:characters/red/red_character_31",
  "character_32": "skyhighheroes:characters/red/red_character_32",
  "character_33": "skyhighheroes:characters/red/red_character_33",
  "character_34": "skyhighheroes:characters/red/red_character_34",
  "character_35": "skyhighheroes:characters/red/red_character_35",
  "character_36": "skyhighheroes:characters/red/red_character_36",
  "character_37": "skyhighheroes:characters/red/red_character_37",
  "character_38": "skyhighheroes:characters/red/red_character_38",
  "character_39": "skyhighheroes:characters/red/red_character_39",
  "character_40": "skyhighheroes:characters/red/red_character_40",
  "character_41": "skyhighheroes:characters/red/red_character_41",
  "character_42": "skyhighheroes:characters/red/red_character_42",
  "character_43": "skyhighheroes:characters/red/red_character_43",
  "character_44": "skyhighheroes:characters/red/red_character_44",
  "character_45": "skyhighheroes:characters/red/red_character_45",
  "character_46": "skyhighheroes:characters/red/red_character_46",
  "character_47": "skyhighheroes:characters/red/red_character_47",
  "character_48": "skyhighheroes:characters/red/red_character_48",
  "character_49": "skyhighheroes:characters/red/red_character_49",
  "character_50": "skyhighheroes:characters/red/red_character_50",
  "character_51": "skyhighheroes:characters/red/red_character_51",
  "character_52": "skyhighheroes:characters/red/red_character_52",
  "character_53": "skyhighheroes:characters/red/red_character_53",
  "character_54": "skyhighheroes:characters/red/red_character_54",
  "character_55": "skyhighheroes:characters/red/red_character_55",
  "character_56": "skyhighheroes:characters/red/red_character_56",
  "character_57": "skyhighheroes:characters/red/red_character_57",
  "character_58": "skyhighheroes:characters/red/red_character_58",
  "character_59": "skyhighheroes:characters/red/red_character_59",
  "character_60": "skyhighheroes:characters/red/red_character_60",
  "character_61": "skyhighheroes:characters/red/red_character_61",
  "character_62": "skyhighheroes:characters/red/red_character_62",
  "character_63": "skyhighheroes:characters/red/red_character_63",
  "character_64": "skyhighheroes:characters/red/red_character_64",
  "character_65": "skyhighheroes:characters/red/red_character_65",
  "character_66": "skyhighheroes:characters/red/red_character_66",
  "character_67": "skyhighheroes:characters/red/red_character_67",
  "character_68": "skyhighheroes:characters/red/red_character_68",
  "character_69": "skyhighheroes:characters/red/red_character_69",
  "character_70": "skyhighheroes:characters/red/red_character_70",
  "character_71": "skyhighheroes:characters/red/red_character_71",
  "character_72": "skyhighheroes:characters/red/red_character_72",
  "character_73": "skyhighheroes:characters/red/red_character_73",
  "character_74": "skyhighheroes:characters/red/red_character_74",
  "character_75": "skyhighheroes:characters/red/red_character_75",
  "character_76": "skyhighheroes:characters/red/red_character_76",
  "character_77": "skyhighheroes:characters/red/red_character_77",
  "character_78": "skyhighheroes:characters/red/red_character_78",
  "character_79": "skyhighheroes:characters/red/red_character_79",
  "character_80": "skyhighheroes:characters/red/red_character_80",
  "character_81": "skyhighheroes:characters/red/red_character_81",
  "character_82": "skyhighheroes:characters/red/red_character_82",
  "character_83": "skyhighheroes:characters/red/red_character_83",
  "character_84": "skyhighheroes:characters/red/red_character_84",
  "character_85": "skyhighheroes:characters/red/red_character_85",
  "character_86": "skyhighheroes:characters/red/red_character_86",
  "character_87": "skyhighheroes:characters/red/red_character_87",
  "character_88": "skyhighheroes:characters/red/red_character_88",
  "character_89": "skyhighheroes:characters/red/red_character_89",
  "character_90": "skyhighheroes:characters/red/red_character_90",
  "character_91": "skyhighheroes:characters/red/red_character_91",
  "character_92": "skyhighheroes:characters/red/red_character_92",
  "character_93": "skyhighheroes:characters/red/red_character_93"
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
  text_renderer = stuff.text(renderer);
  var darkness = renderer.createResource("MODEL", "skyhighocs:Darkness");
  darkness.texture.set("darkness");
  darkness_model = renderer.createEffect("fiskheroes:model").setModel(darkness);
  darkness_model.anchor.set("head");
  darkness_model.anchor.ignoreAnchor(true);
  darkness_model.setOffset(0.0, 0.0, 0.0);
  darkness_model.setScale(200.0);
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
  nv.setCondition(entity => (entity.isWearingFullSuit() && entity.getData("skyhighheroes:dyn/night_vision")));
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "astro.HOLOGRAM_FLIGHT", "skyhighheroes:astro_holo_flight");
  astro.initAstroAnimations(renderer);
  stuff.addAnimationEvent(renderer, "FLIGHT_DIVE", "skyhighheroes:astro_dive");
  stuff.addAnimationEvent(renderer, "FLIGHT_DIVE_ROLL", "skyhighheroes:astro_dive_roll");
};

function render(entity, renderLayer, isFirstPersonArm) {
  var nbt = astro.mainNBT(entity);
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
      darkness_model.opacity = entity.getInterpolatedData("skyhighheroes:dyn/powering_down_timer");
      darkness_model.render();
    };
    if (entity.isWearingFullSuit() && isFirstPersonArm) {
      var openPanelCount = 0;
      panelList.forEach(variable => {
        if (entity.getInterpolatedData(variable) > 0) {
          openPanelCount = openPanelCount + 1;
        };
      });
      if (openPanelCount > 0) {
        panelsToRender = []
        var warning = "WARNING!";
        panelsToRender.push(warning);
        if (openPanelCount == 1) {
          var openPanels = openPanelCount + " panel open!";
          panelsToRender.push(openPanels);
        } else {
          var openPanels = openPanelCount + " panels open!";
          panelsToRender.push(openPanels);
        };
        text_renderer.renderLines(isFirstPersonArm, "left", "center", panelsToRender, -210.0, 0.0, -180.0, 1.0*entity.getData("skyhighheroes:dyn/hud_scale"));
      };
    };
  };
  metal_heat.opacity = entity.getInterpolatedData("fiskheroes:metal_heat");
  metal_heat.render();
};