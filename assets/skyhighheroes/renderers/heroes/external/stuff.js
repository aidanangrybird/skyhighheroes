//Flight Trail
function bindFlightTrail(renderer, trailType) {
  var prop = renderer.bindProperty("fiskheroes:trail");
  prop.setTrail(renderer.createResource("TRAIL", trailType));
  prop.setCondition(entity => entity.getData("fiskheroes:flight_boost_timer") > 0);
  return prop;
};

//Speed Trail
function bindSpeedTrail(renderer, trailType) {
  var prop = renderer.bindProperty("fiskheroes:trail");
  prop.setTrail(renderer.createResource("TRAIL", trailType));
  prop.setCondition(entity => entity.getData("fiskheroes:speeding"));
  return prop;
};

function bindCloud(renderer, propertyName, cloudType) {
  return renderer.bindProperty(propertyName).setCloud(renderer.createResource("PARTICLE_CLOUD", cloudType));
}

//Animation stuff
function parseAnimationEntry(renderer, value) {
  if (typeof value === "string") {
    return {
      "anim": renderer.createResource("ANIMATION", value),
      "weight": 1
    };
  };
  return {
    "anim": renderer.createResource("ANIMATION", value.key),
    "weight": value.hasOwnProperty("weight") ? value.weight : 1
  };
};
function addAnimationEvent(renderer, key, value) {
  var event = renderer.createResource("ANIMATION_EVENT", null);

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; ++i) {
      var e = parseAnimationEntry(renderer, value[i]);
      event.bindAnimation(e.anim, e.weight);
    };
  } else {
    var e = parseAnimationEntry(renderer, value);
    event.bindAnimation(e.anim, e.weight);
  };

  renderer.addAnimationEvent(key, event);
  return event;
};
function addAnimation(renderer, key, anim) {
  if (typeof anim === "string") {
    anim = renderer.createResource("ANIMATION", anim);
  };

  renderer.addCustomAnimation(key, anim);
  return anim;
};
function addAnimationWithData(renderer, key, anim, dataVar) {
  return addAnimation(renderer, key, anim).setData((entity, data) => data.load(entity.getInterpolatedData(dataVar)));
};

function setOpacityWithData(renderer, min, max, data) {
  renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
    return max + (min - max) * entity.getInterpolatedData(data);
  });
};

//Useful Stuff
function emCeilingAnimation(renderer) {
  addAnimationEvent(renderer, "CEILING_CRAWL", "skyhighheroes:em_wall_ceiling_stand");
};

function emTeleport(renderer) {
  setOpacityWithData(renderer, 0.0, 1.0, "fiskheroes:teleport_timer");
};

