var uuid = "324ccf33-d7b4-4cd5-b85f-d8f16a8cb862";
function init(hero) {
  hero.setName("Biscuit Stelar");
  hero.setTier(10);
  hero.setChestplate("Transer");
  hero.setAliases("biscuit_stelar");
  hero.setVersion("Mega Man Star Force");
  hero.hide();
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A74Biscuit Stelar's Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Dual"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A74Biscuit Stelar's Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A74Biscuit Stelar's Rifle},ench:[{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A74Biscuit Stelar's Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Electromagnetic"));
  
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
  hero.addKeyBindFunc("func_CYCLE_CLOTHES", cycleClothes, "Cycle Clothes", 1);
  hero.addKeyBindFunc("func_VISUALIZER_TOGGLE", visualizerToggle, "Toggle Visualizer", 2);
  hero.addKeyBindFunc("func_CYCLE_CARD", cycleCard, "Cycle Battle Card", 2);
  hero.addKeyBind("INVISIBILITY", "Become Wave", 3);
  hero.addKeyBind("AIM", "Aim Mega Buster", 4);
  hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
  hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
  hero.addKeyBindFunc("func_ELECTROMAGNETIC", electroMagnetic, "EM Wave Change", 5);
  hero.addKeyBind("WAVE_CHANGE", "EM Wave Change", 5);
  hero.addKeyBindFunc("func_HEADTOGGLE", headToggle, "Toggle Omega-Xis Head", 5);
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
  hero.setDamageProfile(getDamageProfile);
  hero.setTickHandler((entity, manager) => {
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") != 0 || entity.getData("skyhighheroes:dyn/head_toggle") != 0) && entity.getData("fiskheroes:aiming")){
      manager.setData(entity, "skyhighheroes:dyn/battle_card", 0);
      manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
      manager.setData(entity, "fiskheroes:shield_timer", 0.0);
      manager.setData(entity, "fiskheroes:blade_timer", 0.0);
      manager.setData(entity, "fiskheroes:shield", false);
      manager.setData(entity, "fiskheroes:blade", false);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") != 0 || entity.getData("skyhighheroes:dyn/head_toggle") != 0) && entity.getData("fiskheroes:flight_boost_timer") > 0){
      manager.setData(entity, "skyhighheroes:dyn/battle_card", 0);
      manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
      manager.setData(entity, "fiskheroes:shield_timer", 0.0);
      manager.setData(entity, "fiskheroes:blade_timer", 0.0);
      manager.setData(entity, "fiskheroes:shield", false);
      manager.setData(entity, "fiskheroes:blade", false);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("skyhighheroes:dyn/battle_card") != 0 || entity.getData("skyhighheroes:dyn/head_toggle") != 0) && (!entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/battle_card") == 2)){
      manager.setData(entity, "skyhighheroes:dyn/battle_card", 0);
      manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
      manager.setData(entity, "fiskheroes:shield_timer", 0.0);
      manager.setData(entity, "fiskheroes:blade_timer", 0.0);
      manager.setData(entity, "fiskheroes:shield", false);
      manager.setData(entity, "fiskheroes:blade", false);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/battle_card") == 2){
      manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
      manager.setData(entity, "fiskheroes:shield_timer", 0.0);
      manager.setData(entity, "fiskheroes:blade_timer", 1.0);
      manager.setData(entity, "fiskheroes:shield", false);
      manager.setData(entity, "fiskheroes:blade", true);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/battle_card") == 1){
      manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
      manager.setData(entity, "fiskheroes:shield_timer", 1.0);
      manager.setData(entity, "fiskheroes:blade_timer", 0.0);
      manager.setData(entity, "fiskheroes:shield", true);
      manager.setData(entity, "fiskheroes:blade", false);
    };
  });
  hero.addSoundEvent("WEAPON_EQUIP", "skyhighheroes:wave_equip");
  hero.addSoundEvent("WEAPON_UNEQUIP", "skyhighheroes:wave_equip");
  hero.addSoundEvent("STEP", "skyhighheroes:wave_footstep");
  hero.addSoundEvent("PUNCH", "skyhighheroes:wave_punch");
  hero.addDamageProfile("BLADE", {
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

function cycleCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/battle_card") + 1);
  if (player.getData("skyhighheroes:dyn/battle_card") > 2) {
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
  }
  return true;
}

function electroMagnetic(player, manager) {
  if (player.getData("skyhighheroes:dyn/wave_changed") == false) {
    manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/visualizer_toggle", 0);
    manager.setData(player, "skyhighheroes:dyn/head_toggle", 0);
  }
  if (player.getData("skyhighheroes:dyn/wave_changed") == true) {
    manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
    manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
    manager.setData(player, "skyhighheroes:dyn/visualizer_toggle", 0);
    manager.setData(player, "skyhighheroes:dyn/head_toggle", 0);
  }
  return true;
}

function visualizerToggle(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/visualizer_toggle", player.getData("skyhighheroes:dyn/visualizer_toggle") + 1);
  if (player.getData("skyhighheroes:dyn/visualizer_toggle") > 1) {
    manager.setData(player, "skyhighheroes:dyn/visualizer_toggle", 0);
  }
  if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
    manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
  }
  if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
    manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
  }
  return true;
}

