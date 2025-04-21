const express = require('express');
const router = express.Router();
const controller = require('../controllers/expenseController');

router.get('/', controller.getAllExpenses);
router.post('/', controller.createExpense);
router.put('/:id', controller.updateExpense);
router.delete('/:id', controller.deleteExpense);

module.exports = router;
