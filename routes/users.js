var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  		var botPayload = {
			text: 'Hello, welcome to Astrajingga! :)'
		};
		
		return res.status(200).json(botPayload);
});

module.exports = router;
