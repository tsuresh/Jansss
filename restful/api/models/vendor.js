const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String, required: true },
  busName: { type: String, required: true },
  marketingTypes: { type: Array, required: true},
  preferred: { type: Array, required: true},
  location: { type: Object, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  googleName: { type: String, required: true },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model("Vendor", vendorSchema);
