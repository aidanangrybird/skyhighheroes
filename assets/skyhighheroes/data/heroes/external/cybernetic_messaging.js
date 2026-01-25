function initModule(system) {
  /**
   * Sends message in group format
   * @param {JSPlayer} player - Entity recieving message
   * @param {string} sender - Name of entity sending message
   * @param {string} message - Message content
   **/
  function cyberMessage(player, sender, message) {
    if (PackLoader.getSide() == "SERVER") {
      player.as("PLAYER").addChatMessage("|Cyber| " + sender + "> " + message);
    };
  };
  return {
    name: "cyberMessaging",
    type: 2,
    modeID: "cyber",
    chatModeInfo: "<n>You are now in <nh>cyber<n> mode!",
    messageHandler: function (entity, name, range) {
      var message = entity.getData("skyhighheroes:dyn/entry");
      var newName = system.getModelID(entity);
      var foundPlayers = [];
      var foundPlayerNames = [];
      var newRange = (range*1);
      var txAntennaDeployed = (entity.getData("skyhighheroes:dyn/antenna_timer") == 1) && (entity.getData("skyhighheroes:dyn/satellite_rain_mode_timer") == 0);
      var txSatelliteDeployed = (entity.getData("skyhighheroes:dyn/satellite_timer") == 1) && (entity.getData("skyhighheroes:dyn/satellite_rain_mode_timer") == 0);
      if (txAntennaDeployed) {
        newRange = (range*4);
      };
      var entities = entity.world().getEntitiesInRangeOf(entity.pos(), newRange);
      entities.forEach(player => {
        if (player.is("PLAYER") && (player.getUUID() != entity.getUUID())) {
          if (system.hasCyberneticBody(player) && system.checkFrequency(entity, player)) {
            if (foundPlayerNames.indexOf(player.getName()) == -1) {
              foundPlayerNames.push(player.getName());
              foundPlayers.push(player);
            };
          };
        };
      });
      if (txSatelliteDeployed) {
        var idList = system.getSatIDList(entity);
        idList.forEach(id => {
          if (id > -1) {
            if (system.isStillCyber(entity, id)) {
              var player = entity.world().getEntityById(id)
              var rxSatelliteDeployed = (player.getData("skyhighheroes:dyn/satellite_timer") == 1) && (player.getData("skyhighheroes:dyn/satellite_rain_mode_timer") == 0);
              if (foundPlayerNames.indexOf(player.getName()) == -1) {
                if (rxSatelliteDeployed && system.checkSatellite(entity, player)) {
                  foundPlayerNames.push(player.getName());
                  foundPlayers.push(player);
                };
              };
            };
          };
        });
      };
      if (foundPlayers.length > 0) {
        //entity = tx
        //player = rx
        foundPlayers.forEach(player => {
          var rxAntennaDeployed = (player.getData("skyhighheroes:dyn/antenna_timer") == 1) && (player.getData("skyhighheroes:dyn/satellite_rain_mode_timer") == 0);
          var rxSatelliteDeployed = (player.getData("skyhighheroes:dyn/satellite_timer") == 1) && (player.getData("skyhighheroes:dyn/satellite_rain_mode_timer") == 0);
          if (entity.canSee(player) && entity.pos().distanceTo(player.pos()) <= range) {
            cyberMessage(player, newName, message);
          } else if (txAntennaDeployed && rxAntennaDeployed && system.checkFrequency(entity, player) && entity.canSee(player) && (entity.pos().distanceTo(player.pos()) <= range*4)) {
            cyberMessage(player, newName, message);
          } else if (txSatelliteDeployed && rxSatelliteDeployed && system.checkSatellite(entity, player)) {
            cyberMessage(player, newName, message);
          };
        });
      } else {
        system.moduleMessage(this, entity, "<n>No other cybers in range!")
      };
      cyberMessage(entity, newName, message);
    },
    chatInfo: function (player, manager, chat) {
      system.systemMessage(player, "<n>You are in <nh>cyber messaging <n>mode!");
    },
  };
};
