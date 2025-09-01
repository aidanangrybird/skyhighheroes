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

var colorDamage = {
  //Base
  "9": "12",
  //Blue
  "1": "4",
  //Green
  "2": "2",
  //Orange
  "6": "14",
  //Purple
  "5": "5",
  //Red
  "4": "1",
  //Yellow
  "e": "11"
};

var hexColors = {
  //Base
  "C-9": "0x00AEFF",
  //Blue
  "CB-1": "0x0000FF",
  //Green
  "CG-2": "0x00FF00",
  //Orange
  "CO-6": "0xFF9400",
  //Purple
  "CP-5": "0x7C00FF",
  //Red
  "CR-4": "0xFF0000",
  //Yellow
  "CY-e": "0xFFFF00"
};

modelRegex = /[a-z\s]/gm;

aliasRegex = /[\s]/gm;

/**
 * Gets colorDamage from color
 * @param {string} input - Color
 * @returns colorDamage
 **/
function getColorDamage(input) {
  var output = "0";
  if (colorDamage.hasOwnProperty(input)) {
    output = colorDamage[input];
  };
  return output;
};

/**
 * Formats name to short name
 * @param {string} input - Message to format
 * @returns Formatted message
 **/
function formatModel(input) {
  output = input.replace(modelRegex, function(thing) {
    return "";
  });
  return output;
};

/**
 * Formats name to alias format
 * @param {string} input - Message to format
 * @returns Formatted message
 **/
function formatAlias(input) {
  input = input.toLowerCase();
  output = input.replace(aliasRegex, function(thing) {
    return "_";
  });
  return output;
};

function assignID(entity, manager) {
  if (!entity.getWornHelmet().nbt().hasKey("computerID")) {
    if (PackLoader.getSide() == "SERVER") {
      var computerID = Math.random().toFixed(8).toString().substring(2);
      manager.setString(entity.getWornHelmet().nbt(), "computerID", computerID);
    };
  };
};

/**
 * Checks if an entity is cybernetic
 * @param {JSEntity} entity - Entity getting checked
 * @returns If the entity is cybernetic
 **/
function hasCyberneticBody(entity) {
  return entity.getWornHelmet().nbt().hasKey("cyberModelID") && entity.getWornHelmet().nbt().getString("cyberAliasName");
};

/**
 * Gets the Cyber ID
 * @param {JSEntity} entity - Entity getting checked
 * @returns The Cyber ID
 **/
function getModelID(entity) {
  return entity.getWornHelmet().nbt().getString("cyberModelID");
};
/**
 * Gets the Cyber name
 * @param {JSEntity} entity - Entity getting checked
 * @returns The Cyber alias
 **/
