const PLAYER = 'PLAYER';

export function getPlayer(){
    const playerString = localStorage.getItem(PLAYER);
    return JSON.parse(playerString);
}

export function setPlayer(playerObject){
    const playerString = JSON.stringify(playerObject);
    localStorage.setItem(PLAYER, playerString);
}