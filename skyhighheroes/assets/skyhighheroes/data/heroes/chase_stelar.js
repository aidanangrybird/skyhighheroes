var bodyTemp = implement("skyhighheroes:external/body_temperature");
var stelar = implement("skyhighheroes:external/stelar");
var uuid = "4da600b8-582a-4fc3-ac2e-ada03d3e478c";
var transerChat = implement("skyhighheroes:external/transer_chat");
function init(hero) {
  hero.setAliases("chase_stelar");
  hero.setName("\u00A72Pryetak Nebula");
  hero.setTier(10);
  hero.setChestplate("Transer");
  hero.setVersion("Mega Man Star Force (OC)");
  hero.hide();

  transerChat.keyBindsOC(hero); 
  
  stelar.initEquipment(hero, "Pryetak Nebula", "\u00A72")

  hero.addPowers("skyhighheroes:transer_chat", "skyhighheroes:em_wave_change", "skyhighheroes:em_wave_being", "skyhighheroes:em_battle_card_predation", "skyhighheroes:em_battle_cards", "skyhighheroes:em_battle_cards_chase", "skyhighheroes:em_nebula_buster");

  hero.addKeyBind("TELEPORT", "Transmit", 1);
  hero.addKeyBindFunc("CYCLE_CLOTHES", (player, manager) => stelar.cycleClothes(player, manager), "Change Clothes", 1);
  hero.addKeyBindFunc("SHIMMER_TOGGLE", (player, manager) => stelar.shimmerToggle(player, manager), "Shimmer Toggle", 1);
  hero.addKeyBindFunc("CYCLE_UP_CARD", (player, manager) => stelar.cycleUpCard(player, manager, 6), "Next Battle Card", 1);
  hero.addKeyBindFunc("VISUALIZER_TOGGLE", (player, manager) => stelar.visualizerToggle(player, manager), "Toggle Visualizer", 2);
  hero.addKeyBindFunc("HOOD_TOGGLE", (player, manager) => stelar.hoodToggle(player, manager), "Toggle Hood", 2);
  hero.addKeyBindFunc("BATTLE_CARD_0", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    return true;
  }, "Return To Nebula Buster", 2);
  hero.addKeyBindFunc("BATTLE_CARD_1", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<\u00A72Pryetak Nebula\u00A7r> Battle Card Predation! \u00A72Barrier\u00A7r!");
    };
    return true;
  }, "Battle Card! Barrier!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_2", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<\u00A72Pryetak Nebula\u00A7r> Battle Card Predation! \u00A72Sword\u00A7r!");
    };
    return true;
  }, "Battle Card! Sword!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_3", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<\u00A72Pryetak Nebula\u00A7r> Battle Card Predation! \u00A72Shurikens\u00A7r!");
    };
    return true;
  }, "Battle Card! Shurikens!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_4", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<\u00A72Pryetak Nebula\u00A7r> Battle Card Predation! \u00A72Void's Grasp\u00A7r!");
    };
    return true;
  }, "Battle Card! Void's Grasp!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_5", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<\u00A72Pryetak Nebula\u00A7r> Battle Card Predation! \u00A72Galaxy's Weight\u00A7r!");
    };
    return true;
  }, "Battle Card! Galaxy's Weight!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_6", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<\u00A72Pryetak Nebula\u00A7r> Battle Card Predation! \u00A72Nebula Burst\u00A7r!");
    };
    return true;
  }, "Battle Card! Nebula Burst!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_RESET_PREDATION", (player, manager) => stelar.resetBattleCard(player, manager), "Return To Nebula Buster", 2);
  hero.addKeyBind("PREDATION", "Battle Card Predation", 2);
  hero.addKeyBind("INVISIBILITY", "Become Wave", 3);
  hero.addKeyBindFunc("CYCLE_DOWN_CARD", (player, manager) => stelar.cycleDownCard(player, manager, 6), "Previous Battle Card", 3);
  hero.addKeyBindFunc("FORTUNE_SWITCH", (player, manager) => stelar.toolSwitchEnchant(player, manager), "Active Enchant: Silk Touch", 4);
  hero.addKeyBindFunc("SILK_SWITCH", (player, manager) => stelar.toolSwitchEnchant(player, manager), "Active Enchant: Fortune", 4);
  hero.addKeyBind("AIM", "Aim Nebula Buster", 4);
  hero.addKeyBind("RIFLE_AIM", "Aim Rifle", 4);
  hero.addKeyBind("TELEKINESIS", "Void's Grasp", 4);
  hero.addKeyBind("GRAVITY_MANIPULATION", "Galaxy's Weight", 4);
  hero.addKeyBind("CHARGED_BEAM", "Nebula Burst", 4);
  hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
  hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
  hero.addKeyBindFunc("DESYNCHRONIZE_WAVES", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
    manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
    manager.setData(player, "skyhighheroes:dyn/predation", false);
    manager.setData(player, "skyhighheroes:dyn/pryetak_timer", 0);
    manager.setData(player, "skyhighheroes:dyn/pryetak", false);
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
      PackLoader.printChat("<Chase Stelar> EM Wave Change! \u00A72Chase Stelar\u00A7r, On-Air!");
    };
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
    manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
    manager.setData(player, "skyhighheroes:dyn/predation", false);
    manager.setData(player, "skyhighheroes:dyn/pryetak_timer", 0);
    manager.setData(player, "skyhighheroes:dyn/pryetak", false);
    manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
    return true;
  }, "EM Wave Change!", 5);
  hero.addKeyBind("WAVE_CHANGE", "EM Wave Change!", 5);
  hero.addKeyBindFunc("BATTLE_CARD_RESET", (player, manager) => stelar.resetBattleCard(player, manager), "Return To Nebula Buster", 5);
  hero.addKeyBind("PRYETAK_TOGGLE", "Toggle Nebula Buster", 5);
  hero.addKeyBind("INTANGIBILITY", "Become in Phase", 5);
  hero.addKeyBindFunc("COLD_TEMPERATURE", (player, manager) => {
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<\u00A72Pryetak\u00A7r> You are too cold for us to EM Wave Change.");
    };
    return true;
  }, "\u00A7mEM Wave Change!\u00A7r You are too cold", 5);
  hero.addKeyBindFunc("HOT_TEMPERATURE", (player, manager) => {
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<\u00A72Pryetak\u00A7r> You are too hot for us to EM Wave Change.");
    };
    return true;
  }, "\u00A7mEM Wave Change!\u00A7r You are too hot", 5);
  
  hero.setDefaultScale(1.0);
  hero.setHasProperty(hasProperty);
  hero.setHasPermission((entity, permission) => stelar.hasPermission(entity, permission));
  stelar.initProfiles(hero, uuid);
  hero.supplyFunction("canAim", entity => stelar.canAim(entity, "pryetak"));
  hero.setModifierEnabled((entity, modifier) => {
    switch (modifier.name()) {
      case "fiskheroes:damage_immunity":
        //return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:invisible");
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
          case "saitama":
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
          case "adamantium":
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
      case "fiskheroes:transformation":
        switch (modifier.id()) {
          case "wave_change":
            return entity.getUUID() == uuid;
          case "pryetak":
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
      case "fiskheroes:charged_beam":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 6 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      case "fiskheroes:gravity_manipulation":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 5 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      case "fiskheroes:telekinesis":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 4 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      case "fiskheroes:equipment":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 3 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      case "fiskheroes:blade":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      case "fiskheroes:shield":
        switch (modifier.id()) {
          case "barrier":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 1 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
          case "sword":
            return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
        };
      case "fiskheroes:energy_bolt":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty();
      default:
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
    };
  });
  hero.setTierOverride(entity => stelar.getTierOverride(entity));
  hero.setKeyBindEnabled((entity, keyBind) => {
    switch (keyBind) {
      case "CYCLE_CHATS_EM":
        return entity.getUUID() == uuid && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/pryetak_timer") == 1;
      case "CYCLE_CHAT_MODES_EM":
        return entity.getUUID() == uuid && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/pryetak_timer") == 1;
      case "CYCLE_CHATS":
        return entity.getUUID() == uuid && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0;
      case "CYCLE_CHAT_MODES":
        return entity.getUUID() == uuid && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0;
      case "SHAPE_SHIFT":
        return entity.getUUID() == uuid && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) ? true : entity.getData("skyhighheroes:dyn/pryetak_timer") == 1);
      case "COMMAND_MODE":
        return entity.getUUID() == uuid && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) ? true : entity.getData("skyhighheroes:dyn/pryetak_timer") == 1);
      case "ENTER_COMMAND":
        return entity.getUUID() == uuid && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/command_mode") && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) ? true : entity.getData("skyhighheroes:dyn/pryetak_timer") == 1);
      case "SEND_MESSAGE":
        return entity.getUUID() == uuid && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && !entity.getData("skyhighheroes:dyn/command_mode") && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) ? true : entity.getData("skyhighheroes:dyn/pryetak_timer") == 1);
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
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid && ((entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) ? !entity.isSneaking() : true);
      case "CYCLE_CLOTHES":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && !entity.isSneaking() && entity.getUUID() == uuid;
      case "SHIMMER_TOGGLE":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.isSneaking() && entity.getUUID() == uuid;
      case "HOOD_TOGGLE":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid && entity.isSneaking() && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3;
      case "INTANGIBILITY":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") > 0;
      case "SHIELD_THROW":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
      case "CHARGE_ENERGY":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
      case "TELEPORT":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation");
      case "INVISIBILITY":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation");
      case "CYCLE_UP_CARD":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation");
      case "CYCLE_DOWN_CARD":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation");
      case "PREDATION":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") > 0 || entity.getData("skyhighheroes:dyn/pryetak_timer") < 1);
      case "BATTLE_CARD_RESET_PREDATION":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking() && (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") > 0);
      case "BATTLE_CARD_RESET":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") > 0;
      case "BATTLE_CARD_0":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") == 0;
      case "BATTLE_CARD_1":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 1;
      case "BATTLE_CARD_2":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 2;
      case "BATTLE_CARD_3":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 3;
      case "BATTLE_CARD_4":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 4;
      case "BATTLE_CARD_5":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 5;
      case "BATTLE_CARD_6":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 6;
      //case "BATTLE_CARD_4":
        //return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") == 4;
      case "SILK_SWITCH":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/tool_enchant") == 0 && (entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" || "fiskheroes:tutridium_pickaxe") && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(35) == 4 && entity.getHeldItem().getEnchantmentLevel(34) == 5;
      case "FORTUNE_SWITCH":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/tool_enchant") == 1 && (entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" || "fiskheroes:tutridium_pickaxe") && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(33) == 1 && entity.getHeldItem().getEnchantmentLevel(34) == 5;
      case "AIM":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/pryetak_timer") < 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 0;
      case "RIFLE_AIM":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:chronos_rifle";
      case "TELEKINESIS":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 4;
      case "GRAVITY_MANIPULATION":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 5;
      case "CHARGED_BEAM":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 6;
      case "PRYETAK_TOGGLE":
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") == 0 && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getHeldItem().isEmpty();
      default:
        return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
    };
  });
  hero.setDamageProfile(entity => stelar.getDamageProfile(entity));
  hero.addSoundEvent("WEAPON_EQUIP", "skyhighheroes:wave_equip");
  hero.addSoundEvent("WEAPON_UNEQUIP", "skyhighheroes:wave_equip");
  //hero.addSoundEvent("STEP", "skyhighheroes:wave_footstep");
  hero.addSoundEvent("PUNCH", "skyhighheroes:wave_punch");
  hero.setTickHandler((entity, manager) => {
    transerChat.tickHandlerOC(entity, manager, "Pryetak Nebula");
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1) {
      manager.setData(entity, "fiskheroes:disguise", null);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
      manager.setData(entity, "fiskheroes:disguise", "Pryetak Nebula");
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
      manager.setData(entity, "skyhighheroes:dyn/pryetak", false);
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
    manager.incrementData(entity, "skyhighheroes:dyn/telekinesis_timer", 10, 10, entity.getData("fiskheroes:telekinesis"));
    manager.incrementData(entity, "skyhighheroes:dyn/gravity_manip_timer", 10, 10, entity.getData("fiskheroes:gravity_manip"));
    var item_holding = (!entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0);
    manager.incrementData(entity, "skyhighheroes:dyn/item_holding_timer", 10, item_holding);
    var sword = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
    manager.setData(entity, "skyhighheroes:dyn/sword", sword);
    manager.incrementData(entity, "skyhighheroes:dyn/sword_timer", 10, 10, entity.getData("skyhighheroes:dyn/sword"));
    var sword_on = entity.getData("skyhighheroes:dyn/sword_timer") == 1 && entity.getData("skyhighheroes:dyn/item_holding_timer") == 0;
    manager.incrementData(entity, "skyhighheroes:dyn/sword_blade_timer", 5, sword_on);
    var voids_grasp = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 4 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
    manager.setData(entity, "skyhighheroes:dyn/voids_grasp", voids_grasp);
    manager.incrementData(entity, "skyhighheroes:dyn/voids_grasp_timer", 10, 10, entity.getData("skyhighheroes:dyn/voids_grasp"));
    var galaxys_weight = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 5 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
    manager.setData(entity, "skyhighheroes:dyn/galaxys_weight", galaxys_weight);
    manager.incrementData(entity, "skyhighheroes:dyn/galaxys_weight_timer", 10, 10, entity.getData("skyhighheroes:dyn/galaxys_weight"));
    var nebula_burst = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.35 && entity.getData("skyhighheroes:dyn/battle_card") == 6 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
    manager.setData(entity, "skyhighheroes:dyn/nebula_burst", nebula_burst);
    manager.incrementData(entity, "skyhighheroes:dyn/nebula_burst_timer", 10, 10, entity.getData("skyhighheroes:dyn/nebula_burst"));
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty() && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0.45 && entity.getData("skyhighheroes:dyn/predation_timer") < 0.55) {
      if (entity.getData("skyhighheroes:dyn/battle_card") == 1) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/pryetak", false);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:shield", true);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 2) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:shield", true);
        manager.setData(entity, "fiskheroes:blade", true);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 3) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:utility_belt_type", 1);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 4) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 5) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 6) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
      };
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && ((entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.isSprinting()) || !entity.getHeldItem().isEmpty())) {
      manager.setData(entity, "skyhighheroes:dyn/pryetak", false);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("fiskheroes:flight_boost_timer") < 1 && !entity.isSprinting()) && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/predation_timer") == 0) {
      if (entity.getData("skyhighheroes:dyn/battle_card") == 1) {
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:shield", true);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 2) {
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:shield", true);
        manager.setData(entity, "fiskheroes:blade", true);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 3) {
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:utility_belt_type", 1);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 4) {
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 5) {
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 6) {
        manager.setData(entity, "skyhighheroes:dyn/pryetak", true);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
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
    bodyTemp.change(entity, manager, stelar.tempProfiles(), "skyhighheroes:dyn/body_temperature", 400.0, "skyhighheroes:dyn/stelar_clothes");
  })
};

function hasProperty(entity, property) {
  return (property == "BREATHE_SPACE" || property == "MASK_TOGGLE") && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) || (entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND"));
};