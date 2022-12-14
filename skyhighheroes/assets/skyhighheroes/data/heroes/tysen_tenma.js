var uuid = "0ccdd53f-70bc-4039-b89b-fd3781f746f2"
function init(hero) {
    hero.setName("Astro Boy");
    hero.setTier(8);
    hero.setHelmet("Head");
    hero.setChestplate("Torso");
    hero.setLeggings("Legs");
    hero.setBoots("Boots");
    hero.setAliases("tysen_tenma");
    hero.setVersion("Tysen Tenma");
    hero.hide();
    hero.addPrimaryEquipment("fiskheroes:katana{Dual:1}", true, item => item.nbt().getBoolean("Dual"));
    hero.addPrimaryEquipment("fiskheroes:ruptures_scythe", true);
    hero.addPrimaryEquipment("fiskheroes:chronos_rifle", true);
    hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1}", true, item => item.nbt().getBoolean("Electromagnetic"));
    
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

    hero.addKeyBind("AIM", "Aim Arm Cannon", 4);
    hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
    hero.addKeyBind("ENERGY_PROJECTION", "Digit Beams", 3);
    hero.addKeyBind("SHIELD", "Force Field", 5);
    hero.addKeyBind("SUPER_SPEED", "Super Speed", 2);
    hero.addKeyBindFunc("func_CYCLE_CLOTHES", cycleClothes, "Cycle Clothes", 1);

    hero.addSoundEvent("AIM_START", "fiskheroes:repulsor_charge");
    hero.addSoundEvent("AIM_STOP", "fiskheroes:repulsor_powerdown");
    
    hero.setDefaultScale(1.0);
    hero.setHasProperty(hasProperty);
    hero.setHasPermission(hasPermission);
    hero.setModifierEnabled(isModifierEnabled);
    hero.supplyFunction("canAim", canAim);
    hero.setTierOverride(getTierOverride);
    hero.setKeyBindEnabled(isKeyBindEnabled);
    hero.addAttributeProfile("SHIELD", shieldProfile);
    hero.setAttributeProfile(getAttributeProfile);
    hero.setTickHandler((entity, manager) => {
        var flying = entity.getData("fiskheroes:flying");
        manager.incrementData(entity, "skyhighheroes:dyn/booster_timer", 2, flying);
    });
}

function cycleClothes(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/tenma_clothes", player.getData("skyhighheroes:dyn/tenma_clothes") + 1);
    if (player.getData("skyhighheroes:dyn/tenma_clothes") > 3) {
        manager.setData(player, "skyhighheroes:dyn/tenma_clothes", 0);
    }
    return true;
}

function getTierOverride(entity) {

    return (entity.getUUID() == uuid) ? 8 : 0;
}

function getAttributeProfile(entity) {
    return (entity.getData("fiskheroes:shield_blocking") && entity.getUUID() == uuid) ? "SHIELD" : null;
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

    case "fiskheroes:energy_projection":

        return entity.getUUID() == uuid && entity.getHeldItem().isEmpty() && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking");

    case "fiskheroes:energy_bolt":

        return entity.getUUID() == uuid && entity.getHeldItem().isEmpty() && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:energy_projection");

    case "fiskheroes:super_speed":

        return entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && !entity.getData("fiskheroes:shield_blocking");

    case "fiskheroes:shield":

        return entity.getUUID() == uuid && entity.getData("fiskheroes:flight_timer") == 0 && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:energy_projection");

    case "fiskheroes:leaping":

        return entity.getUUID() == uuid && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:energy_projection");

    case "fiskheroes:arrow_catching":

        return entity.getUUID() == uuid && !entity.getData("fiskheroes:aiming") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:energy_projection");

    default:

        return entity.getUUID() == uuid;
    }
}

function isKeyBindEnabled(entity, keyBind) {

    switch (keyBind) {

    case "SHIELD_THROW":

        return entity.getUUID() == uuid && entity.getHeldItem().name() == "fiskheroes:captain_americas_shield";

    case "AIM":

        return entity.getUUID() == uuid && entity.getHeldItem().name() != "fiskheroes:captain_americas_shield";

    default:

        return entity.getUUID() == uuid;

    }

}

function hasProperty(entity, property) {

    switch (property) {

    case "BREATHE_SPACE":

        return entity.getUUID() == uuid;

    default:

        return entity.getUUID() == uuid;

    }

}

function hasPermission(entity, permission) {
  
    switch (permission) {
  
      case "USE_CHRONOS_RIFLE":
  
        return entity.getUUID() == uuid;
  
      case "USE_SHIELD":
  
        return entity.getUUID() == uuid;
    
      default:
  
        return false;
  
    }
  
}

function canAim(entity) {
    return (entity.getHeldItem().isEmpty() || entity.getHeldItem().name() == "fiskheroes:chronos_rifle") && !entity.getData("fiskheroes:shield_blocking") && !entity.getData("fiskheroes:energy_projection") && entity.getUUID() == uuid;
}