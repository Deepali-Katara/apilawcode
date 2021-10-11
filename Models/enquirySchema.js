const mongoose = require("mongoose");
const enquirySchema = new mongoose.Schema({
 
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});
const Enquiry = mongoose.model("contactus", enquirySchema);
module.exports =  Enquiry 
