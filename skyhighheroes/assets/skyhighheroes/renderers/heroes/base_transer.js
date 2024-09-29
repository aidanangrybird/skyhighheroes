function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      return "transer";
    };
  });
  renderer.setItemIcon("CHESTPLATE", "%s");
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
};

function render(entity, renderLayer, isFirstPersonArm) {
}