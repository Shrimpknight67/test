
/*
#=============================================================================
# Battle formations plugin
# Nina_BattleFormations.js
# By Ninakoru
# Version 1.0
#-----------------------------------------------------------------------------
# TERMS OF USE
#-----------------------------------------------------------------------------
# - Please give some credit to the author.
# - Free for non-commercial & commercial use.
# - You can modify or include it in another plugin, just give proper credit.
#=============================================================================
*/

var Imported = Imported || {};
Imported.Nina_BattleFormations = true;

var Nina = Nina || {};
Nina.BattleFormations = Nina.BattleFormations || {};
Nina.BattleFormations.version = 1.00;

/*:
 * @plugindesc Enables battle formations Breath of Fire series style!
 * @author Ninakoru
 * @version 1.0
 
 * @param ---General---
 * @default
 
 * @param Allow change size
 * @parent ---General---
 * @type boolean
 * @on Allow
 * @off Don't allow
 * @desc Let the player change the battle party size
 * from the Battle Formation screen?
 * @default true

 * @param Replace menu formation
 * @parent ---General---
 * @type boolean
 * @on Replace
 * @off New option
 * @desc Replace the 'formation' command on the main
 * menu screen?
 * @default true

 * @param Battle formation text
 * @parent ---General---
 * @desc Text shown on the 'Battle formation' command 
 * on the main menu screen.
 * @default Battle Formation

 * @param Party setup option
 * @parent ---General---
 * @desc Text shown on the 'Party Setup' command
 * inside the battle formation screen.
 * @default Party Setup

 * @param Battle formations option
 * @parent ---General---
 * @desc Text shown on the 'Battle formations'
 * command inside the battle formation screen.
 * @default Battle Formations

 * @param No formation text
 * @parent ---General---
 * @desc Text shown on the 'Battle formations'
 * options when is no formation available.
 * @default None

 * @param No formation description
 * @parent ---General---
 * @type note
 * @desc Text shown on the formation description
 * when is no formation available.
 * @default "No battle formation in effect."

 * @param Screen X Delimiter
 * @parent ---General---
 * @desc Formula or value to get where to start the 
 * formation screen quadrant x intersection.
 * @default Graphics.boxWidth / 4
 
 * @param Screen Y Delimiter
 * @parent ---General---
 * @desc Formula or value to get where to start the 
 * formation screen quadrant y intersection.
 * @default Graphics.boxHeight / 5

 * @param Battle Center X
 * @parent ---General---
 * @desc Formula or value to get where to reference 
 * with the party member coordinates on battle.
 * @default Graphics.boxWidth * 0.8
 
 * @param Battle Center Y
 * @parent ---General---
 * @desc Formula or value to get where to reference 
 * with the party member coordinates on battle.
 * @default Graphics.boxHeight * 0.6
 
 * @param Current Formation Icon
 * @parent ---General---
 * @type number
 * @min 0
 * @desc Icon Id to represent current formation.
 * @default 164

 * @param ---Formations---
 * @default
 
 * @param Formation 1
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[10]Frontal Assault\\C[0]","Detail":"\"Offensive formation near the enemy, leaving little room for reaction.\\n+15% \\\\C[18]Attack\\\\C[0] and \\\\C[3]Agility\\\\C[0].\\n-10% \\\\C[16]Evasion\\\\C[0] and \\\\C[21]Defense\\\\C[0].\"","Switch":"0","Party Quantity":"2","Position 1":"{\"State\":\"16\",\"X Coordinate\":\"-200\",\"Y Coordinate\":\"40\"}","Position 2":"{\"State\":\"17\",\"X Coordinate\":\"-180\",\"Y Coordinate\":\"-40\"}","Position 3":"","Position 4":""}

 * @param Formation 2
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[5]Simple Protection\\C[0]","Detail":"\"The front character will protect the rear character.\\nLead character: \\\\C[16]Aggro Rate\\\\C[0] x 2.\"","Switch":"0","Party Quantity":"2","Position 1":"{\"State\":\"14\",\"X Coordinate\":\"-40\",\"Y Coordinate\":\"-10\"}","Position 2":"{\"State\":\"15\",\"X Coordinate\":\"40\",\"Y Coordinate\":\"10\"}","Position 3":"","Position 4":""}

 * @param Formation 3
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[12]Line Advance\\C[0]","Detail":"\"Line assault, enhances the critical chance.\\n1st: -10% \\\\C[16]Evasion\\\\C[0], \\\\C[16]Aggro Rate\\\\C[0] x 2\\n2nd and 3rd: +15% \\\\C[16]Critical Rate\\\\C[0]\"","Switch":"0","Party Quantity":"3","Position 1":"{\"State\":\"16\",\"X Coordinate\":\"-80\",\"Y Coordinate\":\"-10\"}","Position 2":"{\"State\":\"17\",\"X Coordinate\":\"0\",\"Y Coordinate\":\"0\"}","Position 3":"{\"State\":\"18\",\"X Coordinate\":\"80\",\"Y Coordinate\":\"10\"}","Position 4":""}

 * @param Formation 4
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[2]Two-point Stand\\C[0]","Detail":"\"Backed character boosts his magic ability greatly.\\n1st and 2nd: \\\\C[16]Aggro Rate\\\\C[0] x 2.\\n3rd: +30% \\\\C[31]Magic Attack\\\\C[0], +10% \\\\C[16]MP Regen\\\\C[0].\"","Switch":"0","Party Quantity":"3","Position 1":"{\"State\":\"16\",\"X Coordinate\":\"-60\",\"Y Coordinate\":\"-60\"}","Position 2":"{\"State\":\"18\",\"X Coordinate\":\"-40\",\"Y Coordinate\":\"60\"}","Position 3":"{\"State\":\"16\",\"X Coordinate\":\"60\",\"Y Coordinate\":\"-10\"}","Position 4":""}

 * @param Formation 5
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[25]Refuge Force\\C[0]","Detail":"\"Supply-focused formation, giving some regeneration power.\\nAll party: +5% \\\\C[16]HP Regen\\\\C[0], \\\\C[16]MP Regen\\\\C[0] and \\\\C[16]TP Regen\\\\C[0]\"","Switch":"0","Party Quantity":"3","Position 1":"{\"State\":\"18\",\"X Coordinate\":\"-30\",\"Y Coordinate\":\"80\"}","Position 2":"{\"State\":\"16\",\"X Coordinate\":\"-10\",\"Y Coordinate\":\"0\"}","Position 3":"{\"State\":\"16\",\"X Coordinate\":\"30\",\"Y Coordinate\":\"-70\"}","Position 4":""}

 * @param Formation 6
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[20]Wedge Front\\C[0]","Detail":"\"Seeking initiative, greatly boosts Offensive abilities at the cost of defenses.\\n+20% \\\\C[18]Attack\\\\C[0], +50% \\\\C[3]Agility\\\\C[0].\\n-50% \\\\C[21]Defense\\\\C[0].\"","Switch":"0","Party Quantity":"4","Position 1":"{\"State\":\"17\",\"X Coordinate\":\"-160\",\"Y Coordinate\":\"0\"}","Position 2":"{\"State\":\"18\",\"X Coordinate\":\"-110\",\"Y Coordinate\":\"60\"}","Position 3":"{\"State\":\"16\",\"X Coordinate\":\"-100\",\"Y Coordinate\":\"-60\"}","Position 4":"{\"State\":\"19\",\"X Coordinate\":\"0\",\"Y Coordinate\":\"10\"}"}

 * @param Formation 7
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[28]Parallel Stand\\C[0]","Detail":"\"Extremely well known formation that get the best of everyone.\\n1st and 2nd: +15% \\\\C[18]Attack\\\\C[0] and \\\\C[21]Defense\\\\C[0].\\n3rd and 4th: +15% \\\\C[31]Magic Attack\\\\C[0] and \\\\C[12]Magic Defense\\\\C[0].\"","Switch":"0","Party Quantity":"4","Position 1":"{\"State\":\"19\",\"X Coordinate\":\"-60\",\"Y Coordinate\":\"100\"}","Position 2":"{\"State\":\"16\",\"X Coordinate\":\"-40\",\"Y Coordinate\":\"-100\"}","Position 3":"{\"State\":\"18\",\"X Coordinate\":\"20\",\"Y Coordinate\":\"35\"}","Position 4":"{\"State\":\"17\",\"X Coordinate\":\"30\",\"Y Coordinate\":\"-35\"}"}

 * @param Formation 8
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[30]Shield guard\\C[0]","Detail":"\"Formation focused on protecting one single person..\\n1st, 2nd and 3rd: \\\\C[16]Aggro rate\\\\C[0] x2, +15% \\\\C[21]Defense\\\\C[0]\"","Switch":"0","Party Quantity":"4","Position 1":"{\"State\":\"18\",\"X Coordinate\":\"-10\",\"Y Coordinate\":\"80\"}","Position 2":"{\"State\":\"17\",\"X Coordinate\":\"0\",\"Y Coordinate\":\"0\"}","Position 3":"{\"State\":\"16\",\"X Coordinate\":\"10\",\"Y Coordinate\":\"-80\"}","Position 4":"{\"State\":\"19\",\"X Coordinate\":\"130\",\"Y Coordinate\":\"10\"}"}

 * @param Formation 9
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[6]Scattered position\\C[0]","Detail":"\"All characters all far away from each other boosting evasion greatly.\\nAll party: +25% \\\\C[16]Evasion\\\\C[0] and \\\\C[6]Luck\\\\C[0].\"","Switch":"0","Party Quantity":"4","Position 1":"{\"State\":\"16\",\"X Coordinate\":\"-150\",\"Y Coordinate\":\"-100\"}","Position 2":"{\"State\":\"18\",\"X Coordinate\":\"-75\",\"Y Coordinate\":\"40\"}","Position 3":"{\"State\":\"17\",\"X Coordinate\":\"100\",\"Y Coordinate\":\"-40\"}","Position 4":"{\"State\":\"19\",\"X Coordinate\":\"130\",\"Y Coordinate\":\"100\"}"}

 * @param Formation 10
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default {"Title":"\\C[18]Full support\\C[0]","Detail":"\"He is the man, and he deserves everything.\\nLead character: +25% to all basic stats.\"","Switch":"0","Party Quantity":"4","Position 1":"{\"State\":\"19\",\"X Coordinate\":\"-150\",\"Y Coordinate\":\"10\"}","Position 2":"{\"State\":\"16\",\"X Coordinate\":\"-20\",\"Y Coordinate\":\"-80\"}","Position 3":"{\"State\":\"18\",\"X Coordinate\":\"-10\",\"Y Coordinate\":\"80\"}","Position 4":"{\"State\":\"17\",\"X Coordinate\":\"0\",\"Y Coordinate\":\"0\"}"}

 * @param Formation 11
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 12
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 13
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 14
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 15
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 16
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 17
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 18
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 19
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @param Formation 20
 * @parent ---Formations---
 * @type struct<BattleFormation>
 * @desc Modify the data used by this formation.
 * @default

 * @help ============================================================================
 * Version and TODO list.
 * ============================================================================
 *
 * Current Version:
 *
 * 1.0: First version, maybe need some polishing but should be 100% usable and
 * mostly bug-free.
 *
 * TODO list:
 *
 * - Full compatibility with a minor integration with Yanfly Party system
 * (specially the option to lock positions or require characters in battle).
 *
 * - Extend the party maximum to 6 characters (should be easy enough).
 *
 * - More customization options, possibly some visual customizations for the
 * battle formations screen.
 *
 * - Maybe some special restrictions by actor, so some formation maybe are
 * only usable if X actor is in battle party.
 *
 * - Some code refinement. While I am pretty happy with the initial result,
 * Some things left there bugs me a little (there's some weird image load
 * behaviour for instance).
 *
 * - Maybe some plugin commands?
 *
 * ============================================================================
 * Intro
 * ============================================================================
 *
 * The script adds 'battle formations' as are known in the breath of fire
 * series. These battle formations affect the battle party through several
 * boosts and penalties, also have a visual presentation with different
 * character positioning in battle, depending on the current formation.
 *
 * This type of battle formations add a new layer of strategy to the battle
 * system, with a different approach row formation system does.
 *
 * ============================================================================
 * Tech Specs
 * ============================================================================
 *
 * This script requires version 1.5 of RPG Maker of greater in order to use it
 * properly, as makes heavy use of advanced configuration options only
 * available from this version onwards.
 *
 * This script is standalone (no plugin dependencies) and plug & play (no need
 * for new game to its full use). The performance should be excellent (no lag
 * due to the extra processing).
 *
 * Should be placed before any plugin that may alter the battle system (so the
 * positioning takes effect).
 *
 * The script is fully configurable inside the RPG Maker program through the
 * plugin manager parameters. All parameters have a help text indicating what
 * they affect.
 *
 * Most texts are fully customizable using the formatting options available in
 * text windows and any text window plugin extension.
 *
 * There are 10 formations as default, you can configure up to 20 formations.
 * The states should be reviewed, however (they should at least exist).
 *
 * Should be highly compatible with most plugins, as in practice only alter the
 * party positioning in battle, the max battle characters, and adds a permanent
 * state to battlers dynamically.
 *
 * ============================================================================
 * Details
 * ============================================================================
 *
 * This option will be only available through the menu screen options,
 * and can optionally replace the "Formation" option.
 *
 * If the default formation menu option is disabled, 'battle formation' option
 * will also be affected.
 *
 * These formations will position your characters in battle at specific points,
 * and will also add a state permanently to each battle party member.
 *
 * Through states, you can change any parameter using state traits and any
 * plugin that add custom traits to states (IE: Magic Element Augments,
 * Critical Damage).
 *
 * Formations can be either always available, or you can turn them On/Off using
 * a switch. Formations only apply to a number of party characters, so a
 * formation of 3 characters will be only usable if you have exactly three
 * battle characters.
 *
 * If you didn't configure a formation for the current number of battle
 * characters, there's a default "None" formation that will apply default
 * positioning and no states.
 *
 * On the 'party setup' option, you can modify current battle members, taking
 * members to the reserve if you want to. This is optional as you can restrict
 * the 'party setup' to only swap characters.
 *
 * When you add or remove a character to the party, formations are checked and
 * possibly reset if the max number of battle characters has changed. The
 * default formation at that moment will be the first formation valid for the
 * number of characters (not switched off).
 *
 * ============================================================================
 * Thanks
 * ============================================================================
 *
 * This is my first serious plugin, took me lots of hours to get here. I have
 * to thank Yanfly immensely, looking at their plugins saved me a lot of trial
 * and error, also helped me out to get some good programming practices in this
 * framework.
 */
 
 /*~struct~BattlePosition:
 
 * @param State
 * @parent First Position
 * @type state
 * @desc State applied permanently to this position.
 * IMPORTANT: This states must be only used in formations.
 * @default 1

 * @param X Coordinate
 * @parent First Position
 * @type number
 * @min -9999
 * @max 9999
 * @desc Coordinate relative to to the 
 * battle formation center.
 * @default -20

 * @param Y Coordinate
 * @parent First Position
 * @type number
 * @min -9999
 * @max 9999
 * @desc Coordinate relative to to the 
 * battle formation center.
 * @default 20
 
 */
 
