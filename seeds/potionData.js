// potionData.js

const { Potion } = require('../models');

const potionData = [
  {
    name: 'Healing Potion',
    potency: 20,
  },
  {
    name: 'Strength Potion',
    potency: 15,
  },
  // Add more potion data as needed
];

const seedPotions = async () => {
  await Potion.bulkCreate(potionData);
};

module.exports = seedPotions;
