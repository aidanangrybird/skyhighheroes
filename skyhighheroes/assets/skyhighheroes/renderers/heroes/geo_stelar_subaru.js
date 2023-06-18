extend("skyhighheroes:geo_stelar");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:geo/geo_stelar_subaru_base",
  "lights": "skyhighheroes:geo/geo_stelar_subaru_lights",
  "base_tx": "skyhighheroes:geo/geo_stelar_subaru_base.tx.json",
  "lights_tx": "skyhighheroes:geo/geo_stelar_subaru_lights.tx.json",
  "wave_change_lights": "skyhighheroes:geo/geo_stelar_subaru_wave_change_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_bottom",
  "omega_xis_bottom_lights": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_bottom_lights",
  "omega_xis_left": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_left",
  "omega_xis_left_lights": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_left_lights",
  "omega_xis_right": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_right",
  "omega_xis_right_lights": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_right_lights",
  "omega_xis_top": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_top",
  "omega_xis_top_lights": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_top_lights",
  "omega_xis_front": "skyhighheroes:geo/geo_stelar_subaru_omega_xis_front",
  "blade": "skyhighheroes:geo/geo_stelar_subaru_blade",
  "shield": "skyhighheroes:geo/geo_stelar_subaru_shield",
  "shield_lights": "skyhighheroes:geo/geo_stelar_subaru_shield_lights",
  "katana": "skyhighheroes:geo/geo_stelar_subaru_katana",
  "katana_lights": "skyhighheroes:geo/geo_stelar_subaru_katana_lights",
  "scythe": "skyhighheroes:geo/geo_stelar_subaru_scythe",
  "scythe_lights": "skyhighheroes:geo/geo_stelar_subaru_scythe_lights",
  "rifle": "skyhighheroes:geo/geo_stelar_subaru_rifle",
  "rifle_lights": "skyhighheroes:geo/geo_stelar_subaru_rifle_lights"
});

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
}

function initEffects(renderer) {
  stelar.initNV(renderer);
  stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
  stuff.initForceField(renderer, 0x39D6BD);
  omega_xis = stelar.initOmegaXis(renderer);
  stelar.initMegaBuster(renderer, 0x39D6BD);
  stelar.initEquipment(renderer);
  wave_change_lights = renderer.createEffect("fiskheroes:overlay");
  wave_change_lights.texture.set(null, "wave_change_lights");
  ears = renderer.createEffect("fiskheroes:ears");
  ears.anchor.set("head");
  ears.angle = 7.5;
  ears.inset = -0.02;
  stuff.bindFlightTrail(renderer, "skyhighheroes:geo_stelar_subaru_flight");
}

function initAnimations(renderer) {
  stuff.forcefieldAnimation(renderer);
  stelar.initStelarAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
  omega_xis.render(entity, renderLayer);
  ears.render();
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
    wave_change_lights.render();
  }
}