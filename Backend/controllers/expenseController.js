const Expense = require('../models/Expense');

exports.getAllExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
};

exports.createExpense = async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.json(expense);
};

exports.updateExpense = async (req, res) => {
  const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
