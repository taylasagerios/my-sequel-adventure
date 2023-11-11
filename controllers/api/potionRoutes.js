const express = require("express");
const router = express.Router();
const { Potion } = require("../../models");

// Middleware to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "An error occurred" });
};

// Create a new Potion (potion)
router.post("/potions", async (req, res) => {
  try {
    const { name, potency } = req.body;
    const newPortion = await Potion.create({ name, potency });
    res.status(201).json(newPortion);
  } catch (error) {
    handleError(res, error);
  }
});

// Get all potions (potions)
router.get("/potions", async (req, res) => {
  try {
    const potions = await Potion.findAll();
    res.json(potions);
  } catch (error) {
    handleError(res, error);
  }
});

// Get a specific Potion (potion) by ID
router.get("/potions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const Potion = await Potion.findByPk(portionId);
    if (Potion) {
      res.json(Potion);
    } else {
      res.status(404).json({ error: "Potion not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
});

// Update a Potion (potion) by ID
router.put("/potions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const [updatedCount] = await Potion.update(req.body, {
      where: { id: portionId },
    });
    if (updatedCount === 1) {
      res.json({ message: "Potion updated successfully" });
    } else {
      res.status(404).json({ error: "Potion not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
});

// Delete a Potion (potion) by ID
router.delete("/potions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const deletedCount = await Potion.destroy({
      where: { id: portionId },
    });
    if (deletedCount === 1) {
      res.json({ message: "Potion deleted successfully" });
    } else {
      res.status(404).json({ error: "Potion not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;
