
const router = require('express').Router();
const platesController = require('../controllers/platesController');


//CRUD.......


router.get('/', platesController.getAllPlates);
router.get('/:id', platesController.getPlatesChef);
router.post('/', platesController.createPlate);
router.put('/', platesController.updatePlate);
router.delete('/', platesController.deletePlate);


module.exports = router;