function thing(entity, keyBind) {
  if (keyBind == "CYCLE_UP_CARD" || keyBind == "CYCLE_DOWN_CARD") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation");
  };
  if (keyBind == "PREDATION") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") > 0 || entity.getData("skyhighheroes:dyn/jet_streak_timer") < 1);
  };
  if (keyBind == "BATTLE_CARD_RESET_PREDATION") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking() && (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") > 0);
  };
  if (keyBind == "BATTLE_CARD_RESET") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") > 0;
  };
  if (keyBind == "BATTLE_CARD_0") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") == 0;
  };
  if (keyBind == "BATTLE_CARD_1") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 1;
  };
  if (keyBind == "BATTLE_CARD_2") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 2;
  };
  if (keyBind == "BATTLE_CARD_3") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 3;
  };
  if (keyBind == "BATTLE_CARD_4") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 4;
  };
  if (keyBind == "BATTLE_CARD_5") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 5;
  };
  if (keyBind == "BATTLE_CARD_6") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 6;
  };
  if (keyBind == "AIM") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/jet_streak_timer") < 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 0;
  };
  if (keyBind == "ENERGY_PROJECTION") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 5;
  };
  if (keyBind == "JET_STREAK_TOGGLE") {
    return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty();
  };
};

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
    keyBindEnabled: function (entity, keyBind) {/* 
      if (keyBind == "CYCLE_UP_CARD" || keyBind == "CYCLE_DOWN_CARD") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation");
      };
      if (keyBind == "PREDATION") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") > 0 || entity.getData("skyhighheroes:dyn/jet_streak_timer") < 1);
      };
      if (keyBind == "BATTLE_CARD_RESET_PREDATION") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking() && (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") > 0);
      };
      if (keyBind == "BATTLE_CARD_RESET") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") > 0;
      };
      if (keyBind == "BATTLE_CARD_0") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") == 0;
      };
      if (keyBind == "BATTLE_CARD_1") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 1;
      };
      if (keyBind == "BATTLE_CARD_2") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 2;
      };
      if (keyBind == "BATTLE_CARD_3") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 3;
      };
      if (keyBind == "BATTLE_CARD_4") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 4;
      };
      if (keyBind == "BATTLE_CARD_5") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 5;
      };
      if (keyBind == "BATTLE_CARD_6") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 6;
      };
      if (keyBind == "AIM") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/jet_streak_timer") < 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 0;
      };
      if (keyBind == "ENERGY_PROJECTION") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 5;
      };
      if (keyBind == "JET_STREAK_TOGGLE") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty();
      }; */
      var upDown = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation");
      var predation = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") > 0 || entity.getData("skyhighheroes:dyn/jet_streak_timer") < 1);
      var predationReset = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking() && (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") > 0);
      return {
        keybinds: ["CYCLE_UP_CARD", "CYCLE_DOWN_CARD", "PREDATION", "BATTLE_CARD_RESET_PREDATION"],
        triggers: [upDown, upDown, predation, predationReset]
      };
    },
    isModifierEnabled: function (entity, modifier) {
      if (modifier.name() == "fiskheroes:damage_immunity") {
        var invis = ["explosion", "magic", "shuriken", "sharp", "bullet", "blunt", "saitama"];
        var normal = ["fire","cactus", "cold", "energy", "electricity", "sound", "thorns", "radiation",
          "water", "hulk", "holy", "hellfire", "adamantium", "mineral", "shockwave", "atlantean_steel",
          "eternium", "cosmic", "kryptonite", "light", "cs", "force", "jv", "primordial", "gale", "bifrost",
          "ice", "positive", "cursed", "cancel"
        ];
        if (normal.indexOf(modifier.id()) > -1) {
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
        };
        if (invis.indexOf(modifier.id()) > -1) {
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
        };
      };
      if (modifier.name() == "fiskheroes:controlled_flight") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1
      }
      if (modifier.name() == "fiskheroes:transformation") {
        if (modifier.id() == "jet_streak" || modifier.id() == "predation") {
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
        };
      };
      if (modifier.name() == "fiskheroes:icicles") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 6 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:energy_projection") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 5 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:lightning_cast") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 4 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:equipment") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 3 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:blade") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:shield") {
        if (modifier.name() == "barrier") {
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 1 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
        };
        if (modifier.name() == "sword") {
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
        };
      };
      if (modifier.name() == "fiskheroes:energy_bolt") {
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty();
      };
    },
    name: function () {
      return "jetStreakBattleCards";
    }
  };
};