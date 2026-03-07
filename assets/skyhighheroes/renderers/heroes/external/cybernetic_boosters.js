function initLeftLegBoosters(renderer, model, color) {

  var mainRocketOffset = model.getCubeOffset("left_leg_main_rocket");
  var backRocketOffset = model.getCubeOffset("left_leg_back_rocket");
  var frontRocketOffset = model.getCubeOffset("left_leg_front_rocket");
  var outerRocketOffset = model.getCubeOffset("left_leg_outer_rocket");
  var innerRocketOffset = model.getCubeOffset("left_leg_inner_rocket");

  var icon = renderer.createResource("ICON", "skyhighheroes:null");

  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:cybernetic_booster");
  
  //Main
  var boosterMain = renderer.createEffect("fiskheroes:booster");
  boosterMain.setIcon(icon).setOffset(0.0, 2.01, 0.0).setSize(1.5, 1.5);
  boosterMain.anchor.set("leftLeg", mainRocketOffset);
  boosterMain.mirror = false;
  //Edge
  var shapeMainEdge = renderer.createResource("SHAPE", null);
  var lineMainEdge = shapeMainEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomMainEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMainEdge).setOffset(0.0, 2.01, 0.0);
  bloomMainEdge.anchor.set("leftLeg", mainRocketOffset);
  bloomMainEdge.color.set(color);
  bloomMainEdge.mirror = false;
  bloomMainEdge.setScale(16.0);
  //Middle
  var shapeMainMiddle = renderer.createResource("SHAPE", null);
  var lineMainMiddle = shapeMainMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomMainMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMainMiddle).setOffset(0.0, 2.01, 0.0);
  bloomMainMiddle.anchor.set("leftLeg", mainRocketOffset);
  bloomMainMiddle.color.set(color);
  bloomMainMiddle.mirror = false;
  bloomMainMiddle.setScale(16.0);
  //Center
  var shapeMainCenter = renderer.createResource("SHAPE", null);
  var lineMainCenter = shapeMainCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomMainCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMainCenter).setOffset(0.0, 2.01, 0.0);
  bloomMainCenter.anchor.set("leftLeg", mainRocketOffset);
  bloomMainCenter.color.set(color);
  bloomMainCenter.mirror = false;
  bloomMainCenter.setScale(16.0);

  //Outer
  var boosterOuter = renderer.createEffect("fiskheroes:booster");
  boosterOuter.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterOuter.anchor.set("leftLeg", outerRocketOffset);
  boosterOuter.mirror = false;
  //Edge
  var shapeOuterEdge = renderer.createResource("SHAPE", null);
  var lineOuterEdge = shapeOuterEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomOuterEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterEdge).setOffset(0.0, 1.01, 0.0);
  bloomOuterEdge.anchor.set("leftLeg", outerRocketOffset);
  bloomOuterEdge.color.set(color);
  bloomOuterEdge.mirror = false;
  bloomOuterEdge.setScale(16.0);
  //Middle
  var shapeOuterMiddle = renderer.createResource("SHAPE", null);
  var lineOuterMiddle = shapeOuterMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomOuterMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterMiddle).setOffset(0.0, 1.01, 0.0);
  bloomOuterMiddle.anchor.set("leftLeg", outerRocketOffset);
  bloomOuterMiddle.color.set(color);
  bloomOuterMiddle.mirror = false;
  bloomOuterMiddle.setScale(16.0);
  //Center
  var shapeOuterCenter = renderer.createResource("SHAPE", null);
  var lineOuterCenter = shapeOuterCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomOuterCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterCenter).setOffset(0.0, 1.01, 0.0);
  bloomOuterCenter.anchor.set("leftLeg", outerRocketOffset);
  bloomOuterCenter.color.set(color);
  bloomOuterCenter.mirror = false;
  bloomOuterCenter.setScale(16.0);

  //Inner
  var boosterInner = renderer.createEffect("fiskheroes:booster");
  boosterInner.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterInner.anchor.set("leftLeg", innerRocketOffset);
  boosterInner.mirror = false;
  //Edge
  var shapeInnerEdge = renderer.createResource("SHAPE", null);
  var lineInnerEdge = shapeInnerEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomInnerEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInnerEdge).setOffset(0.0, 1.01, 0.0);
  bloomInnerEdge.anchor.set("leftLeg", innerRocketOffset);
  bloomInnerEdge.color.set(color);
  bloomInnerEdge.mirror = false;
  bloomInnerEdge.setScale(16.0);
  //Middle
  var shapeInnerMiddle = renderer.createResource("SHAPE", null);
  var lineInnerMiddle = shapeInnerMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomInnerMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInnerMiddle).setOffset(0.0, 1.01, 0.0);
  bloomInnerMiddle.anchor.set("leftLeg", innerRocketOffset);
  bloomInnerMiddle.color.set(color);
  bloomInnerMiddle.mirror = false;
  bloomInnerMiddle.setScale(16.0);
  //Center
  var shapeInnerCenter = renderer.createResource("SHAPE", null);
  var lineInnerCenter = shapeInnerCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomInnerCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInnerCenter).setOffset(0.0, 1.01, 0.0);
  bloomInnerCenter.anchor.set("leftLeg", innerRocketOffset);
  bloomInnerCenter.color.set(color);
  bloomInnerCenter.mirror = false;
  bloomInnerCenter.setScale(16.0);

  //Back
  var boosterBack = renderer.createEffect("fiskheroes:booster");
  boosterBack.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterBack.anchor.set("leftLeg", backRocketOffset);
  boosterBack.mirror = false;
  //Edge
  var shapeBackEdge = renderer.createResource("SHAPE", null);
  var lineBackEdge = shapeBackEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomBackEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackEdge).setOffset(0.0, 1.01, 0.0);
  bloomBackEdge.anchor.set("leftLeg", backRocketOffset);
  bloomBackEdge.color.set(color);
  bloomBackEdge.mirror = false;
  bloomBackEdge.setScale(16.0);
  //Middle
  var shapeBackMiddle = renderer.createResource("SHAPE", null);
  var lineBackMiddle = shapeBackMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomBackMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackMiddle).setOffset(0.0, 1.01, 0.0);
  bloomBackMiddle.anchor.set("leftLeg", backRocketOffset);
  bloomBackMiddle.color.set(color);
  bloomBackMiddle.mirror = false;
  bloomBackMiddle.setScale(16.0);
  //Center
  var shapeBackCenter = renderer.createResource("SHAPE", null);
  var lineBackCenter = shapeBackCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomBackCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackCenter).setOffset(0.0, 1.01, 0.0);
  bloomBackCenter.anchor.set("leftLeg", backRocketOffset);
  bloomBackCenter.color.set(color);
  bloomBackCenter.mirror = false;
  bloomBackCenter.setScale(16.0);

  //Front
  var boosterFront = renderer.createEffect("fiskheroes:booster");
  boosterFront.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterFront.anchor.set("leftLeg", frontRocketOffset);
  boosterFront.mirror = false;
  //Edge
  var shapeFrontEdge = renderer.createResource("SHAPE", null);
  var lineFrontEdge = shapeFrontEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomFrontEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontEdge).setOffset(0.0, 1.01, 0.0);
  bloomFrontEdge.anchor.set("leftLeg", frontRocketOffset);
  bloomFrontEdge.color.set(color);
  bloomFrontEdge.mirror = false;
  bloomFrontEdge.setScale(16.0);
  //Middle
  var shapeFrontMiddle = renderer.createResource("SHAPE", null);
  var lineFrontMiddle = shapeFrontMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomFrontMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontMiddle).setOffset(0.0, 1.01, 0.0);
  bloomFrontMiddle.anchor.set("leftLeg", frontRocketOffset);
  bloomFrontMiddle.color.set(color);
  bloomFrontMiddle.mirror = false;
  bloomFrontMiddle.setScale(16.0);
  //Center
  var shapeFrontCenter = renderer.createResource("SHAPE", null);
  var lineFrontCenter = shapeFrontCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomFrontCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontCenter).setOffset(0.0, 1.01, 0.0);
  bloomFrontCenter.anchor.set("leftLeg", frontRocketOffset);
  bloomFrontCenter.color.set(color);
  bloomFrontCenter.mirror = false;
  bloomFrontCenter.setScale(16.0);

  var obj = {
    boosterMain: boosterMain,
    bloomMainEdge: bloomMainEdge,
    bloomMainMiddle: bloomMainMiddle,
    bloomMainCenter: bloomMainCenter,
    boosterOuter: boosterOuter,
    bloomOuterEdge: bloomOuterEdge,
    bloomOuterMiddle: bloomOuterMiddle,
    bloomOuterCenter: bloomOuterCenter,
    boosterInner: boosterInner,
    bloomInnerEdge: bloomInnerEdge,
    bloomInnerMiddle: bloomInnerMiddle,
    bloomInnerCenter: bloomInnerCenter,
    boosterFront: boosterFront,
    bloomFrontEdge: bloomFrontEdge,
    bloomFrontMiddle: bloomFrontMiddle,
    bloomFrontCenter: bloomFrontCenter,
    boosterBack: boosterBack,
    bloomBackEdge: bloomBackEdge,
    bloomBackMiddle: bloomBackMiddle,
    bloomBackCenter: bloomBackCenter,
    render: (entity, renderLayer, isFirstPersonArm) => {
      //Main
      //Equations
      var data_0 = getHoloBooleans(entity, "holoFlight", "rocketsLegs") + entity.getInterpolatedData("fiskheroes:flight_timer")*((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
      var data_1 = getHoloBoolean(entity, "holoBoostFlight") + entity.getInterpolatedData("fiskheroes:flight_boost_timer")
      var boost = data_1;
      var flight = data_0;
      var innerRockets = entity.getData("skyhighheroes:dyn/rocket_inner_legs_timer");
      var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
      b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
      var f = Math.PI * 2;
      f = Math.sin((entity.loop(f) * f) % f * 3) / 5;

      //Main
      //Booster
      boosterMain.progress = boost;
      boosterMain.speedScale = 2.0 * boost;
      boosterMain.flutter = 1 + boost;
      //Beams
      lineMainEdge.end.y = lineMainMiddle.end.y = lineMainCenter.end.y = ((0.5*boost + 1 + f * boosterMain.flutter / 4) * 1.5 * 1.5 / 8);
      //lineMainMiddle.end.y = ((0.5*boost + 1 + f * boosterMain.flutter / 4) * 0.75 * 0.75 / 8);
      //lineMainCenter.end.y = ((0.5*boost + 1 + f * boosterMain.flutter / 4) * 0.375 * 0.375 / 8);
      //Edge
      bloomMainEdge.progress = bloomMainEdge.opacity = flight;
      //Middle
      bloomMainMiddle.progress = bloomMainMiddle.opacity = flight;
      //Center
      bloomMainCenter.progress = bloomMainCenter.opacity = flight;

      //Sides
      //Equations
      var data_0 = getHoloBooleans(entity, "holoFlight", "rocketsLegs") + entity.getInterpolatedData("fiskheroes:flight_timer")*((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
      var data_1 = getHoloBoolean(entity, "holoBoostFlight") + entity.getInterpolatedData("fiskheroes:flight_boost_timer")
      var boost = data_1;
      var flight = data_0;
      var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
      b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
      var f = Math.PI * 2;
      f = Math.sin((entity.loop(f) * f) % f * 3) / 5;

      //Outer
      //Booster
      boosterOuter.progress = boost;
      boosterOuter.speedScale = 2.0 * boost;
      boosterOuter.flutter = 1 + boost;
      //Beams
      lineOuterEdge.end.y = lineOuterMiddle.end.y = lineOuterCenter.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 1.5 * 1.5 / 8);
      //lineOuterMiddle.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 1.25 * 0.75 / 8);
      //lineOuterCenter.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomOuterEdge.progress = bloomOuterEdge.opacity = flight;
      //Middle
      bloomOuterMiddle.progress = bloomOuterMiddle.opacity = flight;
      //Center
      bloomOuterCenter.progress = bloomOuterCenter.opacity = flight;

      //Inner
      //Booster
      boosterInner.progress = boost * innerRockets;
      boosterInner.speedScale = 2.0 * boost * innerRockets;
      boosterInner.flutter = 1 + boost * innerRockets;
      //Beams
      lineInnerEdge.end.y = lineInnerMiddle.end.y = lineInnerCenter.end.y = ((0.5*boost + 1 + f * boosterInner.flutter / 4) * 1.5 * 1.5 / 8);
      //lineInnerMiddle.end.y = ((0.5*boost + 1 + f * boosterInner.flutter / 4) * 1.25 * 0.75 / 8);
      //lineInnerCenter.end.y = ((0.5*boost + 1 + f * boosterInner.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomInnerEdge.progress = bloomInnerEdge.opacity = flight * innerRockets;
      //Middle
      bloomInnerMiddle.progress = bloomInnerMiddle.opacity = flight * innerRockets;
      //Center
      bloomInnerCenter.progress = bloomInnerCenter.opacity = flight * innerRockets;

      //Front
      //Booster
      boosterFront.progress = boost;
      boosterFront.speedScale = 2.0 * boost;
      boosterFront.flutter = 1 + boost;
      //Beams
      lineFrontEdge.end.y = lineFrontMiddle.end.y = lineFrontCenter.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 1.5 * 1.5 / 8);
      //lineFrontMiddle.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 1.25 * 0.75 / 8);
      //lineFrontCenter.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomFrontEdge.progress = bloomFrontEdge.opacity = flight;
      //Middle
      bloomFrontMiddle.progress = bloomFrontMiddle.opacity = flight;
      //Center
      bloomFrontCenter.progress = bloomFrontCenter.opacity = flight;

      //Back
      //Booster
      boosterBack.progress = boost;
      boosterBack.speedScale = 2.0 * boost;
      boosterBack.flutter = 1 + boost;
      //Beams
      lineBackEdge.end.y = lineBackMiddle.end.y = lineBackCenter.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 1.5 * 1.5 / 8);
      //lineBackMiddle.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 1.25 * 0.75 / 8);
      //lineBackCenter.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomBackEdge.progress = bloomBackEdge.opacity = flight;
      //Middle
      bloomBackMiddle.progress = bloomBackMiddle.opacity = flight;
      //Center
      bloomBackCenter.progress = bloomBackCenter.opacity = flight;

      if (!isFirstPersonArm) {
        //Main
        boosterMain.render();
        bloomMainEdge.render();
        bloomMainMiddle.render();
        bloomMainCenter.render();
        //Outer
        boosterOuter.render();
        bloomOuterEdge.render();
        bloomOuterMiddle.render();
        bloomOuterCenter.render();
        //Inner
        boosterInner.render();
        bloomInnerEdge.render();
        bloomInnerMiddle.render();
        bloomInnerCenter.render();
        //Front
        boosterFront.render();
        bloomFrontEdge.render();
        bloomFrontMiddle.render();
        bloomFrontCenter.render();
        //Back
        boosterBack.render();
        bloomBackEdge.render();
        bloomBackMiddle.render();
        bloomBackCenter.render();
      };
    }
  };
  return obj;
};

