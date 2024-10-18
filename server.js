import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import comicBookRoutes from './routes/comicBookRoutes.js';

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/comicBooks', comicBookRoutes);
 
app.listen(port, () => { console.log('Server is running on port 5000'); }); 