import express from 'express';

require('dotenv').config();
const mongoose = require('mongoose');
const WilderControl = require('./controllers/WilderController');

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

// Routers
app.post('/api/wilder/create', WilderControl.create);
app.get('/api/wilder/retrieve/:id', WilderControl.retrieve);
app.put('/api/wilder/update/:id', WilderControl.update);
app.delete('/api/wilder/delete/:id', WilderControl.delete);

// Running Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
