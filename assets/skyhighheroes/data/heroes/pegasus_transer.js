var transerSystem = implement("skyhighheroes:external/transer_system");
var messaging = implement("skyhighheroes:external/messaging");
var groupMessaging = implement("skyhighheroes:external/group_messaging");
var transerBrotherBand = implement("skyhighheroes:external/transer_brotherband");
var contacts = implement("skyhighheroes:external/contacts");
var scanner = implement("skyhighheroes:external/scanner");
var waypoints = implement("skyhighheroes:external/waypoint");
var transerOS = transerSystem.initTranser([messaging,
  groupMessaging,
  transerBrotherBand,
  contacts,
  scanner,
  waypoints], "icePegasus", "pegasus");
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