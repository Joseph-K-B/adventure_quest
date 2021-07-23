import { getPlayer } from '../data/storage-utils.js';


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
    classes.src = '../assets/classes/' + user.class + '.png';
    gold.textContent = user.gold;
    hp.textContent = user.hp;
}

export default loadProfile;