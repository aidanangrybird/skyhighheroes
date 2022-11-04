setGlobal();

function bindTrail(renderer, trailType) {
    var prop = renderer.bindProperty("fiskheroes:trail");
    prop.setTrail(renderer.createResource("TRAIL", trailType));
    prop.setCondition(entity => entity.getData("fiskheroes:flight_boost_timer") > 0);
    return prop;
}