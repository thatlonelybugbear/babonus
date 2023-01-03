export const MODULE = "babonus";
export const MODULE_NAME = "Build-a-Bonus";
export const MODULE_ICON = "fa-solid fa-otter";
export const SETTING_HEADERLABEL = "headerLabel";
export const SETTING_MIGRATION_VERSION = "migrationVersion";
export const CURRENT_MIGRATION_VERSION = 1; // bump this when new migration is needed.

// the kind of matching done for spell components (at least 1 vs matching all).
export const SPELL_COMPONENT_MATCHING = { ANY: "ANY", ALL: "ALL" }

// the kinds of bonuses you can make.
export const TYPES = [
  // bonuses to attack rolls, crit range, fumble range
  { value: "attack", icon: "fa-solid fa-hand-fist", label: "BABONUS.VALUES.TYPE.attack" },
  // bonuses to damage rolls, critical damage, critical bonus dice
  { value: "damage", icon: "fa-solid fa-burst", label: "BABONUS.VALUES.TYPE.damage" },
  // bonuses to the save DC
  { value: "save", icon: "fa-solid fa-hand-sparkles", label: "BABONUS.VALUES.TYPE.save" },
  // bonuses to a saving throw, and death save target value
  { value: "throw", icon: "fa-solid fa-person-falling-burst", label: "BABONUS.VALUES.TYPE.throw" },
  // bonuses to hit die rolls
  { value: "hitdie", icon: "fa-solid fa-heart-pulse", label: "BABONUS.VALUES.TYPE.hitdie" }
];

// mapping of bonus types to tooltips, labels, and formData names.
export const BONUS_TYPES_FORMDATA = {
  "attack": [
    { TOOLTIP: "BABONUS.TOOLTIPS.ATTACK.BONUS", LABEL: "BABONUS.LABELS.ATTACK.BONUS", NAME: "bonuses.bonus" },
    { TOOLTIP: "BABONUS.TOOLTIPS.ATTACK.CRIT_RANGE", LABEL: "BABONUS.LABELS.ATTACK.CRIT_RANGE", NAME: "bonuses.criticalRange" },
    { TOOLTIP: "BABONUS.TOOLTIPS.ATTACK.FUMBLE_RANGE", LABEL: "BABONUS.LABELS.ATTACK.FUMBLE_RANGE", NAME: "bonuses.fumbleRange" }
  ],
  "damage": [
    { TOOLTIP: "BABONUS.TOOLTIPS.DAMAGE.BONUS", LABEL: "BABONUS.LABELS.DAMAGE.BONUS", NAME: "bonuses.bonus" },
    { TOOLTIP: "BABONUS.TOOLTIPS.DAMAGE.CRIT_DICE", LABEL: "BABONUS.LABELS.DAMAGE.CRIT_DICE", NAME: "bonuses.criticalBonusDice" },
    { TOOLTIP: "BABONUS.TOOLTIPS.DAMAGE.CRIT_DMG", LABEL: "BABONUS.LABELS.DAMAGE.CRIT_DMG", NAME: "bonuses.criticalBonusDamage" }
  ],
  "save": [
    { TOOLTIP: "BABONUS.TOOLTIPS.SAVE.BONUS", LABEL: "BABONUS.LABELS.SAVE.BONUS", NAME: "bonuses.bonus" }
  ],
  "throw": [
    { TOOLTIP: "BABONUS.TOOLTIPS.THROW.BONUS", LABEL: "BABONUS.LABELS.THROW.BONUS", NAME: "bonuses.bonus" },
    { TOOLTIP: "BABONUS.TOOLTIPS.THROW.DEATH_TARGET", LABEL: "BABONUS.LABELS.THROW.DEATH_TARGET", NAME: "bonuses.deathSaveTargetValue" }
  ],
  "hitdie": [
    { TOOLTIP: "BABONUS.TOOLTIPS.HITDIE.BONUS", LABEL: "BABONUS.LABELS.HITDIE.BONUS", NAME: "bonuses.bonus" }
  ]
};

// the types of attacks an item can make.
export const ATTACK_TYPES = [
  "mwak", "rwak", "msak", "rsak"
];

// item types that cannot GRANT a bonus.
export const ILLEGAL_ITEM_TYPES = [
  "background", "class", "subclass", "race"
];

// item types that can get a bonus when rolling attack, damage, or showing a save dc.
export const ITEM_ROLL_TYPES = [
  "consumable", "equipment", "feat", "spell", "weapon"
];

// item types that can be equipped/attuned (as of 2.1.0).
export const EQUIPPABLE_TYPES = [
  "weapon", "equipment", "consumable", "tool", "backpack"
];

// bonus types that can be 'item only'.
export const ITEM_ONLY_BONUS_TYPES = [
  "attack", "damage", "save"
];

// the disposition of an aura (targeting allies, enemies, or all).
export const AURA_TARGETS = {
  ALLY: 1, ENEMY: -1, ANY: 2
};

// names of all filters.
export const FILTER_NAMES = [
  "itemTypes",
  "throwTypes",
  "itemRequirements",
  "arbitraryComparison",
  "statusEffects",
  "targetEffects",
  "creatureTypes",
  "attackTypes",
  "damageTypes",
  "abilities",
  "saveAbilities",
  "spellComponents",
  "spellLevels",
  "spellSchools",
  "baseWeapons",
  "weaponProperties",
  "customScripts",
  "remainingSpellSlots"
];

// arbitrary operators
export const ARBITRARY_OPERATORS = [
  { value: "EQ", label: "=" },
  { value: "LT", label: "&lt;" },
  { value: "GT", label: "&gt;" },
  { value: "LE", label: "&le;" },
  { value: "GE", label: "&ge;" }
];

// item types and the keys for the filters that require them.
export const FILTER_ITEM_TYPE_REQUIREMENTS = {
  "weapon": ["baseWeapons", "weaponProperties"],
  "spell": ["spellComponents", "spellLevels", "spellSchools"]
};
