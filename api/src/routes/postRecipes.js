const { Router } = require("express");
const { Recipe, TypeDiet } = require("../db");

const router = Router();

router.post("/", async(req,res) => {
    let{ name, summary, healthscore, steps, diets, image, dishtypes } = req.body
    try {
        let recipeCreated = await Recipe.create({
            name,
            summary,
            healthscore,
            image,
            steps,
            dishtypes
        });
        
        const typediet = await TypeDiet.findAll({
            where: {name: diets}
        });
        await recipeCreated.addTypeDiet(typediet)
        res.status(200).send(recipeCreated)
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = router;