/*~struct~BattleFormation:
  
 * @param Title
 * @desc Formation name, shown as option in the game.
 * Set an empty value to skip it in the game.
 * @default Standard Formation

 * @param Detail
 * @type note 
 * @desc Formation full description text, this will be 
 * shown upon formation selection.
 * @default "First character is targeted more often, last is targeted less often."

 * @param Switch
 * @type switch
 * @desc Switch that turns this battle formation
 * ON or OFF. Leave this at None for always ON effect.
 * @default 0

 * @param Party Quantity
 * @type number
 * @min 1
 * @max 4
 * @desc Party number required for this formation,
 * formation will appear with a party of this number.
 * @default 4

 * @param Position 1
 * @type struct<BattlePosition>
 * @default {"State":"2","X Coordinate":"-60","Y Coordinate":"-90"}

 * @param Position 2
 * @type struct<BattlePosition>
 * @default {"State":"3","X Coordinate":"-20","Y Coordinate":"-30"}

 * @param Position 3
 * @type struct<BattlePosition>
 * @default {"State":"4","X Coordinate":"20","Y Coordinate":"30"}

 * @param Position 4
 * @type struct<BattlePosition>
 * @default {"State":"5","X Coordinate":"60","Y Coordinate":"90"}
 */

Nina.PluginParams = PluginManager.parameters('Nina_BattleFormations');

