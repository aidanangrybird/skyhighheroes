/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  //All of the required functions and stuff go here
  function example() {
    return "foosh";
  };
  //Below is essentially what gets shown to the transer system or in node module terms, the default export
  return {
    //Required
    name: "example",
    //Type 1 - commands (can have data management)
    //Type 2 - messaging only
    //Type 3 - commands messaging and data management
    //Types 4-6 - Not used (Might be used in future)
    //Type 7 - EM Being calling signal
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