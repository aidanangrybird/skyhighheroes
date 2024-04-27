function init(hero, uuid, base, head, transformed, color) {
  if (typeof head !== "string") {
    head = "Omega-Xis";
  };
  if (typeof base !== "string") {
    base = "Geo Stelar";
  };
  if (typeof transformed !== "string") {
    transformed = "Mega Man";
  };
  if (typeof color !== "string") {
    color = "\u00A7r";
  };
  reset = "\u00A7r";
  hero.setName(color + transformed);
  hero.setTier(10);
  hero.setChestplate("Transer");
  hero.setVersion("Mega Man Star Force (OC)");
  hero.hide();
  
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:" + color + transformed + "'s Katanas},ench:[{id:16,lvl:6},{id:19,lvl:3},{id:20,lvl:3},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.nbt().getBoolean("Dual") && item.getEnchantmentLevel(16) == 6 && item.getEnchantmentLevel(19) == 3 && item.getEnchantmentLevel(20) == 3 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == color + transformed + "'s Katanas"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:" + color + transformed + "'s Scythe},ench:[{id:16,lvl:6},{id:19,lvl:3},{id:20,lvl:3},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(16) == 6 && item.getEnchantmentLevel(19) == 3 && item.getEnchantmentLevel(20) == 3 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == color + transformed + "'s Scythe"));
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:" + color + transformed + "'s Rifle},ench:[{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(34) == 5 && item.displayName() == color + transformed + "'s Rifle"));
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:" + color + transformed + "'s Shield},ench:[{id:16,lvl:6},{id:19,lvl:3},{id:20,lvl:3},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.nbt().getBoolean("Electromagnetic") && item.getEnchantmentLevel(16) == 6 && item.getEnchantmentLevel(19) == 3 && item.getEnchantmentLevel(20) == 3 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == color + transformed + "'s Shield"));
  hero.addPrimaryEquipment("fiskheroes:tutridium_pickaxe{display:{Name:" + color + transformed + "'s Pickaxe},ench:[{id:32,lvl:7},{id:35,lvl:4},{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(32) == 7 && (item.getEnchantmentLevel(33) == 1 || item.getEnchantmentLevel(35) == 4) && item.getEnchantmentLevel(34) == 5 && item.displayName() == color + transformed + "'s Pickaxe"));
  hero.addPrimaryEquipment("fiskheroes:tutridium_shovel{display:{Name:" + color + transformed + "'s Shovel},ench:[{id:32,lvl:7},{id:33,lvl:1},{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(32) == 7 && (item.getEnchantmentLevel(33) == 1 || item.getEnchantmentLevel(35) == 4) && item.getEnchantmentLevel(34) == 5 && item.displayName() == color + transformed + "'s Shovel"));

  hero.addPowers("skyhighheroes:em_wave_change", "skyhighheroes:em_wave_being", "skyhighheroes:em_battle_card_predation", "skyhighheroes:em_mega_buster");
  hero.addAttribute("SPRINT_SPEED", 0.2, 1);
  hero.addAttribute("STEP_HEIGHT", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
  hero.addAttribute("PUNCH_DAMAGE", 9.5, 0);
  hero.addAttribute("KNOCKBACK", 2.5, 0);
  hero.addAttribute("IMPACT_DAMAGE", 50.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

  hero.addKeyBind("TELEPORT", "Transmit", 1);
  hero.addKeyBindFunc("CYCLE_CLOTHES", cycleClothes, "Change Clothes", 1);
  hero.addKeyBindFunc("SHIMMER_TOGGLE", shimmerToggle, "Shimmer Toggle", 1);
  hero.addKeyBindFunc("CYCLE_UP_CARD", cycleUpCard, "Next Battle Card", 1);
  hero.addKeyBindFunc("VISUALIZER_TOGGLE", visualizerToggle, "Toggle Visualizer", 2);
  hero.addKeyBindFunc("BATTLE_CARD_0", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    return true;
  }, "Return To Mega Buster", 2);
  hero.addKeyBindFunc("BATTLE_CARD_1", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + transformed + "\u00A7r> Battle Card Predation! " + color + "Barrier\u00A7r!");
    };
    return true;
  }, "Battle Card! Barrier!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_2", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + transformed + "\u00A7r> Battle Card Predation! " + color + "Sword\u00A7r!");
    };
    return true;
  }, "Battle Card! Sword!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_3", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + transformed + "\u00A7r> Battle Card Predation! " + color + "Shurikens\u00A7r!");
    };
    return true;
  }, "Battle Card! Shurikens!", 2);
  //hero.addKeyBindFunc("BATTLE_CARD_4", activateBattleCard, "Creetle", 2);
  hero.addKeyBindFunc("BATTLE_CARD_RESET_PREDATION", resetBattleCard, "Return To Mega Buster", 2);
  hero.addKeyBind("PREDATION", "Battle Card Predation", 2);
  hero.addKeyBind("INVISIBILITY", "Become Wave", 3);
  hero.addKeyBindFunc("CYCLE_DOWN_CARD", cycleDownCard, "Previous Battle Card", 3);
  hero.addKeyBindFunc("HOOD_TOGGLE", hoodToggle, "Toggle Hood", 3);
  hero.addKeyBindFunc("FORTUNE_SWITCH", toolSwitchEnchant, "Active Enchant: Silk Touch", 4);
  hero.addKeyBindFunc("SILK_SWITCH", toolSwitchEnchant, "Active Enchant: Fortune", 4);
  hero.addKeyBind("AIM", "Aim", 4);
  hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
  hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
  hero.addKeyBindFunc("DESYNCHRONIZE_WAVES", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
    manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
    manager.setData(player, "skyhighheroes:dyn/predation", false);
    manager.setData(player, "skyhighheroes:dyn/omega_xis_timer", 0);
    manager.setData(player, "skyhighheroes:dyn/omega_xis", false);
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
      PackLoader.printChat("\u00A7r<" + base + "\u00A7r> EM Wave Change! " + color + base + "\u00A7r, On-Air!");
    };
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
  hero.addKeyBindFunc("BATTLE_CARD_RESET", resetBattleCard, "Return To Mega Buster", 5);
  hero.addKeyBind("OMEGA_XIS_TOGGLE", "Toggle \u00A7r" + head + "\u00A7r Head", 5);
  hero.addKeyBind("INTANGIBILITY", "Become in Phase", 5);
  hero.addKeyBindFunc("COLD_TEMPERATURE", (player, manager) => {
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + head + "\u00A7r> You are too cold for us to EM Wave Change.");
    };
    return true;
  }, "\u00A7mEM Wave Change!\u00A7r You are too cold", 5);
  hero.addKeyBindFunc("HOT_TEMPERATURE", (player, manager) => {
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + head + "\u00A7r> You are too hot for us to EM Wave Change.");
    };
    return true;
  }, "\u00A7mEM Wave Change!\u00A7r You are too hot", 5);
  
  hero.setDefaultScale(1.0);
  hero.setHasProperty(hasProperty);
  hero.setHasPermission(hasPermission);
  hero.addAttributeProfile("INACTIVE", inactiveProfile);
  hero.addAttributeProfile("SWORD", swordProfile);
  hero.addAttributeProfile("SHIELD", shieldProfile);
  hero.addAttributeProfile("FROZEN", frozenProfile);
  hero.addAttributeProfile("COLD3", cold3Profile);
  hero.addAttributeProfile("COLD2", cold2Profile);
  hero.addAttributeProfile("COLD1", cold1Profile);
  hero.addAttributeProfile("HOT1", hot1Profile);
  hero.addAttributeProfile("HOT2", hot2Profile);
  hero.addAttributeProfile("HOT3", hot3Profile);
  hero.addAttributeProfile("FIRE", fireProfile);
  hero.setAttributeProfile((entity) => {
    if (entity.getUUID() != uuid) {
      return "INACTIVE";
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1 && entity.getUUID() == uuid) {
      if (entity.getData("skyhighheroes:dyn/body_temperature") >= -1.4 && entity.getData("skyhighheroes:dyn/body_temperature") < -0.95 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "FROZEN";
      };
      if (entity.getData("skyhighheroes:dyn/body_temperature") >= -0.95 && entity.getData("skyhighheroes:dyn/body_temperature") < -0.85 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "COLD3";
      };
      if (entity.getData("skyhighheroes:dyn/body_temperature") >= -0.85 && entity.getData("skyhighheroes:dyn/body_temperature") < -0.5 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "COLD2";
      };
      if (entity.getData("skyhighheroes:dyn/body_temperature") >= -0.5 && entity.getData("skyhighheroes:dyn/body_temperature") < -0.01 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "COLD1";
      };
      if (entity.getData("skyhighheroes:dyn/body_temperature") == 0 || (entity.getData("skyhighheroes:dyn/body_temperature") >= -0.01 && entity.getData("skyhighheroes:dyn/body_temperature") <= 0.01) || (entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "INACTIVE";
      };
      if (entity.getData("skyhighheroes:dyn/body_temperature") <= 0.55 && entity.getData("skyhighheroes:dyn/body_temperature") > 0.01 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "HOT1";
      };
      if (entity.getData("skyhighheroes:dyn/body_temperature") <= 0.9 && entity.getData("skyhighheroes:dyn/body_temperature") > 0.55 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "HOT2";
      };
      if (entity.getData("skyhighheroes:dyn/body_temperature") <= 0.95 && entity.getData("skyhighheroes:dyn/body_temperature") > 0.9 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "HOT3";
      };
      if (entity.getData("skyhighheroes:dyn/body_temperature") <= 1.4 && entity.getData("skyhighheroes:dyn/body_temperature") > 0.95 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
        return "FIRE";
      };
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
      if (entity.getData("fiskheroes:shield_blocking")) {
        return "SHIELD";
      };
      if (entity.getData("skyhighheroes:dyn/sword_blade_timer") == 1 ) {
        return "SWORD";
      };
      if (entity.getData("skyhighheroes:dyn/sword_blade_timer") < 1 && !entity.getData("fiskheroes:shield_blocking")) {
        return null;
      };
    };
  });
  hero.supplyFunction("canAim", canAim);
  hero.setModifierEnabled((entity, modifier) => {
    switch (modifier.name()) {
      case "fiskheroes:damage_immunity":
        switch (modifier.id()) {
          case "explosion":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
          case "magic":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
          case "shuriken":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
          case "sharp":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
          case "bullet":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
          case "blunt":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
          case "fire":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "cactus":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "cold":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "energy":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "electricity":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "sound":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "thorns":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "radiation":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "water":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "hulk":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "holy":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "hellfire":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "mineral":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "shockwave":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "atlantean_steel":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "eternium":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "cosmic":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "kryptonite":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "light":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "cs":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "force":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "jv":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "primordial":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "gale":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "bifrost":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "ice":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "positive":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "cursed":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "cancel":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          default:
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
      };
      case "fiskheroes:controlled_flight":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1
        /*switch (modifier.id()) {
          case "base":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") != 4;
          case "creetle":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1  && entity.getData("skyhighheroes:dyn/battle_card") == 4;
      }*/
      case "fiskheroes:transformation":
        switch (modifier.id()) {
          case "wave_change":
            return entity.getUUID() == uuid;
          case "omega_xis":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
          case "predation":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
        };
      case "fiskheroes:intangibility":
        switch (modifier.id()) {
          case "not_absolute":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getPunchTimer() > 0;
          case "absolute":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getPunchTimer() == 0;
        };
      case "fiskheroes:equipment":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 3 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      case "fiskheroes:blade":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      case "fiskheroes:shield":
        switch (modifier.id()) {
          case "barrier":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 1 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
          case "sword":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();;
        };
      case "fiskheroes:arrow_catching":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:blade") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getData("fiskheroes:utility_belt_type") < 0;
      case "fiskheroes:energy_bolt":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty();
      default:
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
    };
  });
  hero.setTierOverride(getTierOverride);
  hero.setKeyBindEnabled((entity, keyBind) => {
    switch (keyBind) {
      case "DESYNCHRONIZE_WAVES":
        return entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking());
      case "WAVE_CHANGE":
        return entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25));
      case "COLD_TEMPERATURE":
        return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") <= -0.25;
      case "HOT_TEMPERATURE":
        return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") >= 0.25;
      case "SYNCHRONIZE_WAVES":
        return entity.getUUID() == uuid && (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getData("skyhighheroes:dyn/body_temperature") < 0.25 && entity.getData("skyhighheroes:dyn/body_temperature") > -0.25);
      case "VISUALIZER_TOGGLE":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid;
      case "CYCLE_CLOTHES":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && !entity.isSneaking() && entity.getUUID() == uuid;
      case "SHIMMER_TOGGLE":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.isSneaking() && entity.getUUID() == uuid;
      case "HOOD_TOGGLE":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3;
      case "INTANGIBILITY":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") > 0;
      case "SHIELD_THROW":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
      case "CHARGE_ENERGY":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
      case "TELEPORT":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") < 1;
      case "INVISIBILITY":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") < 1;
      case "CYCLE_UP_CARD":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") == 1;
      case "CYCLE_DOWN_CARD":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") == 1;
      case "BATTLE_CARD_RESET_PREDATION":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking() && (entity.getData("skyhighheroes:dyn/predation_timer") == 1 && entity.getData("skyhighheroes:dyn/selected_battle_card") > 0);
      case "BATTLE_CARD_RESET":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") > 0;
      case "BATTLE_CARD_0":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") == 1 && entity.getData("skyhighheroes:dyn/selected_battle_card") == 0;
      case "BATTLE_CARD_1":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") == 1 && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 1;
      case "BATTLE_CARD_2":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") == 1 && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 2;
      case "BATTLE_CARD_3":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") == 1 && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 3;
      //case "BATTLE_CARD_4":
        //return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") == 1 && entity.getData("skyhighheroes:dyn/selected_battle_card") == 4;
      case "SILK_SWITCH":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/tool_enchant") == 0 && (entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" || "fiskheroes:tutridium_pickaxe") && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(35) == 4 && entity.getHeldItem().getEnchantmentLevel(34) == 5;
      case "FORTUNE_SWITCH":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/tool_enchant") == 1 && (entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" || "fiskheroes:tutridium_pickaxe") && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(33) == 1 && entity.getHeldItem().getEnchantmentLevel(34) == 5;
      case "AIM":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel");
      case "OMEGA_XIS_TOGGLE":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty();
      default:
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
    };
  });
  hero.setDamageProfile(getDamageProfile);
  hero.addSoundEvent("WEAPON_EQUIP", "skyhighheroes:wave_equip");
  hero.addSoundEvent("WEAPON_UNEQUIP", "skyhighheroes:wave_equip");
  hero.addSoundEvent("STEP", "skyhighheroes:wave_footstep");
  hero.addSoundEvent("PUNCH", "skyhighheroes:wave_punch");
  hero.addDamageProfile("SWORD", {
    "types": {
      "SHARP": 0.0,
      "WAVE_SHARP": 1.0
    }
  });
  hero.addDamageProfile("MAIN", {
    "types": {
      "BLUNT": 0.0,
      "WAVE_BLUNT": 1.0
    }
  });
  hero.setTickHandler((entity, manager) => {
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
      manager.setData(entity, "fiskheroes:disguise", transformed);
    };
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
      entity.playSound("skyhighheroes:wave.footstep", 1, 1.15 - Math.random() * 0.3);
    } else if (t > 0) {
      manager.setData(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", --t);
    };
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_boosting_landing_timer", 2, 8, t > 0);
    var pain = (entity.rotPitch() > 12.5 && entity.motionY() < -0.075 && entity.motionY() > -1.25 && (entity.motionZ() > 0.125 || entity.motionZ() < -0.125 || entity.motionX() > 0.125 || entity.motionX() < -0.125)) && !entity.isSprinting() && !entity.isOnGround() && entity.getData("fiskheroes:flight_timer") > 0 && (entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -3, 0)).isSolid()) && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.world().blockAt(entity.pos()).name() == "minecraft:air";
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 10, 10, pain);
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && ((entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0 && entity.getData("skyhighheroes:dyn/predation_timer") < 1))) {
      manager.setData(entity, "skyhighheroes:dyn/battle_card", 0);
      manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
      manager.setData(entity, "skyhighheroes:dyn/sword", false);
      manager.setData(entity, "skyhighheroes:dyn/omega_xis", false);
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
    var sword = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 2);
    manager.setData(entity, "skyhighheroes:dyn/sword", sword);
    manager.incrementData(entity, "skyhighheroes:dyn/sword_timer", 10, 10, entity.getData("skyhighheroes:dyn/sword"));
    var sword_on = entity.getData("skyhighheroes:dyn/sword_timer") == 1 && entity.getData("skyhighheroes:dyn/item_holding_timer") == 0;
    manager.incrementData(entity, "skyhighheroes:dyn/sword_blade_timer", 5, sword_on);
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty() && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0.45 && entity.getData("skyhighheroes:dyn/predation_timer") < 0.55) {
      if (entity.getData("skyhighheroes:dyn/battle_card") == 1) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/omega_xis", false);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:shield", true);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 2) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:shield", true);
        manager.setData(entity, "fiskheroes:blade", true);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 3) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:utility_belt_type", 1);
      };
    };
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
    change(entity, manager, [
      { clothingType: 0, biome: "Cold Taiga", tempChangeTicks: -5000.0 },
      { clothingType: 0, biome: "Frozen", tempChangeTicks: -1000.0 },
      { clothingType: 0, biome: "Ice", tempChangeTicks: -1000.0 },
      { clothingType: 0, biome: "Beach", tempChangeTicks: 10000.0 },
      { clothingType: 0, biome: "Desert", tempChangeTicks: 400.0 },
      { clothingType: 0, biome: "Hell", tempChangeTicks: 100.0 },
      { clothingType: 0, biome: "Jungle", tempChangeTicks: 500.0 },
      { clothingType: 0, biome: "Mesa", tempChangeTicks: 1000.0 },
      { clothingType: 0, biome: "Savanna", tempChangeTicks: 2000.0 },
      { clothingType: 0, biome: "Swampland", tempChangeTicks: 1000.0 },
      { clothingType: 1, biome: "Frozen", tempChangeTicks: -1000.0 },
      { clothingType: 1, biome: "Ice", tempChangeTicks: -1000.0 },
      { clothingType: 1, biome: "Cold Taiga", tempChangeTicks: -2000.0 },
      { clothingType: 1, biome: "Cold Beach", tempChangeTicks: -3000.0 },
      { clothingType: 1, biome: "Extreme", tempChangeTicks: -4000.0 },
      { clothingType: 1, biome: "Mega", tempChangeTicks: -5000.0 },
      { clothingType: 1, biome: "Stone Beach", tempChangeTicks: -3000.0 },
      { clothingType: 2, biome: "Ice", tempChangeTicks: -300.0 },
      { clothingType: 2, biome: "Frozen", tempChangeTicks: -300.0 },
      { clothingType: 2, biome: "Cold Taiga", tempChangeTicks: -500.0 },
      { clothingType: 2, biome: "Cold Beach", tempChangeTicks: -1000.0 },
      { clothingType: 2, biome: "Extreme", tempChangeTicks: -1000.0 },
      { clothingType: 2, biome: "Mega", tempChangeTicks: -1000.0 },
      { clothingType: 2, biome: "Stone", tempChangeTicks: -1000.0 },
      { clothingType: 2, biome: "Birch", tempChangeTicks: -10000.0 },
      { clothingType: 2, biome: "Flower", tempChangeTicks: -10000.0 },
      { clothingType: 2, biome: "Forest", tempChangeTicks: -10000.0 },
      { clothingType: 2, biome: "Mesa", tempChangeTicks: -10000.0 },
      { clothingType: 2, biome: "Plains", tempChangeTicks: -10000.0 },
      { clothingType: 2, biome: "Roofed", tempChangeTicks: -10000.0 },
      { clothingType: 2, biome: "Sunflower", tempChangeTicks: -10000.0 },
      { clothingType: 2, biome: "Taiga", tempChangeTicks: -2500.0 },
      { clothingType: 3, biome: "River", tempChangeTicks: 5000.0 },
      { clothingType: 3, biome: "Sunflower", tempChangeTicks: 5000.0 },
      { clothingType: 3, biome: "Stone", tempChangeTicks: 5000.0 },
      { clothingType: 3, biome: "Roofed", tempChangeTicks: 5000.0 },
      { clothingType: 3, biome: "Plains", tempChangeTicks: 5000.0 },
      { clothingType: 3, biome: "Forest", tempChangeTicks: 5000.0 },
      { clothingType: 3, biome: "Flower", tempChangeTicks: 5000.0 },
      { clothingType: 3, biome: "Birch", tempChangeTicks: 5000.0 },
      { clothingType: 3, biome: "Mushroom", tempChangeTicks: 2000.0 },
      { clothingType: 3, biome: "Savanna", tempChangeTicks: 1000.0 },
      { clothingType: 3, biome: "Beach", tempChangeTicks: 800.0 },
      { clothingType: 3, biome: "Mesa", tempChangeTicks: 500.0 },
      { clothingType: 3, biome: "Jungle", tempChangeTicks: 160.0 },
      { clothingType: 3, biome: "Swampland", tempChangeTicks: 160.0 },
      { clothingType: 3, biome: "Hell", tempChangeTicks: 80.0 },
      { clothingType: 3, biome: "Desert", tempChangeTicks: 100.0 },
      { clothingType: 4, biome: "Cold Taiga", tempChangeTicks: -5000.0 },
      { clothingType: 4, biome: "Frozen", tempChangeTicks: -1000.0 },
      { clothingType: 4, biome: "Ice", tempChangeTicks: -1000.0 },
      { clothingType: 4, biome: "Beach", tempChangeTicks: 10000.0 },
      { clothingType: 4, biome: "Desert", tempChangeTicks: 400.0 },
      { clothingType: 4, biome: "Hell", tempChangeTicks: 100.0 },
      { clothingType: 4, biome: "Jungle", tempChangeTicks: 500.0 },
      { clothingType: 4, biome: "Mesa", tempChangeTicks: 1000.0 },
      { clothingType: 4, biome: "Savanna", tempChangeTicks: 2000.0 },
      { clothingType: 4, biome: "Swampland", tempChangeTicks: 1000.0 }
      ], "skyhighheroes:dyn/body_temperature", 400.0, "skyhighheroes:dyn/stelar_clothes");
  })
};

