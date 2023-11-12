const { Monster } = require('../models');

const monsterData = [
  {
    id: 1,
    name: 'Goblin',
    hitpoints: 20,
    attack: 10,
    experience: 50,
    level: 1,
    gold: 15,
    description: 'A small and cunning creature.'
  },
  {
    id: 2,
    name: 'Orc',
    hitpoints: 40,
    attack: 20,
    experience: 100,
    level: 2,
    gold: 30,
    description: 'A fierce and brutish humanoid.'
  },
  {
    id: 3,
    name: 'Troll',
    hitpoints: 60,
    attack: 25,
    experience: 150,
    level: 3,
    gold: 45,
    description: 'A large and slow creature, regenerates health.'
  },
  {
    id: 4,
    name: 'Wraith',
    hitpoints: 30,
    attack: 15,
    experience: 120,
    level: 2,
    gold: 25,
    description: 'A ghostly figure, hard to hit.'
  },
  { 
    id: 5,
    name: 'Wyvern',
    hitpoints: 80,
    attack: 30,
    experience: 200,
    level: 4,
    gold: 60,
    description: 'A dragon-like creature, capable of flight.'
  },
  {
    id: 6,
    name: 'Giant Spider',
    hitpoints: 50,
    attack: 20,
    experience: 130,
    level: 3,
    gold: 40,
    description: 'A venomous creature with eight legs.'
  },
  {
    id: 7,
    name: 'Skeleton Warrior',
    hitpoints: 35,
    attack: 18,
    experience: 110,
    level: 2,
    gold: 28,
    description: 'An undead warrior, armed with a sword and shield.'
  },
  {
    id: 8,
    name: 'Necromancer',
    hitpoints: 45,
    attack: 22,
    experience: 160,
    level: 3,
    gold: 50,
    description: 'A dark sorcerer, can summon undead.'
  },
  {
    id: 9,
    name: 'Griffin',
    hitpoints: 70,
    attack: 28,
    experience: 180,
    level: 4,
    gold: 55,
    description: 'A majestic creature, half eagle, half lion.'
  },
  {
    id: 10,
    name: 'Fire Elemental',
    hitpoints: 55,
    attack: 30,
    experience: 170,
    level: 3,
    gold: 47,
    description: 'A being of pure fire, immune to heat.'
  }
];

const seedMonsters = async () => {
  try {
    // Bulk create the monsters
    const createdMonsters = await Monster.bulkCreate(monsterData);

    return createdMonsters;
  } catch (error) {
    console.error('Error seeding monsters:', error);
    throw error; // Rethrow the error for higher-level error handling, if needed.
  }
};

module.exports = seedMonsters;
