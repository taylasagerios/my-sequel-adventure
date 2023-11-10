const Character = require('./Character');
const Potion = require('./Potion');
const User = require('./User');
const CharacterPotion = require('./CharacterPotion');
const Monster = require('./Monster');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

Character.belongsToMany(Potion, {
  through: 'character_potion',
  foreignKey: 'character_id'
});

Potion.belongsToMany(Character, {
  through: 'character_potion',
  foreignKey: 'potion_id'
});

module.exports = { User, Character, Potion, CharacterPotion, Monster };