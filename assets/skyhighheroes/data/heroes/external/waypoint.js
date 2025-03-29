function initModule(system) {
  /**
   * Turns NBT String List into an array for easier use in code
   * @param {JSEntity} entity - Entity to create waypoint array from
   * @returns Array of waypoint names
   **/
  function getWaypointNameArray(entity, manager) {
    var nbt = null;
    if (entity.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (entity.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = entity.getWornChestplate().nbt();
    };
    if (entity.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = entity.getWornLeggings().nbt();
    };
    if (entity.getWornBoots().nbt().hasKey("computerID")) {
      nbt = entity.getWornBoots().nbt();
    };
    if (!nbt.hasKey("waypoints")) {
      var newWaypointsList = manager.newTagList();
      manager.setTagList(nbt, "waypoints", newWaypointsList);
    };
    var waypointList = nbt.getTagList("waypoints");
    var count = waypointList.tagCount();
    var result = [];
    for (i=0;i<count;i++) {
      result.push(waypointList.getCompoundTag(i).getString("waypointName"));
    };
    return result;
  };
  /**
   * Turns NBT String List into an array for easier use in code
   * @param {JSEntity} entity - Entity to create waypoint array from
   * @returns Array of waypoint names, coords and dimension
   **/
  function getWaypointArray(entity, manager) {
    var nbt = null;
    if (entity.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = entity.getWornHelmet().nbt();
    };
    if (entity.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = entity.getWornChestplate().nbt();
    };
    if (entity.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = entity.getWornLeggings().nbt();
    };
    if (entity.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    if (!nbt.hasKey("waypoints")) {
      var newWaypointsList = manager.newTagList();
      manager.setTagList(nbt, "waypoints", newWaypointsList);
    };
    var waypointList = nbt.getTagList("waypoints");
    var count = waypointList.tagCount();
    var result = [];
    for (i=0;i<count;i++) {
      var waypointTag = waypointList.getCompoundTag(i);
      var waypoint = {
        name: waypointTag.getString("waypointName"),
        coords: [waypointTag.getInteger("xCoord"),waypointTag.getInteger("yCoord"),waypointTag.getInteger("zCoord"),waypointTag.getInteger("dim")]
      };
      result.push(waypoint);
    };
    return result;
  };
  /**
   * Adds waypoint
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   * @param {string} waypointName - Name of waypoint
   **/
  function addWaypoint(entity, manager, waypointName) {
    var nbt = null;
    if (entity.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = entity.getWornHelmet().nbt();
    };
    if (entity.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = entity.getWornChestplate().nbt();
    };
    if (entity.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = entity.getWornLeggings().nbt();
    };
    if (entity.getWornBoots().nbt().hasKey("computerID")) {
      nbt = entity.getWornBoots().nbt();
    };
    if (!nbt.hasKey("waypoints")) {
      var newWaypointsList = manager.newTagList();
      manager.setTagList(nbt, "waypoints", newWaypointsList);
    };
    var waypoint = manager.newCompoundTag();
    var x = entity.posX();
    var y = entity.posY();
    var z = entity.posZ();
    var dim = entity.world().getDimension();
    manager.setString(waypoint, "waypointName", waypointName);
    manager.setInteger(waypoint, "xCoord", x);
    manager.setInteger(waypoint, "yCoord", y);
    manager.setInteger(waypoint, "zCoord", z);
    manager.setInteger(waypoint, "dim", dim);
    var waypoints = nbt.getTagList("waypoints");
    var waypointIndex = getWaypointNameArray(entity, manager).indexOf(waypointName);
    if (waypointIndex > -1) {
      system.moduleMessage(this, entity, "<e>Duplicate waypoint name <eh>" + waypointName + "<e>!");
    } else {
      system.moduleMessage(this, entity, "<s>Waypoint created with name: <sh>" + waypointName + "<s>!");
      manager.appendTag(waypoints, waypoint);
    };
  };
  /**
   * Remove waypoint by waypoint name
   * @param {JSPlayer} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} waypointName - Name of waypoint
   **/
  function removeWaypoint(player, manager, waypointName) {
    var nbt = null;
    if (player.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (player.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = player.getWornChestplate().nbt();
    };
    if (player.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (player.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    var waypoints = nbt.getTagList("waypoints");
    var waypointIndex = getWaypointNameArray(player, manager).indexOf(waypointName);
    if (waypointIndex < 0) {
      system.moduleMessage(this, player, "<e>Unable to find waypoint with name <eh>" + waypointName + "<e> to remove!");
    } else {
      system.moduleMessage(this, player, "<e>Removed waypoint <eh>" + waypointName + "<e>!");
      manager.removeTag(waypoints, waypointIndex);
    };
  };
  /**
   * Teleports to waypoint by waypoint name
   * @param {JSPlayer} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} waypointName - Name of waypoint
   **/
  function teleportToWaypoint(player, manager, waypointName) {
    var nbt = null;
    if (player.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = player.getWornHelmet().nbt();
    };
    if (player.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = player.getWornChestplate().nbt();
    };
    if (player.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = player.getWornLeggings().nbt();
    };
    if (player.getWornBoots().nbt().hasKey("computerID")) {
      nbt = player.getWornBoots().nbt();
    };
    if (!nbt.hasKey("waypoints")) {
      var newWaypointsList = manager.newTagList();
      manager.setTagList(nbt, "waypoints", newWaypointsList);
    };
    var waypointIndex = getWaypointNameArray(player, manager).indexOf(waypointName);
    if (waypointIndex < 0) {
      system.moduleMessage(this, player, "<e>Unable to find waypoint with name <eh>" + waypointName + "<e> to teleport to!");
    } else {
      var waypoint = nbt.getTagList("waypoints").getCompoundTag(waypointIndex);
      system.moduleMessage(this, player, "<s>Selected waypoint <sh>" + waypoint.getString("waypointName") + "<s>!");
      manager.setData(player, "fiskheroes:teleport_dest", manager.newCoords(waypoint.getInteger("xCoord"), waypoint.getInteger("yCoord"), waypoint.getInteger("zCoord"), waypoint.getInteger("dim")));
      manager.setData(player, "fiskheroes:teleport_delay", 6);
    };
  };
  /**
   * Lists waypoints
   * @param {JSEntity} entity - Required
   **/
  function listWaypoints(entity, manager) {
    var nbt = null;
    if (entity.getWornHelmet().nbt().hasKey("computerID")) {
      nbt = entity.getWornHelmet().nbt();
    };
    if (entity.getWornChestplate().nbt().hasKey("computerID")) {
      nbt = entity.getWornChestplate().nbt();
    };
    if (entity.getWornLeggings().nbt().hasKey("computerID")) {
      nbt = entity.getWornLeggings().nbt();
    };
    if (entity.getWornBoots().nbt().hasKey("computerID")) {
      nbt = entity.getWornBoots().nbt();
    };
    if (!nbt.hasKey("waypoints")) {
      var newWaypointsList = manager.newTagList();
      manager.setTagList(nbt, "waypoints", newWaypointsList);
    };
    var waypoints = getWaypointArray(entity, manager);
    system.moduleMessage(this, entity, "<n>You have <nh>" + waypoints.length + ((waypoints.length == 1) ? "<n> waypoint!" : "<n> waypoints!"));
    waypoints.forEach(entry => {
      system.moduleMessage(this, entity, "<nh>" + entry.name + "<n> (<nh>" + entry.coords[0] + "<n>, <nh>" + entry.coords[1] + "<n>, <nh>" + entry.coords[2] + "<n>) in dimension: <nh>" + entry.coords[3]);
    });
  };
  return {
    name: "waypoints",
    moduleMessageName: "Waypoints",
    type: 1,
    command: "wp",
    helpMessage: "<n>!wp <nh>-<n> Waypoints",
    disabledMessage: "<e>Module <eh>waypoints<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch (arguments[1]) {
          case "add":
            (arguments.length == 3) ? addWaypoint(entity, manager, arguments[2]) : system.moduleMessage(this, entity, "<n>!wp add <nh><waypointName>");
            break;
          case "rem":
            (arguments.length == 3) ? removeWaypoint(entity, manager, arguments[2]) : system.moduleMessage(this, entity, "<n>!wp rem <nh><waypointName>");
            break;
          case "tp":
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
              (arguments.length == 3) ? teleportToWaypoint(entity, manager, arguments[2]) : system.moduleMessage(this, entity, "<n>!wp tp <nh><waypointName>");
            } else {
              system.moduleMessage(this, entity, "<e>Unknown waypoint command! Try <eh>!wp help<e> for a list of commands!");
            };
            break;
          case "list":
            listWaypoints(entity, manager);
            break;
          case "help":
            system.moduleMessage(this, entity, "Waypoint commands:")
            system.moduleMessage(this, entity, "<n>!wp add <nh><name><n> <nh>-<n> Creates waypoint at current location by name");
            system.moduleMessage(this, entity, "<n>!wp rem <nh><name><n> <nh>-<n> Removes waypoint by name");
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
              system.moduleMessage(this, entity, "<n>!wp tp <nh><name><n> <nh>-<n> TPs to waypoint by name");
            };
            system.moduleMessage(this, entity, "<n>!wp list <nh>-<n> Lists waypoints");
            system.moduleMessage(this, entity, "<n>!wp help <nh>-<n> Shows waypoint commands");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown waypoint command! Try <eh>!wp help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>waypoint<e> command! Try <eh>!wp help<e> for a list of commands!");
      };
    },
  };
};