var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
  "null": "skyhighheroes:null",
  "base": "skyhighheroes:wave_suit/wave_suit_base.tx.json",
  "visor": "skyhighheroes:wave_suit/wave_suit_visor.tx.json",
  "armor": "skyhighheroes:wave_suit/wave_suit_armor.tx.json",
  "armor_accent": "skyhighheroes:wave_suit/wave_suit_armor_accent.tx.json",
  "accent": "skyhighheroes:wave_suit/wave_suit_accent.tx.json",
});

function init(renderer) {
  renderer.setTexture((entity, renderLayer) => {
    return "null";
  });
  renderer.setLights((entity, renderLayer) => {
    return "null";
  });
  renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "leftLeg", "rightLeg");
  renderer.fixHatLayer("CHESTPLATE");
  renderer.setItemIcon("CHESTPLATE", "wave_suit");
  initEffects(renderer);
  initAnimations(renderer);
};

function initEffects(renderer) {
  visor = renderer.createEffect("fiskheroes:overlay");
  visor.texture.set(null, "visor");
  suit = renderer.createEffect("fiskheroes:overlay");
  suit.texture.set("base", null);
  armor = renderer.createEffect("fiskheroes:overlay");
  armor.texture.set("armor", null);
  accent = renderer.createEffect("fiskheroes:overlay");
  accent.texture.set("accent", null);
  armor_accent = renderer.createEffect("fiskheroes:overlay");
  armor_accent.texture.set("armor_accent", null);
};

function initAnimations(renderer) {
  stuff.emCeilingAnimation(renderer);
};

function render(entity, renderLayer, isFirstPersonArm) {
  visor.render();
  armor.render();
  armor_accent.render();
  accent.render();
  suit.render();
};