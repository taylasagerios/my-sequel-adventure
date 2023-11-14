  // seed.js

  const sequelize = require('../config/config');
  const { User, Character, Potion, CharacterPotion,Monster } = require('../models');
  const userData = require('./userData.json');
  const characterData = require('./characterData.json');
  const seedPotions = require('./potionData');  // <-- You need to import potionData
  const seedMonsters = require('./monsterData');

  const seedAll = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
    });

    await Character.bulkCreate(characterData);
    await seedMonsters();

    process.exit(0);
  };

  seedAll();
