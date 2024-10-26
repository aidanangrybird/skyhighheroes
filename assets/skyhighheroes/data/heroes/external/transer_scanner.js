/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  /**
   * Checks if a player has another player as a contact
   * @param {JSEntity} entity - Player getting checked
   * @param {string} groupName - Group name being checked
   * @returns If sender is in receiver's contacts
   **/
  function entityScan(entity) {
    var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 30);
    transer.systemMessage(entity, "<n>There " + ((entities.length == 1)?"is <nh>":"are <nh>") + entities.length + ((entities.length == 1)?"<n> entity ":"<n> entities ") + "nearby:")
    entities.forEach(being => {
      var beingStatus = "<nh>" + being.getName() + " <n>(<nh>" + entity.getHealth() + "<n>)"
      transer.systemMessage(entity, beingStatus);
    });
  };
  return {
    name: "scanner",
    type: 1,
    command: "sc",
    helpMessage: "<n>!sc <nh>-<n> Scanner",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 3 && !transer.isModuleDisabled(entity, this.name)) {
        switch(arguments[1]) {
          case "entity":
            entityScan(entity);
            return true;
          case "help":
            transer.systemMessage(entity, "<n>Scanner commands:");
            transer.systemMessage(entity, "<n>!sc <nh>entity<n> <nh>-<n> Entity scan");
            transer.systemMessage(entity, "<n>!sc help <nh>-<n> Shows scanner commands");
            return true;
          default:
            transer.systemMessage(entity, "<e>Unknown <eh>scanner<e> command! Try <eh>!sc help<e> for a list of commands!");
            return true;
        };
      } else {
        if (!transer.isModuleDisabled(entity, this.name())) {
          transer.systemMessage(entity, "<e>Unknown <eh>scanner<e> command! Try <eh>!sc help<e> for a list of commands!");
        } else {
          transer.systemMessage(entity, "<e>Module <eh>scanner<e> is disabled!");
        };
        return true;
      };
    },
  };
};