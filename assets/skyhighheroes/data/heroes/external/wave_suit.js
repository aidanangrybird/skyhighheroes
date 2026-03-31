aliasRegex = /[\s]/gm;

var sections = ["Visor", "Armor", "Armor accent", "Suit", "Suit accent"];

/**
 * Formats name to alias format
 * @param {string} input - Name to format
 * @returns Formatted alias
 **/
function formatAlias(input) {
  input = input.toLowerCase();
  output = input.replace(aliasRegex, function(thing) {
    return "_";
  });
  return output;
};

function cycleUpVisor(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_visor", entity.getData("skyhighheroes:dyn/wave_suit_visor") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_visor") > 89) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_visor", 0);
  };
  chatMessage(entity, "Visor hue: " + entity.getData("skyhighheroes:dyn/wave_suit_visor")*4);
};

function cycleDownVisor(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_visor", entity.getData("skyhighheroes:dyn/wave_suit_visor") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_visor") < 0) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_visor", 89);
  };
  chatMessage(entity, "Visor hue: " + entity.getData("skyhighheroes:dyn/wave_suit_visor")*4);
};

function cycleUpArmor(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor", entity.getData("skyhighheroes:dyn/wave_suit_armor") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_armor") > 89) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor", 0);
  };
  chatMessage(entity, "Armor hue: " + entity.getData("skyhighheroes:dyn/wave_suit_armor")*4);
};

function cycleDownArmor(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor", entity.getData("skyhighheroes:dyn/wave_suit_armor") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_armor") < 0) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor", 89);
  };
  chatMessage(entity, "Armor hue: " + entity.getData("skyhighheroes:dyn/wave_suit_armor")*4);
};

function cycleUpAccent(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_accent", entity.getData("skyhighheroes:dyn/wave_suit_accent") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_accent") > 89) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_accent", 0);
  };
  chatMessage(entity, "Accent hue: " + entity.getData("skyhighheroes:dyn/wave_suit_accent")*4);
};

function cycleDownAccent(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_accent", entity.getData("skyhighheroes:dyn/wave_suit_accent") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_accent") < 0) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_accent", 89);
  };
  chatMessage(entity, "Accent hue: " + entity.getData("skyhighheroes:dyn/wave_suit_accent")*4);
};

function cycleUpSuit(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit", entity.getData("skyhighheroes:dyn/wave_suit") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit") > 89) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit", 0);
  };
  chatMessage(entity, "Suit hue: " + entity.getData("skyhighheroes:dyn/wave_suit")*4);
};

function cycleDownSuit(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit", entity.getData("skyhighheroes:dyn/wave_suit") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit") < 0) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit", 89);
  };
  chatMessage(entity, "Suit hue: " + entity.getData("skyhighheroes:dyn/wave_suit")*4);
};

function cycleUpArmorAccent(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor_accent", entity.getData("skyhighheroes:dyn/wave_suit_armor_accent") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_armor_accent") > 89) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor_accent", 0);
  };
  chatMessage(entity, "Armor accent hue: " + entity.getData("skyhighheroes:dyn/wave_suit_armor_accent")*4);
};

function cycleDownArmorAccent(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor_accent", entity.getData("skyhighheroes:dyn/wave_suit_armor_accent") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_armor_accent") < 0) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor_accent", 89);
  };
  chatMessage(entity, "Armor accent hue: " + entity.getData("skyhighheroes:dyn/wave_suit_armor_accent")*4);
};

function cycleUpEditingMode(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_editing_mode", entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") > 4) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_editing_mode", 0);
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 0) {
    chatMessage(entity, "Now editing: Visor");
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 1) {
    chatMessage(entity, "Now editing: Armor");
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 2) {
    chatMessage(entity, "Now editing: Armor accent");
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 3) {
    chatMessage(entity, "Now editing: Suit");
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 4) {
    chatMessage(entity, "Now editing: Suit accent");
  };
};

function cycleDownEditingMode(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_editing_mode", entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") < 0) {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_editing_mode", 4);
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 0) {
    chatMessage(entity, "Now editing: Visor");
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 1) {
    chatMessage(entity, "Now editing: Armor");
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 2) {
    chatMessage(entity, "Now editing: Armor accent");
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 3) {
    chatMessage(entity, "Now editing: Suit");
  };
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 4) {
    chatMessage(entity, "Now editing: Suit accent");
  };
};

