const mongoose = require('mongoose');


const port = 3000;
const Schema =  mongoose.Schema;
  var NewDonarSchema = new Schema({
  
  donarName: String,
  donarSex: String,
  donarMobileno :Number,
  donarDistrict: String,
  donarEmail : String,
  donarWeight :Number,
  donarHeight : Number,
  donarBloodGroup :String,
  donarBloodDonationHistory: String,
  donarDiseaseBackground:String,
  donarLastDonateDate:String
  });
  var donardata = mongoose.model('donar',NewDonarSchema);
  module.exports =donardata;