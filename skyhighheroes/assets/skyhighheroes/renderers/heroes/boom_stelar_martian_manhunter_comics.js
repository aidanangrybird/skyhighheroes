extend("skyhighheroes:boom_stelar");

loadTextures({
    "base": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics"),
    "lights": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics_lights"),
    "suit": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics_suit.tx.json"),
    "suit_lights": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics_suit_lights.tx.json"),
    "visualizer_up": ("skyhighheroes:boom/boom_stelar_up_transer"),
    "visualizer_down": ("skyhighheroes:boom/boom_stelar_down_transer"),
    "visualizer_up_short": ("skyhighheroes:boom/boom_stelar_up_short"),
    "visualizer_down_short": ("skyhighheroes:boom/boom_stelar_down_short"),
    "visualizer_up_swimsuit": ("skyhighheroes:boom/boom_stelar_up_swimsuit"),
    "visualizer_down_swimsuit": ("skyhighheroes:boom/boom_stelar_down_swimsuit"),
    "visualizer_up_normal": ("skyhighheroes:boom/boom_stelar_up_normal"),
    "visualizer_down_normal": ("skyhighheroes:boom/boom_stelar_down_normal"),
    "visualizer_up_lights": ("skyhighheroes:boom/boom_stelar_up_lights"),
    "visualizer_down_lights": ("skyhighheroes:boom/boom_stelar_down_lights"),
    "cannon_bottom": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics_bottom_cannon"),
    "cannon_left": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics_left_cannon"),
    "cannon_right": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics_right_cannon"),
    "cannon_top": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics_top_cannon"),
    "cannon_front": ("skyhighheroes:boom/boom_stelar_martian_manhunter_comics_front_cannon"),
    "cannon_left_lights": ("skyhighheroes:boom/omega_xis_boom_stelar_left_eyes"),
    "cannon_right_lights": ("skyhighheroes:boom/omega_xis_boom_stelar_right_eyes"),
    "transertx": ("skyhighheroes:boom/boom_stelar_transer.tx.json"),
    "shorttx": ("skyhighheroes:boom/boom_stelar_short.tx.json"),
    "swimsuittx": ("skyhighheroes:boom/boom_stelar_swimsuit.tx.json"),
    "normaltx": ("skyhighheroes:boom/boom_stelar_normal.tx.json"),
    "transer": ("skyhighheroes:stelar_transer_pegasus"),
    "transer_lights": ("skyhighheroes:boom/boom_stelar_transer_lights"),
    "blade": ("skyhighheroes:boom/boom_stelar_blade"),
    "hair": ("skyhighheroes:boom/boom_stelar_hair"),
    "shield": ("skyhighheroes:boom/boom_stelar_shield"),
    "katana": ("skyhighheroes:boom/boom_stelar_katana"),
    "katana_lights": ("skyhighheroes:boom/boom_stelar_katana_lights"),
    "scythe": ("skyhighheroes:boom/boom_stelar_scythe"),
    "scythe_lights": ("skyhighheroes:boom/boom_stelar_scythe_lights")
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("pegasus_transer");
}