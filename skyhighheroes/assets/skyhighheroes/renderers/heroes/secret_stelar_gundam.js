extend("skyhighheroes:secret_stelar");

loadTextures({
    "base": "skyhighheroes:secret/secret_stelar_gundam",
    "lights": "skyhighheroes:secret/secret_stelar_gundam_lights",
    "suit": "skyhighheroes:secret/secret_stelar_gundam_suit.tx.json",
    "suit_lights": "skyhighheroes:secret/secret_stelar_gundam_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:secret/secret_stelar_gundam_bottom_cannon",
    "cannon_left": "skyhighheroes:secret/secret_stelar_gundam_left_cannon",
    "cannon_right": "skyhighheroes:secret/secret_stelar_gundam_right_cannon",
    "cannon_top": "skyhighheroes:secret/secret_stelar_gundam_top_cannon",
    "cannon_front": "skyhighheroes:secret/secret_stelar_gundam_front_cannon",
    "shield": "skyhighheroes:secret/secret_stelar_gundam_shield",
    "katana": "skyhighheroes:secret/secret_stelar_gundam_katana",
    "scythe": "skyhighheroes:secret/secret_stelar_gundam_scythe",
    "rifle": "skyhighheroes:secret/secret_stelar_gundam_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}