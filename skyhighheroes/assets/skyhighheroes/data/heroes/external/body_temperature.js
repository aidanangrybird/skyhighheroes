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