function getAliasName(entity) {
  return entity.getWornHelmet().nbt().getString("cyberAliasName");
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
 * Number degree to a cardinal direction
 * @param {JSVector3} base - Base vector
 * @param {JSVector3} other - Vector to measure to
 * @returns Cardinal direction
 **/
function angleToDirection(angle) {
  var direction = angle.toFixed(0);
  if (((angle >= 0) && (angle <= 11.25)) || ((angle >= 348.75) && (angle <= 360))) {
    direction = "N";
  };
  if ((angle <= 33.75) && (angle >= 11.25)) {
    direction = "NNE";
  };
  if ((angle <= 56.25) && (angle >= 33.75)) {
    direction = "NE";
  };
  if ((angle <= 78.75) && (angle >= 56.25)) {
    direction = "ENE";
  };
  if ((angle <= 101.25) && (angle >= 78.75)) {
    direction = "E";
  };
  if ((angle <= 123.75) && (angle >= 101.25)) {
    direction = "ESE";
  };
  if ((angle <= 146.25) && (angle >= 123.75)) {
    direction = "SE";
  };
  if ((angle <= 168.75) && (angle >= 146.25)) {
    direction = "SSE";
  };
  if ((angle <= 191.25) && (angle >= 168.75)) {
    direction = "S";
  };
  if ((angle <= 213.75) && (angle >= 191.25)) {
    direction = "SSW";
  };
  if ((angle <= 236.25) && (angle >= 213.75)) {
    direction = "SW";
  };
  if ((angle <= 258.75) && (angle >= 236.25)) {
    direction = "WSW";
  };
  if ((angle <= 281.25) && (angle >= 258.75)) {
    direction = "W";
  };
  if ((angle <= 303.75) && (angle >= 281.25)) {
    direction = "WNW";
  };
  if ((angle <= 326.25) && (angle >= 303.75)) {
    direction = "NW";
  };
  if ((angle <= 348.75) && (angle >= 326.25)) {
    direction = "NNW";
  };
  return direction;
};
/**
 * Gets distance from one vector to another
 * @param {JSVector3} base - Base vector
 * @param {JSVector3} other - Vector to measure to
 * @returns Distance
 **/
function distance(base, other) {
  var distance = base.multiply(1, 0, 1).distanceTo(other.multiply(1, 0, 1)).toFixed(0);
  return distance;
};

/**
 * Gets distance from one vector to another
 * @param {JSVector3} base - Base vector
 * @param {JSVector3} other - Vector to measure to
 * @returns Distance
 **/
function elevation(base, other) {
  var elevation = other.y() - base.y();
  return elevation;
};

/**
 * Gets direction from one vector to another
 * @param {JSVector3} base - Base vector
 * @param {JSVector3} other - Vector to measure to
 * @returns Direction
 **/
function direction(base, other) {
  var angle = (((Math.atan2(-1*(other.z()-base.z()), -1*(other.x()-base.x())) * 180) / Math.PI) + 270) % 360;
  var direction = angleToDirection(angle);
  return direction;
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
  var groupList = entity.getWornHelmet().nbt().getTagList("groups");
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
  var groupList = entity.getWornHelmet().nbt().getTagList("groups");
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
 * Checks if a module is disabled
 * @param {JSEntity} entity - Player getting checked
 * @param {string} moduleName - Module being checked if disabled
 * @returns If module is disabled
 **/
function isModuleDisabled(entity, moduleName) {
  var disabledModules = entity.getWornHelmet().nbt().getStringList("disabledModules");
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
 * @param {JSEntity} entity - Required
 * @param {string} message - Message to be shown to player
 **/
function chatMessage(entity, message) {
  if (PackLoader.getSide() == "SERVER") {
    entity.as("PLAYER").addChatMessage(message);
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
 * @param {JSEntity} entity - Entity recieving message
 * @param {string} message - Message content
 **/
function systemMessage(entity, message) {
  var id = getModelID(entity);
  var color = id.split("-")[1];
  chatMessage(entity, formatSystem("\u00A7" + color + "\u00A7lcyberOS" + "<r>> " + message));
};
/**
 * Sends log message
 * @param {string} message - Log message
 **/
function logMessage(message) {
  PackLoader.print("skyhighheroes: " + message);
};

/**
 * Sends log message
 * @param {object} module - Reference 'this' module
 * @param {JSEntity} entity - Entity recieving message
 * @param {string} message - Message content
 **/
function moduleMessage(module, entity, message) {
  var id = getModelID(entity);
  var color = id.split("-")[1];
  var messageName = "\u00A7lcyberOS";
  if (module.hasOwnProperty("moduleMessageName")) {
    messageName = module.moduleMessageName
  };
  chatMessage(entity, formatSystem("\u00A7" + color + messageName + "<r>> " + message));
};

/**
 * Clamp
 * @param value - input value
 * @param min - minimum value
 * @param max - maximum value
 **/
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
};

/**
 * Initializes cyber system
 * @param {object} moduleList - cyber system modules
 * @param {string} name - Name of the cybernetic being
 * @param {string} colorCode - Color to set system thing to
 **/
function initSystem(moduleList, name, colorCode) {
  var cyberInstance = this;
  //Type 1 - commands (can have data management)
  /** @var type1Specs - Type 1 Specs */
  var type1Specs = ["command", "commandHandler", "helpMessage"];
  //Type 2 - messaging only
  /** @var type2Specs - Type 2 Specs */
  var type2Specs = ["messageHandler", "chatModeInfo", "chatInfo", "modeID"];
  //Type 3 - commands messaging and data management
  /** @var type3Specs - Type 3 Specs */
  var type3Specs = ["command", "messageHandler", "commandHandler", "chatModeInfo", "chatInfo", "helpMessage", "modeID"];
  //Type 11 - commands (can have data management) with disabled thing
  /** @var type11Specs - Type 11 Specs */
  var type11Specs = ["command", "commandHandler", "helpMessage", "whenDisabled"];
  //Type 12 - cyber module
  /** @var type12Specs - Type 12 Specs */
  var type12Specs = ["command", "commandHandler", "helpMessage", "isModifierEnabled", "whenDisabled"];
  //Type 13 - cyber module
  /** @var type13Specs - Type 13 Specs */
  var type13Specs = ["command", "commandHandler", "helpMessage", "keyBinds", "isKeyBindEnabled", "isModifierEnabled", "whenDisabled"];
  //Type 14 - cyber module
  /** @var type14Specs - Type 14 Specs */
  var type14Specs = ["command", "commandHandler", "helpMessage", "keyBinds", "isKeyBindEnabled", "isModifierEnabled", "initAttributeProfiles", "initDamageProfiles", "getAttributeProfile", "getDamageProfile", "whenDisabled"];
  /** @var modules - Array of modules */
  var modules = [];
  /** @var moduleNames - Module names */
  var moduleNames = [];
  /** @var cyberneticModules - Cyber module names */
  var cyberneticModules = [];
  /** @var normalModules - Normal module names */
  var normalModules = [];
  /** @var commands - Command prefixes */
  var commands = [];
  /** @var commandIndexes - Indexes of command handlers */
  var commandIndexes = [];
  /** @var messagingIndexes - Indexes of messaging handlers */
  var messagingIndexes = [];
  /** @var chatModes - Chat modes */
  var chatModes = [];
  /** @var modifierIndexes - Indexes of modifier capable modules */
  var modifierIndexes = [];
  /** @var keyBindIndexes - Indexes of keybind capable modules */
  var keyBindIndexes = [];
  /** @var attributeProfileIndexes - Indexes of attribute profile capable modules */
  var attributeProfileIndexes = [];
  /** @var damageProfileIndexes - Indexes of damage profile capable modules */
  var damageProfileIndexes = [];
  /** @var tickHandlerIndexes - Indexes of tick handler capable modules */
  var tickHandlerIndexes = [];
  /** @var onInitSystemIndexes - Indexes of tick handler capable modules */
  var onInitSystemIndexes = [];
  /** @var fightOrFlightIndexes - Indexes of fight or flight capable modules */
  var fightOrFlightIndexes = [];
  /** @var powerArray - Array of powers to add */
  var powerArray = [];
  /** @var cyberModelID - cyber model name */
  var cyberModelID = formatModel(name) + "-" + colorCode;
  /** @var cyberName - cyber name */
  var cyberName = name;
  /** @var color - Color */
  var color = colorCode;
  var hasError = false;
  var errors = [];
  logMessage("Attempting to initialize " + ((moduleList.length > 1) ? moduleList.length + " modules" : moduleList.length + " module") + " on cybernetic body " + cyberName + "!");
  moduleList.forEach(module => {
    if (module.hasOwnProperty("initModule")) {
      var moduleInit = module.initModule(cyberInstance);
      if ((moduleInit.hasOwnProperty("type")) ? typeof moduleInit.type === "number" : false) {
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
              normalModules.push(moduleInit.name);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on cybernetic body " + cyberName + "!");
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
              chatModes.push(moduleInit.modeID);
              messagingIndexes.push(modules.length-1);
              normalModules.push(moduleInit.name);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on cybernetic body " + cyberName + "!");
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
              chatModes.push(moduleInit.modeID);
              commandIndexes.push(modules.length-1);
              messagingIndexes.push(modules.length-1);
              normalModules.push(moduleInit.name);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on cybernetic body " + cyberName + "!");
            };
            hasError = false;
            break;
          case 11:
            type11Specs.forEach(spec => {
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
              cyberneticModules.push(moduleInit.name);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on cybernetic body " + cyberName + "!");
              if (moduleInit.hasOwnProperty("tickHandler")) {
                tickHandlerIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"tickHandler\"!");
              };
              if (moduleInit.hasOwnProperty("onInitSystem")) {
                onInitSystemIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"onInitSystem\"!");
              };
              if (moduleInit.hasOwnProperty("fightOrFlight")) {
                fightOrFlightIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"fightOrFlight\"!");
              };
            };
            hasError = false;
            break;
          case 12:
            type12Specs.forEach(spec => {
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
              cyberneticModules.push(moduleInit.name);
              modifierIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on cybernetic body " + cyberName + "!");
              if (moduleInit.hasOwnProperty("tickHandler")) {
                tickHandlerIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"tickHandler\"!");
              };
              if (moduleInit.hasOwnProperty("onInitSystem")) {
                onInitSystemIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"onInitSystem\"!");
              };
              if (moduleInit.hasOwnProperty("fightOrFlight")) {
                fightOrFlightIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"fightOrFlight\"!");
              };
            };
            hasError = false;
            break;
          case 13:
            type13Specs.forEach(spec => {
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
              cyberneticModules.push(moduleInit.name);
              keyBindIndexes.push(modules.length-1);
              modifierIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on cybernetic body " + cyberName + "!");
              if (moduleInit.hasOwnProperty("tickHandler")) {
                tickHandlerIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"tickHandler\"!");
              };
              if (moduleInit.hasOwnProperty("onInitSystem")) {
                onInitSystemIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"onInitSystem\"!");
              };
              if (moduleInit.hasOwnProperty("fightOrFlight")) {
                fightOrFlightIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"fightOrFlight\"!");
              };
            };
            hasError = false;
            break;
          case 14:
            type14Specs.forEach(spec => {
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
              cyberneticModules.push(moduleInit.name);
              attributeProfileIndexes.push(modules.length-1);
              damageProfileIndexes.push(modules.length-1);
              keyBindIndexes.push(modules.length-1);
              modifierIndexes.push(modules.length-1);
              logMessage("Module \"" + moduleInit.name + "\" was initialized successfully on cybernetic body " + cyberName + "!");
              if (moduleInit.hasOwnProperty("tickHandler")) {
                tickHandlerIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"tickHandler\"!");
              };
              if (moduleInit.hasOwnProperty("onInitSystem")) {
                onInitSystemIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"onInitSystem\"!");
              };
              if (moduleInit.hasOwnProperty("fightOrFlight")) {
                fightOrFlightIndexes.push(modules.length-1);
                logMessage("Module \"" + moduleInit.name + "\" has optional spec \"fightOrFlight\"!");
              };
            };
            hasError = false;
            break;
          default:
            logMessage("Module at position " + moduleList.indexOf(module) + " does not have a valid type value!");
        };
      } else {
        logMessage("Module at position " + moduleList.indexOf(module) + " does not have a valid type value!");
      };
    } else {
      logMessage("Module at position " + moduleList.indexOf(module) + " cannot be initialized!");
    };
  });
  logMessage("Successfully initialized " + modules.length + " out of " + ((moduleList.length > 1) ? moduleList.length + " modules" : moduleList.length + " module") + " on " + cyberName + "!");
  function switchChatModes(entity, manager, mode) {
    var modeIndex = chatModes.indexOf(mode);
    if (modeIndex > -1) {
      manager.setData(entity, "skyhighheroes:dyn/chat_mode", modeIndex);
      var chatMode = entity.getData("skyhighheroes:dyn/chat_mode");
      systemMessage(entity, modules[messagingIndexes[chatMode]].chatModeInfo);
      modules[messagingIndexes[chatMode]].chatInfo(entity, manager);
    };
  };
  function switchChats(entity, manager, chat) {
    var chatMode = entity.getData("skyhighheroes:dyn/chat_mode");
    modules[messagingIndexes[chatMode]].chatInfo(entity, manager, chat);
  };
  function systemInfo(entity) {
    var normalModulesMessage = (normalModules.length > 1) ? "<n>Loaded " + normalModules.length + " modules: " : "<n>Loaded " + normalModules.length + " module: ";
    normalModules.forEach(moduleName => {
      if (normalModules.indexOf(moduleName) == 0) {
        normalModulesMessage = normalModulesMessage + ((isModuleDisabled(entity, moduleName))?"<eh>":"<nh>") + moduleName;
      } else {
        normalModulesMessage = normalModulesMessage + ((isModuleDisabled(entity, moduleName))?"<n>, <eh>":"<n>, <nh>") + moduleName;
      };
    });
    var cyberneticModulesMessage = (cyberneticModules.length > 1) ? "<n>Loaded " + cyberneticModules.length + " cybernetic systems: " : "<n>Loaded " + cyberneticModules.length + " cyber system: ";
    cyberneticModules.forEach(moduleName => {
      if (cyberneticModules.indexOf(moduleName) == 0) {
        cyberneticModulesMessage = cyberneticModulesMessage + ((isModuleDisabled(entity, moduleName))?"<eh>":"<nh>") + moduleName;
      } else {
        cyberneticModulesMessage = cyberneticModulesMessage + ((isModuleDisabled(entity, moduleName))?"<n>, <eh>":"<n>, <nh>") + moduleName;
      };
    });
    systemMessage(entity, "<n>cyberOS");
    systemMessage(entity, normalModulesMessage);
    systemMessage(entity, cyberneticModulesMessage);
    systemMessage(entity, "<n>computerID: <nh>" + entity.getWornHelmet().nbt().getString("computerID"));
    systemMessage(entity, "<n>Model: <nh>" + getModelID(entity));
  };
  function status(entity) {
    var date = new Date();
    systemMessage(entity, "<n>Date: <nh>" + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    systemMessage(entity, "<n>Time: <nh>" + date.getHours() + ":" + ((date.getMinutes() > 9) ? date.getMinutes() : "0"+date.getMinutes()));
    systemMessage(entity, "<n>Current location: <nh>" + entity.posX().toFixed(0) + "<n>, <nh>" + entity.posY().toFixed(0) + "<n>, <nh>" + entity.posZ().toFixed(0));
    systemMessage(entity, "<n>Biome: <nh>" + entity.world().getLocation(entity.pos()).biome());
    systemMessage(entity, "<n>Do <nh>!help<n> for available commands!");
  };
  /**
   * Silently enables module
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   * @param {integer} moduleName - Name of module to enable
   **/
  function silentEnableModule(entity, manager, moduleName) {
    if (moduleNames.indexOf(moduleName) > -1) {
      if (!entity.getWornHelmet().nbt().hasKey("disabledModules")) {
      } else {
        var disabledModules = entity.getWornHelmet().nbt().getStringList("disabledModules");
        if (disabledModules.tagCount() == 0) {
        } else {
          var index = getStringArray(disabledModules).indexOf(moduleName);
          if (index < 0) {
          } else {
            manager.removeTag(disabledModules, index);
          };
        };
      };
    };
  };
  /**
   * Enables module
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   * @param {Array} moduleList - List of available module names
   * @param {integer} moduleName - Name of module to enable
   **/
  function enableModule(entity, manager, moduleName) {
    if (moduleNames.indexOf(moduleName) > -1) {
      if (!entity.getWornHelmet().nbt().hasKey("disabledModules")) {
        systemMessage(entity, "<e>You have no disabled modules to enable!");
      } else {
        var disabledModules = entity.getWornHelmet().nbt().getStringList("disabledModules");
        if (disabledModules.tagCount() == 0) {
          systemMessage(entity, "<e>You have no disabled modules to enable!");
        } else {
          var index = getStringArray(disabledModules).indexOf(moduleName);
          if (index < 0) {
            systemMessage(entity, "<e>Module <eh>" + moduleName + "<e> is already enabled!");
          } else {
            systemMessage(entity, "<s>Successfully enabled <sh>" + moduleName + "<s> module!");
            manager.removeTag(disabledModules, index);
          };
        };
      };
    } else {
      systemMessage(entity, "<e>Unknown module of name <eh>" + moduleName + "<e>!");
    };
  };
  function disableModule(entity, manager, moduleName) {
    var moduleIndex = moduleNames.indexOf(moduleName);
    if (moduleIndex > -1) {
      if (!entity.getWornHelmet().nbt().hasKey("disabledModules")) {
        var disabledModules = manager.newTagList();
        manager.appendString(disabledModules, moduleName);
        manager.setTagList(entity.getWornHelmet().nbt(), "disabledModules", disabledModules);
        systemMessage(entity, "<s>Module <sh>" + moduleName + "<s> disabled!");
      } else {
        var disabledModules = entity.getWornHelmet().nbt().getStringList("disabledModules");
        var disabledModulesIndex = getStringArray(disabledModules).indexOf(moduleName);
        if (disabledModulesIndex > -1) {
          systemMessage(entity, "<e>You have already disabled module <eh>" + moduleName + "<e>!");
        } else {
          systemMessage(entity, "<s>Module <sh>" + moduleName + "<s> disabled!");
          manager.appendString(disabledModules, moduleName);
          if (modules[moduleIndex].hasOwnProperty("whenDisabled")) {
            modules[moduleIndex].whenDisabled(entity, manager);
          };
        };
      };
    } else {
      systemMessage(entity, "<e>Unknown module of name <eh>" + moduleName + "<e>!");
    };
  };
  /**
   * Modifier enabled stuff for em
   * @param {JSEntity} entity - Required
   * @param {string} modifier - Required
   **/
  function isModifierEnabled(entity, modifier) {
    if (entity.getData("skyhighheroes:dyn/powering_down_timer") > 0) {
      return false;
    };
    if (modifierIndexes.length == 1) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 2) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 3) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 4) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 5) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 6) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 7) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 8) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 9) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[8]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 10) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[8]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[9]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 11) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[8]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[9]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[10]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 12) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[8]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[9]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[10]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[11]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 13) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[8]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[9]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[10]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[11]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[12]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 14) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[8]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[9]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[10]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[11]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[12]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[13]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length == 15) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[8]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[9]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[10]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[11]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[12]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[13]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[14]].isModifierEnabled(entity, modifier);
    };
    if (modifierIndexes.length >= 16) {
      return modules[modifierIndexes[0]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[1]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[2]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[3]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[4]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[5]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[6]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[7]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[8]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[9]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[10]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[11]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[12]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[13]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[14]].isModifierEnabled(entity, modifier) || modules[modifierIndexes[15]].isModifierEnabled(entity, modifier);
    };
  };
  /**
   * Power stuff (I hate that I had to do it this way)
   * @param {JSHero} hero - Required
   **/
  function addPowers(hero) {
    var name = formatAlias(cyberName);
    var hud = "skyhighheroes:" + name + "_hud";
    hero.addPowers("skyhighheroes:cybernetic_os", "skyhighheroes:cybernetic_body", hud);
  };
  /**
   * Basic keybinds
   * @param {JSHero} hero - Required
   **/
  function keyBinds(hero) {
    hero.addKeyBind("SHAPE_SHIFT", "\u00A7" + color + "Send message/Enter command", 5);
    modules.forEach(module => {
      if (module.hasOwnProperty("keyBinds")) {
        module.keyBinds(hero, color);
      };
    });
  };
  /**
   * Attribute profile stuff
   * @param {JSEntity} entity - Required
   * @returns attribute profile
   **/
  function getAttributeProfile(entity) {
    var result = null;
    if (entity.getData("skyhighheroes:dyn/powering_down_timer") > 0) {
      result = "SHUT_DOWN";
    };
    if (attributeProfileIndexes.length == 1) {
      if (typeof modules[attributeProfileIndexes[0]].getAttributeProfile(entity) === "string") {
        result = modules[attributeProfileIndexes[0]].getAttributeProfile(entity);
      };
    };
    if (attributeProfileIndexes.length == 2) {
      if (typeof modules[attributeProfileIndexes[0]].getAttributeProfile(entity) === "string") {
        result = modules[attributeProfileIndexes[0]].getAttributeProfile(entity);
      };
      if (typeof modules[attributeProfileIndexes[1]].getAttributeProfile(entity) === "string") {
        result = modules[attributeProfileIndexes[1]].getAttributeProfile(entity);
      };
    };
    if (attributeProfileIndexes.length >= 3) {
      if (typeof modules[attributeProfileIndexes[0]].getAttributeProfile(entity) === "string") {
        result = modules[attributeProfileIndexes[0]].getAttributeProfile(entity);
      };
      if (typeof modules[attributeProfileIndexes[1]].getAttributeProfile(entity) === "string") {
        result = modules[attributeProfileIndexes[1]].getAttributeProfile(entity);
      };
      if (typeof modules[attributeProfileIndexes[2]].getAttributeProfile(entity) === "string") {
        result = modules[attributeProfileIndexes[2]].getAttributeProfile(entity);
      };
    };
    return result;
  };
  /**
   * Damage profile stuff
   * @param {JSEntity} entity - Required
   * @returns damage profile
   **/
  function getDamageProfile(entity) {
    var result = null;
    if (entity.getData("skyhighheroes:dyn/powering_down_timer") > 0) {
      result = null;
    };
    if (damageProfileIndexes.length == 1) {
      if (typeof modules[damageProfileIndexes[0]].getDamageProfile(entity) === "string") {
        result = modules[damageProfileIndexes[0]].getDamageProfile(entity);
      };
    };
    if (damageProfileIndexes.length == 2) {
      if (typeof modules[damageProfileIndexes[0]].getDamageProfile(entity) === "string") {
        result = modules[damageProfileIndexes[0]].getDamageProfile(entity);
      };
      if (typeof modules[damageProfileIndexes[1]].getDamageProfile(entity) === "string") {
        result = modules[damageProfileIndexes[1]].getDamageProfile(entity);
      };
    };
    if (damageProfileIndexes.length >= 3) {
      if (typeof modules[damageProfileIndexes[0]].getDamageProfile(entity) === "string") {
        result = modules[damageProfileIndexes[0]].getDamageProfile(entity);
      };
      if (typeof modules[damageProfileIndexes[1]].getDamageProfile(entity) === "string") {
        result = modules[damageProfileIndexes[1]].getDamageProfile(entity);
      };
      if (typeof modules[damageProfileIndexes[2]].getDamageProfile(entity) === "string") {
        result = modules[damageProfileIndexes[2]].getDamageProfile(entity);
      };
    };
    return result;
  };
  function initProfiles(hero) {
    hero.addAttribute("SPRINT_SPEED", 0.25, 1);
    hero.addAttribute("STEP_HEIGHT", 0.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 1.0, 1);
    hero.addAttribute("ARROW_DAMAGE", 1.0, 1);
    hero.addAttribute("BOW_DRAWBACK", 0.99, 1);
    hero.addAttribute("REACH_DISTANCE", 5.0, 0);
    hero.addAttribute("KNOCKBACK", 1.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 1.0, 1);
    hero.addAttribute("IMPACT_DAMAGE", 50.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttributeProfile("SHUT_DOWN", function (profile) {
      profile.addAttribute("BASE_SPEED", -1.0, 1);
      profile.addAttribute("SPRINT_SPEED", -1.0, 1);
      profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
      profile.addAttribute("JUMP_HEIGHT", -1.0, 1);
      profile.addAttribute("STEP_HEIGHT", -1.0, 1);
      profile.addAttribute("KNOCKBACK", -1.0, 1);
      profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
    });
    hero.addAttributeProfile("UNAUTHORIZED", function (profile) {
      profile.addAttribute("BASE_SPEED", -1.0, 1);
      profile.addAttribute("SPRINT_SPEED", -1.0, 1);
      profile.addAttribute("WEAPON_DAMAGE", -1.0, 1);
      profile.addAttribute("JUMP_HEIGHT", -1.0, 1);
      profile.addAttribute("STEP_HEIGHT", -1.0, 1);
      profile.addAttribute("KNOCKBACK", -1.0, 1);
      profile.addAttribute("PUNCH_DAMAGE", -1.0, 1);
      profile.addAttribute("MAX_HEALTH", -19.0, 0);
    });
    damageProfileIndexes.forEach(index => {
      modules[index].initDamageProfiles(hero);
    });
    attributeProfileIndexes.forEach(index => {
      modules[index].initAttributeProfiles(hero);
    });
  };
  /**
   * Keybind enabled stuff for em
   * @param {JSEntity} entity - Required
   * @param {string} keyBind - Required
   **/
  function isKeyBindEnabled(entity, keyBind) {
    if (entity.getData("skyhighheroes:dyn/powering_down_timer") > 0) {
      return false;
    };
    if (keyBindIndexes.length == 1) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 2) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 3) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 4) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 5) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 6) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 7) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 8) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 9) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 10) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[9]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 11) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[9]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[10]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 12) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[9]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[10]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[11]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 13) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[9]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[10]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[11]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[12]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 14) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[9]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[10]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[11]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[12]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[13]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length == 15) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[9]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[10]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[11]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[12]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[13]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[14]].isKeyBindEnabled(entity, keyBind);
    };
    if (keyBindIndexes.length >= 16) {
      return modules[keyBindIndexes[0]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[1]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[2]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[3]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[4]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[5]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[6]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[7]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[8]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[9]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[10]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[11]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[12]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[13]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[14]].isKeyBindEnabled(entity, keyBind) || modules[keyBindIndexes[15]].isKeyBindEnabled(entity, keyBind);
    };
  };
  function tickHandler(entity, manager) {
    if ((!entity.getDataOrDefault("skyhighheroes:dyn/system_init", true))) {
      manager.setString(entity.getWornHelmet().nbt(), "cyberModelID", cyberModelID);
      manager.setString(entity.getWornHelmet().nbt(), "cyberAliasName", cyberName);
      manager.setBoolean(entity.getWornHelmet().nbt(), "Unbreakable", true);
      assignID(entity, manager);
      if (!entity.getWornHelmet().nbt().hasKey("durationFightOrFlight")) {
        manager.setShort(entity.getWornHelmet().nbt(), "durationFightOrFlight", 20);
      };
      if (!entity.getWornHelmet().nbt().hasKey("minHealthFightOrFlight")) {
        manager.setShort(entity.getWornHelmet().nbt(), "minHealthFightOrFlight", 5);
      };
      if (!entity.getWornHelmet().nbt().hasKey("hudRange")) {
        manager.setShort(entity.getWornHelmet().nbt(), "hudRange", 0);
      };
      if (!entity.getWornHelmet().nbt().hasKey("hostilesOnHud")) {
        manager.setBoolean(entity.getWornHelmet().nbt(), "hostilesOnHud", true);
      };
      if (!entity.getWornHelmet().nbt().hasKey("friendliesOnHud")) {
        manager.setBoolean(entity.getWornHelmet().nbt(), "friendliesOnHud", true);
      };
      if (!entity.getWornHelmet().nbt().hasKey("playersOnHud")) {
        manager.setBoolean(entity.getWornHelmet().nbt(), "playersOnHud", true);
      };
      onInitSystemIndexes.forEach(index => {
        var module = modules[index];
        module.onInitSystem(entity, manager);
      });
      var hexColor = hexColors[getModelID(entity)];
      manager.setString(entity.getWornHelmet().nbt(), "hudColorSkyHigh", hexColor);
      systemMessage(entity, "<n>Hello <nh>" + getModelID(entity) + "<n> AKA <nh>" + getAliasName(entity) + "<n>!");
      status(entity);
      manager.setData(entity, "skyhighheroes:dyn/system_init", true);
      manager.setData(entity, "fiskheroes:penetrate_martian_invis", false);
    };
    if ((Math.floor(entity.getHealth()) <= entity.getWornHelmet().nbt().getInteger("minHealthFightOrFlight")) && (entity.getData("fiskheroes:time_since_damaged") <= entity.getWornHelmet().nbt().getShort("durationFightOrFlight"))) {
      if (!entity.getData("skyhighheroes:dyn/fight_or_flight")) {
        systemMessage(entity, "<n>FIGHT OR FLIGHT MODE ACTIVATED!");
        manager.setData(entity, "skyhighheroes:dyn/fight_or_flight", true);
      };
      fightOrFlightIndexes.forEach(index => {
        var module = modules[index];
        silentEnableModule(entity, manager, module.name);
        module.fightOrFlight(entity, manager);
      });
      if (entity.getData("fiskheroes:time_since_damaged") == entity.getWornHelmet().nbt().getShort("durationFightOrFlight")) {
        systemMessage(entity, "<n>FIGHT OR FLIGHT MODE DEACTIVATED!");
      }
    } else {
      manager.setData(entity, "skyhighheroes:dyn/fight_or_flight", false);
    };
    if (typeof entity.getData("fiskheroes:disguise") === "string") {
      if (!((entity.getData("fiskheroes:disguise") == cyberName || entity.getData("fiskheroes:disguise") == cyberModelID))) {
        manager.setData(entity, "skyhighheroes:dyn/entry", entity.getData("fiskheroes:disguise"));
        manager.setData(entity, "fiskheroes:disguise", ((entity.getWornHelmet().nbt().getBoolean("aliasActive")) ? cyberName : cyberModelID));
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
            case "powerOff":
              manager.setData(entity, "skyhighheroes:dyn/powered_down", true);
              systemMessage(entity, "<n>Powering down!");
              break;
            case "powerOn":
              manager.setData(entity, "skyhighheroes:dyn/powered_down", false);
              systemMessage(entity, "<n>Powering on!");
              break;
            case "help":
              systemMessage(entity, "<n>Available commands:");
              commandIndexes.forEach(index => {
                var module = modules[index];
                if (!isModuleDisabled(entity, module.name) && entity.getData("skyhighheroes:dyn/powering_down_timer") == 0) {
                  systemMessage(entity, module.helpMessage);
                };
              });
              systemMessage(entity, "<n>!status <nh>-<n> Shows your current status");
              systemMessage(entity, "<n>!systemInfo <nh>-<n> Shows your system info");
              systemMessage(entity, "<n>!powerOn <nh>-<n> Powers you up");
              systemMessage(entity, "<n>!powerOff <nh>-<n> Powers you down");
              systemMessage(entity, "<n>!help <nh>-<n> Shows this list");
              break;
            case "chatMode":
              switchChatModes(entity, manager, args[1]);
              break;
            case "msg":
              switchChats(entity, manager, args[1]);
              break;
            default:
              var index = commands.indexOf(args[0]);
              if (index > -1 && entity.getData("skyhighheroes:dyn/powering_down_timer") == 0) {
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
          modules[messagingIndexes[entity.getData("skyhighheroes:dyn/chat_mode")]].messageHandler(entity, name, 32);
        };
      };
    };
    manager.setData(entity, "fiskheroes:disguise", ((entity.getWornHelmet().nbt().getBoolean("aliasActive")) ? getAliasName(entity) : getModelID(entity)));
    tickHandlerIndexes.forEach(index => {
      var module = modules[index];
      if (!isModuleDisabled(entity, module.name) && entity.getData("skyhighheroes:dyn/powering_down_timer") == 0) {
        module.tickHandler(entity, manager);
      };
    });
    if (PackLoader.getSide() == "SERVER" && entity.getData("skyhighheroes:dyn/powering_down_timer") < 1 && entity.getData("skyhighheroes:dyn/powering_down_timer") > 0) {
      var moduleTotal = cyberneticModules.length;
      var moduleTime = (80/moduleTotal).toFixed(0);
      var currentTime = Math.ceil(entity.getData("skyhighheroes:dyn/powering_down_timer")*80);
      if (currentTime % moduleTime == 0) {
        var moduleName = cyberneticModules[(currentTime/moduleTime)-1];
        var message = entity.getData("skyhighheroes:dyn/powered_down") ? "<n>Shutting down <nh>" + moduleName + "<n>!" : "<n>Starting up <nh>" + moduleName + "<n>!";
        systemMessage(entity, message);
      };
    };
    var rotation = entity.rotYaw()%360;
    var bearing = ((Math.abs((rotation < 0) ? (rotation+360) : rotation)+180) % 360);
    manager.setDataWithNotify(entity, "skyhighheroes:dyn/bearing", bearing);
  };
  return {
    /**
     * Handles all cyber stuff
     * @param {JSHero} hero - Required
     **/
    initCybernetics: (hero) => {
      hero.setAliases(formatAlias(cyberName));
      hero.setName(cyberName + "/Model " + cyberModelID + " Cybernetic Body");
      hero.setTier(9);
      hero.setHelmet("Cybernetic Brain");
    
      hero.addPrimaryEquipment("fiskheroes:suit_data_drive@" + colorDamage[color] + "{display:{Name:\u00A7" + color + cyberName + "'s Data Drive}}", true, item => (item.damage() == colorDamage[color] && item.displayName() == "\u00A7" + color + cyberName + "'s Data Drive"));
    
      keyBinds(hero);
      initProfiles(hero);
      addPowers(hero);
      
      hero.setHasProperty((entity, property) => {
        return property == "BREATHE_SPACE" && true;
      });
      hero.setDefaultScale(1.0);
      hero.setModifierEnabled((entity, modifier) => {
        if (modifier.name() == "fiskheroes:shape_shifting") {
          return true;
        };
        if (modifier.name() == "fiskheroes:potion_immunity") {
          return true;
        };
        if (modifier.name() == "fiskheroes:regeneration") {
          return true;
        };
        if (modifier.name() == "fiskheroes:healing_factor") {
          return true;
        };
        if (modifier.name() == "fiskheroes:water_breathing") {
          return true;
        };
        if (modifier.name() == "fiskheroes:fire_immunity") {
          return true;
        };
        if (modifier.name() == "fiskheroes:damage_immunity") {
          return true;
        };
        if (modifier.name() == "fiskheroes:projectile_immunity") {
          return true;
        };
        if (modifier.name() == "fiskheroes:transformation") {
          return true;
        };
        if (modifier.name() == "fiskheroes:metal_skin") {
          return entity.getData("fiskheroes:metal_heat") < 1.0;
        };
        return isModifierEnabled(entity, modifier);
      });
      hero.setKeyBindEnabled((entity, keyBind) => {
        if (keyBind == "SHAPE_SHIFT") {
          return true;
        };
        return isKeyBindEnabled(entity, keyBind);
      });
      hero.setDamageProfile((entity) => {
        return getDamageProfile(entity);
      });
      hero.setAttributeProfile((entity) => {
        return getAttributeProfile(entity);
      });
      hero.setTickHandler((entity, manager) => {
        tickHandler(entity, manager);
      });
    }
  };
};