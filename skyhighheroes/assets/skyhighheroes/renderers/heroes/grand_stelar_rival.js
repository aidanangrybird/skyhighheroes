extend("skyhighheroes:grand_stelar");

loadTextures({
  "base": "skyhighheroes:grand/grand_stelar_rival_base",
  "lights": "skyhighheroes:grand/grand_stelar_rival_lights",
  "base_tx": "skyhighheroes:grand/grand_stelar_rival_base.tx.json",
  "lights_tx": "skyhighheroes:grand/grand_stelar_rival_lights.tx.json",
  "wave_change_lights": "skyhighheroes:grand/grand_stelar_rival_wave_change_lights.tx.json",
  "omega_xis_bottom": "skyhighheroes:grand/grand_stelar_rival_omega_xis_bottom",
  "omega_xis_left": "skyhighheroes:grand/grand_stelar_rival_omega_xis_left",
  "omega_xis_right": "skyhighheroes:grand/grand_stelar_rival_omega_xis_right",
  "omega_xis_top": "skyhighheroes:grand/grand_stelar_rival_omega_xis_top",
  "omega_xis_front": "skyhighheroes:grand/grand_stelar_rival_omega_xis_front",
  "shield": "skyhighheroes:grand/grand_stelar_rival_shield",
  "katana": "skyhighheroes:grand/grand_stelar_rival_katana",
  "scythe": "skyhighheroes:grand/grand_stelar_rival_scythe",
  "rifle": "skyhighheroes:grand/grand_stelar_rival_rifle"
});

function init(renderer) {
  parent.init(renderer);
  renderer.setItemIcon("CHESTPLATE", "leo_transer");
}