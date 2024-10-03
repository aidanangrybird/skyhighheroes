//The point of BrotherBand is to allow communication at much farther ranges and to give buffs when you are near each other
function moduleName() {
  return "BrotherBand";
};
/**
 * Forms BrotherBand
 * @param {JSPlayer} player - Player forming BrotherBand
 * @param {JSDataManager} manager - Required
 * @param {string} username - Username of player to form BrotherBand with
 **/
function formBrotherBand(player, manager, username) {
  var foundPlayer = false;
  systemMessage(player, "<n>Scanning for <nh>" + username + "<n> to form BrotherBand with!");
  var entities = player.world().getEntitiesInRangeOf(player.pos(), 2);
  entities.forEach(entity => {
    if (entity.is("PLAYER") && entity.getName() == username && isWearingTranser(entity, player) && player.canSee(entity)) {
      foundPlayer = true;
    };
  });
  if (foundPlayer) {
    if (!player.getWornChestplate().nbt().hasKey("brothers")) {
      var brotherBand = manager.newTagList();
      manager.appendString(brotherBand, username);
      manager.setTagList(player.getWornChestplate().nbt(), "brothers", brotherBand);
      systemMessage(player, "<s>Successfully formed BrotherBand connection to <sh>" + username + "<s>!");
    } else {
      var brotherBand = player.getWornChestplate().nbt().getStringList("brothers");
      var brotherBandIndex = getStringArray(brotherBand).indexOf(username);
      if (brotherBand.tagCount() > 5) {
        systemMessage(player, "<e>You have reached the maximum amount of BrotherBands!");
      } else if (brotherBandIndex > -1) {
        systemMessage(player, "<e>You have already established a BrotherBand with <eh>" + username + "<e>!");
      } else {
        systemMessage(player, "<s>Successfully formed BrotherBand connection to <sh>" + username + "<s>!");
        manager.appendString(brotherBand, username);
      };
    };
  } else {
    systemMessage(player, "<e>Unable to find player with username <eh>" + username + "<e> close by!")
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
    systemMessage(player, "<e>You have no BrotherBands to cut!");
  } else {
    var brotherBand = player.getWornChestplate().nbt().getStringList("brothers");
    if (brotherBand.tagCount() == 0) {
      systemMessage(player, "<e>You have no BrotherBands to cut!");
    } else {
      var index = getStringArray(brotherBand).indexOf(username);
      if (index < 0) {
        systemMessage(player, "<e>Unable to find BrotherBand with username <eh>" + username + "<e> to cut!");
      } else {
        systemMessage(player, "<s>Cut BrotherBand with <sh>" + username + "<s>!");
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
  var brotherBand = getStringArray(entity.getWornChestplate().nbt().getStringList("brothers"));
  systemMessage(entity,"<nh>You have <nh>" + brotherBand.length + ((brotherBand.length > 1)?"<n> Brothers!": "<n> Brother!"));
  brotherBand.forEach(entry => {
    systemMessage(entity, entry);
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
  var brothers = getStringArray(brotherBands);
  var result = false;
  brothers.forEach(entry => {
    if (entry == sender.getName()) {
      result = true;
    };
  });
  return result;
};

function messageHandler(entity, transformed, untransformed, color) {
  var reciever = entity.getWornChestplate().nbt().getStringList("brothers").getString(activeChat);
  var foundPlayer = null;
  var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 60);
  entities.forEach(player => {
    if (player.is("PLAYER") && player.getName() == reciever) {
      foundPlayer = player;
    };
  });
  if (foundPlayer != null) {
    if (isWearingTranser(foundPlayer)) {
      if (hasBrother(entity, foundPlayer)) {
        if (typeof transformed === "string" && typeof color === "string" && typeof untransformed === "string") {
          if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && player.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
            brotherBandMessage(entity, color+transformed+"\u00A7r", message);
          } else {
            brotherBandMessage(entity, untransformed, message);
          };
        } else {
          brotherBandMessage(entity, entity.getName(), message);
        };
      };
    };
  };
};

function commandHandler(entity, manager) {
  var chatMode = entity.getData("skyhighheroes:dyn/chat_mode");
  var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
  if (chatMode == 2) {
    if (args.length > 0 && args.length < 3) {
      switch (args[0]) {
        case "form":
          (args.length == 2) ? formBrotherBand(entity, manager, args[1]) : systemMessage(entity, "<n>form <nh><name>");
          break;
        case "cut":
          (args.length == 2) ? cutBrotherBand(entity, manager, args[1]) : systemMessage(entity, "<n>cut <nh><name>");
          break;
        case "list":
          listBrotherBands(entity);
          break;
        case "help":
          systemMessage(entity, "<n>BrotherBand commands:")
          systemMessage(entity, "<n>form <nh><name><n> <nh>-<n> Adds Brother to your BrotherBand by name");
          systemMessage(entity, "<n>cut <nh><name><n> <nh>-<n> Removes Brother from your BrotherBand by name");
          systemMessage(entity, "<n>list <nh>-<n> Lists Brothers");
          systemMessage(entity, "<n>help <nh>-<n> Shows BrotherBand commands");
          break;
        default:
          systemMessage(entity, "<e>Unknown <eh>BrotherBand<e> command! Try <eh>help<e> for a list of commands!");
          break;
      };
    } else {
      systemMessage(entity, "<e>Too many arguemnts!");
    };
  };
};

function commandModeInfo(player) {
  systemMessage(player, "<n>Do <nh>help<n> to show available <nh>contact<n> commands");
};

function chatModeInfo(player, manager) {
  if (player.getWornChestplate().nbt().hasKey("contacts")) {
    if (player.getWornChestplate().nbt().getStringList("contacts").tagCount() > 0) {
      var contactsList = getStringArray(player.getWornChestplate().nbt().getStringList("contacts"));
      if (player.getData("skyhighheroes:dyn/active_chat") > (contactsList.length-1)) {
        manager.setData(player, "skyhighheroes:dyn/active_chat", 0);
      };
      var contact = contactsList[player.getData("skyhighheroes:dyn/active_chat")];
      systemMessage(player, "<n>You are now messaging <nh>" + contact + "<n>!");
    } else {
      systemMessage(player, "<e>You do not have any contacts!");
    };
  } else {
    systemMessage(player, "<e>You do not have any contacts!");
  };
};