function getTierOverride(entity) {
  if ((entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0) && (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1)) {
    return 1;
  };
  return (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1.0) ? 10 : 0;
};

function cycleUpCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") + 1);
  if (player.getData("skyhighheroes:dyn/selected_battle_card") > 3) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
  };
  return true;
};

function cycleDownCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") - 1);
  if (player.getData("skyhighheroes:dyn/selected_battle_card") < 0) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 3);
  };
  return true;
};

function activateBattleCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
  if (player.getData("skyhighheroes:dyn/battle_card") == 1 && PackLoader.getSide() == "SERVER") {
    PackLoader.printChat("Battle Card Predation! Barrier!");
  }
  if (player.getData("skyhighheroes:dyn/battle_card") == 2 && PackLoader.getSide() == "SERVER") {
    PackLoader.printChat("Battle Card Predation! Sword!");
  }
  if (player.getData("skyhighheroes:dyn/battle_card") == 3 && PackLoader.getSide() == "SERVER") {
    PackLoader.printChat("Battle Card Predation! Shurikens!");
  }
  return true;
};

function resetBattleCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
  manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
  return true;
};

function synchronizeWaves(player, manager) {
  if (PackLoader.getSide() == "SERVER") {
    PackLoader.printChat("EM Wave Change! Geo Stelar, On-Air!");
  }
  manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
  manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
  manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
  manager.setData(player, "skyhighheroes:dyn/predation", false);
  manager.setData(player, "skyhighheroes:dyn/omega_xis_timer", 0);
  manager.setData(player, "skyhighheroes:dyn/omega_xis", false);
  manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
  return true;
};

