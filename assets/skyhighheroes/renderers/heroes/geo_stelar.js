loadTextures({
  "base": "skyhighheroes:geo/mega_man_base",
  "lights": "skyhighheroes:geo/mega_man_lights",
  "hair": "skyhighheroes:geo/geo_stelar_hair_wave_change.tx.json",
  "transer": "skyhighheroes:geo/geo_stelar_transer.tx.json",
  "visualizer_lights": "skyhighheroes:geo/geo_stelar_visualizer_lights.tx.json",
  "transer_default": "skyhighheroes:geo/geo_stelar_transer",
  "transer_default_lights": "skyhighheroes:geo/geo_stelar_transer_lights",
  "null": "skyhighheroes:null",
  "santa_hat": "skyhighheroes:santa_hat",
  "santa_hat_em": "skyhighheroes:geo/mega_man_santa_hat",
});

var santaHat;
var santaHatEM;
var date = new Date();
var isChristmasSeason = (date.getDate() < 26 && date.getDate() > 0 && date.getMonth() == 11);

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if (entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") > 0.45 && entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") < 0.6) {
        return "base";
      };
      if ((entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT")) {
        return "transer_default";
      } else {
        return "transer";
      };
    };
  });
  renderer.setLights((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if (entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") > 0.45 && entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") < 0.6) {
        return "lights";
      };
      if ((entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT")) {
        return "transer_default_lights";
      } else {
        return "visualizer_lights";
      };
    };
  });
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
  renderer.fixHatLayer("CHESTPLATE");
  initEffects(renderer);
  initAnimations(renderer);
};

var forcefield;
var callingLine;
var callingBeam;

function initEffects(renderer) {
  if (isChristmasSeason) {
    var santa_hat_model = renderer.createResource("MODEL", "skyhighheroes:SantaHat");
    santa_hat_model.texture.set("santa_hat");
    santaHat = renderer.createEffect("fiskheroes:model").setModel(santa_hat_model);
    santaHat.anchor.set("head");
    santaHat.setScale(1.05);
    santaHat.setOffset(0.0, -5.75, 1.25);
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
  };
  ears = renderer.createEffect("fiskheroes:ears");
  ears.anchor.set("head");
  ears.angle = 0;
  ears.inset = -0.039;
  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:wave_calling");
  var callingShape = renderer.createResource("SHAPE", null);
  callingLine = callingShape.bindLine({ "start": [0.0, -300.0, 0.0], "end": [0.0, -300.0, 0.0], "size": [20.0, 20.0] });
  callingBeam = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(callingShape).setOffset(0.0, 0.0, 0.0);
  callingBeam.mirror = false;
  callingBeam.setScale(16.0);
  callingBeam.anchor.set("body");
  forcefield = renderer.bindProperty("fiskheroes:forcefield");
  forcefield.setShape(36, 36).setOffset(0.0, 26.0, 0.0).setScale(0.1);
  forcefield.setCondition(entity => {
    return entity.getData("skyhighheroes:dyn/calling");
  });
};

function initAnimations(renderer) {
  addAnimationWithData(renderer, "transer.CALLING", "skyhighheroes:stelar_calling", "skyhighheroes:dyn/calling_timer").setCondition(entity => {return entity.getData("skyhighheroes:dyn/calling")});
};

function render(entity, renderLayer, isFirstPersonArm) {
  if (isChristmasSeason) {
    if (entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") > 0.45 && entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") < 0.6) {
      santaHatEM.render();
    } else {
      santaHat.setScale(1.05);
      santaHat.setOffset(0.0, -5.75, 1.25);
      santaHat.setRotation(-45.0, 0.0, 0.0);
      if (entity.getData("skyhighheroes:dyn/visualizer_toggle")) {
        santaHat.setScale(1.02);
        santaHat.setOffset(0.0, -7.25, -0.25);
        santaHat.setRotation(-10.0, 0.0, 0.0);
      };
      if (!entity.getData("skyhighheroes:dyn/hood_toggle") && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
        santaHat.setOffset(0.0, -6.5, 0);
        santaHat.setRotation(0.0, 0.0, 0.0);
        santaHat.setScale(1.08);
      };
      santaHat.render();
    };
  };
  if (!isChristmasSeason) {
    if (entity.getData("skyhighheroes:dyn/stelar_clothes") < 3 || (!entity.getData("skyhighheroes:dyn/hood_toggle") && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3)) {
      hair.render();
    };
  };
  var callingTimer = entity.getInterpolatedData("skyhighheroes:dyn/calling_timer");
  ears.render();
  forcefield.color.set(0x00FF00);
  callingBeam.color.set(0x00ff00);
  callingLine.size.x = callingLine.size.y = timerAnimate2(callingTimer, 0.7, 0.3, 0.1, 0.0)*40+20;
  callingLine.end.y = timerAnimate2(callingTimer, 0.85, 0.15, 0.1, 0.0)*302-300;
  callingLine.start.y = timerAnimate2(callingTimer, 0.55, 0.45, 0.05, 0.0)*302-300;
  forcefield.opacity = timerAnimate2(callingTimer, 0.4, 0.25, 0.05, 0.05);
  var ffScale = timerAnimate2(callingTimer, 0.75, 0.25, 0.05, 0.0)*1 + timerAnimate2(callingTimer, 0.7, 0.3, 0.1, 0.0)*3;
  forcefield.setScale(ffScale);
  callingBeam.anchor.ignoreAnchor(isFirstPersonArm);
  if (callingTimer > 0 && entity.getData("skyhighheroes:dyn/calling") && callingTimer < 0.5) {
    callingBeam.render();
  };
};

/**
 * clamp as in FSK
 * @param timer - input timer
 * @param min - minimum value
 * @param max - maximum
 **/
function timerClamp(timer, min, max) {
  return Math.min(Math.max(timer, min), max);
};
/**
 * animate as in FSK
 * @param timer - input timer
 * @param duration - duration of frame
 * @param start - start of frame
 **/
function timerAnimate(timer, duration, start) {
  return (timer > start && timer <= start + duration) ? ((timer - start) / duration) : 0.0;
};
/**
 * animate2 as in FSK
 * @param timer - input timer
 * @param duration - duration of frame
 * @param start - start of frame
 * @param fadeIn - how long to fade in
 * @param fadeOut - how long to fade out
 **/
function timerAnimate2(timer, duration, start, fadeIn, fadeOut) {
  fadeIn = timerClamp(fadeIn, 0.0, duration);
  fadeOut = timerClamp(fadeOut, 0.0, duration - fadeIn);
  if (timer >= start && timer <= start + duration) {
    pos = timer - start;
    if (pos < fadeIn) {
      return timerAnimate(pos, fadeIn, 0.0);
    };
    if (pos >= duration - fadeOut) {
      return 1.0 - timerAnimate(pos, fadeOut, duration - fadeOut);
    };
    return 1.0;
  };
  return 0.0;
};

function addAnimation(renderer, key, anim) {
  if (typeof anim === "string") {
    anim = renderer.createResource("ANIMATION", anim);
  };

  renderer.addCustomAnimation(key, anim);
  return anim;
};
function addAnimationWithData(renderer, key, anim, dataVar) {
  return addAnimation(renderer, key, anim).setData((entity, data) => data.load(entity.getInterpolatedData(dataVar)));
};