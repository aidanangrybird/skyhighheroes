extend("skyhighheroes:chase_stelar");

loadTextures({
    "base": "skyhighheroes:chase/chase_stelar_iron_man",
    "lights": "skyhighheroes:chase/chase_stelar_iron_man_lights",
    "suit": "skyhighheroes:chase/chase_stelar_iron_man_suit.tx.json",
    "suit_lights": "skyhighheroes:chase/chase_stelar_iron_man_suit_lights.tx.json",
    "visualizer_up": "skyhighheroes:chase/chase_stelar_up_transer",
    "visualizer_down": "skyhighheroes:chase/chase_stelar_down_transer",
    "visualizer_up_short": "skyhighheroes:chase/chase_stelar_up_short",
    "visualizer_down_short": "skyhighheroes:chase/chase_stelar_down_short",
    "visualizer_up_swimsuit": "skyhighheroes:chase/chase_stelar_up_swimsuit",
    "visualizer_down_swimsuit": "skyhighheroes:chase/chase_stelar_down_swimsuit",
    "visualizer_up_normal": "skyhighheroes:chase/chase_stelar_up_normal",
    "visualizer_down_normal": "skyhighheroes:chase/chase_stelar_down_normal",
    "visualizer_up_lights": "skyhighheroes:chase/chase_stelar_up_lights",
    "visualizer_down_lights": "skyhighheroes:chase/chase_stelar_down_lights",
    "cannon_bottom": "skyhighheroes:chase/chase_stelar_iron_man_bottom_cannon",
    "cannon_left": "skyhighheroes:chase/chase_stelar_iron_man_left_cannon",
    "cannon_right": "skyhighheroes:chase/chase_stelar_iron_man_right_cannon",
    "cannon_top": "skyhighheroes:chase/chase_stelar_iron_man_top_cannon",
    "cannon_front": "skyhighheroes:chase/chase_stelar_iron_man_front_cannon",
    "cannon_left_lights": "skyhighheroes:chase/omega_xis_chase_stelar_left_eyes",
    "cannon_right_lights": "skyhighheroes:chase/omega_xis_chase_stelar_right_eyes",
    "transertx": "skyhighheroes:chase/chase_stelar_transer.tx.json",
    "shorttx": "skyhighheroes:chase/chase_stelar_short.tx.json",
    "swimsuittx": "skyhighheroes:chase/chase_stelar_swimsuit.tx.json",
    "normaltx": "skyhighheroes:chase/chase_stelar_normal.tx.json",
    "transer": "skyhighheroes:stelar_transer_pegasus",
    "transer_lights": "skyhighheroes:chase/chase_stelar_transer_lights",
    "blade": "skyhighheroes:chase/chase_stelar_blade",
    "hair": "skyhighheroes:chase/chase_stelar_hair",
    "shield": "skyhighheroes:chase/chase_stelar_shield",
    "katana": "skyhighheroes:chase/chase_stelar_katana",
    "katana_lights": "skyhighheroes:chase/chase_stelar_katana_lights",
    "scythe": "skyhighheroes:chase/chase_stelar_scythe",
    "scythe_lights": "skyhighheroes:chase/chase_stelar_scythe_lights",
    "rifle": "skyhighheroes:chase/chase_stelar_rifle",
    "rifle_lights": "skyhighheroes:chase/chase_stelar_rifle_lights"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons(null, "leo_transer", null, null);
}