function desynchronizeWaves(player, manager) {
  if (player.getWornChestplate().nbt().getTagList("Equipment").tagCount() < 6 && PackLoader.getSide() == "CLIENT") {
    PackLoader.printChat("Omega-Xis> You are missing equipment required EM Wave Change.");
  }
  if (player.getWornChestplate().nbt().getTagList("Equipment").tagCount() == 6) {
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
    manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
    manager.setData(player, "skyhighheroes:dyn/predation", false);
    manager.setData(player, "skyhighheroes:dyn/omega_xis_timer", 0);
    manager.setData(player, "skyhighheroes:dyn/omega_xis", false);
    if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
      manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
    };
    if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
      manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
    };
  }
  return true;
};

function visualizerToggle(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/visualizer_toggle", player.getData("skyhighheroes:dyn/visualizer_toggle") + 1);
  if (player.getData("skyhighheroes:dyn/visualizer_toggle") > 1) {
    manager.setData(player, "skyhighheroes:dyn/visualizer_toggle", 0);
  };
  if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
    manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
  };
  if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
    manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
  };
  return true;
};

function cycleClothes(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/stelar_clothes", player.getData("skyhighheroes:dyn/stelar_clothes") + 1);
  if (player.getData("skyhighheroes:dyn/stelar_clothes") > 4) {
    manager.setData(player, "skyhighheroes:dyn/stelar_clothes", 0);
  };
  return true;
};

