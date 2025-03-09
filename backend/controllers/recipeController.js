const Recipe = require("../models/Recipe");

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({
      title: req.body.title,
      ingredients: req.body.ingredients,
      time: req.body.time,
      servings: req.body.servings,
      difficulty: req.body.difficulty,
      cuisine: req.body.cuisine,
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
