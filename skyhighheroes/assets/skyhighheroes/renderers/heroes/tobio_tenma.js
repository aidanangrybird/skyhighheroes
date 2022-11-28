var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "lights" : "skyhighheroes:astro/tobio_tenma_lights",
    "lights_flying" : "skyhighheroes:astro/tobio_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:astro/tobio_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:astro/tobio_tenma_lights_normal_flying",
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
    "head_legs_torso_boots": "skyhighheroes:astro/tobio_tenma_long_legs_torso_boots",
    "short" : "skyhighheroes:astro/tobio_tenma_short",
    "short_flying" : "skyhighheroes:astro/tobio_tenma_short_flying",
    "short_torso_boots": "skyhighheroes:astro/tobio_tenma_short",
    "short_legs": "skyhighheroes:astro/tobio_tenma_short",
    "short_legs_torso": "skyhighheroes:astro/tobio_tenma_short",
    "short_legs_boots": "skyhighheroes:astro/tobio_tenma_short",
    "short_legs_torso_boots": "skyhighheroes:astro/tobio_tenma_short",
    "normal" : "skyhighheroes:astro/tobio_tenma_normal",
    "normal_flying" : "skyhighheroes:astro/tobio_tenma_normal_flying",
    "normal_torso_boots": "skyhighheroes:astro/tobio_tenma_normal_torso_boots",
    "normal_torso_boots_legs": "skyhighheroes:astro/tobio_tenma_normal_torso_boots_legs",
    "normal_legs": "skyhighheroes:astro/tobio_tenma_normal_legs",
    "normal_legs_torso": "skyhighheroes:astro/tobio_tenma_legs_torso",
    "normal_legs_boots": "skyhighheroes:astro/tobio_tenma_legs_boots",
    "normal_legs_torso_boots": "skyhighheroes:astro/tobio_tenma_normal_legs_torso_boots",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back",
    "cannon_lights_inner" : "skyhighheroes:astro/tobio_tenma_cannon_lights_inner",
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
                return entity.getWornChestplate().suitType() == $SUIT_NAME ? "long_head_torso" : "base_head";
            } else {
                return "base_head";
            }
        }
        if (renderLayer == "CHESTPLATE" || renderLayer == "BOOTS") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                return entity.getWornLeggings().suitType() == $SUIT_NAME ? "base_torso_boots_legs" : "base_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                return entity.getWornLeggings().suitType() == $SUIT_NAME ? "long_torso_boots_legs" : "long_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                return entity.getWornLeggings().suitType() == $SUIT_NAME ? "short_torso_boots_legs" : "short_torso_boots";
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                return entity.getWornLeggings().suitType() == $SUIT_NAME ? "normal_torso_boots_legs" : "normal_torso_boots";
            }
        }
        if (renderLayer == "LEGGINGS") {
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 0) {
                if (entity.getWornBoots().suitType() == $SUIT_NAME) {
                    return "base_legs_boots";
                } else {
                    return "base_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 1) {
                if (entity.getWornChestplate().suitType() == $SUIT_NAME && entity.getWornBoots().suitType() == $SUIT_NAME) {
                    return "long_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == $SUIT_NAME) {
                    return "long_legs_torso";
                }
                if (entity.getWornBoots().suitType() == $SUIT_NAME) {
                    return "long_legs_boots";
                } else {
                    return "long_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 2) {
                if (entity.getWornChestplate().suitType() == $SUIT_NAME && entity.getWornBoots().suitType() == $SUIT_NAME) {
                    return "short_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == $SUIT_NAME) {
                    return "short_legs_torso";
                }
                if (entity.getWornBoots().suitType() == $SUIT_NAME) {
                    return "short_legs_boots";
                } else {
                    return "short_legs";
                }
            }
            if (entity.getData("skyhighheroes:dyn/tenma_clothes") == 3) {
                if (entity.getWornChestplate().suitType() == $SUIT_NAME && entity.getWornBoots().suitType() == $SUIT_NAME) {
                    return "normal_legs_torso_boots";
                }
                if (entity.getWornChestplate().suitType() == $SUIT_NAME) {
                    return "normal_legs_torso";
                }
                if (entity.getWornBoots().suitType() == $SUIT_NAME) {
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
    astro.renderCannon(entity, renderLayer);
    rockets.renderBoosters(entity, renderLayer, isFirstPersonArm);
}

var colorVar = 0xFFFFFF