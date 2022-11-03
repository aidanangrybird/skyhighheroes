var bootRight1;
var bootLeft1;
var bootRight2;
var bootLeft2;

function init(renderer, icon1, icon2) {
    icon1 = renderer.createResource("ICON", icon1);
    icon2 = renderer.createResource("ICON", icon2);

    //Left 1
    bootLeft1 = renderer.createEffect("fiskheroes:booster");
    bootLeft1.setIcon(icon1).setOffset(0.0, 12.0, 0.0).setSize(1.75, 3.0);
    bootLeft1.anchor.set("leftLeg");
    bootLeft1.mirror = false;

    //Left 2
    bootLeft2 = renderer.createEffect("fiskheroes:booster");
    bootLeft2.setIcon(icon2).setOffset(0.0, 12.0, 0.0).setSize(1.75, 3.0);
    bootLeft2.anchor.set("leftLeg");
    bootLeft2.mirror = false;

    //Right 1
    bootRight1 = renderer.createEffect("fiskheroes:booster");
    bootRight1.setIcon(icon1).setOffset(0.0, 12.0, 0.0).setSize(1.75, 3.0);
    bootRight1.anchor.set("rightLeg");
    bootRight1.mirror = false;

    //Right 2
    bootRight2 = renderer.createEffect("fiskheroes:booster");
    bootRight2.setIcon(icon2).setOffset(0.0, 12.0, 0.0).setSize(1.75, 3.0);
    bootRight2.anchor.set("rightLeg");
    bootRight2.mirror = false;

}

function render(entity, renderLayer, isFirstPersonArm, all) {
    if (!isFirstPersonArm && entity.isWearingFullSuit()) {

        if (all || renderLayer == "BOOTS") {
            //Left 1
            var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
            bootLeft1.progress = entity.getInterpolatedData("skyhighheroes:dyn/astro_booster_timer");
            bootLeft1.speedScale = 0.5 * boost;
            bootLeft1.flutter = 1 + boost;

            var f = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
            f = entity.isSprinting() ? 0.5 - Math.cos(2 * f * Math.PI) / 2 : 0;
            bootLeft1.setSize(1.75 + f * 4, 3.0 - f * 3.9);
            bootLeft1.render();

            //Left 2
            var flight = entity.getInterpolatedData("fiskheroes:flight_timer") - entity.getInterpolatedData("fiskheroes:flight_boost_timer");
            bootLeft2.progress = flight;
            bootLeft2.render();

            //Right 1
            var boost = entity.getInterpolatedData("fiskheroes:flight_boost_timer");
            bootRight1.progress = entity.getInterpolatedData("skyhighheroes:dyn/astro_booster_timer");
            bootRight1.speedScale = 0.5 * boost;
            bootRight1.flutter = 1 + boost;

            var f = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
            f = entity.isSprinting() ? 0.5 - Math.cos(2 * f * Math.PI) / 2 : 0;
            bootRight1.setSize(1.75 + f * 4, 3.0 - f * 3.9);
            bootRight1.render();

            //Right 2
            var flight = entity.getInterpolatedData("fiskheroes:flight_timer") - entity.getInterpolatedData("fiskheroes:flight_boost_timer");
            bootRight2.progress = flight;
            bootRight2.render();
        }
    }
}
