var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "suit": "skyhighheroes:geo/geo_stelar_wave_suit_suit",
  "visor": "skyhighheroes:geo/geo_stelar_wave_suit_visor",
  "base": "skyhighheroes:geo/geo_stelar_wave_suit_base",
  "hair": "skyhighheroes:geo/geo_stelar_hair",
});

var visor_model;

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND") {
        return "suit";
      } else {
        return "base";
      };
    };
  });
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
  renderer.fixHatLayer("CHESTPLATE");
  renderer.setItemIcon("CHESTPLATE", "%s");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  hair = renderer.createEffect("fiskheroes:shield");
  hair.texture.set("hair");
  hair.anchor.set("head");
  hair.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(0.0, -11.0625, 2.0625);
  hair.large = true;
  var visor = renderer.createResource("MODEL", "skyhighheroes:WaveSuitVisor");
  visor.texture.set(null, "visor");
  visor_model = renderer.createEffect("fiskheroes:model").setModel(visor);
  visor_model.anchor.set("head");
  visor_model.setScale(1.0);
  visor_model.setOffset(0.0, 0.0, 0.0);
  nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0.0;
  nv.factor = 1.0;
  nv.firstPersonOnly = true;
  nv.setCondition(entity => true);
};

function initAnimations(renderer) {
  stuff.emCeilingAnimation(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  if (!(entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT" || entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND")) {
    hair.render();
  };
  visor_model.render();
};