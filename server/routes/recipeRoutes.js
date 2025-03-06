import express from "express";
import { uploadFiles } from "../middlewares/uploadMiddleware.js";
import { createRecipe, getRecipes,deleteRecipe } from "../controllers/recipeController.js";

const router = express.Router();

router.post("/", uploadFiles, createRecipe);
router.get("/get", getRecipes);
// Route to delete a recipe
router.delete("/delete/:id", deleteRecipe);

export default router;