Nina.BattleFormations.Config = Nina.BattleFormations.Config || {};

Nina.BattleFormations.Config.MaxFormations = 20;
Nina.BattleFormations.Config.MaxParty = 4;
Nina.BattleFormations.Config.AllowChangeSize = String(Nina.PluginParams['Allow change size']);
Nina.BattleFormations.Config.AllowChangeSize = eval(Nina.BattleFormations.Config.AllowChangeSize);
Nina.BattleFormations.Config.ReplaceFormation = String(Nina.PluginParams['Replace menu formation']);
Nina.BattleFormations.Config.ReplaceFormation = eval(Nina.BattleFormations.Config.ReplaceFormation);
Nina.BattleFormations.Config.BattleFormationText = String(Nina.PluginParams['Battle formation text']);

Nina.BattleFormations.Config.PartySetupOption = String(Nina.PluginParams['Party setup option']);
Nina.BattleFormations.Config.BattleFormationsOption = String(Nina.PluginParams['Battle formations option']);
Nina.BattleFormations.Config.NoFormationText = String(Nina.PluginParams['No formation text']);
Nina.BattleFormations.Config.NoFormationDescription = String(Nina.PluginParams['No formation description']);

Nina.BattleFormations.Config.screenXdelimiter = Nina.PluginParams['Screen X Delimiter'];
Nina.BattleFormations.Config.screenYdelimiter = Nina.PluginParams['Screen Y Delimiter'];
Nina.BattleFormations.Config.battleCenterX = Nina.PluginParams['Battle Center X'];
Nina.BattleFormations.Config.battleCenterY = Nina.PluginParams['Battle Center Y'];
Nina.BattleFormations.Config.selectedFormationIconId = Nina.PluginParams['Current Formation Icon'] ? parseInt(Nina.PluginParams['Current Formation Icon']) : 1;

