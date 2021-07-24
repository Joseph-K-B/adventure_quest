import { getPlayer } from '../data/storage-utils.js';

function loadProfile() {
    const name = document.getElementById('name');
    const classes = document.getElementById('class');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const player = getPlayer();

    if (!player) {
        window.location = './';
    }

    name.textContent = player.name;
    classes.src = '../assets/' + player.class + '.png';
    gold.textContent = player.gold;
    hp.textContent = player.hp;
}

export default loadProfile;