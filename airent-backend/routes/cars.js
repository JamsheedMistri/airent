var express = require('express');
var router = express.Router();

/* POST create new car listing */
router.post('/create', function(req, res, next) {
	// Create new car listing, return car ID
});

/* GET info for a specific car ID */
router.get('/info/:id', function(req, res, next) {
	// Return all info about a given car:
	//     id
	//     name
	//     make
	//     year
	//     type
	//     condition
	//     dailyPrice
	//     ownerId
});

/* POST report damage for a given car */
router.post('/damage/:id', function(req, res, next) {
	// Report damage for a given car - should only be called by owner (damage during trip is at /trips/damage/)
});

/* GET get car recommendations for specific trip */
router.post('/recommendations', function(req, res, next) {
	// Get car recommendations for a specific trip, based on:
	//     dates
	//     car type
	//     car make
	//     price
	// Invoke algorithm (in other directory of this repo)
	// We used a variation of the Game and Shapely algorithm to achieve a Pareto efficient matching
});

module.exports = router;
