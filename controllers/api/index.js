const router = require("express").Router();
const User = require("./userRoutes");
const Character = require("./characterRoutes");
const CharacterPotion = require("./characterPotionRoutes");
const Potion = require("./potionRoutes");

router.use("/users", userRoutes);
router.use("/character", characterRoutes);
router.use("/characterPotion", characterPotionRoutes);
router.use("/potion", potionRoutes);

module.exports = router;