require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const morgan = require('morgan');

//app middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


//consume routes
// app.use(`${process.env.API_PREFIX}/auth`, authRoutes);
app.use('/api/v1/auth', authRoutes);

module.exports = app;