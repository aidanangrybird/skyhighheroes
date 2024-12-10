/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  //All of the required functions and stuff go here
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
  function cycleUpCard(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") + 1);
    if (player.getData("skyhighheroes:dyn/selected_battle_card") > 5) {
      manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
    };
    return true;
  };
  function cycleDownCard(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") - 1);
    if (player.getData("skyhighheroes:dyn/selected_battle_card") < 0) {
      manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 5);
    };
    return true;
  };
  return {
    name: "megaMan",
    type: 9,
    waveChange: "Mega Man",
    color: "\u00A7b",
    human: "Geo Stelar",
    powers: [
      "skyhighheroes:em_wave_being",
      "skyhighheroes:battle_cards_geo"
    ],
    keyBinds: function (hero) {
      hero.addKeyBind("TELEPORT", "Transmit", 1);
      hero.addKeyBindFunc("CYCLE_UP_CARD", cycleUpCard, "Next Battle Card", 1);
      hero.addKeyBindFunc("BATTLE_CARD_0", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        return true;
      }, "Return To Mega Buster", 2);
      hero.addKeyBindFunc("BATTLE_CARD_1", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A7bMega Man\u00A7r> Battle Card Predation! \u00A7bBarrier\u00A7r!");
        };
        return true;
      }, "Battle Card! Barrier!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_2", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A7bMega Man\u00A7r> Battle Card Predation! \u00A7bSword\u00A7r!");
        };
        return true;
      }, "Battle Card! Sword!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_3", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A7bMega Man\u00A7r> Battle Card Predation! \u00A7bCannon\u00A7r!");
        };
        return true;
      }, "Battle Card! Cannon!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_4", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A7bMega Man\u00A7r> Battle Card Predation! \u00A7bJet Attack\u00A7r!");
        };
        return true;
      }, "Battle Card! Jet Attack!", 2);
      hero.addKeyBindFunc("BATTLE_CARD_5", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A7bMega Man\u00A7r> Battle Card Predation! \u00A7bKunckle\u00A7r!");
        };
        return true;
      }, "Battle Card! Knuckle!", 2);
      hero.addKeyBind("INVISIBILITY", "Wave World", 3);
      hero.addKeyBind("CANNON_AIM", "Aim Cannon", 4);
      hero.addKeyBindFunc("CYCLE_DOWN_CARD", cycleDownCard, "Previous Battle Card", 3);
      hero.addKeyBindFunc("FORTUNE_SWITCH", toolSwitchEnchant, "Active Enchant: Silk Touch", 4);
      hero.addKeyBindFunc("SILK_SWITCH", toolSwitchEnchant, "Active Enchant: Fortune", 4);
      hero.addKeyBind("RIFLE_AIM", "Aim Rifle", 4);
      hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
      hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
      hero.addKeyBind("INTANGIBILITY", "Become in Phase", 5);
    },
    tierOverride: function (entity) {
      if ((entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0) && (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1)) {
        return 1;
      };
      return (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) ? 10 : 0;
    },
    properties: function (entity, property) {
      return property == "BREATHE_SPACE" && (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 || entity.is("DISPLAY"));
    },
    permissions: function (entity, permission) {
      return (permission == "USE_CHRONOS_RIFLE" || permission == "USE_SHIELD") && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
    },
    initSounds: function (hero) {
      hero.addSoundEvent("WEAPON_EQUIP", "skyhighheroes:wave_equip");
      hero.addSoundEvent("WEAPON_UNEQUIP", "skyhighheroes:wave_equip");
      hero.addSoundEvent("STEP", "skyhighheroes:wave_footstep");
      hero.addSoundEvent("PUNCH", "skyhighheroes:wave_punch");
    },
    initEquipment: function (hero) {
      //Fix stuff not going into thing
      hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A7bMega Man's Katanas},ench:[{id:16,lvl:6},{id:19,lvl:3},{id:20,lvl:3},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.nbt().getBoolean("Dual") && item.getEnchantmentLevel(16) == 6 && item.getEnchantmentLevel(19) == 3 && item.getEnchantmentLevel(20) == 3 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A7bMega Man's Katanas"));
      hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A7bMega Man's Scythe},ench:[{id:16,lvl:6},{id:19,lvl:3},{id:20,lvl:3},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(16) == 6 && item.getEnchantmentLevel(19) == 3 && item.getEnchantmentLevel(20) == 3 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A7bMega Man's Scythe"));
      hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A7bMega Man's Rifle},ench:[{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A7bMega Man's Rifle"));
      hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A7bMega Man's Shield},ench:[{id:16,lvl:6},{id:19,lvl:3},{id:20,lvl:3},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.nbt().getBoolean("Electromagnetic") && item.getEnchantmentLevel(16) == 6 && item.getEnchantmentLevel(19) == 3 && item.getEnchantmentLevel(20) == 3 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A7bMega Man's Shield"));
      hero.addPrimaryEquipment("fiskheroes:tutridium_pickaxe{display:{Name:\u00A7bMega Man's Pickaxe},ench:[{id:32,lvl:7},{id:35,lvl:4},{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(32) == 7 && (item.getEnchantmentLevel(33) == 1 || item.getEnchantmentLevel(35) == 4) && item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A7bMega Man's Pickaxe"));
      hero.addPrimaryEquipment("fiskheroes:tutridium_shovel{display:{Name:\u00A7bMega Man's Shovel},ench:[{id:32,lvl:7},{id:33,lvl:1},{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(32) == 7 && (item.getEnchantmentLevel(33) == 1 || item.getEnchantmentLevel(35) == 4) && item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A7bGeo Stelar's Shovel"));
    },
    initDamageProfiles: function (hero) {
      hero.addDamageProfile("SWORD", {
        "types": {
          "ELEMENT_SWORD": 1.0
        }
      });
      hero.addDamageProfile("MAIN", {
        "types": {
          "ELEMENT_NONE": 1.0
        }
      });
    },
    damageProfiles: function (entity) {
      var result = null;
      if (entity.getData("skyhighheroes:dyn/sword_blade_timer") == 1 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        result = "SWORD";
      };
      if (entity.getHeldItem().name() == "fiskheroes:katana" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        result = "SWORD";
      };
      if (entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        result = "SWORD";
      };
      if (entity.getHeldItem().name() == "fiskheroes:chronos_rifle" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        result = "MAIN";
      };
      if (entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        result = "MAIN";
      };
      return (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) ? "MAIN" : result;
    },
    initProfiles: function (hero) {
      hero.addAttribute("SPRINT_SPEED", 0.2, 1);
      hero.addAttribute("STEP_HEIGHT", 0.5, 0);
      hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
      hero.addAttribute("PUNCH_DAMAGE", 5.0, 0);
      hero.addAttribute("KNOCKBACK", 2.5, 0);
      hero.addAttribute("IMPACT_DAMAGE", 50.0, 0);
      hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
      hero.addAttributeProfile("SWORD", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("SPRINT_SPEED", 0.5, 1);
        profile.addAttribute("KNOCKBACK", 5.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", 14.5, 0);
      });
      hero.addAttributeProfile("SHIELD", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("BASE_SPEED", -0.75, 1);
        profile.addAttribute("SPRINT_SPEED", 0.0, 0);
        profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
        profile.addAttribute("JUMP_HEIGHT", -1.0, 1);
        profile.addAttribute("STEP_HEIGHT", -1.0, 1);
        profile.addAttribute("KNOCKBACK", 0.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
      });
      hero.addAttributeProfile("KNUCKLE", function (profile) {
        profile.inheritDefaults();
        profile.addAttribute("SPRINT_SPEED", 0.5, 1);
        profile.addAttribute("KNOCKBACK", 20.0, 0);
        profile.addAttribute("PUNCH_DAMAGE", 14.5, 0);
      });
    },
    attributeProfiles: function (entity) {
      if (entity.getData("fiskheroes:shield_blocking")) {
        return "SHIELD";
      };
      if (entity.getData("skyhighheroes:dyn/sword_blade_timer") == 1) {
        return "SWORD";
      };
      if (entity.getData("skyhighheroes:dyn/knuckle_timer") == 1) {
        return "KNUCKLE";
      };
      if (entity.getData("skyhighheroes:dyn/sword_blade_timer") < 1 && !entity.getData("fiskheroes:shield_blocking")) {
        return null;
      };
    },
    isKeyBindEnabled: function (entity, keyBind) {
      var result = false;
      if (keyBind == "CYCLE_CHATS_EM") {
        result = !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/omega_xis_timer") == 1;
      };
      if (keyBind == "CYCLE_CHAT_MODES_EM") {
        result = entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/omega_xis_timer") == 1;
      };
      if (keyBind == "INTANGIBILITY") {
        result = entity.getData("fiskheroes:flight_timer") > 0;
      };
      if (keyBind == "SHIELD_THROW") {
        result = entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
      };
      if (keyBind == "CHARGE_ENERGY") {
        result = entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
      };
      if (keyBind == "TELEPORT" || keyBind == "INVISIBILITY") {
        result = !entity.getData("skyhighheroes:dyn/predation");
      };
      if (keyBind == "SILK_SWITCH") {
        result = entity.getData("skyhighheroes:dyn/tool_enchant") == 0 && (entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" || "fiskheroes:tutridium_pickaxe") && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(35) == 4 && entity.getHeldItem().getEnchantmentLevel(34) == 5;
      };
      if (keyBind == "FORTUNE_SWITCH") {
        result = entity.getData("skyhighheroes:dyn/tool_enchant") == 1 && (entity.getHeldItem().name() == "fiskheroes:tutridium_shovel" || "fiskheroes:tutridium_pickaxe") && entity.getHeldItem().getEnchantmentLevel(32) == 7 && entity.getHeldItem().getEnchantmentLevel(33) == 1 && entity.getHeldItem().getEnchantmentLevel(34) == 5;
      };
      if (keyBind == "RIFLE_AIM") {
        result = entity.getHeldItem().name() == "fiskheroes:chronos_rifle";
      };
      if (keyBind == "CYCLE_UP_CARD" || keyBind == "CYCLE_DOWN_CARD") {
        result = entity.getData("skyhighheroes:dyn/predation");
      };
      if (keyBind == "BATTLE_CARD_0") {
        result = entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/selected_battle_card") == 0;
      };
      if (keyBind == "BATTLE_CARD_1") {
        result = entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 1;
      };
      if (keyBind == "BATTLE_CARD_2") {
        result = entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 2;
      };
      if (keyBind == "BATTLE_CARD_3") {
        result = entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 3;
      };
      if (keyBind == "BATTLE_CARD_4") {
        result = entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 4;
      };
      if (keyBind == "BATTLE_CARD_5") {
        result = entity.getData("skyhighheroes:dyn/predation") && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/selected_battle_card") == 5;
      };
      if (keyBind == "CANNON_AIM") {
        result = !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" || entity.getHeldItem().name() == "fiskheroes:tutridium_pickaxe" || entity.getHeldItem().name() == "fiskheroes:tutridium_shovel") && entity.getData("skyhighheroes:dyn/battle_card") == 3;
      };
      return result;
    },
    isModifierEnabled: function (entity, modifier) {
      var result = false;
      if (modifier.name() == "fiskheroes:damage_immunity") {/* 
        var invis = ["explosion", "magic", "shuriken", "sharp", "bullet", "blunt", "saitama"];
        var normal = ["fire","cactus", "cold", "energy", "electricity", "sound", "thorns", "radiation",
          "water", "hulk", "holy", "hellfire", "adamantium", "mineral", "shockwave", "atlantean_steel",
          "eternium", "cosmic", "kryptonite", "light", "cs", "force", "jv", "primordial", "gale", "bifrost",
          "ice", "positive", "cursed", "cancel"
        ];
        if (normal.indexOf(modifier.id()) > -1) {
          result = true;
        };
        if (invis.indexOf(modifier.id()) > -1) {
          result = entity.getData("fiskheroes:invisible");
        }; */
        result = entity.getData("fiskheroes:invisible");
      };
      if (modifier.name() == "fiskheroes:shield_throwing") {
        result = true;
      };
      if (modifier.name() == "fiskheroes:energy_manipulation") {
        result = true;
      };
      if (modifier.name() == "fiskheroes:controlled_flight") {
        result = true;
      };
      if (modifier.name() == "fiskheroes:invisibility") {
        result = true;
      };
      if (modifier.name() == "fiskheroes:teleportation") {
        result = true;
      };
      if (modifier.name() == "fiskheroes:intangibility") {
        if (modifier.id() == "not_absolute") {
          result = entity.getPunchTimer() > 0;
        };
        if (modifier.id() == "absolute") {
          result = entity.getPunchTimer() == 0;
        };
      };
      if (modifier.name() == "fiskheroes:shield") {
        if (modifier.id() == "barrier") {
          result = entity.getData("skyhighheroes:dyn/battle_card") == 1 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
        };
        if (modifier.id() == "sword") {
          result = entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
        };
      };
      if (modifier.name() == "fiskheroes:blade") {
        result = entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:repulsor_blast") {
        result = entity.getData("skyhighheroes:dyn/battle_card") == 3 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      if (modifier.name() == "fiskheroes:energy_projection") {
        result = entity.getData("skyhighheroes:dyn/battle_card") == 4 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
      };
      return result;
    },
    tickHandler: function (entity, manager) {
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
      var sword = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.2 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
      manager.setData(entity, "skyhighheroes:dyn/sword", sword);
      var sword_blade = entity.getData("skyhighheroes:dyn/sword_timer") == 1 && entity.getData("skyhighheroes:dyn/item_holding_timer") == 0;
      manager.setData(entity, "skyhighheroes:dyn/sword_blade", sword_blade);
      var cannon = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.2 && entity.getData("skyhighheroes:dyn/battle_card") == 3 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
      manager.setData(entity, "skyhighheroes:dyn/cannon", cannon);
      var jet_attack = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.2 && entity.getData("skyhighheroes:dyn/battle_card") == 4 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
      manager.setData(entity, "skyhighheroes:dyn/jet_attack", jet_attack);
      var knuckle = (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") < 0.2 && entity.getData("skyhighheroes:dyn/battle_card") == 5 && (entity.getData("fiskheroes:flight_boost_timer") == 0 || (entity.getData("fiskheroes:flight_boost_timer") < 0.5 && !entity.isSprinting())));
      manager.setData(entity, "skyhighheroes:dyn/knuckle", knuckle);
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty() && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0.3 && entity.getData("skyhighheroes:dyn/predation_timer") < 0.4) {
        if (entity.getData("skyhighheroes:dyn/battle_card") == 1) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          if (entity.getData("skyhighheroes:dyn/predation_timer") > 0.35) {
            transer.systemMessage(entity, "<n>Inserted <nh>Barrier<n> battle card!");
          };
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", false);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:shield", true);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 2) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          if (entity.getData("skyhighheroes:dyn/predation_timer") > 0.35) {
            transer.systemMessage(entity, "<n>Inserted <nh>Sword<n> battle card!");
          };
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:shield", true);
          manager.setData(entity, "fiskheroes:blade", true);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 3) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          if (entity.getData("skyhighheroes:dyn/predation_timer") > 0.35) {
            transer.systemMessage(entity, "<n>Inserted <nh>Cannon<n> battle card!");
          };
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 4) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          if (entity.getData("skyhighheroes:dyn/predation_timer") > 0.35) {
            transer.systemMessage(entity, "<n>Inserted <nh>Jet Attack<n> battle card!");
          };
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 5) {
          entity.playSound("skyhighheroes:wave.equip", 1, 1);
          if (entity.getData("skyhighheroes:dyn/predation_timer") > 0.35) {
            transer.systemMessage(entity, "<n>Inserted <nh>Knuckle<n> battle card!");
          };
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
      };
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && ((entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.isSprinting()) || !entity.getHeldItem().isEmpty())) {
        manager.setData(entity, "skyhighheroes:dyn/omega_xis", false);
      };
      if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("fiskheroes:flight_boost_timer") < 1 && !entity.isSprinting()) && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/predation_timer") == 0) {
        if (entity.getData("skyhighheroes:dyn/battle_card") == 1) {
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:shield", true);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 2) {
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
          manager.setData(entity, "fiskheroes:shield", true);
          manager.setData(entity, "fiskheroes:blade", true);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 3) {
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 4) {
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
        if (entity.getData("skyhighheroes:dyn/battle_card") == 5) {
          manager.setData(entity, "skyhighheroes:dyn/omega_xis", true);
          manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        };
      };
      manager.setData(entity, "fiskheroes:energy_projection", entity.isSprinting() && entity.getData("skyhighheroes:dyn/jet_attack_timer") == 1);
    }
  };
};