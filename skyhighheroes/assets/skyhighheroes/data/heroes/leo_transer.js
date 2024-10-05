var transerSystem = implement("skyhighheroes:external/transer_system");
var transerMessaging = implement("skyhighheroes:external/transer_messaging");
var transerBrotherBand = implement("skyhighheroes:external/transer_brotherband");
var transerContacts = implement("skyhighheroes:external/transer_contacts");
var transerOS = transerSystem.initTranser([transerMessaging, transerBrotherBand, transerContacts]);
function init(hero) {
  hero.setAliases("leo_transer");
  hero.setName("Leo Kindgom");
  hero.setTier(1);
  hero.setChestplate("Transer");
  hero.setTierOverride(entity => 0);
  transerOS.keyBinds(hero);
  hero.addPowers("skyhighheroes:transer_system");
  hero.setTickHandler((entity, manager) => {
    transerOS.tickHandler(entity, manager);
  });
  hero.setKeyBindEnabled((entity, keyBind) => transerSystem.setKeyBind(entity, keyBind));
};