function cycleClothes(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/stelar_clothes", player.getData("skyhighheroes:dyn/stelar_clothes") + 1);
  if (player.getData("skyhighheroes:dyn/stelar_clothes") > 3) {
    manager.setData(player, "skyhighheroes:dyn/stelar_clothes", 0);
  }
  return true;
}

function headToggle(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/head_toggle", player.getData("skyhighheroes:dyn/head_toggle") + 1);
  if (player.getData("skyhighheroes:dyn/head_toggle") > 1) {
    manager.setData(player, "skyhighheroes:dyn/head_toggle", 0);
  }
  return true;
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

function getDamageProfile(entity) {
  if (entity.getData("fiskheroes:blade")) {
    return "BLADE";
  }
  return (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) ? "MAIN" : null;
}

function isModifierEnabled(entity, modifier) {
  switch (modifier.name()) {
    case "fiskheroes:damage_immunity":
      switch (modifier.id()) {
        case "explosion": 
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("fiskheroes:invisible");
        case "magic": 
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("fiskheroes:invisible");
        case "shuriken": 
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("fiskheroes:invisible");
        case "sharp": 
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("fiskheroes:invisible");
        case "bullet": 
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("fiskheroes:invisible");
        case "blunt": 
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("fiskheroes:invisible");
        default:
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid;
      };
    case "fiskheroes:transformation":
      return entity.isAlive() && entity.getUUID() == uuid;
    case "fiskheroes:controlled_flight":
      return (entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0 && entity.getData("skyhighheroes:dyn/wave_changed")) && entity.getUUID() == uuid;
    case "fiskheroes:blade":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0;
    case "fiskheroes:shield":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/battle_card") == 1 && entity.getData("fiskheroes:flight_boost_timer") == 0;
    case "fiskheroes:arrow_catching":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:blade") && entity.getData("fiskheroes:flight_boost_timer") == 0;
    case "fiskheroes:energy_bolt":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getHeldItem().isEmpty();
    case "fiskheroes:lightning_cast":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:blade") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
    default:
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid;
  }
}

function isKeyBindEnabled(entity, keyBind) {
  switch (keyBind) {
    case "func_ELECTROMAGNETIC":
      return entity.isAlive() && entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0);
    case "WAVE_CHANGE":
      return entity.isAlive() && entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0);
    case "func_VISUALIZER_TOGGLE":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid;
    case "func_CYCLE_CLOTHES":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid;
    case "INTANGIBILITY":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") > 0;
    case "SHIELD_THROW":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
    case "CHARGE_ENERGY":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
    case "AIM":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid && (entity.getHeldItem().name() != "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() != "fiskheroes:ruptures_scythe");
    case "func_HEADTOGGLE":
      return entity.isAlive() && entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking();
    default:
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid;
  }
}

function hasProperty(entity, property) {
  switch (property) {
    case "BREATHE_SPACE":
      return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0;
    case "MASK_TOGGLE":
      return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") > 0;
    default:
      return false;
  }
}

function hasPermission(entity, permission) {
  switch (permission) {
    case "USE_CHRONOS_RIFLE":
      return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
    case "USE_SHIELD":
      return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
    default:
      return false;
  }
}

function canAim(entity) {
  return (entity.getHeldItem().isEmpty() || entity.getHeldItem().name() == "fiskheroes:chronos_rifle") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getUUID() == uuid;
}
