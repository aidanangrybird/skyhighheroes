//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

var transers = [
  {"suit": "skyhighheroes:aegon_stelar", "satellite": "dragon", "id": "411ed8b9-b246-449c-b941-02790d0971dd"},
  {"suit": "skyhighheroes:aidan_stelar", "satellite": "pegasus", "id": "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"},
  {"suit": "skyhighheroes:cash_stelar", "satellite": "dragon", "id": "2389f9cd-351e-4d96-a277-847a24fd9048"},
  {"suit": "skyhighheroes:chase_stelar", "satellite": "leo", "id": "4da600b8-582a-4fc3-ac2e-ada03d3e478c"},
  {"suit": "skyhighheroes:ace_stelar", "satellite": "pegasus", "id": "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0"},
  {"suit": "skyhighheroes:grand_stelar", "satellite": "leo", "id": "d699ffcd-8177-4325-91ac-3e815e87bb95"},
  {"suit": "skyhighheroes:lucas_stelar", "satellite": "dragon", "id": "c4bc5db6-3cf6-44fe-8427-304a7b211bc4"},
  {"suit": "skyhighheroes:geo_stelar", "satellite": "pegasus"},
  {"suit": "skyhighheroes:geo_stelar/subaru", "satellite": "pegasus"},
  {"suit": "skyhighheroes:pegasus_transer", "satellite": "pegasus"},
  {"suit": "skyhighheroes:leo_transer", "satellite": "leo"},
  {"suit": "skyhighheroes:dragon_transer", "satellite": "dragon"}
];

regex = /(<n>)|(<nh>)|(<s>)|(<sh>)|(<e>)|(<eh>)|(<r>)|(<d>)|(<l>)|(<p>)|(<dragon>)|(<leo>)|(<pegasus>)/gm;

var formatting = {
  "system": {
    "<n>": "\u00A7b",
    "<nh>": "\u00A7a",
    "<s>": "\u00A7a",
    "<sh>": "\u00A7e",
    "<e>": "\u00A7c",
    "<eh>": "\u00A76",
    "<d>": "\u00A72SYSTEM\u00A7r",
    "<l>": "\u00A74SYSTEM\u00A7r",
    "<p>": "\u00A71SYSTEM\u00A7r",
    "<dragon>": "\u00A72Dragon \u00A77Sky\u00A7r",
    "<leo>": "\u00A76Leo \u00A74Kingdom\u00A7r",
    "<pegasus>": "\u00A7bPegasus \u00A79Magic\u00A7r",
    "<r>": "\u00A7r"
  }
};

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

/**
 * Checks if an entity is wearing a transer
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is wearing a transer
 **/
function isWearingTranser(entity) {
  var wearingTranser = false
  transers.forEach(entry => {
    if (entity.isWearingFullSuit() && entity.getWornChestplate().suitType() == entry.suit && (typeof entry.id !== "undefined") ? entity.getUUID() == entry.id : true) {
      wearingTranser = true;
    };
  });
  return wearingTranser;
};
/**
 * Checks if an entity is wearing an OC
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is wearing OC
 **/
function isWearingOC(entity) {
  var wearingOC = false
  transers.forEach(entry => {
    if (entity.isWearingFullSuit() && entity.getWornChestplate().suitType() == entry.suit && (typeof entry.id !== "undefined") ? entity.getUUID() == entry.id : false) {
      wearingOC = true;
    };
  });
  return wearingOC;
};

/**
 * Gets the satellite a transer is assigned to
 * @param {JSEntity} entity - Entity getting checked
 * @returns The satellite a transer is assigned to
 **/
function getAssignedSatellite(entity) {
  var satellite = null;
  transers.forEach(entry => {
    if (entity.getWornChestplate().suitType() == entry.suit) {
      satellite = entry.satellite;
    };
  });
  return satellite;
};

function formatSystem(input) {
  output = input.replace(regex, function(thing) {
    return formatting.system[thing];
  });
  return output;
};

/**
 * Turns NBT String List into an array for easier use in code
 * @param {JSNBTList} nbtList - NBTList
 * @returns Array of values from the NBTList
 **/
function getStringArray(nbtList) {
  var count = nbtList.tagCount();
  var result = [];
  for (i=0;i<count;i++) {
    result.push(nbtList.getString(i));
  };
  return result;
};

/**
 * Turns NBT String List into an array for easier use in code
 * @param {JSEntity} entity - Entity to create group array from
 * @returns Array of group names
 **/
function getGroupArray(entity) {
  var groupList = entity.getWornChestplate().nbt().getTagList("groups");
  var count = groupList.tagCount();
  var result = [];
  for (i=0;i<count;i++) {
    result.push(groupList.getCompoundTag(i).getString("groupName"));
  };
  return result;
};

