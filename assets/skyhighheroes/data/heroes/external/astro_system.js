//If I see anyone steal this, I will be very mad as I have spent a lot of time working on this to get it working well
//So please don't steal this, it will look very bad on you

regex = /((<ob>))|(<n>)|(<nh>)|(<s>)|(<sh>)|(<e>)|(<eh>)|(<r>)/gm;

var formatting = {
  "<ob>": "\u00A7k",
  "<n>": "\u00A7b",
  "<nh>": "\u00A7a",
  "<s>": "\u00A7a",
  "<sh>": "\u00A7e",
  "<e>": "\u00A7c",
  "<eh>": "\u00A76",
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

function asssignID(entity, manager, robotName, color) {
  if (!entity.getWornChestplate().nbt().hasKey("robotID")) {
    manager.setString(entity.getWornChestplate().nbt(), "robotID", robotName+"-"+color);
  };
};

/**
 * Checks if an entity is wearing a robot
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is wearing a robot
 **/
function isRobot(entity) {
  return entity.getWornChestplate().nbt().hasKey("robotID");
};

/**
 * Gets the satellite a robot is assigned to
 * @param {JSEntity} entity - Entity getting checked
 * @returns The satellite a robot is assigned to
 **/
function getID(entity) {
  return entity.getWornChestplate().nbt().getString("robotID");
};

/**
 * Checks if an entity has a device that is a computer
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity has a device that is a computer
 **/
function hasComputer(entity) {
  return entity.getWornChestplate().nbt().hasKey("satellite") || entity.getWornChestplate().nbt().hasKey("robotID");
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
 * "<r>": "\u00A7r"
 * ```
 * @param {JSPlayer} player - Entity recieving message
 * @param {string} message - Message content
 **/
function systemMessage(player, message) {
  var id = getID(player);
  var color = id.split("-")[1];
  chatMessage(player, formatSystem("\u00A7" + color + "SYSTEM<r>> " + message));
};
/**
 * Sends message in group format
 * @param {string} message - Entity recieving message
 **/
function logMessage(message) {
  PackLoader.print(message);
};

/**
 * Initializes robot system
 * @param {object} moduleList - robot system modules
 * @param {string} robotName - Required, you'll be happy that is a thing or else debugging is painful
 * @param {string} satellite - Required, or other robots will not recognize this robot as a robot
 **/
function initRobot(moduleList, robotName, color) {
  var robotInstance = this;
  //Type 1 - commands (can have data management)
  var type1Specs = ["command", "commandHandler", "helpMessage"];
  //Type 2 - messaging only
  var type2Specs = ["messageHandler", "chatModeInfo", "chatInfo"];
  //Type 3 - commands messaging and data management
  var type3Specs = ["command", "messageHandler", "commandHandler", "chatModeInfo", "chatInfo", "helpMessage"];
  //Type 6 - Robot module
  var type5Specs = ["isModifierEnabled", "isModifierDisabled", "powers"];
  //Type 6 - Robot module
  var type6Specs = ["keyBinds", "isKeyBindEnabled", "isKeyBindDisabled", "isModifierEnabled", "isModifierDisabled", "powers"];
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
  /** @var modifierIndexes - Indexes of power modules */
  var modifierIndexes = [];
  /** @var keyBindIndexes - Indexes of power modules */
  var keyBindIndexes = [];
  /** @var powerArray - Array of powers to add */
  var powerArray = ["skyhighheroes:astro_system", "skyhighheroes:astro_body"];
  var hasError = false;
  var errors = [];
  logMessage("Attempting to initialize " + ((moduleList.length > 1) ? moduleList.length + " modules" : moduleList.length + " module") + " on robot " + robotName + "!");
  moduleList.forEach(module => {
    if (module.hasOwnProperty("initModule")) {
      var moduleInit = module.initModule(robotInstance);
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
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on robot " + robotName + "!");
            };
            hasError = false;
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
              messagingIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on robot " + robotName + "!");
            };
            hasError = false;
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
              commandIndexes.push(modules.length-1);
              messagingIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on robot " + robotName + "!");
            };
            hasError = false;
            break;
          case 5:
            type5Specs.forEach(spec => {
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
              modifierIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on robot " + robotName + "!");
            };
            hasError = false;
            break;
          case 6:
            type6Specs.forEach(spec => {
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
              keyBindIndexes.push(modules.length-1);
              modifierIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on robot " + robotName + "!");
            };
            hasError = false;
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
  logMessage("Successfully initialized " + modules.length + " out of " + ((moduleList.length > 1) ? moduleList.length + " modules" : moduleList.length + " module") + " on robot " + robotName + "!");
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
  function systemInfo(entity) {
    var modulesMessage = (moduleNames.length > 1) ? "<n>Loaded " + moduleNames.length + " modules: " : "<n>Loaded " + moduleNames.length + " module: ";
    moduleNames.forEach(moduleName => {
      if (moduleNames.indexOf(moduleName) == 0) {
        modulesMessage = modulesMessage + ((isModuleDisabled(entity, moduleName))?"<eh>":"<nh>") + moduleName;
      } else {
        modulesMessage = modulesMessage + ((isModuleDisabled(entity, moduleName))?"<n>, <eh>":"<n>, <nh>") + moduleName;
      };
    });
    systemMessage(entity, "<n>robotOS");
    systemMessage(entity, modulesMessage);
  };
  function status(entity) {
    var date = new Date();
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
      hero.addKeyBind("SHAPE_SHIFT", "Send message/Enter command", 1);
      modules.forEach(module => {
        if (module.hasOwnProperty("keyBinds")) {
          module.keyBinds(hero);
        };
      });
    },
    /**
     * Keybind enabled stuff for em
     * @param {JSEntity} entity - Required
     * @param {string} keyBind - Required
     **/
    isKeyBindEnabled: function (entity, keyBind) {
      if (keyBindIndexes.length == 1) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind));
      };
      if (keyBindIndexes.length == 2) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[1]].name)) ? modules[keyBindIndexes[1]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind));
      };
      if (keyBindIndexes.length == 3) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[1]].name)) ? modules[keyBindIndexes[1]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[2]].name)) ? modules[keyBindIndexes[2]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind));
      };
      if (keyBindIndexes.length == 4) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[1]].name)) ? modules[keyBindIndexes[1]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[2]].name)) ? modules[keyBindIndexes[2]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[3]].name)) ? modules[keyBindIndexes[3]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind));
      };
      if (keyBindIndexes.length == 5) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[1]].name)) ? modules[keyBindIndexes[1]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[2]].name)) ? modules[keyBindIndexes[2]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[3]].name)) ? modules[keyBindIndexes[3]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[4]].name)) ? modules[keyBindIndexes[4]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind));
      };
      if (keyBindIndexes.length == 6) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[1]].name)) ? modules[keyBindIndexes[1]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[2]].name)) ? modules[keyBindIndexes[2]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[3]].name)) ? modules[keyBindIndexes[3]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[4]].name)) ? modules[keyBindIndexes[4]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[5]].name)) ? modules[keyBindIndexes[5]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind));
      };
      if (keyBindIndexes.length == 7) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[1]].name)) ? modules[keyBindIndexes[1]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[2]].name)) ? modules[keyBindIndexes[2]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[3]].name)) ? modules[keyBindIndexes[3]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[4]].name)) ? modules[keyBindIndexes[4]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[5]].name)) ? modules[keyBindIndexes[5]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[6]].name)) ? modules[keyBindIndexes[6]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind));
      };
      if (keyBindIndexes.length == 8) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[1]].name)) ? modules[keyBindIndexes[1]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[2]].name)) ? modules[keyBindIndexes[2]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[3]].name)) ? modules[keyBindIndexes[3]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[4]].name)) ? modules[keyBindIndexes[4]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[5]].name)) ? modules[keyBindIndexes[5]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[6]].name)) ? modules[keyBindIndexes[6]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[7]].name)) ? modules[keyBindIndexes[7]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind));
      };
      if (keyBindIndexes.length == 9) {
        return ((isModuleDisabled(entity, modules[keyBindIndexes[0]].name)) ? modules[keyBindIndexes[0]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[1]].name)) ? modules[keyBindIndexes[1]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[2]].name)) ? modules[keyBindIndexes[2]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[3]].name)) ? modules[keyBindIndexes[3]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[4]].name)) ? modules[keyBindIndexes[4]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[5]].name)) ? modules[keyBindIndexes[5]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[6]].name)) ? modules[keyBindIndexes[6]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[7]].name)) ? modules[keyBindIndexes[7]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind)) || ((isModuleDisabled(entity, modules[keyBindIndexes[8]].name)) ? modules[keyBindIndexes[8]].isKeyBindDisabled(entity, keyBind) : modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind));
      };
    },
    /**
     * Modifier enabled stuff for em
     * @param {JSEntity} entity - Required
     * @param {string} modifier - Required
     **/
    isModifierEnabled: function (entity, modifier) {
      if (modifierIndexes.length == 1) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier));
      };
      if (modifierIndexes.length == 2) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[1]].name)) ? modules[modifierIndexes[1]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[1]].isModifierEnabled(entity, modifier));
      };
      if (modifierIndexes.length == 3) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[1]].name)) ? modules[modifierIndexes[1]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[1]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[2]].name)) ? modules[modifierIndexes[2]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[2]].isModifierEnabled(entity, modifier));
      };
      if (modifierIndexes.length == 4) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[1]].name)) ? modules[modifierIndexes[1]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[1]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[2]].name)) ? modules[modifierIndexes[2]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[2]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[3]].name)) ? modules[modifierIndexes[3]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[3]].isModifierEnabled(entity, modifier));
      };
      if (modifierIndexes.length == 5) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[1]].name)) ? modules[modifierIndexes[1]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[1]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[2]].name)) ? modules[modifierIndexes[2]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[2]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[3]].name)) ? modules[modifierIndexes[3]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[3]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[4]].name)) ? modules[modifierIndexes[4]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[4]].isModifierEnabled(entity, modifier));
      };
      if (modifierIndexes.length == 6) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[1]].name)) ? modules[modifierIndexes[1]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[1]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[2]].name)) ? modules[modifierIndexes[2]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[2]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[3]].name)) ? modules[modifierIndexes[3]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[3]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[4]].name)) ? modules[modifierIndexes[4]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[4]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[5]].name)) ? modules[modifierIndexes[5]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[5]].isModifierEnabled(entity, modifier));
      };
      if (modifierIndexes.length == 7) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[1]].name)) ? modules[modifierIndexes[1]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[1]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[2]].name)) ? modules[modifierIndexes[2]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[2]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[3]].name)) ? modules[modifierIndexes[3]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[3]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[4]].name)) ? modules[modifierIndexes[4]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[4]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[5]].name)) ? modules[modifierIndexes[5]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[5]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[6]].name)) ? modules[modifierIndexes[6]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[6]].isModifierEnabled(entity, modifier));
      };
      if (modifierIndexes.length == 8) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[1]].name)) ? modules[modifierIndexes[1]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[1]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[2]].name)) ? modules[modifierIndexes[2]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[2]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[3]].name)) ? modules[modifierIndexes[3]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[3]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[4]].name)) ? modules[modifierIndexes[4]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[4]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[5]].name)) ? modules[modifierIndexes[5]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[5]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[6]].name)) ? modules[modifierIndexes[6]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[6]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[7]].name)) ? modules[modifierIndexes[7]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[7]].isModifierEnabled(entity, modifier));
      };
      if (modifierIndexes.length == 9) {
        return ((isModuleDisabled(entity, modules[modifierIndexes[0]].name)) ? modules[modifierIndexes[0]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[0]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[1]].name)) ? modules[modifierIndexes[1]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[1]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[2]].name)) ? modules[modifierIndexes[2]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[2]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[3]].name)) ? modules[modifierIndexes[3]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[3]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[4]].name)) ? modules[modifierIndexes[4]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[4]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[5]].name)) ? modules[modifierIndexes[5]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[5]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[6]].name)) ? modules[modifierIndexes[6]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[6]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[7]].name)) ? modules[modifierIndexes[7]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[7]].isModifierEnabled(entity, modifier)) || ((isModuleDisabled(entity, modules[modifierIndexes[8]].name)) ? modules[modifierIndexes[8]].isModifierDisabled(entity, modifier) : modules[modifierIndexes[8]].isModifierEnabled(entity, modifier));
      };
    },
    /**
     * Handles all robot stuff
     * @param {JSEntity} entity - Required
     * @param {JSDataManager} manager - Required
     **/
    systemHandler: (entity, manager) => {
      asssignID(entity, manager, robotName, color);
      if (!entity.getData("skyhighheroes:dyn/system_init")) {
        status(entity);
        manager.setData(entity, "skyhighheroes:dyn/system_init", true);
      };
      if (typeof entity.getData("fiskheroes:disguise") === "string") {
        if (!(entity.getData("fiskheroes:disguise") == robotName)) {
          manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
          manager.setData(entity, "fiskheroes:disguise", robotName);
          manager.setData(entity, "fiskheroes:shape_shifting_to", null);
          manager.setData(entity, "fiskheroes:shape_shifting_from", null);
          manager.setData(entity, "fiskheroes:shape_shift_timer", 0);
          var entry = entity.getData("skyhighheroes:dyn/entry");
          if (entry.startsWith("!")) {
            manager.setData(entity, "skyhighheroes:dyn/entry", entry.substring(1));
            var args = entity.getData("skyhighheroes:dyn/entry").split(" ");
            if (args[0] == "systemInfo") {
              systemInfo(entity);
            } else if (args[0] == "status") {
              status(entity);
            } else if (args[0] == "help") {
              systemMessage(entity, "<n>Available commands:");
              commandIndexes.forEach(index => {
                var module = modules[index];
                if (!isModuleDisabled(entity, module.name)) {
                  systemMessage(entity, module.helpMessage);
                };
              });
              systemMessage(entity, "<n>!status <nh>-<n> Shows your current status");
              systemMessage(entity, "<n>!help <nh>-<n> Shows this list");
            } else if (args[0] == "disable") {
              disableModule(entity, manager, moduleNames, args[1]);
            } else if (args[0] == "enable") {
              enableModule(entity, manager, moduleNames, args[1]);
            } else {
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
            };
          } else {
            modules[messagingIndexes[entity.getData("skyhighheroes:dyn/chat_mode")]].messageHandler(entity);
          };
        };
      };
      manager.setData(entity, "fiskheroes:disguise", robotName);
      var x = entity.posX();
      var y = entity.posY();
      var z = entity.posZ();
      if (entity.world().getDimension() == 0 && entity.posY() >= 4000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
        manager.setData(entity, "fiskheroes:teleport_dest", manager.newCoords(x, y, z, 2595));
        manager.setData(entity, "fiskheroes:teleport_delay", 6);
      };
      if (entity.world().getDimension() == 2595 && entity.posY() >= 1000 && (entity.rotPitch() <= -87.5) && entity.getData("fiskheroes:flight_boost_timer") == 1) {
        manager.setData(entity, "fiskheroes:teleport_dest", new DimensionalCoords(x, y, z, 0));
        manager.setData(entity, "fiskheroes:teleport_delay", 6);
      };
      var t = entity.getData("skyhighheroes:dyn/superhero_boosting_landing_ticks");
      if (t == 0 && !entity.isSprinting() && !entity.isOnGround() && entity.motionY() < -1.25 && entity.getData("fiskheroes:flight_boost_timer") > 0 && entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() && entity.world().blockAt(entity.pos()).name() == "minecraft:air") {
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", t = 12);
      } else if (t > 0) {
        manager.setData(entity, "skyhighheroes:dyn/superhero_boosting_landing_ticks", --t);
      };
      manager.incrementData(entity, "skyhighheroes:dyn/superhero_boosting_landing_timer", 2, 8, t > 0);
      var pain = (entity.rotPitch() > 12.5 && entity.motionY() < -0.075 && entity.motionY() > -1.25 && (entity.motionZ() > 0.125 || entity.motionZ() < -0.125 || entity.motionX() > 0.125 || entity.motionX() < -0.125)) && !entity.isSprinting() && !entity.isOnGround() && entity.getData("fiskheroes:flight_timer") > 0 && (entity.world().blockAt(entity.pos().add(0, -1, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -2, 0)).isSolid() || entity.world().blockAt(entity.pos().add(0, -3, 0)).isSolid()) && entity.getData("fiskheroes:flight_boost_timer") == 0 && entity.world().blockAt(entity.pos()).name() == "minecraft:air";
      manager.incrementData(entity, "skyhighheroes:dyn/superhero_landing_timer", 10, 10, pain);
    }
  };
};