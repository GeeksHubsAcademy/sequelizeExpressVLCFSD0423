
const router = require('express').Router();

const recipesRouter = require('./views/recipeRouter');
const platesRouter = require('./views/plateRouter');


//Routing......

router.use('/recipes', recipesRouter);
router.use('/plates', platesRouter);

module.exports = router;