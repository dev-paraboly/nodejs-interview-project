const express = require("express");
const app = express();

const asset = require("./src/route/assetRoute");
require("./src/startup/db")();

app.use(express.json());
app.use("/asset_management", asset);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
    console.log(`Listening on port ${port}...`)
);

module.exports = server;