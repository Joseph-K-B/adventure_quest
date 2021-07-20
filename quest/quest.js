import quests from '../data/quest-data.js';
import findById from '../data/find-by-id.js';

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('questId'));
const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const choice = document.getElementById('choice');

const quest = findById(quests, searchParams.get('questId'));

questTitle.textContent = quest.title;
questImage.src = `..assets/quest/${quest.image}`;
questDescription.textContent = quest.description;

for (let pick of quest.choice){
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.name = 'choice';
    radio.type = 'radio';
    radio.value = pick.id;

    const span = document.createElement('span');
    span.textContent = pick.description;

    label.append(radio, span);
    choice.append(label);
}