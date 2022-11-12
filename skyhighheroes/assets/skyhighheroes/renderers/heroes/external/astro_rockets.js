var boosterLeft1;
var boosterRight1;
var boosterLeft2;
var boosterRight2;

function init(renderer, icon1, icon2) {
    var icon1 = renderer.createResource("ICON", icon1);
    var icon2 = renderer.createResource("ICON", icon2);
    //Left 1
    boosterLeft1 = renderer.createEffect("fiskheroes:booster");
    boosterLeft1.setIcon(icon1).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterLeft1.anchor.set("leftLeg");
    boosterLeft1.mirror = false;
    //Right 1
    boosterRight1 = renderer.createEffect("fiskheroes:booster");
    boosterRight1.setIcon(icon1).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterRight1.anchor.set("rightLeg");
    boosterRight1.mirror = false;
    //Left 2
    boosterLeft2 = renderer.createEffect("fiskheroes:booster");
    boosterLeft2.setIcon(icon2).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterLeft2.anchor.set("leftLeg");
    boosterLeft2.mirror = false;
    //Right 2
    boosterRight2 = renderer.createEffect("fiskheroes:booster");
    boosterRight2.setIcon(icon2).setOffset(0.0, 12.0, 0.0).setSize(4.0, 2.0);
    boosterRight2.anchor.set("rightLeg");
    boosterRight2.mirror = false;

}

function initDualBoosters(renderer, iconLeft1, iconLeft2, iconRight1, iconRight2) {
    var iconLeft1 = renderer.createResource("ICON", iconLeft1);
    var iconRight1 = renderer.createResource("ICON", iconRight1);
    var iconLeft2 = renderer.createResource("ICON", iconLeft2);
    var iconRight2 = renderer.createResource("ICON", iconRight2);
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

}

function render(entity, renderLayer, isFirstPersonArm) {
    if (!isFirstPersonArm) {

        if (renderLayer == "BOOTS" && entity.getData("fiskheroes:flying")) {
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