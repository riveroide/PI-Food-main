const { Router } = require("express");
const { Recipe } = require("../db");
const router = Router();

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Recipe.destroy({
    where: {
        id,
    },
    })
    .then(() => {
        res.send("Receta borrada");
    })
    .catch((error) => {
        return res.status(400).send("Deu errado");
    });
});

module.exports = router;