function hoodToggle(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/hood_toggle", player.getData("skyhighheroes:dyn/hood_toggle") + 1);
  if (player.getData("skyhighheroes:dyn/hood_toggle") > 1) {
    manager.setData(player, "skyhighheroes:dyn/hood_toggle", 0);
  };
  return true;
};

function shimmerToggle(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/shimmer_toggle", player.getData("skyhighheroes:dyn/shimmer_toggle") + 1);
  if (player.getData("skyhighheroes:dyn/shimmer_toggle") == 1) {
    player.getWornChestplate().nbt().getTagList("ench");
    manager.setTagList(player.getWornChestplate().nbt(), "ench", manager.newTagList("[{id: 35,lvl: -1}]"));
  };
  if (player.getData("skyhighheroes:dyn/shimmer_toggle") > 1) {
    manager.removeTag(player.getWornChestplate().nbt(), "ench");
    manager.setData(player, "skyhighheroes:dyn/shimmer_toggle", 0);
  };
  return true;
};

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

//Normal Profiles
function shieldProfile(profile) {
  profile.inheritDefaults();
  profile.addAttribute("BASE_SPEED", -0.75, 1);
  profile.addAttribute("SPRINT_SPEED", 0.0, 0);
  profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
  profile.addAttribute("JUMP_HEIGHT", -1.0, 1);
  profile.addAttribute("STEP_HEIGHT", -1.0, 1);
  profile.addAttribute("KNOCKBACK", 0.0, 0);
  profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
};
function swordProfile(profile) {
  profile.inheritDefaults();
  profile.addAttribute("SPRINT_SPEED", 0.5, 1);
  profile.addAttribute("KNOCKBACK", 5.0, 0);
  profile.addAttribute("PUNCH_DAMAGE", 14.5, 0);
};
function inactiveProfile(profile) {
};

