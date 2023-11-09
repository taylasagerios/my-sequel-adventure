const { CharacterPotion } = require('../models');
const sequelize = require('../config/config');

const characterPotionData = [
  {
    active: true,
    character_id: 1, // Replace with the actual character ID
    potion_id: 1,   // Replace with the actual potion ID
  },
  {
    active: true,
    character_id: 2, // Replace with the actual character ID
    potion_id: 2,   // Replace with the actual potion ID
  },
  // Add more character-potion data as needed
];

const seedCharacterPotions = async () => {
  await CharacterPotion.bulkCreate(characterPotionData);
};

seedCharacterPotions();
