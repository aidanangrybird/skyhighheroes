/**
 * @param {hero} hero - This is required or it will not work
 * @param {string} tranformed - Transformed name
 * @param {string} color - Color to set chat stuff to
 * @param {map} cards - Battle card names
 **/
function initCustomCards(tranformed, color, cards) {/* 
  hero.addKeyBindFunc("BATTLE_CARD_0", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    return true;
  }, "Return To " + cards[0], 2);
  hero.addKeyBindFunc("BATTLE_CARD_1", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + tranformed + "\u00A7r> Battle Card Predation! " + color + cards[1] +"\u00A7r!");
    };
    return true;
  }, "Battle Card! " + cards[1] + "!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_2", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + tranformed + "\u00A7r> Battle Card Predation! " + color + cards[2] + "\u00A7r!");
    };
    return true;
  }, "Battle Card! " + cards[2] + "!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_3", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + tranformed + "\u00A7r> Battle Card Predation! " + color + cards[3] + "\u00A7r!");
    };
    return true;
  }, "Battle Card! " + cards[3] + "!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_4", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + tranformed + "\u00A7r> Battle Card Predation! " + color + cards[4] + "\u00A7r!");
    };
    return true;
  }, "Battle Card! " + cards[4] + "!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_5", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + tranformed + "\u00A7r> Battle Card Predation! " + color + cards[5] + "\u00A7r!");
    };
    return true;
  }, "Battle Card! " + cards[5] + "!", 2);
  hero.addKeyBindFunc("BATTLE_CARD_6", (player, manager) => {
    manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
    if (PackLoader.getSide() == "CLIENT") {
      PackLoader.printChat("\u00A7r<" + color + tranformed + "\u00A7r> Battle Card Predation! " + color + cards[6] + "\u00A7r!");
    };
    return true;
  }, "Battle Card! " + cards[6] + "!", 2); */


  return obj = {
    tickHandler: (entity, manager) => {

    },
    keyBinds: (hero) => {
      hero.addKeyBind("TELEPORT", "Transmit", 1);
      hero.addKeyBind("INVISIBILITY", "Become Wave", 3);
      hero.addKeyBind("AIM", "Aim Vortex Buster", 4);
      hero.addKeyBind("RIFLE_AIM", "Aim Rifle", 4);
      hero.addKeyBind("ENERGY_PROJECTION", "Derecho", 4);
      hero.addKeyBind("SHIELD_THROW", "Throw Shield", 4);
      hero.addKeyBind("CHARGE_ENERGY", "Charge Energy", 4);
      hero.addKeyBindFunc("DESYNCHRONIZE_WAVES", (player, manager) => {
        manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
        manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/predation", false);
        manager.setData(player, "skyhighheroes:dyn/jet_streak_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/jet_streak", false);
        if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 1) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        };
        if (player.getData("skyhighheroes:dyn/visualizer_toggle") == 0) {
          manager.setData(player, "fiskheroes:penetrate_martian_invis", false);
        };
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBindFunc("SYNCHRONIZE_WAVES", (player, manager) => {
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("<Aidan Stelar> EM Wave Change! \u00A76Aidan Stelar\u00A7r, On-Air!");
        };
        manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
        manager.setData(player, "skyhighheroes:dyn/body_temperature", 0.0);
        manager.setData(player, "skyhighheroes:dyn/predation_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/predation", false);
        manager.setData(player, "skyhighheroes:dyn/jet_streak_timer", 0);
        manager.setData(player, "skyhighheroes:dyn/jet_streak", false);
        manager.setData(player, "fiskheroes:penetrate_martian_invis", true);
        return true;
      }, "EM Wave Change!", 5);
      hero.addKeyBind("WAVE_CHANGE", "EM Wave Change!", 5);
      hero.addKeyBind("JET_STREAK_TOGGLE", "Toggle Vortex Buster", 5);
      hero.addKeyBind("INTANGIBILITY", "Become in Phase", 5);
      hero.addKeyBindFunc("COLD_TEMPERATURE", (player, manager) => {
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Jet-Streak\u00A7r> You are too cold for us to EM Wave Change.");
        };
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too cold", 5);
      hero.addKeyBindFunc("HOT_TEMPERATURE", (player, manager) => {
        if (PackLoader.getSide() == "CLIENT") {
          PackLoader.printChat("\u00A7r<\u00A76Jet-Streak\u00A7r> You are too hot for us to EM Wave Change.");
        };
        return true;
      }, "\u00A7mEM Wave Change!\u00A7r You are too hot", 5);
      hero.addKeyBindFunc("BATTLE_CARD_RESET_PREDATION", (player, manager) => resetBattleCard(player, manager), "Return To " + cards[0], 2);
      hero.addKeyBind("PREDATION", "Battle Card Predation", 2);
      hero.addKeyBindFunc("CYCLE_UP_CARD", (player, manager) => cycleUpCard(player, manager, 6), "Next Battle Card", 1);
      hero.addKeyBindFunc("CYCLE_DOWN_CARD", (player, manager) => cycleDownCard(player, manager, 6), "Previous Battle Card", 3);
      hero.addKeyBindFunc("BATTLE_CARD_RESET", (player, manager) => resetBattleCard(player, manager), "Return To " + cards[0], 5);

      cards.forEach(card => {
        if (card.hasOwnProperty("")) {
          hero.addKeyBindFunc("BATTLE_CARD_" + card.number, (player, manager) => {
            manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
            return true;
          }, "Return To " + card.cardName, 2);
          hero.addKeyBind(card.keyBind+"_TOGGLE", "Toggle " + card.cardName, 5);
        }
        if (typeof card.headName === "undefined") {
          hero.addKeyBindFunc("BATTLE_CARD_" + card.number, (player, manager) => {
            manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
            if (PackLoader.getSide() == "CLIENT") {
              PackLoader.printChat("\u00A7r<" + color + tranformed + "\u00A7r> Battle Card Predation! " + color + card.headName +"\u00A7r!");
            };
            return true;
          }, "Battle Card! " + card.cardName + "!", 2);
        }
        if (typeof card.keyBind !== "undefined") {
          hero.addKeyBind(card.cardName, card.keyBind, 5);
        }
      });
    },
    setKeyBind: (entity, keyBind) => {

    },
    setModifier: (entity, modifier) => {

    }
  }
}


