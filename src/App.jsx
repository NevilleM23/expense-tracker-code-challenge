import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/Searchbar';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: 'Weekly groceries',
      description: 'Food shopping',
      category: 'Food',
      amount: 90.00,
      date: '2023-05-15'
    },
    {
      id: 2,
      name: 'Car fuel',
      description: 'Gas station refill',
      category: 'Transportation',
      amount: 40.00,
      date: '2023-05-10'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { 
      ...newExpense, 
      id: Date.now(),
      amount: parseFloat(newExpense.amount),
      date: newExpense.date
    }]);
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Expense Tracker</h1>
        
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default App;