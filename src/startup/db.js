const mongoose = require("mongoose");
module.exports = function () {
    const db = process.env.MONGO_URI || "mongodb://interview:interview@178.251.45.187:33333/interview"
    var options = {
        server: {
            socketOptions: {
                keepAlive: 1,
                connectTimeoutMS: 30000
            }
        },
        replset: {
            socketOptions: {
                keepAlive: 1,
                connectTimeoutMS: 30000
            }
        }
    };
    mongoose
        .connect(
            db,
            options
        )
        .then(() => console.log(`Connected to ${db}...`));
};