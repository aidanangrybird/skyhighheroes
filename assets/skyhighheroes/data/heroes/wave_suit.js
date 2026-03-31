var wave_suit = implement("skyhighheroes:external/wave_suit");
function init(hero) {
  hero.setAliases("wave_suit");
  hero.setName("AMAKEN");
  hero.setTier(1);
  hero.setChestplate("Wave Suit");
  hero.addPowers("skyhighheroes:wave_suit", "skyhighheroes:color_editing")

  hero.addKeyBind("TELEPORT", "Transmit", 2);
  hero.addKeyBind("INVISIBILITY", "Wave World", 4);
  hero.addKeyBind("INTANGIBILITY", "Become in Phase", 5);
  hero.addKeyBind("GRAVITY_MANIPULATION", "Change color (Sneak to change section)", 3);
  hero.addKeyBindFunc("UNLOCK_SUIT", (entity, manager) => wave_suit.unlockSuit(entity, manager), "Attempt suit unlocking", 1);
  hero.addKeyBindFunc("EDIT_COLORS", (entity, manager) => wave_suit.lockColors(entity, manager), "Toggle editing colors", 1);
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
      case "fiskheroes:intangibility":
        switch (modifier.id()) {
        case "not_absolute":
          return entity.getPunchTimer() > 0;
        case "absolute":
          return entity.getPunchTimer() == 0;
        default:
          return false;
      };
      case "fiskheroes:teleportation":
        return true;
      case "fiskheroes:invisibility":
        return true;
      case "fiskheroes:controlled_flight":
        return true;
      case "fiskheroes:gravity_manipulation":
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
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "TELEPORT":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "INTANGIBILITY":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "GRAVITY_MANIPULATION":
        return entity.getData("skyhighheroes:dyn/wave_suit_editing");
      case "EDIT_COLORS":
        return !entity.isSneaking();
      case "UNLOCK_SUIT":
        return entity.isSneaking();
      case "COPY_COLORS":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getHeldItem().suitType() == "skyhighheroes:wave_suit" && !entity.getHeldItem().nbt().getBoolean("locked");
      case "PASTE_COLORS":
        return !entity.getData("skyhighheroes:dyn/wave_suit_editing") && entity.getHeldItem().suitType() == "skyhighheroes:wave_suit" && !entity.getHeldItem().nbt().getBoolean("locked");
      default:
        return false;
    };
  });
  hero.setTickHandler((entity, manager) => {
    wave_suit.initWaveSuitNBT(entity, manager);
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