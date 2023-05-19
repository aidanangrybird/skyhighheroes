extend("skyhighheroes:fish_stelar");

loadTextures({
    "base": "skyhighheroes:fish/fish_stelar_spider_man_base",
    "lights": "skyhighheroes:fish/fish_stelar_spider_man_lights",
    "base_tx": "skyhighheroes:fish/fish_stelar_spider_man_base.tx.json",
    "wave_change_lights": "skyhighheroes:fish/fish_stelar_spider_man_wave_change_lights.tx.json",
    "omega_xis_bottom": "skyhighheroes:fish/fish_stelar_spider_man_omega_xis_bottom",
    "omega_xis_left": "skyhighheroes:fish/fish_stelar_spider_man_omega_xis_left",
    "omega_xis_right": "skyhighheroes:fish/fish_stelar_spider_man_omega_xis_right",
    "omega_xis_top": "skyhighheroes:fish/fish_stelar_spider_man_omega_xis_top",
    "omega_xis_front": "skyhighheroes:fish/fish_stelar_spider_man_omega_xis_front",
    "shield": "skyhighheroes:fish/fish_stelar_spider_man_shield",
    "katana": "skyhighheroes:fish/fish_stelar_spider_man_katana",
    "scythe": "skyhighheroes:fish/fish_stelar_spider_man_scythe",
    "rifle": "skyhighheroes:fish/fish_stelar_spider_man_rifle"
});

function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcon("CHESTPLATE", "dragon_transer");
}