const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	image: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
	},
	ID: {  // Only for student
		type: String,
	},
	status: {
		type: String,
		required: true,
		enum: ['faculty', 'student'],
	},
	education: [{
		school: {
			type: String,
		},
		degree: {
			type: String,
		},
		grade: {

		},
		timePeriod: {
			type: String,
		},
	}],
	experience: [{  //Only for teacher
		title: {
			type: String,
		},
		company: {
			type: String,
		},
		timePeriod: {
			type: String,
		},
	}],
	awardsAndAccomplishment: [{
		type: String,
	}],
	office: [{  // Only for teacher
		room: {
			type: String,
		},
		timePeriod: {
			type: String,
		},
	}],
	password: {
		type: String,
		required: true,
	},
	courses: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Course',
	}],
	// Expired
	school: {
		type: String,
		maxlength: 100,
	},
	country: {
		type: String,
		maxlength: 100,
	},
	initial: {
		type: String,
	},
    department: {
		type: String,
	},
	officeRoom: {
		type: String,
	},
	officeHours: [{
		type: String,
	}],
});

mongoose.model('User', userSchema); // set
