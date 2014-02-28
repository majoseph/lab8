var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){

	var data = {'grid': false, 'projectdata':projects};
  	res.render('index', data);



    


};



exports.viewGrid = function(req, res){
	var data = {'grid': true,'projectdata':projects};
	res.render('index', data);




};



