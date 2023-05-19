extend("skyhighheroes:liam_stelar");

loadTextures({
    "base": "skyhighheroes:liam/liam_stelar_iron_man_base",
    "lights": "skyhighheroes:liam/liam_stelar_iron_man_lights",
    "base_tx": "skyhighheroes:liam/liam_stelar_iron_man_base.tx.json",
    "lights_tx": "skyhighheroes:liam/liam_stelar_iron_man_lights.tx.json",
    "wave_change_lights": "skyhighheroes:liam/liam_stelar_iron_man_wave_change_lights.tx.json",
    "omega_xis_bottom": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_bottom",
    "omega_xis_left": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_left",
    "omega_xis_right": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_right",
    "omega_xis_top": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_top",
    "omega_xis_front": "skyhighheroes:liam/liam_stelar_iron_man_omega_xis_front",
    "shield": "skyhighheroes:liam/liam_stelar_iron_man_shield",
    "katana": "skyhighheroes:liam/liam_stelar_iron_man_katana",
    "scythe": "skyhighheroes:liam/liam_stelar_iron_man_scythe",
    "rifle": "skyhighheroes:liam/liam_stelar_iron_man_rifle"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "leo_transer");
}