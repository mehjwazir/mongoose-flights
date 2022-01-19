const Flight = require('../models/flight');

module.exports = {
	create
};

function create(req, res) {
	Flight.findById(req.params.id, function (err, flight) {
		// We can push in subdoc
		flight.destinations.push(req.body);
		flight.save(function (err) {
			//respond with a redirect because we've mutated data
			res.redirect(`/flights/${flight._id}`);
		})
	});
}