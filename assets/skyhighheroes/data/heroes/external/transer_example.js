/**
 * You put all of the required functions in here
 * @param transer - Required
 **/
function init(transer) {
  //All of the required functions and stuff go here
  function example() {
    return "foosh";
  };
  //Below is essentially what gets shown to the transer system or in node module terms, the default export
  return {
    //Required
    name: "example",
    //Required
    //Type 0 - System reserved
    //Type 1 - commands only
    //Type 2 - commands and data management
    //Type 3 - commands messaging and data management
    //Types 4-7 - Not used (Might be used in future)
    //Type 8 - EM Being
    //Type 9 - EM Wave Change
    type: 0,
    messageHandler: function (entity, transformed, untransformed, color) {
      //You put all of the message handling here
    },
    commandHandler: function (entity, manager) {
      //You put all of the command handling here
    }
  };
};