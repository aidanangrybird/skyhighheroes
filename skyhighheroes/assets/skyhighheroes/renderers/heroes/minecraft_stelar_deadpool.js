extend("skyhighheroes:minecraft_stelar");

loadTextures({
    "base": "skyhighheroes:minecraft/minecraft_stelar_deadpool",
    "lights": "skyhighheroes:minecraft/minecraft_stelar_deadpool_lights",
    "suit": "skyhighheroes:minecraft/minecraft_stelar_deadpool_suit.tx.json",
    "suit_lights": "skyhighheroes:minecraft/minecraft_stelar_deadpool_suit_lights.tx.json",
    "cannon_bottom": "skyhighheroes:minecraft/minecraft_stelar_deadpool_bottom_cannon",
    "cannon_left": "skyhighheroes:minecraft/minecraft_stelar_deadpool_left_cannon",
    "cannon_right": "skyhighheroes:minecraft/minecraft_stelar_deadpool_right_cannon",
    "cannon_top": "skyhighheroes:minecraft/minecraft_stelar_deadpool_top_cannon",
    "cannon_front": "skyhighheroes:minecraft/minecraft_stelar_deadpool_front_cannon",
    "shield": "skyhighheroes:minecraft/minecraft_stelar_deadpool_shield",
    "katana": "skyhighheroes:minecraft/minecraft_stelar_deadpool_katana",
    "scythe": "skyhighheroes:minecraft/minecraft_stelar_deadpool_scythe",
    "rifle": "skyhighheroes:minecraft/minecraft_stelar_deadpool_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}