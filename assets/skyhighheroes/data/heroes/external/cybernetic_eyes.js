/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  /**
   * Adds preset
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   * @param {string} presetName - Name of preset
   **/
  function addPreset(entity, manager, presetName) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("eyePresets")) {
      var newPresetsList = manager.newTagList();
      manager.setTagList(nbt, "eyePresets", newPresetsList);
    };
    var presets = nbt.getTagList("eyePresets");
    var presetIndex = getPresetArray(entity, manager).indexOf(presetName);
    if (presetIndex > -1) {
      system.moduleMessage(this, entity, "<e>Duplicate preset name <eh>" + presetName + "<e>!");
    } else {
      var preset = manager.newCompoundTag();
      manager.setString(preset, "presetName", presetName);
      var presetArray = [nbt.getShort("eyeLeftLid"), nbt.getShort("eyeRightLid"), nbt.getShort("eyeLeftX"), nbt.getShort("eyeRightX"), nbt.getShort("eyeLeftY"), nbt.getShort("eyeRightY")];
      manager.setIntArray(preset, "values", presetArray);
      manager.appendTag(presets, preset);
      system.moduleMessage(this, entity, "<s>Preset created with name: <sh>" + presetName + "<s>!");
    };
  };
  /**
   * List presets
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   **/
  function listPresets(entity, manager) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("eyePresets")) {
      var newPresetsList = manager.newTagList();
      manager.setTagList(nbt, "eyePresets", newPresetsList);
    };
    var presets = getPresetArray(entity, manager);
    system.moduleMessage(this, entity, "<n>You have <nh>" + presets.length + ((presets.length == 1) ? "<n> preset!" : "<n> presets!"));
    presets.forEach(entry => {
      system.moduleMessage(this, entity, "<nh>" + entry);
    });
  };
  /**
   * Remove preset by preset name
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   * @param {string} presetName - Name of preset
   **/
  function removePreset(entity, manager, presetName) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("eyePresets")) {
      var newPresetsList = manager.newTagList();
      manager.setTagList(nbt, "eyePresets", newPresetsList);
    };
    var presets = nbt.getTagList("eyePresets");
    var presetIndex = getPresetArray(entity).indexOf(presetName);
    if (presetIndex < 0) {
      system.moduleMessage(this, entity, "<e>Unable to find preset with name <eh>" + presetName + "<e> to remove!");
    } else {
      system.moduleMessage(this, entity, "<e>Removed preset <eh>" + presetName + "<e>!");
      manager.removeTag(presets, presetIndex);
    };
  };
  /**
   * Turns NBT String List into an array for easier use in code
   * @param {JSEntity} entity - Entity to create preset array from
   * @returns Array of preset names
   **/
  function getPresetArray(entity, manager) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("eyePresets")) {
      var newPresetsList = manager.newTagList();
      manager.setTagList(nbt, "eyePresets", newPresetsList);
    };
    var presetList = nbt.getTagList("eyePresets");
    var count = presetList.tagCount();
    var result = [];
    for (i=0;i<count;i++) {
      result.push(presetList.getCompoundTag(i).getString("presetName"));
    };
    return result;
  };
    /**
   * Sets preset by preset name
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   * @param {string} presetName - Name of preset
   **/
  function setPreset(entity, manager, presetName) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("eyePresets")) {
      var newPresetsList = manager.newTagList();
      manager.setTagList(nbt, "eyePresets", newPresetsList);
    };
    var presets = nbt.getTagList("eyePresets");
    var presetIndex = getPresetArray(entity).indexOf(presetName);
    if (presetIndex < 0) {
      system.moduleMessage(this, entity, "<e>Unable to find preset with name <eh>" + presetName + "<e> to set!");
    } else {
      var preset = presets.getCompoundTag(presetIndex);
      var presetArray = preset.getIntArray("values");
      manager.setShort(nbt, "eyeLeftLid", presetArray[0]);
      manager.setShort(nbt, "eyeRightLid", presetArray[1]);
      manager.setShort(nbt, "eyeLeftX", presetArray[2]);
      manager.setShort(nbt, "eyeRightX", presetArray[3]);
      manager.setShort(nbt, "eyeLeftY", presetArray[4]);
      manager.setShort(nbt, "eyeRightY", presetArray[5]);
      system.moduleMessage(this, entity, "<n>Set eyes to preset <nh>" + presetName + "<n>!");
    };
  };
  return {
    name: "eyes",
    moduleMessageName: "Eyes",
    type: 1,
    command: "eyes",
    helpMessage: "<n>!eyes <nh>-<n> Eyes",
    commandHandler: function (entity, manager, argList) {
      if (argList.length > 1 && argList.length < 5) {
        var nbt = entity.getWornHelmet().nbt();
        switch(argList[1]) {
          case "set":
            switch(argList[2]) {
              case "lids":
                manager.setShort(nbt, "eyeLeftLid", system.clamp(parseInt(argList[3]), 0, 100));
                manager.setShort(nbt, "eyeRightLid", system.clamp(parseInt(argList[3]), 0, 100));
                system.moduleMessage(this, entity, "<n>Eye lids set to <nh>" + nbt.getShort("eyeLeftLid") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_left_lid_timer", system.round(entity.getData("skyhighheroes:dyn/eye_left_lid_timer")));
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_right_lid_timer", system.round(entity.getData("skyhighheroes:dyn/eye_right_lid_timer")));
                break;
              case "leftLid":
                manager.setShort(nbt, "eyeLeftLid", system.clamp(parseInt(argList[3]), 0, 100));
                system.moduleMessage(this, entity, "<n>Left eye lid set to <nh>" + nbt.getShort("eyeLeftLid") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_left_lid_timer", system.round(entity.getData("skyhighheroes:dyn/eye_left_lid_timer")));
                break;
              case "rightLid":
                manager.setShort(nbt, "eyeRightLid", system.clamp(parseInt(argList[3]), 0, 100));
                system.moduleMessage(this, entity, "<n>eRight eye lid set to <nh>" + nbt.getShort("eyeRightLid") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_right_lid_timer", system.round(entity.getData("skyhighheroes:dyn/eye_right_lid_timer")));
                break;
              case "X":
                manager.setShort(nbt, "eyeLeftX", system.clamp(parseInt(argList[3]), 0, 100));
                manager.setShort(nbt, "eyeRightX", system.clamp(parseInt(argList[3]), 0, 100));
                system.moduleMessage(this, entity, "<n>Eye X set to <nh>" + nbt.getShort("eyeLeftX") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_left_X_timer", system.round(entity.getData("skyhighheroes:dyn/eye_left_X_timer")));
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_right_X_timer", system.round(entity.getData("skyhighheroes:dyn/eye_right_X_timer")));
                break;
              case "leftX":
                manager.setShort(nbt, "eyeLeftX", system.clamp(parseInt(argList[3]), 0, 100));
                system.moduleMessage(this, entity, "<n>Left eye X set to <nh>" + nbt.getShort("eyeLeftX") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_left_X_timer", system.round(entity.getData("skyhighheroes:dyn/eye_left_X_timer")));
                break;
              case "rightX":
                manager.setShort(nbt, "eyeRightX", system.clamp(parseInt(argList[3]), 0, 100));
                system.moduleMessage(this, entity, "<n>Right eye X set to <nh>" + nbt.getShort("eyeRightX") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_right_X_timer", system.round(entity.getData("skyhighheroes:dyn/eye_right_X_timer")));
                break;
              case "Y":
                manager.setShort(nbt, "eyeLeftY", system.clamp(parseInt(argList[3]), -100, 100));
                manager.setShort(nbt, "eyeRightY", system.clamp(parseInt(argList[3]), -100, 100));
                system.moduleMessage(this, entity, "<n>Eye Y set to <nh>" + nbt.getShort("eyeLeftY") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_left_Y_timer", system.round(entity.getData("skyhighheroes:dyn/eye_left_Y_timer")));
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_right_Y_timer", system.round(entity.getData("skyhighheroes:dyn/eye_right_Y_timer")));
                break;
              case "leftY":
                manager.setShort(nbt, "eyeLeftY", system.clamp(parseInt(argList[3]), -100, 100));
                system.moduleMessage(this, entity, "<n>Left eye Y set to <nh>" + nbt.getShort("eyeLeftY") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_left_Y_timer", system.round(entity.getData("skyhighheroes:dyn/eye_left_Y_timer")));
                break;
              case "rightY":
                manager.setShort(nbt, "eyeRightY", system.clamp(parseInt(argList[3]), -100, 100));
                system.moduleMessage(this, entity, "<n>Right eye Y set to <nh>" + nbt.getShort("eyeRightY") + "<n>!");
                manager.setInterpolatedData(entity, "skyhighheroes:dyn/prev_eye_right_Y_timer", system.round(entity.getData("skyhighheroes:dyn/eye_right_Y_timer")));
                break;
            };
            break
          case "add":
            (argList.length == 3) ? addPreset(entity, manager, argList[2]) : system.moduleMessage(this, entity, "<n>!eye add <nh><name>");
            break;
          case "rem":
            (argList.length == 3) ? removePreset(entity, manager, argList[2]) : system.moduleMessage(this, entity, "<n>!eye rem <nh><name>");
            break;
          case "preset":
            (argList.length == 3) ? setPreset(entity, manager, argList[2]) : system.moduleMessage(this, entity, "<n>!eye preset <nh><name>");
            break;
          case "list":
            listPresets(entity, manager);
            break;
          case "reset":
            manager.setShort(nbt, "eyeLeftLid", 0);
            manager.setShort(nbt, "eyeRightLid", 0);
            manager.setShort(nbt, "eyeLeftX", 0);
            manager.setShort(nbt, "eyeRightX", 0);
            manager.setShort(nbt, "eyeLeftY", 0);
            manager.setShort(nbt, "eyeRightY", 0);
            system.moduleMessage(this, entity, "<n>Reset eye positions!");
            break;
          case "status":
            system.moduleMessage(this, entity, "<n>Left eye lid: <nh>" + nbt.getShort("eyeLeftLid"));
            system.moduleMessage(this, entity, "<n>Right eye lid: <nh>" + nbt.getShort("eyeRightLid"));
            system.moduleMessage(this, entity, "<n>Left eye X: <nh>" + nbt.getShort("eyeLeftX"));
            system.moduleMessage(this, entity, "<n>Right eye X: <nh>" + nbt.getShort("eyeRightX"));
            system.moduleMessage(this, entity, "<n>Left eye Y: <nh>" + nbt.getShort("eyeLeftY"));
            system.moduleMessage(this, entity, "<n>Right eye Y: <nh>" + nbt.getShort("eyeRightY"));
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Eye commands:");
            system.moduleMessage(this, entity, "<n>!eye add <nh><name><n> <nh>-<n> Adds preset by name");
            system.moduleMessage(this, entity, "<n>!eye rem <nh><name><n> <nh>-<n> Removes preset by name");
            system.moduleMessage(this, entity, "<n>!eye preset <nh><name><n> <nh>-<n> Sets preset by name");
            system.moduleMessage(this, entity, "<n>!eye set <lids|leftLid|rightLid|X|leftX|rightX|Y|leftY|rightY> <nh><number><n> <nh>-<n> Sets property to number");
            system.moduleMessage(this, entity, "<n>!eye list <nh>-<n> Lists presets");
            system.moduleMessage(this, entity, "<n>!eye status <nh>-<n> Shows positions of eyes");
            system.moduleMessage(this, entity, "<n>!eye reset <nh>-<n> Resets positions of eyes");
            system.moduleMessage(this, entity, "<n>!eye help <nh>-<n> Shows this list");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>eyes<e> command! Try <eh>!eye help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>eyes<e> command! Try <eh>!eye help<e> for a list of commands!");
      };
    },
  };
};