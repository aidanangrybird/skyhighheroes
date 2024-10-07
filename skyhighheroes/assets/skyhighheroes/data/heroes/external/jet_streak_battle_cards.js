/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  function cycleUpCard(player, manager, battleCardAmount) {
    if (typeof battleCardAmount === "undefined") {
      battleCardAmount = 3;
    };
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") + 1);
    if (player.getData("skyhighheroes:dyn/selected_battle_card") > battleCardAmount) {
      manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    };
    return true;
  };
  function cycleDownCard(player, manager, battleCardAmount) {
    if (typeof battleCardAmount === "undefined") {
      battleCardAmount = 3;
    };
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") - 1);
    if (player.getData("skyhighheroes:dyn/selected_battle_card") < 0) {
      manager.setData(player, "skyhighheroes:dyn/selected_battle_card", battleCardAmount);
    };
    return true;
  };
  function resetBattleCard(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    return true;
  };
  return {
    powers: function () {
      return [
        "skyhighheroes:em_battle_card_predation", "skyhighheroes:em_battle_cards", "skyhighheroes:em_battle_cards_aidan", "skyhighheroes:em_vortex_buster"
      ];
    },
    keyBinds: function (hero) {
      hero.addKeyBindFunc("CYCLE_UP_CARD", (player, manager) => cycleUpCard(player, manager, 6), "Next Battle Card", 1);
      hero.addKeyBindFunc("BATTLE_CARD_0", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        return true;
      }, "Return To Vortex Buster", 2);
      hero.addKeyBindFunc("BATTLE_CARD_1", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Squall Vortex\u00A7r> Battle Card Predation! \u00A76Barrier\u00A7r!");
        };
        return true;
      }, "Battle Card! Barrier!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_2", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Squall Vortex\u00A7r> Battle Card Predation! \u00A76Sword\u00A7r!");
        };
        return true;
      }, "Battle Card! Sword!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_3", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Squall Vortex\u00A7r> Battle Card Predation! \u00A76Shurikens\u00A7r!");
        };
        return true;
      }, "Battle Card! Shurikens!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_4", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Squall Vortex\u00A7r> Battle Card Predation! \u00A76Lightning\u00A7r!");
        };
        return true;
      }, "Battle Card! Lightning!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_5", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Squall Vortex\u00A7r> Battle Card Predation! \u00A76Derecho\u00A7r!");
        };
        return true;
      }, "Battle Card! Derecho!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_6", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Squall Vortex\u00A7r> Battle Card Predation! \u00A76Hail Cannon\u00A7r!");
        };
        return true;
      }, "Battle Card! Hail Cannon!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_RESET_PREDATION", (player, manager) => resetBattleCard(player, manager), "Return To Vortex Buster", 2);
      hero.addKeyBind("PREDATION", "Battle Card Predation", 2);
      hero.addKeyBindFunc("CYCLE_DOWN_CARD", (player, manager) => cycleDownCard(player, manager, 6), "Previous Battle Card", 3);
      hero.addKeyBind("AIM", "Aim Vortex Buster", 4);
      hero.addKeyBind("ENERGY_PROJECTION", "Derecho", 4);
      hero.addKeyBindFunc("BATTLE_CARD_RESET", (player, manager) => resetBattleCard(player, manager), "Return To Vortex Buster", 5);
      hero.addKeyBind("JET_STREAK_TOGGLE", "Toggle Vortex Buster", 5);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      var result = false;
      if (keyBind == "CYCLE_UP_CARD" || keyBind == "CYCLE_DOWN_CARD") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation");
      };
      if (keyBind == "PREDATION") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") > 0 || entity.getData("skyhighheroes:dyn/jet_streak_timer") < 1);
      };
      if (keyBind == "BATTLE_CARD_RESET_PREDATION") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking() && (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") > 0);
      };
      if (keyBind == "BATTLE_CARD_RESET") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") > 0;
      };
      if (keyBind == "BATTLE_CARD_0") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") == 0;
      };
      if (keyBind == "BATTLE_CARD_1") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 1;
      };
      if (keyBind == "BATTLE_CARD_2") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 2;
      };
      if (keyBind == "BATTLE_CARD_3") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 3;
      };
      if (keyBind == "BATTLE_CARD_4") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 4;
      };
      if (keyBind == "BATTLE_CARD_5") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 5;
      };
      if (keyBind == "BATTLE_CARD_6") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 6;
      };
      if (keyBind == "AIM") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/jet_streak_timer") < 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 0;
      };
      if (keyBind == "ENERGY_PROJECTION") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 5;
      };
      if (keyBind == "JET_STREAK_TOGGLE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty();
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      var uuid = "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
      var result = false;
      if (modifier.name() == "fiskheroes:damage_immunity") {
        var invis = ["explosion", "magic", "shuriken", "sharp", "bullet", "blunt", "saitama"];
        var normal = ["fire","cactus", "cold", "energy", "electricity", "sound", "thorns", "radiation",
          "water", "hulk", "holy", "hellfire", "adamantium", "mineral", "shockwave", "atlantean_steel",
          "eternium", "cosmic", "kryptonite", "light", "cs", "force", "jv", "primordial", "gale", "bifrost",
          "ice", "positive", "cursed", "cancel"
        ];
        if (normal.indexOf(modifier.id()) > -1) {
          result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
        };
        if (invis.indexOf(modifier.id()) > -1) {
          result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
        };
      };
      if (modifier.name() == "fiskheroes:controlled_flight") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1
      }
      if (modifier.name() == "fiskheroes:transformation") {
        if (modifier.id() == "jet_streak" || modifier.id() == "predation") {
          result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
        };
      };
      if (modifier.name() == "fiskheroes:icicles") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 6 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:energy_projection") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 5 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:lightning_cast") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 4 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:equipment") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 3 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:blade") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:shield") {
        if (modifier.name() == "barrier") {
          result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 1 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
        };
        if (modifier.name() == "sword") {
          result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
        };
      };
      if (modifier.name() == "fiskheroes:energy_bolt") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty();
      };
      return result;
    },
    tickHandler: function (entity, manager) {
      var sword = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
      manager.setData(entity, "skyhighheroes:dyn/sword", sword);
      manager.incrementData(entity, "skyhighheroes:dyn/sword_timer", 10, 10, entity.getData("skyhighheroes:dyn/sword"));
      var sword_on = entity.getData("skyhighheroes:dyn/sword_timer") == 1 && entity.getData("skyhighheroes:dyn/item_holding_timer") == 0;
      manager.incrementData(entity, "skyhighheroes:dyn/sword_blade_timer", 5, sword_on);
      var lightning = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 4 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
      manager.setData(entity, "skyhighheroes:dyn/lightning", lightning);
      manager.incrementData(entity, "skyhighheroes:dyn/lightning_timer", 10, 10, entity.getData("skyhighheroes:dyn/lightning"));
      var derecho = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 5 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
      manager.setData(entity, "skyhighheroes:dyn/derecho", derecho);
      manager.incrementData(entity, "skyhighheroes:dyn/derecho_timer", 10, 10, entity.getData("skyhighheroes:dyn/derecho"));
      var hail_cannon = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 6 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
      manager.setData(entity, "skyhighheroes:dyn/hail_cannon", hail_cannon);
      manager.incrementData(entity, "skyhighheroes:dyn/hail_cannon_timer", 10, 10, entity.getData("skyhighheroes:dyn/hail_cannon"));
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty() && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0.45 && entity.getData("skyhighheroes:dyn/predation_timer") < 0.55) {
        if (entity.getData("skyhighheroes:dyn/battle_card") == 1) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", false);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:shield", true);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 2) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:shield", true);
          manager.setData(entity, "fiskheroes:blade", true);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 3) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:utility_belt_type", 1);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 4) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 5) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 6) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
      };
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && ((entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.isSprinting()) || !entity.getHeldItem().isEmpty())) {
        manager.setData(entity, "skyhighheroes:dyn/jet_streak", false);
      };
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("fiskheroes:flight_boost_timer") < 1 && !entity.isSprinting()) && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/predation_timer") == 0) {
        if (entity.getData("skyhighheroes:dyn/battle_card") == 1) {
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:shield", true);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 2) {
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:shield", true);
          manager.setData(entity, "fiskheroes:blade", true);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 3) {
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:utility_belt_type", 1);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 4) {
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 5) {
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 6) {
          manager.setData(entity, "skyhighheroes:dyn/jet_streak", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
      };
    },
    name: function () {
      return "jetStreakBattleCards";
    }
  };
};