//Temperature Profiles
function frozenProfile(profile) {
  profile.addAttribute("BASE_SPEED", -1.0, 1);
  profile.addAttribute("SPRINT_SPEED", -1.0, 1);
  profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
  profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
  profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
  profile.addAttribute("MAX_HEALTH", -19.0, 0);
};
function cold3Profile(profile) {
  profile.addAttribute("BASE_SPEED", -0.7, 1);
  profile.addAttribute("SPRINT_SPEED", -0.8, 1);
  profile.addAttribute("WEAPON_DAMAGE", -0.9, 1);
  profile.addAttribute("JUMP_HEIGHT", -1.0, 0);
  profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
  profile.addAttribute("MAX_HEALTH", -13.0, 0);
};
function cold2Profile(profile) {
  profile.addAttribute("BASE_SPEED", -0.35, 1);
  profile.addAttribute("SPRINT_SPEED", -0.35, 1);
  profile.addAttribute("WEAPON_DAMAGE", -0.5, 1);
  profile.addAttribute("JUMP_HEIGHT", -0.25, 0);
  profile.addAttribute("MAX_HEALTH", -7.0, 0);
};
function cold1Profile(profile) {
  profile.addAttribute("BASE_SPEED", -0.05, 1);
  profile.addAttribute("WEAPON_DAMAGE", -0.05, 1);
  profile.addAttribute("PUNCH_DAMAGE", -0.05, 1);
  profile.addAttribute("MAX_HEALTH", -2.0, 0);
};
function hot1Profile(profile) {
  profile.addAttribute("BASE_SPEED", -0.1, 1);
  profile.addAttribute("WEAPON_DAMAGE", -0.05, 1);
  profile.addAttribute("PUNCH_DAMAGE", -0.05, 1);
  profile.addAttribute("MAX_HEALTH", -2.0, 0);
};
function hot2Profile(profile) {
  profile.addAttribute("BASE_SPEED", -0.35, 1);
  profile.addAttribute("SPRINT_SPEED", -0.35, 1);
  profile.addAttribute("WEAPON_DAMAGE", -0.6, 1);
  profile.addAttribute("JUMP_HEIGHT", -0.5, 0);
  profile.addAttribute("MAX_HEALTH", -7.0, 0);
};
function hot3Profile(profile) {
  profile.addAttribute("BASE_SPEED", -0.7, 1);
  profile.addAttribute("SPRINT_SPEED", -0.7, 1);
  profile.addAttribute("WEAPON_DAMAGE", -0.95, 1);
  profile.addAttribute("JUMP_HEIGHT", -1.0, 0);
  profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
  profile.addAttribute("MAX_HEALTH", -14.0, 0);
};
function fireProfile(profile) {
  profile.addAttribute("BASE_SPEED", -1.0, 1);
  profile.addAttribute("SPRINT_SPEED", -1.0, 1);
  profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
  profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
  profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
  profile.addAttribute("MAX_HEALTH", -19.0, 0);
};

