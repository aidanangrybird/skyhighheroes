var transerChat = implement("skyhighheroes:external/transer_chat");
function init(hero) {
  hero.setAliases("dragon_transer");
  hero.setName("Dragon Sky");
  hero.setTier(1);
  hero.setChestplate("Transer");
  hero.setTierOverride(entity => 0);
  transerChat.keyBinds(hero);
  hero.addPowers("skyhighheroes:transer_chat");
  hero.setKeyBindEnabled((entity, keyBind) => transerChat.setKeyBind(entity, keyBind));
  hero.setTickHandler((entity, manager) => {
    transerChat.tickHandler(entity, manager);
  });
};