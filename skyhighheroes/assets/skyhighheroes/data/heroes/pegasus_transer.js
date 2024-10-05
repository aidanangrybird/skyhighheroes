var transerSystem = implement("skyhighheroes:external/transer_system");
var transerGroups = implement("skyhighheroes:external/transer_groups");
var transerBrotherBand = implement("skyhighheroes:external/transer_brotherband");
var transerContacts = implement("skyhighheroes:external/transer_contacts");
var transerBlocks = implement("skyhighheroes:external/transer_info");
var transerOS = transerSystem.initTranser([transerGroups, transerBrotherBand, transerContacts, transerBlocks]);
function init(hero) {
  hero.setAliases("pegasus_transer");
  hero.setName("Pegasus Magic");
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