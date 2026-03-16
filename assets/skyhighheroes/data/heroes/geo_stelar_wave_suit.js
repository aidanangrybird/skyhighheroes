function init(hero) {
  hero.setAliases("geo_stelar_wave_suit");
  hero.setName("Geo Stelar");
  hero.setTier(1);
  hero.setChestplate("Wave Suit");
  hero.addPowers("skyhighheroes:wave_suit")

  hero.addKeyBind("INVISIBILITY", "Wave World", 4);
  
  hero.setDefaultScale(1.0);
  hero.addDamageProfile("MAIN", {
    "types": {
      "ELEMENT_NONE": 1.0
    }
  });
  hero.setDamageProfile((entity) => {
    return "MAIN";
  });
  hero.setModifierEnabled((entity, modifier) => {
    switch (modifier.name()) {
      case "fiskheroes:invisibility":
        return true;
      case "fiskheroes:damage_immunity":
        return entity.getData("fiskheroes:invisible");
      case "fiskheroes:fire_immunity":
        return entity.getData("fiskheroes:invisible");
      case "fiskheroes:shape_shifting":
        return true;
      default:
        return false;
    };
  });
  hero.setKeyBindEnabled((entity, keyBind) => {
    switch (keyBind) {
      case "INVISIBILITY":
        return true;
      default:
        return false;
    };
  });
  hero.setTickHandler((entity, manager) => {
    manager.setData(entity, "fiskheroes:penetrate_martian_invis", true);
    manager.setData(entity, "fiskheroes:disguise", "Geo Stelar");
  });
};