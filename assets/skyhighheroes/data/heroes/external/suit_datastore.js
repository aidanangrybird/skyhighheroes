/**
 * You put all of the required functions in here
 * @param system - Required
 **/
function initModule(system) {
  /**
  * Checks if a suit drive is inserted
  * @param entity - Required
  **/
  function isSuitDriveInserted(entity) {
    var nbt = entity.getWornHelmet().nbt();
    var result = false;
    var equipment = nbt.getTagList("Equipment");
    if (equipment.tagCount() == 1) {
      var item = equipment.getCompoundTag(0).getCompoundTag("Item");
      if (item.getShort("id") == PackLoader.getNumericalItemId("fiskheroes:suit_data_drive")) {
        result = true;
      };
    };
    return result;
  };
  /**
  * Checks if a suit drive is inserted
  * @param entity - Required
  **/
  function suitDriveName(entity) {
    var nbt = entity.getWornHelmet().nbt();
    var result = "";
    var equipment = nbt.getTagList("Equipment");
    if (equipment.tagCount() == 1) {
      var item = equipment.getCompoundTag(0).getCompoundTag("Item");
      if (item.getShort("id") == PackLoader.getNumericalItemId("fiskheroes:suit_data_drive")) {
        result = item.getCompoundTag("tag").getCompoundTag("display").getString("Name");
      };
    };
    return result;
  };
  /**
  * Lists suits on suit data drive
  * @param entity - Required
  * @param manager - Required
  **/
  function listDriveSuits(entity, manager) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("suitDatastore")) {
      var newSuitsList = manager.newTagList();
      manager.setTagList(nbt, "suitDatastore", newSuitsList);
    };
    var suitDrive = null;
    if (isSuitDriveInserted(entity)) {
      suitDrive = nbt.getTagList("Equipment").getCompoundTag(0).getCompoundTag("Item").getCompoundTag("tag");
    };
    if (suitDrive != null) {
      var dataDriveSuits = system.getStringArray(suitDrive.getStringList("Suits"));
      system.moduleMessage(this, entity, "<nh>" + ((dataDriveSuits.length == 1) ? ("<nh>" + dataDriveSuits.length + "<n> suit:") : ("<nh>" + dataDriveSuits.length + "<n> suits:")));
      dataDriveSuits.forEach(entry => {
        system.moduleMessage(this, entity, "<nh>" + dataDriveSuits.indexOf(entry) + "<n>> <nh>" + entry);
      });
    } else {
      system.moduleMessage(this, entity, "<e>Suit drive not plugged in!");
    };
  };
  /**
  * Downloads suits off of suit data drive
  * @param module - module passthrough
  * @param entity - Required
  * @param manager - Required
  * @param suitList - List of suit indexes seperated by commas
  **/
  function downloadSuits(module, entity, manager, suitList) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("suitDatastore")) {
      var newSuitsList = manager.newTagList();
      manager.setTagList(nbt, "suitDatastore", newSuitsList);
    };
    if (!nbt.hasKey("downloadBuffer")) {
      var newBuffer = manager.newTagList();
      manager.setTagList(nbt, "downloadBuffer", newBuffer);
    };
    var suitDrive = null;
    if (isSuitDriveInserted(entity)) {
      suitDrive = nbt.getTagList("Equipment").getCompoundTag(0).getCompoundTag("Item").getCompoundTag("tag");
    };
    if (suitDrive != null) {
      var dataDriveSuitsArray = system.getStringArray(suitDrive.getStringList("Suits"));
      var suitsToDownload = [];
      var suitDownloadBuffer = nbt.getStringList("downloadBuffer")
      var suitDownloadBufferArray = system.getStringArray(nbt.getStringList("downloadBuffer"));
      var suitDownloadDuration = 0;
      var downloadsBuffered = 0;
      if (suitList == "*") {
        for (var i = 0;i<dataDriveSuitsArray.length;i++) {
          suitsToDownload.push(i);
        };
      } else {
        suitsToDownload = suitList.split(",");
      };
      suitsToDownload.forEach(entry => {
        if ((entry < (dataDriveSuitsArray.length)) && (entry > -1)) {
          var currentSuit = dataDriveSuitsArray[entry];
          if (suitDownloadBufferArray.indexOf(currentSuit) == -1) {
            manager.appendString(suitDownloadBuffer, currentSuit);
            suitDownloadBufferArray.push(currentSuit);
            var downloadDuration = 0;
            if (PackLoader.getSide() == "SERVER") {
              downloadDuration = system.clamp(Math.floor(Math.random() * 30), 10, 30)
            };
            suitDownloadDuration = suitDownloadDuration + downloadDuration;
            downloadsBuffered = downloadsBuffered + 1;
          };
        };
      });
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/download_duration", entity.getData("skyhighheroes:dyn/download_duration") + suitDownloadDuration);
      system.moduleMessage(module, entity, "<n>Attempting to download <nh>" + downloadsBuffered + "<n> " + ((downloadsBuffered == 1) ? "suit!" : "suits!"));
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/downloading", true);
    } else {
      system.moduleMessage(module, entity, "<e>Suit drive not plugged in!");
    };
  };
  /**
  * Downloads suits off of suit data drive
  * @param module - module passthrough
  * @param entity - Required
  * @param manager - Required
  * @param currentDownload - Current suit being downloaded
  **/
  function downloadSuit(module, entity, manager, currentDownload) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("suitDatastore")) {
      var newSuitsList = manager.newTagList();
      manager.setTagList(nbt, "suitDatastore", newSuitsList);
    };
    if (isSuitDriveInserted(entity)) {
      var downloadBuffer = nbt.getStringList("downloadBuffer");
      var suitDatastore = nbt.getStringList("suitDatastore");
      var suitDatastoreArray = system.getStringArray(nbt.getStringList("suitDatastore"));
      var currentSuit = downloadBuffer.getString(currentDownload);
      system.moduleMessage(module, entity, "<n>Downloading suit \"<nh>" + currentSuit + "<n>\"!");
      if (suitDatastoreArray.indexOf(currentSuit) == -1) {
        suitDatastoreArray.push(currentSuit);
        manager.appendString(suitDatastore, currentSuit);
        system.moduleMessage(module, entity, "<s>Successfully downloaded suit \"<sh>" + currentSuit + "<s>\" to " + system.getModelID(entity) + "!");
      } else {
        system.moduleMessage(module, entity, "<e>Failed to download suit \"<eh>" + currentSuit + "<e>\"! Already exists in datastore!");
      };
    } else {
      system.moduleMessage(module, entity, "<e>Suit drive not plugged in!");
    };
  };
  /**
  * Uploads suits to suit data drive
  * @param module - module passthrough
  * @param entity - Required
  * @param manager - Required
  * @param suitList - List of suit indexes seperated by commas
  **/
  function uploadSuits(module, entity, manager, suitList) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("suitDatastore")) {
      var newSuits = manager.newTagList();
      manager.setTagList(nbt, "suitDatastore", newSuits);
    };
    if (!nbt.hasKey("uploadBuffer")) {
      var newBuffer = manager.newTagList();
      manager.setTagList(nbt, "uploadBuffer", newBuffer);
    };
    var suitDrive = null;
    if (isSuitDriveInserted(entity)) {
      suitDrive = nbt.getTagList("Equipment").getCompoundTag(0).getCompoundTag("Item").getCompoundTag("tag");
    };
    if (suitDrive != null) {
      var suitDatastoreArray = system.getStringArray(nbt.getStringList("suitDatastore"));
      var suitsToUpload = suitList.split(","); //Indexes of suits
      var suitUploadBuffer = nbt.getStringList("uploadBuffer");
      var suitUploadBufferArray = system.getStringArray(nbt.getStringList("uploadBuffer"));
      var suitUploadDuration = 0;
      var uploadsBuffered = 0;
      suitsToUpload.forEach(entry => {
        if ((entry < (suitDatastoreArray.length)) && (entry > -1)) {
          var currentSuit = suitDatastoreArray[entry];
          if (suitUploadBufferArray.indexOf(currentSuit) == -1) {
            manager.appendString(suitUploadBuffer, currentSuit);
            suitUploadBufferArray.push(currentSuit);
            var uploadDuration = 0;
            if (PackLoader.getSide() == "SERVER") {
              uploadDuration = system.clamp(Math.floor(Math.random() * 30), 10, 30)
            };
            suitUploadDuration = suitUploadDuration + uploadDuration;
            uploadsBuffered = uploadsBuffered + 1;
          };
        };
      });
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/upload_duration", entity.getData("skyhighheroes:dyn/upload_duration") + suitUploadDuration);
      system.moduleMessage(module, entity, "<n>Attempting to upload <nh>" + uploadsBuffered + "<n> " + ((uploadsBuffered == 1) ? "suit!" : "suits!"));
      manager.setDataWithNotify(entity, "skyhighheroes:dyn/uploading", true);
    } else {
      system.moduleMessage(module, entity, "<e>Suit drive not plugged in!");
    };
  };
  /**
  * Uploads suiit to suit data drive
  * @param module - module passthrough
  * @param entity - Required
  * @param manager - Required
  * @param currentUpload - Suit index
  **/
  function uploadSuit(module, entity, manager, currentUpload) {
    var nbt = entity.getWornHelmet().nbt();
    if (isSuitDriveInserted(entity)) {
      var uploadBuffer = nbt.getStringList("uploadBuffer");
      var suitDrive = nbt.getTagList("Equipment").getCompoundTag(0).getCompoundTag("Item").getCompoundTag("tag");
      var suitDriveArray = system.getStringArray(suitDrive.getStringList("Suits"));
      var currentSuit = uploadBuffer.getString(currentUpload);
      system.moduleMessage(module, entity, "<n>Uploading suit \"<nh>" + currentSuit + "<n>\"!");
      if ((suitDriveArray.indexOf(currentSuit) == -1) && (suitDriveArray.length < 9)) {
        suitDriveArray.push(currentSuit);
        manager.appendString(suitDrive.getStringList("Suits"), currentSuit);
        system.moduleMessage(module, entity, "<s>Successfully uploaded suit \"<sh>" + currentSuit + "<s>\" to " + suitDriveName(entity) + "<s>!");
      } else {
        system.moduleMessage(module, entity, "<e>Failed to uploaded suit \"<eh>" + currentSuit + "<e>\"! Already exists " + suitDriveName(entity) + "<e>!");
      };
    } else {
      system.moduleMessage(module, entity, "<e>Suit drive not plugged in!");
    };
  };
  /**
   * Removes suits by index
   * @param {JSEntity} entity - Required
   * @param {JSDataManager} manager - Required
   * @param {string} suitIndex - Index of suit to remove
   **/
  function removeSuit(entity, manager, suitIndex) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("suitDatastore")) {
      var newSuitsList = manager.newTagList();
      manager.setTagList(nbt, "suitDatastore", newSuitsList);
    };
    var suitDatastoreArray = system.getStringArray(nbt.getStringList("suitDatastore"));
    var suitsRemoved = 0;
    var suitDatastore = nbt.getStringList("suitDatastore");
    if (suitIndex == "*") {
      manager.removeTag(nbt, "suitDatastore");
      system.moduleMessage(this, entity, "<s>Deleted the entire suit datastore!");
    } else {
      if ((suitIndex < suitDatastoreArray.length) && (suitIndex > -1)) {
        var currentSuit = suitDatastoreArray[suitIndex];
        system.moduleMessage(this, entity, "<n>Removeing suit \"<nh>" + currentSuit + "<n>\"!");
        if (suitDatastoreArray.indexOf(currentSuit) > -1) {
          manager.removeTag(suitDatastore, suitIndex);
          system.moduleMessage(this, entity, "<s>Successfully removed suit \"<sh>" + currentSuit + "<s>\"!");
          suitsRemoved = suitsRemoved + 1;
        } else {
          system.moduleMessage(this, entity, "<e>Failed to remove suit \"<eh>" + currentSuit + "<e>\"!");
        };
      };
    };
  };
  /**
  * Lists suits stored internally
  * @param entity - Required
  * @param manager - Required
  **/
  function listSuits(entity, manager) {
    var nbt = entity.getWornHelmet().nbt();
    if (!nbt.hasKey("suitDatastore")) {
      var newSuitsList = manager.newTagList();
      manager.setTagList(nbt, "suitDatastore", newSuitsList);
    };
    var suitDatastoreArray = system.getStringArray(nbt.getStringList("suitDatastore"));
    system.moduleMessage(this, entity, "<nh>" + ((suitDatastoreArray.length == 1) ? suitDatastoreArray.length + "<n> suit:" : suitDatastoreArray.length + "<n> suits:"));
    suitDatastoreArray.forEach(entry => {
      system.moduleMessage(this, entity, "<nh>" + suitDatastoreArray.indexOf(entry) + "<n>> <nh>" + entry);
    });
  };
  return {
    name: "suitDatastore",
    moduleMessageName: "Suits",
    type: 11,
    command: "suits",
    powers: ["skyhighheroes:suit_datastore"],
    helpMessage: "<n>!suits <nh>-<n> Suit Datastore",
    commandHandler: function (entity, manager, arguments) {
      if (arguments.length > 1 && arguments.length < 4) {
        switch(arguments[1]) {
          case "listDrive":
            listDriveSuits(entity, manager);
            break;
          case "download":
            downloadSuits(this, entity, manager, arguments[2]);
            break;
          case "upload":
            uploadSuits(this, entity, manager, arguments[2]);
            break;
          case "rem":
            removeSuit(entity, manager, arguments[2]);
            break;
          case "list":
            listSuits(entity, manager);
            break;
          case "help":
            system.moduleMessage(this, entity, "<n>Suits Datastore commands:");
            system.moduleMessage(this, entity, "<n>!suits rem <index> <nh>-<n> Deletes suit by index");
            system.moduleMessage(this, entity, "<n>!suits list <nh>-<n> Lists stored suits");
            system.moduleMessage(this, entity, "<n>!suits listDrive <nh>-<n> Lists suits on plugged in data drive");
            system.moduleMessage(this, entity, "<n>!suits download <suits> <nh>-<n> Downloads suits (comma seperated indexes) from inserted data drive");
            system.moduleMessage(this, entity, "<n>!suits upload <suits> <nh>-<n> Uploads suits (comma seperated indexes) to inserted data drive");
            system.moduleMessage(this, entity, "<n>!suits help <nh>-<n> Shows this list");
            break;
          default:
            system.moduleMessage(this, entity, "<e>Unknown <eh>suitDatastore<e> command! Try <eh>!suits help<e> for a list of commands!");
            break;
        };
      } else {
        system.moduleMessage(this, entity, "<e>Unknown <eh>suitDatastore<e> command! Try <eh>!suits help<e> for a list of commands!");
      };
    },
    tickHandler: function (entity, manager) {
      var nbt = entity.getWornHelmet().nbt();
      if (entity.getData("skyhighheroes:dyn/download_timer") >= 1) {
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/downloading", false);
        system.moduleMessage(this, entity, "<s>Finished downloading suits!");
        manager.setTagList(nbt, "downloadBuffer", manager.newTagList());
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/download_duration", 0);
      };
      var suitDownloadBuffer = manager.newTagList();
      if (nbt.getStringList("downloadBuffer") != null) {
        suitDownloadBuffer = nbt.getStringList("downloadBuffer");
      };
      var downloadDuration = entity.getData("skyhighheroes:dyn/download_duration")+10;
      if (entity.getData("skyhighheroes:dyn/downloading")) {
        var step = (1/downloadDuration)
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/download_timer", entity.getData("skyhighheroes:dyn/download_timer")+step);
      };
      if (!entity.getData("skyhighheroes:dyn/downloading") && entity.getData("skyhighheroes:dyn/download_timer") >= 1) {
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/download_timer", 0);
      };
      if ((entity.getData("skyhighheroes:dyn/download_timer") < 1) && (entity.getData("skyhighheroes:dyn/download_timer") > 0) && entity.getData("skyhighheroes:dyn/downloading")) {
        var suitDownloadDuration = (downloadDuration/suitDownloadBuffer.tagCount()).toFixed(0);
        var currentTime = Math.ceil(entity.getData("skyhighheroes:dyn/download_timer")*downloadDuration);
        if (currentTime % suitDownloadDuration == 0) {
          var currentDownload = ((currentTime/suitDownloadDuration)-1);
          downloadSuit(this, entity, manager, currentDownload);
        };
      };
      if (entity.getData("skyhighheroes:dyn/upload_timer") == 1) {
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/uploading", false);
        system.moduleMessage(this, entity, "<s>Finished uploading suits!");
        manager.setTagList(nbt, "uploadBuffer", manager.newTagList());
      };
      var suitUploadBuffer = manager.newTagList();
      if (nbt.getStringList("uploadBuffer") != null) {
        suitUploadBuffer = nbt.getStringList("uploadBuffer");
      };
      var uploadDuration = entity.getData("skyhighheroes:dyn/upload_duration")+10;
      if (entity.getData("skyhighheroes:dyn/uploading")) {
        var step = (1/uploadDuration)
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/upload_timer", entity.getData("skyhighheroes:dyn/upload_timer")+step);
      };
      if (!entity.getData("skyhighheroes:dyn/uploading") && entity.getData("skyhighheroes:dyn/upload_timer") >= 1) {
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/upload_timer", 0);
      };
      if (PackLoader.getSide() == "SERVER" && (entity.getData("skyhighheroes:dyn/upload_timer") < 1) && (entity.getData("skyhighheroes:dyn/upload_timer") > 0) && entity.getData("skyhighheroes:dyn/uploading")) {
        var suitUploadDuration = (uploadDuration/suitUploadBuffer.tagCount()).toFixed(0);
        var currentTime = Math.ceil(entity.getData("skyhighheroes:dyn/upload_timer")*uploadDuration);
        if (currentTime % suitUploadDuration == 0) {
          var currentUpload = ((currentTime/suitUploadDuration)-1);
          uploadSuit(this, entity, manager, currentUpload);
        };
      };
    },
    whenDisabled: function (entity, manager) {
      manager.setData(entity, "skyhighheroes:dyn/downloading", false);
      manager.setData(entity, "skyhighheroes:dyn/uploading", false);
    },
  };
};