//Beam setup
function bindBeam(renderer, propertyName, beam, anchor, color, entries) {
  var prop = renderer.bindProperty(propertyName).setAnchor(anchor);
  var constln = renderer.createResource("BEAM_CONSTELLATION", null);

  for (var i = 0; i < entries.length; ++i) {
    constln.bindBeam(entries[i]);
  };

  if (typeof beam === "string") {
    beam = renderer.createResource("BEAM_RENDERER", beam);
  };

  prop.setConstellation(constln);
  prop.setRenderer(beam);
  prop.color.set(color);
  return prop;
};

//

//Init
//Beams
function initLeftArmBeams(renderer, color) {
  var position = [
    { "firstPerson": [4.5, 3.75, -11.4], "offset": [0.5, 12.9, 0.0], "size": [2.0, 2.0] },
    { "firstPerson": [0.9, 3.75, -11.4], "offset": [0.5, 8.0, -3.6], "size": [2.0, 2.0] },
    { "firstPerson": [8.1, 3.75, -11.4], "offset": [0.5, 8.0, 3.6], "size": [2.0, 2.0] }
  ];
  var chargedBeam = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cannons_charged_beam", "leftArm", color, position);
  chargedBeam.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeam.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("cannonsArms") && !entity.getWornHelmet().nbt().getBoolean("flushLeftArmCannon"));
  var positionFlush = [
    { "firstPerson": [-4.5, 3.75, -11.4], "offset": [0.5, 10.0, 0.0], "size": [2.0, 2.0] },
    { "firstPerson": [-7.0, 3.75, -11.4], "offset": [0.5, 8.0, -2.5], "size": [2.0, 2.0] },
    { "firstPerson": [-2.0, 3.75, -11.4], "offset": [0.5, 8.0, 2.5], "size": [2.0, 2.0] }
  ];
  var chargedBeamFlush = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cannons_charged_beam", "leftArm", color, positionFlush);
  chargedBeamFlush.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeamFlush.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("cannonsArms") && entity.getWornHelmet().nbt().getBoolean("flushLeftArmCannon"));
};
function initRightArmBeams(renderer, color) {
  var position = [
    { "firstPerson": [4.5, 3.75, -11.4], "offset": [-0.5, 12.9, 0.0], "size": [2.0, 2.0] },
    { "firstPerson": [0.9, 3.75, -11.4], "offset": [-0.5, 8.0, -3.6], "size": [2.0, 2.0] },
    { "firstPerson": [8.1, 3.75, -11.4], "offset": [-0.5, 8.0, 3.6], "size": [2.0, 2.0] }
  ];
  var chargedBeam = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cannons_charged_beam", "rightArm", color, position);
  chargedBeam.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeam.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("cannonsArms") && !entity.getWornHelmet().nbt().getBoolean("flushRightArmCannon"));
  var positionFlush = [
    { "firstPerson": [-4.5, 3.75, -11.4], "offset": [-0.5, 10.0, 0.0], "size": [2.0, 2.0] },
    { "firstPerson": [-7.0, 3.75, -11.4], "offset": [-0.5, 8.0, -2.5], "size": [2.0, 2.0] },
    { "firstPerson": [-2.0, 3.75, -11.4], "offset": [-0.5, 8.0, 2.5], "size": [2.0, 2.0] }
  ];
  var chargedBeamFlush = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cannons_charged_beam", "rightArm", color, positionFlush);
  chargedBeamFlush.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeamFlush.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("cannonsArms") && entity.getWornHelmet().nbt().getBoolean("flushRightArmCannon"));
};

function initHeadBeams(renderer, color) {
  var position = [
    { "firstPerson": [-2.2, 0.0, 2.0], "offset": [-2.0, -3.0, -6.8], "size": [2.0, 2.0] },
    { "firstPerson": [2.2, 0.0, 2.0], "offset": [2.0, -3.0, -6.8], "size": [2.0, 2.0] }
  ];
  var chargedBeam = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cannons_charged_beam", "head", color, position);
  chargedBeam.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeam.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("cannonsEyes") && !entity.getWornHelmet().nbt().getBoolean("flushEyeCannons"));
  var positionFlush = [
    { "firstPerson": [-2.2, 0.0, 2.0], "offset": [-2.0, -3.0, -4.0], "size": [2.0, 2.0] },
    { "firstPerson": [2.2, 0.0, 2.0], "offset": [2.0, -3.0, -4.0], "size": [2.0, 2.0] }
  ];
  var chargedBeamFlush = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cannons_charged_beam", "head", color, positionFlush);
  chargedBeamFlush.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeamFlush.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("cannonsEyes") && entity.getWornHelmet().nbt().getBoolean("flushEyeCannons"));
  var scream = bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:scream", "head", color, [
    { "firstPerson": [0.0, 2.5, -3.2], "offset": [0.0, -1.5, -4.9], "size": [10.0, 10.0] }
  ]);
  scream.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("mouth") && !entity.getWornHelmet().nbt().getBoolean("flushMouth"));
  var screamFlush = bindBeam(renderer, "fiskheroes:energy_projection", "skyhighheroes:scream", "head", color, [
    { "firstPerson": [0.0, 2.5, -3.2], "offset": [0.0, -1.5, -3.1], "size": [10.0, 10.0] }
  ]);
  screamFlush.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("mouth") && entity.getWornHelmet().nbt().getBoolean("flushMouth"));
};

function initBodyBeams(renderer, color) {
  var position = [
    { "firstPerson": [-1.5, 2.5, 2.0], "offset": [-1.5, 2.5, -6.2], "size": [2.0, 2.0] },
    { "firstPerson": [1.5, 2.5, 2.0], "offset": [1.5, 2.5, -6.2], "size": [2.0, 2.0] }
  ];
  var chargedBeam = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cannons_charged_beam", "body", color, position);
  chargedBeam.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeam.setCondition(entity => entity.getWornHelmet().nbt().getBoolean("cannonsBody"));
};