'use strict';

/************************************************
 * Sentence Game by fender and AuraStormLucario *
 ************************************************/
const badEndings = ['the', 'and', 'a', 'an', 'or', 'with', 'to'];

function cleanWord(word) {
	let reg = /[^a-zA-Z0-9 :]/g;
	let clean = Chat.escapeHTML(word);
	if (reg.test(word)) {
		return false;
	} else {
		return clean;
	}
}

function endDisplay(arr) {
	let result = arr.join(' ');
	let display = '<div class="sentence-container"><font size="4">The Sentence has been finished!<br />"<i>' + result + '.</i>"</font></div>';
	return display;
}

exports.commands = {
	newsentence: 'sentence',
	sentence: function (target, room, user) {
		if (!this.can('lock', null, room)) return this.errorReply("/sentence - Access denied.");
		if (room.id === 'lobby') return this.errorReply("This command cannot be used in Lobby.");
		if (room.sentence) return this.errorReply("There is already a sentence game in this room.");
		if (room.battle) return this.errorReply("You cannot play sentence game in battle rooms.");
		if (!target) return this.errorReply("You must specify a sentence length.");
		if (target === 'help') return this.parse('/help sentence');

		let length = Math.floor(Number(target));
		if (isNaN(length)) return this.errorReply("The length must be a number.");
		if (length > 15 || length < 2) return this.errorReply("The sentence cannot be this long.");

		room.sentence = {};
		room.sentence.size = length;
		room.sentence.result = [];
		room.sentence.lastUser = '';
		room.addRaw('<div class="sentence-container"><font size="4">A Sentence Game has been started!<br />The sentence will be <font color="red">' + target + '</font> words long.</font></div>');
	},

	aw: 'addword',
	addword: function (target, room, user) {
		if (!room.sentence) return this.errorReply("There is not a sentence game in this room.");
		if (!target) return this.errorReply("You must specify a word to add.");
		if (target.length > 16) return this.errorReply("Your word should not be longer than 16 characters.");
		if (target.indexOf(" ") > -1) return this.errorReply("Your word should not include spaces.");
		if (room.sentence.lastUser === user.userid) return this.errorReply("You just gave the previous word. Give someone else a turn!");

		let word = cleanWord(target);
		if (word === false) return this.errorReply("The word must contain only alpha characters.");
		if (room.sentence.result.length === room.sentence.size - 1 && badEndings.indexOf(word) > -1) return this.errorReply("Nobody wants the sentence to end with '" + word + "'.");
		room.sentence.result.push(word);

		room.addRaw('<div class="sentence-container"><font size="3"><i>' + user + '</i> has added the word "<font color="red">' + word + '</font>" to the sentence.</font></div>');

		if (room.sentence.result.length === room.sentence.size) {
			let end = endDisplay(room.sentence.result);
			room.addRaw(end);
			delete room.sentence;
			return;
		} else {
			room.sentence.lastUser = user.userid;
		}
	},

	endsentence: function (target, room, user) {
		if (!this.can('lock', null, room)) return this.errorReply("/endsentence - Access denied.");
		if (!room.sentence) return this.errorReply("There is not a sentence game in this room.");
		delete room.sentence;
		room.addRaw('<div class="sentence-container"><font size="3">The Sentence Game was ended by <i>' + user + '</i>.</font></div>');
	},

	sentencehelp: ["- /sentence [length] - Begins a game of sentence game.",
		"- /addword [word] - Adds a word to the sentence.",
		"- /endsentence - Ends sentence game."],
};