var express = require('express');
var router = express.Router();

/* POST create trip */
router.post('/create', function(req, res, next) {
	// Create trip given user selections from preferences
});

/* GET info for a specific trip ID */
router.get('/info/:id', function(req, res, next) {
	// Get info for a specific trip ID:
	//     startTime (millis)
	//     endTime (millis)
	//     carId
	//     userId
});

/* POST mark trip as started (but secure cryptographic key exchange will be done on-device) */
router.post('/start/:id', function(req, res, next) {
	// Mark trip as started
	// The key exchange at the kiosk will be passed directly from the phone to the kiosk via RSA keypair signing
});

/* POST report damage to car on a trip */
router.post('/damage/:id', function(req, res, next) {
	// Report damage for a given trip
});

/* POST mark trip as complete (but secure cryptographic key exchange will be done on-device) */
router.post('/end/:id', function(req, res, next) {
	// Mark trip as complete
	// The key exchange at the kiosk will be passed directly from the phone to the kiosk via RSA keypair signing
});

module.exports = router;
