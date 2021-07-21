const minotaur = {
    id: 'minotaur',
    title: "The Minotaur's Labyrinth",
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'assets/quests/minotaur_asset_2.png',
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
        hp: -15,
        gold: 50
    }, {
        id: 'run',
        description: 'Head for the hypothetical hills',
        result: `
            You dont have to be faster than the Minotaur, merely your slowest companion.
        `,
        hp: 0,
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
    image: 'assets/quests/medusa_asset.jpeg',
    description: `
       While exploring a cavern off the coast of the Aegean Sea, you stumble upon a statue.
       Peculiar to find such amazing craftsmanship in the depths of a hole in the ground.
       After pressing forward you pass by dozens of statues. Something isn't right, but you're
       not sure what.
    `, 
    choices: [{
        id: 'investigate',
        description: 'Delve further into the cavern to satisfy your curiosity',
        result: `
            You continue forward to find a pile of treasure in the depths of the cavern.
            While collecting your find you here a a crash. Out of the corner of your eye
            there appears to be someone in here with you. You call out and turn in their direction.
            You've joined the hall of statues. 
        `,
        hp: -35,
        gold: 0
    }, {
        id: 'leave',
        description: 'Leave',
        result: `
            Something's off and you can feel it in your gut. Maybe its the statues,
            maybe its hypoxia. It's probably best to turn around now. Upon this notion
            you act galantly and run for the light.
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'read',
        description: 'Research is Key',
        result: `
            As an avid reader you just so happen to be carrying a book on legends and myths.
            You recall a certain chapter that reminds you of your current predicament.
            Using the index you track down the legend of the medusa. Using your wits you utilize
            your compact makeup mirror to behead the creature and the loot is yours.
        `,
        hp: -10,
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
    image: 'assets/quests/cyclops_asset.png',
    audio: 'y',
    action: 'z',
    description: `
        You find a small island after weeks at sea It looks large enough to have fresh water and maybe some food to resupply for your voyage.
        You decide to land and scout the region, Shortly after heading into the brush theres a large clearing with a beautiful pool of fresh water.
        While refilling your canteen a thunderous crash is heard from close by. Upon veering in that direction you see a 15 foot tall ogre with one eye glaring
        in your direction.
    `,
    choices: [{
        id: 'fight',
        description: 'Stand your ground',
        result: `You remember reading in a pamphlet that Cyclops are more afraid of you than you are of them. 
        Try to make yourself appear larger and yell. Instant death`,
        hp: -35,
        gold: 0
    }, {
        id: 'run',
        description: 'Flee you fools',
        result: `You narrowly escape the swing of his club and race into the brush. 
        Off to sea, its common knowledge that cyclops cant swim`,
        hp: -5,
        gold: 0
    }, {
        id: 'charm',
        description: 'Lay on the charm',
        result: `Despite popular belief, cyclops are actually very sensitive creatures. 
        After spending a few hours working through some trauma and self-consiousness 
        the beast is so grateful it offers you a reward`,
        hp: 35,
        gold: 50
    }]
};

const quests = [
    minotaur,
    medusa,
    cyclops
];

export default quests;