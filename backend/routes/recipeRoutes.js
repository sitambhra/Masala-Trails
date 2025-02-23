const express = require("express");
const { createRecipe, getAllRecipes } = require("../controllers/recipeController");

const router = express.Router();

// Create a new recipe (POST)
router.post("/submit", createRecipe);

// Fetch all recipes (GET)
router.get("/all", getAllRecipes);

module.exports = router;
