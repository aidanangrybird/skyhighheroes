function init(hero, uuid, name) {
  hero.setName(name)
  hero.setTier(8);
  hero.setLeggings("Shorts");
  hero.setBoots("Boots");
  hero.setVersion("Astro Boy");
  hero.hide();

  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:" + name + "'s Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.nbt().getBoolean("Dual") && item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 4 && item.displayName() == name + "'s Katanas"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:" + name + "'s Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 4 && item.displayName() == name + "'s Scythe"));
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:" + name + "'s Rifle},ench:[{id:34,lvl:4}]}", true, item => (item.getEnchantmentLevel(34) == 4 && item.displayName() == name + "'s Rifle"));
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:" + name + "'s Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.nbt().getBoolean("Electromagnetic") && item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 4 && item.displayName() == name + "'s Shield"));

  hero.addPowers("skyhighheroes:astro_blaster", "skyhighheroes:astro_engine", "skyhighheroes:astro_flight", "skyhighheroes:astro_body", "skyhighheroes:astro_brain", "skyhighheroes:astro_machine_guns");
  hero.addAttribute("SPRINT_SPEED", 0.5, 1);
  hero.addAttribute("STEP_HEIGHT", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
  hero.addAttribute("PUNCH_DAMAGE", 10.0, 0);
  hero.addAttribute("KNOCKBACK", 2.5, 0);
  hero.addAttribute("BASE_SPEED_LEVELS", 30.0, 0);
  hero.addAttribute("IMPACT_DAMAGE", 25.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

  //Add keybinds for system test, boot rockets and arm rockets
  //Arm rockets keybind will inhibit the arm cannons
  //hero.addKeyBindFunc("BOOT_BOOSTERS", bootBoosters, "Activate Boot Boosters", 3);
  //hero.addKeyBindFunc("ARM_BOOSTERS", armBoosters, "Activate Boot Boosters", 1);
  //hero.addKeyBindFunc("POWER_STATE", powerStatus, "Power Up/Shut Down", 3);
  hero.addKeyBindFunc("CYCLE_CLOTHES", cycleClothes, "Change Clothes", 1);
  hero.addKeyBindFunc("SHIMMER_TOGGLE", shimmerToggle, "Toggle Shimmer", 1);
  //hero.addKeyBindFunc("INHIBITED_CANNONS", cannonInhibition, "\u00A7mCharged Arm Cannons\u00A7r Inhibited", 2)
  hero.addKeyBind("ENERGY_PROJECTION", "Charged Arm Cannons", 2);
  hero.addKeyBind("DUAL_ARM_CANNONS", "Charged Arm Cannons", 2);
  hero.addKeyBind("DUAL_ARM_CANNON", "Charged Arm Cannons", 2);
  hero.addKeyBind("SUPER_SPEED", "Super Speed", 3);
  //hero.addKeyBindFunc("INHIBITED_AIM", cannonInhibition, "\u00A7mAim\u00A7r Inhibited", 4);
  hero.addKeyBind("ARM_CANNON", "Aim", 4);
  hero.addKeyBind("AIM", "Aim", 4);
  hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
  hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
  hero.addKeyBind("CHARGED_BEAM", "Butt Machine Guns", 5);

  hero.setDefaultScale(1.0);/* 
  hero.addAttributeProfile("OFFLINE", profile => {
    profile.addAttribute("BASE_SPEED", -1.0, 1);
    profile.addAttribute("SPRINT_SPEED", -1.0, 1);
    profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
    profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
    profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
  });
  hero.setAttributeProfile(entity => {
    if (entity.getData("skyhighheroes:dyn/power_state_timer") < 1) {
      return "OFFLINE";
    } else {
      return null;
    }
  }); */
  hero.setHasProperty((entity, property) => {
    return property == "BREATHE_SPACE" && entity.getUUID() == uuid;
  });
  hero.setHasPermission((entity, permission) => {
    return (permission == "USE_CHRONOS_RIFLE" || permission == "USE_SHIELD") && entity.getUUID() == uuid;
  });
  hero.setModifierEnabled((entity, modifier) => {
    var online = entity.getData("skyhighheroes:dyn/power_state_timer") == 1 && entity.getUUID() == uuid;
    switch (modifier.name()) {
      case "fiskheroes:metal_skin":
        return entity.getUUID() == uuid && entity.getData("fiskheroes:metal_heat") < 1.0;
      case "fiskheroes:energy_projection":
        return entity.getUUID() == uuid && entity.getHeldItem().isEmpty() && entity.getData("fiskheroes:aiming_timer") == 0 && entity.getData("fiskheroes:beam_charge") == 0;
      case "fiskheroes:energy_bolt":
        return entity.getUUID() == uuid && entity.getHeldItem().isEmpty() && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
      case "fiskheroes:super_speed":
        return entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0;
      case "fiskheroes:leaping":
        return entity.getUUID() == uuid && entity.getData("fiskheroes:aiming_timer") == 0 && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
      case "fiskheroes:arrow_catching":
        return entity.getUUID() == uuid && entity.getData("fiskheroes:aiming_timer") == 0 && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;/* 
      case "fiskheroes:controlled_flight":
        switch (modifier.id()) {
          case "base":
            return entity.getData("skyhighheroes:dyn/boot_boosters_timer") == 1
          case "boost":
            return entity.getData("skyhighheroes:dyn/arm_boosters_timer") == 1
        };
      case "fiskheroes:transformation":
        switch (modifier.id()) {
          case "power_state":
            return entity.getUUID() == uuid;
          case "arm":
            return !entity.isOnGround();
          case "boots":
            return !entity.isOnGround();
        }; */
      default:
        return entity.getUUID() == uuid;
    };
  });
  hero.supplyFunction("canAim", (entity) => {
    return (entity.getHeldItem().isEmpty() || entity.getHeldItem().name() == "fiskheroes:chronos_rifle") && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
  });
  hero.setTierOverride((entity) => {
    return (entity.getUUID() == uuid) ? 8 : 0;
  });
  hero.setKeyBindEnabled((entity, keyBind) => {
    var online = entity.getData("skyhighheroes:dyn/power_state_timer") == 1 && entity.getUUID() == uuid;
    var offline = entity.getData("skyhighheroes:dyn/power_state_timer") < 1 && entity.getUUID() == uuid;
    switch (keyBind) {/* 
      case "INHIBITED_CANNONS":
        return entity.getData("skyhighheroes:dyn/arm_boosters_timer") > 0;
      case "INHIBITED_AIM":
        return entity.getData("skyhighheroes:dyn/arm_boosters_timer") > 0;
      case "POWER_STATE":
        return entity.getUUID() == uuid && entity.isOnGround(); */
      case "ARM_CANNON":
        return entity.getUUID() == uuid && entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/tenma_clothes") != 3;
      case "CYCLE_CLOTHES":
        return entity.getUUID() == uuid && !entity.isSneaking();
      case "SHIMMER_TOGGLE":
        return entity.getUUID() == uuid && entity.isSneaking();
      case "SHIELD_THROW":
        return entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
      case "AIM":
        if (entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:chronos_rifle") {
          return true;
        };
        if (entity.getUUID() == uuid && (entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe")) {
          return false;
        };
        if (entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/tenma_clothes") != 3 && entity.getData("skyhighheroes:dyn/arm_cannon_timer") == 1) {
          return true;
        };
        if (entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
          return true;
        };
      case "ENERGY_PROJECTION":
        if (entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/tenma_clothes") != 3 && entity.getData("skyhighheroes:dyn/dual_arm_cannon_timer") == 1) {
          return true;
        };
        if (entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
          return true;
        };/* 
      case "BOOT_BOOSTERS":
        return entity.motionY() < -0.075 && !entity.isOnGround();
      case "ARM_BOOSTERS":
        return entity.getData("fiskheroes:flight_timer") == 1 && entity.getData("skyhighheroes:dyn/boot_boosters_timer") == 1 && !entity.isOnGround(); */
      case "CHARGE_ENERGY":
        return entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
      case "DUAL_ARM_CANNONS":
        return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/tenma_clothes") != 3;
      case "DUAL_ARM_CANNON":
        return entity.getUUID() == uuid && entity.getData("skyhighheroes:dyn/tenma_clothes") == 3;
      default:
        return entity.getUUID() == uuid;
    };
  });
  hero.setTickHandler(getTickHandler);
};

function getTickHandler(entity, manager) {/* 
  if (entity.getData("skyhighheroes:dyn/boot_boosters_timer") == 1) {
    manager.setData(entity, "fiskheroes:flying", true);
  }; */
  if (entity.getWornLeggings().getEnchantmentLevel(35) == -1 && entity.getWornBoots().getEnchantmentLevel(35) == -1) {
    manager.setData(entity, "skyhighheroes:dyn/shimmer_toggle", 1);
  };
  if (entity.getWornLeggings().getEnchantmentLevel(35) == 0 && entity.getWornBoots().getEnchantmentLevel(35) == 0) {
    manager.setData(entity, "skyhighheroes:dyn/shimmer_toggle", 0);
  };
  var x = entity.posX();
  var y = entity.posY();
  var z = entity.posZ();
  if (entity.world().getDimension() == 0 && entity.posY() >= 4000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
    manager.setData(entity, "fiskheroes:teleport_dest", manager.newCoords(x, y, z, 2595));
    manager.setData(entity, "fiskheroes:teleport_delay", 6);
  };
  if (entity.world().getDimension() == 2595 && entity.posY() >= 1000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
    manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 0));
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
  var equipment = entity.getWornLeggings().nbt().getTagList("Equipment");
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
};

function cycleClothes(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/tenma_clothes", player.getData("skyhighheroes:dyn/tenma_clothes") + 1);
  if (player.getData("skyhighheroes:dyn/tenma_clothes") > 3) {
    manager.setData(player, "skyhighheroes:dyn/tenma_clothes", 0);
  };
  return true;
};
/*
function cannonType(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/cannon_type", player.getData("skyhighheroes:dyn/cannon_type") + 1);
  if (player.getData("skyhighheroes:dyn/cannon_type") > 1) {
    manager.setData(player, "skyhighheroes:dyn/cannon_type", 0);
  };
  return true;
};*/

function shimmerToggle(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/shimmer_toggle", player.getData("skyhighheroes:dyn/shimmer_toggle") + 1);
  if (player.getData("skyhighheroes:dyn/shimmer_toggle") == 1) {
    player.getWornLeggings().nbt().getTagList("ench");
    player.getWornBoots().nbt().getTagList("ench");
    manager.setTagList(player.getWornLeggings().nbt(), "ench", manager.newTagList("[{id: 35,lvl: -1}]"));
    manager.setTagList(player.getWornBoots().nbt(), "ench", manager.newTagList("[{id: 35,lvl: -1}]"));
  };
  if (player.getData("skyhighheroes:dyn/shimmer_toggle") > 1) {
    manager.removeTag(player.getWornLeggings().nbt(), "ench");
    manager.removeTag(player.getWornBoots().nbt(), "ench");
    manager.setData(player, "skyhighheroes:dyn/shimmer_toggle", 0);
  };
  return true;
};

function cannonInhibition(player, manager) {
  if (PackLoader.getSide() == "CLIENT") {
    PackLoader.printChat("Arm cannons inhibited.");
  };
  return false;
};

function armBoosters(player, manager) {
  if (PackLoader.getSide() == "CLIENT") {
    if (player.getData("skyhighheroes:dyn/arm_boosters")) {
      PackLoader.printChat("Arm rockets initiated.");
    };
    if (!player.getData("skyhighheroes:dyn/arm_boosters")) {
      PackLoader.printChat("Arm rockets disabled.");
    };
  };
  return false;
};

function bootBoosters(player, manager) {
  if (PackLoader.getSide() == "CLIENT") {
    if (player.getData("skyhighheroes:dyn/boot_boosters")) {
      PackLoader.printChat("Boot rockets initiated.");
    };
    if (!player.getData("skyhighheroes:dyn/boot_boosters")) {
      PackLoader.printChat("Boot rockets disabled.");
    };
  };
  return false;
};

function powerStatus(player, manager) {
  if (PackLoader.getSide() == "CLIENT") {
    if (player.getData("skyhighheroes:dyn/power_state")) {
      PackLoader.printChat("Powering up.");
    };
    if (!player.getData("skyhighheroes:dyn/power_state")) {
      PackLoader.printChat("Powering down.");
    };
  };
  return false;
};