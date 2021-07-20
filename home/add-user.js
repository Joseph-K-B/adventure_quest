export function createPlayer(formData){
    const newPlayer = {
        hp: 35,
        name: formData.get('name'),
        class: formData.get('class'),
        completed: {}
    };
    const key = 'gold';
    newPlayer[key] = 0;
    return newPlayer;
}