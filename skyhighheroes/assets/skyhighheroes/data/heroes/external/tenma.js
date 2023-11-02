var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
function init(hero, uuid) {
  hero.setTier(8);
  hero.setLeggings("Shorts");
  hero.setBoots("Boots");
  hero.setVersion("Astro Boy");
  hero.hide();
   
  hero.addPowers("skyhighheroes:astro_blaster", "skyhighheroes:astro_beam", "skyhighheroes:astro_engine", "skyhighheroes:astro_flight", "skyhighheroes:astro_body", "skyhighheroes:astro_brain", "skyhighheroes:astro_machine_guns");
  hero.addAttribute("SPRINT_SPEED", 0.5, 1);
  hero.addAttribute("STEP_HEIGHT", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
  hero.addAttribute("PUNCH_DAMAGE", 9.5, 0);
  hero.addAttribute("KNOCKBACK", 2.5, 0);
  hero.addAttribute("BASE_SPEED_LEVELS", 30.0, 0);
  hero.addAttribute("IMPACT_DAMAGE", 25.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

  hero.addKeyBindFunc("CYCLE_CLOTHES", cycleClothes, "Change Clothes", 1);
  hero.addKeyBindFunc("SHIMMER_TOGGLE", shimmerToggle, "Toggle Shimmer", 1);
  hero.addKeyBind("ENERGY_PROJECTION", "Digit Beams", 2);
  hero.addKeyBind("SUPER_SPEED", "Super Speed", 3);
  hero.addKeyBind("AIM", "Aim", 4);
  hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
  hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
  hero.addKeyBind("CHARGED_BEAM", "Butt Machine Guns", 5);

  hero.setDefaultScale(1.0);
  hero.setHasProperty((entity, property) => {
    return property == "BREATHE_SPACE" && entity.getUUID() == uuid;
  });
  hero.setHasPermission((entity, permission) => {
    return (permission == "USE_CHRONOS_RIFLE" || permission == "USE_SHIELD") && entity.getUUID() == uuid;
  });
  hero.setModifierEnabled((entity, modifier) => {
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
        return entity.getUUID() == uuid && entity.getData("fiskheroes:aiming_timer") == 0 && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
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
    switch (keyBind) {
      case "CYCLE_CLOTHES":
        return entity.getUUID() == uuid && !entity.isSneaking();
      case "SHIMMER_TOGGLE":
        return entity.getUUID() == uuid && entity.isSneaking();
      case "SHIELD_THROW":
        return entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
      case "AIM":
        return entity.getUUID() == uuid && !(entity.getHeldItem().name() == "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() == "fiskheroes:ruptures_scythe");
      case "CHARGE_ENERGY":
        return entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
      default:
        return entity.getUUID() == uuid;
    };
  });
  hero.setTickHandler(getTickHandler);
};

function getTickHandler(entity, manager) {
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
    manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 2595));
    manager.setData(entity, "fiskheroes:teleport_delay", 6);
  };
  if (entity.world().getDimension() == 2595 && entity.posY() >= 1000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
    manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 0));
    manager.setData(entity, "fiskheroes:teleport_delay", 6);
  };
  var t = entity.getData("skyhighheroes:dyn/superhero_boosting_landing_ticks");
  if (t == 0 && !entity.isSprinting() && !entity.isOnGround() && entity.motionY() < -1.25 && entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() && entity.world().blockAt(entity.pos()).name() == "minecraft:air") {
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", t = 12);
  }
  else if (t > 0) {
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