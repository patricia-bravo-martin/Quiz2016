var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quizController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});


// Definicion de rutas de /quizzes
router.get('/question', quizController.question);
router.get('/quizzes', quizController.quizzes);

/* GET author page. */
router.get('/author', function(req, res, next) {
  res.render('author');
});


module.exports = router;
