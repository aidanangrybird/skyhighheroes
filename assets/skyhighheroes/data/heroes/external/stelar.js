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

function oldTempProfiles() {
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
    { clothingType: 2, biome: "Flower Forest", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Forest", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Mesa", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Plains", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Roofed", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Sunflower Plains", tempChangeTicks: -10000.0 },
    { clothingType: 2, biome: "Taiga", tempChangeTicks: -2500.0 },
    { clothingType: 3, biome: "River", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Sunflower Plains", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Stone", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Roofed", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Plains", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Forest", tempChangeTicks: 5000.0 },
    { clothingType: 3, biome: "Flower Forest", tempChangeTicks: 5000.0 },
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

function tempProfiles() {
  var obj = {
    "ids": ["base", "short", "swimsuit", "winter"],
    "base": {
      "Cold Taiga": -5000.0,
      "Cold Taiga M": -5000.0,
      "Cold Taiga Hills": -5000.0,
      "FrozenOcean": -1000.0,
      "FrozenRiver": -1000.0,
      "Ice Mountains": -1000.0,
      "Ice Plains": -1000.0,
      "Ice Plains Spikes": -1000.0,
      "Beach": 10000.0,
      "Desert": 400.0,
      "Desert M": 400.0,
      "DesertHills": 400.0,
      "Desert M": 400.0,
      "DesertHills": 400.0,
      "Hell": 100.0,
      "Jungle": 500.0,
      "Jungle M": 500.0,
      "JungleEdge": 500.0,
      "JungleEdge M": 500.0,
      "JungleHills": 500.0,
      "Mesa": 1000.0,
      "Mesa (Bryce)": 1000.0,
      "Mesa Plateau": 1000.0,
      "Mesa Plateau F": 1000.0,
      "Mesa Plateau F M": 1000.0,
      "Mesa Plateau M": 1000.0,
      "Savanna": 2000.0,
      "Savanna M": 2000.0,
      "Savanna Plateau": 2000.0,
      "Savanna Plateau M": 2000.0,
      "Swampland": 1000.0,
      "Swampland M": 1000.0
    },
    "short": {
      "FrozenOcean": -1000.0,
      "FrozenRiver": -1000.0,
      "Ice Mountains": -1000.0,
      "Ice Plains": -1000.0,
      "Ice Plains Spikes": -1000.0,
      "Cold Taiga": -2000.0,
      "Cold Taiga M": -2000.0,
      "Cold Taiga Hills": -2000.0,
      "Cold Beach": -3000.0,
      "Extreme Hills": -4000.0,
      "Extreme Hills Edge": -4000.0,
      "Extreme Hills M": -4000.0,
      "Extreme Hills+": -4000.0,
      "Extreme Hills+ M": -4000.0,
      "Mega Spruce Taiga": -5000.0,
      "Mega Taiga": -5000.0,
      "Mega Taiga Hills": -5000.0,
      "Stone Beach": -3000.0
    },
    "swimsuit": {
      "Ice Mountains": -300.0,
      "Ice Plains": -300.0,
      "Ice Plains Spikes": -300.0,
      "FrozenOcean": -300.0,
      "FrozenRiver": -300.0,
      "Cold Taiga": -500.0,
      "Cold Taiga M": -500.0,
      "Cold Taiga Hills": -500.0,
      "Cold Beach": -1000.0,
      "Extreme Hills": -1000.0,
      "Extreme Hills Edge": -1000.0,
      "Extreme Hills M": -1000.0,
      "Extreme Hills+": -1000.0,
      "Extreme Hills+ M": -1000.0,
      "Mega Spruce Taiga": -1000.0,
      "Mega Taiga": -1000.0,
      "Mega Taiga Hills": -1000.0,
      "Stone Beach": -1000.0,
      "Birch Forest": -10000.0,
      "Birch Forest Hills": -10000.0,
      "Birch Forest Hills M": -10000.0,
      "Birch Forest M": -10000.0,
      "Flower Forest": -10000.0,
      "Forest": -10000.0,
      "ForestHills": -10000.0,
      "Mesa": -10000.0,
      "Mesa (Bryce)": -10000.0,
      "Mesa Plateau": -10000.0,
      "Mesa Plateau F": -10000.0,
      "Mesa Plateau F M": -10000.0,
      "Mesa Plateau M": -10000.0,
      "Plains": -10000.0,
      "Roofed Forest": -10000.0,
      "Roofed Forest M": -10000.0,
      "Sunflower Plains": -10000.0
    },
    "winter": {
      "River": 5000.0,
      "Sunflower Plains": 5000.0,
      "Stone Beach": 5000.0,
      "Roofed Forest": 5000.0,
      "Roofed Forest M": 5000.0,
      "Plains": 5000.0,
      "Forest": 5000.0,
      "ForestHills": 5000.0,
      "Flower Forest": 5000.0,
      "Birch Forest": 5000.0,
      "Birch Forest Hills": 5000.0,
      "Birch Forest Hills M": 5000.0,
      "Birch Forest M": 5000.0,
      "MushroomIsland": 2000.0,
      "MushroomIslandShore": 2000.0,
      "Savanna": 1000.0,
      "Savanna M": 1000.0,
      "Savanna Plateau": 1000.0,
      "Savanna Plateau M": 1000.0,
      "Beach": 800.0,
      "Mesa": 500.0,
      "Mesa (Bryce)": 500.0,
      "Mesa Plateau": 500.0,
      "Mesa Plateau F": 500.0,
      "Mesa Plateau F M": 500.0,
      "Mesa Plateau M": 500.0,
      "Jungle": 160.0,
      "Jungle M": 160.0,
      "JungleEdge": 160.0,
      "JungleEdge M": 160.0,
      "JungleHills": 160.0,
      "Swampland": 160.0,
      "Swampland M": 160.0,
      "Hell": 80.0,
      "Desert": 100.0,
      "Desert M": 100.0,
      "DesertHills": 100.0
    }
  };
  return obj;
};