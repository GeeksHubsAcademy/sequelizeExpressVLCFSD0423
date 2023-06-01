
const router = require('express').Router();
const recipesController = require('../controllers/recipesController');


//CRUD.......


router.get('/', recipesController.getAllRecipes);
router.get('/:vegan', recipesController.getVeganRecipes);
router.post('/', recipesController.createRecipe);
router.put('/', recipesController.updateRecipe);
router.delete('/', recipesController.deleteRecipe);


module.exports = router;