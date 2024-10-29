function init(hero) {
  hero.setName("\u00A74Astro");
  hero.setTier(8);
  hero.setLeggings("Shorts");
  hero.setBoots("Boots");
  hero.setAliases("astro");
  
  hero.addPowers("skyhighheroes:astro_blaster", "skyhighheroes:astro_engine", "skyhighheroes:astro_flight", "skyhighheroes:astro_body", "skyhighheroes:astro_brain", "skyhighheroes:astro_machine_guns");
  hero.addAttribute("SPRINT_SPEED", 0.5, 1);
  hero.addAttribute("STEP_HEIGHT", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
  hero.addAttribute("PUNCH_DAMAGE", 10.0, 0);
  hero.addAttribute("KNOCKBACK", 2.5, 0);
  hero.addAttribute("BASE_SPEED_LEVELS", 30.0, 0);
  hero.addAttribute("IMPACT_DAMAGE", 25.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

  hero.addKeyBindFunc("CYCLE_CLOTHES", cycleClothes, "Change Clothes", 1);
  hero.addKeyBind("ENERGY_PROJECTION", "Charged Arm Cannons", 2);
  hero.addKeyBind("DUAL_ARM_CANNONS", "Charged Arm Cannons", 2);
  hero.addKeyBind("DUAL_ARM_CANNON", "Charged Arm Cannons", 2);
  hero.addKeyBind("SUPER_SPEED", "Super Speed", 3);
  hero.addKeyBind("ARM_CANNON", "Aim", 4);
  hero.addKeyBind("AIM", "Aim", 4);
  hero.addKeyBind("CHARGED_BEAM", "Butt Machine Guns", 5);

  
  hero.setDefaultScale(1.0);
  hero.setHasProperty(hasProperty);
  hero.setModifierEnabled(isModifierEnabled);
  hero.supplyFunction("canAim", canAim);
  hero.setKeyBindEnabled(isKeyBindEnabled);
  hero.setTickHandler(getTickHandler);
};

function getTickHandler(entity, manager) {
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
};

function cycleClothes(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/astro_clothes", player.getData("skyhighheroes:dyn/astro_clothes") + 1);
  if (player.getData("skyhighheroes:dyn/astro_clothes") > 3) {
    manager.setData(player, "skyhighheroes:dyn/astro_clothes", 0);
  };
  return true;
};

function isModifierEnabled(entity, modifier) {
  switch (modifier.name()) {
    case "fiskheroes:metal_skin":
      return entity.getData("fiskheroes:metal_heat") < 1.0;
    case "fiskheroes:energy_projection":
      return entity.getHeldItem().isEmpty() && !entity.getData("fiskheroes:aiming") && entity.getData("fiskheroes:beam_charge") == 0;
    case "fiskheroes:energy_bolt":
      return entity.getHeldItem().isEmpty() && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
    case "fiskheroes:super_speed":
      return entity.getData("fiskheroes:flight_timer") == 0;
    case "fiskheroes:leaping":
      return entity.getData("fiskheroes:aiming_timer") == 0 && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
    case "fiskheroes:arrow_catching":
      return entity.getData("fiskheroes:aiming_timer") == 0 && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
    default:
      return true;
  };
};

function isKeyBindEnabled(entity, keyBind) {
  switch (keyBind) {
    case "ARM_CANNON":
      return entity.getHeldItem().isEmpty() && entity.getData("skyhighheroes:dyn/astro_clothes") != 3;
    case "AIM":
      if (entity.getData("skyhighheroes:dyn/astro_clothes") != 3 && entity.getData("skyhighheroes:dyn/arm_cannon_timer") == 1) {
        return true;
      };
      if (entity.getData("skyhighheroes:dyn/astro_clothes") == 3) {
        return true;
      };
    case "ENERGY_PROJECTION":
      if (entity.getData("skyhighheroes:dyn/astro_clothes") != 3 && entity.getData("skyhighheroes:dyn/dual_arm_cannon_timer") == 1) {
        return true;
      };
      if (entity.getData("skyhighheroes:dyn/astro_clothes") == 3) {
        return true;
      };
    case "CHARGE_ENERGY":
      return entity.getHeldItem().name() == "fiskheroes:ruptures_scythe";
    case "DUAL_ARM_CANNONS":
      return entity.getData("skyhighheroes:dyn/astro_clothes") != 3;
    case "DUAL_ARM_CANNON":
      return entity.getData("skyhighheroes:dyn/astro_clothes") == 3;
    default:
      return true;
  };
};

function hasProperty(entity, property) {
  return property == "BREATHE_SPACE";
};

function offlineProfile(profile) {
  profile.addAttribute("BASE_SPEED", -1.0, 1);
  profile.addAttribute("SPRINT_SPEED", -1.0, 1);
  profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
  profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
  profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
};

function canAim(entity) {
  return entity.getHeldItem().isEmpty() && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
};