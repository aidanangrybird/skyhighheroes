//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

var transers = [
  {"suit": "skyhighocs:aegon_stelar", "satellite": "dragon", "id": "411ed8b9-b246-449c-b941-02790d0971dd"},
  {"suit": "skyhighocs:aidan_stelar", "satellite": "pegasus", "id": "a3d071d4-c912-41e1-a6b2-c0de99ea4a84"},
  {"suit": "skyhighocs:cash_stelar", "satellite": "dragon", "id": "2389f9cd-351e-4d96-a277-847a24fd9048"},
  {"suit": "skyhighocs:chase_stelar", "satellite": "leo", "id": "4da600b8-582a-4fc3-ac2e-ada03d3e478c"},
  {"suit": "skyhighocs:ace_stelar", "satellite": "pegasus", "id": "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0"},
  {"suit": "skyhighocs:grand_stelar", "satellite": "leo", "id": "d699ffcd-8177-4325-91ac-3e815e87bb95"},
  {"suit": "skyhighocs:lucas_stelar", "satellite": "dragon", "id": "c4bc5db6-3cf6-44fe-8427-304a7b211bc4"},
  {"suit": "skyhighheroes:geo_stelar", "satellite": "pegasus"},
  {"suit": "skyhighheroes:geo_stelar/subaru", "satellite": "pegasus"},
  {"suit": "skyhighheroes:pegasus_transer", "satellite": "pegasus"},
  {"suit": "skyhighheroes:leo_transer", "satellite": "leo"},
  {"suit": "skyhighheroes:dragon_transer", "satellite": "dragon"}
];

var basic = [
  {"suit": "skyhighheroes:pegasus_transer", "satellite": "pegasus"},
  {"suit": "skyhighheroes:leo_transer", "satellite": "leo"},
  {"suit": "skyhighheroes:dragon_transer", "satellite": "dragon"}
];

regex = /((<ob>))|(<n>)|(<nh>)|(<s>)|(<sh>)|(<e>)|(<eh>)|(<r>)|(<d>)|(<l>)|(<p>)|(<dragon>)|(<leo>)|(<pegasus>)/gm;