//=============================================================================
// DataManager
//=============================================================================

var $dataBattleFormations = [null];

Nina.BattleFormations.Config.FormationStates = [];

DataManager.battleFormationDbAdd = function (id, data) {
    if (!data) return $dataBattleFormations.push(null);
    var bFormation = {
        Id: id,
        Title: (!data['Title']) ? 'Default Title' : data['Title'],
        Detail: (!data['Detail']) ? 'Default Detail' : data['Detail'],
        Switch: (!data['Switch']) ? 0 : parseInt(data['Switch']),
        PartyQuantity: (!data['Party Quantity']) ? Nina.BattleFormations.Config.MaxParty : parseInt(data['Party Quantity']),
        Position: []
    }
    for (var i = 1; i <= Nina.BattleFormations.Config.MaxParty; ++i) {
        var posData = JSON.parse(data['Position ' + i] || 'null');
        var pData = {
            State: 0,
            Xpos: 0,
            Ypos: 0
        }

        if (posData) {
            pData.State = (!posData['State']) ? 1 : parseInt(posData['State']);
            pData.Xpos = (!posData['X Coordinate']) ? 0 : parseInt(posData['X Coordinate']);
            pData.Ypos = (!posData['Y Coordinate']) ? 0 : parseInt(posData['Y Coordinate']);

            if ((Nina.BattleFormations.Config.FormationStates.length === 0) ||
                (Nina.BattleFormations.Config.FormationStates.filter(function (ele)
            { return ele === pData.State; }).length === 0)) {
                Nina.BattleFormations.Config.FormationStates.push(pData.State);
            }
        }

        bFormation.Position.push(pData);


    }

    $dataBattleFormations.push(bFormation);

}

DataManager.battleFormationDbCreate = function() {
  $dataBattleFormations = [null];
  for (var i = 1; i <= Nina.BattleFormations.Config.MaxFormations; ++i) {
    var formationData = JSON.parse(Nina.PluginParams['Formation ' + i] || 'null');
    if (!formationData) continue;
    this.battleFormationDbAdd(i, formationData);
  };
  
  Nina.BattleFormations.Config.FormationStates.sort(function(a, b){return a - b});
};

DataManager.battleFormationDbCreate();

//=============================================================================
// Game_System
//=============================================================================

Nina.BattleFormations.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Nina.BattleFormations.Game_System_initialize.call(this);
  this.initBattleFormationSettings();
};

Game_System.prototype.initBattleFormationSettings = function() {
    this._currentBattleFormation = this._currentBattleFormation || 0;
    this._currentBattlePartySize = this._currentBattlePartySize || 4;
};


//=============================================================================
// FormationsManager
//=============================================================================

function BattleFormationsManager() {
    throw new Error('This is a static class');
}

BattleFormationsManager.setBattleFormationId = function (battleFormationId) {
    $gameSystem.initBattleFormationSettings();
    if (BattleFormationsManager.getBattleFormationId() !== battleFormationId) {
        $gameSystem._currentBattleFormation = battleFormationId;
        BattleFormationsManager.setBattleFormationStates();
    }    
};

BattleFormationsManager.getBattleFormationId = function () {
    $gameSystem.initBattleFormationSettings();
    return $gameSystem._currentBattleFormation;
};

BattleFormationsManager.setBattlePartySize = function (partySize) {
    $gameSystem.initBattleFormationSettings();
    $gameSystem._currentBattlePartySize = partySize;
};

BattleFormationsManager.getBattlePartySize = function () {
    $gameSystem.initBattleFormationSettings();
    return $gameSystem._currentBattlePartySize;
};

BattleFormationsManager.hasBattleFormation = function () {
    return this.getBattleFormationId() > 0;
};

BattleFormationsManager.currentFormation = function () {
    if (!BattleFormationsManager.hasBattleFormation()) {
        return null;
    }

    return $dataBattleFormations[BattleFormationsManager.getBattleFormationId()];
}

BattleFormationsManager.GetActorIndex = function (actorId) {
    var filteredActors = $gameParty.battleMembers().filter(function (actor) { return actor._actorId === actorId; });
    return (filteredActors.length === 0) ? -1 : filteredActors[0].index();
}

BattleFormationsManager.GetDefaultPosition = function (index) {
    var pSize = BattleFormationsManager.getBattlePartySize();
    return {
        State: -1,
        Xpos: (index - (pSize / 2)) * 32,
        Ypos: (index + 1 - (pSize / 2)) * 64 - 22
    };
}


BattleFormationsManager.GetActorPosition = function (index) {

    if (index > BattleFormationsManager.getBattlePartySize()) {
        return null;
    }

    if (!BattleFormationsManager.hasBattleFormation()) {
        return BattleFormationsManager.GetDefaultPosition(index);
    }

    var currentFormation = BattleFormationsManager.currentFormation();
    return currentFormation.Position[index];
}

BattleFormationsManager.setBattleFormationStates = function () {

    for (var i = 0; i < $gameParty.battleMembers().length; i++) {
        if (!BattleFormationsManager.hasBattleFormation()) {
            $gameParty.battleMembers()[i]._battleFormationStateId = 0;
        }
        else {
            var position = BattleFormationsManager.GetActorPosition(i);
            if (position && (position.State > 0)) {
                $gameParty.battleMembers()[i]._battleFormationStateId = position.State;
            }
        }
    }

    for (var i = 0; i < $gameParty.nonBattleMembers().length; i++) {
        $gameParty.nonBattleMembers()[i]._battleFormationStateId = 0;
    }
}

BattleFormationsManager.isValid = function (formation) {
    if (!formation) return false;
    return (formation.PartyQuantity === BattleFormationsManager.getBattlePartySize()) && ((formation.Switch === 0) || $gameSwitches.value(formation.Switch))
}

