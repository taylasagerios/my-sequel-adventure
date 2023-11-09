// seed.js

const { sequelize } = require('../models');
const { User, Character, Potion, CharacterPotion } = require('../models');
const seedUser = require('./userData');
const seedCharacter = require('./characterData');
const seedPotions = require('./potionData');  // <-- You need to import potionData

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await seedUser();
  await seedCharacter(users);
  await seedPotions(); // Seed potions

  const characters = await Character.findAll();

  for (const potion of potionData) {  
    await CharacterPotion.create({
      active: true,
      character_id: characters[Math.floor(Math.random() * characters.length)].id,
      potion_id: potion.id,  //  the potion object has an 'id' property
    });
  }

  process.exit(0);
};

seedAll();
