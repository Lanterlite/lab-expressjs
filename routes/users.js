var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
router.get('/:username*/:date*', function(req, res, next) {
	// res.send('respond with a resource');
  
  
	// var botPayload = {
		// text: 'Hello, welcome to Astrajingga! :)'
	// };
	// return res.status(200).json(botPayload);
	var dateTime = "default day"
	if(req.params.date == "today")
		dateTime = "2017/14/07"
	
	var botPayload = {
		text: 'Hello ' + req.params.username,
		date: dateTime,
	};
	return res.status(200).json(botPayload);
});

module.exports = router;
