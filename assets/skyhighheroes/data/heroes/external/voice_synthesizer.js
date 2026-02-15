/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  var mouthMultiTap = system.initMultiTap("skyhighheroes:dyn/mouth");
  return {
    name: "voiceSynthesizer",
    moduleMessageName: "VoiceSynth",
    type: 13,
    command: "vs",
    helpMessage: "<n>!vs <nh>-<n> Voice Synthesizer",
    disabledMessage: "<e>Module <eh>voiceSynthesizer<e> is disabled!",
    keyBinds: function (hero, color) {
      hero.addKeyBindFunc("MOUTH", (player, manager) => {
        mouthMultiTap.tap(player, manager);
        return true;
      }, "\u00A7" + color + "Scream (x2 to arm)", 3);
      hero.addKeyBindFunc("SCREAM", (player, manager) => {
        mouthMultiTap.tap(player, manager);
        return true;
      }, "\u00A7" + color + "Scream (x2 to disarm)", 3);
      hero.addKeyBind("ENERGY_PROJECTION", "\u00A7" + color + "Scream (x2 to disarm)", 3);
    },
    isKeyBindEnabled: function (entity, keyBind) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        var nbt = entity.getWornHelmet().nbt();
        var mouth = nbt.getBoolean("mouth");
        if (keyBind == "MOUTH" && !entity.getData("skyhighheroes:dyn/battle_mode")) {
          result = !mouth;
        };
        if (keyBind == "ENERGY_PROJECTION" && (entity.getData("skyhighheroes:dyn/mouth_timer") == 1) && !entity.getData("skyhighheroes:dyn/battle_mode")) {
          result = mouth;
        };
        if (keyBind == "SCREAM" && !entity.getData("skyhighheroes:dyn/battle_mode")) {
          result = mouth;
        };
      };
      return result;
    },
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 5) {
        var nbt = entity.getWornHelmet().nbt();
        switch (argList[1]) {
          case "arm":
            manager.setBoolean(nbt, "mouth", true);
            system.moduleMessage(this, entity, "<n>Armed mouth!");
            break;
          case "disarm":
            manager.setBoolean(nbt, "mouth", false);
            system.moduleMessage(this, entity, "<n>Disarmed mouth!");
            break;
          case "show":
            manager.setData(entity, "skyhighheroes:dyn/mouth_deployed", true);
            system.moduleMessage(this, entity, "<n>Deployed mouth!");
            break;
          case "hide":
            manager.setData(entity, "skyhighheroes:dyn/mouth_deployed", false);
            system.moduleMessage(this, entity, "<n>Retracted mouth!");
            break;
          case "set":
            switch (argList[2]) {
              case "flush":
                manager.setBoolean(nbt, "flushMouth", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("flushMouth")));
                system.moduleMessage(this, entity, "<n>Flush set to <nh>" + nbt.getBoolean("flushMouth") + "<n>!");
                break;
              case "holo":
                manager.setBoolean(nbt, "holoMouth", ((argList[3] == "true") ? true : (argList[3] == "false") ? false : nbt.getBoolean("holoMouth")));
                system.moduleMessage(this, entity, "<n>Hologram set to <nh>" + nbt.getBoolean("holoMouth") + "<n>!");
                break;
              default:
                system.moduleMessage(this, entity, "<e>Unknown <eh>voiceSynthesizer<e> setting!");
                break;
            };
            break;
          case "status":
            system.moduleMessage(this, entity, "<n>Voice Synthesizer status:");
            system.moduleMessage(this, entity, "<n>Mouth: <nh>" + (nbt.getBoolean("mouth") ? "ARMED" : "DISARMED") + " <n>-<nh> " + ((entity.getData("skyhighheroes:dyn/mouth_deploy_timer") > 0) || (entity.getData("skyhighheroes:dyn/mouth_timer") > 0) ? "DEPLOYED" : "RETRACTED"));
            system.moduleMessage(this, entity, "<n>Flush: <nh>" + nbt.getBoolean("flushMouth"));
            system.moduleMessage(this, entity, "<n>Hologram: <nh>" + (nbt.getBoolean("holoMouth") ? "ENABLED" : "DISABLED"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Voice Synthesizer commands:");
            system.moduleMessage(this, entity, "<n>!vs arm <nh>-<n> Arms mouth");
            system.moduleMessage(this, entity, "<n>!vs disarm <nh>-<n> Disarms mouth");
            system.moduleMessage(this, entity, "<n>!vs show <nh>-<n> Shows mouth");
            system.moduleMessage(this, entity, "<n>!vs hide <nh>-<n> Hides mouth");
            system.moduleMessage(this, entity, "<n>!vs set <holo|flush> <nh>-<n> Settings");
            system.moduleMessage(this, entity, "<n>!vs status <nh>-<n> Shows status of voice synthesizer");
            system.moduleMessage(this, entity, "<n>!vs help <nh>-<n> Shows voiceSynthesizer commands");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>voiceSynthesizer<e> command! Try <eh>!vs help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>voiceSynthesizer<e> command! Try <eh>!vs help<e> for a list of commands!");
      };
    },
    armHandler: function (entity, manager, arg) {
      var nbt = entity.getWornHelmet().nbt();
      switch (arg) {
        case "mouth":
          manager.setBoolean(nbt, "mouth", true);
          system.moduleMessage(this, entity, "<n>Armed mouth!");
          return;
      };
    },
    disarmHandler: function (entity, manager, arg) {
      var nbt = entity.getWornHelmet().nbt();
      switch (arg) {
        case "mouth":
          manager.setBoolean(nbt, "mouth", false);
          system.moduleMessage(this, entity, "<n>Disarmed mouth!");
          return;
      };
    },
    isModifierEnabled: function (entity, modifier) {
      result = false;
      if (!system.isModuleDisabled(entity, this.name)) {
        if (modifier.name() == "fiskheroes:energy_projection") {
          result = true;
        };
      };
      if (modifier.name() == "fiskheroes:transformation") {
        result = true;
      };
      return result;
    },
    whenDisabled: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      manager.setBoolean(nbt, "mouth", false);
      manager.setData(entity, "skyhighheroes:dyn/mouth", false);
    },
    tickHandler: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      manager.setData(entity, "skyhighheroes:dyn/mouth_flush", nbt.getBoolean("flushMouth"));
      var mouth = nbt.getBoolean("mouth") && entity.getData("fiskheroes:energy_projection");
      if (!nbt.getBoolean("mouth") && mouthMultiTap.multiTap(entity, manager, 2, 20, 1)) {
        manager.setBoolean(nbt, "mouth", true);
        system.moduleMessage(this, entity, "<s>Armed <sh>mouth<s>!");
      };
      if (nbt.getBoolean("mouth") && mouthMultiTap.multiTap(entity, manager, 2, 20, 1)) {
        manager.setBoolean(nbt, "mouth", false);
        system.moduleMessage(this, entity, "<s>Disarmed <sh>mouth<s>!");
      };
      if (nbt.getBoolean("mouth") && entity.getData("fiskheroes:energy_projection_timer") > 0) {
        if (entity.getData("fiskheroes:energy_projection_timer") < 0.1) {
          if (mouth) {
            system.shoutMessage(entity, "Activating Voice Synthesizer!", 16);
          };
        };
      };
      mouthMultiTap.tapReset(entity, manager);
    },
    fightOrFlight: function (entity, manager) {
      if (!entity.getWornHelmet().nbt().getBoolean("mouth")) {
        manager.setBoolean(entity.getWornHelmet().nbt(), "mouth", true);
        system.systemMessage(entity, "<n>Automatically armed <nh>mouth<n>!");
      };
    }
  };
};