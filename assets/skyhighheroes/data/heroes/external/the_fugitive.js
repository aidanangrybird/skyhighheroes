function init(transer) {
  return {
    name: "Omega-Xis: The Fugitive",
    type: 7,
    waveHandler: function (entity, manager) {
      if (entity.world().isUnobstructed(entity.eyePos(), entity.eyePos().add(0,1000,0)) && (entity.world().getLocation(entity.pos().add(6, 0, 0)).biome().startsWith("Beach") || entity.world().getLocation(entity.pos().add(-6, 0, 0)).biome().startsWith("Beach") || entity.world().getLocation(entity.pos().add(0, 0, -6)).biome().startsWith("Beach") ||  entity.world().getLocation(entity.pos().add(0, 0, 6)).biome().startsWith("Beach")) && entity.world().getLocation(entity.pos()).biome().startsWith("Plains")) {
        var value = Math.random();
        if (value < 0.001) {
          manager.setData(entity, "skyhighheroes:dyn/em_being", "Omega-Xis");
          if (!entity.getData("skyhighheroes:dyn/calling")) {
            manager.setData(entity, "skyhighheroes:dyn/calling", true);
          };
        };
        if (entity.getData("skyhighheroes:dyn/calling_timer") == 1) {
          manager.setString(entity.getWornChestplate().nbt(), "HeroType", "skyhighheroes:mega_man");
        };
      };
    }
  }
}