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

var emBeings = [
  "supernova",
  "jetStreak",
  "amethyst",
  "pryetak",
  "solar",
  "singularity",
  "crimson",
  "omegaXis"]

var transers = [
  {"emBeing": "supernova", "color": "dragon"},
  {"emBeing": "jetStreak", "color": 0xFF900},
  {"emBeing": "amethyst", "color": "dragon"},
  {"emBeing": "pryetak", "color": "leo"},
  {"emBeing": "solar", "color": "pegasus"},
  {"emBeing": "singularity", "color": "leo"},
  {"emBeing": "crimson", "color": "dragon"},
  {"emBeing": "omegaXis", "color": "pegasus"}
];