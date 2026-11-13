const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler'); // <-- Import middleware

const app = express();
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/products', productRoutes);

// Error Handling Middleware (Must be defined AFTER routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});