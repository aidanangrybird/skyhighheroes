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
      hero.addKeyBindFunc("CYCLE_CHATS_EM", (player, manager) => cycleChats(player, manager), "Cycle chats", 2);
      hero.addKeyBindFunc("CYCLE_CHAT_MODES_EM", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 2);
      hero.addKeyBind("TELEPORT", "Transmit", 1);
      hero.addKeyBind("INVISIBILITY", "Become Wave", 3);
      hero.addKeyBindFunc("FORTUNE_SWITCH", (player, manager) => toolSwitchEnchant(player, manager), "Active Enchant: Silk Touch", 4);
      hero.addKeyBindFunc("SILK_SWITCH", (player, manager) => toolSwitchEnchant(player, manager), "Active Enchant: Fortune", 4);
      hero.addKeyBind("RIFLE_AIM", "Aim Rifle", 4);
      hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
      hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
      hero.addKeyBindFunc("DESYNCHRONIZE_WAVES", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
        manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/predation", false);
        manager.setData(player, "skyhighheroes:dyn/jet_streak_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/jet_streak", false);
        if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        };
        if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
        };
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBindFunc("SYNCHRONIZE_WAVES", (player, manager) => {
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("<Aidan Stelar> EM Wave Change! \u00A76Aidan Stelar\u00A7r, On-Air!");
        };
        manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
        manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/predation", false);
        manager.setData(player, "skyhighheroes:dyn/jet_streak_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/jet_streak", false);
        manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBind("WAVE_CHANGE", "EM Wave Change!", 5);
      hero.addKeyBind("JET_STREAK_TOGGLE", "Toggle Vortex Buster", 5);
      hero.addKeyBind("INTANGIBILITY", "Become in Phase", 5);
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
    keyBindEnabled: function (entity, keyBind) {
      var uuid = "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";/*
      if (keyBind == "CYCLE_CHATS_EM") {
        return entity.getUUID() == uuid && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/jet_streak_timer") == 1;
      };
      if (keyBind == "CYCLE_CHAT_MODES_EM") {
        return entity.getUUID() == uuid && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/jet_streak_timer") == 1;
      };
      if (keyBind == "DESYNCHRONIZE_WAVES") {
        return entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking());
      };
      if (keyBind == "WAVE_CHANGE") {
        return entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25));
      };
      if (keyBind == "COLD_TEMPERATURE") {
        return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") <= -0.25;
      };
      if (keyBind == "HOT_TEMPERATURE") {
        return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") >= 0.25;
      };
      if (keyBind == "SYNCHRONIZE_WAVES") {
        return entity.getUUID() == uuid && (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25);
      };
      if (keyBind == "INTANGIBILITY") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") > 0;
      };
      if (keyBind == "SHIELD_THROW") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
      };
      if (keyBind == "CHARGE_ENERGY") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
      };
      if (keyBind == "TELEPORT" || keyBind == "INVISIBILITY") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation");
      };
      if (keyBind == "SILK_SWITCH") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/tool_enchant") == 0 && (entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" || "fiskheroes:tutridium_pickaxe") && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(35) == 4 && entity.getHeldItem().getEnchantmentLevel(34) == 5;
      };
      if (keyBind == "FORTUNE_SWITCH") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/tool_enchant") == 1 && (entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" || "fiskheroes:tutridium_pickaxe") && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(33) == 1 && entity.getHeldItem().getEnchantmentLevel(34) == 5;
      };
      if (keyBind == "RIFLE_AIM") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:chronos_rifle";
      }; */
      var waveChange = entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25));
      return {
        keybinds: ["WAVE_CHANGE"],
        triggers: [waveChange]
      };
    },
    isModifierEnabled: function (entity, modifier) {
      if (modifier.name() == "fiskheroes:transformation" && modifier.id() == "wave_change") {
        return entity.getUUID() == uuid;
      };
      if (modifier.name() == "fiskheroes:intangibility") {
        if (modifier.id() == "not_absolute") {
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getPunchTimer() > 0;
        };
        if (modifier.id() == "absolute") {
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getPunchTimer() == 0;
        };
      };
      return false;
    },
    name: function () {
      return "jetStreakSquallVortex";
    }
  };
};