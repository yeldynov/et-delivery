require('./models/Order');
require('./models/Shop');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');
const shopRoutes = require('./routes/shopRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(orderRoutes);
app.use(shopRoutes);

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, {
  dbName: 'et-shop',
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
