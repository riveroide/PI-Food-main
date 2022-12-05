require('dotenv').config();
const axios = require('axios');

const { YOUR_API_KEY } = process.env;
const {Recipe,TypeDiet} = require('../db');
 //https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10
 // f188937f0770482b9aac299da45f2db3
// eacb151e3f7f437fbc9369e29631e0c3

// https://api.spoonacular.com/recipes/complexSearch?apiKey=eacb151e3f7f437fbc9369e29631e0c3&addRecipeInformation=true&number=10

//https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5
const getApiInfo = async () => {
    
    try {
        const apiUrl= await axios({
            method: 'get',
            url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=eacb151e3f7f437fbc9369e29631e0c3&addRecipeInformation=true&number=100 `,
            headers: {"Accept-Encoding": "null"}
        })
        console.log(apiUrl.data.results)
        
        const apiInfo = await apiUrl.data.results?.map((e) =>{
            return{
                id: e.id,
                name: e.title,
                summary: e.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
                healthscore: e.healthScore,
                image: e.image,
                diets: e.diets,
                dishtypes: e.dishTypes,
                steps: e.analyzedInstructions[0]?.steps.map(e => {
                    return (e.step)
                })
            }
        })
        
        return apiInfo;
    } catch (error) {
        console.log(error)
    }
    

    
}

const getDBinfo = async () => {
    try {
        const recipes= await Recipe.findAll({
            include: {
                model: TypeDiet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }})
            return await recipes.map(e=>{
                return{
                    id: e.id,
                    name: e.name,
                    summary: e.summary,
                    healthscore: e.healthscore,
                    image: e.image,
                    steps: e.steps,
                    dishtypes: e.dishtypes,
                    diets: e.TypeDiets.map(e=>e.name)
                }
            })
    } catch (error) {
        return res.status(404).send(error)
    }

    
}

const getALLRecipes = async () => {
    const apiInfo = await getApiInfo() 
    const dbInfo = await getDBinfo()
    console.log(apiInfo)
    const allInfo = dbInfo.concat(apiInfo);
    return allInfo;
}


module.exports = {
    getApiInfo,
    getDBinfo,
    getALLRecipes
}