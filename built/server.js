"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WilderControl = require('./controllers/WilderControllers');
const mongoose = require('mongoose');
// Mango Atlas URL
const url = 'mongodb+srv://lionel:210592Li@wildermodel.vpg92.mongodb.net/WilderDatabase?retryWrites=true&w=majority';
// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            autoIndex: true
        });
        console.log("Connected to database");
    }
    catch (err) {
        console.error(err);
    }
};
connectDB();
// Middleware
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware => parsing into JSON format
// Error handling middleware
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     res.status(500).json({message: err.message});
// });
// Routers
app.post('/api/wilder/create', WilderControl.create);
app.get('/api/wilder/retrieve/:id', WilderControl.retrieve);
app.put('/api/wilder/update/:id', WilderControl.update);
app.delete('/api/wilder/delete/:id', WilderControl.delete);
// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on ${port}`));
//# sourceMappingURL=server.js.map