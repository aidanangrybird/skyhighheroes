function continuePlaying(entity, sound) {
    var vel = entity.motion().length();
    var f = sound.fadeProgress();
    var volume = 0.5;
    var pitch = 0.5 + f * 0.2;

    if (vel >= 0.01) {
        var t = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
        volume += 0.2 * Math.min(Math.max(vel * vel / 8, 0), 1);
        pitch += 0.5 * t + 0.3 * Math.min(vel, 1);
    }
    
    sound.setVolume(volume);
    sound.setPitch(pitch);
    return sound.ticksPlaying() < 10 || entity.getData("fiskheroes:flying");
}