function getDamageProfile(entity) {
  if (entity.getData("skyhighheroes:dyn/sword_blade_timer") == 1 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "SWORD";
  }
  if (entity.getHeldItem().name() == "fiskheroes:katana" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "SWORD";
  }
  if (entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "SWORD";
  }
  if (entity.getHeldItem().name() == "fiskheroes:chronos_rifle" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "MAIN";
  }
  if (entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "MAIN";
  }
  return (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) ? "MAIN" : null;
};

function hasProperty(entity, property) {
  return property == "BREATHE_SPACE" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
};

function hasPermission(entity, permission) {
  return (permission == "USE_CHRONOS_RIFLE" || permission == "USE_SHIELD") && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
};

function canAim(entity) {
  return (entity.getHeldItem().isEmpty() || entity.getHeldItem().name() == "fiskheroes:chronos_rifle") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/omega_xis_timer") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
};

function getTemperatureProfile(entity, map, clothingVar) {
  var i = 0;
  if (typeof clothingVar === "string") {
    while (i < map.length) {
      var clothes = map[i].clothingType;
      var locat = map[i].biome;
      var ticks = map[i].tempChangeTicks;
      if (entity.getData(clothingVar) == clothes && entity.world().getLocation(entity.pos()).biome().startsWith(locat) && map[i].hasOwnProperty("clothingType")) {
        mismatch = true;
        i = 10000000000;
      } else {
        ticks = 0;
        mismatch = false;
        i = i + 1;
      };
    };
    var obj = {
      isMismatch: mismatch,
      getTicks: ticks,
    };
    return obj;
  } else {
    while (i < map.length) {
      var locat = map[i].biome;
      var ticks = map[i].tempChangeTicks;
      if (entity.world().getLocation(entity.pos()).biome().startsWith(locat) && !map[i].hasOwnProperty("clothingType")) {
        mismatch = true;
        i = 10000000000;
      } else {
        ticks = 0;
        mismatch = false;
        i = i + 1;
      };
    };
    var obj = {
      isMismatch: mismatch,
      getTicks: ticks,
    };
    return obj;
  };
};

function change(entity, manager, map, tempVar, stableRate, clothingVar) {
  var profile = getTemperatureProfile(entity, map, clothingVar);
  if (profile.isMismatch) {
    if (profile.getTicks > 0.0 && entity.getData(tempVar) >= -1.0 && entity.getData(tempVar) <= 1.0) {
      manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0/profile.getTicks)));
    };
    if (profile.getTicks < 0.0 && entity.getData(tempVar) >= -1.0 && entity.getData(tempVar) <= 1.0) {
      manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0/profile.getTicks)));
    };
  } else if (!profile.isMismatch) {
    if (entity.getData(tempVar) > 0.0 && entity.getData(tempVar) <= 1.3) {
      manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0/stableRate)));
    };
    if (entity.getData(tempVar) < 0.0 && entity.getData(tempVar) >= -1.3) {
      manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0/stableRate)));
    };
  };
};