var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW")) {
        return "base";
      }
      if (entity.getUUID() != getID() || (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW")) {
        return "transer";
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 0.5 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0) {
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 0) {
          return "transer_tx";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 1) {
          return "short_tx";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 2) {
          return "swimsuit_tx";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
          return "winter_tx";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 4) {
          return "normal_tx";
        }
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") >= 0.5) {
        return "base_tx";
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        return "base"
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 0) {
          return "visualizer_up";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 1) {
          return "visualizer_up_short";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 2) {
          return "visualizer_up_swimsuit";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
          if (entity.getData("skyhighheroes:dyn/hood_toggle") == 0) {
            return "visualizer_up_winter_hood_down";
          }
          if (entity.getData("skyhighheroes:dyn/hood_toggle") == 1) {
            return "visualizer_up_winter_hood_up";
          }
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 4) {
          return "visualizer_up_normal";
        }
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 0) {
          return "visualizer_down";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 1) {
          return "visualizer_down_short";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 2) {
          return "visualizer_down_swimsuit";
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
          if (entity.getData("skyhighheroes:dyn/hood_toggle") == 0) {
            return "visualizer_down_winter_hood_down";
          }
          if (entity.getData("skyhighheroes:dyn/hood_toggle") == 1) {
            return "visualizer_down_winter_hood_up";
          }
        }
        if (entity.getData("skyhighheroes:dyn/stelar_clothes") == 4) {
          return "visualizer_down_normal";
        }
      }
      else {
        return "null";
      }
    }
  });
  renderer.setLights((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if ((entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW")) {
        return "lights";
      }
      if (entity.getUUID() != getID() || (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW")) {
        return "transer_lights";
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 0.5 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0) {
        return "visualizer_lights_tx";
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") >= 0.5) {
        return "lights_tx";
      }
      if (entity.getData("skyhighheroes:dyn/visualizer_toggle") == 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/hood_toggle") == 1) {
        return "visualizer_up_lights_winter_hood";
      }
      if (entity.getData("skyhighheroes:dyn/visualizer_toggle") == 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0) {
        return "visualizer_up_lights";
      }
      if (entity.getData("skyhighheroes:dyn/visualizer_toggle") == 1 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 0) {
        return "visualizer_down_lights";
      }
      if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        return "lights";
      }
      else {
        return "null";
      }
    }
  });
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
  renderer.fixHatLayer("CHESTPLATE");
  initEffects(renderer);
  initAnimations(renderer);
}

function initEffects(renderer) {
  stelar.initNV(renderer);
  stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
  stuff.initForceField(renderer, getColor());
  omega_xis = stelar.initOmegaXis(renderer);
  stelar.initMegaBuster(renderer, getColor(), getColor());
  stelar.initEquipment(renderer);
  wave_change_lights = renderer.createEffect("fiskheroes:overlay");
  wave_change_lights.texture.set(null, "wave_change_lights");
  ears = renderer.createEffect("fiskheroes:ears");
  ears.anchor.set("head");
  ears.angle = 7.5;
  ears.inset = -0.02;
}

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "wave.HOLOGRAM_FLIGHT", "skyhighheroes:stelar_holo_flight");
  stuff.forcefieldAnimation(renderer);
  stuff.emCeilingAnimation(renderer);
  stelar.initStelarAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
  omega_xis.render(entity, renderLayer);
  ears.render();
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
    wave_change_lights.render();
  }
}

function getID() {
  return "";
}
function getColor() {
  return 0x00FF00;
}