function unlockSuit(entity, manager) {
  var nbt = entity.getWornChestplate().nbt();
  if (((nbt.hasKey("ownerUUID") ? (entity.getUUID() == nbt.getString("ownerUUID")) : true)) || entity.as("PLAYER").isCreativeMode()) {
    manager.setString(nbt, "ownerUUID", "");
    manager.setString(nbt, "ownerName", "");
    var displayTag = nbt.getCompoundTag("display");
    var loreList = manager.newTagList();
    manager.appendString(loreList, "Owner: None");
    manager.appendString(loreList, "Visor hue: " + (nbt.getInteger('visorColor') * 4));
    manager.appendString(loreList, "Armor hue: " + (nbt.getInteger('armorColor') * 4));
    manager.appendString(loreList, "Armor accent hue: " + (nbt.getInteger('armorAccentColor') * 4));
    manager.appendString(loreList, "Suit hue: " + (nbt.getInteger('suitColor') * 4));
    manager.appendString(loreList, "Suit accent hue: " + (nbt.getInteger('accentColor') * 4));
    manager.setTagList(displayTag, "Lore", loreList);
    manager.setBoolean(nbt, "locked", false);
  };
  return true;
};

function lockColors(entity, manager) {
  manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_editing", !entity.getData("skyhighheroes:dyn/wave_suit_editing"));
  var nbt = entity.getWornChestplate().nbt();
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing")) {
    if ((nbt.hasKey("ownerUUID") ? (entity.getUUID() == nbt.getString("ownerUUID")) : true)) {
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_visor", nbt.getInteger("visorColor"));
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor", nbt.getInteger("armorColor"));
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_armor_accent", nbt.getInteger("armorAccentColor"));
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit", nbt.getInteger("suitColor"));
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/wave_suit_accent", nbt.getInteger("accentColor"));
    };
  };
  if (!entity.getData("skyhighheroes:dyn/wave_suit_editing")) {
    manager.setInteger(nbt, "visorColor", entity.getData("skyhighheroes:dyn/wave_suit_visor"));
    manager.setInteger(nbt, "armorColor", entity.getData("skyhighheroes:dyn/wave_suit_armor"));
    manager.setInteger(nbt, "armorAccentColor", entity.getData("skyhighheroes:dyn/wave_suit_armor_accent"));
    manager.setInteger(nbt, "suitColor", entity.getData("skyhighheroes:dyn/wave_suit"));
    manager.setInteger(nbt, "accentColor", entity.getData("skyhighheroes:dyn/wave_suit_accent"));
    manager.setString(nbt, "ownerUUID", entity.getUUID());
    manager.setString(nbt, "ownerName", entity.getName());
    var displayTag = nbt.getCompoundTag("display");
    var loreList = manager.newTagList();
    manager.appendString(loreList, "Owner: " + entity.getName());
    manager.appendString(loreList, "Visor hue: " + (nbt.getInteger('visorColor') * 4));
    manager.appendString(loreList, "Armor hue: " + (nbt.getInteger('armorColor') * 4));
    manager.appendString(loreList, "Armor accent hue: " + (nbt.getInteger('armorAccentColor') * 4));
    manager.appendString(loreList, "Suit hue: " + (nbt.getInteger('suitColor') * 4));
    manager.appendString(loreList, "Suit accent hue: " + (nbt.getInteger('accentColor') * 4));
    manager.setTagList(displayTag, "Lore", loreList);
    manager.setBoolean(nbt, "locked", true);
  };
  return true;
};

