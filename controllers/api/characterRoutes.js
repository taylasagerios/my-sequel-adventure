const express = require('express');
const router = express.Router();
const { Character } = require('../../models');

// Middleware to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: 'An error occurred' });
};

// Create a new character
router.post('/characters', async (req, res) => {
  try {
    const { name, hitpoints, attack, experience, level, gold, portrait, user_id } = req.body;
    const newCharacter = await Character.create({
      name,
      hitpoints,
      attack,
      experience,
      level,
      gold,
      portrait,
      user_id,
    });
    res.status(201).json(newCharacter);
  } catch (error) {
    handleError(res, error);
  }
});

// Get all characters
router.get('/characters', async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    handleError(res, error);
  }
});

// Get a specific character by ID
router.get('/characters/:id', async (req, res) => {
  const characterId = req.params.id;
  try {
    const character = await Character.findByPk(characterId);
    if (character) {
      res.json(character);
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
});

// Update a character by ID
router.put('/characters/:id', async (req, res) => {
  const characterId = req.params.id;
  try {
    const [updatedCount] = await Character.update(req.body, {
      where: { id: characterId },
    });
    if (updatedCount === 1) {
      res.json({ message: 'Character updated successfully' });
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
});

// Delete a character by ID
router.delete('/characters/:id', async (req, res) => {
  const characterId = req.params.id;
  try {
    const deletedCount = await Character.destroy({
      where: { id: characterId },
    });
    if (deletedCount === 1) {
      res.json({ message: 'Character deleted successfully' });
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;
