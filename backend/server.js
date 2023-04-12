const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 5003;
connectDB();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(require('./routes/api.js'));

const date = new Date().toISOString();
app.listen(port, () => console.log(`Server started on port ${port} at: ${date}`.yellow.underline));
