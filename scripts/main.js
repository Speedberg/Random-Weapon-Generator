window.onload = function () {
 if (localStorage.getItem("check") == null) {
 alert("FIRST TIME");
 localStorage.setItem("check", "True");
 invReset();
 }
 navReset();
 navKnight();
}

//NAVIGATION MENU
function navKnight() {
var navPage = document.getElementById("nav-knight").style.opacity;
if (navPage == 1) {
navReset();
document.getElementById("nav-knight").style.opacity = "0.5"; 
document.getElementById("div-knight").style.display = "block";
randKnightWeapon();
 }
}
function navArcher() {
var navPage = document.getElementById("nav-archer").style.opacity;
if (navPage == 1) {
navReset();
document.getElementById("nav-archer").style.opacity = "0.5"; 
document.getElementById("div-archer").style.display = "block";
randArcherWeapon();
 }
}
function navMage() {
}
function navInv() {
var navPage = document.getElementById("nav-inv").style.opacity;
if (navPage == 1) {
navReset();
document.getElementById("nav-inv").style.opacity = "0.5"; 
document.getElementById("div-inv").style.display = "block";
loadInv(1);
 }
}

function navReset() {
document.getElementById("nav-inv").style.opacity = "1"; 
document.getElementById("nav-knight").style.opacity = "1"; 
document.getElementById("nav-archer").style.opacity = "1"; 

document.getElementById("div-inv").style.display = "none";
document.getElementById("div-knight").style.display = "none";
document.getElementById("div-archer").style.display = "none";
}
//--NAGIVATION MENU END--

//INVENTORY SYSTEM

