var transerSystem = implement("skyhighheroes:external/transer_system");
var transerMessaging = implement("skyhighheroes:external/transer_messaging");
var transerGroupMessaging = implement("skyhighheroes:external/transer_group_messaging");
var transerBrotherBand = implement("skyhighheroes:external/transer_brotherband");
var transerContacts = implement("skyhighheroes:external/transer_contacts");
var transerScanner = implement("skyhighheroes:external/transer_scanner");
var transerWaypoints = implement("skyhighheroes:external/transer_waypoint");
var theFugitive = implement("skyhighheroes:external/the_fugitive");
var transerOS = transerSystem.initTranser([transerMessaging, transerGroupMessaging, transerBrotherBand, transerContacts, transerScanner, transerWaypoints, theFugitive], "icePegasus");
function init(hero) {
  hero.setAliases("pegasus_transer");
  hero.setName("Pegasus Magic");
  hero.setTier(1);
  hero.setChestplate("Transer");
  hero.setTierOverride(entity => 0);
  transerOS.keyBinds(hero);
  transerOS.profileWave(hero);
  hero.setAttributeProfile(entity => {
    return transerOS.getWaveProfile(entity);
  });
  hero.addPowers("skyhighheroes:transer_system");
  hero.setKeyBindEnabled((entity, keyBind) => transerSystem.setKeyBind(entity, keyBind));
  hero.setTickHandler((entity, manager) => {
    transerOS.waveHandler(entity, hero);
    transerOS.transerHandler(entity, manager);
  });
};