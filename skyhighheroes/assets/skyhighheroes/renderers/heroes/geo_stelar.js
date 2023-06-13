var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:geo/geo_stelar_base",
  "lights": "skyhighheroes:geo/geo_stelar_lights",
  "base_tx": "skyhighheroes:geo/geo_stelar_base.tx.json",
  "lights_tx": "skyhighheroes:geo/geo_stelar_lights.tx.json",
  "wave_change_lights": "skyhighheroes:geo/geo_stelar_wave_change_lights.tx.json",
  "visualizer_up": "skyhighheroes:geo/geo_stelar_up_transer",
  "visualizer_down": "skyhighheroes:geo/geo_stelar_down_transer",
  "visualizer_up_short": "skyhighheroes:geo/geo_stelar_up_short",
  "visualizer_down_short": "skyhighheroes:geo/geo_stelar_down_short",
  "visualizer_up_swimsuit": "skyhighheroes:geo/geo_stelar_up_swimsuit",
  "visualizer_down_swimsuit": "skyhighheroes:geo/geo_stelar_down_swimsuit",
  "visualizer_up_winter_hood_down": "skyhighheroes:geo/geo_stelar_up_winter_hood_down",
  "visualizer_up_winter_hood_up": "skyhighheroes:geo/geo_stelar_up_winter_hood_up",
  "visualizer_down_winter_hood_down": "skyhighheroes:geo/geo_stelar_down_winter_hood_down",
  "visualizer_down_winter_hood_up": "skyhighheroes:geo/geo_stelar_down_winter_hood_up",
  "visualizer_up_normal": "skyhighheroes:geo/geo_stelar_up_normal",
  "visualizer_down_normal": "skyhighheroes:geo/geo_stelar_down_normal",
  "visualizer_up_lights": "skyhighheroes:geo/geo_stelar_up_lights",
  "visualizer_down_lights": "skyhighheroes:geo/geo_stelar_down_lights",
  "visualizer_up_lights_winter_hood": "skyhighheroes:geo/geo_stelar_up_lights_winter_hood",
  "visualizer_lights_tx": "skyhighheroes:geo/geo_stelar_visualizer_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:geo/geo_stelar_omega_xis_bottom",
  "omega_xis_bottom_lights": "skyhighheroes:geo/geo_stelar_omega_xis_bottom_lights",
  "omega_xis_left": "skyhighheroes:geo/geo_stelar_omega_xis_left",
  "omega_xis_left_lights": "skyhighheroes:geo/geo_stelar_omega_xis_left_lights",
  "omega_xis_right": "skyhighheroes:geo/geo_stelar_omega_xis_right",
  "omega_xis_right_lights": "skyhighheroes:geo/geo_stelar_omega_xis_right_lights",
  "omega_xis_top": "skyhighheroes:geo/geo_stelar_omega_xis_top",
  "omega_xis_top_lights": "skyhighheroes:geo/geo_stelar_omega_xis_top_lights",
  "omega_xis_front": "skyhighheroes:geo/geo_stelar_omega_xis_front",
  "transer_tx": "skyhighheroes:geo/geo_stelar_transer.tx.json",
  "short_tx": "skyhighheroes:geo/geo_stelar_short.tx.json",
  "swimsuit_tx": "skyhighheroes:geo/geo_stelar_swimsuit.tx.json",
  "winter_tx": "skyhighheroes:geo/geo_stelar_winter.tx.json",
  "normal_tx": "skyhighheroes:geo/geo_stelar_normal.tx.json",
  "transer": "skyhighheroes:stelar_transer_pegasus",
  "transer_lights": "skyhighheroes:geo/geo_stelar_transer_lights",
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
      }
      if ((entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW")) {
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
      if ((entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW")) {
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
  renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
  initEffects(renderer);
  initAnimations(renderer);
}

function initEffects(renderer) {
  nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0;
  nv.factor = 10;
  nv.setCondition(entity => (entity.getData("skyhighheroes:dyn/visualizer_toggle") == 1 || entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0.75));
  stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
  stuff.initForceField(renderer, 0x00FF00);
  omega_xis = stelar.initOmegaXis(renderer);
  stelar.initMegaBuster(renderer, 0xFF00FF, 0x00FF00);
  stelar.initEquipment(renderer);
  wave_change_lights = renderer.createEffect("fiskheroes:overlay");
  wave_change_lights.texture.set(null, "wave_change_lights");
  ears = renderer.createEffect("fiskheroes:ears");
  ears.anchor.set("head");
  ears.angle = 7.5;
  ears.inset = -0.02;
  stuff.bindFlightTrail(renderer, "skyhighheroes:geo_stelar_flight");
}

function initAnimations(renderer) {
  //Waiting for Fisk to fix issue with this
  //stuff.initHoloFlightAnim(renderer, "wave.HOLOGRAM_FLIGHT", "skyhighheroes:flight/stelar_base_flight.anim.json", "skyhighheroes:stelar_hover");
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