var stelar = implement("skyhighheroes:external/stelar");
var stuff = implement("skyhighheroes:external/stuff");

var text_renderer;

loadTextures({
  "null": "skyhighheroes:null",
  "base": "skyhighheroes:wave_suit/wave_suit_base.tx.json",
  "visor": "skyhighheroes:wave_suit/wave_suit_visor.tx.json",
  "armor": "skyhighheroes:wave_suit/wave_suit_armor.tx.json",
  "armor_accent": "skyhighheroes:wave_suit/wave_suit_armor_accent.tx.json",
  "accent": "skyhighheroes:wave_suit/wave_suit_accent.tx.json",
  "character_0": "skyhighheroes:characters/wave_suit/wave_suit_character_0.tx.json",
  "character_1": "skyhighheroes:characters/wave_suit/wave_suit_character_1.tx.json",
  "character_2": "skyhighheroes:characters/wave_suit/wave_suit_character_2.tx.json",
  "character_3": "skyhighheroes:characters/wave_suit/wave_suit_character_3.tx.json",
  "character_4": "skyhighheroes:characters/wave_suit/wave_suit_character_4.tx.json",
  "character_5": "skyhighheroes:characters/wave_suit/wave_suit_character_5.tx.json",
  "character_6": "skyhighheroes:characters/wave_suit/wave_suit_character_6.tx.json",
  "character_7": "skyhighheroes:characters/wave_suit/wave_suit_character_7.tx.json",
  "character_8": "skyhighheroes:characters/wave_suit/wave_suit_character_8.tx.json",
  "character_9": "skyhighheroes:characters/wave_suit/wave_suit_character_9.tx.json",
  "character_10": "skyhighheroes:characters/wave_suit/wave_suit_character_10.tx.json",
  "character_11": "skyhighheroes:characters/wave_suit/wave_suit_character_11.tx.json",
  "character_12": "skyhighheroes:characters/wave_suit/wave_suit_character_12.tx.json",
  "character_13": "skyhighheroes:characters/wave_suit/wave_suit_character_13.tx.json",
  "character_14": "skyhighheroes:characters/wave_suit/wave_suit_character_14.tx.json",
  "character_15": "skyhighheroes:characters/wave_suit/wave_suit_character_15.tx.json",
  "character_16": "skyhighheroes:characters/wave_suit/wave_suit_character_16.tx.json",
  "character_17": "skyhighheroes:characters/wave_suit/wave_suit_character_17.tx.json",
  "character_18": "skyhighheroes:characters/wave_suit/wave_suit_character_18.tx.json",
  "character_19": "skyhighheroes:characters/wave_suit/wave_suit_character_19.tx.json",
  "character_20": "skyhighheroes:characters/wave_suit/wave_suit_character_20.tx.json",
  "character_21": "skyhighheroes:characters/wave_suit/wave_suit_character_21.tx.json",
  "character_22": "skyhighheroes:characters/wave_suit/wave_suit_character_22.tx.json",
  "character_23": "skyhighheroes:characters/wave_suit/wave_suit_character_23.tx.json",
  "character_24": "skyhighheroes:characters/wave_suit/wave_suit_character_24.tx.json",
  "character_25": "skyhighheroes:characters/wave_suit/wave_suit_character_25.tx.json",
  "character_26": "skyhighheroes:characters/wave_suit/wave_suit_character_26.tx.json",
  "character_27": "skyhighheroes:characters/wave_suit/wave_suit_character_27.tx.json",
  "character_28": "skyhighheroes:characters/wave_suit/wave_suit_character_28.tx.json",
  "character_29": "skyhighheroes:characters/wave_suit/wave_suit_character_29.tx.json",
  "character_30": "skyhighheroes:characters/wave_suit/wave_suit_character_30.tx.json",
  "character_31": "skyhighheroes:characters/wave_suit/wave_suit_character_31.tx.json",
  "character_32": "skyhighheroes:characters/wave_suit/wave_suit_character_32.tx.json",
  "character_33": "skyhighheroes:characters/wave_suit/wave_suit_character_33.tx.json",
  "character_34": "skyhighheroes:characters/wave_suit/wave_suit_character_34.tx.json",
  "character_35": "skyhighheroes:characters/wave_suit/wave_suit_character_35.tx.json",
  "character_36": "skyhighheroes:characters/wave_suit/wave_suit_character_36.tx.json",
  "character_37": "skyhighheroes:characters/wave_suit/wave_suit_character_37.tx.json",
  "character_38": "skyhighheroes:characters/wave_suit/wave_suit_character_38.tx.json",
  "character_39": "skyhighheroes:characters/wave_suit/wave_suit_character_39.tx.json",
  "character_40": "skyhighheroes:characters/wave_suit/wave_suit_character_40.tx.json",
  "character_41": "skyhighheroes:characters/wave_suit/wave_suit_character_41.tx.json",
  "character_42": "skyhighheroes:characters/wave_suit/wave_suit_character_42.tx.json",
  "character_43": "skyhighheroes:characters/wave_suit/wave_suit_character_43.tx.json",
  "character_44": "skyhighheroes:characters/wave_suit/wave_suit_character_44.tx.json",
  "character_45": "skyhighheroes:characters/wave_suit/wave_suit_character_45.tx.json",
  "character_46": "skyhighheroes:characters/wave_suit/wave_suit_character_46.tx.json",
  "character_47": "skyhighheroes:characters/wave_suit/wave_suit_character_47.tx.json",
  "character_48": "skyhighheroes:characters/wave_suit/wave_suit_character_48.tx.json",
  "character_49": "skyhighheroes:characters/wave_suit/wave_suit_character_49.tx.json",
  "character_50": "skyhighheroes:characters/wave_suit/wave_suit_character_50.tx.json",
  "character_51": "skyhighheroes:characters/wave_suit/wave_suit_character_51.tx.json",
  "character_52": "skyhighheroes:characters/wave_suit/wave_suit_character_52.tx.json",
  "character_53": "skyhighheroes:characters/wave_suit/wave_suit_character_53.tx.json",
  "character_54": "skyhighheroes:characters/wave_suit/wave_suit_character_54.tx.json",
  "character_55": "skyhighheroes:characters/wave_suit/wave_suit_character_55.tx.json",
  "character_56": "skyhighheroes:characters/wave_suit/wave_suit_character_56.tx.json",
  "character_57": "skyhighheroes:characters/wave_suit/wave_suit_character_57.tx.json",
  "character_58": "skyhighheroes:characters/wave_suit/wave_suit_character_58.tx.json",
  "character_59": "skyhighheroes:characters/wave_suit/wave_suit_character_59.tx.json",
  "character_60": "skyhighheroes:characters/wave_suit/wave_suit_character_60.tx.json",
  "character_61": "skyhighheroes:characters/wave_suit/wave_suit_character_61.tx.json",
  "character_62": "skyhighheroes:characters/wave_suit/wave_suit_character_62.tx.json",
  "character_63": "skyhighheroes:characters/wave_suit/wave_suit_character_63.tx.json",
  "character_64": "skyhighheroes:characters/wave_suit/wave_suit_character_64.tx.json",
  "character_65": "skyhighheroes:characters/wave_suit/wave_suit_character_65.tx.json",
  "character_66": "skyhighheroes:characters/wave_suit/wave_suit_character_66.tx.json",
  "character_67": "skyhighheroes:characters/wave_suit/wave_suit_character_67.tx.json",
  "character_68": "skyhighheroes:characters/wave_suit/wave_suit_character_68.tx.json",
  "character_69": "skyhighheroes:characters/wave_suit/wave_suit_character_69.tx.json",
  "character_70": "skyhighheroes:characters/wave_suit/wave_suit_character_70.tx.json",
  "character_71": "skyhighheroes:characters/wave_suit/wave_suit_character_71.tx.json",
  "character_72": "skyhighheroes:characters/wave_suit/wave_suit_character_72.tx.json",
  "character_73": "skyhighheroes:characters/wave_suit/wave_suit_character_73.tx.json",
  "character_74": "skyhighheroes:characters/wave_suit/wave_suit_character_74.tx.json",
  "character_75": "skyhighheroes:characters/wave_suit/wave_suit_character_75.tx.json",
  "character_76": "skyhighheroes:characters/wave_suit/wave_suit_character_76.tx.json",
  "character_77": "skyhighheroes:characters/wave_suit/wave_suit_character_77.tx.json",
  "character_78": "skyhighheroes:characters/wave_suit/wave_suit_character_78.tx.json",
  "character_79": "skyhighheroes:characters/wave_suit/wave_suit_character_79.tx.json",
  "character_80": "skyhighheroes:characters/wave_suit/wave_suit_character_80.tx.json",
  "character_81": "skyhighheroes:characters/wave_suit/wave_suit_character_81.tx.json",
  "character_82": "skyhighheroes:characters/wave_suit/wave_suit_character_82.tx.json",
  "character_83": "skyhighheroes:characters/wave_suit/wave_suit_character_83.tx.json",
  "character_84": "skyhighheroes:characters/wave_suit/wave_suit_character_84.tx.json",
  "character_85": "skyhighheroes:characters/wave_suit/wave_suit_character_85.tx.json",
  "character_86": "skyhighheroes:characters/wave_suit/wave_suit_character_86.tx.json",
  "character_87": "skyhighheroes:characters/wave_suit/wave_suit_character_87.tx.json",
  "character_88": "skyhighheroes:characters/wave_suit/wave_suit_character_88.tx.json",
  "character_89": "skyhighheroes:characters/wave_suit/wave_suit_character_89.tx.json",
  "character_90": "skyhighheroes:characters/wave_suit/wave_suit_character_90.tx.json",
  "character_91": "skyhighheroes:characters/wave_suit/wave_suit_character_91.tx.json",
  "character_92": "skyhighheroes:characters/wave_suit/wave_suit_character_92.tx.json",
  "character_93": "skyhighheroes:characters/wave_suit/wave_suit_character_93.tx.json"
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
  text_renderer = stuff.text(renderer);
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

var colors = ["Visor", "Armor", "Armor Accent", "Suit", "Accent"];

function render(entity, renderLayer, isFirstPersonArm) {
  visor.render();
  armor.render();
  armor_accent.render();
  accent.render();
  suit.render();

  if (entity.getData("skyhighheroes:dyn/wave_suit_editing")) {
    linesToRender = [];
    linesToRender.push(((entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 0) ? "> " : "") + "Visor: " + entity.getData("skyhighheroes:dyn/wave_suit_visor")*4);
    linesToRender.push(((entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 1) ? "> " : "") + "Armor: " + entity.getData("skyhighheroes:dyn/wave_suit_armor")*4);
    linesToRender.push(((entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 2) ? "> " : "") + "Armor Accent: " + entity.getData("skyhighheroes:dyn/wave_suit_armor_accent")*4);
    linesToRender.push(((entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 3) ? "> " : "") + "Suit: " + entity.getData("skyhighheroes:dyn/wave_suit")*4);
    linesToRender.push(((entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 4) ? "> " : "") + "Suit Accent: " + entity.getData("skyhighheroes:dyn/wave_suit_accent")*4);
    text_renderer.renderLines(isFirstPersonArm, "left", "center", linesToRender, -210.0, 0.0, -180.0, 1.0);
  };
};