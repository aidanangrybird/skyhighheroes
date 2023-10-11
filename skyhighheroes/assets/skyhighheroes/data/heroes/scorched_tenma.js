var DimensionalCoords = Java.type('com.fiskmods.heroes.common.DimensionalCoords');
var tenma = implement("skyhighheroes:external/tenma");
function init(hero) {
  hero.setName("\u00A7eScorched Tenma");
  hero.setAliases("scorched_tenma");
  hero.addPrimaryEquipment("fiskheroes:katana{Dual:1,display:{Name:\u00A7eScorched Tenma's Katanas},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.nbt().getBoolean("Dual") && item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 4 && item.displayName() == "\u00A7eScorched Tenma's Katanas"));
  hero.addPrimaryEquipment("fiskheroes:ruptures_scythe{display:{Name:\u00A7eScorched Tenma's Scythe},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 4 && item.displayName() == "\u00A7eScorched Tenma's Scythe"));
  hero.addPrimaryEquipment("fiskheroes:chronos_rifle{display:{Name:\u00A7eScorched Tenma's Rifle},ench:[{id:34,lvl:4}]}", true, item => (item.getEnchantmentLevel(34) == 4 && item.displayName() == "\u00A7eScorched Tenma's Rifle"));
  hero.addPrimaryEquipment("fiskheroes:captain_americas_shield{Electromagnetic:1,display:{Name:\u00A7eScorched Tenma's Shield},ench:[{id:16,lvl:5},{id:19,lvl:2},{id:20,lvl:2},{id:21,lvl:3},{id:34,lvl:4}]}", true, item => (item.nbt().getBoolean("Electromagnetic") && item.getEnchantmentLevel(16) == 5 && item.getEnchantmentLevel(19) == 2 && item.getEnchantmentLevel(20) == 2 && item.getEnchantmentLevel(21) == 3 && item.getEnchantmentLevel(34) == 4 && item.displayName() == "\u00A7eScorched Tenma's Shield"));
  tenma.init(hero, "5429d1b5-7828-4b04-a0b0-fc8b41ffac27");
}