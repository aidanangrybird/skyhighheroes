//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

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

function asssignTranser(entity, manager, satellite) {
  manager.setString(entity.getWornChestplate().nbt(), "satellite", satellite);
  if (!entity.getWornChestplate().nbt().hasKey("worthy") && (entity.getWornChestplate().suitType() == "skyhighheroes:leo_transer" || entity.getWornChestplate().suitType() == "skyhighheroes:pegasus_transer" || entity.getWornChestplate().suitType() == "skyhighheroes:dragon_transer")) {
    if (PackLoader.getSide() == "SERVER") {
      var value = Math.random();
      if (value < 0.005) {
        manager.setBoolean(entity.getWornChestplate().nbt(), "worthy", true);
        manager.setString(entity.getWornChestplate().nbt(), "HeroType", "skyhighheroes:geo_stelar");
      } else {
        manager.setBoolean(entity.getWornChestplate().nbt(), "worthy", false);
      };
    };
  };
  if (entity.getWornChestplate().nbt().hasKey("worthy") && entity.getWornChestplate().suitType() == "skyhighheroes:geo_stelar") {
    manager.removeTag(entity.getWornChestplate().nbt(), "worthy")
  };
  if (!entity.getWornChestplate().nbt().hasKey("computerID")) {
    if (PackLoader.getSide() == "SERVER") {
      var computerID = Math.random().toFixed(8).toString().substring(2);
      manager.setString(entity.getWornChestplate().nbt(), "computerID", computerID);
    };
  };
};

/**
 * Checks if an entity is wearing a transer
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is wearing a transer
 **/
function isWearingTranser(entity) {
  return entity.getWornChestplate().nbt().hasKey("satellite");
};

/**
 * Checks if an entity has a device that is a computer
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity has a device that is a computer
 **/
function hasComputer(entity) {
  return entity.getWornHelmet().nbt().hasKey("computerID") || entity.getWornChestplate().nbt().hasKey("computerID") || entity.getWornLeggings().nbt().hasKey("computerID") || entity.getWornBoots().nbt().hasKey("computerID");
};

/**
 * Gets the satellite a transer is assigned to
 * @param {JSEntity} entity - Entity getting checked
 * @returns The satellite a transer is assigned to
 **/
