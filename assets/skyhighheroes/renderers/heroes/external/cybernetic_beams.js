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

//Init
//Beams
function initLeftArmBeams(renderer, color) {
  var position = [
    { "firstPerson": [4.5, 3.75, -11.4], "offset": [0.5, 12.9, 0.0], "size": [2.0, 2.0] },
    { "firstPerson": [0.9, 3.75, -11.4], "offset": [0.5, 8.0, -3.6], "size": [2.0, 2.0] },
    { "firstPerson": [8.1, 3.75, -11.4], "offset": [0.5, 8.0, 3.6], "size": [2.0, 2.0] }
  ];
  var chargedBeam = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cybernetic_cannons", "leftArm", color, position);
  chargedBeam.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeam.setCondition(entity => mainNBT(entity).getBoolean("cannonsArms") && !mainNBT(entity).getBoolean("flushLeftArmCannons"));
  var positionFlush = [
    { "firstPerson": [4.5, 3.75, -11.4], "offset": [0.5, 10.0, 0.0], "size": [2.0, 2.0] },
    { "firstPerson": [7.0, 3.75, -11.4], "offset": [0.5, 8.0, -2.5], "size": [2.0, 2.0] },
    { "firstPerson": [2.0, 3.75, -11.4], "offset": [0.5, 8.0, 2.5], "size": [2.0, 2.0] }
  ];
  var chargedBeamFlush = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cybernetic_cannons", "leftArm", color, positionFlush);
  chargedBeamFlush.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeamFlush.setCondition(entity => mainNBT(entity).getBoolean("cannonsArms") && mainNBT(entity).getBoolean("flushLeftArmCannons"));
};
function initRightArmBeams(renderer, color) {
  var position = [
    { "firstPerson": [-4.5, 3.75, -11.4], "offset": [-0.5, 12.9, 0.0], "size": [2.0, 2.0] },
    { "firstPerson": [-0.9, 3.75, -11.4], "offset": [-0.5, 8.0, -3.6], "size": [2.0, 2.0] },
    { "firstPerson": [-8.1, 3.75, -11.4], "offset": [-0.5, 8.0, 3.6], "size": [2.0, 2.0] }
  ];
  var chargedBeam = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cybernetic_cannons", "rightArm", color, position);
  chargedBeam.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeam.setCondition(entity => mainNBT(entity).getBoolean("cannonsArms") && !mainNBT(entity).getBoolean("flushRightArmCannons"));
  var positionFlush = [
    { "firstPerson": [-4.5, 3.75, -11.4], "offset": [-0.5, 10.0, 0.0], "size": [2.0, 2.0] },
    { "firstPerson": [-7.0, 3.75, -11.4], "offset": [-0.5, 8.0, -2.5], "size": [2.0, 2.0] },
    { "firstPerson": [-2.0, 3.75, -11.4], "offset": [-0.5, 8.0, 2.5], "size": [2.0, 2.0] }
  ];
  var chargedBeamFlush = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cybernetic_cannons", "rightArm", color, positionFlush);
  chargedBeamFlush.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeamFlush.setCondition(entity => mainNBT(entity).getBoolean("cannonsArms") && mainNBT(entity).getBoolean("flushRightArmCannons"));
};

function initHeadBeams(renderer, color) {
  var position = [
    { "firstPerson": [-8.15, 0.0, -1.0], "offset": [-8.15, -3.85, -1.0], "size": [2.0, 2.0] },
    { "firstPerson": [8.15, 0.0, -1.0], "offset": [8.15, -3.85, -1.0], "size": [2.0, 2.0] }
  ];
  var chargedBeam = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cybernetic_cannons", "head", color, position);
  chargedBeam.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeam.setCondition(entity => mainNBT(entity).getBoolean("cannonsHead") && !mainNBT(entity).getBoolean("flushHeadCannons"));
  var positionFlush = [
    { "firstPerson": [-5.15, 0.0, -1.0], "offset": [-5.15, -3.85, -1.0], "size": [2.0, 2.0] },
    { "firstPerson": [5.15, 0.0, -1.0], "offset": [5.15, -3.85, -1.0], "size": [2.0, 2.0] }
  ];
  var chargedBeamFlush = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cybernetic_cannons", "head", color, positionFlush);
  chargedBeamFlush.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeamFlush.setCondition(entity => mainNBT(entity).getBoolean("cannonsHead") && mainNBT(entity).getBoolean("flushHeadCannons"));
};

function initBodyBeams(renderer, color) {
  var position = [
    { "firstPerson": [-1.5, 2.5, 2.0], "offset": [-1.5, 2.5, -6.2], "size": [2.0, 2.0] },
    { "firstPerson": [1.5, 2.5, 2.0], "offset": [1.5, 2.5, -6.2], "size": [2.0, 2.0] }
  ];
  var chargedBeam = bindBeam(renderer, "fiskheroes:charged_beam", "skyhighheroes:cybernetic_cannons", "body", color, position);
  chargedBeam.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_charged_beam"));
  chargedBeam.setCondition(entity => mainNBT(entity).getBoolean("cannonsBody"));
};

function mainNBT(entity) {
  return entity.getWornHelmet().nbt();
};