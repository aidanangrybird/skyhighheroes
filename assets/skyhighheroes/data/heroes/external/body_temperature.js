//I spent a lot of time trying to figure this out
//If you want to use this in your heropack, please contact aidanangrybird on Discord and make sure to credit aidanangrybird in your heropack
function getTemperatureTicks(entity, map, clothingVar) {
  if (typeof clothingVar === "string") {
    var ticks = 0;
    var currentClothing = map.ids[entity.getData(clothingVar)];
    if (entity.world().isUnobstructed(entity.pos(), entity.pos().add(0, 100, 0))) {
      if (map.hasOwnProperty(currentClothing)) {
        var clothing = map[currentClothing];
        if (clothing.hasOwnProperty(entity.world().getLocation(entity.pos()).biome())) {
          ticks = clothing[entity.world().getLocation(entity.pos()).biome()];
        };
      };
    };
    return ticks;
  } else {
    var ticks = 0;
    if (entity.world().isUnobstructed(entity.pos(), entity.pos().add(0, 100, 0))) {
      if (map.hasOwnProperty(entity.world().getLocation(entity.pos()).biome())) {
        ticks = map[entity.world().getLocation(entity.pos()).biome()];
      };
    };
    return ticks;
  };
};

function change(entity, manager, map, tempVar, stableRate, clothingVar) {
  var ticks = getTemperatureTicks(entity, map, clothingVar);
  if (!(ticks == 0)) {
    if (ticks > 0.0 && entity.getData(tempVar) >= -1.0 && entity.getData(tempVar) <= 1.0) {
      manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0/ticks)));
    };
    if (ticks < 0.0 && entity.getData(tempVar) >= -1.0 && entity.getData(tempVar) <= 1.0) {
      manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0/ticks)));
    };
  } else {
    if (entity.getData(tempVar) > 0.0 && entity.getData(tempVar) <= 1.3) {
      manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0/stableRate)));
    };
    if (entity.getData(tempVar) < 0.0 && entity.getData(tempVar) >= -1.3) {
      manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0/stableRate)));
    };
  };
};


function initProfiles(hero) {
  hero.addAttributeProfile("INACTIVE", (profile) => {
  });
  hero.addAttributeProfile("FROZEN",  (profile) => {
    profile.addAttribute("BASE_SPEED", -1.0, 1);
    profile.addAttribute("SPRINT_SPEED", -1.0, 1);
    profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
    profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
    profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
    profile.addAttribute("MAX_HEALTH", -19.0, 0);
  });
  hero.addAttributeProfile("COLD3", (profile) => {
    profile.addAttribute("BASE_SPEED", -1.0, 1);
    profile.addAttribute("SPRINT_SPEED", -1.0, 1);
    profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
    profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
    profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
    profile.addAttribute("MAX_HEALTH", -19.0, 0);
  });
  hero.addAttributeProfile("COLD2", (profile) => {
    profile.addAttribute("BASE_SPEED", -1.0, 1);
    profile.addAttribute("SPRINT_SPEED", -1.0, 1);
    profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
    profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
    profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
    profile.addAttribute("MAX_HEALTH", -19.0, 0);
  });
  hero.addAttributeProfile("COLD1", (profile) => {
    profile.addAttribute("BASE_SPEED", -0.05, 1);
    profile.addAttribute("WEAPON_DAMAGE", -0.05, 1);
    profile.addAttribute("PUNCH_DAMAGE", -0.05, 1);
    profile.addAttribute("MAX_HEALTH", -2.0, 0);
  });
  hero.addAttributeProfile("HOT1", (profile) => {
    profile.addAttribute("BASE_SPEED", -0.1, 1);
    profile.addAttribute("WEAPON_DAMAGE", -0.05, 1);
    profile.addAttribute("PUNCH_DAMAGE", -0.05, 1);
    profile.addAttribute("MAX_HEALTH", -2.0, 0);
  });
  hero.addAttributeProfile("HOT2", (profile) => {
    profile.addAttribute("BASE_SPEED", -0.35, 1);
    profile.addAttribute("SPRINT_SPEED", -0.35, 1);
    profile.addAttribute("WEAPON_DAMAGE", -0.6, 1);
    profile.addAttribute("JUMP_HEIGHT", -0.5, 0);
    profile.addAttribute("MAX_HEALTH", -7.0, 0);
  });
  hero.addAttributeProfile("HOT3", (profile) => {
    profile.addAttribute("BASE_SPEED", -0.7, 1);
    profile.addAttribute("SPRINT_SPEED", -0.7, 1);
    profile.addAttribute("WEAPON_DAMAGE", -0.95, 1);
    profile.addAttribute("JUMP_HEIGHT", -1.0, 0);
    profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
    profile.addAttribute("MAX_HEALTH", -14.0, 0);
  });
  hero.addAttributeProfile("FIRE", (profile) => {
    profile.addAttribute("BASE_SPEED", -1.0, 1);
    profile.addAttribute("SPRINT_SPEED", -1.0, 1);
    profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
    profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
    profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
    profile.addAttribute("MAX_HEALTH", -19.0, 0);
  });
};

function getAttributeProfile(entity) {
  if (entity.getData("skyhighheroes:dyn/body_temperature") >= -1.4 && entity.getData("skyhighheroes:dyn/body_temperature") < -0.95 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "FROZEN";
  };
  if (entity.getData("skyhighheroes:dyn/body_temperature") >= -0.95 && entity.getData("skyhighheroes:dyn/body_temperature") < -0.85 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "COLD3";
  };
  if (entity.getData("skyhighheroes:dyn/body_temperature") >= -0.85 && entity.getData("skyhighheroes:dyn/body_temperature") < -0.5 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "COLD2";
  };
  if (entity.getData("skyhighheroes:dyn/body_temperature") >= -0.5 && entity.getData("skyhighheroes:dyn/body_temperature") < -0.01 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "COLD1";
  };
  if (entity.getData("skyhighheroes:dyn/body_temperature") == 0 || (entity.getData("skyhighheroes:dyn/body_temperature") >= -0.01 && entity.getData("skyhighheroes:dyn/body_temperature") <= 0.01) || (entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "INACTIVE";
  };
  if (entity.getData("skyhighheroes:dyn/body_temperature") <= 0.55 && entity.getData("skyhighheroes:dyn/body_temperature") > 0.01 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "HOT1";
  };
  if (entity.getData("skyhighheroes:dyn/body_temperature") <= 0.9 && entity.getData("skyhighheroes:dyn/body_temperature") > 0.55 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "HOT2";
  };
  if (entity.getData("skyhighheroes:dyn/body_temperature") <= 0.95 && entity.getData("skyhighheroes:dyn/body_temperature") > 0.9 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "HOT3";
  };
  if (entity.getData("skyhighheroes:dyn/body_temperature") <= 1.4 && entity.getData("skyhighheroes:dyn/body_temperature") > 0.95 && !(entity.getData("skyhighheroes:dyn/stelar_clothes") == 2 && entity.isInWater())) {
    return "FIRE";
  };
};