function cycleUpCard(player, manager, battleCardAmount) {
  if (typeof battleCardAmount === "undefined") {
    battleCardAmount = 3;
  };
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") + 1);
  if (player.getData("skyhighheroes:dyn/selected_battle_card") > battleCardAmount) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
  };
  return true;
};

function cycleDownCard(player, manager, battleCardAmount) {
  if (typeof battleCardAmount === "undefined") {
    battleCardAmount = 3;
  };
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", player.getData("skyhighheroes:dyn/selected_battle_card") - 1);
  if (player.getData("skyhighheroes:dyn/selected_battle_card") < 0) {
    manager.setData(player, "skyhighheroes:dyn/selected_battle_card", battleCardAmount);
  };
  return true;
};

function activateBattleCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/battle_card", player.getData("skyhighheroes:dyn/selected_battle_card"));
  if (player.getData("skyhighheroes:dyn/battle_card") == 1 && PackLoader.getSide() == "SERVER") {
    PackLoader.printChat("Battle Card Predation! Barrier!");
  }
  if (player.getData("skyhighheroes:dyn/battle_card") == 2 && PackLoader.getSide() == "SERVER") {
    PackLoader.printChat("Battle Card Predation! Sword!");
  }
  if (player.getData("skyhighheroes:dyn/battle_card") == 3 && PackLoader.getSide() == "SERVER") {
    PackLoader.printChat("Battle Card Predation! Shurikens!");
  }
  return true;
};

function resetBattleCard(player, manager) {
  manager.setData(player, "skyhighheroes:dyn/selected_battle_card", 0);
  manager.setData(player, "skyhighheroes:dyn/battle_card", 0);
  return true;
};

var battle_cards = [
  {cardName: "Vortex Buster", headName: "Jet Streak", keyBind: "JET_STREAK"},
  {cardName: "Wind Barrier", modifier: "fiskheroes:shield"},
  {cardName: "Lightning Sword", modifier: "fiskheroes:blade"},
  {cardName: "Lightning Shurkiens", modifier: "fiskheroes:utility_belt"},
  {cardName: "Lightning", modifier: "fiskheroes:lightning_cast"},
  {cardName: "Derecho", keyBind: "ENERGY_PROJECTION", modifier: "fiskheroes:energy_projection"},
  {cardName: "Hail Cannon", keyBind: "CHARGE_ICE", modifier: "fiskheroes:icicles"}
]