function currentColors(entity, manager) {
  var nbt = entity.getWornChestplate().nbt();
  chatMessage(entity, "Current color settings:");
  chatMessage(entity, "Visor hue: " + (entity.getData('skyhighheroes:dyn/wave_suit_editing') ? entity.getData('skyhighheroes:dyn/wave_suit_visor') : nbt.getInteger('visorColor')) * 4);
  chatMessage(entity, "Armor hue: " + (entity.getData('skyhighheroes:dyn/wave_suit_editing') ? entity.getData('skyhighheroes:dyn/wave_suit_armor') : nbt.getInteger('armorColor')) * 4);
  chatMessage(entity, "Armor accent hue: " + (entity.getData('skyhighheroes:dyn/wave_suit_editing') ? entity.getData('skyhighheroes:dyn/wave_suit_armor_accent') : nbt.getInteger('armorAccentColor')) * 4);
  chatMessage(entity, "Suit hue: " + (entity.getData('skyhighheroes:dyn/wave_suit_editing') ? entity.getData('skyhighheroes:dyn/wave_suit') : nbt.getInteger('suitColor')) * 4);
  chatMessage(entity, "Suit accent hue: " + (entity.getData('skyhighheroes:dyn/wave_suit_editing') ? entity.getData('skyhighheroes:dyn/wave_suit_accent') : nbt.getInteger('accentColor')) * 4);
  return true;
};

function pasteColors(entity, manager) {
  var nbt = entity.getWornChestplate().nbt();
  var nbtItem = entity.getHeldItem().nbt();
  if (!nbtItem.getBoolean("locked")) {
    manager.setInteger(nbtItem, "visorColor", nbt.getInteger("visorColor"));
    manager.setInteger(nbtItem, "armorColor", nbt.getInteger("armorColor"));
    manager.setInteger(nbtItem, "armorAccentColor", nbt.getInteger("armorAccentColor"));
    manager.setInteger(nbtItem, "suitColor", nbt.getInteger("suitColor"));
    manager.setInteger(nbtItem, "accentColor", nbt.getInteger("accentColor"));
    manager.setString(nbt, "ownerUUID", "");
    manager.setString(nbt, "ownerName", "");
    var displayTag = nbtItem.getCompoundTag("display");
    var loreList = manager.newTagList();
    manager.appendString(loreList, "Owner: None");
    manager.appendString(loreList, "Visor hue: " + (nbtItem.getInteger('visorColor') * 4));
    manager.appendString(loreList, "Armor hue: " + (nbtItem.getInteger('armorColor') * 4));
    manager.appendString(loreList, "Armor accent hue: " + (nbtItem.getInteger('armorAccentColor') * 4));
    manager.appendString(loreList, "Suit hue: " + (nbtItem.getInteger('suitColor') * 4));
    manager.appendString(loreList, "Suit accent hue: " + (nbtItem.getInteger('accentColor') * 4));
    manager.setTagList(displayTag, "Lore", loreList);
    manager.setBoolean(nbtItem, "locked", false);
  };
  return true;
};

function copyColors(entity, manager) {
  var nbt = entity.getWornChestplate().nbt();
  var nbtItem = entity.getHeldItem().nbt();
  manager.setInteger(nbt, "visorColor", nbtItem.getInteger("visorColor"));
  manager.setInteger(nbt, "armorColor", nbtItem.getInteger("armorColor"));
  manager.setInteger(nbt, "armorAccentColor", nbtItem.getInteger("armorAccentColor"));
  manager.setInteger(nbt, "suitColor", nbtItem.getInteger("suitColor"));
  manager.setInteger(nbt, "accentColor", nbtItem.getInteger("accentColor"));
  var displayTag = nbt.getCompoundTag("display");
  var loreList = manager.newTagList();
  manager.appendString(loreList, "Owner: None");
  manager.appendString(loreList, "Visor hue: " + (nbt.getInteger('visorColor') * 4));
  manager.appendString(loreList, "Armor hue: " + (nbt.getInteger('armorColor') * 4));
  manager.appendString(loreList, "Armor accent hue: " + (nbt.getInteger('armorAccentColor') * 4));
  manager.appendString(loreList, "Suit hue: " + (nbt.getInteger('suitColor') * 4));
  manager.appendString(loreList, "Suit accent hue: " + (nbt.getInteger('accentColor') * 4));
  manager.setTagList(displayTag, "Lore", loreList);
  return true;
};

function chatMessage(entity, message) {
  if (PackLoader.getSide() == "CLIENT") {
    entity.as("PLAYER").addChatMessage(message);
  };
};

