var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

function init(renderer) {
    renderer.setTexture((entity, renderLayer) => {
        if (entity.isWearingFullSuit()) {
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
        }
        if (renderLayer == "HELMET") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                return entity.getWornChestplate().suitType() == getSuitID() ? "long_head_torso" : "base_head";
            } else {
                return "base_head";
            }
        }
        if (renderLayer == "CHESTPLATE" || renderLayer == "BOOTS") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                return entity.getWornLeggings().suitType() == getSuitID() ? "base_torso_boots_legs" : "base_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                return entity.getWornLeggings().suitType() == getSuitID() ? "long_torso_boots_legs" : "long_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                return "short_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return entity.getWornLeggings().suitType() == getSuitID() ? "normal_torso_boots_legs" : "normal_torso_boots";
            }
        }
        if (renderLayer == "LEGGINGS") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                if (entity.getWornBoots().suitType() == getSuitID()) {
                    return "base_legs_boots";
                } else {
                    return "base_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                if (entity.getWornChestplate().suitType() == getSuitID() && entity.getWornBoots().suitType() == getSuitID()) {
                    return "long_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == getSuitID()) {
                    return "long_legs_torso";
                }
                if (entity.getWornBoots().suitType() == getSuitID()) {
                    return "long_legs_boots";
                } else {
                    return "long_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                if (entity.getWornChestplate().suitType() == getSuitID() && entity.getWornBoots().suitType() == getSuitID()) {
                    return "short_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == getSuitID()) {
                    return "short_legs_torso";
                }
                if (entity.getWornBoots().suitType() == getSuitID()) {
                    return "short_legs_boots";
                } else {
                    return "short_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                if (entity.getWornChestplate().suitType() == getSuitID() && entity.getWornBoots().suitType() == getSuitID()) {
                    return "normal_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == getSuitID()) {
                    return "normal_legs_torso";
                }
                if (entity.getWornBoots().suitType() == getSuitID()) {
                    return "normal_legs_boots";
                } else {
                    return "normal_legs";
                }
            }
        }
        else {
            return "null";
        }
    });
    renderer.setLights((entity, renderLayer) => {
        if (renderLayer == "HELMET") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") != 3 || entity.isDisplayStand() || entity.getUUID() != getID()) {
                return "eyes";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return "eyes_normal";
            }
        }
        if (renderLayer == "BOOTS") {
            if (entity.getData("fiskheroes:flying")) {
                return "boots_lights";
            }
            if (!entity.getData("fiskheroes:flying")) {
                return null;
            }
        }
        if (renderLayer == "CHESTPLATE" || renderLayer == "LEGGINGS") {
            return null;
        }
    });
    renderer.setItemIcons("%s_head", "%s_torso", "%s_legs", "%s_boots");
    renderer.showModel("HELMET", "head", "headwear");
    renderer.showModel("LEGGINGS", "body", "rightLeg", "leftLeg");
    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm");
    renderer.showModel("BOOTS", "rightLeg", "leftLeg");
    renderer.fixHatLayer("HELMET");
    initEffects(renderer);
    initAnimations(renderer);
}

function initEffects(renderer) {
    cannon = renderer.createEffect("fiskheroes:overlay");
    cannon.texture.set(null, "cannon_lights");
    astro.initEquipment(renderer);
    stuff.initForceField(renderer, getCLR());
}

function initAnimations(renderer) {
    astro.initAstroAnimations(renderer);
    stuff.forcefieldAnimation(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE" && entity.getHeldItem().isEmpty()) {
        cannon.opacity = entity.getInterpolatedData('fiskheroes:aiming_timer');
        cannon.render();
    }
}

function getNamePerson() {
    return "";
}
function getID() {
    return "";
}
function getSuitID() {
    return "";
}
function getCLR() {
    return 0x00FF00;
}