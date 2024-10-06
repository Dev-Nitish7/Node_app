const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// EJS 
app.set('view engine', 'ejs');

// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// Use routes
 app.use('/users', userRoutes);
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log( `Server is running on http://localhost:${PORT}`);
});

