var models = require('../models');

// GET /question
exports.question = function(req, res, next){
	models.Quiz.findAll().then(function(quiz){
	if(quiz){
		var search= req.query.search || '';
		res.render('quizzes/question', {
			search:search});
	}
	else {
		throw new Error('No hay preguntas en la BBDD.');
	}
	}).catch(function(error){ next(error);});
};

//GET /quizzes
exports.quizzes =function(req, res, next){
	models.Quiz.findAll({where:{question: {$like: '%'+ req.query.search+'%'}}}).then(function(quiz){
	if(quiz){
		res.render('quizzes/quizzes',{quiz:quiz});}
	else{
		throw new Error('No hay preguntas en la BBDD.');
	}
	}).catch(function(error){ next(error);});
};
