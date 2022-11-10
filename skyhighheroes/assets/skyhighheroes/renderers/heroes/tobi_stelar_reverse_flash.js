extend("skyhighheroes:tobi_stelar");

loadTextures({
    "base": "skyhighheroes:tobi/tobi_stelar_reverse_flash",
    "lights": "skyhighheroes:tobi/tobi_stelar_reverse_flash_lights",
    "suit": "skyhighheroes:tobi/tobi_stelar_reverse_flash_suit.tx.json",
    "suit_lights": "skyhighheroes:tobi/tobi_stelar_reverse_flash_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:tobi/tobi_stelar_up_transer",
    "visualizer_down": "skyhighheroes:tobi/tobi_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:tobi/tobi_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:tobi/tobi_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:tobi/tobi_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:tobi/tobi_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:tobi/tobi_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:tobi/tobi_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:tobi/tobi_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:tobi/tobi_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:tobi/tobi_stelar_reverse_flash_bottom_cannon",
    "cannon_left": "skyhighheroes:tobi/tobi_stelar_reverse_flash_left_cannon",
    "cannon_right": "skyhighheroes:tobi/tobi_stelar_reverse_flash_right_cannon",
    "cannon_top": "skyhighheroes:tobi/tobi_stelar_reverse_flash_top_cannon",
    "cannon_front": "skyhighheroes:tobi/tobi_stelar_reverse_flash_front_cannon",
    "cannon_left_lights": "skyhighheroes:tobi/omega_xis_tobi_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:tobi/omega_xis_tobi_stelar_right_eyes",
    "transertx": "skyhighheroes:tobi/tobi_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:tobi/tobi_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:tobi/tobi_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:tobi/tobi_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_pegasus",
    "transer_lights": "skyhighheroes:tobi/tobi_stelar_transer_lights",
    "blade": "skyhighheroes:tobi/tobi_stelar_blade",
    "hair": "skyhighheroes:tobi/tobi_stelar_hair",
    "shield": "skyhighheroes:tobi/tobi_stelar_shield",
    "katana": "skyhighheroes:tobi/tobi_stelar_katana",
    "katana_lights": "skyhighheroes:tobi/tobi_stelar_katana_lights",
    "scythe": "skyhighheroes:tobi/tobi_stelar_scythe",
    "scythe_lights": "skyhighheroes:tobi/tobi_stelar_scythe_lights",
    "rifle": "skyhighheroes:tobi/tobi_stelar_rifle",
    "rifle_lights": "skyhighheroes:tobi/tobi_stelar_rifle_lights"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "dragon_transer", null, null);
}