function loadInv(invPage) {

 var loadInvPos = (invPage - 1) * 15;

 var loadInvName = JSON.parse(localStorage.getItem("inventoryName"));
 var loadInvType = JSON.parse(localStorage.getItem("inventoryType"));
 var loadInvRarity = JSON.parse(localStorage.getItem("inventoryRarity"));
 var loadInvId = "";
 for (i = 1; i < 15; i++) {

  if (typeof loadInvName[loadInvPos + i] !== "undefined") {
  loadInvId = loadInvPos + i;
  loadInvDivId = "invTable" + loadInvId;
  loadInvImg = document.getElementById(loadInvDivId);
  loadInvImg.src = "images/" + loadInvType[loadInvPos + i] + "/" + loadInvRarity[loadInvPos + i] + "/" + loadInvName[loadInvPos + i] + ".png";
 // var test = "2,1";
 // var testArray = JSON.parse("[" + test + "]");
 // console.log("JSON TEST:" + testArray[0]);
  } else {
  console.log("null");
  }

 }

}
function invClear() {
 var inventoryRarity = ["unknown"];
 var inventoryName = ["unknown"];
 var inventoryType = ["unknown"];
 var inventoryStats = ["0,0,0,0"];
 var inventoryModifier1 = ["unknown"];
 var inventoryModifier2 = ["unknown"];
 var inventoryModifier3 = ["unknown"];

 localStorage.setItem("inventoryRarity", JSON.stringify(inventoryRarity));
 localStorage.setItem("inventoryName", JSON.stringify(inventoryName));
 localStorage.setItem("inventoryType", JSON.stringify(inventoryType));
 localStorage.setItem("inventoryStats", JSON.stringify(inventoryStats));
 localStorage.setItem("inventoryModifier1", JSON.stringify(inventoryModifier1));
 localStorage.setItem("inventoryModifier2", JSON.stringify(inventoryModifier2));
 localStorage.setItem("inventoryModifier3", JSON.stringify(inventoryModifier3));
}
function invClick(invClickNum) {
        var loadInvType = JSON.parse(localStorage.getItem("inventoryType"));
        var loadInvName = JSON.parse(localStorage.getItem("inventoryName"));
        var loadInvStats = JSON.parse(localStorage.getItem("inventoryStats"));
        var loadInvRarity = JSON.parse(localStorage.getItem("inventoryRarity"));
        var loadInvModifier1 = JSON.parse(localStorage.getItem("inventoryModifier1"));
        var loadInvModifier2 = JSON.parse(localStorage.getItem("inventoryModifier2"));
        var loadInvModifier3 = JSON.parse(localStorage.getItem("inventoryModifier3"));
        sessionStorage.setItem("invClickNum", invClickNum);
        loadInvMod1File = loadInvModifier1[invClickNum].split(",");
        loadInvMod2File = loadInvModifier2[invClickNum].split(",");
        loadInvMod3File = loadInvModifier3[invClickNum].split(",");
        console.log(loadInvModifier1[invClickNum])
        console.log(loadInvMod1File[0])
        console.log(loadInvMod1File[1])
        
        loadInvModImg1 = document.getElementById("inv-modifier-1");  
        loadInvModImg2 = document.getElementById("inv-modifier-2");  
        loadInvModImg3 = document.getElementById("inv-modifier-3");    

        if (loadInvMod1File[0] !== "empty modifier") {
        console.log(loadInvModImg1);
        loadInvModImg1.src = "images/Modifiers/" + loadInvMod1File[0] + "/" + loadInvMod1File[1] + ".png";
        } else {
        loadInvModImg1.src = "images/Modifiers/empty modifier.png";
        }

        if (loadInvMod2File[0] !== "empty modifier") {

        loadInvModImg2.src = "images/Modifiers/" + loadInvMod2File[0] + "/" + loadInvMod2File[1] + ".png";
        } else {
        loadInvModImg2.src = "images/Modifiers/empty modifier.png";
        }

        if (loadInvMod3File[0] !== "empty modifier") {
        loadInvModImg3.src = "images/Modifiers/" + loadInvMod3File[0] + "/" + loadInvMod3File[1] + ".png";
        } else {
        loadInvModImg3.src = "images/Modifiers/empty modifier.png";
        }

        loadInvStat = JSON.parse("[" + loadInvStats[invClickNum] + "]");
        loadInvImg = document.getElementById("inv-image");

        loadInvImg.src = "images/" + loadInvType[invClickNum] + "/" + loadInvRarity[invClickNum] + "/" + loadInvName[invClickNum] + ".png";
        document.getElementById('inv-name').innerHTML = capitalizeFirstLetter(loadInvRarity[invClickNum]) + " " + capitalizeFirstLetter(loadInvName[invClickNum]).replace(/-/g, ' ');
	document.getElementById('inv-stat1').innerHTML = "Damage: " + loadInvStat[0];
	document.getElementById('inv-stat2').innerHTML = "Accuracy: " + loadInvStat[1];
	document.getElementById('inv-stat3').innerHTML = "Critical Chance: " + loadInvStat[2] + " %";
	document.getElementById('inv-stat4').innerHTML = "Piercing: " + loadInvStat[3];
        modifierDescription("empty", "inv-modifier-tooltip", "inv-modifier-tooltip-name");
        
}
function invMod1() {
var invClickNum = sessionStorage.getItem("invClickNum");
var loadInvModifier1 = JSON.parse(localStorage.getItem("inventoryModifier1"));        
loadInvMod1File = loadInvModifier1[invClickNum].split(",");
document.getElementById('inv-modifier-tooltip-name').innerHTML = loadInvMod1File[1].charAt(0).toUpperCase() + loadInvMod1File[1].slice(1);
modifierDescription(loadInvMod1File[1], "inv-modifier-tooltip", "inv-modifier-tooltip-name");
}
function invMod2() {
var invClickNum = sessionStorage.getItem("invClickNum");
var loadInvModifier2 = JSON.parse(localStorage.getItem("inventoryModifier2"));        
loadInvMod2File = loadInvModifier2[invClickNum].split(",");
document.getElementById('inv-modifier-tooltip-name').innerHTML = loadInvMod2File[1].charAt(0).toUpperCase() + loadInvMod2File[1].slice(1);
modifierDescription(loadInvMod2File[1], "inv-modifier-tooltip", "inv-modifier-tooltip-name");
}
function invMod3() {
var invClickNum = sessionStorage.getItem("invClickNum");
var loadInvModifier3 = JSON.parse(localStorage.getItem("inventoryModifier3"));        
loadInvMod1File = loadInvModifier3[invClickNum].split(",");
document.getElementById('inv-modifier-tooltip-name').innerHTML = loadInvMod3File[1].charAt(0).toUpperCase() + loadInvMod3File[1].slice(1);
modifierDescription(loadInvMod3File[1], "inv-modifier-tooltip", "inv-modifier-tooltip-name");
}
function addToInv(addToInvType, addToInvName, addToInvRarity, addToInvStats, addToInvMod1, addToInvMod2, addToInvMod3) {

 inventoryRarity = JSON.parse(localStorage.getItem("inventoryRarity"));
 inventoryRarityL = inventoryRarity.length;
 inventoryRarity[inventoryRarityL] = addToInvRarity;
 console.log("Rarity:" + inventoryRarity);
 localStorage.setItem("inventoryRarity", JSON.stringify(inventoryRarity));

 inventoryName = JSON.parse(localStorage.getItem("inventoryName"));
 inventoryNameL = inventoryName.length;
 inventoryName[inventoryNameL] = addToInvName.replace(/\s/g , "-");
 console.log("Name:" + inventoryName);
 localStorage.setItem("inventoryName", JSON.stringify(inventoryName));

 inventoryType = JSON.parse(localStorage.getItem("inventoryType"));
 inventoryTypeL = inventoryType.length;
 inventoryType[inventoryTypeL] = addToInvType;
 console.log("Type:" + inventoryType);
 localStorage.setItem("inventoryType", JSON.stringify(inventoryType));

 inventoryStats = JSON.parse(localStorage.getItem("inventoryStats"));
 inventoryStatsL = inventoryStats.length;
 inventoryStats[inventoryStatsL] = addToInvStats;
 console.log("Stats:" + inventoryStats);
 localStorage.setItem("inventoryStats", JSON.stringify(inventoryStats));

 inventoryModifier1 = JSON.parse(localStorage.getItem("inventoryModifier1"));
 inventoryModifier1L = inventoryModifier1.length;
 inventoryModifier1[inventoryModifier1L] = addToInvMod1;
 localStorage.setItem("inventoryModifier1", JSON.stringify(inventoryModifier1));

 inventoryModifier2 = JSON.parse(localStorage.getItem("inventoryModifier2"));
 inventoryModifier2L = inventoryModifier2.length;
 inventoryModifier2[inventoryModifier2L] = addToInvMod2;
 localStorage.setItem("inventoryModifier2", JSON.stringify(inventoryModifier2));

 inventoryModifier3 = JSON.parse(localStorage.getItem("inventoryModifier3"));
 inventoryModifier3L = inventoryModifier3.length;
 inventoryModifier3[inventoryModifier3L] = addToInvMod3;
 localStorage.setItem("inventoryModifier3", JSON.stringify(inventoryModifier3));
}

