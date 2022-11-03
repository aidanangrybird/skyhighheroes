setGlobal();

function emWaveBeingBeams(renderer, color) {

    var beam = renderer.createResource("BEAM_RENDERER", "");

    var shape = renderer.createResource("SHAPE", null);
    var line = shape.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.0, 0.0] });
    var beams = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shape);
    beams.color.set(color);
    beams.setScale(16.0);

    var size = { x: 1.0, y: 1.0 };
    var obj = {
        foosh: foosh,
        bloom: bloom,
        setSize: (x, y) => {
            foosh.setSize(x, y);
            size.x = x;
            size.y = y;
            return obj;
        },
        setOffset: (x, y, z) => {
            foosh.setOffset(x, y, z);
            bloom.setOffset(x, y, z);
            return obj;
        },
        setRotation: (x, y, z) => {
            foosh.setRotation(x, y, z);
            bloom.setRotation(x, y, z);
            return obj;
        },
        render: (entity, progress) => {
            foosh.progress = progress;
            foosh.render();

            var f = Math.PI * 2;
            f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
            line.size.x = line.size.y = (1 + f * booster.flutter) * size.x;
            line.end.y = (1 + f * booster.flutter / 4) * size.x * size.y / 8;

            bloom.progress = bloom.opacity = progress;
            bloom.render();
        }
    };
    return obj;
}

function bindRightDigitBeam(renderer, color) {
    var beamRight = renderer.bindProperty("fiskheroes:energy_projection").setAnchor("rightArm");
    var constlnRight = renderer.createResource("BEAM_CONSTELLATION", null);
    constlnRight.bindBeam([ {"firstPerson": [-4.5, 3.75, 8.0], "offset": [-0.5, 0.0, 0.0], "size": [2.0, 2.0]} ]);

    beam = renderer.createResource("BEAM_RENDERER", "fiskheroes:energy_projection");

    beamRight.setConstellation(constlnRight);
    beamRight.setRenderer(beam);
    beamRight.color.set(color);
    beamRight.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"))
    return beamRight;
}

function bindLeftDigitBeam(renderer, color) {
    var beamLeft = renderer.bindProperty("fiskheroes:energy_projection").setAnchor("leftArm");
    var constlnLeft = renderer.createResource("BEAM_CONSTELLATION", null);
    constlnLeft.bindBeam([{ "firstPerson": [-4.5, 3.75, 8.0], "offset": [-0.5, 0.0, 0.0], "size": [2.0, 2.0]} ]);

    beam = renderer.createResource("BEAM_RENDERER", "fiskheroes:energy_projection");

    beamLeft.setConstellation(constlnLeft);
    beamLeft.setRenderer(beam);
    beamLeft.color.set(color);
    beamLeft.setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"))
    return beamLeft;
}
