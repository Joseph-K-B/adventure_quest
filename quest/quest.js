import quests from '../data/quest-data.js';
import findById from '../data/findbyId.js';
import { getPlayer, setPlayer } from '../data/storage-utils.js';
// import questScore from './score-quest.js';



const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const choices = document.getElementById('choice');

const quest = findById(quests, searchParams.get('questId'));


questTitle.textContent = quest.title;
questImage.src = `../${quest.image}`;
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

const questForm = document.getElementById('quest-form');
questForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const choiceForm = new FormData(questForm);
    const choiceValue = choiceForm.get('choice');
    const choiceData = findById(quest.choices, choiceValue);


    const user = getPlayer();
    user.gold += choiceData.gold;
    user.hp += choiceData.hp;
    user.completed[quest.id] = true;
    setPlayer(user);

    const backLink = document.getElementById('back-link');
    questDescription.textContent = choiceData.result;
    questForm.classList.add('hidden');
    backLink.classList.remove('hidden');

});