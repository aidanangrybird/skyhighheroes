function continuePlaying(entity, sound) {
    if (entity.getData("fiskheroes:flight_boost_timer") == 0) {
        return false;
    }
    
    var vel = entity.motion().length();
    var ticks = sound.ticksPlaying();
    var volume = 0;
    
    if (vel >= 0.01) {
        volume = Math.min(Math.max(vel * vel / 4, 0), 1);
    }
    
    if (ticks < 10) {
        volume *= ticks / 10;
    }
    
    if (volume > 0.8) {
        sound.setPitch(0.2 + volume);
    } else {
        sound.setPitch(1);
    }
    
    sound.setVolume(volume * 0.6);
    return true;
}
