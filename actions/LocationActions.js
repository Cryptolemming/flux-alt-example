var alt = require('../alt');

class LocationActions {
	updateLocations(locations) {
		this.dispatch(locations);
	}

	fetchLocations() {
	  this.dispatch();

	  LocationsFetcher.fetch()
	    .then((locations) => {
	      this.actions.updateLocations(locations);
	    })
	    .catch((errorMessage) => {
	      this.actions.locationsFailed(errorMessage);
	    });
	}

	locationsFailed(errorMessage) {
	  this.dispatch(errorMessage);
	}
}

module.exports = alt.createActions(LocationActions);