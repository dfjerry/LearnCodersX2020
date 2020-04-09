var db = require('../db');
module.exports.requireAuth = function(req, res, next) {
	if (!req.cookies.userId) {
		res.redirect('auth/login');
		return;//nen return ko no se chay logic ben duoi
	}
	var user = db.get('users').find({id: req.cookies.userId}).value();

	if (!user) {
		res.redirect('auth/login');
		return;//nen return ko no se chay logic ben duoi
	}

	next(); //next de no chay sang middleware tiep theo
};
