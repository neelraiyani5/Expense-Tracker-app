import { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseForm = ({ onAdd, expenseToEdit, onEdit }) => {
  const [form, setForm] = useState({ title: '', amount: '', category: '' });


  useEffect(() => {
    if (expenseToEdit) {
      setForm({
        title: expenseToEdit.title,
        amount: expenseToEdit.amount,
        category: expenseToEdit.category,
      });
    }
  }, [expenseToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (expenseToEdit) {
      // Update existing expense
      await axios.put(`http://localhost:3000/api/expenses/${expenseToEdit._id}`, form);
      onEdit();
    } else {
      // Create new expense
      await axios.post('http://localhost:3000/api/expenses', form);
      onAdd();
    }
    setForm({ title: '', amount: '', category: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
      <button type="submit">{expenseToEdit ? 'Update Expense' : 'Add Expense'}</button>
    </form>
  );
};

export default ExpenseForm;
