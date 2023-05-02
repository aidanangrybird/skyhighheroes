extend("skyhighheroes:tysen_stelar");

loadTextures({
    "base": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_base",
    "lights": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_lights",
    "base_tx": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_base.tx.json",
    "lights_tx": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_lights.tx.json",
    "wave_change_lights": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_wave_change_lights.tx.json",
    "cannon_bottom": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_bottom_cannon",
    "cannon_left": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_left_cannon",
    "cannon_right": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_right_cannon",
    "cannon_top": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_top_cannon",
    "cannon_front": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_front_cannon",
    "shield": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_shield",
    "katana": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_katana",
    "scythe": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_scythe",
    "rifle": "skyhighheroes:tysen/tysen_stelar_martian_manhunter_rifle",
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}