const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cycleRoutes = require('./routes/cycleRoutes');
const packageRoutes = require('./routes/packageRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/auth', authRoutes);
app.use('/cycle', cycleRoutes);
app.use('/package', packageRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
