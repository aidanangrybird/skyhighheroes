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
    return transerOS.isModifierEnabled(entity, modifier);
  });
  hero.setTierOverride(entity => stelar.getTierOverride(entity));
  hero.setKeyBindEnabled((entity, keyBind) => {
    if (keyBind == "VISUALIZER_TOGGLE") {
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid && ((entity.getData("skyhighheroes:dyn/stelar_clothes") == 3) ? !entity.isSneaking() : true);
    };
    if (keyBind == "CYCLE_CLOTHES") {
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && !entity.isSneaking() && entity.getUUID() == uuid;
    };
    if (keyBind == "SHIMMER_TOGGLE") {
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.isSneaking() && entity.getUUID() == uuid;
    };
    if (keyBind == "HOOD_TOGGLE") {
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid && entity.isSneaking() && entity.getData("skyhighheroes:dyn/stelar_clothes") == 3;
    };
    if (keyBind == "CYCLE_CHATS") {
      return entity.getUUID() == uuid && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0;
    };
    if (keyBind == "CYCLE_CHAT_MODES") {
      return entity.getUUID() == uuid && entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0;
    };
    if (keyBind == "SHAPE_SHIFT") {
      return entity.getUUID() == uuid && !entity.isSneaking() && entity.getData("skyhighheroes:dyn/battle_card") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) ? true : entity.getData("skyhighheroes:dyn/jet_streak_timer") == 1);
    };
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
    } else if (t > 0) {
      manager.setData(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", --t);
    };
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_boosting_landing_timer", 2, 8, t > 0);
    var pain = (entity.rotPitch() > 12.5 && entity.motionY() < -0.075 && entity.motionY() > -1.25 && (entity.motionZ() > 0.125 || entity.motionZ() < -0.125 || entity.motionX() > 0.125 || entity.motionX() < -0.125)) && !entity.isSprinting() && !entity.isOnGround() && entity.getData("fiskheroes:flight_timer") > 0 && (entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -3, 0)).isSolid()) && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.world().blockAt(entity.pos()).name() == "minecraft:air";
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 10, 10, pain);
  });
};

function hasProperty(entity, property) {
  return (property == "BREATHE_SPACE" || property == "MASK_TOGGLE") && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) || (entity.as("DISPLAY").getDisplayType() == "DISPLAY_STAND"));
};