function initHoloFlightAnim(renderer, name, value) {
  var anim = renderer.createResource("ANIMATION", value);
  renderer.addCustomAnimation(name, anim);
  anim.setData((entity, data) => data.load(entity.loop(20 * Math.PI) + 0.4));
  anim.priority = -9.5;
  anim.setCondition(entity => (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM"));
  renderer.reprioritizeDefaultAnimation("PUNCH", -9);
  renderer.reprioritizeDefaultAnimation("HOLD_CHRONOS_RIFLE", -9);
  renderer.reprioritizeDefaultAnimation("HOLD_PIZZA", -9);
  renderer.reprioritizeDefaultAnimation("BLOCK_CAPS_SHIELD", -9);
  renderer.reprioritizeDefaultAnimation("AIM_BOW", -9);
  return anim;
};

function bindBeam(renderer, propertyName, beam, anchor, color, entries) {
  var prop = renderer.bindProperty(propertyName).setAnchor(anchor);
  var constln = renderer.createResource("BEAM_CONSTELLATION", null);

  for (var i = 0; i < entries.length; ++i) {
      constln.bindBeam(entries[i]);
  }

  if (typeof beam === "string") {
      beam = renderer.createResource("BEAM_RENDERER", beam);
  }

  prop.setConstellation(constln);
  prop.setRenderer(beam);
  prop.color.set(color);
  return prop;
};

/**
 * clamp as in FSK
 * @param timer - input timer
 * @param min - minimum value
 * @param max - maximum
 **/
function clamp(timer, min, max) {
  return Math.min(Math.max(timer, min), max);
};
/**
 * animate as in FSK
 * @param timer - input timer
 * @param duration - duration of frame
 * @param start - start of frame
 **/
function animate(timer, duration, start) {
  return (timer > start && timer <= start + duration) ? ((timer - start) / duration) : 0.0;
};
/**
 * animate2 as in FSK
 * @param timer - input timer
 * @param duration - duration of frame
 * @param start - start of frame
 * @param fadeIn - how long to fade in
 * @param fadeOut - how long to fade out
 **/
function animate2(timer, duration, start, fadeIn, fadeOut) {
  fadeIn = clamp(fadeIn, 0.0, duration);
  fadeOut = clamp(fadeOut, 0.0, duration - fadeIn);
  if (timer >= start && timer <= start + duration) {
    pos = timer - start;
    if (pos < fadeIn) {
      return animate(pos, fadeIn, 0.0);
    };
    if (pos >= duration - fadeOut) {
      return 1.0 - animate(pos, fadeOut, duration - fadeOut);
    };
    return 1.0;
  };
  return 0.0;
};

var hostileEntities = [
  "fiskheroes.Creetle",
  "fiskheroes.Cactus",
  "Zombie",
  "Skeleton",
  "Spider",
  "Creeper",
  "Ghast",
  "Enderman",
  "Slime",
  "Witch",
  "Cave Spider",
  "Silverfish",
  "Blaze",
  "Magma Cube",
  "Zombie Pigman"
];

var friendlyEntities = [
  "Pig",
  "Sheep",
  "Cow",
  "Bat",
  "Squid",
  "Chicken",
  "Villager",
  "Wolf",
  "Mooshroom",
  "Ocelot",
  "Horse",
  "Snow Golem",
  "Iron Golem"
];

function entityLocation(renderer) {
  var beamRenderer = renderer.createResource("BEAM_RENDERER", "skyhighheroes:entity_location");
  var shapeEntityLocation = renderer.createResource("SHAPE", null);
  var lineEntityLocation = shapeEntityLocation.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [100.0, 100.0] });
  var beamEntityLocation = renderer.createEffect("fiskheroes:lines").setRenderer(beamRenderer).setShape(shapeEntityLocation).setOffset(0.0, 0.0, 0.0);
  beamEntityLocation.mirror = false;
  beamEntityLocation.setScale(16.0);
  beamEntityLocation.anchor.set("head");
  beamEntityLocation.anchor.ignoreAnchor(true);
  beamEntityLocation.color.set(0x000000);

  return {
    render: function (isFirstPersonArm, entity, otherEntity, color) {
      if (isFirstPersonArm) {
        beamEntityLocation.color.set(color);
        var distance = entity.eyePos().distanceTo(otherEntity.pos().x(), otherEntity.pos().y(), otherEntity.pos().z());
        var pitch = (entity.rotationInterpolated().y()/180)*Math.PI + Math.atan2((otherEntity.pos().y()-entity.eyePos().y()), (Math.sqrt(otherEntity.pos().x()^2 + otherEntity.pos().z()^2)-entity.eyePos().xz().distanceTo(otherEntity.pos().x(), otherEntity.pos().z())));
        var yaw = (entity.rotationInterpolated().x()/180)*Math.PI - Math.atan2((otherEntity.pos().z()-entity.eyePos().z()), (otherEntity.pos().x()-entity.eyePos().x()));
        var distanceXZ = entity.eyePos().multiply(1, 0, 1).distanceTo(otherEntity.pos().x(), 0, otherEntity.pos().z());
        var x = distanceXZ*Math.cos(yaw);
        var y = (entity.eyePos().y()-otherEntity.pos().y());
        var z = distanceXZ*Math.sin(yaw);
        lineEntityLocation.start.x = lineEntityLocation.end.x = x;
        lineEntityLocation.start.y = y;
        lineEntityLocation.end.y = y - 3;
        lineEntityLocation.start.z = lineEntityLocation.end.z = z;
        lineEntityLocation.size.x = clamp(distance, 16.0, 1024.0);
        lineEntityLocation.size.y = clamp(distance, 16.0, 1024.0);
        beamEntityLocation.setRotation(-1*entity.rotationInterpolated().y(), 0, 0);
        beamEntityLocation.render();
      };
    }
  };
};

