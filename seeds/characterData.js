const { Character } = require('../models');

const characterData = [
  {
    name: 'Character 1',
    hitpoints: 100,
    attack: 10,
    // you can other properties if you need
  },
  {
    name: 'Character 2',
    hitpoints: 80,
    attack: 12,
   
    // you can other properties if you need
  },
  // also here
];

const seedCharacters = async () => {
  await Character.bulkCreate(characterData);
};

seedCharacters();