var formatting = {
  "<ob>": "\u00A7k",
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
  var wearingTranser = false;
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
 * Checks if an entity is wearing a normal transer
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is wearing normal transer
 **/
function isWearingNormal(entity) {
  var wearingNormal = false
  transers.forEach(entry => {
    if (entity.isWearingFullSuit() && entity.getWornChestplate().suitType() == entry.suit) {
      wearingNormal = true;
    };
  });
  return wearingNormal;
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

/**
 * Applies formatting to system messages
 * @param {string} input - Message to format
 * @returns Formatted message
 **/
function formatSystem(input) {
  output = input.replace(regex, function(thing) {
    return formatting[thing];
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
    };
    result.push(entry);
  };
  return result;
};
/**
 * Disables a module
 * @param {JSEntity} entity - Required
 * @param {JSDataManager} manager - Required
 * @param {Array} moduleList - List of available module names
 * @param {string} moduleName - Module name to disable
 **/
function disableModule(player, manager, moduleList, moduleName) {
  if (moduleList.indexOf(moduleName) > -1) {
    if (!player.getWornChestplate().nbt().hasKey("disabledModules")) {
      var disabledModules = manager.newTagList();
      manager.appendString(disabledModules, moduleName);
      manager.setTagList(player.getWornChestplate().nbt(), "disabledModules", disabledModules);
      systemMessage(player, "<s>Successfully disabled module <sh>" + moduleName + "<s>!");
    } else {
      var disabledModules = player.getWornChestplate().nbt().getStringList("disabledModules");
      var disabledModulesIndex = getStringArray(disabledModules).indexOf(moduleName);
      if (disabledModulesIndex > -1) {
        systemMessage(player, "<e>You have already disabled module <eh>" + moduleName + "<e>!");
      } else {
        systemMessage(player, "<s>Successfully disabled module <sh>" + moduleName + "<s>!");
        manager.appendString(disabledModules, moduleName);
      };
    };
  } else {
    systemMessage(player, "<e>Unknown module of name <eh>" + moduleName + "<e>!");
  };
};
/**
 * Enables module
 * @param {JSPlayer} player - Player cutting BrotherBand
 * @param {JSDataManager} manager - Required
 * @param {Array} moduleList - List of available module names
 * @param {integer} moduleName - Username of player cutting BrotherBand with
 **/
function enableModule(player, manager, moduleList, moduleName) {
  if (moduleList.indexOf(moduleName) > -1) {
    if (!player.getWornChestplate().nbt().hasKey("disabledModules")) {
      systemMessage(player, "<e>You have no disabled modules to enable!");
    } else {
      var disabledModules = player.getWornChestplate().nbt().getStringList("disabledModules");
      if (disabledModules.tagCount() == 0) {
        systemMessage(player, "<e>You have no disabled modules to enable!");
      } else {
        var index = getStringArray(disabledModules).indexOf(moduleName);
        if (index < 0) {
          systemMessage(player, "<e>Module <eh>" + moduleName + "<e> is already enabled!");
        } else {
          systemMessage(player, "<s>Successfully enabled <sh>" + moduleName + "<s> module!");
          manager.removeTag(disabledModules, index);
        };
      };
    };
  } else {
    systemMessage(player, "<e>Unknown module of name <eh>" + moduleName + "<e>!");
  };
};
/**
 * Checks if a module is disabled
 * @param {JSEntity} entity - Player getting checked
 * @param {string} moduleName - Module being checked if disabled
 * @returns If sender is in receiver's BrotherBands
 **/
function isModuleDisabled(entity, moduleName) {
  var disabledModules = entity.getWornChestplate().nbt().getStringList("disabledModules");
  var modulesDisabled = getStringArray(disabledModules);
  var result = false;
  modulesDisabled.forEach(entry => {
    if (entry == moduleName) {
      result = true;
    };
  });
  return result;
};
/**
 * Lists disabled modules
 * @param {JSEntity} entity - Required
 **/
function listDisabledModules(entity) {
  var disabledModules = getStringArray(entity.getWornChestplate().nbt().getStringList("disabledModules"));
  systemMessage(entity,"<n>You have <nh>" + disabledModules.length + ((disabledModules.length == 1) ? "<n> disabled module!" : "<n> disabled modules!"));
  disabledModules.forEach(entry => {
    systemMessage(entity, "<nh>" + entry);
  });
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
 * @param {string} message - Entity recieving message
 **/
function logMessage(message) {
  PackLoader.print(message);
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

/**
 * Initializes transer system
 * @param {object} moduleList - Transer system modules
 **/
function initTranser(moduleList) {
  var instance = this;
  /** @var modules - Array of modules */
  var modules = [];
  /** @var moduleNames - Module names */
  var moduleNames = [];
  /** @var commands - Command prefixes */
  var commands = [];
  /** @var commandIndexes - Indexes of command handlers */
  var commandIndexes = [];
  /** @var messagingIndexes - Indexes of messaging handlers */
  var messagingIndexes = [];
  /** @var waveIndexes - Wave calling indexes */
  var waveIndexes = [];
  /** @var emBeingIndex - Index of EM Being */
  var emBeingIndex = -1;
  /** @var waveChangeIndex - Index of EM Wave Change */
  var waveChangeIndex = -1;
  /** @var powerArray - Command prefixes */
  var powerArray = ["skyhighheroes:transer_system"];
  moduleList.forEach(module => {
    if (module.hasOwnProperty("init")) {
      var moduleInit = module.init(instance);
      modules.push(moduleInit);
      if (moduleInit.hasOwnProperty("type")) {
        switch (moduleInit.type) {
          //Type 1 - commands (can have data management)
          //Type 2 - messaging only
          //Type 3 - commands messaging and data management
          //Types 4-6 - Not used (Might be used in future)
          //Type 7 - EM Being calling signal
          //Type 8 - EM Being
          //Type 9 - EM Wave Change
          case 1:
            moduleNames.push(moduleInit.name);
            commands.push(moduleInit.command);
            commandIndexes.push(moduleList.indexOf(module));
            break;
          case 2:
            moduleNames.push(moduleInit.name);
            messagingIndexes.push(moduleList.indexOf(module));
            break;
          case 3:
            moduleNames.push(moduleInit.name);
            commands.push(moduleList.indexOf(module));
            commandIndexes.push(moduleList.indexOf(module));
            messagingIndexes.push(moduleList.indexOf(module));
            break;
          case 7:
            waveIndexes.push(moduleList.indexOf(module));
            break;
          case 8:
            moduleNames.push(moduleInit.name);
            var modulePowers = moduleInit.powers;
            modulePowers.forEach(power => {
              powerArray.push(power);
            });
            break;
          case 9:
            moduleNames.push(moduleInit.name);
            var modulePowers = moduleInit.powers;
            modulePowers.forEach(power => {
              powerArray.push(power);
            });
            break;
          default:
            logMessage("Module at poisition " + moduleList.indexOf(module) + " does not have valid type value!");
        };
      } else {
        logMessage("Module at poisition " + moduleList.indexOf(module) + " does not have a type value!");
      };
    } else {
      logMessage("Module at poisition " + moduleList.indexOf(module) + " cannot be initialized!");
    };
  });
  function cycleChatModes(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/chat_mode", player.getData("skyhighheroes:dyn/chat_mode") + 1);
    if (player.getData("skyhighheroes:dyn/chat_mode") > (messageHandlers-1)) {
      manager.setData(player, "skyhighheroes:dyn/chat_mode", 0);
    };
    var chatMode = player.getData("skyhighheroes:dyn/chat_mode");
    messagingIndexes[chatMode].chatModeInfo(player, manager);
    systemMessage(player, messagingIndexes[chatMode].chatInfo(player, manager));
    return true;
  };
  function cycleChats(player, manager) {
    var chatMode = player.getData("skyhighheroes:dyn/chat_mode");
    systemMessage(player, messagingIndexes[chatMode].chatInfo(player, manager));
    return true;
  };
  function systemInfo(entity) {
    var enableModules = [];
    modules.forEach(module => {
      if (!isModuleDisabled(entity, module.name)) {
        enableModules.push(module);
      };
    });
    var enabledModulesMessage = (enableModules.length > 1) ? "<n>Loaded " + enableModules.length + " modules: " : "<n>Loaded " + enableModules.length + " module: ";
    enableModules.forEach(module => {
      if (modules.indexOf(module) == 0) {
        enabledModulesMessage = enabledModulesMessage + "<nh>" + module.name;
      } else {
        enabledModulesMessage = enabledModulesMessage + "<n>, <nh>" + module.name;
      };
    });
    systemMessage(entity, "<n>TranserOS");
    systemMessage(entity, enabledModulesMessage);
  };
  function status(entity) {
    var date = new Date();
    if (hasEMBeing && !isWearingNormal(entity)) {
      systemMessage(entity, "<n>Hello <nh>" + untransformed + "<n>!");
    } else {
      systemMessage(entity, "<n>Hello <nh>" + entity.getName() + "<n>!");
    };
    systemMessage(entity, "<n>It is <nh>" + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    systemMessage(entity, "<n>The current time is <nh>" + date.getHours() + ":" + ((date.getMinutes() > 9) ? date.getMinutes() : "0"+date.getMinutes()));
    systemMessage(entity, "<n>Your current location is<nh> " + entity.posX().toFixed(2) + "<n>, <nh>" + entity.posY().toFixed(2) + "<n>, <nh>" + entity.posZ().toFixed(2));
    systemMessage(entity, "<n>You are in <nh>" + entity.world().getLocation(entity.pos()).biome() + " <n>biome");
  };
  return {
    addPowers: (hero) => {
      if (powerArray.length == 1) {
        hero.addPowers(powerArray[0]);
      };
      if (powerArray.length == 2) {
        hero.addPowers(powerArray[0], powerArray[1]);
      };
      if (powerArray.length == 3) {
        hero.addPowers(powerArray[0], powerArray[1], powerArray[2]);
      };
      if (powerArray.length == 4) {
        hero.addPowers(powerArray[0], powerArray[1], powerArray[2], powerArray[3]);
      };
      if (powerArray.length == 5) {
        hero.addPowers(powerArray[0], powerArray[1], powerArray[2], powerArray[3], powerArray[4]);
      };
      if (powerArray.length == 6) {
        hero.addPowers(powerArray[0], powerArray[1], powerArray[2], powerArray[3], powerArray[4], powerArray[5]);
      };
      if (powerArray.length == 7) {
        hero.addPowers(powerArray[0], powerArray[1], powerArray[2], powerArray[3], powerArray[4], powerArray[5], powerArray[6]);
      };
      if (powerArray.length == 8) {
        hero.addPowers(powerArray[0], powerArray[1], powerArray[2], powerArray[3], powerArray[4], powerArray[5], powerArray[6], powerArray[7]);
      };
      if (powerArray.length == 9) {
        hero.addPowers(powerArray[0], powerArray[1], powerArray[2], powerArray[3], powerArray[4], powerArray[5], powerArray[6], powerArray[7], powerArray[8]);
      };
      if (powerArray.length == 10) {
        hero.addPowers(powerArray[0], powerArray[1], powerArray[2], powerArray[3], powerArray[4], powerArray[5], powerArray[6], powerArray[7], powerArray[8], powerArray[9]);
      };
    },
    keyBinds: (hero) => {
      hero.addKeyBind("SHAPE_SHIFT", "Send message/Enter command", 4);
      hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
      hero.addKeyBindFunc("CYCLE_CHAT_MODES", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 3);
    },
    initEMWaveChange: (hero) => {
      hero.addKeyBindFunc("CYCLE_CHATS_EM", (player, manager) => cycleChats(player, manager), "Cycle chats", 2);
      hero.addKeyBindFunc("CYCLE_CHAT_MODES_EM", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 2);
      if (modules[waveChangeIndex].hasOwnProperty("keyBinds")) {
        modules[waveChangeIndex].keyBinds(hero);
      };
      if (modules[waveChangeIndex].hasOwnProperty("canAim")) {
        modules[waveChangeIndex].supplyFunction("canAim", entity => module.canAim(entity));
      };
      if (modules[waveChangeIndex].hasOwnProperty("initDamageProfiles")) {
        modules[waveChangeIndex].initDamageProfiles(hero);
      };
      if (modules[waveChangeIndex].hasOwnProperty("initProfiles")) {
        modules[waveChangeIndex].initProfiles(hero);
      };
      if (modules[waveChangeIndex].hasOwnProperty("initEquipment")) {
        modules[waveChangeIndex].initEquipment(hero);
      };
      if (modules[waveChangeIndex].hasOwnProperty("initSounds")) {
        modules[waveChangeIndex].initSounds(hero);
      };
    },
    getProperty: function (entity, property) {
      return ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].properties(entity, property));
    },
    getPermission: function (entity, permission) {
      return ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].permissions(entity, permission));
    },
    getTierOverride: function (entity) {
      return ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].tierOverride(entity));
    },
    getAttributeProfile: function (entity) {
      return ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].attributeProfiles(entity));
    },
    getDamageProfile: function (entity) {
      return ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].damageProfiles(entity));
    },
    profileWave: function (hero) {
      hero.addAttributeProfile("INACTIVE", (profile) => {
        profile.addAttribute("BASE_SPEED", -1.0, 1);
        profile.addAttribute("SPRINT_SPEED", -1.0, 1);
        profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
        profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
        profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
      });
    },
    isKeyBindEnabled: function (entity, keyBind) {
      return ((isModuleDisabled(entity, modules[emBeingIndex].name)) ? false : modules[emBeingIndex].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? false : modules[waveChangeIndex].isKeyBindEnabled(entity, keyBind));
    },
    isModifierEnabled: function (entity, modifier) {
      return ((isModuleDisabled(entity, modules[emBeingIndex].name)) ? false : modules[emBeingIndex].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? false : modules[waveChangeIndex].isModifierEnabled(entity, modifier));
    },
    tickHandler: (entity, manager) => {
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
            var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
            manager.setData(entity, "skyhighheroes:dyn/entry", entry.substring(1));
            if (entity.getData("skyhighheroes:dyn/entry") == "systemInfo") {
              systemInfo(entity);
            } else if (entity.getData("skyhighheroes:dyn/entry") == "status") {
              status(entity);
            } else if (entity.getData("skyhighheroes:dyn/entry") == "help") {
              systemMessage(entity, "<n>Available commands:");
              helpIndexes.forEach(index => {
                var module = modules[index];
                if (!isModuleDisabled(entity, module.name)) {
                  module.helpMessage(entity);
                };
              });
            } if (entity.getData("skyhighheroes:dyn/entry") == "disabledList") {
              listDisabledModules(entity);
            } else if (entity.getData("skyhighheroes:dyn/entry").startsWith("disable ")) {
              disableModule(entity, manager, moduleNames, args[1]);
            } else if (entity.getData("skyhighheroes:dyn/entry").startsWith("enable ")) {
              enableModule(entity, manager, moduleNames, args[1]);
            } else {
              var index = commands.indexOf(args[0]);
              var module = modules[commandIndexes[index]];
              if (!isModuleDisabled(entity, module.name)) {
                module.commandHandler(entity, manager);
              };
            };
          } else {
            messagingIndexes[entity.getData("skyhighheroes:dyn/chat_mode")].messageHandler(entity, transformed, untransformed, color);
          };
        };
      };
      if (!isModuleDisabled(entity, modules[waveChangeIndex].name)) {
        modules[waveChangeIndex].tickHandler(entity, manager);
      };
      if (!isModuleDisabled(entity, modules[emBeingIndex].name)) {
        modules[emBeingIndex].tickHandler(entity, manager);
      };
      waveIndexes.forEach(index => {
        var module = modules[index];
        if (!isModuleDisabled(entity, module.name)) {
          module.waveHandler(entity, manager);
        };
      });
    }
  };
};