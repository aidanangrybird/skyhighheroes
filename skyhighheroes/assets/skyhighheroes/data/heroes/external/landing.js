setGlobal();

function tick(entity, manager) {
    var t = entity.getData("skyhighheroes:dyn/superhero_landing_ticks");

    if (t == 0 && !entity.isSprinting() && !entity.isOnGround() && entity.motionY() < -1.25 && entity.getData("fiskheroes:flight_timer") > 0 && entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid()) {
        manager.setData(entity, "skyhighheroes:dyn/superhero_landing_ticks", t = 12);
    }
    else if (t > 0) {
        manager.setData(entity, "skyhighheroes:dyn/superhero_landing_ticks", --t);
    }

    manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 2, 8, t > 0);
}
