/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  return {
    name: "nightVision",
    type: 1,
    command: "nv",
    helpMessage: "<n>!nv <nh>-<n> Night vision",
    disabledMessage: "<e>Module <eh>nightVision<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 3) {
        switch(arguments[1]) {
          case "on":
            manager.setData(entity, "skyhighheroes:dyn/night_vision", true);
            break;
          case "off":
            manager.setData(entity, "skyhighheroes:dyn/night_vision", false);
            break;
          case "help":
            system.systemMessage(entity, "<n>Night vision commands:");
            system.systemMessage(entity, "<n>!nv on <nh>-<n> Turns on night vision");
            system.systemMessage(entity, "<n>!nv off <nh>-<n> Turns off night vision");
            system.systemMessage(entity, "<n>!nv help <nh>-<n> Shows night vision commands");
            break;
          default:
            system.systemMessage(entity, "<e>Unknown <eh>nightVision<e> command! Try <eh>!nv help<e> for a list of commands!");
            break;
        };
      } else {
        system.systemMessage(entity, "<e>Unknown <eh>nightVision<e> command! Try <eh>!nv help<e> for a list of commands!");
      };
    },
  };
};