import quests from '../data/quest-data.js';

export function questsComplete(user){
    for (let quest of quests){
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}