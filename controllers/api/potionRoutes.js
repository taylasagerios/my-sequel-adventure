const router = require("express").Router();
const { Portion } = require("../../models");

// Create a new portion
router.post("/portions", async (req, res) => {
  try {
    const { name, type, value } = req.body;
    const newPortion = await Portion.create({ name, type, value });
    res.status(201).json(newPortion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create a new portion" });
  }
});

// Get all portions
router.get("/portions", async (req, res) => {
  try {
    const portions = await Portion.findAll();
    res.json(portions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve portions" });
  }
});

// Get a specific portion by ID
router.get("/portions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const portion = await Portion.findByPk(portionId);
    if (portion) {
      res.json(portion);
    } else {
      res.status(404).json({ error: "Portion not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve the portion" });
  }
});

// Update a portion by ID
router.put("/portions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const updatedPortion = await Portion.update(req.body, {
      where: { id: portionId },
    });
    if (updatedPortion[0] === 1) {
      res.json({ message: "Portion updated successfully" });
    } else {
      res.status(404).json({ error: "Portion not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update the portion" });
  }
});

// Delete a portion by ID
router.delete("/portions/:id", async (req, res) => {
  const portionId = req.params.id;
  try {
    const deletedPortion = await Portion.destroy({
      where: { id: portionId },
    });
    if (deletedPortion === 1) {
      res.json({ message: "Portion deleted successfully" });
    } else {
      res.status(404).json({ error: "Portion not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete the portion" });
  }
});

module.exports = router;