/**
 * Turns NBT String List into an array for easier use in code
 * @param {JSEntity} entity - Entity to create group array from
 * @returns Array of group names and member counts
 **/
function getGroupArrayMembers(entity) {
  var groupList = entity.getWornChestplate().nbt().getTagList("groups");
  var count = groupList.tagCount();
  var result = [];
  for (i=0;i<count;i++) {
    var group = groupList.getCompoundTag(i);
    var entry = {
      "groupName": group.getString("groupName"),
      "memberCount": group.getStringList("members").tagCount(),
    }
    result.push(entry);
  };
  return result;
};

/**
 * Prints message to player's chat
 * @param {JSPlayer} player - Required
 * @param {string} message - Message to be shown to player
 **/
function chatMessage(player, message) {
  if (PackLoader.getSide() == "SERVER") {
    player.as("PLAYER").addChatMessage(message);
  };
};

/**
 * Sends system message
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} message - Message content
 **/
function systemMessage(player, message) {
  switch (getAssignedSatellite(player)) {
    case "dragon":
      chatMessage(player, formatSystem("<d>> " + message));
      break;
    case "leo":
      chatMessage(player, formatSystem("<l>> " + message));
      break;
    case "pegasus":
      chatMessage(player, formatSystem("<p>> " + message));
      break;
  };
};

/**
 * Sends message in group format
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} groupName - Name of group
 * @param {string} sender - Name of entity sending message
 * @param {string} message - Message content
 **/
function groupMessage(player, groupName, sender, message) {
  chatMessage(player, "[" + groupName + "]>" + sender + "> " + message);
};
/**
 * Sends message in normal format
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} sender - Entity sending message
 * @param {string} message - Messsage content
 **/
function playerMessage(player, sender, message) {
  chatMessage(player, sender + "> " + message);
};
/**
 * Sends message in BrotherBand format
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} sender - Entity sending message
 * @param {string} message - Messsage content
 **/
function brotherBandMessage(player, sender, message) {
  chatMessage(player, "[BrotherBand]> " + sender + "> " + message);
};
/**
 * Is the setKeyBind stuff for basic transers
 * @param {JSEntity} entity - Required
 * @param {string} keyBind - Required
 **/
function setKeyBind(entity, keyBind) {
  switch (keyBind) {
    case "CYCLE_CHATS":
      return !entity.isSneaking();
    case "CYCLE_CHAT_MODES":
      return entity.isSneaking();
    default:
      return true;
  };
};

//Maybe add a thing that tells you which modules are loaded when you put on your transer

/**
 * Initializes transer system
 * @param {object} moduleList - Transer system modules
 **/
