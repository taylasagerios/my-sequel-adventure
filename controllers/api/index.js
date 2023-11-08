const router = require("express").Router();
const User = require("./userRoutes");
const Character = require("./characterRoutes");
const CharacterPotion = require("./characterPotionRoutes");
const Potion = require("./potionRoutes");

router.use("/users", User);
router.use("/character", Character);
router.use("/characterPotion", CharacterPotion);
router.use("/potion", Potion);

module.exports = router;