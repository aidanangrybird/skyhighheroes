/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "settings",
    moduleMessageName: "Settings",
    type: 1,
    command: "set",
    helpMessage: "<n>!set <nh>-<n> Settings",
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 4) {
        var nbt = entity.getWornHelmet().nbt();
        switch(argList[1]) {
          case "fightOrFlightDur":
            manager.setShort(nbt, "durationFightOrFlight", parseInt(argList[2]));
            system.moduleMessage(this, entity, "<n>fightOrFlightDur set to <nh>" + nbt.getShort("durationFightOrFlight") + "<n>!");
            break;
          case "fightOrFlightMin":
            manager.setInteger(nbt, "minHealthFightOrFlight", parseInt(argList[2]));
            system.moduleMessage(this, entity, "<n>fightOrFlightMin set to <nh>" + nbt.getShort("minHealthFightOrFlight") + "<n>!");
            break;
          case "naturalArms":
            manager.setBoolean(nbt, "naturalArms", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("naturalArms")));
            system.moduleMessage(this, entity, "<n>naturalArms set to <nh>" + nbt.getBoolean("naturalArms") + "<n>!");
            break;
          case "aliasActive":
            manager.setBoolean(nbt, "aliasActive", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("aliasActive")));
            system.moduleMessage(this, entity, "<n>aliasActive set to <nh>" + nbt.getBoolean("aliasActive") + "<n>!");
            break;
          case "nightVision":
            manager.setBoolean(nbt, "nightVision", ((argList[2] == "true") ? true : (argList[2] == "false") ? false : nbt.getBoolean("nightVision")));
            system.moduleMessage(this, entity, "<n>nightVision set to <nh>" + nbt.getBoolean("nightVision") + "<n>!");
            break;
          case "hudScale":
            manager.setFloat(nbt, "hudScale", parseFloat(argList[2]));
            system.moduleMessage(this, entity, "<n>hudScale set to <nh>" + nbt.getFloat("hudScale") + "<n>!");
            break;
          case "list":
            system.moduleMessage(this, entity, "<n>fightOrFlightDur: <nh>" + nbt.getShort("durationFightOrFlight"));
            system.moduleMessage(this, entity, "<n>fightOrFlightMin: <nh>" + nbt.getShort("minHealthFightOrFlight"));
            system.moduleMessage(this, entity, "<n>naturalArms: <nh>" + nbt.getBoolean("naturalArms"));
            system.moduleMessage(this, entity, "<n>aliasActive: <nh>" + nbt.getBoolean("aliasActive"));
            system.moduleMessage(this, entity, "<n>nightVision: <nh>" + nbt.getBoolean("nightVision"));
            system.moduleMessage(this, entity, "<n>hudScale: <nh>" + nbt.getFloat("hudScale"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Settings commands:");
            system.moduleMessage(this, entity, "<n>!set list <nh>-<n> Lists current settings and their values");
            system.moduleMessage(this, entity, "<n>!set fightOrFlightDur <number> <nh>-<n> Sets duration of fight or flight response");
            system.moduleMessage(this, entity, "<n>!set fightOrFlightMin <number> <nh>-<n> Sets minimum health to activate fight or flight");
            system.moduleMessage(this, entity, "<n>!set naturalArms <true|false> <nh>-<n> Sets if natural arm movement is not supressed");
            system.moduleMessage(this, entity, "<n>!set aliasActive <true|false> <nh>-<n> Sets if alias name appears above head");
            system.moduleMessage(this, entity, "<n>!set nightVision <true|false> <nh>-<n> Sets if night vision is active");
            system.moduleMessage(this, entity, "<n>!set hudScale <number> <nh>-<n> Sets scale of HUD elements");
            system.moduleMessage(this, entity, "<n>!set help <nh>-<n> Shows this list");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>settings<e> command! Try <eh>!set help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>settings<e> command! Try <eh>!set help<e> for a list of commands!");
      };
    },
  };
};