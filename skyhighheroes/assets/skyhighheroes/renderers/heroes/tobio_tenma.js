var rockets = implement("skyhighheroes:external/astro_rockets");
var astro = implement("skyhighheroes:external/astro");
var stuff = implement("skyhighheroes:external/stuff");

loadTextures({
    "lights" : "skyhighheroes:astro/tobio_tenma_lights",
    "lights_flying" : "skyhighheroes:astro/tobio_tenma_lights_flying",
    "lights_normal" : "skyhighheroes:astro/tobio_tenma_lights_normal",
    "lights_normal_flying" : "skyhighheroes:astro/tobio_tenma_lights_normal_flying",
    "base": "skyhighheroes:astro/tobio_tenma_base",
    "base_flying": "skyhighheroes:astro/tobio_tenma_base_flying",
    "long" : "skyhighheroes:astro/tobio_tenma_long",
    "long_flying" : "skyhighheroes:astro/tobio_tenma_long_flying",
    "short" : "skyhighheroes:astro/tobio_tenma_short",
    "short_flying" : "skyhighheroes:astro/tobio_tenma_short_flying",
    "normal" : "skyhighheroes:astro/tobio_tenma_normal",
    "normal_flying" : "skyhighheroes:astro/tobio_tenma_normal_flying",
    "cannon_lights_inner" : "skyhighheroes:astro/tobio_tenma_cannon_lights_inner",
    "cannon" : "skyhighheroes:astro/base_tenma_cannon",
    "cannon_back" : "skyhighheroes:astro/base_tenma_cannon_back",
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
        if (renderLayer == "CHESTPLATE" || renderLayer == "LEGGINGS" || renderLayer == "HELMET" || renderLayer == "BOOTS") {
        
        if (entity.isDisplayStand()) {
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
        if (entity.isDisplayStand()) {
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
    rockets.initBoosters(renderer, "skyhighheroes:normal_fire_layer1", "skyhighheroes:normal_fire_layer2");
    astro.initBeams(renderer, colorVar);
    stuff.bindSpeedTrail(renderer, "skyhighheroes:tobio_tenma_speed");
}

function initAnimations(renderer) {
    astro.initAstroAnimations(renderer);
    stuff.forcefieldAnimation(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
    astro.renderCannon(entity, renderLayer);
    rockets.render(entity, renderLayer, isFirstPersonArm);
}

var colorVar = 0xFFFFFF