BattleFormationsManager.validFormations = function () {
    return $dataBattleFormations.filter(function (form) { return BattleFormationsManager.isValid(form); });
}

BattleFormationsManager.checkAndSetBattleFormation = function () {
    var validFormations = BattleFormationsManager.validFormations();
    if (!BattleFormationsManager.isValid(BattleFormationsManager.currentFormation())) {
        var newFormationId = (validFormations.length === 0) ? 0 : validFormations[0].Id;
        BattleFormationsManager.setBattleFormationId(newFormationId);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
    }
    else {
        BattleFormationsManager.setBattleFormationStates();
    }
}

BattleFormationsManager.GetDefaultFormation = function () {
    return {
        Id: 0,
        Title: Nina.BattleFormations.Config.NoFormationText,
        Detail: Nina.BattleFormations.Config.NoFormationDescription,
        Switch: 0,
        PartyQuantity: BattleFormationsManager.getBattlePartySize(),
        Position: []
    }

}

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.battleMembers = function () {
    return this.allMembers().slice(0, BattleFormationsManager.getBattlePartySize()).filter(function (actor) {
        return actor.isAppeared();
    });
};

Game_Party.prototype.nonBattleMembers = function () {
    return $gameParty.allMembers().filter(function (actor) {
        for (var i = 0; i < $gameParty.battleMembers().length; i++) {
            var bActor = $gameParty.battleMembers()[i];
            if (bActor.index() === actor.index()) {
                return false;
            }
        }
        return true;
    });
}


Nina.BattleFormations.Game_Party_swapOrder = Game_Party.prototype.swapOrder;
Game_Party.prototype.swapOrder = function (index1, index2) {
    Nina.BattleFormations.Game_Party_swapOrder.call(this, index1, index2);
    BattleFormationsManager.checkAndSetBattleFormation();
};

Game_Party.prototype.quickOrder = function (actorIdArray) {

    if (actorIdArray.length !== this._actors.length) {
        return;
    }

    for (var i = 0; i < actorIdArray.length; i++) {
        if (!this._actors.contains(actorIdArray[i])) {
            return;
        }
    }

    this._actors = actorIdArray;
    this.swapOrder(0, 0);
};

Nina.BattleFormations.Game_Party_addActor = Game_Party.prototype.addActor;
Game_Party.prototype.addActor = function (actorId) {
    Nina.BattleFormations.Game_Party_addActor.call(this, actorId);
    BattleFormationsManager.setBattlePartySize(Math.min(this.allMembers().length, this.maxBattleMembers()));
    BattleFormationsManager.checkAndSetBattleFormation();
};

Nina.BattleFormations.Game_Party_removeActor = Game_Party.prototype.removeActor;
Game_Party.prototype.removeActor = function (actorId) {
    Nina.BattleFormations.Game_Party_removeActor.call(this, actorId);
    BattleFormationsManager.setBattlePartySize(Math.min(this.allMembers().length, this.maxBattleMembers()));
    BattleFormationsManager.checkAndSetBattleFormation();
};

//=============================================================================
// Sprite_Actor
//=============================================================================

Nina.BattleFormations.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function (index) {
    if (!BattleFormationsManager.hasBattleFormation()) {
        Nina.BattleFormations.Sprite_Actor_setActorHome.call(this, index);
        return;
    }
    var position = BattleFormationsManager.GetActorPosition(index);
    var setX = Math.floor(eval(Nina.BattleFormations.Config.battleCenterX) + position.Xpos);
    var setY = Math.floor(eval(Nina.BattleFormations.Config.battleCenterY) + position.Ypos);
    this.setHome(setX, setY);
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Nina.BattleFormations.Game_BattlerBase_states = Game_BattlerBase.prototype.states;
Game_BattlerBase.prototype.states = function () {
    var array = Nina.BattleFormations.Game_BattlerBase_states.call(this);
    array = array.concat(this.currentFormationState());
    return array;
};

Nina.BattleFormations.Game_BattlerBase_isStateAffected = Game_BattlerBase.prototype.isStateAffected;
Game_BattlerBase.prototype.isStateAffected = function (stateId) {
    if (this.isFormationState(stateId)) return true;
    return Nina.BattleFormations.Game_BattlerBase_isStateAffected.call(this, stateId);
};

Game_BattlerBase.prototype.isFormationState = function (stateId) {
    return this._battleFormationStateId === stateId;
};

Game_BattlerBase.prototype.currentFormationState = function () {
    var result = [];
    if (this.isActor() && (this.getSetBattleFormationStateId() > 0)) {
        var state = $dataStates[this._battleFormationStateId];    
        result.push(state);
    }
    return result;
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.getSetBattleFormationStateId = function () {
    if (this._battleFormationStateId > -1) return this._battleFormationStateId;
    var idx = BattleFormationsManager.GetActorIndex(this._actorId);
    if (idx === -1) {
        return idx;
    }
    if (idx < BattleFormationsManager.getBattlePartySize()) {
        var position = BattleFormationsManager.GetActorPosition(idx);
        if (position) {
            this._battleFormationStateId = position.State;
        }
    }
    else {
        this._battleFormationStateId = 0;
    }
    return this._battleFormationStateId;
};

//=============================================================================
// Game_Battler
//=============================================================================

Nina.BattleFormations.Game_Battler_isStateAddable = Game_Battler.prototype.isStateAddable;
Game_Battler.prototype.isStateAddable = function (stateId) {
    if (this.isFormationState(stateId)) return false;
    return Nina.BattleFormations.Game_Battler_isStateAddable.call(this, stateId);
};

Nina.BattleFormations.Game_Battler_removeState = Game_Battler.prototype.removeState;
Game_Battler.prototype.removeState = function (stateId) {
    if (this.isFormationState(stateId)) return;
    Nina.BattleFormations.Game_Battler_removeState.call(this, stateId);
};


//=============================================================================
// Window_MenuCommand
//=============================================================================

Nina.BattleFormations.Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
    Nina.BattleFormations.Window_MenuCommand_addOriginalCommands.call(this);
    if (!Nina.BattleFormations.Config.ReplaceFormation) {
        this.addBattleFormationCommand();
    }  
};

Nina.BattleFormations.Window_MenuCommand_addFormationCommand = Window_MenuCommand.prototype.addFormationCommand;
Window_MenuCommand.prototype.addFormationCommand = function () {
    if (Nina.BattleFormations.Config.ReplaceFormation) {
        this.addBattleFormationCommand();
    }
    else {
        Nina.BattleFormations.Window_MenuCommand_addFormationCommand.call(this);
    }
};

Window_MenuCommand.prototype.addBattleFormationCommand = function() {
    if (this.needsCommand('formation')) {
        var enabled = this.isFormationEnabled();
        this.addCommand(Nina.BattleFormations.Config.BattleFormationText, 'battle-formations', enabled);
    }
};

//=============================================================================
// Scene_Menu
//=============================================================================

Nina.BattleFormations.Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
  Nina.BattleFormations.Scene_Menu_createCommandWindow.call(this);
  this._commandWindow.setHandler('battle-formations', this.commandBattleFormation.bind(this));
};

