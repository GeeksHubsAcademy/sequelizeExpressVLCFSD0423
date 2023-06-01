
const { Recipe } = require('../models');

const recipesController = {};

recipesController.getAllRecipes = async (req, res) => {

    try {

        const results = await Recipe.findAll();

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

recipesController.getVeganRecipes = async (req, res) => {

    try {

        let isVegan = req.params.vegan;

        const results = await Recipe.findAll(
            {
                where: {
                    vegan: isVegan
                }
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

recipesController.createRecipe = async (req, res) => {

    try {

        let body = req.body;

        const results = await Recipe.create(
            {
                name: body.name,
                vegan: body.vegan, 
                time: body.time
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

recipesController.updateRecipe = async (req, res) => {

    let body = req.body;

    try {

        const results = await Recipe.update(
            {
                name: body.name,
                vegan: body.vegan,
                time: body.time
            },
            {
                where: {
                    id: body.id
                }
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

recipesController.deleteRecipe = async (req, res) => {

    let body = req.body;

    try {

        const results = await Recipe.destroy(
            {
                where: {
                    id: body.id
                }
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

module.exports = recipesController;