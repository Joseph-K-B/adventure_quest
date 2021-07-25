function hpScore(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 15) {
        return 'weak';
    }
    return 'healthy';
}

export default hpScore;