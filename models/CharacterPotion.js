const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class CharacterPotion extends Model {};

CharacterPotion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    character_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Character',
        key: 'id'
      }
    },
    potion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Potion',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character_potion'
  }
);

module.exports = CharacterPotion;