function initRightLegBoosters(renderer, model, color) {

  var mainRocketOffset = model.getCubeOffset("right_leg_main_rocket");
  var backRocketOffset = model.getCubeOffset("right_leg_back_rocket");
  var frontRocketOffset = model.getCubeOffset("right_leg_front_rocket");
  var outerRocketOffset = model.getCubeOffset("right_leg_outer_rocket");
  var innerRocketOffset = model.getCubeOffset("right_leg_inner_rocket");

  var icon = renderer.createResource("ICON", "skyhighheroes:null");

  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:cybernetic_booster");
  
  //Main
  var boosterMain = renderer.createEffect("fiskheroes:booster");
  boosterMain.setIcon(icon).setOffset(0.0, 2.01, 0.0).setSize(1.5, 1.5);
  boosterMain.anchor.set("rightLeg", mainRocketOffset);
  boosterMain.mirror = false;
  //Edge
  var shapeMainEdge = renderer.createResource("SHAPE", null);
  var lineMainEdge = shapeMainEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomMainEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMainEdge).setOffset(0.0, 2.01, 0.0);
  bloomMainEdge.anchor.set("rightLeg", mainRocketOffset);
  bloomMainEdge.color.set(color);
  bloomMainEdge.mirror = false;
  bloomMainEdge.setScale(16.0);
  //Middle
  var shapeMainMiddle = renderer.createResource("SHAPE", null);
  var lineMainMiddle = shapeMainMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomMainMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMainMiddle).setOffset(0.0, 2.01, 0.0);
  bloomMainMiddle.anchor.set("rightLeg", mainRocketOffset);
  bloomMainMiddle.color.set(color);
  bloomMainMiddle.mirror = false;
  bloomMainMiddle.setScale(16.0);
  //Center
  var shapeMainCenter = renderer.createResource("SHAPE", null);
  var lineMainCenter = shapeMainCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomMainCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeMainCenter).setOffset(0.0, 2.01, 0.0);
  bloomMainCenter.anchor.set("rightLeg", mainRocketOffset);
  bloomMainCenter.color.set(color);
  bloomMainCenter.mirror = false;
  bloomMainCenter.setScale(16.0);

  //Outer
  var boosterOuter = renderer.createEffect("fiskheroes:booster");
  boosterOuter.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterOuter.anchor.set("rightLeg", outerRocketOffset);
  boosterOuter.mirror = false;
  //Edge
  var shapeOuterEdge = renderer.createResource("SHAPE", null);
  var lineOuterEdge = shapeOuterEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomOuterEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterEdge).setOffset(0.0, 1.01, 0.0);
  bloomOuterEdge.anchor.set("rightLeg", outerRocketOffset);
  bloomOuterEdge.color.set(color);
  bloomOuterEdge.mirror = false;
  bloomOuterEdge.setScale(16.0);
  //Middle
  var shapeOuterMiddle = renderer.createResource("SHAPE", null);
  var lineOuterMiddle = shapeOuterMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomOuterMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterMiddle).setOffset(0.0, 1.01, 0.0);
  bloomOuterMiddle.anchor.set("rightLeg", outerRocketOffset);
  bloomOuterMiddle.color.set(color);
  bloomOuterMiddle.mirror = false;
  bloomOuterMiddle.setScale(16.0);
  //Center
  var shapeOuterCenter = renderer.createResource("SHAPE", null);
  var lineOuterCenter = shapeOuterCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomOuterCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterCenter).setOffset(0.0, 1.01, 0.0);
  bloomOuterCenter.anchor.set("rightLeg", outerRocketOffset);
  bloomOuterCenter.color.set(color);
  bloomOuterCenter.mirror = false;
  bloomOuterCenter.setScale(16.0);

  //Inner
  var boosterInner = renderer.createEffect("fiskheroes:booster");
  boosterInner.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterInner.anchor.set("rightLeg", innerRocketOffset);
  boosterInner.mirror = false;
  //Edge
  var shapeInnerEdge = renderer.createResource("SHAPE", null);
  var lineInnerEdge = shapeInnerEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomInnerEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInnerEdge).setOffset(0.0, 1.01, 0.0);
  bloomInnerEdge.anchor.set("rightLeg", innerRocketOffset);
  bloomInnerEdge.color.set(color);
  bloomInnerEdge.mirror = false;
  bloomInnerEdge.setScale(16.0);
  //Middle
  var shapeInnerMiddle = renderer.createResource("SHAPE", null);
  var lineInnerMiddle = shapeInnerMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomInnerMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInnerMiddle).setOffset(0.0, 1.01, 0.0);
  bloomInnerMiddle.anchor.set("rightLeg", innerRocketOffset);
  bloomInnerMiddle.color.set(color);
  bloomInnerMiddle.mirror = false;
  bloomInnerMiddle.setScale(16.0);
  //Center
  var shapeInnerCenter = renderer.createResource("SHAPE", null);
  var lineInnerCenter = shapeInnerCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomInnerCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeInnerCenter).setOffset(0.0, 1.01, 0.0);
  bloomInnerCenter.anchor.set("rightLeg", innerRocketOffset);
  bloomInnerCenter.color.set(color);
  bloomInnerCenter.mirror = false;
  bloomInnerCenter.setScale(16.0);

  //Back
  var boosterBack = renderer.createEffect("fiskheroes:booster");
  boosterBack.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterBack.anchor.set("rightLeg", backRocketOffset);
  boosterBack.mirror = false;
  //Edge
  var shapeBackEdge = renderer.createResource("SHAPE", null);
  var lineBackEdge = shapeBackEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomBackEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackEdge).setOffset(0.0, 1.01, 0.0);
  bloomBackEdge.anchor.set("rightLeg", backRocketOffset);
  bloomBackEdge.color.set(color);
  bloomBackEdge.mirror = false;
  bloomBackEdge.setScale(16.0);
  //Middle
  var shapeBackMiddle = renderer.createResource("SHAPE", null);
  var lineBackMiddle = shapeBackMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomBackMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackMiddle).setOffset(0.0, 1.01, 0.0);
  bloomBackMiddle.anchor.set("rightLeg", backRocketOffset);
  bloomBackMiddle.color.set(color);
  bloomBackMiddle.mirror = false;
  bloomBackMiddle.setScale(16.0);
  //Center
  var shapeBackCenter = renderer.createResource("SHAPE", null);
  var lineBackCenter = shapeBackCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomBackCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackCenter).setOffset(0.0, 1.01, 0.0);
  bloomBackCenter.anchor.set("rightLeg", backRocketOffset);
  bloomBackCenter.color.set(color);
  bloomBackCenter.mirror = false;
  bloomBackCenter.setScale(16.0);

  //Front
  var boosterFront = renderer.createEffect("fiskheroes:booster");
  boosterFront.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterFront.anchor.set("rightLeg", frontRocketOffset);
  boosterFront.mirror = false;
  //Edge
  var shapeFrontEdge = renderer.createResource("SHAPE", null);
  var lineFrontEdge = shapeFrontEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomFrontEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontEdge).setOffset(0.0, 1.01, 0.0);
  bloomFrontEdge.anchor.set("rightLeg", frontRocketOffset);
  bloomFrontEdge.color.set(color);
  bloomFrontEdge.mirror = false;
  bloomFrontEdge.setScale(16.0);
  //Middle
  var shapeFrontMiddle = renderer.createResource("SHAPE", null);
  var lineFrontMiddle = shapeFrontMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomFrontMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontMiddle).setOffset(0.0, 1.01, 0.0);
  bloomFrontMiddle.anchor.set("rightLeg", frontRocketOffset);
  bloomFrontMiddle.color.set(color);
  bloomFrontMiddle.mirror = false;
  bloomFrontMiddle.setScale(16.0);
  //Center
  var shapeFrontCenter = renderer.createResource("SHAPE", null);
  var lineFrontCenter = shapeFrontCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomFrontCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontCenter).setOffset(0.0, 1.01, 0.0);
  bloomFrontCenter.anchor.set("rightLeg", frontRocketOffset);
  bloomFrontCenter.color.set(color);
  bloomFrontCenter.mirror = false;
  bloomFrontCenter.setScale(16.0);

  var obj = {
    boosterMain: boosterMain,
    bloomMainEdge: bloomMainEdge,
    bloomMainMiddle: bloomMainMiddle,
    bloomMainCenter: bloomMainCenter,
    boosterOuter: boosterOuter,
    bloomOuterEdge: bloomOuterEdge,
    bloomOuterMiddle: bloomOuterMiddle,
    bloomOuterCenter: bloomOuterCenter,
    boosterInner: boosterInner,
    bloomInnerEdge: bloomInnerEdge,
    bloomInnerMiddle: bloomInnerMiddle,
    bloomInnerCenter: bloomInnerCenter,
    boosterFront: boosterFront,
    bloomFrontEdge: bloomFrontEdge,
    bloomFrontMiddle: bloomFrontMiddle,
    bloomFrontCenter: bloomFrontCenter,
    boosterBack: boosterBack,
    bloomBackEdge: bloomBackEdge,
    bloomBackMiddle: bloomBackMiddle,
    bloomBackCenter: bloomBackCenter,
    render: (entity, renderLayer, isFirstPersonArm) => {
      //Main
      //Equations
      var data_0 = getHoloBooleans(entity, "holoFlight", "rocketsLegs") + entity.getInterpolatedData("fiskheroes:flight_timer")*((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
      var data_1 = getHoloBoolean(entity, "holoBoostFlight") + entity.getInterpolatedData("fiskheroes:flight_boost_timer")
      var boost = data_1;
      var flight = data_0;
      var innerRockets = entity.getData("skyhighheroes:dyn/rocket_inner_legs_timer");
      var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
      b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
      var f = Math.PI * 2;
      f = Math.sin((entity.loop(f) * f) % f * 3) / 5;

      //Main
      //Booster
      boosterMain.progress = boost;
      boosterMain.speedScale = 2.0 * boost;
      boosterMain.flutter = 1 + boost;
      //Beams
      lineMainEdge.end.y = lineMainMiddle.end.y = lineMainCenter.end.y = ((0.5*boost + 1 + f * boosterMain.flutter / 4) * 1.5 * 1.5 / 8);
      //lineMainMiddle.end.y = ((0.5*boost + 1 + f * boosterMain.flutter / 4) * 0.75 * 0.75 / 8);
      //lineMainCenter.end.y = ((0.5*boost + 1 + f * boosterMain.flutter / 4) * 0.375 * 0.375 / 8);
      //Edge
      bloomMainEdge.progress = bloomMainEdge.opacity = flight;
      //Middle
      bloomMainMiddle.progress = bloomMainMiddle.opacity = flight;
      //Center
      bloomMainCenter.progress = bloomMainCenter.opacity = flight;

      //Sides
      //Equations
      var data_0 = getHoloBooleans(entity, "holoFlight", "rocketsLegs") + entity.getInterpolatedData("fiskheroes:flight_timer")*((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("skyhighheroes:dyn/rockets_legs_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
      var data_1 = getHoloBoolean(entity, "holoBoostFlight") + entity.getInterpolatedData("fiskheroes:flight_boost_timer")
      var boost = data_1;
      var flight = data_0;
      var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
      b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
      var f = Math.PI * 2;
      f = Math.sin((entity.loop(f) * f) % f * 3) / 5;

      //Outer
      //Booster
      boosterOuter.progress = boost;
      boosterOuter.speedScale = 2.0 * boost;
      boosterOuter.flutter = 1 + boost;
      //Beams
      lineOuterEdge.end.y = lineOuterMiddle.end.y = lineOuterCenter.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 1.5 * 1.5 / 8);
      //lineOuterMiddle.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 1.25 * 0.75 / 8);
      //lineOuterCenter.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomOuterEdge.progress = bloomOuterEdge.opacity = flight;
      //Middle
      bloomOuterMiddle.progress = bloomOuterMiddle.opacity = flight;
      //Center
      bloomOuterCenter.progress = bloomOuterCenter.opacity = flight;

      //Inner
      //Booster
      boosterInner.progress = boost * innerRockets;
      boosterInner.speedScale = 2.0 * boost * innerRockets;
      boosterInner.flutter = 1 + boost * innerRockets;
      //Beams
      lineInnerEdge.end.y = lineInnerMiddle.end.y = lineInnerCenter.end.y = ((0.5*boost + 1 + f * boosterInner.flutter / 4) * 1.5 * 1.5 / 8);
      //lineInnerMiddle.end.y = ((0.5*boost + 1 + f * boosterInner.flutter / 4) * 1.25 * 0.75 / 8);
      //lineInnerCenter.end.y = ((0.5*boost + 1 + f * boosterInner.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomInnerEdge.progress = bloomInnerEdge.opacity = flight * innerRockets;
      //Middle
      bloomInnerMiddle.progress = bloomInnerMiddle.opacity = flight * innerRockets;
      //Center
      bloomInnerCenter.progress = bloomInnerCenter.opacity = flight * innerRockets;

      //Front
      //Booster
      boosterFront.progress = boost;
      boosterFront.speedScale = 2.0 * boost;
      boosterFront.flutter = 1 + boost;
      //Beams
      lineFrontEdge.end.y = lineFrontMiddle.end.y = lineFrontCenter.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 1.5 * 1.5 / 8);
      //lineFrontMiddle.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 1.25 * 0.75 / 8);
      //lineFrontCenter.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomFrontEdge.progress = bloomFrontEdge.opacity = flight;
      //Middle
      bloomFrontMiddle.progress = bloomFrontMiddle.opacity = flight;
      //Center
      bloomFrontCenter.progress = bloomFrontCenter.opacity = flight;

      //Back
      //Booster
      boosterBack.progress = boost;
      boosterBack.speedScale = 2.0 * boost;
      boosterBack.flutter = 1 + boost;
      //Beams
      lineBackEdge.end.y = lineBackMiddle.end.y = lineBackCenter.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 1.5 * 1.5 / 8);
      //lineBackMiddle.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 1.25 * 0.75 / 8);
      //lineBackCenter.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomBackEdge.progress = bloomBackEdge.opacity = flight;
      //Middle
      bloomBackMiddle.progress = bloomBackMiddle.opacity = flight;
      //Center
      bloomBackCenter.progress = bloomBackCenter.opacity = flight;      

      if (!isFirstPersonArm) {
        //Main
        boosterMain.render();
        bloomMainEdge.render();
        bloomMainMiddle.render();
        bloomMainCenter.render();
        //Outer
        boosterOuter.render();
        bloomOuterEdge.render();
        bloomOuterMiddle.render();
        bloomOuterCenter.render();
        //Inner
        boosterInner.render();
        bloomInnerEdge.render();
        bloomInnerMiddle.render();
        bloomInnerCenter.render();
        //Front
        boosterFront.render();
        bloomFrontEdge.render();
        bloomFrontMiddle.render();
        bloomFrontCenter.render();
        //Back
        boosterBack.render();
        bloomBackEdge.render();
        bloomBackMiddle.render();
        bloomBackCenter.render();
      };
    }
  };
  return obj;
};

function initBodyBoosters(renderer, model, color) {

  var leftRocketOffset = model.getCubeOffset("body_left_rocket");
  var rightRocketOffset = model.getCubeOffset("body_right_rocket");

  var icon = renderer.createResource("ICON", "skyhighheroes:null");

  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:cybernetic_booster");

  //Left
  var boosterLeft = renderer.createEffect("fiskheroes:booster");
  boosterLeft.setIcon(icon).setOffset(0.0, 2.01, 0.0).setSize(1.5, 1.5);
  boosterLeft.anchor.set("body", leftRocketOffset);
  boosterLeft.mirror = false;
  //Edge
  var shapeLeftEdge = renderer.createResource("SHAPE", null);
  var lineLeftEdge = shapeLeftEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomLeftEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLeftEdge).setOffset(0.0, 2.01, 0.0);
  bloomLeftEdge.anchor.set("body", leftRocketOffset);
  bloomLeftEdge.color.set(color);
  bloomLeftEdge.mirror = false;
  bloomLeftEdge.setScale(16.0);
  //Middle
  var shapeLeftMiddle = renderer.createResource("SHAPE", null);
  var lineLeftMiddle = shapeLeftMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomLeftMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLeftMiddle).setOffset(0.0, 2.01, 0.0);
  bloomLeftMiddle.anchor.set("body", leftRocketOffset);
  bloomLeftMiddle.color.set(color);
  bloomLeftMiddle.mirror = false;
  bloomLeftMiddle.setScale(16.0);
  //Center
  var shapeLeftCenter = renderer.createResource("SHAPE", null);
  var lineLeftCenter = shapeLeftCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomLeftCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeLeftCenter).setOffset(0.0, 2.01, 0.0);
  bloomLeftCenter.anchor.set("body", leftRocketOffset);
  bloomLeftCenter.color.set(color);
  bloomLeftCenter.mirror = false;
  bloomLeftCenter.setScale(16.0);

  //Right
  var boosterRight = renderer.createEffect("fiskheroes:booster");
  boosterRight.setIcon(icon).setOffset(0.0, 2.01, 0.0).setSize(1.5, 1.5);
  boosterRight.anchor.set("body", rightRocketOffset);
  boosterRight.mirror = false;
  //Edge
  var shapeRightEdge = renderer.createResource("SHAPE", null);
  var lineRightEdge = shapeRightEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomRightEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeRightEdge).setOffset(0.0, 2.01, 0.0);
  bloomRightEdge.anchor.set("body", rightRocketOffset);
  bloomRightEdge.color.set(color);
  bloomRightEdge.mirror = false;
  bloomRightEdge.setScale(16.0);
  //Middle
  var shapeRightMiddle = renderer.createResource("SHAPE", null);
  var lineRightMiddle = shapeRightMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomRightMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeRightMiddle).setOffset(0.0, 2.01, 0.0);
  bloomRightMiddle.anchor.set("body", rightRocketOffset);
  bloomRightMiddle.color.set(color);
  bloomRightMiddle.mirror = false;
  bloomRightMiddle.setScale(16.0);
  //Center
  var shapeRightCenter = renderer.createResource("SHAPE", null);
  var lineRightCenter = shapeRightCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomRightCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeRightCenter).setOffset(0.0, 2.01, 0.0);
  bloomRightCenter.anchor.set("body", rightRocketOffset);
  bloomRightCenter.color.set(color);
  bloomRightCenter.mirror = false;
  bloomRightCenter.setScale(16.0);

  var obj = {
    boosterLeft: boosterLeft,
    bloomLeftEdge: bloomLeftEdge,
    bloomLeftMiddle: bloomLeftMiddle,
    bloomLeftCenter: bloomLeftCenter,
    boosterRight: boosterRight,
    bloomRightEdge: bloomRightEdge,
    bloomRightMiddle: bloomRightMiddle,
    bloomRightCenter: bloomRightCenter,
    render: (entity, renderLayer, isFirstPersonArm) => {
      //Equations
      var data_0 = getHoloBooleans(entity, "holoFlight", "rocketsBody") + entity.getInterpolatedData("fiskheroes:flight_timer")*((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("skyhighheroes:dyn/rockets_body_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
      var data_1 = getHoloBoolean(entity, "holoBoostFlight") + entity.getInterpolatedData("fiskheroes:flight_boost_timer")
      var boost = data_1;
      var flight = data_0;
      var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
      b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
      var f = Math.PI * 2;
      f = Math.sin((entity.loop(f) * f) % f * 3) / 5;

      //Left
      //Booster
      boosterLeft.progress = boost;
      boosterLeft.speedScale = 2.0 * boost;
      boosterLeft.flutter = 1 + boost;
      //Beams
      lineLeftEdge.end.y = lineLeftMiddle.end.y = lineLeftCenter.end.y = ((0.5*boost + 1 + f * boosterLeft.flutter / 4) * 1.5 * 1.5 / 8);
      //lineLeftMiddle.end.y = ((0.5*boost + 1 + f * boosterLeft.flutter / 4) * 1.25 * 0.75 / 8);
      //lineLeftCenter.end.y = ((0.5*boost + 1 + f * boosterLeft.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomLeftEdge.progress = bloomLeftEdge.opacity = flight;
      //Middle
      bloomLeftMiddle.progress = bloomLeftMiddle.opacity = flight;
      //Center
      bloomLeftCenter.progress = bloomLeftCenter.opacity = flight;

      //Right
      //Booster
      boosterRight.progress = boost;
      boosterRight.speedScale = 2.0 * boost;
      boosterRight.flutter = 1 + boost;
      //Beams
      lineRightEdge.end.y = lineRightMiddle.end.y = lineRightCenter.end.y = ((0.5*boost + 1 + f * boosterRight.flutter / 4) * 1.5 * 1.5 / 8);
      //lineRightMiddle.end.y = ((0.5*boost + 1 + f * boosterRight.flutter / 4) * 1.25 * 0.75 / 8);
      //lineRightCenter.end.y = ((0.5*boost + 1 + f * boosterRight.flutter / 4) * 0.625 * 0.375 / 8);
      //Edge
      bloomRightEdge.progress = bloomRightEdge.opacity = flight;
      //Middle
      bloomRightMiddle.progress = bloomRightMiddle.opacity = flight;
      //Center
      bloomRightCenter.progress = bloomRightCenter.opacity = flight;

      if (!isFirstPersonArm) {
        //Left
        boosterLeft.render();
        bloomLeftEdge.render();
        bloomLeftMiddle.render();
        bloomLeftCenter.render();
        //Right
        boosterRight.render();
        bloomRightEdge.render();
        bloomRightMiddle.render();
        bloomRightCenter.render();
      };
    }
  };
  return obj;
};

function initLeftArmBoosters(renderer, model, color) {

  var outerRocketOffset = model.getCubeOffset("left_arm_outer_rocket");
  var frontRocketOffset = model.getCubeOffset("left_arm_front_rocket");
  var backRocketOffset = model.getCubeOffset("left_arm_back_rocket");

  var icon = renderer.createResource("ICON", "skyhighheroes:null");

  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:cybernetic_booster");
  
  //Booster
  //Outer
  var boosterOuter = renderer.createEffect("fiskheroes:booster");
  boosterOuter.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterOuter.anchor.set("leftArm", outerRocketOffset);
  boosterOuter.mirror = false;
  //Edge
  var shapeOuterEdge = renderer.createResource("SHAPE", null);
  var lineOuterEdge = shapeOuterEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomOuterEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterEdge).setOffset(0.0, 1.01, 0.0);
  bloomOuterEdge.anchor.set("leftArm", outerRocketOffset);
  bloomOuterEdge.color.set(color);
  bloomOuterEdge.mirror = false;
  bloomOuterEdge.setScale(16.0);
  //Middle
  var shapeOuterMiddle = renderer.createResource("SHAPE", null);
  var lineOuterMiddle = shapeOuterMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomOuterMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterMiddle).setOffset(0.0, 1.01, 0.0);
  bloomOuterMiddle.anchor.set("leftArm", outerRocketOffset);
  bloomOuterMiddle.color.set(color);
  bloomOuterMiddle.mirror = false;
  bloomOuterMiddle.setScale(16.0);
  //Center
  var shapeOuterCenter = renderer.createResource("SHAPE", null);
  var lineOuterCenter = shapeOuterCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomOuterCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterCenter).setOffset(0.0, 1.01, 0.0);
  bloomOuterCenter.anchor.set("leftArm", outerRocketOffset);
  bloomOuterCenter.color.set(color);
  bloomOuterCenter.mirror = false;
  bloomOuterCenter.setScale(16.0);

  //Front
  var boosterFront = renderer.createEffect("fiskheroes:booster");
  boosterFront.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterFront.anchor.set("leftArm", frontRocketOffset);
  boosterFront.mirror = false;
  //Edge
  var shapeFrontEdge = renderer.createResource("SHAPE", null);
  var lineFrontEdge = shapeFrontEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomFrontEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontEdge).setOffset(0.0, 1.01, 0.0);
  bloomFrontEdge.anchor.set("leftArm", frontRocketOffset);
  bloomFrontEdge.color.set(color);
  bloomFrontEdge.mirror = false;
  bloomFrontEdge.setScale(16.0);
  //Middle
  var shapeFrontMiddle = renderer.createResource("SHAPE", null);
  var lineFrontMiddle = shapeFrontMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomFrontMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontMiddle).setOffset(0.0, 1.01, 0.0);
  bloomFrontMiddle.anchor.set("leftArm", frontRocketOffset);
  bloomFrontMiddle.color.set(color);
  bloomFrontMiddle.mirror = false;
  bloomFrontMiddle.setScale(16.0);
  //Center
  var shapeFrontCenter = renderer.createResource("SHAPE", null);
  var lineFrontCenter = shapeFrontCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomFrontCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontCenter).setOffset(0.0, 1.01, 0.0);
  bloomFrontCenter.anchor.set("leftArm", frontRocketOffset);
  bloomFrontCenter.color.set(color);
  bloomFrontCenter.mirror = false;
  bloomFrontCenter.setScale(16.0);

  //Back
  var boosterBack = renderer.createEffect("fiskheroes:booster");
  boosterBack.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterBack.anchor.set("leftArm", backRocketOffset);
  boosterBack.mirror = false;
  //Edge
  var shapeBackEdge = renderer.createResource("SHAPE", null);
  var lineBackEdge = shapeBackEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomBackEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackEdge).setOffset(0.0, 1.01, 0.0);
  bloomBackEdge.anchor.set("leftArm", backRocketOffset);
  bloomBackEdge.color.set(color);
  bloomBackEdge.mirror = false;
  bloomBackEdge.setScale(16.0);
  //Middle
  var shapeBackMiddle = renderer.createResource("SHAPE", null);
  var lineBackMiddle = shapeBackMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomBackMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackMiddle).setOffset(0.0, 1.01, 0.0);
  bloomBackMiddle.anchor.set("leftArm", backRocketOffset);
  bloomBackMiddle.color.set(color);
  bloomBackMiddle.mirror = false;
  bloomBackMiddle.setScale(16.0);
  //Center
  var shapeBackCenter = renderer.createResource("SHAPE", null);
  var lineBackCenter = shapeBackCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomBackCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackCenter).setOffset(0.0, 1.01, 0.0);
  bloomBackCenter.anchor.set("leftArm", backRocketOffset);
  bloomBackCenter.color.set(color);
  bloomBackCenter.mirror = false;
  bloomBackCenter.setScale(16.0);

  var obj = {
    render: (entity, renderLayer, isFirstPersonArm) => {
      //Booster
      //Equations
      var data_0 = getHoloBooleans(entity, "holoFlight", "rocketsArms") + entity.getInterpolatedData("fiskheroes:flight_timer")*((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("skyhighheroes:dyn/rockets_arms_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
      var data_1 = getHoloBoolean(entity, "holoBoostFlight") + entity.getInterpolatedData("fiskheroes:flight_boost_timer")
      var boost = data_1;
      var flight = data_0;
      var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
      b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
      var f = Math.PI * 2;
      f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
      //Booster
      //Outer
      boosterOuter.progress = boost;
      boosterOuter.speedScale = 2.0 * boost;
      boosterOuter.flutter = 1 + boost;
      //Beams
      lineOuterEdge.end.y = lineOuterMiddle.end.y = lineOuterCenter.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 1.5 * 1.5 / 8);
      //lineOuterMiddle.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 0.75 * 0.75 / 8);
      //lineOuterCenter.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 0.375 * 0.375 / 8);
      //Edge
      bloomOuterEdge.progress = bloomOuterEdge.opacity = flight;
      //Middle
      bloomOuterMiddle.progress = bloomOuterMiddle.opacity = flight;
      //Center
      bloomOuterCenter.progress = bloomOuterCenter.opacity = flight;

      //Front
      boosterFront.progress = boost;
      boosterFront.speedScale = 2.0 * boost;
      boosterFront.flutter = 1 + boost;
      //Beams
      lineFrontEdge.end.y = lineFrontMiddle.end.y = lineFrontCenter.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 1.5 * 1.5 / 8);
      //lineFrontMiddle.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 0.75 * 0.75 / 8);
      //lineFrontCenter.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 0.375 * 0.375 / 8);
      //Edge
      bloomFrontEdge.progress = bloomFrontEdge.opacity = flight;
      //Middle
      bloomFrontMiddle.progress = bloomFrontMiddle.opacity = flight;
      //Center
      bloomFrontCenter.progress = bloomFrontCenter.opacity = flight;
      
      //Back
      boosterBack.progress = boost;
      boosterBack.speedScale = 2.0 * boost;
      boosterBack.flutter = 1 + boost;
      //Beams
      lineBackEdge.end.y = lineBackMiddle.end.y = lineBackCenter.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 1.5 * 1.5 / 8);
      //lineBackMiddle.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 0.75 * 0.75 / 8);
      //lineBackCenter.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 0.375 * 0.375 / 8);
      //Edge
      bloomBackEdge.progress = bloomBackEdge.opacity = flight;
      //Middle
      bloomBackMiddle.progress = bloomBackMiddle.opacity = flight;
      //Center
      bloomBackCenter.progress = bloomBackCenter.opacity = flight;

      if (!isFirstPersonArm) {
        //Outer
        boosterOuter.render();
        bloomOuterEdge.render();
        bloomOuterMiddle.render();
        bloomOuterCenter.render();
        //Front
        boosterFront.render();
        bloomFrontEdge.render();
        bloomFrontMiddle.render();
        bloomFrontCenter.render();
        //Back
        boosterBack.render();
        bloomBackEdge.render();
        bloomBackMiddle.render();
        bloomBackCenter.render();
      };
    }
  };
  return obj;
};

