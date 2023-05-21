var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
var uuid = "4663f7f2-784c-467d-945c-4cc049f77d7c";
function init(hero) {
  hero.setName("Ender Stelar");
  hero.setTier(10);
  hero.setChestplate("Transer");
  hero.setAliases("ender_stelar");
  hero.setVersion("Mega Man Star Force");
  hero.hide();
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A73Ender Stelar's Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Dual"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A73Ender Stelar's Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A73Ender Stelar's Rifle},ench:[{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A73Ender Stelar's Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Electromagnetic"));
  
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
  hero.addKeyBindFunc("CYCLE_CLOTHES", cycleClothes, "Cycle Clothes", 1);
  hero.addKeyBindFunc("CYCLE_UP_CARD", cycleUpCard, "Next Battle Card", 1);
  hero.addKeyBindFunc("VISUALIZER_TOGGLE", visualizerToggle, "Toggle Visualizer", 2);
  hero.addKeyBindFunc("BATTLE_CARD_0", activateBattleCard, "Return To Mega Buster", 2);
  hero.addKeyBindFunc("BATTLE_CARD_1", activateBattleCard, "Shield", 2);
  hero.addKeyBindFunc("BATTLE_CARD_2", activateBattleCard, "Blade", 2);
  hero.addKeyBindFunc("BATTLE_CARD_3", activateBattleCard, "Shurikens", 2);
  hero.addKeyBind("PREDATION", "Battle Card Predation", 2);
  hero.addKeyBind("INVISIBILITY", "Become Wave", 3);
  hero.addKeyBindFunc("CYCLE_DOWN_CARD", cycleDownCard, "Previous Battle Card", 3);
  hero.addKeyBind("AIM", "Aim Mega Buster", 4);
  hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
  hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
  hero.addKeyBindFunc("WAVE_CHANGE", electroMagnetic, "EM Wave Change", 5);
  hero.addKeyBind("WAVE_CHANGE", "EM Wave Change", 5);
  hero.addKeyBindFunc("HEAD_TOGGLE", headToggle, "Toggle Omega-Xis Head", 5);
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
    var x = entity.posX();
    var y = entity.posY();
    var z = entity.posZ();
    if (entity.world().getDimension() == 0 && entity.posY() > 4000 && entity.rotPitch() < -80 && entity.getData("fiskheroes:flight_boost_timer") == 1){
      manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 2595));
      manager.setData(entity, "fiskheroes:teleport_delay", 6);
    };
    if (entity.world().getDimension() == 2595 && entity.posY() > 4000 && entity.rotPitch() < -80 && entity.getData("fiskheroes:flight_boost_timer") == 1){
      manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 0));
      manager.setData(entity, "fiskheroes:teleport_delay", 6);
    };
    var t = entity.getData("skyhighheroes:dyn/superhero_boosting_landing_ticks");
    if (t == 0 && !entity.isSprinting() && !entity.isOnGround() && entity.motionY() < -1.25 && entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() && entity.world().blockAt(entity.pos()).name() == "minecraft:air") {
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", t = 12);
      entity.playSound("skyhighheroes:wave.footstep", 1, 1.15 - Math.random() * 0.3);
    }
    else if (t > 0) {
      manager.setData(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", --t);
    };
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_boosting_landing_timer", 2, 8, t > 0);
    var pain = (entity.rotPitch() > 12.5 && entity.motionY() < -0.075 && entity.motionY() > -1.25 && (entity.motionZ() > 0.125 || entity.motionZ() < -0.125 || entity.motionX() > 0.125 || entity.motionX() < -0.125)) && !entity.isSprinting() && !entity.isOnGround() && entity.getData("fiskheroes:flight_timer") > 0 && (entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -3, 0)).isSolid()) && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.world().blockAt(entity.pos()).name() == "minecraft:air";
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 10, 10, pain);
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.motionY() < -0.05 && !entity.isSneaking() && !entity.isOnGround() && !entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid()) {
      manager.setData(entity, "fiskheroes:flying", true);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("fiskheroes:aiming") || entity.getData("fiskheroes:flight_boost_timer") > 0 || !entity.getHeldItem().isEmpty() || (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0 && entity.getData("skyhighheroes:dyn/predation_timer") < 1))) {
      manager.setData(entity, "skyhighheroes:dyn/battle_card", 0);
      manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getData("fiskheroes:aiming") || entity.getData("fiskheroes:flight_boost_timer") > 0 || (entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0 && entity.getData("skyhighheroes:dyn/predation_timer") < 1))) {
      manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
    };
    if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty() && !entity.getData("skyhighheroes:dyn/predation") && entity.getData("skyhighheroes:dyn/predation_timer") > 0.45 && entity.getData("skyhighheroes:dyn/predation_timer") < 0.55) {
      if (entity.getData("skyhighheroes:dyn/battle_card") == 1) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:shield_timer", 1.0);
        manager.setData(entity, "fiskheroes:shield", true);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 2) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:blade_timer", 1.0);
        manager.setData(entity, "fiskheroes:blade", true);
      };
      if (entity.getData("skyhighheroes:dyn/battle_card") == 3) {
        entity.playSound("skyhighheroes:wave.equip", 1, 1);
        manager.setData(entity, "skyhighheroes:dyn/head_toggle", 0);
        manager.setData(entity, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(entity, "fiskheroes:utility_belt_type", 1);
      };
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

function cycleUpCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") + 1);
  if (player.getData("skyhighheroes:dyn/selected_battle_card") > 3) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
  }
  return true;
}

function cycleDownCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") - 1);
  if (player.getData("skyhighheroes:dyn/selected_battle_card") < 0) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 3);
  }
  return true;
}

function activateBattleCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
  return true;
}

function electroMagnetic(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
  manager.setData(player, "skyhighheroes:dyn/visualizer_toggle", 0);
  manager.setData(player, "skyhighheroes:dyn/head_toggle", 0);
  if (player.getData("skyhighheroes:dyn/wave_changed") == false) {
    manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
  }
  if (player.getData("skyhighheroes:dyn/wave_changed") == true) {
    manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
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
  if (entity.getData("fiskheroes:blade") && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "BLADE";
  }
  if (entity.getHeldItem().name() == "fiskheroes:katana" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "BLADE";
  }
  if (entity.getHeldItem().name() == "fiskheroes:ruptures_scythe" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "BLADE";
  }
  if (entity.getHeldItem().name() == "fiskheroes:chronos_rifle" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "MAIN";
  }
  if (entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
    return "MAIN";
  }
  return (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) ? "MAIN" : null;
}

function isModifierEnabled(entity, modifier) {
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
        default:
          return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
      };
    case "fiskheroes:transformation":
      return entity.isAlive() && entity.getUUID() == uuid;
    case "fiskheroes:equipment":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 3 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
    case "fiskheroes:blade":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 2 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
    case "fiskheroes:shield":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/battle_card") == 1 && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getHeldItem().isEmpty();
    case "fiskheroes:arrow_catching":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:blade") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getData("fiskheroes:utility_belt_type") < 0;
    case "fiskheroes:energy_bolt":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().isEmpty();
    case "fiskheroes:lightning_cast":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:blade") && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.getData("fiskheroes:utility_belt_type") < 0 && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/head_toggle") == 0;
    default:
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
  }
}

function isKeyBindEnabled(entity, keyBind) {
  switch (keyBind) {
    case "WAVE_CHANGE":
      return entity.isAlive() && entity.getData("fiskheroes:flight_timer") == 0 && ((entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && !entity.isSneaking()) || entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0) && entity.getUUID() == uuid;
    case "VISUALIZER_TOGGLE":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid;
    case "CYCLE_CLOTHES":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 0 && entity.getUUID() == uuid;
    case "INTANGIBILITY":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("fiskheroes:flight_timer") > 0;
    case "SHIELD_THROW":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
    case "CHARGE_ENERGY":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
    case "TELEPORT":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") < 0.5;
    case "INVISIBILITY":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") < 0.5;
    case "CYCLE_UP_CARD":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") >= 0.5;
    case "CYCLE_DOWN_CARD":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") >= 0.5;
    case "BATTLE_CARD_0":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") >= 0.5 && entity.getData("skyhighheroes:dyn/selected_battle_card") == 0;
    case "BATTLE_CARD_1":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") >= 0.5 && entity.getData("skyhighheroes:dyn/selected_battle_card") == 1;
    case "BATTLE_CARD_2":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") >= 0.5 && entity.getData("skyhighheroes:dyn/selected_battle_card") == 2;
    case "BATTLE_CARD_3":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.getData("skyhighheroes:dyn/predation_timer") >= 0.5 && entity.getData("skyhighheroes:dyn/selected_battle_card") == 3;
    case "AIM":
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && (entity.getHeldItem().name() != "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() != "fiskheroes:ruptures_scythe");
    case "HEAD_TOGGLE":
      return entity.isAlive() && entity.getData("fiskheroes:flight_timer") == 0 && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && entity.isSneaking();
    default:
      return entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1;
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