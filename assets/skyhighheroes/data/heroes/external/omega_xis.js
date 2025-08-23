/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  function resetBattleCard(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    return true;
  };
  function cycleUpCard(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") + 1);
    if (player.getData("skyhighheroes:dyn/selected_battle_card") > 5) {
      manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    };
  };
  function cycleDownCard(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") - 1);
    if (player.getData("skyhighheroes:dyn/selected_battle_card") < 0) {
      manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 5);
    };
  };
  return {
    name: "omegaXis",
    type: 8,
    emBeing: "Omega-Xis",
    powers: [
      "skyhighheroes:omega_xis",
      "skyhighheroes:em_wave_change",
      "skyhighheroes:battle_card_predation",
      "skyhighheroes:mega_buster"
    ],
    keyBinds: function (hero) {
      hero.addKeyBindFunc("BATTLE_CARD_RESET", (player, manager) => resetBattleCard(player, manager), "Return To Mega Buster", 2);
      hero.addKeyBind("GRAVITY_MANIPULATION", "Battle Card Predation", 2);
      hero.addKeyBind("AIM", "Aim Mega Buster", 4);
      hero.addKeyBindFunc("DESYNCHRONIZE_WAVES", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
        manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/predation", false);
        manager.setData(player, "skyhighheroes:dyn/omega_xis_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/omega_xis", false);
        if (player.getData("skyhighheroes:dyn/visualizer_toggle")) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        };
        if (!player.getData("skyhighheroes:dyn/visualizer_toggle")) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
        };
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBindFunc("SYNCHRONIZE_WAVES", (player, manager) => {
        system.shoutMessage(player, "<Geo Stelar> EM Wave Change! \u00A7bGeo Stelar\u00A7r, On-Air!", 16);
        manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
        manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/predation", false);
        manager.setData(player, "skyhighheroes:dyn/omega_xis_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/omega_xis", false);
        manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBind("WAVE_CHANGE", "EM Wave Change!", 5);
      hero.addKeyBind("OMEGA_XIS_TOGGLE", "Toggle Mega Buster", 5);
      hero.addKeyBindFunc("COLD_TEMPERATURE", (player, manager) => {
        system.shoutMessage(player, "\u00A7r<\u00A7bOmega-Xis\u00A7r> You are too cold for us to EM Wave Change.", 16);
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too cold", 5);
      hero.addKeyBindFunc("HOT_TEMPERATURE", (player, manager) => {
        system.shoutMessage(player, "\u00A7r<\u00A7bOmega-Xis\u00A7r> You are too hot for us to EM Wave Change.", 16);
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too hot", 5);
    },
    canAim: function (entity) {
      return (entity.getHeldItem().isEmpty() || entity.getHeldItem().name() == "fiskheroes:chronos_rifle") && entity.getData("fiskheroes:flight_boost_timer") == 0 && ((entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/omega_xis_timer") == 0) || entity.getData("skyhighheroes:dyn/battle_card") == 3) && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
    },
    isKeyBindEnabled: function (entity, keyBind) {
      var result = false;
      if (keyBind == "GRAVITY_MANIPULATION") {
        result = (entity.getData("skyhighheroes:dyn/battle_card") > 0 || entity.getData("skyhighheroes:dyn/omega_xis_timer") < 1) && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
      };
      if (keyBind == "BATTLE_CARD_RESET") {
        result = entity.isSneaking() && (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") > 0) && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
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
        result = !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && ((entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/omega_xis_timer") == 0) || entity.getData("skyhighheroes:dyn/battle_card") == 3) && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
      };
      if (keyBind == "COLD_TEMPERATURE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") <= -0.25;
      };
      if (keyBind == "HOT_TEMPERATURE") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") >= 0.25;
      };
      if (keyBind == "OMEGA_XIS_TOGGLE") {
        result = entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") < 1;
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      var result = false;
      if (modifier.name() == "fiskheroes:transformation") {
        if (modifier.id() == "predation" || modifier.id() == "omega_xis") {
          result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
        };
        if (modifier.id() == "wave_change") {
          result = true;
        };
      };
      if (modifier.name() == "fiskheroes:energy_bolt") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/battle_card") == 0;
      };
      if (modifier.name() == "fiskheroes:gravity_manipulation") {
        result = entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty()
      };
      return result;
    },
    tickHandler: function (entity, manager) {
      if (entity.getData("skyhighheroes:dyn/predation_timer") >= 1) {
        manager.setData(entity, "skyhighheroes:dyn/predation", false);
        manager.setData(entity, "skyhighheroes:dyn/predation_timer", 0.0);
      };
      if (entity.getData("fiskheroes:gravity_manip")) {
        if (entity.getData("skyhighheroes:dyn/reset_gravity_manip")) {
          manager.setData(entity, "fiskheroes:gravity_amount", 0);
          manager.setData(entity, "skyhighheroes:dyn/reset_gravity_manip", false);
        };
        var gravity_amount = entity.getData("fiskheroes:gravity_amount");
        if (gravity_amount > 0) {
          cycleUpCard(entity, manager);
          manager.setData(entity, "skyhighheroes:dyn/reset_gravity_manip", true);
        };
        if (gravity_amount < 0) {
          cycleDownCard(entity, manager);
          manager.setData(entity, "skyhighheroes:dyn/reset_gravity_manip", true);
        };
      };
      if (!entity.getData("fiskheroes:gravity_manip") && (entity.getData("skyhighheroes:dyn/battle_card") != entity.getData("skyhighheroes:dyn/selected_battle_card"))) {
        manager.setData(entity, "skyhighheroes:dyn/predation", true);
      };
    },
  };
};