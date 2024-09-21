const mongoose = require('mongoose');

const CycleSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    startDate: Date,
    endDate: Date,
});

module.exports = mongoose.model('Cycle', CycleSchema);
