var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
var tenma = implement("skyhighheroes:external/tenma");
function init(hero) {
  hero.setName("Slayer Tenma");
  hero.setAliases("slayer_tenma");
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A7eSlayer Tenma's Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Dual"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A7eSlayer Tenma's Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A7eSlayer Tenma's Rifle},ench:[{id:34,lvl:5}]}", true);
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A7eSlayer Tenma's Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => item.nbt().getBoolean("Electromagnetic"));
  tenma.init(hero, "85f45fed-d7f1-4966-bfad-915c3dba0153");
}