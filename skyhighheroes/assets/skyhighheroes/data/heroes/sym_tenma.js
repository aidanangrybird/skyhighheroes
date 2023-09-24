var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
var tenma = implement("skyhighheroes:external/tenma");
function init(hero) {
  hero.setName("Sym Tenma");
  hero.setAliases("sym_tenma");
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A73Sym Tenma's Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.nbt().getBoolean("Dual") && item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A73Sym Tenma's Katanas"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A73Sym Tenma's Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A73Sym Tenma's Scythe"));
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A73Sym Tenma's Rifle},ench:[{id:34,lvl:5}]}", true, item => (item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A73Sym Tenma's Rifle"));
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A73Sym Tenma's Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:5}]}", true, item => (item.nbt().getBoolean("Electromagnetic") && item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 5 && item.displayName() == "\u00A73Sym Tenma's Shield"));
  tenma.init(hero, "340d3667-9ee9-49eb-b98b-e12c7534b577");
}