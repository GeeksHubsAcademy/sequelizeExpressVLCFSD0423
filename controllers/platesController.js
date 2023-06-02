
const { Plate, User, Recipe } = require('../models');

const platesController = {};

platesController.getAllPlates = async (req, res) => {

    try {

        const results = await Plate.findAll();

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

platesController.getPlatesChef = async (req, res) => {

    // A.findAll({
    //     where: {
    //         $or: [
    //             {'$B.userId$' : 100},
    //             {'$C.userId$' : 100}
    //         ]
    //     },
    //     include: [{
    //         model: B,
    //         required: false
    
    //     }, {
    //         model: C,
    //         required: false
    //     }]
    // }); 

    try {

        const results = await Plate.findAll(
            {
                where : {
                    user_id: req.params.id
                },
                attributes: { exclude: ['id', 'user_id', 'recipe_id','createdAt', 'updatedAt'], include: ['date'] },
                include: [{
                    model: User,
                    required: false,
                    attributes: { exclude: ['id', 'email', 'specialty','createdAt', 'updatedAt'], include: ['name', 'age'] }
                },
                {
                    model: Recipe,
                    required: false,
                    attributes: { exclude: ['id', 'vegan', 'createdAt', 'updatedAt'], include: ['name', 'time'] }

                }]
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

platesController.createPlate = async (req, res) => {

    try {

        let body = req.body;

        const results = await Plate.create(
            {
                user_id: body.user_id,
                recipe_id: body.recipe_id, 
                date: body.date
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

platesController.updatePlate = async (req, res) => {

    let body = req.body;

    try {

        const results = await Plate.update(
            {
                date: body.date
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

platesController.deletePlate = async (req, res) => {

    let body = req.body;

    try {

        const results = await Plate.destroy(
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

module.exports = platesController;