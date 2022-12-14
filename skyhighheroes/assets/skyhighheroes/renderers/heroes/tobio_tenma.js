var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "eyes" : "skyhighheroes:astro/tobio_tenma_eyes",
    "boots_lights" : "skyhighheroes:astro/tobio_tenma_boots_lights",
    "eyes_normal" : "skyhighheroes:astro/tobio_tenma_eyes_normal",
    "base": "skyhighheroes:astro/tobio_tenma_base",
    "base_flying": "skyhighheroes:astro/tobio_tenma_base_flying",
    "base_head": "skyhighheroes:astro/tobio_tenma_base_head",
    "base_torso_boots": "skyhighheroes:astro/tobio_tenma_base_torso_boots",
    "base_torso_boots_legs": "skyhighheroes:astro/tobio_tenma_base_torso_boots_legs",
    "base_legs": "skyhighheroes:astro/tobio_tenma_base_legs",
    "base_legs_boots": "skyhighheroes:astro/tobio_tenma_base_legs_boots",
    "long" : "skyhighheroes:astro/tobio_tenma_long",
    "long_flying" : "skyhighheroes:astro/tobio_tenma_long_flying",
    "long_head_torso": "skyhighheroes:astro/tobio_tenma_long_head_torso",
    "long_torso_boots": "skyhighheroes:astro/tobio_tenma_long_torso_boots",
    "long_torso_boots_legs": "skyhighheroes:astro/tobio_tenma_long_torso_boots_legs",
    "long_legs": "skyhighheroes:astro/tobio_tenma_long_legs",
    "long_legs_torso": "skyhighheroes:astro/tobio_tenma_long_legs_torso",
    "long_legs_boots": "skyhighheroes:astro/tobio_tenma_long_legs_boots",
    "long_legs_torso_boots": "skyhighheroes:astro/tobio_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:astro/tobio_tenma_short",
    "short_flying" : "skyhighheroes:astro/tobio_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:astro/tobio_tenma_short_torso_boots",
    "short_legs": "skyhighheroes:astro/tobio_tenma_short_legs",
    "short_legs_torso": "skyhighheroes:astro/tobio_tenma_short_legs_torso",
    "short_legs_boots": "skyhighheroes:astro/tobio_tenma_short_legs_boots",
    "short_legs_torso_boots": "skyhighheroes:astro/tobio_tenma_short_torso_boots",
    "normal" : "skyhighheroes:astro/tobio_tenma_normal",
    "normal_flying" : "skyhighheroes:astro/tobio_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:astro/tobio_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:astro/tobio_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:astro/tobio_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:astro/tobio_tenma_normal_legs_torso",
    "normal_legs_boots": "skyhighheroes:astro/tobio_tenma_normal_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:astro/tobio_tenma_normal_legs_torso_boots",
    "cannon_lights" : "skyhighheroes:astro/tobio_tenma_cannon_lights",
    "shield": "skyhighheroes:astro/tobio_tenma_shield",
    "katana": "skyhighheroes:astro/tobio_tenma_katana",
    "katana_lights": "skyhighheroes:astro/tobio_tenma_katana_lights",
    "scythe": "skyhighheroes:astro/tobio_tenma_scythe",
    "scythe_lights": "skyhighheroes:astro/tobio_tenma_scythe_lights",
    "rifle": "skyhighheroes:astro/tobio_tenma_rifle",
    "rifle_lights": "skyhighheroes:astro/tobio_tenma_rifle_lights"
});

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
                return entity.getWornChestplate().suitType() == "skyhighheroes:tobio_tenma" ? "long_head_torso" : "base_head";
            } else {
                return "base_head";
            }
        }
        if (renderLayer == "CHESTPLATE" || renderLayer == "BOOTS") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                return entity.getWornLeggings().suitType() == "skyhighheroes:tobio_tenma" ? "base_torso_boots_legs" : "base_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                return entity.getWornLeggings().suitType() == "skyhighheroes:tobio_tenma" ? "long_torso_boots_legs" : "long_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                return entity.getWornLeggings().suitType() == "skyhighheroes:tobio_tenma" ? "short_torso_boots_legs" : "short_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return entity.getWornLeggings().suitType() == "skyhighheroes:tobio_tenma" ? "normal_torso_boots_legs" : "normal_torso_boots";
            }
        }
        if (renderLayer == "LEGGINGS") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                if (entity.getWornBoots().suitType() == "skyhighheroes:tobio_tenma") {
                    return "base_legs_boots";
                } else {
                    return "base_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                if (entity.getWornChestplate().suitType() == "skyhighheroes:tobio_tenma" && entity.getWornBoots().suitType() == "skyhighheroes:tobio_tenma") {
                    return "long_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == "skyhighheroes:tobio_tenma") {
                    return "long_legs_torso";
                }
                if (entity.getWornBoots().suitType() == "skyhighheroes:tobio_tenma") {
                    return "long_legs_boots";
                } else {
                    return "long_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                if (entity.getWornChestplate().suitType() == "skyhighheroes:tobio_tenma" && entity.getWornBoots().suitType() == "skyhighheroes:tobio_tenma") {
                    return "short_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == "skyhighheroes:tobio_tenma") {
                    return "short_legs_torso";
                }
                if (entity.getWornBoots().suitType() == "skyhighheroes:tobio_tenma") {
                    return "short_legs_boots";
                } else {
                    return "short_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                if (entity.getWornChestplate().suitType() == "skyhighheroes:tobio_tenma" && entity.getWornBoots().suitType() == "skyhighheroes:tobio_tenma") {
                    return "normal_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == "skyhighheroes:tobio_tenma") {
                    return "normal_legs_torso";
                }
                if (entity.getWornBoots().suitType() == "skyhighheroes:tobio_tenma") {
                    return "normal_legs_boots";
                } else {
                    return "normal_legs";
                }
            }
        }
        else {
            return null;
        }
    });
    renderer.setLights((entity, renderLayer) => {
        if (renderLayer == "HELMET") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") != 3 || entity.isDisplayStand()) {
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
    stuff.initForceField(renderer, colorVar);
    rockets = astro.initNormalBoosters(renderer);
    astro.initBeams(renderer, colorVar);
    stuff.bindSpeedTrail(renderer, "skyhighheroes:tobio_tenma_speed");
    
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
    rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
}

var colorVar = 0xFFFFFF