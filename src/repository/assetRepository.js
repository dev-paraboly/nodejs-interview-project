const {
    Asset
} = require("../model/assetModel");

const AssetRepository = {
    getAll: async () => {
        return await Asset.find();
    },
    insert: async (debit) => {
        return await new Asset(debit).save();
    },
    getById: async (id) => {
        return await Asset.findOne({
            _id: id
        });
    },
    update: async (asset) => {
        return await Asset.findOneAndUpdate({
            _id: asset._id
        },
            asset, {
            new: true
        }
        );
    },
    delete: async (id) => {
        return await Asset.remove({ _id: id });
    }
}

module.exports = AssetRepository;