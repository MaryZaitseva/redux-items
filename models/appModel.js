const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var appSchema = new Schema({
    items: {
    	past: [],
    	present: [],
    	future: []
    },
    addingRow: Boolean,
	editingId: Boolean, 

	rebuildTable: Boolean,
	rebuiltTableIds: [],
	
	tableShown: Boolean
});

module.exports = mongoose.model('AppModel', appSchema);