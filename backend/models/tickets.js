const mongoose = require('mongoose');

var ticketsSchema = new mongoose.Schema({
	reporter: {
		type: String,
		required: 'This field can\'t be empty'
	},
	title: {
		type: String,
		required: 'This field can\'t be empty'
	},
	complexcity: {
		type: String,
		required: 'This field can\'t be empty'
  },
  createdat: {
    type: Date
  },
  duedateat: {
    type: Date
  },
	assignee: {
		type: String,
		required: 'This field can\'t be empty'
	}
});

// events
//ticketsSchema.pre('save', function (next) {
	//
//});

mongoose.model('Tickets', ticketsSchema);