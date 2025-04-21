const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/expense_app_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB connected');
  }).catch((err) => {
    console.error('DB connection error:', err);
  });
};

module.exports = connectDB; 
