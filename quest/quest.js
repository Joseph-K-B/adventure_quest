import quests from '../data/quest-data.js';
import findById from '../data/findbyId.js';
// import { getPlayer, setPlayer } from '../data/storage-utils.js';


const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const choices = document.getElementById('choice');

const quest = findById(quests, searchParams.get('questId'));
console.log(quest);

questTitle.textContent = quest.title;
questImage.src = `..assets/quests/${quest.image}`;
questDescription.textContent = quest.description;

for (let choice of quest.choices){
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.name = 'choice';
    radio.type = 'radio';
    radio.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;

    label.append(radio, span);
    choices.append(label);
}