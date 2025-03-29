/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //The point of BrotherBand is to allow communication at much farther ranges and to give buffs when you are near each other
  /**
   * Forms BrotherBand
   * @param {JSPlayer} player - Player forming BrotherBand
   * @param {JSDataManager} manager - Required
   * @param {string} username - Username of player to form BrotherBand with
   **/
  function formBrotherBand(player, manager, username) {
    if (!player.getWornHelmet().nbt().hasKey("brothers")) {
      var newBrotherBandList = manager.newTagList();
      manager.setTagList(player.getWornHelmet().nbt(), "brothers", newBrotherBandList);
    };
    if (username.length < 16) {
      system.moduleMessage(this, player, "<e>Username is too long!");
      return;
    };
    var foundPlayer = false;
    system.moduleMessage(this, player, "<n>Scanning for <nh>" + username + "<n> to form BrotherBand with!");
    var entities = player.world().getEntitiesInRangeOf(player.pos(), 2);
    entities.forEach(entity => {
      if (entity.is("PLAYER") && entity.getName() == username && system.isWearingTranser(entity) && player.canSee(entity)) {
        foundPlayer = true;
      };
    });
    if (foundPlayer) {
      if (!player.getWornChestplate().nbt().hasKey("brothers")) {
        var brotherBand = manager.newTagList();
        manager.appendString(brotherBand, username);
        manager.setTagList(player.getWornChestplate().nbt(), "brothers", brotherBand);
        system.moduleMessage(this, player, "<s>Successfully formed BrotherBand connection to <sh>" + username + "<s>!");
      } else {
        var brotherBand = player.getWornChestplate().nbt().getStringList("brothers");
        var brotherBandIndex = system.getStringArray(brotherBand).indexOf(username);
        if (brotherBand.tagCount() > 5) {
          system.moduleMessage(this, player, "<e>You have reached the maximum amount of BrotherBands!");
        } else if (brotherBandIndex > -1) {
          system.moduleMessage(this, player, "<e>You have already established a BrotherBand with <eh>" + username + "<e>!");
        } else {
          system.moduleMessage(this, player, "<s>Successfully formed BrotherBand connection to <sh>" + username + "<s>!");
          manager.appendString(brotherBand, username);
        };
      };
    } else {
      system.moduleMessage(this, player, "<e>Unable to find player with username <eh>" + username + "<e> close by!")
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
      system.moduleMessage(this, player, "<e>You have no BrotherBands to cut!");
    } else {
      var brotherBand = player.getWornChestplate().nbt().getStringList("brothers");
      if (brotherBand.tagCount() == 0) {
        system.moduleMessage(this, player, "<e>You have no BrotherBands to cut!");
      } else {
        var index = system.getStringArray(brotherBand).indexOf(username);
        if (index < 0) {
          system.moduleMessage(this, player, "<e>Unable to find BrotherBand with username <eh>" + username + "<e> to cut!");
        } else {
          system.moduleMessage(this, player, "<s>Cut BrotherBand with <sh>" + username + "<s>!");
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
    var brotherBand = system.getStringArray(entity.getWornChestplate().nbt().getStringList("brothers"));
    system.moduleMessage(this, entity,"<nh>You have <nh>" + brotherBand.length + ((brotherBand.length == 1)?"<n> Brothers!": "<n> Brother!"));
    brotherBand.forEach(entry => {
      system.moduleMessage(this, entity, entry);
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
    var brothers = system.getStringArray(brotherBands);
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
    moduleMessageName: "BrotherBand",
    type: 3,
    command: "bb",
    modeID: "BrotherBand",
    helpMessage: "<n>!bb <nh>-<n> BrotherBand",
    chatModeInfo: "<n>You are now in <nh>BrotherBand<n> mode!",
    messageHandler: function (entity, name, range) {
      var activeChat = entity.getData("skyhighheroes:dyn/active_chat");
      var message = entity.getData("skyhighheroes:dyn/entry");
      var foundPlayer = null;
      if (entity.getWornChestplate().nbt().getStringList("brothers").tagCount() > 0) {
        var reciever = entity.getWornChestplate().nbt().getStringList("brothers").getString(activeChat);
        var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 128);
        entities.forEach(player => {
          if (player.is("PLAYER") && player.getName() == reciever) {
            foundPlayer = player;
          };
        });
      } else {
        system.moduleMessage(this, entity, "<e>You do not have any Brothers to message!");
      };
      if (foundPlayer != null) {
        if (system.isWearingTranser(foundPlayer)) {
          if (hasBrother(entity, foundPlayer)) {
            brotherBandMessage(entity, name, message);
          };
        };
      };
    },
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch (arguments[1]) {
          case "form":
            (arguments.length == 3) ? formBrotherBand(entity, manager, arguments[2]) : system.moduleMessage(this, entity, "<n>!bb form <nh><name>");
            break;
          case "cut":
            (arguments.length == 3) ? cutBrotherBand(entity, manager, arguments[2]) : system.moduleMessage(this, entity, "<n>!bb cut <nh><name>");
            break;
          case "list":
            listBrotherBands(entity);
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>BrotherBand commands:")
            system.moduleMessage(this, entity, "<n>!bb form <nh><name><n> <nh>-<n> Adds Brother to your BrotherBand by name");
            system.moduleMessage(this, entity, "<n>!bb cut <nh><name><n> <nh>-<n> Removes Brother from your BrotherBand by name");
            system.moduleMessage(this, entity, "<n>!bb list <nh>-<n> Lists Brothers");
            system.moduleMessage(this, entity, "<n>!bb help <nh>-<n> Shows this list");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>BrotherBand<e> command! Try <eh>!bb help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>BrotherBand<e> command! Try <eh>!bb help<e> for a list of commands!");
      };
    },
    chatInfo: function (player, manager, chat) {
      if (player.getWornChestplate().nbt().hasKey("brothers")) {
        if (player.getWornChestplate().nbt().getStringList("brothers").tagCount() > 0) {
          var brothersList = system.getStringArray(player.getWornChestplate().nbt().getStringList("brothers"));
          if (typeof chat === "string") {
            var chatIndex = brothersList.indexOf(chat);
            if (chatIndex > -1) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", chatIndex);
            } else {
              system.moduleMessage(this, player, "<e>You do not have <eh>" + chat + "<e> as a Brother!");
              return;
            };
          } else {
            if (player.getData("skyhighheroes:dyn/active_chat") > (brothersList.length-1)) {
              manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
            };
          };
          var brother = brothersList[player.getData("skyhighheroes:dyn/active_chat")];
          system.moduleMessage(this, player, "<n>You are now messaging <nh>" + brother + "<n>!");
        } else {
          system.moduleMessage(this, player, "<e>You do not have any Brothers!");
        };
      } else {
        system.moduleMessage(this, player, "<e>You do not have any Brothers!");
      };
    },
  };
};