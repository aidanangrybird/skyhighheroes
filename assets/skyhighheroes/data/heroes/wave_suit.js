var wave_suit = implement("skyhighheroes:external/wave_suit");
function init(hero) {
  hero.setAliases("wave_suit");
  hero.setName("AMAKEN");
  hero.setTier(1);
  hero.setChestplate("Wave Suit");
  hero.addPowers("skyhighheroes:wave_suit", "skyhighheroes:color_editing")

  hero.addKeyBind("INVISIBILITY", "Wave World", 4);
  hero.addKeyBind("GRAVITY_MANIPULATION", "Change color (Sneak to change section)", 3);
  hero.addKeyBind("VISOR_COLOR", "Editing: Visor", 5);
  hero.addKeyBind("ARMOR_COLOR", "Editing: Armor", 5);
  hero.addKeyBind("ARMOR_ACCENT_COLOR", "Editing: Armor Accent", 5);
  hero.addKeyBind("SUIT_COLOR", "Editing: Suit", 5);
  hero.addKeyBind("ACCENT_COLOR", "Editing: Accent", 5);
  hero.addKeyBindFunc("LOCK_COLORS", (entity, manager) => wave_suit.lockColors(entity, manager), "Unlock/Lock colors", 1);
  hero.addKeyBindFunc("COLOR_CHECK", (entity, manager) => wave_suit.currentColors(entity, manager), "Show colors", 2);
  hero.addKeyBindFunc("COPY_COLORS", (entity, manager) => wave_suit.copyColors(entity, manager), "Copy colors to suit", 1);
  hero.addKeyBindFunc("PASTE_COLORS", (entity, manager) => wave_suit.pasteColors(entity, manager), "Paste colors to suit", 5);
  
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
      case "fiskheroes:gravity_manipulation":
        return true;
      case "fiskheroes:fire_immunity":
        return entity.getData("fiskheroes:invisible");
      case "fiskheroes:damage_immunity":
        return entity.getData("fiskheroes:invisible");
      default:
        return false;
    };
  });
  hero.setKeyBindEnabled((entity, keyBind) => {
    switch (keyBind) {
      case "INVISIBILITY":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "GRAVITY_MANIPULATION":
        return entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "VISOR_COLOR":
        return entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 0;
      case "ARMOR_COLOR":
        return entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 1;
      case "ARMOR_ACCENT_COLOR":
        return entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 2;
      case "SUIT_COLOR":
        return entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 3;
      case "ACCENT_COLOR":
        return entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 4;
      case "LOCK_COLORS":
        return true;
      case "COLOR_CHECK":
        return entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "COPY_COLORS":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getHeldItem().suitType() == "skyhighheroes:wave_suit";
      case "PASTE_COLORS":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getHeldItem().suitType() == "skyhighheroes:wave_suit";
      default:
        return false;
    };
  });
  hero.setTickHandler((entity, manager) => {
    manager.setData(entity, "fiskheroes:penetrate_martian_invis", true);
    if (entity.getData("fiskheroes:gravity_manip")) {
      if (entity.getData("skyhighheroes:dyn/reset_gravity_manip")) {
        manager.setDataWithNotify(entity, "fiskheroes:gravity_amount", 0);
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/reset_gravity_manip", false);
      };
      var gravity_amount = entity.getData("fiskheroes:gravity_amount");
      if (gravity_amount > 0) {
        if (entity.isSneaking()) {
          wave_suit.cycleUpEditingMode(entity, manager);
        } else {
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 0) {
            wave_suit.cycleUpVisor(entity, manager);
          };
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 1) {
            wave_suit.cycleUpArmor(entity, manager);
          };
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 2) {
            wave_suit.cycleUpArmorAccent(entity, manager);
          };
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 3) {
            wave_suit.cycleUpSuit(entity, manager);
          };
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 4) {
            wave_suit.cycleUpAccent(entity, manager);
          };
        };
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/reset_gravity_manip", true);
      };
      if (gravity_amount < 0) {
        if (entity.isSneaking()) {
          wave_suit.cycleDownEditingMode(entity, manager);
        } else {
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 0) {
            wave_suit.cycleDownVisor(entity, manager);
          };
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 1) {
            wave_suit.cycleDownArmor(entity, manager);
          };
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 2) {
            wave_suit.cycleDownArmorAccent(entity, manager);
          };
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 3) {
            wave_suit.cycleDownSuit(entity, manager);
          };
          if (entity.getData("skyhighheroes:dyn/wave_suit_editing_mode") == 4) {
            wave_suit.cycleDownAccent(entity, manager);
          };
        };
        manager.setDataWithNotify(entity, "skyhighheroes:dyn/reset_gravity_manip", true);
      };
    };
  });
};