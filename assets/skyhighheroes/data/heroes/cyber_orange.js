var cybernetics = implement("skyhighheroes:external/cybernetics");
var settings = implement("skyhighheroes:external/cybernetic_settings");
var messaging = implement("skyhighheroes:external/messaging");
var groupMessaging = implement("skyhighheroes:external/group_messaging");
var groups = implement("skyhighheroes:external/groups");
var contacts = implement("skyhighheroes:external/contacts");
var scanner = implement("skyhighheroes:external/scanner");
var waypoints = implement("skyhighheroes:external/waypoint");
var communications = implement("skyhighheroes:external/communications");
var cyberneticMessaging = implement("skyhighheroes:external/cybernetic_messaging");
var cannons = implement("skyhighheroes:external/cannons");
var rockets = implement("skyhighheroes:external/rockets");
var blades = implement("skyhighheroes:external/blades");
var shields = implement("skyhighheroes:external/shields");
var thermopticManipulation = implement("skyhighheroes:external/thermoptic_manipulation");
var wings = implement("skyhighheroes:external/wings");
var externalArms = implement("skyhighheroes:external/external_arms");
var suitDatastore = implement("skyhighheroes:external/suit_datastore");
var voiceSynthesizer = implement("skyhighheroes:external/voice_synthesizer");
var cyberneticEyes = implement("skyhighheroes:external/cybernetic_eyes");
var cyberOS = cybernetics.initSystem([
  settings,
  messaging,
  groupMessaging,
  groups,
  contacts,
  scanner,
  waypoints,
  communications,
  cyberneticMessaging,
  cannons,
  rockets,
  blades,
  shields,
  thermopticManipulation,
  wings,
  externalArms,
  suitDatastore,
  voiceSynthesizer,
  cyberneticEyes,
], "Cyber Orange", "6");
function init(hero) {
  cyberOS.initCybernetics(hero);
};