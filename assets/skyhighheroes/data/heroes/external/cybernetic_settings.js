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
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        var nbt = entity.getWornHelmet().nbt();
        switch(arguments[1]) {
          case "fightOrFlightDur":
            manager.setShort(nbt, "durationFightOrFlight", parseInt(arguments[2]));
            system.moduleMessage(this, entity, "<n>fightOrFlightDur set to <nh>" + nbt.getShort("durationFightOrFlight") + "<n>!");
            break;
          case "fightOrFlightMin":
            manager.setInteger(nbt, "minHealthFightOrFlight", parseInt(arguments[2]));
            system.moduleMessage(this, entity, "<n>fightOrFlightMin set to <nh>" + nbt.getShort("minHealthFightOrFlight") + "<n>!");
            break;
          case "naturalArms":
            manager.setBoolean(nbt, "naturalArms", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("naturalArms")));
            system.moduleMessage(this, entity, "<n>naturalArms set to <nh>" + nbt.getBoolean("naturalArms") + "<n>!");
            break;
          case "aliasActive":
            manager.setBoolean(nbt, "aliasActive", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("aliasActive")));
            system.moduleMessage(this, entity, "<n>aliasActive set to <nh>" + nbt.getBoolean("aliasActive") + "<n>!");
            break;
          case "nightVision":
            manager.setBoolean(nbt, "nightVision", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("nightVision")));
            system.moduleMessage(this, entity, "<n>nightVision set to <nh>" + nbt.getBoolean("nightVision") + "<n>!");
            break;
          case "innerRockets":
            manager.setBoolean(nbt, "innerRockets", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("innerRockets")));
            system.moduleMessage(this, entity, "<n>innerRockets set to <nh>" + nbt.getBoolean("innerRockets") + "<n>!");
            break;
          case "flushEyeCannons":
            manager.setBoolean(nbt, "flushEyeCannons", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("flushEyeCannons")));
            system.moduleMessage(this, entity, "<n>flushEyeCannons set to <nh>" + nbt.getBoolean("flushEyeCannons") + "<n>!");
            break;
          case "flushLeftArmCannon":
            manager.setBoolean(nbt, "flushLeftArmCannon", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("flushLeftArmCannon")));
            system.moduleMessage(this, entity, "<n>flushLeftArmCannon set to <nh>" + nbt.getBoolean("flushLeftArmCannon") + "<n>!");
            break;
          case "flushRightArmCannon":
            manager.setBoolean(nbt, "flushRightArmCannon", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("flushRightArmCannon")));
            system.moduleMessage(this, entity, "<n>flushRightArmCannon set to <nh>" + nbt.getBoolean("flushRightArmCannon") + "<n>!");
            break;
          case "flushMouth":
            manager.setBoolean(nbt, "flushMouth", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("flushMouth")));
            system.moduleMessage(this, entity, "<n>flushMouth set to <nh>" + nbt.getBoolean("flushMouth") + "<n>!");
            break;
          case "hudRange":
            manager.setShort(nbt, "hudRange", parseInt(arguments[2]));
            system.moduleMessage(this, entity, "<n>hudRange set to <nh>" + nbt.getShort("hudRange") + "<n>!");
            break;
          case "friendliesOnHud":
            manager.setBoolean(nbt, "flushMouth", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("friendliesOnHud")));
            system.moduleMessage(this, entity, "<n>friendliesOnHud set to <nh>" + nbt.getBoolean("friendliesOnHud") + "<n>!");
            break;
          case "hostilesOnHud":
            manager.setBoolean(nbt, "flushMouth", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("hostilesOnHud")));
            system.moduleMessage(this, entity, "<n>hostilesOnHud set to <nh>" + nbt.getBoolean("hostilesOnHud") + "<n>!");
            break;
          case "playersOnHud":
            manager.setBoolean(nbt, "playersOnHud", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("playersOnHud")));
            system.moduleMessage(this, entity, "<n>playersOnHud set to <nh>" + nbt.getBoolean("playersOnHud") + "<n>!");
            break;
          case "holoFlight":
            manager.setBoolean(nbt, "holoFlight", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoFlight")));
            system.moduleMessage(this, entity, "<n>holoFlight set to <nh>" + nbt.getBoolean("holoFlight") + "<n>!");
            break;
          case "holoBoostFlight":
            manager.setBoolean(nbt, "holoBoostFlight", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoBoostFlight")));
            system.moduleMessage(this, entity, "<n>holoBoostFlight set to <nh>" + nbt.getBoolean("holoBoostFlight") + "<n>!");
            break;
          case "holoCannons":
            manager.setBoolean(nbt, "holoCannons", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoCannons")));
            system.moduleMessage(this, entity, "<n>holoCannons set to <nh>" + nbt.getBoolean("holoCannons") + "<n>!");
            break;
          case "holoBlades":
            manager.setBoolean(nbt, "holoBlades", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoBlades")));
            system.moduleMessage(this, entity, "<n>holoBlades set to <nh>" + nbt.getBoolean("holoBlades") + "<n>!");
            break;
          case "holoShields":
            manager.setBoolean(nbt, "holoShields", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoShields")));
            system.moduleMessage(this, entity, "<n>holoShields set to <nh>" + nbt.getBoolean("holoShields") + "<n>!");
            break;
          case "holoWings":
            manager.setBoolean(nbt, "holoWings", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoWings")));
            system.moduleMessage(this, entity, "<n>holoWings set to <nh>" + nbt.getBoolean("holoWings") + "<n>!");
            break;
          case "holoMouth":
            manager.setBoolean(nbt, "holoMouth", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoMouth")));
            system.moduleMessage(this, entity, "<n>holoMouth set to <nh>" + nbt.getBoolean("holoMouth") + "<n>!");
            break;
          case "holoAnt":
            manager.setBoolean(nbt, "holoAnt", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoAnt")));
            system.moduleMessage(this, entity, "<n>holoAnt set to <nh>" + nbt.getBoolean("holoAnt") + "<n>!");
            break;
          case "holoSat":
            manager.setBoolean(nbt, "holoSat", ((arguments[2] == "true") ? true : (arguments[2] == "false") ? false : nbt.getBoolean("holoSat")));
            system.moduleMessage(this, entity, "<n>holoSat set to <nh>" + nbt.getBoolean("holoSat") + "<n>!");
            break;
          case "list":
            system.moduleMessage(this, entity, "<n>fightOrFlightDur: <nh>" + nbt.getShort("durationFightOrFlight"));
            system.moduleMessage(this, entity, "<n>fightOrFlightMin: <nh>" + nbt.getShort("minHealthFightOrFlight"));
            system.moduleMessage(this, entity, "<n>naturalArms: <nh>" + nbt.getBoolean("naturalArms"));
            system.moduleMessage(this, entity, "<n>aliasActive: <nh>" + nbt.getBoolean("aliasActive"));
            system.moduleMessage(this, entity, "<n>nightVision: <nh>" + nbt.getBoolean("nightVision"));
            system.moduleMessage(this, entity, "<n>innerRockets: <nh>" + nbt.getBoolean("innerRockets"));
            system.moduleMessage(this, entity, "<n>flushEyeCannons: <nh>" + nbt.getBoolean("flushEyeCannons"));
            system.moduleMessage(this, entity, "<n>flushLeftArmCannon: <nh>" + nbt.getBoolean("flushLeftArmCannon"));
            system.moduleMessage(this, entity, "<n>flushRightArmCannon: <nh>" + nbt.getBoolean("flushRightArmCannon"));
            system.moduleMessage(this, entity, "<n>flushMouth: <nh>" + nbt.getBoolean("flushMouth"));
            system.moduleMessage(this, entity, "<n>hudRange: <nh>" + nbt.getShort("hudRange"));
            system.moduleMessage(this, entity, "<n>friendliesOnHud: <nh>" + nbt.getBoolean("friendliesOnHud"));
            system.moduleMessage(this, entity, "<n>hostilesOnHud: <nh>" + nbt.getBoolean("hostilesOnHud"));
            system.moduleMessage(this, entity, "<n>playersOnHud: <nh>" + nbt.getBoolean("playersOnHud"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Settings commands:");
            system.moduleMessage(this, entity, "<n>!set list <nh>-<n> Lists current settings and their values");
            system.moduleMessage(this, entity, "<n>!set fightOrFlightDur <number> <nh>-<n> Sets duration of fight or flight response");
            system.moduleMessage(this, entity, "<n>!set fightOrFlightMin <number> <nh>-<n> Sets minimum health to activate fight or flight");
            system.moduleMessage(this, entity, "<n>!set naturalArms <true|false> <nh>-<n> Sets if natural arm movement is not supressed");
            system.moduleMessage(this, entity, "<n>!set aliasActive <true|false> <nh>-<n> Sets if alias name appears above head");
            system.moduleMessage(this, entity, "<n>!set nightVision <true|false> <nh>-<n> Sets if night vision is active");
            system.moduleMessage(this, entity, "<n>!set innerRockets <true|false> <nh>-<n> Sets if inner rockets are enabled");
            system.moduleMessage(this, entity, "<n>!set flushEyeCannons <true|false> <nh>-<n> Sets if eye cannons are flush to head");
            system.moduleMessage(this, entity, "<n>!set flushLeftArmCannon <true|false> <nh>-<n> Sets if left arm cannons are flush to arm");
            system.moduleMessage(this, entity, "<n>!set flushRightArmCannon <true|false> <nh>-<n> Sets if right arm cannons are flush to arm");
            system.moduleMessage(this, entity, "<n>!set flushMouth <true|false> <nh>-<n> Sets if mouth is flush to head");
            system.moduleMessage(this, entity, "<n>!set hudRange <number> <nh>-<n> Sets range of HUD scanner");
            system.moduleMessage(this, entity, "<n>!set friendliesOnHud <true|false> <nh>-<n> Sets if friendly mobs appear on HUD");
            system.moduleMessage(this, entity, "<n>!set hostilesOnHud <true|false> <nh>-<n> Sets if hostile mobs appear on HUD");
            system.moduleMessage(this, entity, "<n>!set playersOnHud <true|false> <nh>-<n> Sets if players appear on HUD");
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