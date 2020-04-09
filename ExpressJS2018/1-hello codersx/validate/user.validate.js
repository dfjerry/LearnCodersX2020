module.exports.postCreate = function(req, res, next) {
	var errors = [];
	if (!req.body.name) {
		errors.push('Name is required.');
	}
	if (!req.body.phone) {
		errors.push('Phone is required.');
	}
	if (errors.length) {
		res.render('users/create', {//neu co loi render them va bao loi (render ra errors)
			errors: errors,
			values: req.body
		});
		return;
	}
	next();
};