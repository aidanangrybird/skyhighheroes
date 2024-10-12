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
        "skyhighheroes:em_battle_card_predation",
        "skyhighheroes:em_supernova_buster"
      ];
    },
    keyBinds: function (hero) {
      hero.addKeyBindFunc("BATTLE_CARD_RESET_PREDATION", (player, manager) => resetBattleCard(player, manager), "Return To Supernova Buster", 2);
      hero.addKeyBind("PREDATION", "Battle Card Predation", 2);
      hero.addKeyBind("AIM", "Aim Supernova Buster", 4);
      hero.addKeyBindFunc("DESYNCHRONIZE_WAVES", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
        manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/predation", false);
        manager.setData(player, "skyhighheroes:dyn/supernova_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/supernova", false);
        if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        };
        if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
        };
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBindFunc("SYNCHRONIZE_WAVES", (player, manager) => {
        if (player.getUUID() == "411ed8b9-b246-449c-b941-02790d0971dd") {
          if (PackLoader.getSide() == "CLIENT") {
            PackLoader.printChat("<Aegon Stelar> EM Wave Change! \u00A7dAegon Stelar\u00A7r, On-Air!");
          };
          manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
          manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
          manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
          manager.setData(player, "skyhighheroes:dyn/predation", false);
          manager.setData(player, "skyhighheroes:dyn/pryetak_timer", 0);
          manager.setData(player, "skyhighheroes:dyn/pryetak", false);
          manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        } else {
          if (PackLoader.getSide() == "CLIENT") {
            PackLoader.printChat("<\u00A7dSupernova\u00A7r> Who are you?");
          };
        };
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBind("WAVE_CHANGE", "EM Wave Change!", 5);
      hero.addKeyBind("SUPERNOVA_TOGGLE", "Toggle Supernova Buster", 5);
      hero.addKeyBind("AIM", "Aim Supernova Buster", 4);
      hero.addKeyBindFunc("COLD_TEMPERATURE", (player, manager) => {
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A7dSupernova\u00A7r> You are too cold for us to EM Wave Change.");
        };
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too cold", 5);
      hero.addKeyBindFunc("HOT_TEMPERATURE", (player, manager) => {
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A7dSupernova\u00A7r> You are too hot for us to EM Wave Change.");
        };
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too hot", 5);
      hero.addKeyBindFunc("BATTLE_CARD_RESET", (player, manager) => resetBattleCard(player, manager), "Return To Supernova Buster", 5);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      var result = false;
      var uuid = "411ed8b9-b246-449c-b941-02790d0971dd";
      if (keyBind == "PREDATION") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") > 0 || entity.getData("skyhighheroes:dyn/supernova_timer") < 1);
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
        result = entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25));
      };
      if (keyBind == "AIM") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/supernova_timer") < 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 0;
      };
      if (keyBind == "COLD_TEMPERATURE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") <= -0.25;
      };
      if (keyBind == "HOT_TEMPERATURE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") >= 0.25;
      };
      if (keyBind == "SUPERNOVA_TOGGLE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty();
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      var uuid = "411ed8b9-b246-449c-b941-02790d0971dd";
      var result = false;
      if (modifier.name() == "fiskheroes:transformation") {
        if (modifier.id() == "predation" || modifier.id() == "supernova") {
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
        manager.setData(entity, "skyhighheroes:dyn/supernova", false);
      };
    },
    name: function () {
      return "supernova";
    }
  };
};