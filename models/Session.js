const mongoose = require('mongoose');

const pokerSessionSchema = mongoose.Schema({
  userId: {
    type: String,
		required: true
  },
  selectGame:{
		type: String,
		required: true
  },
  earnings:{
		type: String,
		required: true
	 }
});