import express from 'express';

require('dotenv').config();
const mongoose = require('mongoose');
const wilder = require('./routes/wilderRoutes');

// Mango Atlas URL
const url = 'mongodb+srv://lionel:210592Li@wildermodel.vpg92.mongodb.net/WilderDatabase?retryWrites=true&w=majority';

// Database Connection
const connectDB = async () => {
  await mongoose.connect(url, {
    autoIndex: true,
  });
  console.log('Database connection successful!');
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
