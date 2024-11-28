import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import productRouter from './routes/product.routes'

// Create server
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRouter)

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.DATABASE_URL!;
console.log(MONGO_URI)
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));