Scene_Menu.prototype.commandBattleFormation = function() {
  SceneManager.push(Scene_BattleFormation);
};

//=============================================================================
// Scene_BattleFormation
//=============================================================================

function Scene_BattleFormation() {
  this.initialize.apply(this, arguments);
};

Scene_BattleFormation.prototype = Object.create(Scene_MenuBase.prototype);
Scene_BattleFormation.prototype.constructor = Scene_BattleFormation;

Scene_BattleFormation.prototype.initialize = function() {
  Scene_MenuBase.prototype.initialize.call(this);
};

Scene_BattleFormation.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  var xDelimiter = Math.round(eval(Nina.BattleFormations.Config.screenXdelimiter));
  var yDelimiter = Math.round(eval(Nina.BattleFormations.Config.screenYdelimiter));
  this.createFormationMainWindow(xDelimiter, yDelimiter);
  this.createBattleFormationsWindow(xDelimiter, yDelimiter);
  this.createCharacterSetupWindow(xDelimiter, yDelimiter);
  this.createFormationShowRoomWindow(xDelimiter, yDelimiter);
};

Scene_BattleFormation.prototype.createFormationMainWindow = function(xDelim, yDelim) {
  this._formationMainWindow = new Window_FormationMain(xDelim, yDelim);
  this._formationMainWindow.setHandler('battle-forms-ok', this.onBattleFormationsOk.bind(this));
  this._formationMainWindow.setHandler('character-setup-ok', this.onCharacterSetupOk.bind(this));
  this._formationMainWindow.setHandler('cancel', this.onFormationMainWindowCancel.bind(this));
  this.addWindow(this._formationMainWindow);
};

Scene_BattleFormation.prototype.createBattleFormationsWindow = function(xDelim, yDelim) {
  this._battleFormationWindow = new Window_BattleFormations(xDelim, yDelim);
  this._battleFormationWindow.setHandler('ok', this.onBattleFormationSelect.bind(this))
  this._battleFormationWindow.setHandler('cancel', this.onBattleFormationsCancel.bind(this));
  this.addWindow(this._battleFormationWindow);
};

Scene_BattleFormation.prototype.createCharacterSetupWindow = function(xDelim, yDelim) {
  this._characterSetupWindow = new Window_CharacterSetup(xDelim, yDelim);
  this._characterSetupWindow.setHandler('ok', this.onCharacterSetupSelect.bind(this))
  this._characterSetupWindow.setHandler('cancel', this.onCharacterSetupCancel.bind(this));
  this.addWindow(this._characterSetupWindow);
};

Scene_BattleFormation.prototype.createFormationShowRoomWindow = function(xDelim, yDelim) {
  this._formationShowRoomWindow = new Window_FormationShowRoom(xDelim, yDelim);
  this.addWindow(this._formationShowRoomWindow);
};

Scene_BattleFormation.prototype.onFormationMainWindowCancel = function () {
    $gameParty.allMembers().filter(function (actor) { actor.refresh(); });
    this.popScene();
};

Scene_BattleFormation.prototype.onBattleFormationsOk = function() {
  this._battleFormationWindow.activate();
  if (this._battleFormationWindow.index() < 0) this._battleFormationWindow.select(0);
};

Scene_BattleFormation.prototype.onBattleFormationSelect = function () {
    this._battleFormationWindow.selectBattleFormation();
    if (this._battleFormationWindow.hasChanged()) {
        this._formationShowRoomWindow.refresh();
    } 
}

Scene_BattleFormation.prototype.onBattleFormationsCancel = function() {
  this._formationMainWindow.activate();
  this._battleFormationWindow.deselect();
};


Scene_BattleFormation.prototype.onCharacterSetupOk = function () {
    this._characterSetupWindow.activate();
    if (this._characterSetupWindow.index() < 0) this._characterSetupWindow.select(0);
};

Scene_BattleFormation.prototype.onCharacterSetupSelect = function () {
    this._characterSetupWindow.selectSlot();
    if (this._characterSetupWindow.hasChanged()) {
        this._battleFormationWindow.refresh();
        this._formationShowRoomWindow.refresh();
    }    
};

Scene_BattleFormation.prototype.onCharacterSetupCancel = function () {
    this._formationMainWindow.activate();
    this._characterSetupWindow.deselect();
};


//=============================================================================
// Window_FormationMain
//=============================================================================

function Window_FormationMain() {
    this.initialize.apply(this, arguments);
}

Window_FormationMain.prototype = Object.create(Window_Command.prototype);
Window_FormationMain.prototype.constructor = Window_FormationMain;

Window_FormationMain.prototype.initialize = function(wWidth, wHeight) {
  var x = 0;
  var y = 0;
  this._windowWidth = wWidth;
  this._windowHeight = wHeight;
  Window_Command.prototype.initialize.call(this, x, y);
};

Window_FormationMain.prototype.makeCommandList = function() {
    this.addCommand(Nina.BattleFormations.Config.BattleFormationsOption, 'battle-forms-ok');
    this.addCommand(Nina.BattleFormations.Config.PartySetupOption, 'character-setup-ok');
    this.addCommand('Cancel', 'cancel');
}

