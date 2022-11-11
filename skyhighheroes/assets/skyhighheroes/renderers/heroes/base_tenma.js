var rockets = implement("skyhighheroes:external/astro_rockets");
var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function init(renderer) {

    renderer.setTexture((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE" || renderLayer == "LEGGINGS" || renderLayer == "HELMET" || renderLayer == "BOOTS") {
        //Anything below the render layer thing is what sets the texture for that peice of the suit
        //Idea for this: make it so that if you have only the legs on, 
        //it shows wires coming out of the bottom of the legs indicating
        //that your boots are missing
        if (entity.isDisplayStand() || entity.getUUID() != getID()) {
            return "base";
        }
        if (entity.getData("fiskheroes:flying")) {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                return "base_flying";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                return "long_flying";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                return "short_flying";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "normal_flying";
            }
        }
        if (!entity.getData("fiskheroes:flying")) {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                return "base";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                return "long";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                return "short";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "normal";
            }
        }
        else {
            return "null";
        }
    }
    });
    renderer.setLights((entity, renderLayer) => {
        if (renderLayer == "CHESTPLATE" || renderLayer == "LEGGINGS" || renderLayer == "HELMET" || renderLayer == "BOOTS") {
        if (entity.isDisplayStand() || entity.getUUID() != getID()) {
            return "lights";
        }
        if (entity.getData("fiskheroes:flying")) {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") != 3) {
                return "lights_flying";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "lights_normal_flying";
            }
        }
        if (!entity.getData("fiskheroes:flying")) {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") != 3) {
                return "lights";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "lights_normal";
            }
        }
        else {
            return "null";
        }
    }
    });
    
    renderer.setItemIcons("%s_head", "%s_torso", "%s_legs", "%s_boots");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("CHESTPLATE", "body", "rightArm", "leftArm");
    renderer.showModel("LEGGINGS", "rightLeg", "leftLeg");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
    renderer.fixHatLayer("HELMET");
    initEffects(renderer);
    initAnimations(renderer);
}

function initEffects(renderer) {
    astro.initCannon(renderer);
    astro.initEquipment(renderer);
    stuff.initForceField(renderer, getCLR());
}

function initAnimations(renderer) {
    astro.initAstroAnimations(renderer);
    stuff.forcefieldAnimation(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
    astro.renderCannon(entity, renderLayer);
    rockets.render(entity, renderLayer, isFirstPersonArm);
}

function getID() {
    return "";
}
function getNamePerson() {
    return "";
}
function getCLR() {
    return 0x00FF00;
}