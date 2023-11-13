const { Monster } = require('../models');

const monsterData = [
  {
    id: 1,
    name: 'Shadowcloak',
    hitpoints: 20,
    attack: 10,
    experience: 50,
    level: 1,
    gold: 15,
    description:'An enigmatic figure that blends into the shadows. Its eyes gleam with ancient knowledge, and it moves with silent purpose. Few have seen it and even fewer have lived to tell the tale.'
 
  },
{
  id: 2,
  name: 'Nightbane Howler',
  hitpoints: 35,
  attack: 15,
  experience: 120,
  level: 3,
  gold: 25,
  description: 'A towering lycanthrope with muscles rippling beneath its dark fur, the Nightbane Howler dominates the night. When the moon is full, its howls can be heard for miles, paralyzing prey with primal fear.'
},
{
  id: 3,
  name: 'Abyssal Leviathan',
  hitpoints: 50,
  attack: 20,
  experience: 200,
  level: 5,
  gold: 50,
  description: 'Emerging from the darkest depths, the Abyssal Leviathan is a terror of the seas. Its scales are as hard as diamonds and its eyes glow like bioluminescent lanterns, guiding it through the underwater abyss to unleash havoc.'
},
 {
  id: 4,
  name: 'Specter of the Depths',
  hitpoints: 40,
  attack: 18,
  experience: 150,
  level: 4,
  gold: 30,
  description: 'The Specter of the Depths is a ghostly apparition, its form barely contained by this realm. It drifts silently through the ether, its tendrils reaching into the souls of the living, sapping their life force and leaving only the hollow echo of their last breath.'
},

{
  id: 5,
  name: 'Inferno Overlord',
  hitpoints: 60,
  attack: 25,
  experience: 300,
  level: 6,
  gold: 75,
  description: 'The Inferno Overlord is a creature born of fire and brimstone, reigning over the scorched realms where no mortal dares tread. Encased in lava-hardened carapace and wielding the power to summon flames at will, it stands as the ultimate challenge for any warrior.'
},
{
  id: 6,
  name: 'Molten Core Titan',
  hitpoints: 70,
  attack: 30,
  experience: 350,
  level: 7,
  gold: 100,
  description: 'Forged in the heart of a volcano, the Molten Core Titan is a behemoth of flame and stone. Its very presence warps the air with intense heat, and its touch sets the earth ablaze. Only the bravest of heroes dare challenge this fiery goliath.'
},
  {
  id: 7,
  name: 'Elderwood Sentinel',
  hitpoints: 80,
  attack: 22,
  experience: 400,
  level: 8,
  gold: 120,
  description: 'The Elderwood Sentinel stands as the venerable protector of the ancient forest. Its twisted bark is etched with the wisdom of the ages, and its limbs are home to countless creatures. With the power to command the very roots of the earth, it guards against all who would threaten the natural order.'
},

{
  id: 8,
  name: 'Celestial Serpent Emperor',
  hitpoints: 90,
  attack: 28,
  experience: 450,
  level: 9,
  gold: 150,
  description: 'The Celestial Serpent Emperor reigns supreme over the heavens, a divine dragon of wisdom and power. Its scales shimmer with the light of the stars, and its breath weaves the fabric of the cosmos. Encounters with this eternal guardian are said to be omens of great fortune and destiny.'
},
  {
  id: 9,
  name: 'Azuremane Warlord',
  hitpoints: 100,
  attack: 32,
  experience: 500,
  level: 10,
  gold: 200,
  description: 'The Azuremane Warlord is a legendary combatant, his mane as blue as the deepest ocean. Adorned with ancient runes and battle scars, he wields a crescent blade that hums with arcane energy. His roar alone is enough to shake the foundations of mountains and strike fear into the hearts of his foes.'
},
  {
    id: 10,
    name: 'Skysoar Guardian',
    hitpoints: 55,
    attack: 30,
    experience: 170,
    level: 3,
    gold: 47,
    description: 'Meet the Skysoar Guardian, a majestic eagle with wings that paint the sky with freedom. .'
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