function meleeAddToInv() {
addToInv(sessionStorage.getItem("tempType"), sessionStorage.getItem("tempName"), sessionStorage.getItem("tempRarity"), sessionStorage.getItem("tempStats"), sessionStorage.getItem("tempMod1"), sessionStorage.getItem("tempMod2"), sessionStorage.getItem("tempMod3"));
}

//--INVENTORY SYSTEM END--


//---------------------RANDOM LOOT----------------------------------


//------------KNIGHT--------------------------------
function randKnightWeapon() {

document.getElementById('modifier-tooltip-name').innerHTML = "Click on a modifier for it's tooltip!";

document.getElementById('modifier-tooltip').innerHTML = "";

modifierNames[0] = "Click on a modifier for it's tooltip.";

modifierNames[1] = "Click on a modifier for it's tooltip.";

modifierNames[2] = "Click on a modifier for it's tooltip.";


var weaponTypes = ["sword", "battle-axe", "relic-blade", "glaive", "halberd", "katana", "sai", "sharp-axe", "war-axe"];

//Modifiers
var modifiersElemental = ["flame", "ice bolt", "lightning", "frost burn"];
var modifiersGeneral = ["looting", "enrage", "extra-time", "overkill", "knockout", "strength", "strength-burst"];
var modifiersWeapons = ["dazzling", "disarmed", "enchanted", "jagged", "reinforced", "slash", "splitting", "swing", "vampire", "all-for-one", "assasin", "backstab", "dual-spin", "fencer", "power-smash", "rogue", "slash", "spin", "swipe"];
var modifierImg = "";
modifierImg = document.getElementById('modifier-1');
modifierImg.src = "images/Modifiers/empty modifier.png";
modifierImg = document.getElementById('modifier-2');
modifierImg.src = "images/Modifiers/empty modifier.png";
modifierImg = document.getElementById('modifier-3');
modifierImg.src = "images/Modifiers/empty modifier.png";
modifierNames = ["empty modifier", "empty modifier", "empty modifier"];

//Type
var weaponTypeId = randomIntFromInterval(1,9) - 1;
var weaponType = weaponTypes[weaponTypeId];
var rarityBonus = 0;
//Rarity--
var weaponRarity = randomIntFromInterval(1,60);
if (weaponRarity > 0 && weaponRarity < 21){
rarityBonus = 0;
weaponRarity = "Common";
} else if (weaponRarity > 20 && weaponRarity < 31){
rarityBonus = 10;
weaponRarity = "Uncommon";
} else if (weaponRarity > 30 && weaponRarity < 41){
rarityBonus = 20;
weaponRarity = "Rare";
} else if (weaponRarity > 40 && weaponRarity < 51){
rarityBonus = 30;
weaponRarity = "Epic";
} else if (weaponRarity > 50 && weaponRarity < 56){
rarityBonus = 40;
weaponRarity = "Legendary";
} else {
rarityBonus = 50;
weaponRarity = "Mystic";
}

//Stats--
var weaponDamage = rarityBonus + Math.ceil(Math.random() * 10);
var weaponAccuracy =  rarityBonus + Math.ceil(Math.random() * 10);
var weaponCrit =  rarityBonus + Math.ceil(Math.random() * 10);
var weaponPierce =  rarityBonus + Math.ceil(Math.random() * 10);
document.getElementById("weapon-damage").style.color = "White";
document.getElementById("weapon-accuracy").style.color = "White";
document.getElementById("weapon-crit").style.color = "White";
document.getElementById("weapon-pierce").style.color = "White";




//Image--
var weaponImg = document.getElementById('weapon-type');
weaponImg.src = "images/melee/" + weaponRarity + "/" + weaponType + ".png";
//Name--
weaponType = weaponType.replace(/-/g, " ");
console.log(weaponType);
document.getElementById('weapon-name').innerHTML = weaponRarity + " " + capitalizeFirstLetter(weaponType);

//Modifiers
var modifierChance = randomIntFromInterval(1,15) + rarityBonus;
if (modifierChance > 36) {
 if (rarityBonus == 50) {
 var modifierNum = 3;
} else if (rarityBonus == 40) {
  var modifierNum = 2;
} else if (rarityBonus == 30) {
 
var modifierNum = randomIntFromInterval(1, 2);

} else if (rarityBonus == 20) {

var modifierNum = 1;
}
 var modifiersShuffleWeapons = shuffle(modifiersWeapons);
 var modifiersShuffleGeneral = shuffle(modifiersGeneral);
 var modifiersShuffleElemental = shuffle(modifiersElemental);
 console.log(modifiersShuffleWeapons);
 console.log(modifiersShuffleGeneral);
 console.log(modifiersShuffleElemental);

 for (i=0;i<modifierNum;i++) {
  modifierId = "modifier-" + (i + 1)
  modifierImg = document.getElementById(modifierId);
  console.log(modifierImg);
  console.log("I:" +i + " ModifierID:" + modifierId);
   modifierType = randomIntFromInterval(1, 3);
   console.log("Modifier Type:" + modifierType);
   if (modifierType == 1) {
     modifierType = "Elemental";
     console.log(modifierType);
     modifierName = modifiersShuffleElemental[i + 1];
     console.log(modifierName);
    } else if (modifierType == 2) {
     modifierType = "General";
     console.log(modifierType);
     modifierName = modifiersShuffleGeneral[i + 1];
     console.log(modifierName);
   } else {
     modifierType = "Weapons";
     console.log(modifierType);
     modifierName = modifiersShuffleWeapons[i + 1];
     console.log(modifierName);
  }
     modifierNames[i] = modifierName;
     modifierImg.src = "images/Modifiers/" + modifierType + "/" + modifierName + ".png"; 
     
     modifierFileType[i] = modifierType; 
if (modifierName == "enchanted"){
 
weaponDamage = weaponDamage + randomIntFromInterval(5, 10);
 
document.getElementById("weapon-damage").style.color = "Yellow";
 
} else if (modifierName == "reinforced") {
 
weaponPierce = weaponPierce + randomIntFromInterval(5, 10);
 
document.getElementById("weapon-pierce").style.color = "Yellow";
 
} else if (modifierName == "slash") {

weaponAccuracy = weaponAccuracy + randomIntFromInterval(5, 10);

document.getElementById("weapon-accuracy").style.color = "Yellow";
 
} else if (modifierName == "splitting") {
 
weaponCrit = weaponCrit + randomIntFromInterval(5, 10);
 
document.getElementById("weapon-crit").style.color = "Yellow";
 
} else if (modifierName == "swing") {
 
weaponAccuracy = weaponAccuracy -  randomIntFromInterval(5, 10);

document.getElementById("weapon-accuracy").style.color = "Red";

weaponCrit = weaponCrit + randomIntFromInterval(5, 10);

document.getElementById("weapon-crit").style.color = "Yellow";  
  }
 }
}
 //Display
document.getElementById('weapon-damage').innerHTML = "Damage: " + weaponDamage;
document.getElementById('weapon-accuracy').innerHTML = "Accuracy: " + weaponAccuracy;
document.getElementById('weapon-crit').innerHTML = "Critical Chance: " + weaponCrit + " %";
document.getElementById('weapon-pierce').innerHTML = "Piercing: " + weaponPierce;
sessionStorage.setItem("tempStats", weaponDamage + "," + weaponAccuracy + "," + weaponCrit + "," + weaponPierce);
sessionStorage.setItem("tempName", weaponType);
sessionStorage.setItem("tempRarity", weaponRarity);
sessionStorage.setItem("tempType", "melee");
if (modifierNames[0] == "empty modifier") {
sessionStorage.setItem("tempMod1", "empty modifier");
} else {
sessionStorage.setItem("tempMod1", modifierFileType[0] + "," + modifierNames[0]);
}
if (modifierNames[1] == "empty modifier") {
sessionStorage.setItem("tempMod2", "empty modifier");
} else {
sessionStorage.setItem("tempMod2", modifierFileType[1] + "," + modifierNames[1]);
}
if (modifierNames[2] == "empty modifier") {
sessionStorage.setItem("tempMod3", "empty modifier");
} else {
sessionStorage.setItem("tempMod3", modifierFileType[2] + "," + modifierNames[2]);
}
console.log(modifierFileType[0] + "," + modifierNames[0])

console.log("end");
}
//Functions
function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//-------------------------------ARCHER RAND--------------------------------
function randArcherWeapon() {

document.getElementById('ranged-modifier-tooltip-name').innerHTML = "Click on a modifier for it's tooltip!";

document.getElementById('ranged-modifier-tooltip').innerHTML = "";

modifierNames[0] = "Click on a modifier for it's tooltip.";

modifierNames[1] = "Click on a modifier for it's tooltip.";

modifierNames[2] = "Click on a modifier for it's tooltip.";


var weaponTypes = ["crossbow", "bow", "heavy-bow", "light-bow"];

//Modifiers
var modifiersElemental = ["flame", "ice bolt", "lightning", "frost burn"];
var modifiersBow = ["double shot", "electric arrow", "flame arrow", "frozen arrow", "lucky shot", "poison arrow", "quick arrow"];
var modifierImg = "";
modifierImg = document.getElementById('ranged-modifier-1');
modifierImg.src = "images/Modifiers/empty modifier.png";
modifierImg = document.getElementById('ranged-modifier-2');
modifierImg.src = "images/Modifiers/empty modifier.png";
modifierImg = document.getElementById('ranged-modifier-3');
modifierImg.src = "images/Modifiers/empty modifier.png";

//Type
var weaponTypeId = randomIntFromInterval(1,4) - 1;
var weaponType = weaponTypes[weaponTypeId];
var rarityBonus = 0;

if (weaponType == "crossbow" || weaponType == "bow" || weaponType == "heavy-bow" || weaponType == "light-bow") {
 var rangedWeaponClass = "Bow";
} else {
 var rangedWeaponClass = "Ranged";
}

//Rarity--
var weaponRarity = randomIntFromInterval(1,60);
if (weaponRarity > 0 && weaponRarity < 21){
rarityBonus = 0;
weaponRarity = "Common";
} else if (weaponRarity > 20 && weaponRarity < 31){
rarityBonus = 10;
weaponRarity = "Uncommon";
} else if (weaponRarity > 30 && weaponRarity < 41){
rarityBonus = 20;
weaponRarity = "Rare";
} else if (weaponRarity > 40 && weaponRarity < 51){
rarityBonus = 30;
weaponRarity = "Epic";
} else if (weaponRarity > 50 && weaponRarity < 56){
rarityBonus = 40;
weaponRarity = "Legendary";
} else {
rarityBonus = 50;
weaponRarity = "Mystic";
}

//Stats--

var weaponDamage = rarityBonus + Math.ceil(Math.random() * 10);
var weaponAccuracy =  rarityBonus + Math.ceil(Math.random() * 10);
var weaponCrit =  rarityBonus + Math.ceil(Math.random() * 10);
var weaponPierce =  rarityBonus + Math.ceil(Math.random() * 10);


document.getElementById("ranged-damage").style.color = "White";

document.getElementById("ranged-accuracy").style.color = "White";

document.getElementById("ranged-crit").style.color = "White";

document.getElementById("ranged-pierce").style.color = "White";





//Image--
var weaponImg = document.getElementById('ranged-type');
weaponImg.src = "images/ranged/" + weaponRarity + "/" + weaponType + ".png";
//Name--
weaponType = weaponType.replace(/-/g, " ");
console.log(weaponType);
document.getElementById('ranged-name').innerHTML = weaponRarity + " " + capitalizeFirstLetter(weaponType);

//Modifiers
var modifierChance = randomIntFromInterval(1,15) + rarityBonus;
console.log("Modifier:" + modifierChance);
if (modifierChance > 36) {
 if (rarityBonus == 50) {
 var modifierNum = 3;
} else if (rarityBonus == 40) {
  var modifierNum = 2;
} else if (rarityBonus == 30) {
 var modifierNum = randomIntFromInterval(1, 2);
} else if (rarityBonus == 20) {
var modifierNum = 1;
}
 var modifiersShuffleBow = shuffle(modifiersBow);
 var modifiersShuffleElemental = shuffle(modifiersElemental);
 console.log(modifiersShuffleBow);
 console.log(modifiersShuffleElemental);
modifierNames = ["empty modifier", "empty modifier", "empty modifier"]
 for (i=0;i<modifierNum;i++) {
  modifierId = "ranged-modifier-" + (i + 1)
  modifierImg = document.getElementById(modifierId);
  console.log("I:" +i + " ModifierID:" + modifierId);
   modifierType = randomIntFromInterval(1, 2);
   console.log("Modifier Type:" + modifierType);
   if (modifierType == 1) {
     modifierType = "Elemental";
     console.log(modifierType);
     modifierName = modifiersShuffleElemental[i + 1];
     console.log(modifierName);
    } else if (modifierType == 2) {

     if (rangedWeaponClass == "Bow") {
     modifierType = "Bow";
     console.log(modifierType);
     modifierName = modifiersShuffleBow[i + 1];
     console.log(modifierName);

     } else {
     modifierType = "Elemental";
     console.log(modifierType);
     modifierName = modifiersShuffleElemental[i + 1];
     console.log(modifierName);
     }
  }
     modifierNames[i] = modifierName;
     modifierImg.src = "images/Modifiers/" + modifierType + "/" + modifierName + ".png"; 
      
if (modifierName == "lucky shot"){
 
weaponAccuracy = weaponAccuracy + randomIntFromInterval(10, 15);
 
document.getElementById("ranged-accuracy").style.color = "Yellow";
 
} else if (modifierName == "quick arrow"){
 
  weaponDamage = weaponDamage + randomIntFromInterval(5, 10);
 
document.getElementById("ranged-damage").style.color = "Yellow";
 
  }
 }
}
 //Display
document.getElementById('ranged-damage').innerHTML = "Damage: " + weaponDamage;
document.getElementById('ranged-accuracy').innerHTML = "Accuracy: " + weaponAccuracy;
document.getElementById('ranged-crit').innerHTML = "Critical Chance: " + weaponCrit + " %";
document.getElementById('ranged-pierce').innerHTML = "Piercing: " + weaponPierce;
//Functions
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
console.log("end");
}
//-------------------------------END-------------------


