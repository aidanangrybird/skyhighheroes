var transerSystem = implement("skyhighheroes:external/transer_system");
var transerMessaging = implement("skyhighheroes:external/transer_messaging");
var transerBrotherBand = implement("skyhighheroes:external/transer_brotherband");
var transerContacts = implement("skyhighheroes:external/transer_contacts");
var transerScanner = implement("skyhighheroes:external/transer_scanner");
var crimson = implement("skyhighheroes:external/crimson");
var transerOS = transerSystem.initTranser([transerMessaging, transerBrotherBand, transerContacts, transerScanner, crimson]);
function init(hero) {
  hero.setAliases("dragon_transer");
  hero.setName("Dragon Sky");
  hero.setTier(1);
  hero.setChestplate("Transer");
  hero.setTierOverride(entity => 0);
  transerOS.keyBinds(hero);
  hero.addPowers("skyhighheroes:transer_system");
  hero.setKeyBindEnabled((entity, keyBind) => transerSystem.setKeyBind(entity, keyBind));
  hero.setTickHandler((entity, manager) => {
    transerOS.tickHandler(entity, manager);
  });
};