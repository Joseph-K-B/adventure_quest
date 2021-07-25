import { getPlayer } from '../data/storage-utils.js';
import dead from './dead-player.js';

function loadProfile() {
    const name = document.getElementById('name');
    const classes = document.getElementById('class');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const user = getPlayer();

    if (!user) {
        window.location = './';
    }
    name.textContent = user.name;
    classes.src = '../assets/' + user.class + '.png';
    gold.textContent = user.gold;

    if (dead(user)) {
        hp.textContent = 'Hella Dead';
    }
    else {
        hp.textContent = user.hp;
    }
}

export default loadProfile;