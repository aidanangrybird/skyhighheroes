function cycleUpVisor(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_visor", entity.getData("skyhighheroes:dyn/wave_suit_visor") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_visor") > 89) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_visor", 0);
  };
  //chatMessage(entity, "Visor hue: " + entity.getData("skyhighheroes:dyn/wave_suit_visor")*4);
};

function cycleDownVisor(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_visor", entity.getData("skyhighheroes:dyn/wave_suit_visor") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_visor") < 0) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_visor", 89);
  };
  //chatMessage(entity, "Visor hue: " + entity.getData("skyhighheroes:dyn/wave_suit_visor")*4);
};

function cycleUpArmor(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor", entity.getData("skyhighheroes:dyn/wave_suit_armor") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_armor") > 89) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor", 0);
  };
  //chatMessage(entity, "Armor hue: " + entity.getData("skyhighheroes:dyn/wave_suit_armor")*4);
};

function cycleDownArmor(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor", entity.getData("skyhighheroes:dyn/wave_suit_armor") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_armor") < 0) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor", 89);
  };
  //chatMessage(entity, "Armor hue: " + entity.getData("skyhighheroes:dyn/wave_suit_armor")*4);
};

function cycleUpAccent(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_accent", entity.getData("skyhighheroes:dyn/wave_suit_accent") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_accent") > 89) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_accent", 0);
  };
  //chatMessage(entity, "Accent hue: " + entity.getData("skyhighheroes:dyn/wave_suit_accent")*4);
};

function cycleDownAccent(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_accent", entity.getData("skyhighheroes:dyn/wave_suit_accent") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_accent") < 0) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_accent", 89);
  };
  //chatMessage(entity, "Accent hue: " + entity.getData("skyhighheroes:dyn/wave_suit_accent")*4);
};

function cycleUpSuit(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit", entity.getData("skyhighheroes:dyn/wave_suit") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit") > 89) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit", 0);
  };
  //chatMessage(entity, "Suit hue: " + entity.getData("skyhighheroes:dyn/wave_suit")*4);
};

function cycleDownSuit(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit", entity.getData("skyhighheroes:dyn/wave_suit") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit") < 0) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit", 89);
  };
  //chatMessage(entity, "Suit hue: " + entity.getData("skyhighheroes:dyn/wave_suit")*4);
};

function cycleUpArmorAccent(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor_accent", entity.getData("skyhighheroes:dyn/wave_suit_armor_accent") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_armor_accent") > 89) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor_accent", 0);
  };
  //chatMessage(entity, "Armor accent hue: " + entity.getData("skyhighheroes:dyn/wave_suit_armor_accent")*4);
};

function cycleDownArmorAccent(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor_accent", entity.getData("skyhighheroes:dyn/wave_suit_armor_accent") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_armor_accent") < 0) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor_accent", 89);
  };
  //chatMessage(entity, "Armor accent hue: " + entity.getData("skyhighheroes:dyn/wave_suit_armor_accent")*4);
};

function cycleUpEditingMode(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_editing_mode", entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") + 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") > 4) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_editing_mode", 0);
  };
};

function cycleDownEditingMode(entity, manager) {
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_editing_mode", entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") - 1);
  if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") < 0) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_editing_mode", 4);
  };
};

function enableEditing(entity, manager) {
  var nbt = entity.getWornChestplate().nbt();
  if (entity.getName() == (nbt.hasKey("ownerName") ? nbt.getString("ownerName") : entity.getName()) && entity.getUUID() == (nbt.hasKey("ownerUUID") ? nbt.getString("ownerUUID") : entity.getUUID())) {
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_visor", nbt.getInteger("visorColor"));
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor", nbt.getInteger("armorColor"));
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_armor_accent", nbt.getInteger("armorAccentColor"));
    manager.setData(entity, "skyhighheroes:dyn/wave_suit", nbt.getInteger("suitColor"));
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_accent", nbt.getInteger("accentColor"));
    manager.setData(entity, "skyhighheroes:dyn/wave_suit_editing", true);
  } else {
    chatMessage(entity, "Suit is locked to " + nbt.getString("ownerName") + "!");
  };
  return true;
};

function lockColors(entity, manager) {
  var nbt = entity.getWornChestplate().nbt();
  manager.setInteger(nbt, "visorColor", entity.getData("skyhighheroes:dyn/wave_suit_visor"));
  manager.setInteger(nbt, "armorColor", entity.getData("skyhighheroes:dyn/wave_suit_armor"));
  manager.setInteger(nbt, "armorAccentColor", entity.getData("skyhighheroes:dyn/wave_suit_armor_accent"));
  manager.setInteger(nbt, "suitColor", entity.getData("skyhighheroes:dyn/wave_suit"));
  manager.setInteger(nbt, "accentColor", entity.getData("skyhighheroes:dyn/wave_suit_accent"));
  manager.setString(nbt, "ownerUUID", entity.getUUID());
  manager.setString(nbt, "ownerName", entity.getName());
  chatMessage(entity, "Locked wave suit to " + entity.getName() + "!");
  chatMessage(entity, "Visor hue: " + nbt.getInteger("visorColor")*4);
  chatMessage(entity, "Armor hue: " + nbt.getInteger("armorColor")*4);
  chatMessage(entity, "Armor accent hue: " + nbt.getInteger("armorAccentColor")*4);
  chatMessage(entity, "Suit hue: " + nbt.getInteger("suitColor")*4);
  chatMessage(entity, "Suit accent hue: " + nbt.getInteger("accentColor")*4);
  manager.setData(entity, "skyhighheroes:dyn/wave_suit_editing", false);
  return true;
};

function chatMessage(entity, message) {
  if (PackLoader.getSide() == "CLIENT") {
    entity.as("PLAYER").addChatMessage(message);
  };
};