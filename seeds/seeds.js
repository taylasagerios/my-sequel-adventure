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

    // const users = await User.findAll();
    await Character.bulkCreate(characterData);
    // await seedPotions(); // Seed potions

    // const characters = await Character.findAll();

    // for (const potion of potionData) {  
    //   await CharacterPotion.create({
    //     active: true,
    //     character_id: characters[Math.floor(Math.random() * characters.length)].id,
    //     potion_id: potion.id,  //  the potion object has an 'id' property
    //   });
    // }
     await seedMonsters();

    process.exit(0);
  };

  seedAll();
