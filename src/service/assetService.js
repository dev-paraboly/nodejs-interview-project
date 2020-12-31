const assetRepository = require("../repository/assetRepository");

const AssetService = {
    insert: async asset => {
        return await assetRepository.insert(asset);
    },
    getAll: async () => {
        return await assetRepository.getAll();
    },
    getById: async id => {
        return await assetRepository.getById(id);
    },
    update: async (asset) => {
        let assetUpdated = await assetRepository.getById(asset._id);
        if (assetUpdated) {
            return await assetRepository.update(asset);
        }
    },
    delete: async (id) => {
        return await assetRepository.delete(id);
    }
};

module.exports = AssetService;