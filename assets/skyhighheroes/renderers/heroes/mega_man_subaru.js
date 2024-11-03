extend("skyhighheroes:mega_man");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "base": "skyhighheroes:geo/mega_man_subaru_base",
  "lights": "skyhighheroes:geo/mega_man_subaru_lights",
  "base_wave_change": "skyhighheroes:geo/mega_man_subaru_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:geo/mega_man_subaru_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_wave_changing_lights.tx.json",
  "sword_blade": "skyhighheroes:geo/mega_man_subaru_sword_blade.tx.json",
  "sword": "skyhighheroes:geo/mega_man_subaru_sword.tx.json",
  "sword_lights": "skyhighheroes:null",
  "sword_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:geo/mega_man_subaru_sword_sides.tx.json",
  "sword_sides_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_sword_sides_wave_changing_lights.tx.json",
  "sword_front": "skyhighheroes:geo/mega_man_subaru_sword_front.tx.json",
  "sword_front_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_sword_front_wave_changing_lights.tx.json",
  "head_right": "skyhighheroes:geo/omega_xis_subaru_right.tx.json",
  "head_right_wave_change": "skyhighheroes:geo/omega_xis_subaru_right_wave_change.tx.json",
  "head_right_wave_change_lights": "skyhighheroes:geo/omega_xis_subaru_right_wave_change_lights.tx.json",
  "head_right_lights": "skyhighheroes:geo/omega_xis_subaru_right_lights.tx.json",
  "head_right_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_right_wave_changing_lights.tx.json",
  "head_left": "skyhighheroes:geo/omega_xis_subaru_left.tx.json",
  "head_left_wave_change": "skyhighheroes:geo/omega_xis_subaru_left_wave_change.tx.json",
  "head_left_lights": "skyhighheroes:geo/omega_xis_subaru_left_lights.tx.json",
  "head_left_wave_change_lights": "skyhighheroes:geo/omega_xis_subaru_left_wave_change_lights.tx.json",
  "head_left_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_left_wave_changing_lights.tx.json",
  "head_top": "skyhighheroes:geo/omega_xis_subaru_top.tx.json",
  "head_top_wave_change": "skyhighheroes:geo/omega_xis_subaru_top_wave_change.tx.json",
  "head_top_lights": "skyhighheroes:geo/omega_xis_subaru_top_lights.tx.json",
  "head_top_wave_change_lights": "skyhighheroes:geo/omega_xis_subaru_top_wave_change_lights.tx.json",
  "head_top_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_top_wave_changing_lights.tx.json",
  "head_bottom": "skyhighheroes:geo/omega_xis_subaru_bottom.tx.json",
  "head_bottom_wave_change": "skyhighheroes:geo/omega_xis_subaru_bottom_wave_change.tx.json",
  "head_bottom_lights": "skyhighheroes:geo/omega_xis_subaru_bottom_lights.tx.json",
  "head_bottom_wave_change_lights": "skyhighheroes:geo/omega_xis_subaru_bottom_wave_change_lights.tx.json",
  "head_bottom_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_bottom_wave_changing_lights.tx.json",
  "head_front": "skyhighheroes:geo/omega_xis_subaru_front.tx.json",
  "head_front_wave_change": "skyhighheroes:geo/omega_xis_subaru_front_wave_change.tx.json",
  "head_front_wave_changing_lights": "skyhighheroes:geo/omega_xis_subaru_front_wave_changing_lights.tx.json",
  "hair_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_hair_wave_changing_lights.tx.json",
  "shield": "skyhighheroes:geo/mega_man_subaru_shield",
  "shield_lights": "skyhighheroes:geo/mega_man_subaru_shield_lights",
  "katana": "skyhighheroes:geo/mega_man_subaru_katana",
  "katana_lights": "skyhighheroes:geo/mega_man_subaru_katana_lights",
  "scythe": "skyhighheroes:geo/mega_man_subaru_scythe",
  "scythe_lights": "skyhighheroes:geo/mega_man_subaru_scythe_lights",
  "rifle": "skyhighheroes:geo/mega_man_subaru_rifle",
  "rifle_lights": "skyhighheroes:geo/mega_man_subaru_rifle_lights"
});

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
};

function initEffects(renderer) {
  hair = renderer.createEffect("fiskheroes:shield");
  hair.texture.set("hair");
  hair.anchor.set("head");
  hair.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
  hair.large = true;
  hairWaveChange = renderer.createEffect("fiskheroes:shield");
  hairWaveChange.texture.set(null, "hair_wave_changing_lights");
  hairWaveChange.anchor.set("head");
  hairWaveChange.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
  hairWaveChange.large = true;
  stelar.initNV(renderer);
  stuff.setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
  stelar.initForceField(renderer, 0x39D6BD);
  omega_xis = stelar.initHead(renderer);
  stelar.initMegaBuster(renderer, 0x39D6BD, 0x39D6BD);
  stelar.initLiveries(renderer);
  waveChangeLights = renderer.createEffect("fiskheroes:overlay");
  waveChangeLights.texture.set(null, "wave_changing_lights");
  ears = renderer.createEffect("fiskheroes:ears");
  ears.anchor.set("head");
  ears.angle = 0;
  ears.inset = -0.039;
  stuff.bindFlightTrail(renderer, "skyhighheroes:mega_man_subaru_flight");
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "wave.HOLOGRAM_FLIGHT", "skyhighheroes:stelar_holo_flight");
  stuff.emCeilingAnimation(renderer);
  stelar.initStelarAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  omega_xis.render(entity, renderLayer);
  ears.render();
  if (entity.getData("skyhighheroes:dyn/stelar_clothes") < 3 || (!entity.getData("skyhighheroes:dyn/hood_toggle") && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3)) {
    hair.render();
    hairWaveChange.render();
  };
  if (entity.getData("skyhighheroes:dyn/hood_toggle") && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) {
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > (65/81)) {
      hair.render();
    };
    if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > (25/81)) {
      hairWaveChange.render();
    };
  };
  if (entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getInterpolatedData("skyhighheroes:dyn/wave_changing_timer") < 1) {
    waveChangeLights.render();
  };
};