function location(renderer) {
  var beamRenderer = renderer.createResource("BEAM_RENDERER", "skyhighheroes:location");
  var shapeLocation = renderer.createResource("SHAPE", null);
  var lineLocation = shapeLocation.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.0, 1.0] });
  var beamLocation = renderer.createEffect("fiskheroes:lines").setRenderer(beamRenderer).setShape(shapeLocation).setOffset(0.0, 0.0, 0.0);
  beamLocation.mirror = false;
  beamLocation.setScale(16.0);
  beamLocation.anchor.set("head");
  beamLocation.anchor.ignoreAnchor(true);
  beamLocation.color.set(0x000000);

  return {
    render: function (isFirstPersonArm, entity, posX, posY, posZ, color) {
      if (isFirstPersonArm) {
        beamLocation.color.set(color);
        var distance = entity.eyePos().distanceTo(posX, posY, posZ);
        var pitch = (entity.rotationInterpolated().y()/180)*Math.PI + Math.atan2((posY-entity.eyePos().y()), (Math.sqrt(posX^2 + posZ^2)-entity.eyePos().xz().distanceTo(posX, posZ)));
        var yaw = (entity.rotationInterpolated().x()/180)*Math.PI - Math.atan2((posZ-entity.eyePos().z()), (posX-entity.eyePos().x()));
        var distanceXZ = entity.eyePos().multiply(1, 0, 1).distanceTo(posX, 0, posZ);
        var x = distanceXZ*Math.cos(yaw);
        var y = (entity.eyePos().y()-posY);
        var z = distanceXZ*Math.sin(yaw);
        beamLocation.setRotation(-1*entity.rotationInterpolated().y(), 0, 0); 
        lineLocation.start.x = lineLocation.end.x = x;
        lineLocation.start.y = y + 1;
        lineLocation.end.y = y - 0.0625*clamp(distance, 1.0, 1024.0);;
        lineLocation.start.z = lineLocation.end.z = z;
        lineLocation.size.x = clamp(distance, 16.0, 1024.0);
        lineLocation.size.y = clamp(distance, 16.0, 1024.0);
        beamLocation.render();
      };
    }
  };
};

function getBearing(entity) {
  var rotation = entity.rotationInterpolated().x()%360;
  var bearing = ((Math.abs((rotation < 0) ? (rotation+360) : rotation)+180) % 360);
  return bearing;
};

/**
 * Gets direction from one vector to another
 * @param {JSVector3} base - Base vector
 * @param {JSVector3} other - Vector to measure to
 * @returns Direction
 **/
function direction(base, other) {
  var angle = (((Math.atan2(-1*(other.z()-base.z()), -1*(other.x()-base.x())) * 180) / Math.PI) + 270) % 360;
  return angle;
};

/**
 * Gets direction from one vector to another
 * @param {JSVector3} base - Base vector
 * @param {JSVector3} other - Vector to measure to
 * @returns Direction
 **/
function directionAngle(entity, posX, posZ) {
  var angle = (entity.eyePos().add(0,1,0).xz().angleTo(posX, posZ) + 90);
  return angle;
};

function elevation(entity, posX, posY, posZ) {
  var distance = entity.pos().xz().distanceTo(posX, posZ);
  var vector = PackLoader.asVec2(0, entity.pos().y());
  var angle = 90-vector.angleTo(distance, posY);
  return angle;
};

var chars = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"];

var charWidths = {
  "!": 1.0,
  "\"": 3.0,
  "#": 5.0,
  "$": 5.0,
  "%": 5.0,
  "&": 5.0,
  "'": 1.0,
  "(": 4.0,
  ")": 4.0,
  "*": 5.0,
  "+": 5.0,
  ",": 1.0,
  "-": 4.0,
  ".": 1.0,
  "/": 5.0,
  "0": 5.0,
  "1": 5.0,
  "2": 5.0,
  "3": 5.0,
  "4": 5.0,
  "5": 5.0,
  "6": 5.0,
  "7": 5.0,
  "8": 5.0,
  "9": 5.0,
  ":": 1.0,
  ";": 1.0,
  "<": 5.0,
  "=": 5.0,
  ">": 5.0,
  "?": 5.0,
  "@": 6.0,
  "A": 5.0,
  "B": 5.0,
  "C": 5.0,
  "D": 5.0,
  "E": 5.0,
  "F": 5.0,
  "G": 5.0,
  "H": 5.0,
  "I": 3.0,
  "J": 5.0,
  "K": 5.0,
  "L": 5.0,
  "M": 5.0,
  "N": 5.0,
  "O": 5.0,
  "P": 5.0,
  "Q": 5.0,
  "R": 5.0,
  "S": 5.0,
  "T": 5.0,
  "U": 5.0,
  "V": 5.0,
  "W": 5.0,
  "X": 5.0,
  "Y": 5.0,
  "Z": 5.0,
  "[": 5.0,
  "\\": 5.0,
  "]": 3.0,
  "^": 5.0,
  "_": 5.0,
  "`": 2.0,
  "a": 5.0,
  "b": 5.0,
  "c": 5.0,
  "d": 5.0,
  "e": 5.0,
  "f": 4.0,
  "g": 5.0,
  "h": 5.0,
  "i": 1.0,
  "j": 3.0,
  "k": 4.0,
  "l": 2.0,
  "m": 5.0,
  "n": 5.0,
  "o": 5.0,
  "p": 5.0,
  "q": 5.0,
  "r": 5.0,
  "s": 5.0,
  "t": 3.0,
  "u": 5.0,
  "v": 5.0,
  "w": 5.0,
  "x": 5.0,
  "y": 5.0,
  "z": 5.0,
  "{": 3.0,
  "|": 1.0,
  "}": 3.0,
  "~": 6.0,
  " ": 4.0,
}

