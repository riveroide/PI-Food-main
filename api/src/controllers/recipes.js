const axios = require('axios');

const {YOUR_API_KEY} = process.env;
const {Recipe,TypeDiet} = require('../db');
 //https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10
 // f188937f0770482b9aac299da45f2db3
// eacb151e3f7f437fbc9369e29631e0c3

// https://api.spoonacular.com/recipes/complexSearch?apiKey=eacb151e3f7f437fbc9369e29631e0c3&addRecipeInformation=true&number=10

//https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5
const getApiInfo = async () => {
    
    try {
        const apiUrl = await axios({
            method: 'get',
            url: `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`,
            headers: {"Accept-Encoding": "null"}
        })
        console.log(apiUrl)
        
        const apiInfo = await apiUrl.data.results?.map((e) =>{
            return{
                id: e.id,
                name: e.title,
                summary: e.summary,
                healthscore: e.healthScore,
                image: e.image,
                diets: e.diets,
                steps: e.analyzedInstructions[0]?.steps.map(e => {
                    return {
                        number: e.number,
                        step: e.step,
                        ingredients: e.ingredients,
                    }
                })
            }
        })
        
        return apiInfo;
    } catch (error) {
        console.log(error)
    }
    

    
}

const getDBinfo = async () => {
    return await Recipe.findAll({
        include: {
            model: TypeDiet,
            attributes: ['name'], // solo el name porque el id viene junto
            through: {
                attributes: [],
            }
        }})
}

const getALLRecipes = async () => {
    const apiInfo = await getApiInfo() 
    const dbInfo = await getDBinfo()
    console.log(apiInfo)
    const allInfo = apiInfo.concat(dbInfo);
    return allInfo;
}


module.exports = {
    getApiInfo,
    getDBinfo,
    getALLRecipes
}