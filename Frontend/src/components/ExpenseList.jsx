import { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = ({ refresh, onSelectEdit }) => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get('http://localhost:3000/api/expenses');
    setExpenses(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/expenses/${id}`);
    fetchExpenses();
  };

  const handleEdit = (expense) => {
    onSelectEdit(expense);
  };

  useEffect(() => {
    fetchExpenses();
  }, [refresh]);

  return (
    <ul className="expense-list">
      {expenses.map((exp) => (
        <li key={exp._id}>
          <span>{exp.title} - ${exp.amount} ({exp.category})</span>
          <button onClick={() => handleEdit(exp)}>Edit</button>
          <button onClick={() => handleDelete(exp._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
