'use strict';

exports.BattlePokedex = {
	bittercold: {
		num: -339,
		species: "Cryogonal",
		types: ["Ice"],
		genderRatio: "N",
		baseStats: {hp: 115, atk: 45, def: 100, spa: 45, spd: 100, spe: 20},
		abilities: {0: "Color Change"},
		heightm: 73.5,
		weightkg: 246.5,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	gligar: {
		num: 207,
		species: "Gligar",
		types: ["Ground", "Flying"],
		baseStats: {hp: 155, atk: 75, def: 105, spa: 35, spd: 65, spe: 85},
		abilities: {0: "Hyper Cutter", 1: "Sand Veil", H: "Immunity"},
		heightm: 1.1,
		weightkg: 64.8,
		color: "Purple",
		evos: ["gliscor"],
		eggGroups: ["Bug"],
	},
	magnemite: {
		num: 81,
		species: "Magnemite",
		types: ["Electric", "Steel"],
		gender: "N",
		baseStats: {hp: 155, atk: 70, def: 115, spa: 130, spd: 90, spe: 60},
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Analytic"},
		heightm: 0.3,
		weightkg: 6,
		color: "Gray",
		evos: ["magneton"],
		eggGroups: ["Mineral"],
	},
	vulpix: {
		num: 37,
		species: "Vulpix",
		types: ["Fire"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 155, atk: 41, def: 40, spa: 50, spd: 65, spe: 65},
		abilities: {0: "Flash Fire", H: "Drought"},
		heightm: 0.6,
		weightkg: 9.9,
		color: "Brown",
		evos: ["ninetales"],
		eggGroups: ["Field"],
		otherFormes: ["vulpixalola"],
	},
	growlithe: {
		num: 58,
		species: "Growlithe",
		types: ["Fire"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 155, atk: 110, def: 80, spa: 100, spd: 80, spe: 95},
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
		heightm: 0.7,
		weightkg: 19,
		color: "Brown",
		evos: ["arcanine"],
		eggGroups: ["Field"],
	},
	pikachu: {
		num: 25,
		species: "Pikachu",
		types: ["Electric"],
		baseStats: {hp: 155, atk: 90, def: 55, spa: 90, spd: 80, spe: 110},
		abilities: {0: "Static", H: "Lightning Rod", S: "Pika Bond"},
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		prevo: "pichu",
		evos: ["raichu", "raichualola"],
		evoLevel: 1,
		eggGroups: ["Field", "Fairy"],
		otherFormes: ["pikachucosplay", "pikachurockstar", "pikachubelle", "pikachupopstar", "pikachuphd", "pikachulibre", "pikachuoriginal", "pikachuhoenn", "pikachusinnoh", "pikachuunova", "pikachukalos", "pikachualola"],
	},
};