Window_FormationMain.prototype.windowWidth = function() {
  return this._windowWidth;
};

Window_FormationMain.prototype.windowHeight = function() {
  return this._windowHeight;
};

//=============================================================================
// Window_BattleFormations
//=============================================================================

function Window_BattleFormations() {
    this.initialize.apply(this, arguments);	
}

Window_BattleFormations.prototype = Object.create(Window_Selectable.prototype);
Window_BattleFormations.prototype.constructor = Window_BattleFormations;

Window_BattleFormations.prototype.initialize = function (wWidth, wHeight) {
    this._hasChanged = false;
    var xStart = 0;
    var yStart = wHeight;
    this._windowWidth = wWidth;
    this._windowHeight = Graphics.boxHeight - wHeight;

    Window_Selectable.prototype.initialize.call(this, xStart, yStart, this._windowWidth, this._windowHeight);

    this.refresh();
};

Window_BattleFormations.prototype.hasChanged = function () {
    return this._hasChanged;
};

Window_BattleFormations.prototype.selectBattleFormation = function () {
    this._hasChanged = false;
	var currentItem = this._data[this.index()];
	if (!currentItem) return;
    if (BattleFormationsManager.getBattleFormationId() !== currentItem.Id) {
        BattleFormationsManager.setBattleFormationId(currentItem.Id);
        this._hasChanged = true;
		this.refresh();		
	}
	this.activate();
};

Window_BattleFormations.prototype.refresh = function () {
    this._data = BattleFormationsManager.validFormations();
    BattleFormationsManager.checkAndSetBattleFormation();
    if (this._data.length === 0) {
        this._data.push(BattleFormationsManager.GetDefaultFormation());
    }
    Window_Selectable.prototype.refresh.call(this);
}

Window_BattleFormations.prototype.windowWidth = function() {
  return this._windowWidth;
};

Window_BattleFormations.prototype.windowHeight = function() {
  return this._windowHeight;
};

Window_BattleFormations.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

Window_BattleFormations.prototype.drawItem = function(index) {
  var rect = this.itemRectForText(index);
  var text = this.convertEscapeCharacters(this._data[index].Title);
  if (this._data[index].Id === BattleFormationsManager.getBattleFormationId()) {
    this.drawIcon(Nina.BattleFormations.Config.selectedFormationIconId, rect.x, rect.y);
    this.drawTextEx(text, rect.x + 40, rect.y);
  }
  else {
    this.drawTextEx(text, rect.x, rect.y);
  }
}

//=============================================================================
// Window_CharacterSetup
//=============================================================================

function Window_CharacterSetup() {
    this.initialize.apply(this, arguments);
}

Window_CharacterSetup.prototype = Object.create(Window_Selectable.prototype);
Window_CharacterSetup.prototype.constructor = Window_CharacterSetup;

Window_CharacterSetup.prototype.initialize = function (wWidth, wHeight) {
  var xStart = wWidth;
  var yStart = 0;
  this._hasChanged = false;
  this._selectedIndex = -1;
  this._windowWidth = Graphics.boxWidth - wWidth;
  this._windowHeight = wHeight;
  this._maxColItems = Math.ceil(this._windowWidth / this._windowHeight);
  this._maxPlaceholders = this.getActorSlots(this._maxColItems);
  this._maxRowItems = Math.ceil(this._maxPlaceholders / this._maxColItems);

  Window_Selectable.prototype.initialize.call(this, xStart, yStart, this._windowWidth, this._windowHeight);

  this._characterHeight = this._windowHeight - (this.spacing() * 3);
  
  this._data = this.getActorsForData();
  
  this.refresh();
};

Window_CharacterSetup.prototype.getActorSlots = function (maxColItems) {
    var maxPlaceholders = Nina.BattleFormations.Config.AllowChangeSize ?
        $gameParty.allMembers().length + $gameParty.maxBattleMembers() - 1 :
        $gameParty.allMembers().length;
    if (Nina.BattleFormations.Config.AllowChangeSize && ((maxPlaceholders % maxColItems) !== 0)) {
        maxPlaceholders += maxColItems - (maxPlaceholders % maxColItems);
    }
    return maxPlaceholders;
}


Window_CharacterSetup.prototype.getActorsForData = function () {
    var tmpActor = null;
    var result = [];
    var tmpCounter = 0;
    var nonBattleMembers = $gameParty.nonBattleMembers();
    for (var i = 0; i < this._maxPlaceholders; i++) {
        if (i < $gameParty.maxBattleMembers()) {
            tmpActor = $gameParty.battleMembers()[i];
        }
        else {
            tmpActor = nonBattleMembers[tmpCounter];
            tmpCounter++;
        }
        result.push(tmpActor ? tmpActor : 0);
    }
    return result;
}

Window_CharacterSetup.prototype.hasChanged = function () {
    return this._hasChanged;
};

Window_CharacterSetup.prototype.windowWidth = function() {
  return this._windowWidth;
};

Window_CharacterSetup.prototype.windowHeight = function() {
  return this._windowHeight;
};

Window_CharacterSetup.prototype.maxCols = function() {
    return this._maxColItems;
};

Window_CharacterSetup.prototype.maxRows = function () {
    return this._maxRowItems;
};

Window_CharacterSetup.prototype.maxItems = function() {
    return this._maxPlaceholders;
};

Window_CharacterSetup.prototype.itemHeight = function() {
    return this._characterHeight;
};

Window_CharacterSetup.prototype.isBattleIndex = function (index) {
    return index < $gameParty.maxBattleMembers()
};


Window_CharacterSetup.prototype.isSelected = function (index) {
    return this._selectedIndex === index;
}


Window_CharacterSetup.prototype.deselect = function () {
    if (this._selectedIndex !== -1) {
        this._selectedIndex = -1;
        this.refresh();
    };
    Window_Selectable.prototype.deselect.call(this);
};

