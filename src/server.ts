import express from 'express';

require('dotenv').config();
const mongoose = require('mongoose');
const wilder = require('./routes/wilderRoutes');

// Mango Atlas URL
const DB = process.env.DATABASE;

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      autoIndex: true,
    });
    console.log('Database connection successful!');
  } catch (err) {
    console.error(err.message);
  }
};
connectDB();

// Middleware
const app = express();
app.use(express.json()); // Middleware => parsing into JSON format

// Use Routes
app.get('/', (_, res) => {
  res.status(200).send('Welcome');
});

app.use('/api/wilder', wilder);

// Running Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
