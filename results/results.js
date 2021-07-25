import { getPlayer } from '../data/storage-utils.js';
import hpScore from './hp-score.js';
import goldScore from './gold-score.js';
import loadProfile from '../consistent/profile.js';
import { hpMessage, loseMessage, winMessage } from './messages.js';

loadProfile();

const player = getPlayer();
const deadOrAlive = document.getElementById('win-or-lose');
const display = document.getElementById('display');


const hpResult = hpScore(player.hp);
const goldResult = goldScore(player.gold);
const hpResultsText = hpMessage[hpResult];

let endText = null;
if (hpResult === 'dead') {
    endText = 'Better luck next time';
} else {
    endText = 'Fortune favors the bold!';
}

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = loseMessage;
}
else {
    goldMessages = winMessage;
}

const goldText = goldMessages[goldResult];

let tale = 'After your adventure ';
if (hpResult === 'dead') {
     
    tale += player.name + ' the ' + player.class + ', ';
    tale += hpResultsText + ' and ' + goldText + ' .';
} else {
    tale += player.name + ' the ' + player.class + ', ';
    tale += hpResultsText + '. ' + goldText + '.';
}
display.textContent = tale;
deadOrAlive.textContent = endText;