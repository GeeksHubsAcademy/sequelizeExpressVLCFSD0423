
const router = require('express').Router();

const recipesRouter = require('./views/recipeRouter');


//Routing......

router.use('/recipes', recipesRouter);

module.exports = router;