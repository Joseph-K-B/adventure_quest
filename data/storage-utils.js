const USER = 'USER';

export function getPlayer(){
    const playerString = localStorage.getItem(USER);
    return JSON.parse(playerString);
}


export function setPlayer(playerObject){
    console.log(playerObject);
    const playerString = JSON.stringify(playerObject);
    localStorage.setItem(USER, playerString);
}