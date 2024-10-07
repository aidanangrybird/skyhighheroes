var bodyTemp = implement("skyhighheroes:external/body_temperature");
var stelar = implement("skyhighheroes:external/stelar");
var uuid = "a3d071d4-c912-41e1-a6b2-c0de99ea4a84";
var transerSystem = implement("skyhighheroes:external/transer_system");
var transerMessaging = implement("skyhighheroes:external/transer_messaging");
var transerBrotherBand = implement("skyhighheroes:external/transer_brotherband");
var transerContacts = implement("skyhighheroes:external/transer_contacts");
var transerScanner = implement("skyhighheroes:external/transer_scanner");
var jetStreakSquallVortex = implement("skyhighheroes:external/jet_streak_squall_vortex");
var jetStreakBattleCards = implement("skyhighheroes:external/jet_streak_battle_cards");
var transerOS = transerSystem.initTranser([transerMessaging, transerBrotherBand, transerContacts, transerScanner, jetStreakSquallVortex, jetStreakBattleCards]);
function init(hero) {
  hero.setAliases("aidan_stelar");
  hero.setName("\u00A76Squall Vortex");
  hero.setTier(10);
  hero.setChestplate("Transer");
  hero.setVersion("Mega Man Star Force (OC)");
  hero.hide();

  transerOS.keyBinds(hero, true);

  stelar.initEquipment(hero, "Squall Vortex", "\u00A76")

  hero.addPowers("skyhighheroes:transer_system", "skyhighheroes:em_wave_change", "skyhighheroes:em_wave_being", "skyhighheroes:em_battle_card_predation", "skyhighheroes:em_battle_cards", "skyhighheroes:em_battle_cards_aidan", "skyhighheroes:em_vortex_buster");

  hero.addKeyBindFunc("CYCLE_CLOTHES", (player, manager) => stelar.cycleClothes(player, manager), "Change Clothes", 1);
  hero.addKeyBindFunc("SHIMMER_TOGGLE", (player, manager) => stelar.shimmerToggle(player, manager), "Shimmer Toggle", 1);
  hero.addKeyBindFunc("VISUALIZER_TOGGLE", (player, manager) => stelar.visualizerToggle(player, manager), "Toggle Visualizer", 2);
  hero.addKeyBindFunc("HOOD_TOGGLE", (player, manager) => stelar.hoodToggle(player, manager), "Toggle Hood", 2);
  
  hero.setDefaultScale(1.0);
  hero.setHasProperty(hasProperty);
  hero.setHasPermission((entity, permission) => stelar.hasPermission(entity, permission));
  stelar.initProfiles(hero, uuid);
  hero.supplyFunction("canAim", entity => stelar.canAim(entity, "jet_streak"));
  hero.setModifierEnabled((entity, modifier) => {
    if (modifier.name() == "fiskheroes:shape_shifting") {
      return true;
    };
    return true;
    //return transerOS.isModifierEnabled(entity, modifier);
  });
  hero.setTierOverride(entity => stelar.getTierOverride(entity));
  hero.setKeyBindEnabled((entity, keyBind) => {
    return transerOS.isKeyBindEnabled(entity, keyBind);
  });
  hero.setDamageProfile(entity => stelar.getDamageProfile(entity));
  hero.addSoundEvent("WEAPON_EQUIP", "skyhighheroes:wave_equip");
  hero.addSoundEvent("WEAPON_UNEQUIP", "skyhighheroes:wave_equip");
  //hero.addSoundEvent("STEP", "skyhighheroes:wave_footstep");
  hero.addSoundEvent("PUNCH", "skyhighheroes:wave_punch");
  hero.setTickHandler((entity, manager) => {
    transerOS.tickHandler(entity, manager, "Squall Vortex", "Aidan Stelar", "\u00A76");
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1) {
      manager.setData(entity, "fiskheroes:disguise", null);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
      manager.setData(entity, "fiskheroes:disguise", "Squall Vortex");
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
  });
};

function hasProperty(entity, property) {
  return (property == "BREATHE_SPACE" || property == "MASK_TOGGLE") && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) || (entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND"));
};