var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
//var bodyTemp = implement("skyhighheroes:external/body_temperature");
var stelar = implement("skyhighheroes:external/stelar");
function init(hero) {
  hero.setTickHandler((entity, manager) => {
    stelar.tickHandler(entity, manager);
    //bodyTemp.change(entity, manager, "skyhighheroes:dyn/body_temperature", "skyhighheroes:dyn/stelar_clothes", 500, stelar.temperatureProfileMap());
  });
  hero.setName("Chase Stelar");
  hero.setAliases("chase_stelar");
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A72Chase Stelar's Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Dual"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A72Chase Stelar's Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A72Chase Stelar's Rifle},ench:[{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A72Chase Stelar's Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Electromagnetic"));
  stelar.init(hero, "4da600b8-582a-4fc3-ac2e-ada03d3e478c");
}