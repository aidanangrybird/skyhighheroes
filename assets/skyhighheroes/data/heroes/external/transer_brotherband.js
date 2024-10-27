/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  //The point of BrotherBand is to allow communication at much farther ranges and to give buffs when you are near each other
  /**
   * Forms BrotherBand
   * @param {JSPlayer} player - Player forming BrotherBand
   * @param {JSDataManager} manager - Required
   * @param {string} username - Username of player to form BrotherBand with
   **/
  function formBrotherBand(player, manager, username) {
    var foundPlayer = false;
    transer.systemMessage(player, "<n>Scanning for <nh>" + username + "<n> to form BrotherBand with!");
    var entities = player.world().getEntitiesInRangeOf(player.pos(), 2);
    entities.forEach(entity => {
      if (entity.is("PLAYER") && entity.getName() == username && transer.isWearingTranser(entity) && player.canSee(entity)) {
        foundPlayer = true;
      };
    });
    if (foundPlayer) {
      if (!player.getWornChestplate().nbt().hasKey("brothers")) {
        var brotherBand = manager.newTagList();
        manager.appendString(brotherBand, username);
        manager.setTagList(player.getWornChestplate().nbt(), "brothers", brotherBand);
        transer.systemMessage(player, "<s>Successfully formed BrotherBand connection to <sh>" + username + "<s>!");
      } else {
        var brotherBand = player.getWornChestplate().nbt().getStringList("brothers");
        var brotherBandIndex = transer.getStringArray(brotherBand).indexOf(username);
        if (brotherBand.tagCount() > 5) {
          transer.systemMessage(player, "<e>You have reached the maximum amount of BrotherBands!");
        } else if (brotherBandIndex > -1) {
          transer.systemMessage(player, "<e>You have already established a BrotherBand with <eh>" + username + "<e>!");
        } else {
          transer.systemMessage(player, "<s>Successfully formed BrotherBand connection to <sh>" + username + "<s>!");
          manager.appendString(brotherBand, username);
        };
      };
    } else {
      transer.systemMessage(player, "<e>Unable to find player with username <eh>" + username + "<e> close by!")
    };
  };
  /**
   * Cuts BrotherBand
   * @param {JSPlayer} player - Player cutting BrotherBand
   * @param {JSDataManager} manager - Required
   * @param {integer} username - Username of player cutting BrotherBand with
   **/
  function cutBrotherBand(player, manager, username) {
    if (!player.getWornChestplate().nbt().hasKey("brothers")) {
      transer.systemMessage(player, "<e>You have no BrotherBands to cut!");
    } else {
      var brotherBand = player.getWornChestplate().nbt().getStringList("brothers");
      if (brotherBand.tagCount() == 0) {
        transer.systemMessage(player, "<e>You have no BrotherBands to cut!");
      } else {
        var index = transer.getStringArray(brotherBand).indexOf(username);
        if (index < 0) {
          transer.systemMessage(player, "<e>Unable to find BrotherBand with username <eh>" + username + "<e> to cut!");
        } else {
          transer.systemMessage(player, "<s>Cut BrotherBand with <sh>" + username + "<s>!");
          manager.removeTag(brotherBand, index);
        };
      };
    };
  };
  /**
   * Lists player's BrotherBands
   * @param {JSEntity} entity - Required
   **/
  function listBrotherBands(entity) {
    var brotherBand = transer.getStringArray(entity.getWornChestplate().nbt().getStringList("brothers"));
    transer.systemMessage(entity,"<nh>You have <nh>" + brotherBand.length + ((brotherBand.length == 1)?"<n> Brothers!": "<n> Brother!"));
    brotherBand.forEach(entry => {
      transer.systemMessage(entity, entry);
    });
  };
  /**
   * Checks if a player has another player as a Brother
   * @param {JSEntity} sender - Player getting checked
   * @param {JSEntity} receiver - Player whose BrotherBand list is being checked
   * @returns If sender is in receiver's BrotherBands
   **/
  function hasBrother(sender, receiver) {
    var brotherBands = receiver.getWornChestplate().nbt().getStringList("brothers");
    var brothers = transer.getStringArray(brotherBands);
    var result = false;
    brothers.forEach(entry => {
      if (entry == sender.getName()) {
        result = true;
      };
    });
    return result;
  };
  /**
   * Sends message in BrotherBand format
   * @param {JSPlayer} player - Entity recieving message
   * @param {string} sender - Entity sending message
   * @param {string} message - Messsage content
   **/
  function brotherBandMessage(player, sender, message) {
    if (PackLoader.getSide() == "SERVER") {
      player.as("PLAYER").addChatMessage("[BrotherBand]> " + sender + "> " + message);
    };
  };
  return {
    name: "BrotherBand",
    type: 3,
    command: "bb",
    helpMessage: "<n>!bb <nh>-<n> BrotherBand",
    chatModeInfo: "<n>You are now in <nh>BrotherBand<n> mode!",
    messageHandler: function (entity) {
      var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
      var message = entity.getData("skyhighheroes:dyn/entry");
      var brothers = transer.getStringArray(entity.getWornChestplate().nbt().getStringList("brothers"));
      var reciever = brothers[activeChat];
      var foundPlayer = null;
      var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 120);
      entities.some(player => {
        if (player.is("PLAYER") && player.getName() == reciever) {
          foundPlayer = player;
        };
        return (foundPlayer != null);
      });
      if (foundPlayer != null) {
        if (transer.isWearingTranser(foundPlayer)) {
          if (hasBrother(entity, foundPlayer)) {
            if (typeof transer.waveChange === "string" && typeof transer.color === "string" && typeof transer.human === "string") {
              if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && foundPlayer.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
                brotherBandMessage(entity, transer.color+transer.waveChange+"\u00A7r", message);
              } else {
                brotherBandMessage(entity, transer.human, message);
              };
            } else {
              brotherBandMessage(entity, entity.getName(), message);
            };
          };
        };
      };
    },
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch (arguments[1]) {
          case "form":
            (arguments.length == 3) ? formBrotherBand(entity, manager, arguments[2]) : transer.systemMessage(entity, "<n>!bb form <nh><name>");
            break;
          case "cut":
            (arguments.length == 3) ? cutBrotherBand(entity, manager, arguments[2]) : transer.systemMessage(entity, "<n>!bb cut <nh><name>");
            break;
          case "list":
            listBrotherBands(entity);
            break;
          case "help":
            transer.systemMessage(entity, "<n>BrotherBand commands:")
            transer.systemMessage(entity, "<n>!bb form <nh><name><n> <nh>-<n> Adds Brother to your BrotherBand by name");
            transer.systemMessage(entity, "<n>!bb cut <nh><name><n> <nh>-<n> Removes Brother from your BrotherBand by name");
            transer.systemMessage(entity, "<n>!bb list <nh>-<n> Lists Brothers");
            transer.systemMessage(entity, "<n>!bb help <nh>-<n> Shows BrotherBand commands");
            break;
          default:
            transer.systemMessage(entity, "<e>Unknown <eh>BrotherBand<e> command! Try <eh>!bb help<e> for a list of commands!");
            break;
        };
      } else {
        transer.systemMessage(entity, "<e>Unknown <eh>BrotherBand<e> command! Try <eh>!bb help<e> for a list of commands!");
      };
    },
    chatInfo: function (player, manager) {
      if (player.getWornChestplate().nbt().hasKey("brothers")) {
        var brothersList = transer.getStringArray(player.getWornChestplate().nbt().getStringList("brothers"));
        if (brothersList.length > 0) {
          if (player.getData("skyhighheroes:dyn/active_chat") > (brothersList.length-1)) {
            manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
          };
          var brother = brothersList[player.getData("skyhighheroes:dyn/active_chat")];
          transer.systemMessage(player, "<n>You are now messaging <nh>" + brother + "<n>!");
        } else {
          transer.systemMessage(player, "<e>You do not have any Brothers!");
        };
      } else {
        transer.systemMessage(player, "<e>You do not have any Brothers!");
      };
    },
  };
};