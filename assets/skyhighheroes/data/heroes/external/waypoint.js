function init(system) {
  /**
   * Turns NBT String List into an array for easier use in code
   * @param {JSEntity} entity - Entity to create waypoint array from
   * @returns Array of waypoint names
   **/
  function getWaypointNameArray(entity) {
    var waypointList = entity.getWornChestplate().nbt().getTagList("waypoints");
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
  function getWaypointArray(entity) {
    var waypointList = entity.getWornChestplate().nbt().getTagList("waypoints");
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
    if (!entity.getWornChestplate().nbt().hasKey("waypoints")) {
      var waypoints = manager.newTagList();
      manager.appendTag(waypoints, waypoint);
      manager.setTagList(entity.getWornChestplate().nbt(), "waypoints", waypoints);
      system.systemMessage(entity, "<s>Waypoint created with name: <sh>" + waypointName + "<s>!");
    } else {
      var waypoints = entity.getWornChestplate().nbt().getTagList("waypoints");
      var waypointIndex = getWaypointNameArray(entity).indexOf(waypointName);
      if (waypointIndex > -1) {
        system.systemMessage(entity, "<e>Duplicate waypoint name <eh>" + waypointName + "<e>!");
      } else {
        system.systemMessage(entity, "<s>Waypoint created with name: <sh>" + waypointName + "<s>!");
        manager.appendTag(waypoints, waypoint);
      };
    };
  };
  /**
   * Remove waypoint by waypoint name
   * @param {JSPlayer} player - Required
   * @param {JSDataManager} manager - Required
   * @param {string} waypointName - Name of waypoint
   **/
  function removeWaypoint(player, manager, waypointName) {
    var waypoints = player.getWornChestplate().nbt().getTagList("waypoints");
    var waypointIndex = getWaypointNameArray(player).indexOf(waypointName);
    if (waypointIndex < 0) {
      system.systemMessage(player, "<e>Unable to find waypoint with name <eh>" + waypointName + "<e> to remove!");
    } else {
      system.systemMessage(player, "<e>Removed waypoint <eh>" + waypointName + "<e>!");
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
    var waypointIndex = getWaypointNameArray(player).indexOf(waypointName);
    if (waypointIndex < 0) {
      system.systemMessage(player, "<e>Unable to find waypoint with name <eh>" + waypointName + "<e> to teleport to!");
    } else {
      var waypoint = player.getWornChestplate().nbt().getTagList("waypoints").getCompoundTag(waypointIndex);
      system.systemMessage(player, "<s>Selected waypoint <sh>" + waypoint.getString("waypointName") + "<s>!");
      manager.setData(player, "fiskheroes:teleport_dest", manager.newCoords(waypoint.getInteger("xCoord"), waypoint.getInteger("yCoord"), waypoint.getInteger("zCoord"), waypoint.getInteger("dim")));
      manager.setData(player, "fiskheroes:teleport_delay", 6);
    };
  };
  /**
   * Lists waypoints
   * @param {JSEntity} entity - Required
   **/
  function listWaypoints(entity) {
    if (!entity.getWornChestplate().nbt().hasKey("waypoints")) {
      system.systemMessage(entity, "<e>You do not have any waypoints!");
    } else {
      var waypoints = getWaypointArray(entity);
      system.systemMessage(entity, "<n>You have <nh>" + waypoints.length + ((waypoints.length == 1) ? "<n> waypoint!" : "<n> waypoints!"));
      waypoints.forEach(entry => {
        system.systemMessage(entity, "<nh>" + entry.name + "<n> (<nh>" + entry.coords[0] + "<n>, <nh>" + entry.coords[1] + "<n>, <nh>" + entry.coords[2] + "<n>) in dimension: <nh>" + entry.coords[3]);
      });
    };
  };
  return {
    name: "waypoints",
    type: 1,
    command: "wp",
    helpMessage: "<n>!wp <nh>-<n> Waypoints",
    disabledMessage: "<e>Module <eh>waypoints<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch (arguments[1]) {
          case "add":
            (arguments.length == 3) ? addWaypoint(entity, manager, arguments[2]) : system.systemMessage(entity, "<n>!wp add <nh><waypointName>");
            break;
          case "rem":
            (arguments.length == 3) ? removeWaypoint(entity, manager, arguments[2]) : system.systemMessage(entity, "<n>!wp rem <nh><waypointName>");
            break;
          case "tp":
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
              (arguments.length == 3) ? teleportToWaypoint(entity, manager, arguments[2]) : system.systemMessage(entity, "<n>!wp tp <nh><waypointName>");
            } else {
              system.systemMessage(entity, "<e>Unknown waypoint command! Try <eh>!wp help<e> for a list of commands!");
            };
            break;
          case "list":
            listWaypoints(entity);
            break;
          case "help":
            system.systemMessage(entity, "Waypoint commands:")
            system.systemMessage(entity, "<n>!wp add <nh><name><n> <nh>-<n> Creates waypoint at current location by name");
            system.systemMessage(entity, "<n>!wp rem <nh><name><n> <nh>-<n> Removes waypoint by name");
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
              system.systemMessage(entity, "<n>!wp tp <nh><name><n> <nh>-<n> TPs to waypoint by name");
            };
            system.systemMessage(entity, "<n>!wp list <nh>-<n> Lists waypoints");
            system.systemMessage(entity, "<n>!wp help <nh>-<n> Shows waypoint commands");
            break;
          default:
            system.systemMessage(entity, "<e>Unknown waypoint command! Try <eh>!wp help<e> for a list of commands!");
            break;
        };
      } else {
        system.systemMessage(entity, "<e>Unknown <eh>waypoint<e> command! Try <eh>!wp help<e> for a list of commands!");
      };
    },
  };
};