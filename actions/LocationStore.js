var alt = ('../alt');
var LocationActions = require('LocationActions');

class LocationStore {
	constructor() {
		this.locations = [];

		this.bindListeners({LocationActions.UPDATE_LOCATIONS
		});
	}

	handleUpdateLocations(locations) {
		this.locations = locations;
	}
}

module.exports = alt.createStore(LocationStore, 'LocationStore');