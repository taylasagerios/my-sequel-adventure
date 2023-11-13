const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Monster extends Model {};

Monster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
     
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hitpoints: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false
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
   description: {
  type: DataTypes.TEXT,
  allowNull: false,
}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'monster'
  }
);

module.exports = Monster;