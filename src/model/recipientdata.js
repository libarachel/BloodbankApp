const mongoose = require('mongoose');
const port = 3000;
const Schema =  mongoose.Schema;
  var NewRecipientSchema = new Schema({

 recipientName: String,
 recipientSex: String,
 recipientMobileno :Number,
 recipientDistrict: String,
 recipientEmail : String,
 recipientBloodGroup :String
  
  });
  var recipientdata = mongoose.model('recipient',NewRecipientSchema);
  module.exports =recipientdata;