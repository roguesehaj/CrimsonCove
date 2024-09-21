const Cycle = require('../models/Cycle');
const jwt = require('jsonwebtoken');

exports.logCycle = async (req, res) => {
    const { token, startDate, endDate } = req.body;
    const { userId } = jwt.verify(token, process.env.SECRET_KEY);
    const cycle = new Cycle({ userId, startDate, endDate });
    await cycle.save();
    res.status(201).send('Cycle logged');
};
