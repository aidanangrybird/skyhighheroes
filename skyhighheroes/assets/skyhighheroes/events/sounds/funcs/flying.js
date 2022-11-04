function continuePlaying(entity, sound) {
    var vel = entity.motion().length();
    var volume = 0.05;

    if (vel >= 0.01) {
        volume += 0.4 * Math.min(Math.max(vel * vel / 4, 0), 1);
    }
    
    volume *= entity.getInterpolatedData("fiskheroes:flight_boost_timer");
    
    sound.setVolume(volume);
    return ((entity.getData('fiskheroes:flight_timer') == 1) && (entity.getData('fiskheroes:flight_boost_timer') > 0));
}
