const _ = require("lodash");
const express = require("express");
const assetService = require('../service/assetService');
const router = express.Router();

router.get("/", async (req, res) => {
    const assets = await assetService.getAll();
    res.send(assets);
});

router.get("/:id", async (req, res) => {
    const asset = await assetService.getById(req.params.id);
    res.send(asset);
});

router.post("/", async (req, res) => {
    let asset = req.body;
    const insertedAsset = await assetService.insert(asset);
    res.send(insertedAsset);
});

router.put("/", async (req, res) => {
    const updatedAsset = await assetService.update(req.body);
    res.send(updatedAsset);
});

router.delete("/:id", async (req, res) => {
    const asset = await assetService.delete(req, res);
    res.send(asset);
});

module.exports = router;