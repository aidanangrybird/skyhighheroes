function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if (entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") > 0.5 && entity.getData("skyhighheroes:dyn/em_being") != "") {
        var result = getBase(entity)
        return result;
      } else {
        return "transer";
      };
    };
  });
  renderer.setLights((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if (entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") > 0.5 && entity.getData("skyhighheroes:dyn/em_being") != "") {
        var result = getLights(entity)
        return result;
      } else {
        return null;
      };
    };
  });
  renderer.setItemIcon("CHESTPLATE", "%s");
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
  initEffects(renderer);
  initAnimations(renderer);
};

var forcefield;
var callingLine;
var callingBeam;

function initEffects(renderer) {
  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:wave_calling");
  var callingShape = renderer.createResource("SHAPE", null);
  callingLine = callingShape.bindLine({ "start": [0.0, -300.0, 0.0], "end": [0.0, -300.0, 0.0], "size": [20.0, 20.0] });
  callingBeam = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(callingShape).setOffset(0.0, 0.0, 0.0);
  callingBeam.anchor.set("body");
  callingBeam.mirror = false;
  callingBeam.setScale(16.0);

  forcefield = renderer.bindProperty("fiskheroes:forcefield");
  forcefield.setShape(36, 36).setOffset(0.0, 26.0, 0.0).setScale(0.1);
  forcefield.setCondition(entity => {/* 
    if (entity.getInterpolatedData("skyhighheroes:dyn/calling_timer") > 0.5) {
      renderer.fixHatLayer("CHESTPLATE");
    }; */
    return entity.getData("skyhighheroes:dyn/calling");
  });
};

function initAnimations(renderer) {
  addAnimationWithData(renderer, "transer.CALLING", "skyhighheroes:stelar_calling", "skyhighheroes:dyn/calling_timer").setCondition(entity => {return entity.getData("skyhighheroes:dyn/calling")});
};

function render(entity, renderLayer, isFirstPersonArm) {
  var result = getColor(entity);
  var callingTimer = entity.getInterpolatedData("skyhighheroes:dyn/calling_timer");
  forcefield.color.set(result);
  callingBeam.color.set(result);
  //callingBeam.progress = timerAnimate2(callingTimer, 1.0, 0.0, 0.1, 0.0);
  callingLine.size.x = callingLine.size.y = timerAnimate2(callingTimer, 0.6, 0.40, 0.1, 0.0)*40+20;
  callingLine.end.y = timerAnimate2(callingTimer, 0.75, 0.25, 0.1, 0.0)*302-300;
  callingLine.start.y = timerAnimate2(callingTimer, 0.45, 0.55, 0.2, 0.0)*302-300;
  forcefield.opacity = timerAnimate2(callingTimer, 0.65, 0.35, 0.05, 0.0);
  var ffScale = timerAnimate2(callingTimer, 0.65, 0.35, 0.05, 0.0)*1 + timerAnimate2(callingTimer, 0.6, 0.4, 0.1, 0.0)*3;
  forcefield.setScale(ffScale);
  if (callingTimer > 0 && entity.getData("skyhighheroes:dyn/calling") && timerAnimate2(callingTimer, 0.5, 0.5, 0.1, 0.0) < 1) {
    callingBeam.render();
  };
};

var beings = [
  {"emBeing": "Supernova", "color": 0xFF0090, "baseTexture": "rose_supernova", "lightsTexture": "rose_supernova_lights"},
  {"emBeing": "Jet-Streak", "color": 0xFF8900, "baseTexture": "squall_vortex", "lightsTexture": "squall_vortex_lights"},
  {"emBeing": "Amethyst", "color": 0xD000FF, "baseTexture": "amethyst_galaxy", "lightsTexture": "amethyst_galaxy_lights"},
  {"emBeing": "Pryetak", "color": 0x44FF00, "baseTexture": "pryetak_nebula", "lightsTexture": "pryetak_nebula_lights"},
  {"emBeing": "Solar", "color": 0xFF0000, "baseTexture": "solar_flame", "lightsTexture": "solar_flame_lights"},
  {"emBeing": "Singularity", "color": 0xFF0000, "baseTexture": "blazing_singularity", "lightsTexture": "blazing_singularity_lights"},
  {"emBeing": "Crimson", "color": 0xFF0000, "baseTexture": "crimson_asteroid", "lightsTexture": "crimson_asteroid_lights"},
  {"emBeing": "Omega-Xis", "color": 0x00FF00, "baseTexture": "mega_man", "lightsTexture": "mega_man_lights"}
];

function getColor(entity) {
  var color = 0x00FF00;
  beings.forEach(entry => {
    if (entity.getData("skyhighheroes:dyn/em_being") == entry.emBeing) {
      color = entry.color;
    };
  });
  return color;
};
function getBase(entity) {
  var base = "null";
  beings.forEach(entry => {
    if (entity.getData("skyhighheroes:dyn/em_being") == entry.emBeing) {
      base = entry.baseTexture;
    };
  });
  return base;
};
function getLights(entity) {
  var lights = "null";
  beings.forEach(entry => {
    if (entity.getData("skyhighheroes:dyn/em_being") == entry.emBeing) {
      lights = entry.lightsTexture;
    };
  });
  return lights;
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