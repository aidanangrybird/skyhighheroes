function init(transer) {
  return {
    name: "Omega-Xis: The Fugitive",
    type: 7,
    selfProfile: function (hero) {
      hero.addDamageProfile("SELF", {
        "types": {
          "WAVE_ENERGY": 1.0
        }
      });
    },
    otherProfile: function (hero) {
      hero.addDamageProfile("OTHER", {
        "types": {
          "WAVE_ENERGY": 1.0
        }
      });
    },
    waveCalling: function (entity, manager) {
      if (!entity.getData("skyhighheroes:dyn/calling") && entity.world().isUnobstructed(entity.eyePos(), entity.eyePos().add(0,1000,0)) && (entity.world().getLocation(entity.pos().add(6, 0, 0)).biome().startsWith("Beach") || entity.world().getLocation(entity.pos().add(-6, 0, 0)).biome().startsWith("Beach") || entity.world().getLocation(entity.pos().add(0, 0, -6)).biome().startsWith("Beach") ||  entity.world().getLocation(entity.pos().add(0, 0, 6)).biome().startsWith("Beach")) && (entity.world().getLocation(entity.pos()).biome().startsWith("Plains") || entity.world().getLocation(entity.pos()).biome().startsWith("Sunflower Plains"))) {
        var value = Math.random();
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/calling_value", value);
        if (entity.getData("skyhighheroes:dyn/calling_value") < 0.1) {
          manager.setDataWithNotify(entity, "skyhighheroes:dyn/calling", true);
        };
      };
      if (entity.getData("skyhighheroes:dyn/calling_timer") == 1) {
        manager.setString(entity.getWornChestplate().nbt(), "HeroType", "skyhighheroes:mega_man");
      };
    },
    waveHandler: function (entity, hero) {
      if (entity.getData("skyhighheroes:dyn/calling_timer") > 0.3 && entity.getData("skyhighheroes:dyn/calling_timer") < 0.7) {
        var nearbyPlayers = entity.world().getEntitiesInRangeOf(entity.pos(), 10);
        nearbyPlayers.forEach(player => {
          player.hurt(hero, "OTHER", "%1$s died by Omega-Xis", 10.0);
        });
      };
      if (entity.getData("skyhighheroes:dyn/calling_timer") > 0.45 && entity.getData("skyhighheroes:dyn/calling_timer") < 0.55) {
        entity.hurt(hero, "SELF", "%1$s could not handle wave changing", 0.0);
      };
    }
  }
}