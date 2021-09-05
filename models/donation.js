const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
    id: Number,
    first_name: String,
    last_name: String,
    donations: Number,
    total: Number,
    image: String,
    desciption: String


});
var donationS = model('donation', donationSchema);
module.exports = {donationS}