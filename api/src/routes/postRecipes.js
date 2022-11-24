const { Router } = require("express");
const { Recipe, TypeDiet } = require("../db");

const router = Router();

router.post("/", async(req,res) => {
    let{ title, summary, healthscore, steps, diets, image } = req.body
    try {
        let recipeCreated = await Recipe.create({
            title,
            summary,
            healthscore,
            image,
            steps
        });
        
        const [typediet, created] = await TypeDiet.findOrCreate({
            where: {name: diets}
        });
        await recipeCreated.addTypeDiet(typediet)
        console.log(created)
        res.status(200).send(recipeCreated)
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = router;