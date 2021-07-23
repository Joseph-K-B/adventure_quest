import { setPlayer } from '../data/storage-utils.js';
import { createPlayer } from './add-user.js';

const playerForm = document.getElementById('player-form');

playerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(playerForm);
    const newPlayer = createPlayer(formData);
    setPlayer(newPlayer);
    window.location.replace('./map');
});