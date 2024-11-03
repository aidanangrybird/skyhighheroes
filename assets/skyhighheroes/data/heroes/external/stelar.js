function visualizerToggle(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/visualizer_toggle", !player.getData("skyhighheroes:dyn/visualizer_toggle"));
  manager.setData(player, "fiskheroes:penetrate_martian_invis", player.getData("skyhighheroes:dyn/visualizer_toggle"));
  return true;
};

function cycleClothes(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/stelar_clothes", player.getData("skyhighheroes:dyn/stelar_clothes") + 1);
  if (player.getData("skyhighheroes:dyn/stelar_clothes") > 3) {
    manager.setData(player, "skyhighheroes:dyn/stelar_clothes", 0);
  };
  return true;
};

function hoodToggle(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/hood_toggle", !player.getData("skyhighheroes:dyn/hood_toggle"));
  return true;
};

function toolSwitchEnchant(player, manager) {
  //Silk Touch
  if (player.getData("skyhighheroes:dyn/tool_enchant") == 0) {
    manager.setInteger(player.getHeldItem().nbt().getTagList("ench").getCompoundTag(1), "id", 33);
    manager.setInteger(player.getHeldItem().nbt().getTagList("ench").getCompoundTag(1), "lvl", 1);
  };
  //Fortune
  if (player.getData("skyhighheroes:dyn/tool_enchant") == 1) {
    manager.setInteger(player.getHeldItem().nbt().getTagList("ench").getCompoundTag(1), "id", 35);
    manager.setInteger(player.getHeldItem().nbt().getTagList("ench").getCompoundTag(1), "lvl", 4);
  };
  return true;
};

function tempProfiles() {
  var obj = [
    { clothingType: 0, biome: "Cold Taiga", tempChangeTicks: -5000.0 },
    { clothingType: 0, biome: "Frozen", tempChangeTicks: -1000.0 },
    { clothingType: 0, biome: "Ice", tempChangeTicks: -1000.0 },
    { clothingType: 0, biome: "Beach", tempChangeTicks: 10000.0 },
    { clothingType: 0, biome: "Desert", tempChangeTicks: 400.0 },
    { clothingType: 0, biome: "Hell", tempChangeTicks: 100.0 },
    { clothingType: 0, biome: "Jungle", tempChangeTicks: 500.0 },
    { clothingType: 0, biome: "Mesa", tempChangeTicks: 1000.0 },
    { clothingType: 0, biome: "Savanna", tempChangeTicks: 2000.0 },
    { clothingType: 0, biome: "Swampland", tempChangeTicks: 1000.0 },
    { clothingType: 1, biome: "Frozen", tempChangeTicks: -1000.0 },
    { clothingType: 1, biome: "Ice", tempChangeTicks: -1000.0 },
    { clothingType: 1, biome: "Cold Taiga", tempChangeTicks: -2000.0 },
    { clothingType: 1, biome: "Cold Beach", tempChangeTicks: -3000.0 },
    { clothingType: 1, biome: "Extreme", tempChangeTicks: -4000.0 },
    { clothingType: 1, biome: "Mega", tempChangeTicks: -5000.0 },
    { clothingType: 1, biome: "Stone Beach", tempChangeTicks: -3000.0 },
    { clothingType: 2, biome: "Ice", tempChangeTicks: -300.0 },
    { clothingType: 2, biome: "Frozen", tempChangeTicks: -300.0 },
    { clothingType: 2, biome: "Cold Taiga", tempChangeTicks: -500.0 },
    { clothingType: 2, biome: "Cold Beach", tempChangeTicks: -1000.0 },
    { clothingType: 2, biome: "Extreme", tempChangeTicks: -1000.0 },
    { clothingType: 2, biome: "Mega", tempChangeTicks: -1000.0 },
    { clothingType: 2, biome: "Stone", tempChangeTicks: -1000.0 },
    { clothingType: 2, biome: "Birch", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Flower", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Forest", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Mesa", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Plains", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Roofed", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Sunflower", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Taiga", tempChangeTicks: -2500.0 },
    { clothingType: 3, biome: "River", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Sunflower", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Stone", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Roofed", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Plains", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Forest", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Flower", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Birch", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Mushroom", tempChangeTicks: 2000.0 },
    { clothingType: 3, biome: "Savanna", tempChangeTicks: 1000.0 },
    { clothingType: 3, biome: "Beach", tempChangeTicks: 800.0 },
    { clothingType: 3, biome: "Mesa", tempChangeTicks: 500.0 },
    { clothingType: 3, biome: "Jungle", tempChangeTicks: 160.0 },
    { clothingType: 3, biome: "Swampland", tempChangeTicks: 160.0 },
    { clothingType: 3, biome: "Hell", tempChangeTicks: 80.0 },
    { clothingType: 3, biome: "Desert", tempChangeTicks: 100.0 },
    { clothingType: 4, biome: "Cold Taiga", tempChangeTicks: -5000.0 },
    { clothingType: 4, biome: "Frozen", tempChangeTicks: -1000.0 },
    { clothingType: 4, biome: "Ice", tempChangeTicks: -1000.0 },
    { clothingType: 4, biome: "Beach", tempChangeTicks: 10000.0 },
    { clothingType: 4, biome: "Desert", tempChangeTicks: 400.0 },
    { clothingType: 4, biome: "Hell", tempChangeTicks: 100.0 },
    { clothingType: 4, biome: "Jungle", tempChangeTicks: 500.0 },
    { clothingType: 4, biome: "Mesa", tempChangeTicks: 1000.0 },
    { clothingType: 4, biome: "Savanna", tempChangeTicks: 2000.0 },
    { clothingType: 4, biome: "Swampland", tempChangeTicks: 1000.0 }
  ];
  return obj
};