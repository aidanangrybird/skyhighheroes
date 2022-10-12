function continuePlaying(entity, sound) {
    if (!entity.getData("fiskheroes:gliding")) {
        return false;
    }
    
    var vel = entity.motion().length();
    var ticks = sound.ticksPlaying();
    var volume = 0;
    
    if (vel >= 0.01) {
        volume = Math.min(Math.max(vel * vel / 8, 0), 1);
    }
    
    if (ticks < 10) {
        volume *= ticks / 10;
    }
    
    if (volume > 0.25) {
        sound.setPitch(volume);
    }
    else {
        sound.setPitch(0.25);
    }
    
    sound.setVolume(volume * 0.25);
    return true;
}
