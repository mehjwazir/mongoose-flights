var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');




// All routes start with "/flights"
//Index GET/ Flights
router.get('/', flightsCtrl.index);

//New GET /flights/new

router.get('/new', flightsCtrl.new);

// Create POST/ flights
router.post('/', flightsCtrl.create)

//get flight detail
router.get('/:id', flightsCtrl.show);


module.exports = router;
