var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
function init(hero) {
  hero.setName("Robot");
  hero.setTier(10);
  hero.setHelmet("Head");
  hero.setChestplate("Torso");
  hero.setLeggings("Legs");
  hero.setBoots("Boots");
  hero.hide();

  hero.addPowers("skyhighheroes:em_wave_change", "skyhighheroes:em_wave_being", "skyhighheroes:em_battle_card_predation", "skyhighheroes:em_mega_buster");
  hero.addAttribute("SPRINT_SPEED", 0.2, 1);
  hero.addAttribute("STEP_HEIGHT", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
  hero.addAttribute("PUNCH_DAMAGE", 9.5, 0);
  hero.addAttribute("MAX_HEALTH", -8.0, 0);
  hero.addAttribute("REACH_DISTANCE", -1.0, 0);
  hero.addAttribute("KNOCKBACK", 2.5, 0);
  hero.addAttribute("IMPACT_DAMAGE", 50.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

  hero.addKeyBind("TELEPORT", "Transmit", 1);
  hero.addKeyBind("PREDATION", "Battle Card Predation", 2);
  hero.addKeyBind("INVISIBILITY", "Become Wave", 3);
  hero.addKeyBind("AIM", "Aim Mega Buster", 4);
  hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
  hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
  hero.addKeyBind("WAVE_CHANGE", "EM Wave Change", 5);
  hero.addKeyBind("INTANGIBILITY", "Become in Phase", 5);
  
  hero.setDefaultScale(0.8);
  hero.setHasProperty(hasProperty);
  hero.setHasPermission(hasPermission);
  hero.addAttributeProfile("INACTIVE", inactiveProfile);
  hero.addAttributeProfile("BLADE", bladeProfile);
  hero.addAttributeProfile("SHIELD", shieldProfile);
  hero.setAttributeProfile(getAttributeProfile);
  hero.supplyFunction("canAim", canAim);
  hero.setModifierEnabled(isModifierEnabled);
  hero.setTierOverride(getTierOverride);
  hero.setKeyBindEnabled(isKeyBindEnabled);
  hero.setTickHandler((entity, manager) => {
    var x = entity.posX();
    var y = entity.posY();
    var z = entity.posZ();
    if (entity.world().getDimension() == 0 && entity.posY() > 4000 && entity.rotPitch() < -80 && entity.getData("fiskheroes:flight_boost_timer") == 1){
      manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 2595));
      manager.setData(entity, "fiskheroes:teleport_delay", 6);
    }
    if (entity.world().getDimension() == 2595 && entity.posY() > 4000 && entity.rotPitch() < -80 && entity.getData("fiskheroes:flight_boost_timer") == 1){
      manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 0));
      manager.setData(entity, "fiskheroes:teleport_delay", 6);
    }
    var t = entity.getData("skyhighheroes:dyn/superhero_boosting_landing_ticks");
    if (t == 0 && !entity.isSprinting() && !entity.isOnGround() && entity.motionY() < -1.25 && entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() && entity.world().blockAt(entity.pos()).name() == "minecraft:air") {
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", t = 12);
      entity.playSound("skyhighheroes:wave.footstep", 1, 1.15 - Math.random() * 0.3);
    }
    else if (t > 0) {
      manager.setData(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", --t);
    }
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_boosting_landing_timer", 2, 8, t > 0);
    var pain = (entity.rotPitch() > 12.5 && entity.motionY() < -0.075 && entity.motionY() > -1.25 && (entity.motionZ() > 0.125 || entity.motionZ() < -0.125 || entity.motionX() > 0.125 || entity.motionX() < -0.125)) && !entity.isSprinting() && !entity.isOnGround() && entity.getData("fiskheroes:flight_timer") > 0 && (entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -3, 0)).isSolid()) && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.world().blockAt(entity.pos()).name() == "minecraft:air";
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 10, 10, pain);
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.motionY() < -0.05 && !entity.isSneaking() && !entity.isOnGround() && !entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid()) {
      manager.setData(entity, "fiskheroes:flying", true);
    };
  });
}

