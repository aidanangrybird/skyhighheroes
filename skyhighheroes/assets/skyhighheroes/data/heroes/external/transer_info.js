function moduleName() {
  return "blockInfo";
};
/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  //All of the required functions and stuff go here
  return {
    messageHandler: function (entity, transformed, untransformed, color) {
      //You put all of the message handling here
    },
    commandHandler: function (entity, manager) {
      //You put all of the command handling here
    }
  };
};