function initTranser(moduleList) {
  var instance = this;
  var loadedModules = (moduleList.length > 1) ? "<n>Loaded " + moduleList.length + " modules: " : "<n>Loaded " + moduleList.length + " module: ";
  var modules = [];
  var messageHandlers = 0;
  var commandHandlers = 0;
  var messagingIndex = 0;
  var brotherBandIndex = 0;
  var modifierIndexes = [];
  var keyBindIndexes = [];
  moduleList.forEach(module => {
    var init = module.init(instance);
    modules.push(init);
    if (init.hasOwnProperty("messageHandler")) {
      if (init.name() == "messaging") {
        messageHandlers = messageHandlers + 1;
      };
      messageHandlers = messageHandlers + 1;
    };
    if (moduleList.indexOf(module) == 0) {
      loadedModules = loadedModules + "<nh>" + init.name();
    } else {
      loadedModules = loadedModules + "<n>, <nh>" + init.name();
    };
    if (init.name() == "messaging") {
      messagingIndex = moduleList.indexOf(module);
    };
    if (init.name() == "BrotherBand") {
      brotherBandIndex = moduleList.indexOf(module);
    };
    if (init.hasOwnProperty("commandHandler")) {
      commandHandlers = commandHandlers + 1;
    };
    if (init.hasOwnProperty("isModifierEnabled")) {
      modifierIndexes.push(moduleList.indexOf(module));
    };
    if (init.hasOwnProperty("isKeyBindEnabled")) {
      keyBindIndexes.push(moduleList.indexOf(module));
    };
  });
  function cycleChatModes(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/chat_mode", player.getData("skyhighheroes:dyn/chat_mode") + 1);
    if (player.getData("skyhighheroes:dyn/chat_mode") > (messageHandlers-1)) {
      manager.setData(player, "skyhighheroes:dyn/chat_mode", 0);
    };
    if (player.getData("skyhighheroes:dyn/chat_mode") < 2) {
      modules[messagingIndex].chatModeInfo(player, manager);
      modules[messagingIndex].chatInfo(player, manager);
    } else {
      modules[brotherBandIndex].chatModeInfo(player, manager);
      modules[brotherBandIndex].chatInfo(player, manager);
    };
    return true;
  };
  function cycleChats(player, manager) {
    if (player.getData("skyhighheroes:dyn/chat_mode") < 2) {
      modules[messagingIndex].chatInfo(player, manager);
    } else {
      modules[brotherBandIndex].chatInfo(player, manager);
    };
    return true;
  };
  function systemInfo(entity) {
    systemMessage(entity, "<n>TranserOS");
    systemMessage(entity, loadedModules);
  };
  function status(entity) {
    var date = new Date();
    systemMessage(entity, "<n>It is <nh>" + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    systemMessage(entity, "<n>The current time is <nh>" + date.getHours() + ":" + ((date.getMinutes() > 9) ? date.getMinutes() : "0"+date.getMinutes()));
    systemMessage(entity, "<n>Your current location is<nh> " + entity.posX().toFixed(2) + "<n>, <nh>" + entity.posY().toFixed(2) + "<n>, <nh>" + entity.posZ().toFixed(2));
    systemMessage(entity, "<n>You are in <nh>" + entity.world().getLocation(entity.pos()).biome() + " <n>biome");
  };
  return {
    keyBinds: (hero, EM) => {
      modules.forEach(module => {
        if (module.hasOwnProperty("keyBinds")) {
          module.keyBinds(hero);
        };
      });
      hero.addKeyBind("SHAPE_SHIFT", "Send message/Enter command", 4);
      hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
      hero.addKeyBindFunc("CYCLE_CHAT_MODES", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 3);
      if (typeof EM === "boolean" && EM) {
        hero.addKeyBindFunc("CYCLE_CHATS_EM", (player, manager) => cycleChats(player, manager), "Cycle chats", 2);
        hero.addKeyBindFunc("CYCLE_CHAT_MODES_EM", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 2);
      };
    },
    isKeyBindEnabled: function (entity, keyBind) {
      if (keyBindIndexes.length == 1) {
        return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind);
      };
      if (keyBindIndexes.length == 2) {
        return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind);
      };
      if (keyBindIndexes.length == 3) {
        return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].keyBindEnabled(entity, keyBind);
      };
    },
    isModifierEnabled: function (entity, modifier) {
      if (modifierIndexes.length == 1) {
        return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier);
      };
      if (modifierIndexes.length == 2) {
        return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier);
      };
      if (modifierIndexes.length == 3) {
        return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier);
      };
    },
    tickHandler: (entity, manager, transformed, untransformed, color) => {
      if (!entity.getData("skyhighheroes:dyn/system_init")) {
        status(entity);
        manager.setData(entity, "skyhighheroes:dyn/system_init", true);
      };
      if (typeof entity.getData("fiskheroes:disguise") === "string") { 
        if (!(entity.getData("fiskheroes:disguise") == transformed)) {
          if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1 && typeof transformed === "string") {
            manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
            manager.setData(entity, "fiskheroes:disguise", transformed);
          } else {
            manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
            manager.setData(entity, "fiskheroes:disguise", null);
          };
          manager.setData(entity, "fiskheroes:shape_shifting_to", null);
          manager.setData(entity, "fiskheroes:shape_shifting_from", null);
          manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
          var entry = entity.getData("skyhighheroes:dyn/entry");
          if (entry.startsWith("!")) {
            manager.setData(entity, "skyhighheroes:dyn/entry", entry.substring(1));
            if (entity.getData("skyhighheroes:dyn/entry") == "systemInfo") {
              systemInfo(entity);
            } if (entity.getData("skyhighheroes:dyn/entry") == "status") {
              status(entity);
            } if (entity.getData("skyhighheroes:dyn/entry") == "help") {
              systemMessage(entity, "<n>Available commands:");
              modules.forEach(module => {
                if (module.hasOwnProperty("helpMessage")) {
                  module.helpMessage(entity);
                };
              });
            } else {
              modules.some((module) => {
                if (module.hasOwnProperty("commandHandler")) {
                  var result = module.commandHandler(entity, manager);
                };
                return result;
              });
            };
          } else {
            if (entity.getData("skyhighheroes:dyn/chat_mode") < 2) {
              modules[1].messageHandler(entity, transformed, untransformed, color);
            } else {
              modules[2].messageHandler(entity, transformed, untransformed, color);
            };
          };
        };
      };
      modules.forEach(module => {
        if (module.hasOwnProperty("tickHandler")) {
          module.tickHandler(entity, manager);
        };
      });
    }
  };
};