var robot = implement("skyhighheroes:external/astro_system");
var messaging = implement("skyhighheroes:external/messaging");
var groupMessaging = implement("skyhighheroes:external/group_messaging");
var groups = implement("skyhighheroes:external/groups");
var contacts = implement("skyhighheroes:external/contacts");
var scanner = implement("skyhighheroes:external/scanner");
var waypoints = implement("skyhighheroes:external/waypoint");
var brain = implement("skyhighheroes:external/astro_brain");
var engine = implement("skyhighheroes:external/astro_engine");
var blaster = implement("skyhighheroes:external/astro_blaster");
var buttMachineGuns = implement("skyhighheroes:external/astro_butt_machine_guns");
var flight = implement("skyhighheroes:external/astro_flight");
var panelStatus = implement("skyhighheroes:external/astro_panel_status");
var opener = implement("skyhighheroes:external/astro_opener");
var closer = implement("skyhighheroes:external/astro_closer");
var astrOS = robot.initSystem([
  messaging,
  groupMessaging,
  groups,
  contacts,
  scanner,
  waypoints,
  brain,
  engine,
  blaster,
  buttMachineGuns,
  flight,
  panelStatus,
  opener,
  closer
], "Astro", "4");
function init(hero) {
  hero.setAliases("astro");
  hero.setName("Astro");
  hero.setTier(8);
  hero.setLeggings("Shorts");
  hero.setBoots("Boots");

  hero.addAttribute("SPRINT_SPEED", 0.5, 1);
  hero.addAttribute("STEP_HEIGHT", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 3.0, 0);
  hero.addAttribute("PUNCH_DAMAGE", 10.0, 0);
  hero.addAttribute("KNOCKBACK", 2.5, 0);
  hero.addAttribute("BASE_SPEED_LEVELS", 30.0, 0);
  hero.addAttribute("IMPACT_DAMAGE", 25.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

  astrOS.keyBinds(hero);
  astrOS.profiles(hero);
  astrOS.addPowers(hero);
  hero.addKeyBindFunc("CYCLE_CLOTHES", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/astro_clothes", player.getData("skyhighheroes:dyn/astro_clothes") + 1);
    if (player.getData("skyhighheroes:dyn/astro_clothes") > 3) {
      manager.setData(player, "skyhighheroes:dyn/astro_clothes", 0);
    };
    return true;
  }, "Change Clothes", 1);
  
  hero.setHasProperty((entity, property) => {
    return property == "BREATHE_SPACE" && true;
  });
  hero.supplyFunction("canAim", (entity) => {
    return entity.getHeldItem().isEmpty() && entity.getData("fiskheroes:beam_charge") == 0 && entity.getData("fiskheroes:energy_projection_timer") == 0;
  });
  hero.setDefaultScale(1.0);
  hero.setModifierEnabled((entity, modifier) => {
    if (modifier.name() == "fiskheroes:shape_shifting") {
      return true;
    };
    if (modifier.name() == "fiskheroes:potion_immunity") {
      return true;
    };
    if (modifier.name() == "fiskheroes:regeneration") {
      return true;
    };
    if (modifier.name() == "fiskheroes:healing_factor") {
      return true;
    };
    if (modifier.name() == "fiskheroes:water_breathing") {
      return true;
    };
    if (modifier.name() == "fiskheroes:fire_immunity") {
      return true;
    };
    if (modifier.name() == "fiskheroes:damage_immunity") {
      return true;
    };
    if (modifier.name() == "fiskheroes:metal_skin") {
      return entity.getData("fiskheroes:metal_heat") < 1.0;
    };
    return astrOS.isModifierEnabled(entity, modifier);
  });
  hero.setKeyBindEnabled((entity, keyBind) => {
    if (keyBind == "SHAPE_SHIFT") {
      return !entity.isSneaking();
    };
    if (keyBind == "CYCLE_CLOTHES") {
      return true;
    };
    return astrOS.isKeyBindEnabled(entity, keyBind);
  });
  hero.setTickHandler((entity, manager) => {
    astrOS.systemHandler(entity, manager);
  });
};