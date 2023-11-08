const express = require("express");
const router = express.Router();
const { Potion } = require("../../models");

// Middleware to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "An error occurred" });
};

// Create a new portion (potion)
router.post("/portions", async (req, res) => {
  try {
    const { name, potency } = req.body;
    const newPortion = await Potion.create({ name, potency });
    res.status(201).json(newPortion);
  } catch (error) {
    handleError(res, error);
  }
});

// Get all portions (potions)
router.get("/portions", async (req, res) => {
  try {
    const portions = await Potion.findAll();
    res.json(portions);
  } catch (error) {
    handleError(res, error);
  }
});

// Get a specific portion (potion) by ID
router.get("/portions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const portion = await Potion.findByPk(portionId);
    if (portion) {
      res.json(portion);
    } else {
      res.status(404).json({ error: "Portion not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
});

// Update a portion (potion) by ID
router.put("/portions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const [updatedCount] = await Potion.update(req.body, {
      where: { id: portionId },
    });
    if (updatedCount === 1) {
      res.json({ message: "Portion updated successfully" });
    } else {
      res.status(404).json({ error: "Portion not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
});

// Delete a portion (potion) by ID
router.delete("/portions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const deletedCount = await Potion.destroy({
      where: { id: portionId },
    });
    if (deletedCount === 1) {
      res.json({ message: "Portion deleted successfully" });
    } else {
      res.status(404).json({ error: "Portion not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;