Window_CharacterSetup.prototype.drawItem = function(index) {
    var actor = this._data[index];
    var rect = this.itemRect(index);

    if (this.isSelected(index)) {
        var color = this.pendingColor();
        this.changePaintOpacity(false);
        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
        this.changePaintOpacity(true);
    }

    rect.x += this.textPadding() / 2;
    rect.y += this.textPadding() / 2;
    rect.width -= this.textPadding();
    rect.height -= this.textPadding();

    if (actor) {
        this.drawActorFace(actor, rect.x, rect.y, rect.width, rect.height);
        this.drawActorLevelAndClass(actor, rect.x, (rect.y + rect.height - this.lineHeight()), rect.width);
        
    } else {
        var color = this.gaugeBackColor();
        this.changePaintOpacity(false);
        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
        this.contents.drawText("-Empty-", rect.x, rect.y, rect.width, rect.height, 'center');
        this.changePaintOpacity(true);
    }
    this.drawPosition(index, rect);
}

Window_CharacterSetup.prototype.drawActorLevelAndClass = function (actor, x, y, width) {
    this.drawText(TextManager.levelA + " " + actor.level + " " + actor.currentClass().name, x, y, width);
};

Window_CharacterSetup.prototype.drawPosition = function (index, rect) {
    var color = this.isBattleIndex(index) ? this.powerUpColor() : this.powerDownColor();
    var posX = rect.x + Math.floor(rect.width * 3 / 4) - this.textPadding() / 2;
    var posY = rect.y + this.textPadding() / 2;
    var widthX = rect.width - Math.floor(rect.width * 3 / 4);
    var widthY = Math.floor(rect.height / 4);
    this.changePaintOpacity(false);
    this.contents.fillRect(posX, posY, widthX, widthY, color);
    this.changePaintOpacity(true);
    color = this.systemColor();
    var posText = this.isBattleIndex(index) ? index + 1 : "R";
    this.drawText(" " + posText + " ", posX, posY - this.textPadding(), widthX, widthY, color);

}

Window_CharacterSetup.prototype.getActorIdArray = function () {
    var returnArray = [];
    for (var i = 0; i < this._data.length; i++) {
        var curItem = this._data[i];
        if (curItem !== 0) {
            returnArray.push(curItem.actorId())
        }
    }
    return returnArray;
}

Window_CharacterSetup.prototype.setPartySize = function () {
    var battleActors = this._data.slice(0, $gameParty.maxBattleMembers()).filter(function (actor) {
        return actor !== 0;
    });
    if (battleActors.length > 0) {
        BattleFormationsManager.setBattlePartySize(battleActors.length);
    }
}

Window_CharacterSetup.prototype.selectSlot = function () {
    this._hasChanged = false;
    if (this._selectedIndex === -1) {
        this._selectedIndex = this.index();
    }
    else if (this._selectedIndex === this.index()) {
        this._selectedIndex = -1;
    }
    else {

        if (this.isBattleIndex(this._selectedIndex) || this.isBattleIndex(this.index())) {
            this._hasChanged = true;
        }

        var temp = this._data[this.index()];
        this._data[this.index()] = this._data[this._selectedIndex];
        this._data[this._selectedIndex] = temp;
        this.setPartySize();
        $gameParty.quickOrder(this.getActorIdArray());
        this._data = this.getActorsForData();
        this._selectedIndex = -1;
    };

    this.refresh();
    this.activate();
};

//=============================================================================
// Window_FormationShowRoom
//=============================================================================

function Window_FormationShowRoom() {
    this.initialize.apply(this, arguments);
}

Window_FormationShowRoom.prototype = Object.create(Window_Base.prototype);
Window_FormationShowRoom.prototype.constructor = Window_FormationShowRoom;

Window_FormationShowRoom.prototype.initialize = function (wWidth, wHeight) {
    var xStart = wWidth;
    var yStart = wHeight;

    this._windowWidth = Graphics.boxWidth - wWidth;
    this._windowHeight = Graphics.boxHeight - wHeight;

    this._windowXcenter = Math.floor(this._windowWidth / 2);
    this._windowYcenter = Math.floor(this._windowHeight / 2) + this.lineHeight() * 2;    

    Window_Selectable.prototype.initialize.call(this, xStart, yStart, this._windowWidth, this._windowHeight);

    this.refresh();
};

Window_FormationShowRoom.prototype.windowWidth = function() {
  return this._windowWidth;
};

Window_FormationShowRoom.prototype.windowHeight = function() {
  return this._windowHeight;
};

Window_FormationShowRoom.prototype.refresh = function () {
    var currentWindow = this;
    var lastNotLoadedImage = null;
    this._svImages = [];
    this._formationData = BattleFormationsManager.currentFormation() === null ? BattleFormationsManager.GetDefaultFormation() : BattleFormationsManager.currentFormation();

    this._data = $gameParty.battleMembers();
    for (var i = 0; i < BattleFormationsManager.getBattlePartySize(); i++) {
        this._svImages.push(ImageManager.loadSvActor(this._data[i].battlerName()));
        if (!this._svImages[i].isReady()) {
            lastNotLoadedImage = this._svImages[i];
        }
    };

    if (lastNotLoadedImage === null) {
        currentWindow.updateContent();
    } else {
        lastNotLoadedImage.addLoadListener(function () { currentWindow.updateContent(); });
    }
}

Window_FormationShowRoom.prototype.updateContent = function () {
    if (this.contents) {
        this.contents.clear();
        for (var i = 0; i < BattleFormationsManager.getBattlePartySize(); i++) {
            var position = BattleFormationsManager.GetActorPosition(i);
            var xPos = this._windowXcenter + position.Xpos;
            var yPos = this._windowYcenter + position.Ypos;

            var bitmap = this._svImages[i];
            var cw = bitmap.width / 9;
            var ch = bitmap.height / 6;
            this.contents.blt(bitmap, 0, 0, cw, ch, xPos - (cw / 2), yPos - (ch / 2));
            var numberText = "\\}" + (i + 1) + "\\{";
            this.drawTextEx(numberText, xPos + (cw / 2), yPos - (ch / 2));
        }
    }

    var formationText = this.convertEscapeCharacters(eval(this._formationData.Detail));

    this.drawTextEx(formationText, 0, 0);
}