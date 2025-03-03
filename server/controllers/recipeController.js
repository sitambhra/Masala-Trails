import Recipe from "../models/Recipe.js";

// @desc  Submit a new recipe
// @route POST /api/recipes
// @access Public
export const createRecipe = async (req, res) => {
  try {
    const { name, description, cookingTime, servings, difficulty } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !description || !cookingTime || !servings || !difficulty || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRecipe = new Recipe({
      name,
      description, // Convert comma-separated string to array
      cookingTime,
      servings,
      difficulty,
      image,
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe submitted successfully", recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// @desc  Get all recipes
// @route GET /api/recipes
// @access Public
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a recipe by ID
export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted successfully", deletedRecipe });
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe", error });
  }
};