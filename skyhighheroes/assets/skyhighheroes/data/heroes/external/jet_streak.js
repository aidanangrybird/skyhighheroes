/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  function toolSwitchEnchant(player, manager) {
    //Silk Touch
    if (player.getData("skyhighheroes:dyn/tool_enchant") == 0) {
      manager.setInteger(player.getHeldItem().nbt().getTagList("ench").getCompoundTag(1), "id", 33);
      manager.setInteger(player.getHeldItem().nbt().getTagList("ench").getCompoundTag(1), "lvl", 1);
    };
    //Fortune
    if (player.getData("skyhighheroes:dyn/tool_enchant") == 1) {
      manager.setInteger(player.getHeldItem().nbt().getTagList("ench").getCompoundTag(1), "id", 35);
      manager.setInteger(player.getHeldItem().nbt().getTagList("ench").getCompoundTag(1), "lvl", 4);
    };
    return true;
  };
  //All of the required functions and stuff go here
  var uuid = "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
  return {
    powers: function () {
      return [
        "skyhighheroes:em_wave_change",
        "skyhighheroes:em_wave_being"
      ]
    },
    keyBinds: function (hero) {
      hero.addKeyBind("JET_STREAK_TOGGLE", "Toggle Vortex Buster", 5);
      hero.addKeyBind("AIM", "Aim Vortex Buster", 4);
      hero.addKeyBindFunc("COLD_TEMPERATURE", (player, manager) => {
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Jet-Streak\u00A7r> You are too cold for us to EM Wave Change.");
        };
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too cold", 5);
      hero.addKeyBindFunc("HOT_TEMPERATURE", (player, manager) => {
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Jet-Streak\u00A7r> You are too hot for us to EM Wave Change.");
        };
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too hot", 5);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      var result = false;
      var uuid = "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
      if (keyBind == "SYNCHRONIZE_WAVES") {
        result = entity.getUUID() == uuid && (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25);
      };
      if (keyBind == "DESYNCHRONIZE_WAVES") {
        result = entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking());
      };
      if (keyBind == "WAVE_CHANGE") {
        result = entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25));
      };
      if (keyBind == "AIM") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/jet_streak_timer") < 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 0;
      };
      if (keyBind == "COLD_TEMPERATURE") {
        result = entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") <= -0.25;
      };
      if (keyBind == "HOT_TEMPERATURE") {
        result = entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") >= 0.25;
      };
      if (keyBind == "JET_STREAK_TOGGLE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty();
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      var uuid = "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
      var result = false;
      if (modifier.name() == "fiskheroes:transformation" && modifier.id() == "wave_change") {
        result = entity.getUUID() == uuid;
      };
      if (modifier.name() == "fiskheroes:energy_bolt") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty();
      };
      return result;
    },
    tickHandler: function (entity, manager) {
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && ((entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0 && entity.getData("skyhighheroes:dyn/predation_timer") < 1))) {
        manager.setData(entity, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "skyhighheroes:dyn/sword", false);
        manager.setData(entity, "skyhighheroes:dyn/jet_streak", false);
      };
      if (entity.getWornChestplate().getEnchantmentLevel(35) == -1) {
        manager.setData(entity, "skyhighheroes:dyn/shimmer_toggle", 1);
      };
      if (entity.getWornChestplate().getEnchantmentLevel(35) == 0) {
        manager.setData(entity, "skyhighheroes:dyn/shimmer_toggle", 0);
      };
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(33) == 1 && entity.getHeldItem().getEnchantmentLevel(34) == 5) {
        manager.setData(entity, "skyhighheroes:dyn/tool_enchant", 1);
      };
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(35) == 4 && entity.getHeldItem().getEnchantmentLevel(34) == 5) {
        manager.setData(entity, "skyhighheroes:dyn/tool_enchant", 0);
      };
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(33) == 1 && entity.getHeldItem().getEnchantmentLevel(34) == 5) {
        manager.setData(entity, "skyhighheroes:dyn/tool_enchant", 1);
      };
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(35) == 4 && entity.getHeldItem().getEnchantmentLevel(34) == 5) {
        manager.setData(entity, "skyhighheroes:dyn/tool_enchant", 0);
      };
      var item_holding = (!entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0);
      manager.incrementData(entity, "skyhighheroes:dyn/item_holding_timer", 10, item_holding);
      var equipment = entity.getWornChestplate().nbt().getTagList("Equipment");
      if (equipment.getCompoundTag(0).getCompoundTag("Item").getShort("Damage") > 0) {
        manager.setShort(equipment.getCompoundTag(0).getCompoundTag("Item"), "Damage", 0)
      };
      if (equipment.getCompoundTag(1).getCompoundTag("Item").getShort("Damage") > 0) {
        manager.setShort(equipment.getCompoundTag(1).getCompoundTag("Item"), "Damage", 0)
      };
      if (equipment.getCompoundTag(2).getCompoundTag("Item").getShort("Damage") > 0) {
        manager.setShort(equipment.getCompoundTag(2).getCompoundTag("Item"), "Damage", 0)
      };
      if (equipment.getCompoundTag(3).getCompoundTag("Item").getShort("Damage") > 0) {
        manager.setShort(equipment.getCompoundTag(3).getCompoundTag("Item"), "Damage", 0)
      };
      if (equipment.getCompoundTag(4).getCompoundTag("Item").getShort("Damage") > 0) {
        manager.setShort(equipment.getCompoundTag(4).getCompoundTag("Item"), "Damage", 0)
      };
      if (equipment.getCompoundTag(5).getCompoundTag("Item").getShort("Damage") > 0) {
        manager.setShort(equipment.getCompoundTag(5).getCompoundTag("Item"), "Damage", 0)
      };
    },
    name: function () {
      return "jetStreak";
    }
  };
};