function getAssignedSatellite(entity) {
  return entity.getWornChestplate().nbt().getString("satellite");
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
 * @returns If module is disabled
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
 * Sends system message, formatting tags are below
 * ```
 * "<ob>": "\u00A7k"
 * "<n>": "\u00A7b"
 * "<nh>": "\u00A7a"
 * "<s>": "\u00A7a"
 * "<sh>": "\u00A7e"
 * "<e>": "\u00A7c"
 * "<eh>": "\u00A76"
 * "<d>": "\u00A72SYSTEM\u00A7r"
 * "<l>": "\u00A74SYSTEM\u00A7r"
 * "<p>": "\u00A71SYSTEM\u00A7r"
 * "<dragon>": "\u00A72Dragon \u00A77Sky\u00A7r"
 * "<leo>": "\u00A76Leo \u00A74Kingdom\u00A7r"
 * "<pegasus>": "\u00A7bPegasus \u00A79Magic\u00A7r"
 * "<r>": "\u00A7r"
 * ```
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
    default:
      chatMessage(player, formatSystem("<e>Transer is not assigned to a valid satellite!"));
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

function basicTierOverride(entity) {
  return 0;
};

/**
 * Initializes transer system
 * @param {object} moduleList - Transer system modules
 * @param {string} transerName - Required, you'll be happy that is a thing or else debugging is painful
 * @param {string} satellite - Required, or other transers will not recognize this transer as a transer
 **/
function initTranser(moduleList, transerName, satellite) {
  var transerInstance = this;
  primaryPiece = 2;
  var assignedSatellite;
  if (typeof satellite === "string") {
    assignedSatellite = satellite;
  } else {
    assignedSatellite = "";
  };
  //Type 1 - commands (can have data management)
  var type1Specs = ["command", "commandHandler", "helpMessage"];
  //Type 2 - messaging only
  var type2Specs = ["messageHandler", "chatModeInfo", "chatInfo", "modeID"];
  //Type 3 - commands messaging and data management
  var type3Specs = ["command", "messageHandler", "commandHandler", "chatModeInfo", "chatInfo", "helpMessage", "modeID"];
  //Type 7 - EM Being calling signal
  var type7Specs = ["waveHandler", "waveCalling", "selfProfile", "otherProfile"];
  //Type 8 - EM Being
  var type8Specs = ["emBeing", "powers", "keyBinds", "isKeyBindEnabled", "isModifierEnabled", "tickHandler"];
  //Type 9 - EM Wave Change
  var type9Specs = ["waveChange", "powers", "keyBinds", "tierOverride", "properties", "initDamageProfiles", "damageProfiles", "initProfiles", "attributeProfiles", "isKeyBindEnabled", "isModifierEnabled", "tickHandler"];
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
  /** @var chatModes - Chat modes */
  var chatModes = [];
  /** @var waveIndex - Wave calling index */
  var waveIndex = -1;
  /** @var emBeingIndex - Index of EM Being */
  var emBeingIndex = -1;
  /** @var waveChangeIndex - Index of EM Wave Change */
  var waveChangeIndex = -1;
  /** @var powerArray - Array of powers to add */
  var powerArray = ["skyhighheroes:transer_system"];
  /** @var human - Untransformed name */
  var human = null;
  /** @var waveChange - Transformed name */
  var waveChange = null;
  /** @var waveColor - Transformd color */
  var waveColor = null;
  /** @var emBeing - EM Being name */
  var emBeing = null;
  var hasError = false;
  var errors = [];
  logMessage("Attempting to initialize " + ((moduleList.length > 1) ? moduleList.length + " modules" : moduleList.length + " module") + " on transer " + transerName + "!");
  moduleList.forEach(module => {
    if (module.hasOwnProperty("initModule")) {
      var moduleInit = module.initModule(transerInstance);
      if (moduleInit.hasOwnProperty("type")) {
        switch (moduleInit.type) {
          case 1:
            type1Specs.forEach(spec => {
              if (!moduleInit.hasOwnProperty(spec)) {
                errors.push(spec);
                hasError = true;
              };
            });
            if (hasError) {
              logMessage("Module \"" + moduleInit.name + "\" cannot be initialized!");
              errors.forEach(error => {
                logMessage("Module is missing the \"" + error + "\" specification!");
              });
              errors = [];
            } else {
              modules.push(moduleInit);
              moduleNames.push(moduleInit.name);
              commands.push(moduleInit.command);
              commandIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on transer " + transerName + "!");
            };
            break;
          case 2:
            type2Specs.forEach(spec => {
              if (!moduleInit.hasOwnProperty(spec)) {
                errors.push(spec);
                hasError = true;
              };
            });
            if (hasError) {
              logMessage("Module \"" + moduleInit.name + "\" cannot be initialized!");
              errors.forEach(error => {
                logMessage("Module is missing the \"" + error + "\" specification!");
              });
              errors = [];
            } else {
              modules.push(moduleInit);
              moduleNames.push(moduleInit.name);
              chatModes.push(moduleInit.modeID);
              messagingIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on transer " + transerName + "!");
            };
            break;
          case 3:
            type3Specs.forEach(spec => {
              if (!moduleInit.hasOwnProperty(spec)) {
                errors.push(spec);
                hasError = true;
              };
            });
            if (hasError) {
              logMessage("Module \"" + moduleInit.name + "\" cannot be initialized!");
              errors.forEach(error => {
                logMessage("Module is missing the \"" + error + "\" specification!");
              });
              errors = [];
            } else {
              modules.push(moduleInit);
              moduleNames.push(moduleInit.name);
              commands.push(moduleInit.command);
              chatModes.push(moduleInit.modeID);
              commandIndexes.push(modules.length-1);
              messagingIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on transer " + transerName + "!");
            };
            break;
          case 7:
            type7Specs.forEach(spec => {
              if (!moduleInit.hasOwnProperty(spec)) {
                errors.push(spec);
                hasError = true;
              };
            });
            if (hasError) {
              logMessage("Module \"" + moduleInit.name + "\" cannot be initialized!");
              errors.forEach(error => {
                logMessage("Module is missing the \"" + error + "\" specification!");
              });
              errors = [];
            } else {
              modules.push(moduleInit);
              waveIndex = modules.length-1;
              human = (moduleInit.hasOwnProperty("human")) ? moduleInit.human : null;
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on transer " + transerName + "!");
            };
            break;
          case 8:
            type8Specs.forEach(spec => {
              if (!moduleInit.hasOwnProperty(spec)) {
                errors.push(spec);
                hasError = true;
              };
            });
            if (hasError) {
              logMessage("Module \"" + moduleInit.name + "\" cannot be initialized!");
              errors.forEach(error => {
                logMessage("Module is missing the \"" + error + "\" specification!");
              });
              errors = [];
            } else {
              modules.push(moduleInit);
              moduleNames.push(moduleInit.name);
              var modulePowers = moduleInit.powers;
              modulePowers.forEach(power => {
                powerArray.push(power);
              });
              emBeingIndex = modules.length-1;
              emBeing = moduleInit.emBeing;
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on transer " + transerName + "!");
            };
            break;
          case 9:
            type9Specs.forEach(spec => {
              if (!moduleInit.hasOwnProperty(spec)) {
                errors.push(spec);
                hasError = true;
              };
            });
            if (hasError) {
              logMessage("Module \"" + moduleInit.name + "\" cannot be initialized on transer " + transerName + "!");
              errors.forEach(error => {
                logMessage("Module is missing the \"" + error + "\" specification!");
              });
              errors = [];
            } else {
              modules.push(moduleInit);
              moduleNames.push(moduleInit.name);
              var modulePowers = moduleInit.powers;
              modulePowers.forEach(power => {
                powerArray.push(power);
              });
              waveChangeIndex = modules.length-1;
              waveColor = moduleInit.color;
              waveChange = moduleInit.waveChange;
              human = moduleInit.human;
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on transer " + transerName + "!");
            };
            break;
          default:
            logMessage("Module at position " + moduleList.indexOf(module) + " does not have valid type value!");
        };
      } else {
        logMessage("Module at position " + moduleList.indexOf(module) + " does not have a type value!");
      };
    } else {
      logMessage("Module at position " + moduleList.indexOf(module) + " cannot be initialized!");
    };
  });
  logMessage("Successfully initialized " + modules.length + " out of " + ((moduleList.length > 1) ? moduleList.length + " modules" : moduleList.length + " module") + " on transer " + transerName + "!");
  function cycleChatModes(player, manager) {
    manager.setData(player, "skyhighheroes:dyn/chat_mode", player.getData("skyhighheroes:dyn/chat_mode") + 1);
    if (player.getData("skyhighheroes:dyn/chat_mode") > (messagingIndexes.length-1)) {
      manager.setData(player, "skyhighheroes:dyn/chat_mode", 0);
    };
    var chatMode = player.getData("skyhighheroes:dyn/chat_mode");
    systemMessage(player, modules[messagingIndexes[chatMode]].chatModeInfo);
    modules[messagingIndexes[chatMode]].chatInfo(player, manager);
    return true;
  };
  function cycleChats(player, manager) {
    var chatMode = player.getData("skyhighheroes:dyn/chat_mode");
    modules[messagingIndexes[chatMode]].chatInfo(player, manager);
    return true;
  };
  function switchChatModes(player, manager, mode) {
    var modeIndex = chatModes.indexOf(mode);
    if (modeIndex > -1) {
      manager.setData(player, "skyhighheroes:dyn/chat_mode", modeIndex);
      var chatMode = player.getData("skyhighheroes:dyn/chat_mode");
      systemMessage(player, modules[messagingIndexes[chatMode]].chatModeInfo);
      modules[messagingIndexes[chatMode]].chatInfo(player, manager);
    };
  };
  function switchChats(player, manager, chat) {
    var chatMode = player.getData("skyhighheroes:dyn/chat_mode");
    modules[messagingIndexes[chatMode]].chatInfo(player, manager, chat);
  };
  function systemInfo(entity) {
    var modulesMessage = (moduleNames.length > 1) ? "<n>Loaded " + moduleNames.length + " modules: " : "<n>Loaded " + moduleNames.length + " module: ";
    moduleNames.forEach(moduleName => {
      if (moduleNames.indexOf(moduleName) == 0) {
        modulesMessage = modulesMessage + ((isModuleDisabled(entity, moduleName))?"<eh>":"<nh>") + moduleName;
      } else {
        modulesMessage = modulesMessage + ((isModuleDisabled(entity, moduleName))?"<n>, <eh>":"<n>, <nh>") + moduleName;
      };
    });
    systemMessage(entity, "<n>TranserOS");
    systemMessage(entity, modulesMessage);
    systemMessage(entity, "<n>computerID: <nh>" + entity.getWornChestplate().nbt().getString("computerID"));
  };
  function status(entity) {
    var date = new Date();
    if (typeof human === "string") {
      systemMessage(entity, "<n>Hello <nh>" + human + "<n>!");
    } else {
      systemMessage(entity, "<n>Hello <nh>" + entity.getName() + "<n>!");
    };
    systemMessage(entity, "<n>It is <nh>" + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    systemMessage(entity, "<n>The current time is <nh>" + date.getHours() + ":" + ((date.getMinutes() > 9) ? date.getMinutes() : "0"+date.getMinutes()));
    systemMessage(entity, "<n>Your current location is<nh> " + entity.posX().toFixed(0) + "<n>, <nh>" + entity.posY().toFixed(0) + "<n>, <nh>" + entity.posZ().toFixed(0));
    systemMessage(entity, "<n>You are in <nh>" + entity.world().getLocation(entity.pos()).biome() + " <n>biome");
    systemMessage(entity, "<n>Do <nh>!help<n> for available commands!");
  };
  return {
    /**
     * Power stuff (I hate that I had to do it this way)
     * @param {JSHero} hero - Required
     **/
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
    /**
     * Basic keybinds
     * @param {JSHero} hero - Required
     **/
    keyBinds: (hero) => {
      hero.addKeyBind("SHAPE_SHIFT", "Send message/Enter command", 4);
      hero.addKeyBindFunc("CYCLE_CHATS", (player, manager) => cycleChats(player, manager), "Cycle chats", 3);
      hero.addKeyBindFunc("CYCLE_CHAT_MODES", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 3);
    },
    /**
     * EM wave change stuff
     * @param {JSHero} hero - Required
     **/
    initEMWaveChange: (hero) => {
      hero.addKeyBindFunc("CYCLE_CHATS_EM", (player, manager) => cycleChats(player, manager), "Cycle chats", 2);
      hero.addKeyBindFunc("CYCLE_CHAT_MODES_EM", (player, manager) => cycleChatModes(player, manager), "Cycle chat modes", 2);
      if (emBeingIndex > -1) {
        modules[emBeingIndex].keyBinds(hero);
      };
      if (emBeingIndex > -1 && modules[emBeingIndex].hasOwnProperty("canAim")) {
        hero.supplyFunction("canAim", entity => modules[emBeingIndex].canAim(entity));
      };
      if (waveChangeIndex > -1) {
        modules[waveChangeIndex].keyBinds(hero);
        modules[waveChangeIndex].initDamageProfiles(hero);
        modules[waveChangeIndex].initProfiles(hero);
      };
      if (waveChangeIndex > -1 && modules[waveChangeIndex].hasOwnProperty("initEquipment")) {
        modules[waveChangeIndex].initEquipment(hero);
      };
      if (waveChangeIndex > -1 && modules[waveChangeIndex].hasOwnProperty("initSounds")) {
        modules[waveChangeIndex].initSounds(hero);
      };
    },
    /**
     * Property stuff
     * @param {JSEntity} entity - Required
     * @param {string} property - Required
     * @returns property
     **/
    getProperty: function (entity, property) {
      return ((waveChangeIndex == -1) ? null : ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].properties(entity, property)));
    },
    /**
     * Property stuff
     * @param {JSEntity} entity - Required
     * @param {string} permission - Required
     * @returns permission
     **/
    getPermission: function (entity, permission) {
      return ((waveChangeIndex == -1) ? null : ((!modules[waveChangeIndex].hasOwnProperty("permissions") && isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].permissions(entity, permission)));
    },
    /**
     * Tier override stuff
     * @param {JSEntity} entity - Required
     * @returns tier
     **/
    getTierOverride: function (entity) {
      return ((waveChangeIndex == -1) ? basicTierOverride(entity) : ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? basicTierOverride(entity) : modules[waveChangeIndex].tierOverride(entity)));
    },
    /**
     * Attribute profile stuff
     * @param {JSEntity} entity - Required
     * @returns attribute profile
     **/
    getAttributeProfile: function (entity) {
      return ((waveChangeIndex == -1) ? null : ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].attributeProfiles(entity)));
    },
    /**
     * Damage profile stuff
     * @param {JSEntity} entity - Required
     * @returns damage profile
     **/
    getDamageProfile: function (entity) {
      return ((waveChangeIndex == -1) ? null : ((isModuleDisabled(entity, modules[waveChangeIndex].name)) ? null : modules[waveChangeIndex].damageProfiles(entity)));
    },
    /**
     * Wave calling profile
     * @param {JSHero} hero - Required
     **/
    profileWave: function (hero) {
      hero.addAttributeProfile("WAVE_CALLING", (profile) => {
        profile.addAttribute("BASE_SPEED", -1.0, 1);
        profile.addAttribute("SPRINT_SPEED", -1.0, 1);
        profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
        profile.addAttribute("JUMP_HEIGHT", -2.0, 1);
        profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
      });
      if (waveIndex > -1) {
        modules[waveIndex].otherProfile(hero);
        modules[waveIndex].selfProfile(hero);
      };
    },
    /**
     * Sets wave calling profile
     * @param {JSEntity} entity - Required
     * @returns Profile for wave calling
     **/
    getWaveProfile: function (entity) {
      return ((entity.getData("skyhighheroes:dyn/calling_timer") > 0) ? "WAVE_CALLING" : null);
    },
    /**
     * Keybind enabled stuff for em
     * @param {JSEntity} entity - Required
     * @param {string} keyBind - Required
     **/
    isKeyBindEnabled: function (entity, keyBind) {
      return ((emBeingIndex == -1) ? false : ((isModuleDisabled(entity, modules[emBeingIndex].name)) ? false : modules[emBeingIndex].isKeyBindEnabled(entity, keyBind))) || ((waveChangeIndex == -1) ? false : (((entity.getDataOrDefault("skyhighheroes:dyn/wave_changing_timer", 0.0) < 1) || isModuleDisabled(entity, modules[waveChangeIndex].name)) ? false : modules[waveChangeIndex].isKeyBindEnabled(entity, keyBind)));
    },
    /**
     * Modifier enabled stuff for em
     * @param {JSEntity} entity - Required
     * @param {string} modifier - Required
     **/
    isModifierEnabled: function (entity, modifier) {
      return ((emBeingIndex == -1) ? false : ((isModuleDisabled(entity, modules[emBeingIndex].name)) ? false : modules[emBeingIndex].isModifierEnabled(entity, modifier))) || ((waveChangeIndex == -1) ? false : (((entity.getDataOrDefault("skyhighheroes:dyn/wave_changing_timer", 0.0) < 1) || isModuleDisabled(entity, modules[waveChangeIndex].name)) ? false : modules[waveChangeIndex].isModifierEnabled(entity, modifier)));
    },
    /**
     * Handles all transer stuff
     * @param {JSEntity} entity - Required
     * @param {JSDataManager} manager - Required
     **/
    systemHandler: (entity, manager) => {
      if (!entity.getData("skyhighheroes:dyn/system_init")) {
        asssignTranser(entity, manager, assignedSatellite);
        status(entity);
        manager.setData(entity, "skyhighheroes:dyn/system_init", true);
        manager.setData(entity, "skyhighheroes:dyn/primary_piece", primaryPiece);
      };
      if (typeof entity.getData("fiskheroes:disguise") === "string") {
        if (!(entity.getData("fiskheroes:disguise") == waveChange || entity.getData("fiskheroes:disguise") == human)) {
          if (entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
            manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
            manager.setData(entity, "fiskheroes:disguise", waveChange);
          } else {
            manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
            manager.setData(entity, "fiskheroes:disguise", null);
            if (typeof human === "string") {
              manager.setData(entity, "fiskheroes:disguise", human);
            };
          };
          manager.setData(entity, "fiskheroes:shape_shifting_to", null);
          manager.setData(entity, "fiskheroes:shape_shifting_from", null);
          manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
          var entry = entity.getData("skyhighheroes:dyn/entry");
          if (entry.startsWith("!")) {
            manager.setData(entity, "skyhighheroes:dyn/entry", entry.substring(1));
            var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
            switch (args[0]) {
              case "systemInfo":
                systemInfo(entity);
                break;
              case "status":
                status(entity);
                break;
              case "help":
                systemMessage(entity, "<n>Available commands:");
                commandIndexes.forEach(index => {
                  var module = modules[index];
                  if (!isModuleDisabled(entity, module.name)) {
                    systemMessage(entity, module.helpMessage);
                  };
                });
                systemMessage(entity, "<n>!status <nh>-<n> Shows your current status");
                systemMessage(entity, "<n>!systemInfo <nh>-<n> Shows your system info");
                systemMessage(entity, "<n>!help <nh>-<n> Shows this list");
                break;
              case "disable":
                disableModule(entity, manager, moduleNames, args[1]);
                break;
              case "enable":
                enableModule(entity, manager, moduleNames, args[1]);
                break;
              case "chatMode":
                switchChatModes(entity, manager, args[1]);
                break;
              case "msg":
                switchChats(entity, manager, args[1]);
                break;
              default:
                var index = commands.indexOf(args[0]);
                if (index > -1) {
                  var module = modules[commandIndexes[index]];
                  if (!isModuleDisabled(entity, module.name)) {
                    module.commandHandler(entity, manager, args);
                  } else {
                    systemMessage(entity, "<e>Module <eh>" + module.name +"<e> is disabled!");
                  };
                } else {
                  systemMessage(entity, "<e>Unknown command! Try <eh>!help<e> for a list of commands!");
                };
                break;
            };
          } else {
            modules[messagingIndexes[entity.getData("skyhighheroes:dyn/chat_mode")]].messageHandler(entity);
          };
        };
      };
      if (waveIndex > -1) {
        if (PackLoader.getSide() == "SERVER") {
          modules[waveIndex].waveCalling(entity, manager);
        };
      };
      if (typeof human === "string" && entity.getData("skyhighheroes:dyn/wave_changing_timer") < 1) {
        manager.setData(entity, "fiskheroes:disguise", human);
      };
      if (typeof waveChange === "string" && entity.getData("skyhighheroes:dyn/wave_changing_timer") == 1) {
        manager.setData(entity, "fiskheroes:disguise", waveChange);
      };
    },
    waveHandler: function (entity, hero) {
      if (waveIndex > -1) {
        if (PackLoader.getSide() == "SERVER") {
          modules[waveIndex].waveHandler(entity, hero);
        };
      };
    },
    /**
     * Handles all em stuff
     * @param {JSEntity} entity - Required
     * @param {JSDataManager} manager - Required
     **/
    emWaveHandler: (entity, manager) => {
      if (waveChangeIndex > -1 && !isModuleDisabled(entity, modules[waveChangeIndex].name)) {
        modules[waveChangeIndex].tickHandler(entity, manager);
      };
      if (emBeingIndex > -1 && !isModuleDisabled(entity, modules[emBeingIndex].name)) {
        modules[emBeingIndex].tickHandler(entity, manager);
      };
    }
  };
};