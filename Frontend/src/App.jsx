import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const triggerRefresh = () => setRefresh(!refresh);
  const handleEdit = () => {
    setExpenseToEdit(null);
    triggerRefresh();
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm expenseToEdit={expenseToEdit} onAdd={triggerRefresh} onEdit={handleEdit} />
      <ExpenseList refresh={refresh} onSelectEdit={setExpenseToEdit} />
    </div>
  );
};

export default App;
