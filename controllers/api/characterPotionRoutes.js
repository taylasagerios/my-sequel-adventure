const express = require("express");
const router = express.Router();
const { Character, CharacterPotion, Potion } = require("../../models");

// Middleware to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "An error occurred" });
};

// Create a new character-portion interaction
router.post("/character-portion", async (req, res) => {
  try {
    const { characterId, portionId, action } = req.body;

    // Check if the character and portion exist in the database
    const character = await Character.findByPk(characterId);
    const portion = await Potion.findByPk(portionId);

    if (!character || !portion) {
      return res.status(404).json({ error: "Character or portion not found" });
    }

    // Create a new character-portion interaction record
    const newInteraction = await CharacterPotion.create({
      character_id: characterId,
      potion_id: portionId,
      action,
    });
    res.status(201).json(newInteraction);
  } catch (error) {
    handleError(res, error);
  }
});

// Get all character-portion interactions
router.get("/character-portion", async (req, res) => {
  try {
    const interactions = await CharacterPotion.findAll();
    res.json(interactions);
  } catch (error) {
    handleError(res, error);
  }
});

// Get character-portion interactions for a specific character or portion
router.get("/character-portion/:characterId/:portionId", async (req, res) => {
  const characterId = req.params.characterId;
  const portionId = req.params.portionId;

  try {
    const interactions = await CharacterPotion.findAll({
      where: { character_id: characterId, potion_id: portionId },
    });
    res.json(interactions);
  } catch (error) {
    handleError(res, error);
  }
});

// Delete a character-portion interaction by ID
router.delete("/character-portion/:id", async (req, res) => {
  const interactionId = req.params.id;
  try {
    const deletedInteraction = await CharacterPotion.destroy({
      where: { id: interactionId },
    });
    if (deletedInteraction === 1) {
      res.json({ message: "Character-portion interaction deleted successfully" });
    } else {
      res.status(404).json({ error: "Character-portion interaction not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;
