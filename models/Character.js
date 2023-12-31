const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Character extends Model {};

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hitpoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 9
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    gold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    hair_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'yellow'
    },
    face_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'blue'
    },
    shirt_color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'green'
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character'
  }
);

module.exports = Character;