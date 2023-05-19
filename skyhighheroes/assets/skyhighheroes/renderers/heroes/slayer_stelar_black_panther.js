extend("skyhighheroes:slayer_stelar");

loadTextures({
    "base": "skyhighheroes:slayer/slayer_stelar_black_panther_base",
    "lights": "skyhighheroes:slayer/slayer_stelar_black_panther_lights",
    "base_tx": "skyhighheroes:slayer/slayer_stelar_black_panther_base.tx.json",
    "lights_tx": "skyhighheroes:slayer/slayer_stelar_black_panther_lights.tx.json",
    "wave_change_lights": "skyhighheroes:slayer/slayer_stelar_black_panther_wave_change_lights.tx.json",
    "omega_xis_bottom": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_bottom",
    "omega_xis_left": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_left",
    "omega_xis_right": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_right",
    "omega_xis_top": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_top",
    "omega_xis_front": "skyhighheroes:slayer/slayer_stelar_black_panther_omega_xis_front",
    "shield": "skyhighheroes:slayer/slayer_stelar_black_panther_shield",
    "katana": "skyhighheroes:slayer/slayer_stelar_black_panther_katana",
    "scythe": "skyhighheroes:slayer/slayer_stelar_black_panther_scythe",
    "rifle": "skyhighheroes:slayer/slayer_stelar_black_panther_rifle"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "pegasus_transer");
}