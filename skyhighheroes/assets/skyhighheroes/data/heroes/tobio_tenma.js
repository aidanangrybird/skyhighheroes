var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
function init(hero) {
  hero.setName("Tobio Tenma");
  hero.setTier(8);
  hero.setHelmet("Head");
  hero.setChestplate("Torso");
  hero.setLeggings("Legs");
  hero.setBoots("Boots");
  hero.setAliases("tobio_tenma");
  hero.setVersion("Astro Boy");
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A74Tobio Tenma's Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Dual"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A74Tobio Tenma's Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A74Tobio Tenma's Rifle},ench:[{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A74Tobio Tenma's Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Electromagnetic"));
  
  hero.addPowers("skyhighheroes:astro_blaster", "skyhighheroes:astro_beam", "skyhighheroes:astro_engine", "skyhighheroes:astro_shield", "skyhighheroes:astro_flight", "skyhighheroes:astro_body", "skyhighheroes:astro_brain");
  hero.addAttribute("SPRINT_SPEED", 0.3, 1);
  hero.addAttribute("BASE_SPEED", 0.2, 1);
  hero.addAttribute("STEP_HEIGHT", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
  hero.addAttribute("PUNCH_DAMAGE", 9.5, 0);
  hero.addAttribute("KNOCKBACK", 2.5, 0);
  hero.addAttribute("REACH_DISTANCE", -1.5, 0);
  hero.addAttribute("MAX_HEALTH", -12.0, 0);
  hero.addAttribute("BASE_SPEED_LEVELS", 6.0, 0);
  hero.addAttribute("IMPACT_DAMAGE", 25.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

  hero.addKeyBindFunc("CYCLE_CLOTHES", cycleClothes, "Cycle Clothes", 1);
  hero.addKeyBind("ENERGY_PROJECTION", "Digit Beams", 2);
  hero.addKeyBind("SUPER_SPEED", "Super Speed", 3);
  hero.addKeyBind("AIM", "Aim Arm Cannon", 4);
  hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
  hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
  hero.addKeyBind("SHIELD", "Force Field", 5);

  
  hero.setDefaultScale(0.6);
  hero.setHasProperty(hasProperty);
  hero.setHasPermission(hasPermission);
  hero.setModifierEnabled(isModifierEnabled);
  hero.supplyFunction("canAim", canAim);
  hero.setKeyBindEnabled(isKeyBindEnabled);
  hero.addAttributeProfile("SHIELD", shieldProfile);
  hero.setAttributeProfile(getAttributeProfile);
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
    }
    else if (t > 0) {
      manager.setData(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", --t);
    }
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_boosting_landing_timer", 2, 8, t > 0);
    var pain = (entity.rotPitch() > 12.5 && entity.motionY() < -0.075 && entity.motionY() > -1.25 && (entity.motionZ() > 0.125 || entity.motionZ() < -0.125 || entity.motionX() > 0.125 || entity.motionX() < -0.125)) && !entity.isSprinting() && !entity.isOnGround() && entity.getData("fiskheroes:flight_timer") > 0 && (entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -3, 0)).isSolid()) && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.world().blockAt(entity.pos()).name() == "minecraft:air";
    manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 10, 10, pain);
    if (entity.motionY() < -0.05 && !entity.isSneaking() && !entity.isOnGround() && !entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid()) {
      manager.setData(entity, "fiskheroes:flying", true);
    };
  });
}

function cycleClothes(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/tenma_clothes", player.getData("skyhighheroes:dyn/tenma_clothes") + 1);
  if (player.getData("skyhighheroes:dyn/tenma_clothes") > 3) {
    manager.setData(player, "skyhighheroes:dyn/tenma_clothes", 0);
  };
  return true;
}

function getTierOverride(entity) {
  return (!entity.isDisplayStand()) ? 8 : 0;
}

function getAttributeProfile(entity) {
  return (entity.getData("fiskheroes:shield_blocking")) ? "SHIELD" : null;
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

function isModifierEnabled(entity, modifier) {
  switch (modifier.name()) {
    case "fiskheroes:metal_skin":
      return entity.getData("fiskheroes:metal_heat") < 1.0;
    case "fiskheroes:energy_projection":
      return entity.getHeldItem().isEmpty() && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking");
    case "fiskheroes:energy_bolt":
      return entity.getHeldItem().isEmpty() && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:energy_projection");
    case "fiskheroes:super_speed":
      return entity.getData("fiskheroes:flight_timer") == 0 && !entity.getData("fiskheroes:shield_blocking");
    case "fiskheroes:shield":
      return !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:energy_projection");
    case "fiskheroes:leaping":
      return !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:energy_projection");
    case "fiskheroes:arrow_catching":
      return !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:energy_projection");
    default:
      return !entity.isDisplayStand();
  }
}

function isKeyBindEnabled(entity, keyBind) {
  switch (keyBind) {
    case "SHIELD_THROW":
      return entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";
    case "AIM":
      return (entity.getHeldItem().name() != "fiskheroes:captain_americas_shield" || entity.getHeldItem().name() != "fiskheroes:ruptures_scythe");
    case "CHARGE_ENERGY":
      return entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
    default:
      return true;
  }
}

function hasProperty(entity, property) {
  return property == "BREATHE_SPACE";
}

function hasPermission(entity, permission) {
  return permission == "USE_CHRONOS_RIFLE" || permission == "USE_SHIELD";
}

function canAim(entity) {
  return (entity.getHeldItem().isEmpty() || entity.getHeldItem().name() == "fiskheroes:chronos_rifle") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:energy_projection");
}