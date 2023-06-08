//I spent a lot of time trying to figure this out
//If you want to use this in your heropack, please contact aidanangrybird on Discord and make sure to credit aidanangrybird in your heropack
function getTemperatureProfile(entity, array, clothingVar) {
  var i = 0;
  if (typeof clothingVar === "string") {
    while (i < array.length) {
      if (entity.getData(clothingVar) == array[i].clothing && entity.world().getLocation(entity.pos()).biome().startsWith(array[i].biome)) {
        mismatch = true;
        ticks = array[i].tempChangeTicks;
        return {
          isMismatch: mismatch,
          getTicks: ticks,
        };
      } else {
        ticks = 0;
        mismatch = false;
        i = i + 1;
        return {
          isMismatch: mismatch,
          getTicks: ticks,
        };
      };
    };
  };
  if (typeof clothingVar === "undefined") {
    while (i < array.length) {
      if (entity.world().getLocation(entity.pos()).biome().startsWith(array[i].biome)) {
        mismatch = true;
        ticks = array[i].tempChangeTicks;
        return {
          isMismatch: mismatch,
          getTicks: ticks,
        };
      } else {
        ticks = 0;
        mismatch = false;
        i = i + 1;
        return {
          isMismatch: mismatch,
          getTicks: ticks,
        };
      };
    };
  };
};

function changeTemperature(entity, manager, tempVar, clothingVar, stableRate, map) {
  if (typeof clothingVar === "string") {
    var profile = getTemperatureProfile(entity, map, clothingVar);
    if (profile.isMismatch) {
      if (profile.getTicks > 0.0 && entity.getData(tempVar) > -1.0 && entity.getData(tempVar) < 1.0) {
        manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0 / profile.getTicks)))
      }
      if (profile.getTicks < 0.0 && entity.getData(tempVar) > -1.0 && entity.getData(tempVar) < 1.0) {
        manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0 / profile.getTicks)))
      }
    }
    if (!profile.isMismatch) {
      if (entity.getData(tempVar) > 0.0 && entity.getData(tempVar) <= 1.0) {
        manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0 / stableRate)))
      }
      if (entity.getData(tempVar) >= -1.0 && entity.getData(tempVar) < 0.0) {
        manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0 / stableRate)))
      }
    }
    if (typeof clothingVar !== "string") {
      var profile = getTemperatureProfile(entity, map);
      if (profile.isMismatch) {
        if (profile.getTicks > 0.0 && entity.getData(tempVar) > -1.0 && entity.getData(tempVar) < 1.0) {
          manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0 / profile.getTicks)))
        }
        if (profile.getTicks < 0.0 && entity.getData(tempVar) > -1.0 && entity.getData(tempVar) < 1.0) {
          manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0 / profile.getTicks)))
        }
      }
      if (!profile.isMismatch) {
        if (entity.getData(tempVar) > 0.0 && entity.getData(tempVar) <= 1.0) {
          manager.setData(entity, tempVar, entity.getData(tempVar) + Math.abs((1.0 / stableRate)))
        }
        if (entity.getData(tempVar) >= -1.0 && entity.getData(tempVar) < 0.0) {
          manager.setData(entity, tempVar, entity.getData(tempVar) - Math.abs((1.0 / stableRate)))
        }
      }
    }
  }
};