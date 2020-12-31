const mongoose = require("mongoose");
const assetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const Asset = mongoose.model("asset", assetSchema);

exports.Asset = Asset;