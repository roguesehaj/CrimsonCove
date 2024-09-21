const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    packageType: String,
    deliveryDate: Date,
});

module.exports = mongoose.model('Package', PackageSchema);
