const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const port = process.env.PORT || 5003;
connectDB();
const app = express();
app.use(errorHandler);


app.listen(port, () => console.log(`Server started on port ${port}`.yellow.underline));
