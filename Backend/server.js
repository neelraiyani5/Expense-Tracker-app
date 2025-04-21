const express = require('express');
const cors = require('cors');
const app = express();
require('./db')();

app.use(cors());
app.use(express.json());

const expenseRoutes = require('./routes/expenseRoutes');
app.use('/api/expenses', expenseRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
