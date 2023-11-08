const router = require("express").Router();
const { Character } = require("../../models");

// Create a new character
router.post("/characters", async (req, res) => {
  try {
    const { name, health, attack, defense } = req.body;
    const newCharacter = await Character.create({ name, health, attack, defense });
    res.status(201).json(newCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create a new character" });
  }
});

// Get all characters
router.get("/characters", async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve characters" });
  }
});

// Get a specific character by ID
router.get("/characters/:id", async (req, res) => {
  const characterId = req.params.id;
  try {
    const character = await Character.findByPk(characterId);
    if (character) {
      res.json(character);
    } else {
      res.status(404).json({ error: "Character not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve the character" });
  }
});

// Update a character by ID
router.put("/characters/:id", async (req, res) => {
  const characterId = req.params.id;
  try {
    const updatedCharacter = await Character.update(req.body, {
      where: { id: characterId },
    });
    if (updatedCharacter[0] === 1) {
      res.json({ message: "Character updated successfully" });
    } else {
      res.status(404).json({ error: "Character not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update the character" });
  }
});

// Delete a character by ID
router.delete("/characters/:id", async (req, res) => {
  const characterId = req.params.id;
  try {
    const deletedCharacter = await Character.destroy({
      where: { id: characterId },
    });
    if (deletedCharacter === 1) {
      res.json({ message: "Character deleted successfully" });
    } else {
      res.status(404).json({ error: "Character not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete the character" });
  }
});

module.exports = router;
