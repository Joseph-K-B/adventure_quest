
import quests from '../data/quest-data.js';

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    const questLink = `../quest/?questId=${quest.id}`;
    console.log(questLink);
    const newLink = document.createElement('x');
    newLink.href = questLink;
    newLink.textContent = quest.title;
    questList.appendChild(newLink);
}