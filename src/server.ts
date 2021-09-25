import express from 'express';

const mongoose = require('mongoose');
const WilderControl = require('./controllers/WilderController');

// Mango Atlas URL
const url = 'mongodb+srv://lionel:210592Li@wildermodel.vpg92.mongodb.net/WilderDatabase?retryWrites=true&w=majority';

// Database connection
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

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