//---------------KNIGHT MODIFIERS--------------------------------
function modifier1tooltip() {
document.getElementById('modifier-tooltip-name').innerHTML = modifierNames[0].charAt(0).toUpperCase() + modifierNames[0].slice(1);
modifierDescription(modifierNames[0], "modifier-tooltip", "modifier-tooltip-name");

}

function modifier2tooltip() {
document.getElementById('modifier-tooltip-name').innerHTML = modifierNames[1].charAt(0).toUpperCase() + modifierNames[1].slice(1);
modifierDescription(modifierNames[1], "modifier-tooltip", "modifier-tooltip-name");
}

function modifier3tooltip() {
document.getElementById('modifier-tooltip-name').innerHTML = modifierNames[2].charAt(0).toUpperCase() + modifierNames[2].slice(1);
modifierDescription(modifierNames[2], "modifier-tooltip", "modifier-tooltip-name");
}

//------------------------------ARCHER MODIFIER--------------------------
function rangedmodifier1tooltip() {
document.getElementById('ranged-modifier-tooltip-name').innerHTML = modifierNames[0].charAt(0).toUpperCase() + modifierNames[0].slice(1);
modifierDescription(modifierNames[0], "ranged-modifier-tooltip", "ranged-modifier-tooltip-name")
}


function rangedmodifier2tooltip() {
document.getElementById('ranged-modifier-tooltip-name').innerHTML = modifierNames[1].charAt(0).toUpperCase() + modifierNames[1].slice(1);
modifierDescription(modifierNames[1], "ranged-modifier-tooltip", "ranged-modifier-tooltip-name")
}