function initWaveSuitNBT(entity, manager) {
  var nbt = entity.getWornChestplate().nbt();
  if (!nbt.hasKey("display")) {
    manager.setCompoundTag(nbt, "display", manager.newCompoundTag());
  };
  if (!nbt.hasKey("locked")) {
    manager.setBoolean(nbt, "locked", false);
  };
  if (!nbt.hasKey("visorColor")) {
    manager.setInteger(nbt, "visorColor", 0);
  };
  if (!nbt.hasKey("armorColor")) {
    manager.setInteger(nbt, "armorColor", 0);
  };
  if (!nbt.hasKey("armorAccentColor")) {
    manager.setInteger(nbt, "armorAccentColor", 0);
  };
  if (!nbt.hasKey("suitColor")) {
    manager.setInteger(nbt, "suitColor", 0);
  };
  if (!nbt.hasKey("accentColor")) {
    manager.setInteger(nbt, "accentColor", 0);
  };
};

function initWaveSuit(hero, name) {
  var suit_name = name;
  var suit_alias = formatAlias(name) + "_wave_suit";
  hero.setName(suit_name);
  hero.setAliases(suit_alias);
  hero.setTier(1);
  hero.setChestplate("Wave Suit");
  hero.addPowers("skyhighheroes:wave_suit")

  hero.addKeyBind("TELEPORT", "Transmit", 3);
  hero.addKeyBind("INVISIBILITY", "Wave World", 4);
  hero.addKeyBind("INTANGIBILITY", "Become in Phase", 5);

  hero.setDefaultScale(1.0);
  hero.addDamageProfile("MAIN", {
    "types": {
      "ELEMENT_NONE": 1.0
    }
  });
  hero.setDamageProfile((entity) => {
    return "MAIN";
  });
  hero.setModifierEnabled((entity, modifier) => {
    switch (modifier.name()) {
      case "fiskheroes:intangibility":
        switch (modifier.id()) {
        case "not_absolute":
          return entity.getPunchTimer() > 0;
        case "absolute":
          return entity.getPunchTimer() == 0;
        default:
          return false;
      };
      case "fiskheroes:teleportation":
        return true;
      case "fiskheroes:invisibility":
        return true;
      case "fiskheroes:controlled_flight":
        return true;
      case "fiskheroes:damage_immunity":
        return entity.getData("fiskheroes:invisible");
      case "fiskheroes:fire_immunity":
        return entity.getData("fiskheroes:invisible");
      case "fiskheroes:shape_shifting":
        return true;
      default:
        return false;
    };
  });
  hero.setKeyBindEnabled((entity, keyBind) => {
    switch (keyBind) {
      case "INVISIBILITY":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "TELEPORT":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "INTANGIBILITY":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing");
      default:
        return false;
    };
  });
  hero.setTickHandler((entity, manager) => {
    manager.setData(entity, "fiskheroes:penetrate_martian_invis", true);
    manager.setData(entity, "fiskheroes:disguise", suit_name);
    var x = entity.posX();
    var y = entity.posY();
    var z = entity.posZ();
    if (entity.world().getDimension() == 0 && entity.posY() >= 4000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
      manager.setData(entity, "fiskheroes:teleport_dest", manager.newCoords(x, y, z, 2595));
      manager.setData(entity, "fiskheroes:teleport_delay", 6);
    };
    if (entity.world().getDimension() == 2595 && entity.posY() >= 1000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
      manager.setData(entity, "fiskheroes:teleport_dest", manager.newCoords(x, y, z, 0));
      manager.setData(entity, "fiskheroes:teleport_delay", 6);
    };
    var t = entity.getData("skyhighheroes:dyn/superhero_boosting_landing_ticks");
    if (t == 0 && !entity.isSprinting() && !entity.isOnGround() && entity.motionY() < -1.25 && entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() && entity.world().blockAt(entity.pos()).name() == "minecraft:air") {
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", t = 12);
    } else if (t > 0) {
      manager.setData(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", --t);
    };
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_boosting_landing_timer", 2, 8, t > 0);
    var pain = (entity.rotPitch() > 12.5 && entity.motionY() < -0.075 && entity.motionY() > -1.25 && (entity.motionZ() > 0.125 || entity.motionZ() < -0.125 || entity.motionX() > 0.125 || entity.motionX() < -0.125)) && !entity.isSprinting() && !entity.isOnGround() && entity.getData("fiskheroes:flight_timer") > 0 && (entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -3, 0)).isSolid()) && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.world().blockAt(entity.pos()).name() == "minecraft:air";
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 10, 10, pain);
  });
};