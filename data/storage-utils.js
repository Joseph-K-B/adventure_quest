const player = 'PLAYER';

export function getPlayer(){
    const playerString = localStorage.getItem(player);
    return JSON.parse(playerString);
}

export function setPlayer(playerObject){
    const playerString = JSON.stringify(playerObject);
    localStorage.setItem(player, playerString);
}