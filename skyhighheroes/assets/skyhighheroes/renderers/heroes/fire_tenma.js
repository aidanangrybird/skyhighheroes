extend("skyhighheroes:base_tenma");

var rockets = implement("skyhighheroes:external/astro_rockets");
var utils = implement("fiskheroes:external/utils");

var colorVar = 0xFF0000;

loadTextures({
    "lights" : "skyhighheroes:fire/astro/fire_tenma_lights",
    "lights_flying" : "skyhighheroes:fire/astro/fire_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:fire/astro/fire_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:fire/astro/fire_tenma_lights_normal_flying",
    "base": "skyhighheroes:fire/astro/fire_tenma_base",
    "base_flying": "skyhighheroes:fire/astro/fire_tenma_base_flying",
    "long" : "skyhighheroes:fire/astro/fire_tenma_long",
    "long_flying" : "skyhighheroes:fire/astro/fire_tenma_long_flying",
    "short" : "skyhighheroes:fire/astro/fire_tenma_short",
    "short_flying" : "skyhighheroes:fire/astro/fire_tenma_short_flying",
    "normal" : "skyhighheroes:fire/astro/fire_tenma_normal",
    "normal_flying" : "skyhighheroes:fire/astro/fire_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:fire/astro/fire_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back"
});

function initEffects(renderer) {
    var iconLeft1 = renderer.createResource("ICON", "skyhighheroes:red_fire_layer1");
    var iconRight1 = renderer.createResource("ICON", "skyhighheroes:blue_fire_layer1");
    var iconLeft2 = renderer.createResource("ICON", "skyhighheroes:red_fire_layer2");
    var iconRight2 = renderer.createResource("ICON", "skyhighheroes:blue_fire_layer2");
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "rightArm", 0xFF0000, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    utils.bindBeam(renderer, "fiskheroes:energy_projection", "fiskheroes:energy_projection", "leftArm", 0x0000FF, [
        { "firstPerson": [4.5, 3.75, -8.0], "offset": [0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    utils.bindBeam(renderer, "fiskheroes:energy_blast", "fiskheroes:repulsor_blast", "rightArm", 0xFF0000, [
        { "firstPerson": [-4.5, 3.75, -8.0], "offset": [-0.5, 9.0, 0.0], "size": [2.0, 2.0] }
    ]).setParticles(renderer.createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
    //Forcefield
    var forcefield = renderer.bindProperty("fiskheroes:forcefield");
    forcefield.color.set(getCLR());
    forcefield.setShape(36, 36).setOffset(0.0, 10.0, 0.0).setScale(2.0);
    forcefield.setCondition(entity => {
        forcefield.opacity = entity.getInterpolatedData("fiskheroes:shield_blocking_timer") * 0.1;
        return true;
    });
    //Left 1
    boosterLeft1 = renderer.createEffect("fiskheroes:booster");
    boosterLeft1.setIcon(iconLeft1).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterLeft1.anchor.set("leftLeg");
    boosterLeft1.mirror = false;
    //Right 1
    boosterRight1 = renderer.createEffect("fiskheroes:booster");
    boosterRight1.setIcon(iconRight1).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterRight1.anchor.set("rightLeg");
    boosterRight1.mirror = false;
    //Left 2
    boosterLeft2 = renderer.createEffect("fiskheroes:booster");
    boosterLeft2.setIcon(iconLeft2).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterLeft2.anchor.set("leftLeg");
    boosterLeft2.mirror = false;
    //Right 2
    boosterRight2 = renderer.createEffect("fiskheroes:booster");
    boosterRight2.setIcon(iconRight2).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterRight2.anchor.set("rightLeg");
    boosterRight2.mirror = false;
    //Right
    cannonRight = renderer.createEffect("fiskheroes:shield");
    cannonRight.texture.set("cannon", null);
    cannonRight.anchor.set("rightArm");
    cannonRight.setRotation(0.0, 90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.0, 3.0);
    cannonRight.large = true;
    //Left
    cannonLeft = renderer.createEffect("fiskheroes:shield");
    cannonLeft.texture.set("cannon", null);
    cannonLeft.anchor.set("rightArm");
    cannonLeft.setRotation(0.0, -90.0, 0.0).setCurve(0.0, 0.0).setOffset(1.0, 8.0, -3.0);
    cannonLeft.large = true;
    //Top
    cannonTop = renderer.createEffect("fiskheroes:shield");
    cannonTop.texture.set("cannon", null);
    cannonTop.anchor.set("rightArm");
    cannonTop.setRotation(0.0, 0.0, 0.0).setCurve(0.0, 0.0).setOffset(4.0, 8.0, 0.0);
    cannonTop.large = true;
    //Bottom
    cannonBottom = renderer.createEffect("fiskheroes:shield");
    cannonBottom.texture.set("cannon", null);
    cannonBottom.anchor.set("rightArm");
    cannonBottom.setRotation(0.0, 180.0, 0.0).setCurve(0.0, 0.0).setOffset(-2.0, 8.0, 0.0);
    cannonBottom.large = true;
    //Front
    cannonFront = renderer.createEffect("fiskheroes:shield");
    cannonFront.texture.set(null, "cannon_lights_inner");
    cannonFront.anchor.set("rightArm");
    cannonFront.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(2.0, 13.0, 0.0);
    cannonFront.large = true;
    //Back
    cannonBack = renderer.createEffect("fiskheroes:shield");
    cannonBack.texture.set("cannon_back", null);
    cannonBack.anchor.set("rightArm");
    cannonBack.setRotation(0.0, 0.0, -90.0).setCurve(0.0, 0.0).setOffset(2.0, 4.0, 0.0);
    cannonBack.large = true;
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE") {
        cannonRight.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
        cannonRight.render();
        cannonLeft.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
        cannonLeft.render();
        cannonTop.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
        cannonTop.render();
        cannonBottom.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
        cannonBottom.render();
        cannonFront.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
        cannonFront.render();
        cannonBack.unfold = entity.getInterpolatedData("fiskheroes:aiming_timer");
        cannonBack.render();
    }
    if (!isFirstPersonArm) {

        if (renderLayer == "BOOTS") {
            //Equations
            var f = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
            f = entity.isSprinting() ? 0.5 - Math.cos(2 * f * Math.PI) / 2 : 0;
            var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
            var flight = entity.getInterpolatedData("fiskheroes:flight_timer");
            
            //Left 1
            boosterLeft1.progress = boost;
            boosterLeft1.speedScale = 0.5 * boost;
            boosterLeft1.flutter = 1 + boost;
            boosterLeft1.setSize(4.0 + f * 4, 2.0 - f * 3.9);
            boosterLeft1.render();

            //Left 2
            boosterLeft2.progress = flight;
            boosterLeft2.render();

            //Right 1
            boosterRight1.progress = boost;
            boosterRight1.speedScale = 0.5 * boost;
            boosterRight1.flutter = 1 + boost;
            boosterRight1.setSize(4.0 + f * 4, 2.0 - f * 3.9);
            boosterRight1.render();

            //Right 2
            boosterRight2.progress = flight;
            boosterRight2.render();
        }
    }
}

function getID() {
    return "87fa6187-4fa6-4dc6-8742-19a2b67c4cc0";
}

function init(renderer) {
    parent.init(renderer);
    initEffects(renderer);
    initAnimations(renderer);
}