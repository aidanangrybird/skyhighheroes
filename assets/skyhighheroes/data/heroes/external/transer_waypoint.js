function init(transer) {
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
      transer.systemMessage(entity, "<s>Waypoint created with name: <sh>" + waypointName + "<s>!");
    } else {
      var waypoints = entity.getWornChestplate().nbt().getTagList("waypoints");
      var waypointIndex = getWaypointNameArray(entity).indexOf(waypointName);
      if (waypointIndex > -1) {
        transer.systemMessage(entity, "<e>Duplicate waypoint name <eh>" + waypointName + "<e>!");
      } else {
        transer.systemMessage(entity, "<s>Waypoint created with name: <sh>" + waypointName + "<s>!");
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
      transer.systemMessage(player, "<e>Unable to find waypoint with name <eh>" + waypointName + "<e> to remove!");
    } else {
      transer.systemMessage(player, "<e>Removed waypoint <eh>" + waypointName + "<e>!");
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
      transer.systemMessage(player, "<e>Unable to find waypoint with name <eh>" + waypointName + "<e> to teleport to!");
    } else {
      var waypoint = player.getWornChestplate().nbt().getTagList("waypoints").getCompoundTag(waypointIndex);
      transer.systemMessage(player, "<s>Teleporting to waypoint <sh>" + waypoint.getString("waypointName") + "<s>!");
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
      transer.systemMessage(entity, "<e>You do not have any waypoints!");
    } else {
      var waypoints = getWaypointArray(entity);
      transer.systemMessage(entity, "<n>You have <nh>" + waypoints.length + ((waypoints.length == 1) ? "<n> waypoint!" : "<n> waypoints!"));
      waypoints.forEach(entry => {
        transer.systemMessage(entity, "<nh>" + entry.name + "<n> (<nh>" + entry.coords[0] + "<n>, <nh>" + entry.coords[1] + "<n>, <nh>" + entry.coords[2] + "<n>) in dimension: <nh>" + entry.coords[3]);
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
            (arguments.length == 3) ? addWaypoint(entity, manager, arguments[2]) : transer.systemMessage(entity, "<n>!wp add <nh><waypointName>");
            break;
          case "rem":
            (arguments.length == 3) ? removeWaypoint(entity, manager, arguments[2]) : transer.systemMessage(entity, "<n>!wp rem <nh><waypointName>");
            break;
          case "tp":
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
              (arguments.length == 3) ? teleportToWaypoint(entity, manager, arguments[2]) : transer.systemMessage(entity, "<n>!wp tp <nh><waypointName>");
            } else {
              transer.systemMessage(entity, "<e>Unknown waypoint command! Try <eh>!wp help<e> for a list of commands!");
            };
            break;
          case "list":
            listWaypoints(entity);
            break;
          case "help":
            transer.systemMessage(entity, "Waypoint commands:")
            transer.systemMessage(entity, "<n>!wp add <nh><name><n> <nh>-<n> Creates waypoint at current location by name");
            transer.systemMessage(entity, "<n>!wp rem <nh><name><n> <nh>-<n> Removes waypoint by name");
            if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
              transer.systemMessage(entity, "<n>!wp tp <nh><name><n> <nh>-<n> TPs to waypoint by name");
            };
            transer.systemMessage(entity, "<n>!wp list <nh>-<n> Lists waypoints");
            transer.systemMessage(entity, "<n>!wp help <nh>-<n> Shows waypoint commands");
            break;
          default:
            transer.systemMessage(entity, "<e>Unknown waypoint command! Try <eh>!wp help<e> for a list of commands!");
            break;
        };
      } else {
        transer.systemMessage(entity, "<e>Unknown <eh>waypoint<e> command! Try <eh>!wp help<e> for a list of commands!");
      };
    },
  };
};