//I spent a lot of time trying to figure this out
//If you want to use this in your heropack, please contact aidanangrybird on Discord and make sure to credit aidanangrybird in your heropack
function getTemperatureProfile(entity, map, clothingVar) {
  var i = 0;
  if (typeof clothingVar === "string") {
    while (i < map.length) {
      var clothes = map[i].clothingType;
      var locat = map[i].biome;
      var ticks = map[i].tempChangeTicks;
      if (entity.getData(clothingVar) == clothes && entity.world().getLocation(entity.pos()).biome().startsWith(locat) && map[i].hasOwnProperty("clothingType")) {
        mismatch = true;
        i = 10000000000;
      } else {
        ticks = 0;
        mismatch = false;
        i = i + 1;
      };
    };
    var obj = {
      isMismatch: mismatch,
      getTicks: ticks,
    };
    return obj;
  } else {
    while (i < map.length) {
      var locat = map[i].biome;
      var ticks = map[i].tempChangeTicks;
      if (entity.world().getLocation(entity.pos()).biome().startsWith(locat) && !map[i].hasOwnProperty("clothingType")) {
        mismatch = true;
        i = 10000000000;
      } else {
        ticks = 0;
        mismatch = false;
        i = i + 1;
      };
    };
    var obj = {
      isMismatch: mismatch,
      getTicks: ticks,
    };
    return obj;
  };
};

function change(entity, manager, map, tempVar, stableRate, clothingVar) {
  var profile = getTemperatureProfile(entity, map, clothingVar);
  if (profile.isMismatch) {
    if (profile.getTicks > 0.0 && entity.getData(tempVar) >= -1.0 && entity.getData(tempVar) <= 1.0) {
      manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0/profile.getTicks)));
    };
    if (profile.getTicks < 0.0 && entity.getData(tempVar) >= -1.0 && entity.getData(tempVar) <= 1.0) {
      manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0/profile.getTicks)));
    };
  } else if (!profile.isMismatch) {
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