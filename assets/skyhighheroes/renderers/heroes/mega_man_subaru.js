extend("skyhighheroes:mega_man");

var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");


loadTextures({
  "base": "skyhighheroes:geo/mega_man_subaru_base",
  "lights": "skyhighheroes:geo/mega_man_subaru_lights",
  "base_wave_change": "skyhighheroes:geo/mega_man_subaru_wave_change.tx.json",
  "lights_wave_change": "skyhighheroes:geo/mega_man_subaru_wave_change_lights.tx.json",
  "wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_wave_changing_lights.tx.json",
  "predation_wave_changing_sides_lights": "skyhighheroes:geo/mega_man_subaru_predation_wave_changing_sides_lights.tx.json",
  "predation_wave_changing_front_lights": "skyhighheroes:geo/mega_man_subaru_predation_wave_changing_front_lights.tx.json",
  "sword_blade": "skyhighheroes:geo/mega_man_subaru_sword_blade.tx.json",
  "sword": "skyhighheroes:geo/mega_man_subaru_sword.tx.json",
  "sword_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_sword_wave_changing_lights.tx.json",
  "sword_sides": "skyhighheroes:geo/mega_man_subaru_sword_sides.tx.json",
  "sword_front": "skyhighheroes:geo/mega_man_subaru_sword_front.tx.json",
  "jet_attack_top": "skyhighheroes:geo/mega_man_jet_attack_top.tx.json",
  "jet_attack_bottom": "skyhighheroes:geo/mega_man_jet_attack_bottom.tx.json",
  "jet_attack_sides": "skyhighheroes:geo/mega_man_jet_attack_sides.tx.json",
  "jet_attack_front": "skyhighheroes:geo/mega_man_jet_attack_front.tx.json",
  "jet_attack_wings": "skyhighheroes:geo/mega_man_jet_attack_wings.tx.json",
  "jet_attack_wings_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_jet_attack_wings_wave_changing_lights.tx.json",
  "knuckle_top": "skyhighheroes:geo/mega_man_subaru_knuckle_top.tx.json",
  "knuckle_bottom": "skyhighheroes:geo/mega_man_subaru_knuckle_bottom.tx.json",
  "knuckle_right": "skyhighheroes:geo/mega_man_subaru_knuckle_right.tx.json",
  "knuckle_left": "skyhighheroes:geo/mega_man_subaru_knuckle_left.tx.json",
  "knuckle_front": "skyhighheroes:geo/mega_man_subaru_knuckle_front.tx.json",
  "cannon_sides": "skyhighheroes:geo/mega_man_subaru_cannon_sides.tx.json",
  "cannon_top": "skyhighheroes:geo/mega_man_subaru_cannon_top.tx.json",
  "cannon_bottom": "skyhighheroes:geo/mega_man_subaru_cannon_bottom.tx.json",
  "cannon_front": "skyhighheroes:geo/mega_man_subaru_cannon_front.tx.json",
  "head_right": "skyhighheroes:geo/omega_xis_subaru_right.tx.json",
  "head_wave_change_right": "skyhighheroes:geo/omega_xis_subaru_wave_change_right.tx.json",
  "head_wave_change_right_lights": "skyhighheroes:geo/omega_xis_subaru_wave_change_right_lights.tx.json",
  "head_right_lights": "skyhighheroes:geo/omega_xis_subaru_right_lights.tx.json",
  "head_wave_changing_right_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_right_lights.tx.json",
  "head_left": "skyhighheroes:geo/omega_xis_subaru_left.tx.json",
  "head_wave_change_left": "skyhighheroes:geo/omega_xis_subaru_wave_change_left.tx.json",
  "head_left_lights": "skyhighheroes:geo/omega_xis_subaru_left_lights.tx.json",
  "head_wave_change_left_lights": "skyhighheroes:geo/omega_xis_subaru_wave_change_left_lights.tx.json",
  "head_wave_changing_left_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_left_lights.tx.json",
  "head_top": "skyhighheroes:geo/omega_xis_subaru_top.tx.json",
  "head_wave_change_top": "skyhighheroes:geo/omega_xis_subaru_wave_change_top.tx.json",
  "head_top_lights": "skyhighheroes:geo/omega_xis_subaru_top_lights.tx.json",
  "head_wave_change_top_lights": "skyhighheroes:geo/omega_xis_subaru_wave_change_top_lights.tx.json",
  "head_wave_changing_top_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_top_lights.tx.json",
  "head_bottom": "skyhighheroes:geo/omega_xis_subaru_bottom.tx.json",
  "head_wave_change_bottom": "skyhighheroes:geo/omega_xis_subaru_wave_change_bottom.tx.json",
  "head_bottom_lights": "skyhighheroes:geo/omega_xis_subaru_bottom_lights.tx.json",
  "head_wave_change_bottom_lights": "skyhighheroes:geo/omega_xis_subaru_wave_change_bottom_lights.tx.json",
  "head_wave_changing_bottom_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_bottom_lights.tx.json",
  "head_front": "skyhighheroes:geo/omega_xis_subaru_front.tx.json",
  "head_wave_change_front": "skyhighheroes:geo/omega_xis_subaru_wave_change_front.tx.json",
  "head_wave_changing_front_lights": "skyhighheroes:geo/omega_xis_subaru_wave_changing_front_lights.tx.json",
  "hair_wave_changing_lights": "skyhighheroes:geo/mega_man_subaru_hair_wave_changing_lights.tx.json",
  "shield": "skyhighheroes:geo/mega_man_subaru_shield",
  "shield_lights": "skyhighheroes:geo/mega_man_subaru_shield_lights",
  "katana": "skyhighheroes:geo/mega_man_subaru_katana",
  "katana_lights": "skyhighheroes:geo/mega_man_subaru_katana_lights",
  "scythe": "skyhighheroes:geo/mega_man_subaru_scythe",
  "scythe_lights": "skyhighheroes:geo/mega_man_subaru_scythe_lights",
  "rifle": "skyhighheroes:geo/mega_man_subaru_rifle",
  "rifle_lights": "skyhighheroes:geo/mega_man_subaru_rifle_lights",
  "santa_hat": "skyhighheroes:santa_hat",
  "santa_hat_em": "skyhighheroes:geo/mega_man_subaru_santa_hat",
});

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
};

function initEffects(renderer) {
  parent.initEffects(renderer);
  stelar.initForceField(renderer, 0x39D6BD);
  stelar.initMegaBuster(renderer, 0x39D6BD, 0x39D6BD);
  stuff.bindBeam(renderer, "fiskheroes:repulsor_blast", "fiskheroes:repulsor_blast", "rightArm", 0x39D6BD, [
      { "firstPerson": [-4.5, 3.75, -7.0], "offset": [-0.5, 9.0, 0.0], "size": [1.5, 1.5] }
  ]);
  stuff.bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:invisible", "rightArm", 0xFFFFFF, [
      { "firstPerson": [-4.5, 3.75, -7.0], "offset": [-0.5, 9.0, 0.0], "size": [1.5, 1.5] }
  ]);
  stuff.bindFlightTrail(renderer, "skyhighheroes:mega_man_subaru_flight");
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
};