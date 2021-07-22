function goldScore(gold){
    if (gold === 0) {
        return 'broke as a joke';
    }
    else if (gold < 50) {
        return 'middleClass';
    }
    return 'hood-rich';
}

export default goldScore;