function shieldProfile(profile) {
  profile.inheritDefaults();
  profile.addAttribute("BASE_SPEED", -0.75, 1);
  profile.addAttribute("SPRINT_SPEED", 0.0, 0);
  profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
  profile.addAttribute("JUMP_HEIGHT", -1.0, 1);
  profile.addAttribute("STEP_HEIGHT", -1.0, 1);
  profile.addAttribute("KNOCKBACK", 0.0, 0);
  profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
}

function bladeProfile(profile) {
  profile.inheritDefaults();
  profile.addAttribute("SPRINT_SPEED", 0.5, 1);
  profile.addAttribute("KNOCKBACK", 5.0, 0);
  profile.addAttribute("PUNCH_DAMAGE", 14.5, 0);
}

function getTierOverride(entity) {
  if ((entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0) && (entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1)) {
    return 1;
  }
  return (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1.0) ? 10 : 0;
}

function inactiveProfile(profile) {
  profile.addAttribute("MAX_HEALTH", -8.0, 0);
  profile.addAttribute("REACH_DISTANCE", -1.0, 0);
}

function getAttributeProfile(entity) {
  if (entity.getData("fiskheroes:shield_blocking")) {
    return "SHIELD";
  }
  if (entity.getData("fiskheroes:blade")) {
    return "BLADE";
  }
  return (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) ? null : "INACTIVE";
}

function getAugments(entity) {
  var hash = (entity.getWornChestplate().nbt().getInteger("Upgrades"));
	var headLevel = hash >> 4 * 0 & 0xF;
	var armLevel = hash >> 4 * 1 & 0xF;
	var chestLevel = hash >> 4 * 2 & 0xF;
	var legLevel = hash >> 4 * 3 & 0xF;
	var skinLevel = hash >> 4 * 4 & 0xF;
	var internalLevel = hash >> 4 * 5 & 0xF;//So like 
  obj = [headLevel, armLevel, chestLevel, legLevel, skinLevel, internalLevel];
  return obj;
}

/*
Head stuff:
Heat vision, slow motion, sonic waves
Arm stuff:
Flame blast, 
Chest stuff:
Immunities
Leg stuff:
Super speed, leaping

*/
function isModifierEnabled(entity, modifier) {
  level = getAugments(entity);
  switch (modifier.name()) {
    case "fiskheroes:controlled_flight":
      return (entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getData("skyhighheroes:dyn/wave_changed")) && entity.getUUID() == uuid;
    case "fiskheroes:equipment":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/battle_card") == 3 && entity.getData("fiskheroes:flight_boost_timer") == 0;
    case "fiskheroes:blade":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0;
    case "fiskheroes:shield":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/battle_card") == 1 && entity.getData("fiskheroes:flight_boost_timer") == 0;
    case "fiskheroes:arrow_catching":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:blade") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getData("fiskheroes:utility_belt_type") < 0;
    case "fiskheroes:energy_bolt":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getHeldItem().isEmpty();
    case "fiskheroes:lightning_cast":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:blade") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getData("fiskheroes:utility_belt_type") < 0 && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/head_toggle") == 0;
    default:
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid;
  }
}

function isKeyBindEnabled(entity, keyBind) {
  switch (keyBind) {
    case "INTANGIBILITY":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") > 0;
    case "SHIELD_THROW":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
    case "CHARGE_ENERGY":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
    case "TELEPORT":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/predation_timer") < 0.5;
    case "INVISIBILITY":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/predation_timer") < 0.5;
    case "AIM":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && (entity.getHeldItem().name() != "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() != "fiskheroes:ruptures_scythe");
    default:
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid;
  }
}

function hasProperty(entity, property) {
  return property == "BREATHE_SPACE" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
}

function hasPermission(entity, permission) {
  return (permission == "USE_CHRONOS_RIFLE" || permission == "USE_SHIELD") && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
}

function canAim(entity) {
  return (entity.getHeldItem().isEmpty() || entity.getHeldItem().name() == "fiskheroes:chronos_rifle") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid;
}