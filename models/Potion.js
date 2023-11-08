const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Potion extends Model {};

Potion.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    potency: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'potion'
  }
);

module.exports = Potion;