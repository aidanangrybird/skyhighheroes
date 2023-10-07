var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
var tenma = implement("skyhighheroes:external/tenma");
function init(hero) {
  hero.setName("Liam Tenma");
  hero.setAliases("liam_tenma");
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A71Liam Tenma's Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.nbt().getBoolean("Dual") && item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 3 && item.displayName() == "\u00A71Liam Tenma's Katanas"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A71Liam Tenma's Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 3 && item.displayName() == "\u00A71Liam Tenma's Scythe"));
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A71Liam Tenma's Rifle},ench:[{id:34,lvl:4}]}", true, item => (item.getEnchantmentLevel(34) == 3 && item.displayName() == "\u00A71Liam Tenma's Rifle"));
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A71Liam Tenma's Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.nbt().getBoolean("Electromagnetic") && item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 3 && item.displayName() == "\u00A71Liam Tenma's Shield"));
  tenma.init(hero, "cd71352c-8cb2-448c-a69d-a310a905ce7b");
}