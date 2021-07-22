import { getPlayer } from '../data/storage-utils.js';
import hpScore from './hp-score.js';
import goldScore from './gold-score.js';
import loadProfile from '../consistent/profile.js';
import { hpMessage, loseMessage, winMessage } from './messages.js';

loadProfile();

const user = getPlayer();

const display = document.getElementById('x');

const hpResult = hpScore(user.hp);
const goldResult = goldScore(user.gold);
const hpResults = hpMessage[hpResult];

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = loseMessage;
}
else {
    goldMessages = winMessage;
}

const goldMessage = goldMessages[goldResult];

let tale = 'Was it worth it?';
tale += user.name + ' the ' + user.class + ', ';
tale += hpMessage + ' and ' + goldMessage + '.';

display.textContent = tale;