function rangedmodifier3tooltip() {
document.getElementById('ranged-modifier-tooltip-name').innerHTML = modifierNames[2].charAt(0).toUpperCase() + modifierNames[2].slice(1);
modifierDescription(modifierNames[2], "ranged-modifier-tooltip", "ranged-modifier-tooltip-name")
}

function modifierDescription(modDescName, modTooltipName, modTooltip) {
console.log("MODIFIER DESCRIPTION MAKER");
console.log(modDescName);
console.log(modTooltipName);
console.log(modTooltip);
console.log("--END__");
if (modDescName == "flame") {
document.getElementById(modTooltipName).innerHTML = "The user sets <strong> enemies </strong>on fire when they attack them.";
} else if (modDescName == "ice bolt") {
document.getElementById(modTooltipName).innerHTML = "The user hurls bolts of ice at <strong>enemies</strong> when they attack them.";
} else if (modDescName == "lightning") {
document.getElementById(modTooltipName).innerHTML = "The user can strike lightning and electrocute <strong>enemies</strong> when they attack them.";
} else if (modDescName == "frost burn") {
document.getElementById(modTooltipName).innerHTML = "The user temporarily <strong>freezes enemies</strong> and sets them on <strong>fire</strong> when they attack them.";
} else if (modDescName == "double shot") {
document.getElementById(modTooltipName).innerHTML = "This bow shoots <strong>two</strong> arrows.";
} else if (modDescName == "electric arrow") {
document.getElementById(modTooltipName).innerHTML = "This bow electrocutes <strong>enemies</strong> when it hits them.";
} else if (modDescName == "flame arrow") {
document.getElementById(modTooltipName).innerHTML = "This bow sets <strong>enemies </strong>on fire when it hits them.";
} else if (modDescName == "frozen arrow") {
document.getElementById(modTooltipName).innerHTML = "This bow freezes <strong>enemies </strong>when it hits them.";
} else if (modDescName == "lucky shot") {
document.getElementById(modTooltipName).innerHTML = "This bow has increased <strong>accuracy</strong>.";
} else if (modDescName == "poison arrow") {
document.getElementById(modTooltipName).innerHTML = "This bow poisons <strong>enemies</strong>.";
} else if (modDescName == "quick arrow") {
document.getElementById(modTooltipName).innerHTML = "This bow has increased <strong>damage</strong>.";
}  else if (modDescName == "looting") {
document.getElementById(modTooltipName).innerHTML = "This weapon gains more <strong>coins</strong> when an <strong>enemy</strong> is defeated.";
} else if (modDescName == "dazzling") {
document.getElementById(modTooltipName).innerHTML = "This weapon stuns <strong>enemies</strong>.";
} else if (modDescName == "disarmed") {
document.getElementById(modTooltipName).innerHTML = "This weapon disarms <strong>enemies</strong>.";
} else if (modDescName == "enchanted") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>damage</strong>.";
} else if (modDescName == "jagged") {
document.getElementById(modTooltipName).innerHTML = "This weapon can easily cut <strong>enemies</strong>.";
} else if (modDescName == "reinforced") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>piercing</strong>.";
} else if (modDescName == "slash") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>accuracy</strong>.";
} else if (modDescName == "splitting") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>critical strike chance</strong>.";
} else if (modDescName == "swing") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>critical strike chance</strong> but decreased <strong>accuracy</strong>.";
} else if (modDescName == "vampire") {
document.getElementById(modTooltipName).innerHTML = "This weapon heals some of the users <strong>health</strong>.";
} else if (modDescName == "dual-wield") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>damage</strong> if the user holds <strong>two</strong> of them.";
} else if (modDescName == "all-for-one") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>damage</strong> if fellow <strong>teammates</strong> use this weapon as well.";
} else if (modDescName == "assasin") {
document.getElementById(modTooltipName).innerHTML = "This weapon can be thrown at <strong>enemies</strong>.";
} else if (modDescName == "power-smash") {
document.getElementById(modTooltipName).innerHTML = "This weapon deals large amounts of <strong>damage</strong> after being charged up.";
} else if (modDescName == "swipe") {
document.getElementById(modTooltipName).innerHTML = "This weapon can hit<strong> 2 enemies</strong> at once.";
} else if (modDescName == "backstab") {
document.getElementById(modTooltipName).innerHTML = "This weapon deals<strong> bonus damage</strong> on a <strong>critical hit</strong>.";
} else if (modDescName == "rogue") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>accuracy</strong>.";
} else if (modDescName == "dual-spin") {
document.getElementById(modTooltipName).innerHTML = "This weapon can hit <strong>multiple enemies</strong> at once if the user holds <strong>two</strong> of them.";
} else if (modDescName == "spin") {
document.getElementById(modTooltipName).innerHTML = "This weapon can hit <strong>multiple enemies</strong> at once.";
} else if (modDescName == "fencer") {
document.getElementById(modTooltipName).innerHTML = "This weapon has increased <strong>accuracy</strong> and <strong>piercing</strong>.";
} else if (modDescName == "enrage") {
document.getElementById(modTooltipName).innerHTML = "The user deals increased <strong>damage</strong> when the user is <strong>harmed</strong>.";
} else if (modDescName == "extra-time") {
document.getElementById(modTooltipName).innerHTML = "The user gains more <strong>coins</strong> when the user kills <strong>multiple enemies</strong> whithin a short space of time.";
} else if (modDescName == "overkill") {
document.getElementById(modTooltipName).innerHTML = "The user deals increased <strong>damage</strong> when the user kills <strong>multiple enemies</strong> within a short space of time.";
} else if (modDescName == "knockout") {
document.getElementById(modTooltipName).innerHTML = "The user can <strong>stun enemies</strong>.";
} else if (modDescName == "strength") {
document.getElementById(modTooltipName).innerHTML = "The user deals extra <strong>damage</strong> and has increased <strong>mobility</strong>.";
} else if (modDescName == "strength-burst") {
document.getElementById(modTooltipName).innerHTML = "The user temporarily deals extra <strong>damage</strong> and temporarily has increased <strong>mobility</strong> when they kill an enemy.";
} else {

document.getElementById(modTooltipName).innerHTML = "";

document.getElementById(modTooltip).innerHTML = "Click on a modifier for it's tooltip.";
}
}



console.log("SCRIPT END");