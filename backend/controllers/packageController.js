const Package = require('../models/Package');
const jwt = require('jsonwebtoken');

exports.subscribePackage = async (req, res) => {
    const { token, packageType, deliveryDate } = req.body;
    const { userId } = jwt.verify(token, process.env.SECRET_KEY);
    const package = new Package({ userId, packageType, deliveryDate });
    await package.save();
    res.status(201).send('Subscribed to package');
};
