extend("skyhighheroes:base_cyber");

loadTextures({
  "head_lights": "skyhighheroes:cyber/purple/cyber_purple_head_lights.tx.json",
  "head_hair_lights": "skyhighheroes:cyber/purple/cyber_purple_head_hair_lights.tx.json",
  "body_lights": "skyhighheroes:cyber/purple/cyber_purple_body_lights.tx.json",
  "left_arm_lights": "skyhighheroes:cyber/purple/cyber_purple_left_arm_lights.tx.json",
  "right_arm_lights": "skyhighheroes:cyber/purple/cyber_purple_right_arm_lights.tx.json",
  "left_leg_lights": "skyhighheroes:cyber/purple/cyber_purple_left_leg_lights.tx.json",
  "right_leg_lights": "skyhighheroes:cyber/purple/cyber_purple_right_leg_lights.tx.json",
  "arm_lights": "skyhighheroes:cyber/purple/cyber_purple_arm_lights",
  "claw_lights": "skyhighheroes:cyber/purple/cyber_purple_claw_lights",
});

function initEffects(renderer) {
  parent.initEffects(renderer);
};

function getColor() {
  return 0x7C00FF;
}

function init(renderer) {
  parent.init(renderer);
  initEffects(renderer);
  initAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  parent.render(entity, renderLayer, isFirstPersonArm);
};