function initRightArmBoosters(renderer, model, color) {

  var outerRocketOffset = model.getCubeOffset("right_arm_outer_rocket");
  var frontRocketOffset = model.getCubeOffset("right_arm_front_rocket");
  var backRocketOffset = model.getCubeOffset("right_arm_back_rocket");

  var icon = renderer.createResource("ICON", "skyhighheroes:null");

  beam = renderer.createResource("BEAM_RENDERER", "skyhighheroes:cybernetic_booster");
  
  //Booster
  var boosterOuter = renderer.createEffect("fiskheroes:booster");
  boosterOuter.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterOuter.anchor.set("rightArm", outerRocketOffset);
  boosterOuter.mirror = false;
  //Edge
  var shapeOuterEdge = renderer.createResource("SHAPE", null);
  var lineOuterEdge = shapeOuterEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomOuterEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterEdge).setOffset(0.0, 1.01, 0.0);
  bloomOuterEdge.anchor.set("rightArm", outerRocketOffset);
  bloomOuterEdge.color.set(color);
  bloomOuterEdge.mirror = false;
  bloomOuterEdge.setScale(16.0);
  //Middle
  var shapeOuterMiddle = renderer.createResource("SHAPE", null);
  var lineOuterMiddle = shapeOuterMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomOuterMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterMiddle).setOffset(0.0, 1.01, 0.0);
  bloomOuterMiddle.anchor.set("rightArm", outerRocketOffset);
  bloomOuterMiddle.color.set(color);
  bloomOuterMiddle.mirror = false;
  bloomOuterMiddle.setScale(16.0);
  //Center
  var shapeOuterCenter = renderer.createResource("SHAPE", null);
  var lineOuterCenter = shapeOuterCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomOuterCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeOuterCenter).setOffset(0.0, 1.01, 0.0);
  bloomOuterCenter.anchor.set("rightArm", outerRocketOffset);
  bloomOuterCenter.color.set(color);
  bloomOuterCenter.mirror = false;
  bloomOuterCenter.setScale(16.0);
  
  //Front
  var boosterFront = renderer.createEffect("fiskheroes:booster");
  boosterFront.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterFront.anchor.set("rightArm", frontRocketOffset);
  boosterFront.mirror = false;
  //Edge
  var shapeFrontEdge = renderer.createResource("SHAPE", null);
  var lineFrontEdge = shapeFrontEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomFrontEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontEdge).setOffset(0.0, 1.01, 0.0);
  bloomFrontEdge.anchor.set("rightArm", frontRocketOffset);
  bloomFrontEdge.color.set(color);
  bloomFrontEdge.mirror = false;
  bloomFrontEdge.setScale(16.0);
  //Middle
  var shapeFrontMiddle = renderer.createResource("SHAPE", null);
  var lineFrontMiddle = shapeFrontMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomFrontMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontMiddle).setOffset(0.0, 1.01, 0.0);
  bloomFrontMiddle.anchor.set("rightArm", frontRocketOffset);
  bloomFrontMiddle.color.set(color);
  bloomFrontMiddle.mirror = false;
  bloomFrontMiddle.setScale(16.0);
  //Center
  var shapeFrontCenter = renderer.createResource("SHAPE", null);
  var lineFrontCenter = shapeFrontCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomFrontCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeFrontCenter).setOffset(0.0, 1.01, 0.0);
  bloomFrontCenter.anchor.set("rightArm", frontRocketOffset);
  bloomFrontCenter.color.set(color);
  bloomFrontCenter.mirror = false;
  bloomFrontCenter.setScale(16.0);
  
  //Back
  var boosterBack = renderer.createEffect("fiskheroes:booster");
  boosterBack.setIcon(icon).setOffset(0.0, 1.01, 0.0).setSize(1.5, 1.5);
  boosterBack.anchor.set("rightArm", backRocketOffset);
  boosterBack.mirror = false;
  //Edge
  var shapeBackEdge = renderer.createResource("SHAPE", null);
  var lineBackEdge = shapeBackEdge.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [1.5, 1.5] });
  var bloomBackEdge = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackEdge).setOffset(0.0, 1.01, 0.0);
  bloomBackEdge.anchor.set("rightArm", backRocketOffset);
  bloomBackEdge.color.set(color);
  bloomBackEdge.mirror = false;
  bloomBackEdge.setScale(16.0);
  //Middle
  var shapeBackMiddle = renderer.createResource("SHAPE", null);
  var lineBackMiddle = shapeBackMiddle.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.75, 0.75] });
  var bloomBackMiddle = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackMiddle).setOffset(0.0, 1.01, 0.0);
  bloomBackMiddle.anchor.set("rightArm", backRocketOffset);
  bloomBackMiddle.color.set(color);
  bloomBackMiddle.mirror = false;
  bloomBackMiddle.setScale(16.0);
  //Center
  var shapeBackCenter = renderer.createResource("SHAPE", null);
  var lineBackCenter = shapeBackCenter.bindLine({ "start": [0.0, 0.0, 0.0], "end": [0.0, 0.0, 0.0], "size": [0.375, 0.375] });
  var bloomBackCenter = renderer.createEffect("fiskheroes:lines").setRenderer(beam).setShape(shapeBackCenter).setOffset(0.0, 1.01, 0.0);
  bloomBackCenter.anchor.set("rightArm", backRocketOffset);
  bloomBackCenter.color.set(color);
  bloomBackCenter.mirror = false;
  bloomBackCenter.setScale(16.0);

  var obj = {
    render: (entity, renderLayer, isFirstPersonArm) => {
      //Booster
      //Equations
      var data_0 = getHoloBooleans(entity, "holoFlight", "rocketsArms") + entity.getInterpolatedData("fiskheroes:flight_timer")*((Math.sin(((5*Math.min(Math.max(entity.getInterpolatedData("skyhighheroes:dyn/rockets_arms_timer"), 0.8), 1.0) - 4) * 2.0 - 1.0) * Math.PI / 2.0) + 1.0) / 2.0);
      var data_1 = getHoloBoolean(entity, "holoBoostFlight") + entity.getInterpolatedData("fiskheroes:flight_boost_timer")
      var boost = data_1;
      var flight = data_0;
      var b = Math.min(Math.max(boost * 3 - 1.25, 0), 1);
      b = entity.isSprinting() ? 0.5 - Math.cos(2 * b * Math.PI) / 2 : 0;
      var f = Math.PI * 2;
      f = Math.sin((entity.loop(f) * f) % f * 3) / 5;
      //Booster
      //Outer
      boosterOuter.progress = boost;
      boosterOuter.speedScale = 2.0 * boost;
      boosterOuter.flutter = 1 + boost;
      //Beams
      lineOuterEdge.end.y = lineOuterMiddle.end.y = lineOuterCenter.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 1.5 * 1.5 / 8);
      //lineOuterMiddle.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 0.75 * 0.75 / 8);
      //lineOuterCenter.end.y = ((0.5*boost + 1 + f * boosterOuter.flutter / 4) * 0.375 * 0.375 / 8);
      //Edge
      bloomOuterEdge.progress = bloomOuterEdge.opacity = flight;
      //Middle
      bloomOuterMiddle.progress = bloomOuterMiddle.opacity = flight;
      //Center
      bloomOuterCenter.progress = bloomOuterCenter.opacity = flight;

      //Front
      boosterFront.progress = boost;
      boosterFront.speedScale = 2.0 * boost;
      boosterFront.flutter = 1 + boost;
      //Beams
      lineFrontEdge.end.y = lineFrontMiddle.end.y = lineFrontCenter.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 1.5 * 1.5 / 8);
      //lineFrontMiddle.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 0.75 * 0.75 / 8);
      //lineFrontCenter.end.y = ((0.5*boost + 1 + f * boosterFront.flutter / 4) * 0.375 * 0.375 / 8);
      //Edge
      bloomFrontEdge.progress = bloomFrontEdge.opacity = flight;
      //Middle
      bloomFrontMiddle.progress = bloomFrontMiddle.opacity = flight;
      //Center
      bloomFrontCenter.progress = bloomFrontCenter.opacity = flight;
      
      //Back
      boosterBack.progress = boost;
      boosterBack.speedScale = 2.0 * boost;
      boosterBack.flutter = 1 + boost;
      //Beams
      lineBackEdge.end.y = lineBackMiddle.end.y = lineBackCenter.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 1.5 * 1.5 / 8);
      //lineBackMiddle.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 0.75 * 0.75 / 8);
      //lineBackCenter.end.y = ((0.5*boost + 1 + f * boosterBack.flutter / 4) * 0.375 * 0.375 / 8);
      //Edge
      bloomBackEdge.progress = bloomBackEdge.opacity = flight;
      //Middle
      bloomBackMiddle.progress = bloomBackMiddle.opacity = flight;
      //Center
      bloomBackCenter.progress = bloomBackCenter.opacity = flight;

      //Outer
      boosterOuter.render();
      bloomOuterEdge.render();
      bloomOuterMiddle.render();
      bloomOuterCenter.render();
      //Front
      boosterFront.render();
      bloomFrontEdge.render();
      bloomFrontMiddle.render();
      bloomFrontCenter.render();
      //Back
      boosterBack.render();
      bloomBackEdge.render();
      bloomBackMiddle.render();
      bloomBackCenter.render();
    }
  };
  return obj;
};

/**
 * Checks a NBT boolean to be used on holographic display stand
 * @param {JSEntity} entity - required
 * @param {string} value - NBT boolean to check
 * @returns NBT boolean if the entity is a holographic display stand
 **/
function getHoloBoolean(entity, value) {
  return entity.is("DISPLAY") && entity.getWornHelmet().nbt().getBoolean(value) && (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM");
};

/**
 * Checks two NBT booleans to be used on holographic display stand
 * @param {JSEntity} entity - required
 * @param {string} condition - NBT boolean to use for condition
 * @param {string} value - NBT boolean to use for condition
 * @returns NBT boolean if the entity is a holographic display stand
 **/
function getHoloBooleans(entity, condition, value) {
  return entity.is("DISPLAY") && entity.getWornHelmet().nbt().getBoolean(condition) && entity.getWornHelmet().nbt().getBoolean(value) && (entity.as("DISPLAY").getDisplayType() == "HOLOGRAM");
};