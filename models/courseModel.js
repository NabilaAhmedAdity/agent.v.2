const mongoose = require("mongoose");
const Marksheet = require("mongoose").model('Marksheet');

const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 100
	}, 
	code: {
		type: String,
		required: true,
		unique: true,
		maxlength: 20
	},
	section: {
		type: String,
		required: true,
	},
	classRoom: {
		type: String
	},
	marksheet: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'Marksheet'
	}
});

mongoose.model('Course', courseSchema); //set