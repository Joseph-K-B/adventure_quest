function questScore(choice, questId, user) {
    user.hp += choice.hp;
    user.gold += choice.gold;
    user.completed[questId] = true;
}
export default questScore;