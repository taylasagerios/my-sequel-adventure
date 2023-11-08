const User = require("./userRoutes");
const Character = require("./characterRoutes");
const CharacterPotion = require("./characterPotionRoutes");
const Potion = require("./potionRoutes");

User.hasMany(Character, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Character.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(CharacterPotion , {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

CharacterPotion .belongsTo(User, {
    foreignKey: "user_id",
});

CharacterPotion .belongsTo(Character, {
    foreignKey: "blogPost_id",
    onDelete: "CASCADE",
});

Potion.belongsTo(User, {
    foreignKey: "user_id",
});

Potion.belongsTo(Character, {
    foreignKey: "blogPost_id",
    onDelete: "CASCADE",
});

Character.hasMany(CharacterPotion , {
    foreignKey: "blogPost_id",
    onDelete: "CASCADE",
});

module.exports = { User, Character, CharacterPotion,Potion };