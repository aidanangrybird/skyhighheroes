var tmfAliens = [
  "Heatblast",
  "Wildmutt",
  "Diamondhead",
  "XLR8",
  "Grey Matter",
  "Four Arms",
  "Stinkfly",
  "Ripjaws",
  "Upgrade",
  "Ghostfreak",
  "Heatjaws",
  "Stinkarms",
  "Diamondmatter",
  "Cannonbolt",
  "Wildvine",
  "Blitzwolfer",
  "Snare-oh",
  "Frankenstrike",
  "Zs'S`kayr",
  "Upchuck",
  "Ditto",
  "Eyeguy",
  "Waybig"
];

var transformedVars = [
  "fiskheroes:dyn/nanite_timer",
];

function isTransformed(entity) {
  var transformed = false;
  transformedVars.forEach(variable => {
    transformed = entity.getDataOrDefault(variable, 0) == 1;
  });
  return transformed;
};

/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  /**
   * Scans for nearby entities
   * @param {JSEntity} entity - Player initiating the scan
   **/
  function entityScan(entity) {
    var entities = entity.world().getEntitiesInRangeOf(entity.pos(), 90);
    transer.systemMessage(entity, "<n>There " + ((entities.length == 1)?"is <nh>":"are <nh>") + entities.length + ((entities.length == 1)?"<n> entity ":"<n> entities ") + "nearby:")
    entities.forEach(being => {
      var beingName = being.getName();
      if (being.isWearingFullSuit()) {
        if (!being.getWornHelmet().isEmpty()) {
          var itemName = being.getWornHelmet().displayName().split("'s");
          beingName = itemName[0];
        };
        if (!being.getWornChestplate().isEmpty()) {
          var itemName = being.getWornChestplate().displayName().split("'s");
          beingName = itemName[0];
        };
        if (!being.getWornLeggings().isEmpty()) {
          var itemName = being.getWornLeggings().displayName().split("'s");
          beingName = itemName[0];
        };
        if (!being.getWornBoots().isEmpty()) {
          var itemName = being.getWornBoots().displayName().split("'s");
          beingName = itemName[0];
        };
        if (!isTransformed(being)) {
          beingName = being.getName();
        };
        if (isTransformed(being) && (entity.getData("fiskheroes:mask_open_timer2") == 1 || entity.getData("fiskheroes:mask_open_timer") == 5)) {
          beingName = being.getName();
        };
        if (being.getWornChestplate().suitType() == "tmf:omintrix" && being.getDataOrDefault("tmf:dyn/transformed", -1) > -1) {
          beingName = tmfAliens[being.getData("tmf:dyn/transformed")];
        };
        if (being.getData("fiskheroes:disguise") != null) {
          beingName = being.getData("fiskheroes:disguise");
        };
      };
      transer.systemMessage(entity, "<nh>" + beingName + " <n>(<nh>" + entity.getHealth() + "<n>)");
      if (entity.getName() != being.getName()) {
      };
    });
  };
  return {
    name: "scanner",
    type: 1,
    command: "sc",
    helpMessage: "<n>!sc <nh>-<n> Scanner",
    disabledMessage: "<e>Module <eh>scanner<e> is disabled!",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 3) {
        switch(arguments[1]) {
          case "entity":
            entityScan(entity);
            break;
          case "help":
            transer.systemMessage(entity, "<n>Scanner commands:");
            transer.systemMessage(entity, "<n>!sc <nh>entity<n> <nh>-<n> Entity scan");
            transer.systemMessage(entity, "<n>!sc help <nh>-<n> Shows scanner commands");
            break;
          default:
            transer.systemMessage(entity, "<e>Unknown <eh>scanner<e> command! Try <eh>!sc help<e> for a list of commands!");
            break;
        };
      } else {
        transer.systemMessage(entity, "<e>Unknown <eh>scanner<e> command! Try <eh>!sc help<e> for a list of commands!");
      };
    },
  };
};