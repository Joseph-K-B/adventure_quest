const minotaur = {
    id: 'minotaur',
    title: "The Minotaur's labyrinth",
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `
        As you turn corner after corner, lost in a sea of walls, you hear a roar in the distance. 
        Clamouring and crashing the beast comes closer. You're survival is dependant on your next decision.
    `,
    choices: [{
        id: 'negotiate',
        description: 'Communication is key',
        result: `
            You've spoken to many bulls in the past. While this one may stand upright
            and weild a massive axe, you're confident you can talk your way out of this,
            especially considering all of your prior experience with your significant other. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Stand your ground',
        result: `
            The pen maybe mightier than the sword but you cant just write this 
            monster a best wishes letter. Go to battle and pray you brought something better
            than a dagger and your wits
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Head for the hypothetical hills',
        result: `
            You dont have to be faster than the Minotaur, merely your slowest companion.
        `,
        hp: -50,
        gold: 0
    }]
};

const medusa = {
    id: 'medusa',
    title: "Medusa's Lair",
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const cyclops = {
    id: 'cyclops',
    title: 'Island of the Cyclops',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    minotaur,
    medusa,
    cyclops
];

export default quests;