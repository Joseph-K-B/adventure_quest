
import quests from '../data/quest-data.js';
import { getPlayer } from '../data/storage-utils.js';
import { questsComplete } from './quest-completed.js';
const user = getPlayer();

if (user.hp <= 0 || questsComplete(user)){
    window.location.replace('../results');
}

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    if (user.completed[quest.id]){
        createSpan(quest);
    } else {
        createLink(quest);
    }


}

function createSpan(quest){
    const span = document.createElement('span');
    span.innerText = `${quest.title} Conquered!`;
    questList.appendChild(span);
}

function createLink(quest){
    const questLink = `..quest/?questId=${quest.id}`;
    const newLink = document.createElement('a');
    newLink.href = questLink;
    newLink.textContent = quest.title;
    questList.appendChild(newLink);
}