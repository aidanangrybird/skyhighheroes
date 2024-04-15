var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW")) {
        return "base";
      };
      if (entity.getUUID() != getID() || (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW")) {
        return "transer_default";
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 0.5 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0) {
        return "transer_wave_change";
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") >= 0.5) {
        return "base_wave_change";
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        return "base"
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0) {
        return "transer"
      } else {
        return "null";
      };
    };
  });
  renderer.setLights((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW")) {
        return "lights";
      };
      if (entity.getUUID() != getID() || (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW")) {
        return "transer_default_lights";
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 0.5 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0) {
        return "visualizer_lights_wave_change";
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") >= 0.5) {
        return "lights_wave_change";
      };
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        return "lights";
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0) {
        return "visualizer_lights";
      } else {
        return "null";
      };
    };
  });
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
  renderer.fixHatLayer("CHESTPLATE");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  stelar.initNV(renderer);
  stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
  stelar.initForceField(renderer, getColor());
  //omega_xis = stelar.initHead(renderer);
  stelar.initMegaBuster(renderer, getColor(), getColor());
  stelar.initLiveries(renderer);
  //stelar.initEquipment(renderer);
  wave_change_lights = renderer.createEffect("fiskheroes:overlay");
  wave_change_lights.texture.set(null, "wave_changing_lights");
  ears = renderer.createEffect("fiskheroes:ears");
  ears.anchor.set("head");
  ears.angle = 7.5;
  ears.inset = -0.02;
  /*opacity_creetle = renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
    return (entity.getData("skyhighheroes:dyn/battle_card") == 4) ? 1.0 : 0.0;
  });
  var creetle = renderer.createResource("MODEL", "skyhighheroes:creetle");
  creetle.texture.set("creetle");
  creetle.bindAnimation("skyhighheroes:creetle").setData((entity, data) => {
    data.load(0, entity.getInterpolatedData("fiskheroes:flight_timer"));
    data.load(1, entity.loop(1));
  });
  the_creetle = renderer.createEffect("fiskheroes:model").setModel(creetle);
  the_creetle.anchor.set("body");
  the_creetle.setScale(1.0);*/
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "wave.HOLOGRAM_FLIGHT", "skyhighheroes:stelar_holo_flight");
  stuff.emCeilingAnimation(renderer);
  stelar.initStelarAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  //omega_xis.render(entity, renderLayer);
  ears.render();
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
    wave_change_lights.render();
  };
  /*if (entity.getData("skyhighheroes:dyn/battle_card") == 4) {
    the_creetle.render();
  }*/
};

function getID() {
  return "";
};
function getColor() {
  return 0x00FF00;
};