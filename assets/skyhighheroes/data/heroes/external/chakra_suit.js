function initChakras(hero, name) {
  var suit_name = name + " the Invicible";
  hero.setName(suit_name);
  hero.setChestplate("Suit");

  hero.addPowers("skyhighheroes:chakra_suit");

  hero.setTier(8);

  hero.addAttribute("SPRINT_SPEED", 0.2, 1);
  hero.addAttribute("STEP_HEIGHT", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
  hero.addAttribute("PUNCH_DAMAGE", 10.0, 0);
  hero.addAttribute("KNOCKBACK", 2.5, 0);
  hero.addAttribute("IMPACT_DAMAGE", 25.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

  hero.addKeyBind("TELEKINESIS", "Telekinesis", 1);
  hero.addKeyBind("SONIC_WAVES", "Scream", 2);
  hero.addKeyBind("ENERGY_PROJECTION", "Beam", 3);
  hero.addKeyBind("AIM", "Blast", 4);
  hero.addKeyBind("SHIELD", "Forcefield", 5);
  hero.addKeyBindFunc("CHAKRA_SUIT", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/chakra_suit", !player.getData("skyhighheroes:dyn/chakra_suit"));
    return true;
  }, "Show Chakra Suit", 5);
  hero.setTierOverride(entity => {
    return (entity.getData("skyhighheroes:dyn/chakra_suit")) ? 8 : 1;
  });
  hero.setHasProperty((entity, property) => {
    return (property == "BREATHE_SPACE" || property == "MASK_TOGGLE") || entity.is("DISPLAY");
  });
  hero.setModifierEnabled((entity, modifier) => {
    return true;
  });
  hero.setKeyBindEnabled((entity, keyBind) => {
    if (keyBind == "CHAKRA_SUIT") {
      return entity.isSneaking();
    };
    if (keyBind == "SHIELD") {
      return !entity.isSneaking();
    };
    return true;
  });
  hero.setTickHandler((entity, manager) => {
    if (!entity.getWornChestplate().nbt().getBoolean("Unbreakable")) {
      manager.setBoolean(entity.getWornChestplate().nbt(), "Unbreakable", true);
    };
    if (entity.getData("skyhighheroes:dyn/chakra_suit")) {
      manager.setData(entity, "fiskheroes:disguise", suit_name);
    } else {
      manager.setData(entity, "fiskheroes:disguise", null);
    };
    if (entity.getData("fiskheroes:time_since_damaged") <= 20) {
      manager.setData(entity, "skyhighheroes:dyn/chakra_suit", true);
      manager.setData(entity, "fiskheroes:mask_open", false);
    };
    if (entity.getData("fiskheroes:flight_boost_timer") > 0) {
      manager.setData(entity, "skyhighheroes:dyn/chakra_suit", true);
    };
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
  });
  hero.supplyFunction("canAim", (entity) => {
    return entity.getHeldItem().isEmpty();
  });
};