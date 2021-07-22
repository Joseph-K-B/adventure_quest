function hpScore(hp) {
    if (hp <= 0) {
        return 'In the end, death comes for us all';
    }
    if (hp < 15) {
        return 'survival is our strongest instinct';
    }
    return 'alive and well as they say';
}

export default hpScore;