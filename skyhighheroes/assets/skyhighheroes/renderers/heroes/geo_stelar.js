var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:geo/geo_stelar_base",
  "lights": "skyhighheroes:geo/geo_stelar_lights",
  "base_wave_change": "skyhighheroes:geo/geo_stelar_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:geo/geo_stelar_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:geo/geo_stelar_wave_changing_lights.tx.json",
  "omega_xis_right": "skyhighheroes:geo/geo_stelar_omega_xis_right.tx.json",
  "omega_xis_right_lights": "skyhighheroes:geo/geo_stelar_omega_xis_right_lights.tx.json",
  "omega_xis_right_wave_change_lights": "skyhighheroes:geo/geo_stelar_omega_xis_right_wave_changing_lights.tx.json",
  "omega_xis_left": "skyhighheroes:geo/geo_stelar_omega_xis_left.tx.json",
  "omega_xis_left_lights": "skyhighheroes:geo/geo_stelar_omega_xis_left_lights.tx.json",
  "omega_xis_left_wave_change_lights": "skyhighheroes:geo/geo_stelar_omega_xis_left_wave_changing_lights.tx.json",
  "omega_xis_top": "skyhighheroes:geo/geo_stelar_omega_xis_top.tx.json",
  "omega_xis_top_lights": "skyhighheroes:geo/geo_stelar_omega_xis_top_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:geo/geo_stelar_omega_xis_bottom.tx.json",
  "omega_xis_bottom_lights": "skyhighheroes:geo/geo_stelar_omega_xis_bottom_lights.tx.json",
  "omega_xis_bottom_top_wave_change_lights": "skyhighheroes:geo/geo_stelar_omega_xis_bottom_top_wave_changing_lights.tx.json",
  "omega_xis_front": "skyhighheroes:geo/geo_stelar_omega_xis_front.tx.json",
  "omega_xis_front_wave_change_lights": "skyhighheroes:geo/geo_stelar_omega_xis_front_wave_changing_lights.tx.json",
  "transer": "skyhighheroes:geo/geo_stelar_transer.tx.json",
  "transer_wave_change": "skyhighheroes:geo/geo_stelar_transer_wave_change.tx.json",
  "visualizer_lights": "skyhighheroes:geo/geo_stelar_visualizer_lights.tx.json",
  "visualizer_lights_wave_change": "skyhighheroes:geo/geo_stelar_visualizer_lights_wave_change.tx.json",
  "transer_default": "skyhighheroes:stelar_transer_pegasus",
  "transer_default_lights": "skyhighheroes:geo/geo_stelar_transer_lights",
  "blade": "skyhighheroes:geo/geo_stelar_blade",
  "shield": "skyhighheroes:geo/geo_stelar_shield",
  "shield_lights": "skyhighheroes:geo/geo_stelar_shield_lights",
  "katana": "skyhighheroes:geo/geo_stelar_katana",
  "katana_lights": "skyhighheroes:geo/geo_stelar_katana_lights",
  "scythe": "skyhighheroes:geo/geo_stelar_scythe",
  "scythe_lights": "skyhighheroes:geo/geo_stelar_scythe_lights",
  "rifle": "skyhighheroes:geo/geo_stelar_rifle",
  "rifle_lights": "skyhighheroes:geo/geo_stelar_rifle_lights"
});

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW")) {
        return "base";
      };
      if (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW") {
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
      if (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW") {
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
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  stelar.initNV(renderer);
  stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
  stuff.initForceField(renderer, 0x00FF00);
  omega_xis = stelar.initOmegaXis(renderer);
  stelar.initMegaBuster(renderer, 0xFF00FF, 0x00FF00);
  //stelar.initEquipment(renderer);
  wave_change_lights = renderer.createEffect("fiskheroes:overlay");
  wave_change_lights.texture.set(null, "wave_changing_lights");
  ears = renderer.createEffect("fiskheroes:ears");
  ears.anchor.set("head");
  ears.angle = 7.5;
  ears.inset = -0.02;
  stuff.bindFlightTrail(renderer, "skyhighheroes:geo_stelar_flight");
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "wave.HOLOGRAM_FLIGHT", "skyhighheroes:stelar_holo_flight");
  stuff.forcefieldAnimation(renderer);
  stuff.emCeilingAnimation(renderer);
  stelar.initStelarAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  omega_xis.render(entity, renderLayer);
  ears.render();
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
    wave_change_lights.render();
  };
};