function text(renderer) {
  var characterModels = [];
  var index = 0;
  /* if (chars.length != charWidths.length) {
    return;
  }; */
  for (var char in chars) {
    var character_model = renderer.createResource("MODEL", "skyhighheroes:Character");
    character_model.texture.set(null, "character_" + index.toString());
    var character = renderer.createEffect("fiskheroes:model").setModel(character_model);
    character.anchor.set("head");
    character.anchor.ignoreAnchor(true);
    character.setScale(1.0);
    character.setOffset(0.0, 0.0, 0.0);
    characterModels.push(character);
    index = index + 1;
  };
  return {
    renderLine: (isFirstPersonArm, horizontalAlignment, verticalAlignment, text, posX, posY, posZ, scale) => {
      if (isFirstPersonArm && text != null) {
        var textCharacters = text.toString().split("");
        var overallPosX = 0.0;
        var overallOffsetPosX = 0.0;
        var overallPosY = 0.0;
        var overallOffsetPosY = 0.0;
        textCharacters.forEach(textCharacter => {
          if (charWidths.hasOwnProperty(textCharacter)) {
            overallOffsetPosX = overallOffsetPosX + charWidths[textCharacter]*scale + 1.0*scale;
          };
        });
        switch (horizontalAlignment.toLowerCase()) {
          case "center":
            overallOffsetPosX = overallOffsetPosX/2;
            break;
          case "left":
            overallOffsetPosX = 0.0;
            break;
          case "right":
            overallOffsetPosX = overallOffsetPosX;
            break;
        };
        switch (verticalAlignment.toLowerCase()) {
          case "center":
            overallOffsetPosY = overallOffsetPosY/2;
            break;
          case "top":
            overallOffsetPosY = 0.0;
            break;
          case "bottom":
            overallOffsetPosY = overallOffsetPosY;
            break;
        };
        textCharacters.forEach(textCharacter => {
          var index = chars.indexOf(textCharacter);
          if (index > -1) {
            var model = characterModels[index];
            model.setRotation(0, 0, 0);
            model.setOffset(posX+overallPosX-overallOffsetPosX, posY+offsetY-overallOffsetPosY, posZ);
            model.setScale(scale);
            model.render();
            overallPosX = overallPosX + charWidths[textCharacter]*scale + 1.0*scale;
          };
          if (textCharacter == " ") {
            overallPosX = overallPosX + charWidths[textCharacter]*scale + 1.0*scale;
          };
        });
      };
    },
    renderLines: (isFirstPersonArm, horizontalAlignment, verticalAlignment, textArray, posX, posY, posZ, scale) => {
      if (isFirstPersonArm) {
        var overallPosY = 0.0;
        var overallOffsetPosY = 0.0;
        textArray.forEach(line => {
          if (line != null) {
            var textCharacters = line.toString().split("");
            var overallPosX = 0.0;
            var overallOffsetPosX = 0.0;
            textCharacters.forEach(textCharacter => {
              if (charWidths.hasOwnProperty(textCharacter)) {
                overallOffsetPosX = overallOffsetPosX + charWidths[textCharacter]*scale + 1.0*scale;
              };
            });
        switch (horizontalAlignment.toLowerCase()) {
          case "center":
            overallOffsetPosX = overallOffsetPosX/2;
            break;
          case "left":
            overallOffsetPosX = 0.0;
            break;
          case "right":
            overallOffsetPosX = overallOffsetPosX;
            break;
        };
            textCharacters.forEach(textCharacter => {
              var index = chars.indexOf(textCharacter);
              if (index > -1) {
                var model = characterModels[index];
                model.setRotation(0, 0, 0);
                model.setOffset(posX+overallPosX-overallOffsetPosX, posY+offsetY-overallOffsetPosY, posZ);
                model.setScale(scale);
                model.render();
                overallPosX = overallPosX + charWidths[textCharacter]*scale + 1.0*scale;
              };
              if (textCharacter == " ") {
                overallPosX = overallPosX + charWidths[textCharacter]*scale + 1.0*scale;
              };
            });
          };
          offsetY = offsetY + 11.0*scale;
        });
      };
    },
    renderLocation: (entity, isFirstPersonArm, text, posX, posY, posZ) => {
      if (isFirstPersonArm && text != null) {
        var textCharacters = text.toString().split("");
        var overallPosX = 0.0;
        var distance = entity.eyePos().distanceTo(posX, posY, posZ);
        var pitch = (entity.rotationInterpolated().y()/180)*Math.PI + Math.atan2((posY-entity.eyePos().y()), (Math.sqrt(posX^2 + posZ^2)-entity.eyePos().xz().distanceTo(posX, posZ)));
        var yaw = (entity.rotationInterpolated().x()/180)*Math.PI - Math.atan2((posZ-entity.eyePos().z()), (posX-entity.eyePos().x()));
        var distanceXZ = entity.eyePos().multiply(1, 0, 1).distanceTo(posX, 0, posZ);
        var x = distanceXZ*Math.cos(yaw);
        var y = (entity.eyePos().y()-posY);
        var z = distanceXZ*Math.sin(yaw);
        var overallOffsetPosX = 0.0;
        var overallPosX = 0.0;
        textCharacters.forEach(textCharacter => {
          if (charWidths.hasOwnProperty(textCharacter)) {
            overallOffsetPosX = overallOffsetPosX + charWidths[textCharacter] + 0.5;
          };
        });
        overallOffsetPosX = overallOffsetPosX/2;
        textCharacters.forEach(textCharacter => {
          var index = chars.indexOf(textCharacter);
          if (index > -1) {
            var model = characterModels[index];
            model.setRotation(0, 0, 0);
            model.setOffset(x+overallPosX-overallOffsetPosX, y, z);
            model.render();
            overallPosX = overallPosX + charWidths[textCharacter] + 0.5;
          };
        });
      };
    },
    renderEntity: (entity, isFirstPersonArm, otherEntity) => {
      if (isFirstPersonArm) {
        if (otherEntity.isAlive() && otherEntity.getUUID() != entity.getUUID()) {
          var data = []
          data.push(otherEntity.getName());
          data.push("Health: " + otherEntity.getHealth());
          var distance = entity.eyePos().distanceTo(otherEntity.pos().x(), otherEntity.pos().y(), otherEntity.pos().z());
          var pitch = (entity.rotationInterpolated().y()/180)*Math.PI + Math.atan2((otherEntity.pos().y()-entity.eyePos().y()), (Math.sqrt(otherEntity.pos().x()^2 + otherEntity.pos().z()^2)-entity.eyePos().xz().distanceTo(otherEntity.pos().x(), otherEntity.pos().z())));
          var yaw = (entity.rotationInterpolated().x()/180)*Math.PI - Math.atan2((otherEntity.pos().z()-entity.eyePos().z()), (otherEntity.pos().x()-entity.eyePos().x()));
          var distanceXZ = entity.eyePos().multiply(1, 0, 1).distanceTo(otherEntity.pos().x(), 0, otherEntity.pos().z());
          var x = distanceXZ*Math.cos(yaw);
          var y = (entity.eyePos().y()-otherEntity.pos().y());
          var z = distanceXZ*Math.sin(yaw);
          var yOffset = 0.0;
          data.forEach(entry => {
            var overallOffsetPosX = 0.0;
            var overallPosX = 0.0;
            textCharacters = entry.split("");
            textCharacters.forEach(textCharacter => {
              var index = chars.indexOf(textCharacter);
              if (index > -1) {
                overallOffsetPosX = overallOffsetPosX + charWidths[textCharacter] + 0.5;
              };
            });
            overallOffsetPosX = overallOffsetPosX/2;
            textCharacters.forEach(textCharacter => {
              var index = chars.indexOf(textCharacter);
              if (index > -1) {
                var model = characterModels[index];
                model.setRotation(0, 0, 0);
                model.setOffset(x+overallPosX-overallOffsetPosX, y+yOffset, z);
                model.render();
                overallPosX = overallPosX + charWidths[textCharacter] + 0.5;
              };
            });
            yOffset = yOffset + 10.0;
          });
        };
      };
    }
  };
};