const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


const products = require('./routes/productRoutes');

// get env variables
dotenv.config();

// connect to mongodb
connectDB();

const app = express();

// use json for parsing requests
app.use(express.json());


// setup routes
app.use('/api/products', products);

// simple route to check if api works
app.get('/', (req, res) => {
    res.json({ message: 'api is working fine' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server started on port " + PORT);
});
