var chakra = implement("skyhighheroes:external/chakra");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "null": "skyhighheroes:null",
  "santa_hat": "skyhighheroes:santa_hat",
  "suit_lights": "skyhighheroes:chakra/chakra_the_invincible_lights",
  "suit_mask_on": "skyhighheroes:chakra/chakra_the_invincible_mask_on",
  "suit_mask_off": "skyhighheroes:chakra/chakra_the_invincible_mask_off",
  "suit_inactive_mask_on": "skyhighheroes:chakra/chakra_the_invincible_inactive_mask_on",
  "suit_inactive_mask_off": "skyhighheroes:chakra/chakra_the_invincible_inactive_mask_off"
});

var santaHat;
var date = new Date();
var isChristmasSeason = (date.getDate() < 26 && date.getDate() > 0 && date.getMonth() == 11);

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if (entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW") {
        if (!entity.getData("fiskheroes:mask_open")) {
          return "suit_mask_on"
        } else {
          return "suit_mask_off";
        };
      };
      if (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT") {
        if (!entity.getData("fiskheroes:mask_open")) {
          return "suit_inactive_mask_on"
        } else {
          return "suit_inactive_mask_off";
        };
      };
      if (entity.getData("skyhighheroes:dyn/chakra_suit")) {
        if (!entity.getData("fiskheroes:mask_open")) {
          return "suit_mask_on"
        } else {
          return "suit_mask_off";
        };
      } else {
        return "null";
      };
    };
  });
  renderer.setLights((entity, renderLayer) => {
    if (renderLayer == "CHESTPLATE") {
      if (entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND" || entity.as("DISPLAY").getDisplayType() == "HOLOGRAM" || entity.as("DISPLAY").getDisplayType() == "ITERATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "DATABASE_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "BOOK_PREVIEW") {
        return "suit_lights";
      };
      if (entity.as("DISPLAY").getDisplayType() == "FABRICATOR_PREVIEW" || entity.as("DISPLAY").getDisplayType() == "FABRICATOR_RESULT") {
        return "null";
      };
      if (entity.getData("skyhighheroes:dyn/chakra_suit")) {
        return "suit_lights";
      } else {
        return "null";
      };
    };
  });
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
  renderer.fixHatLayer("CHESTPLATE");
  renderer.setItemIcon("CHESTPLATE", "%s_suit");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  if (isChristmasSeason) {
    var santa_hat_model = renderer.createResource("MODEL", "skyhighheroes:SantaHat");
    santa_hat_model.texture.set("santa_hat");
    santaHat = renderer.createEffect("fiskheroes:model").setModel(santa_hat_model);
    santaHat.anchor.set("head");
    santaHat.setScale(1.05);
    santaHat.setOffset(0.0, -5.75, 1.25);
    santaHat.setRotation(-45.0, 0.0, 0.0);
  };
  chakra.initBeams(renderer, getColor());
  chakra.initForceField(renderer, getColor());
  chakra.initTelekinesis(renderer, getName());
  nv = renderer.bindProperty("fiskheroes:night_vision");
  nv.fogStrength = 0.0;
  nv.factor = 1.0;
  nv.firstPersonOnly = true;
  nv.setCondition(entity => true);
};

function initAnimations(renderer) {
  stuff.initHoloFlightAnim(renderer, "chakra.HOLOGRAM_FLIGHT", "skyhighheroes:chakra_holo_flight");
  chakra.initChakraAnimations(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  if (isChristmasSeason) {
    santaHat.setScale(1.05);
    santaHat.setOffset(0.0, -5.75, 1.25);
    santaHat.setRotation(-45.0, 0.0, 0.0);
    santaHat.render();
  };
};

function getColor() {
  return 0xFF00FF;
};
function getName() {
  return "chakra"
};