/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  //All of the required functions and stuff go here
  function resetBattleCard(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    return true;
  };
  return {
    powers: function () {
      return [
        "skyhighheroes:em_wave_change",
        "skyhighheroes:battle_card_predation",
        "skyhighheroes:galaxy_buster"
      ];
    },
    keyBinds: function (hero) {
      hero.addKeyBindFunc("BATTLE_CARD_RESET_PREDATION", (player, manager) => resetBattleCard(player, manager), "Return To Galaxy Buster", 2);
      hero.addKeyBind("PREDATION", "Battle Card Predation", 2);
      hero.addKeyBind("AIM", "Aim Galaxy Buster", 4);
      hero.addKeyBindFunc("DESYNCHRONIZE_WAVES", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
        manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/predation", false);
        manager.setData(player, "skyhighheroes:dyn/amethyst_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/amethyst", false);
        if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        };
        if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
        };
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBindFunc("SYNCHRONIZE_WAVES", (player, manager) => {
        if (player.getUUID() == "2389f9cd-351e-4d96-a277-847a24fd9048") {
          if (PackLoader.getSide() == "CLIENT") {
            PackLoader.printChat("<Cash Stelar> EM Wave Change! \u00A75Cash Stelar\u00A7r, On-Air!");
          };
          manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
          manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
          manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
          manager.setData(player, "skyhighheroes:dyn/predation", false);
          manager.setData(player, "skyhighheroes:dyn/amethyst_timer", 0);
          manager.setData(player, "skyhighheroes:dyn/amethyst", false);
          manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        } else {
          if (PackLoader.getSide() == "CLIENT") {
            PackLoader.printChat("<\u00A75Amethyst\u00A7r> Who are you?");
          };
        };
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBind("WAVE_CHANGE", "EM Wave Change!", 5);
      hero.addKeyBind("AMETHYST_TOGGLE", "Toggle Galaxy Buster", 5);
      hero.addKeyBind("AIM", "Aim Galaxy Buster", 4);
      hero.addKeyBindFunc("COLD_TEMPERATURE", (player, manager) => {
        if (player.getUUID() == "2389f9cd-351e-4d96-a277-847a24fd9048") {
          if (PackLoader.getSide() == "CLIENT") {
            PackLoader.printChat("\u00A7r<\u00A75Amethyst\u00A7r> You are too cold for us to EM Wave Change.");
          };
        } else {
          if (PackLoader.getSide() == "CLIENT") {
            PackLoader.printChat("<\u00A75Amethyst\u00A7r> Who are you?");
          };
        };
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too cold", 5);
      hero.addKeyBindFunc("HOT_TEMPERATURE", (player, manager) => {
        if (player.getUUID() == "2389f9cd-351e-4d96-a277-847a24fd9048") {
          if (PackLoader.getSide() == "CLIENT") {
            PackLoader.printChat("\u00A7r<\u00A75Amethyst\u00A7r> You are too hot for us to EM Wave Change.");
          };
        } else {
          if (PackLoader.getSide() == "CLIENT") {
            PackLoader.printChat("<\u00A75Amethyst\u00A7r> Who are you?");
          };
        };
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too hot", 5);
      hero.addKeyBindFunc("BATTLE_CARD_RESET", (player, manager) => resetBattleCard(player, manager), "Return To Galaxy Buster", 5);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      var result = false;
      if (keyBind == "PREDATION") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") > 0 || entity.getData("skyhighheroes:dyn/amethyst_timer") < 1);
      };
      if (keyBind == "BATTLE_CARD_RESET_PREDATION") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking() && (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") > 0);
      };
      if (keyBind == "BATTLE_CARD_RESET") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") > 0;
      };
      if (keyBind == "SYNCHRONIZE_WAVES") {
        result = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25);
      };
      if (keyBind == "DESYNCHRONIZE_WAVES") {
        result = entity.getData("fiskheroes:flight_timer") == 0 && (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking());
      };
      if (keyBind == "WAVE_CHANGE") {
        result = entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25));
      };
      if (keyBind == "AIM") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/amethyst_timer") < 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 0;
      };
      if (keyBind == "COLD_TEMPERATURE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") <= -0.25;
      };
      if (keyBind == "HOT_TEMPERATURE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") >= 0.25;
      };
      if (keyBind == "AMETHYST_TOGGLE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty();
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      var uuid = "2389f9cd-351e-4d96-a277-847a24fd9048";
      var result = false;
      if (modifier.name() == "fiskheroes:transformation") {
        if (modifier.id() == "predation" || modifier.id() == "amethyst") {
          result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
        };
        if (modifier.id() == "wave_change") {
          result = entity.getUUID() == uuid;
        };
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
        manager.setData(entity, "skyhighheroes:dyn/amethyst", false);
      };
    },
    name: function () {
      return "amethyst";
    }
  };
};