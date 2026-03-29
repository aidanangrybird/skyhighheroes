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
    chatModeMessage: "<n>You are now in <nh>cyber<n> mode!",
    messageHandler: function (entity, name, range) {
      var message = entity.getData("skyhighheroes:dyn/entry");
      var newName = system.getModelID(entity);
      var foundPlayers = [];
      var foundPlayerNames = [];
      var newRange = (range*1);
      var txAntennaDeployed = (entity.getData("skyhighheroes:dyn/antenna_deploy_timer") == 1) && (entity.getData("skyhighheroes:dyn/satellite_rain_mode_timer") == 0);
      var txSatelliteDeployed = (entity.getData("skyhighheroes:dyn/satellite_deploy_timer") == 1) && (entity.getData("skyhighheroes:dyn/satellite_rain_mode_timer") == 0);
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
              var otherEntity = entity.world().getEntityById(id);
              if (foundPlayerNames.indexOf(otherEntity.getName()) == -1) {
                if (system.checkSatellite(entity, otherEntity)) {
                  foundPlayerNames.push(otherEntity.getName());
                  foundPlayers.push(otherEntity);
                };
              };
            };
          };
        });
      };
      if (foundPlayers.length > 0) {
        //entity = tx
        //player = rx
        foundPlayers.forEach(otherEntity => {
          var rxDomain = otherEntity.getWornHelmet().suitType().split(":")[0];
          var rxAntennaDeployed = (otherEntity.getData(rxDomain + ":dyn/antenna_deploy_timer") == 1) && (otherEntity.getData(rxDomain + ":dyn/satellite_rain_mode_timer") == 0);
          var rxSatelliteDeployed = (otherEntity.getData(rxDomain + ":dyn/satellite_deploy_timer") == 1) && (otherEntity.getData(rxDomain + ":dyn/satellite_rain_mode_timer") == 0);
          if (entity.canSee(otherEntity) && entity.pos().distanceTo(otherEntity.pos()) <= range) {
            cyberMessage(otherEntity, newName, message);
          } else if (txAntennaDeployed && rxAntennaDeployed && system.checkFrequency(entity, otherEntity) && entity.canSee(otherEntity) && (entity.pos().distanceTo(otherEntity.pos()) <= range*4)) {
            cyberMessage(otherEntity, newName, message);
          } else if (txSatelliteDeployed && rxSatelliteDeployed && system.checkSatellite(entity, otherEntity)) {
            cyberMessage(otherEntity, newName, message);
          };
        });
      } else {
        system.moduleMessage(this, entity, "<n>No other cybers in range!")
      };
      cyberMessage(entity, newName, message);
    },
    chatInfo: function (entity) {
      var nbt = system.mainNBT(entity);
      system.systemMessage(entity, "<n>You are connected to a satellite at <nh>" + nbt.getShort("xSat") + ", " + nbt.getShort("ySat") + ", " + nbt.getShort("zSat")  + "<n> on frequency <nh>" + nbt.getShort("freq") + "<n>!");
    },
    chatModeInfo: function (entity) {
      var nbt = system.mainNBT(entity);
      system.systemMessage(entity, "<n>You are in <nh>cyber messaging <n>mode!");
      system.systemMessage(entity, "<n>You are connected to a satellite at <nh>" + nbt.getShort("xSat") + ", " + nbt.getShort("ySat") + ", " + nbt.getShort("zSat")  + "<n> on frequency <nh>" + nbt.getShort("freq") + "<n>!");
    },
  };
};
