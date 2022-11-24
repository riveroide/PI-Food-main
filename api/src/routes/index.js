const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipeRoute = require("./getRecipes.js");
const postRecipeRoute = require("./postRecipes.js");
const getDietRoute = require("./getDiets.js");
const deleteRecipeRoute = require("./deleteRecipes");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/diets", getDietRoute);
router.use("/recipes", getRecipeRoute);
router.use("/recipes", postRecipeRoute);
router.use("/recipes", deleteRecipeRoute);

module.exports = router;
