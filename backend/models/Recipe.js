const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  time: { type: Number, required: true },
  servings: { type: Number, required: true },
  difficulty: { type: String, required: true },
  cuisine: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recipe", recipeSchema);
