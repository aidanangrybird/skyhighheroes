var transer = implement("skyhighheroes:external/transer_system");
var messaging = implement("skyhighheroes:external/messaging");
var groupMessaging = implement("skyhighheroes:external/group_messaging");
var transerBrotherBand = implement("skyhighheroes:external/transer_brotherband");
var groups = implement("skyhighheroes:external/groups");
var contacts = implement("skyhighheroes:external/contacts");
var scanner = implement("skyhighheroes:external/scanner");
var waypoints = implement("skyhighheroes:external/waypoint");
var transerOS = transer.initSystem([
  messaging,
  groupMessaging,
  transerBrotherBand,
  groups,
  contacts,
  scanner,
  waypoints
], "leoKingdom", "leo");
function init(hero) {
  hero.setAliases("leo_transer");
  hero.setName("Leo Kindgom");
  hero.setTier(1);
  hero.setChestplate("Transer");
  hero.setTierOverride(entity => 0);
  transerOS.keyBinds(hero);
  transerOS.profileWave(hero);
  hero.setAttributeProfile(entity => {
    return transerOS.getWaveProfile(entity);
  });
  hero.addPowers("skyhighheroes:transer_system");
  hero.setKeyBindEnabled((entity, keyBind) => transerOS.setKeyBind(entity, keyBind));
  hero.setTickHandler((entity, manager) => {
    transerOS.waveHandler(entity, hero);
    transerOS.systemHandler(entity, manager);
  });
};