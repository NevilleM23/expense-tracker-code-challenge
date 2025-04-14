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
    <div className="min-h-screen bg-gray-50 p-4">
        <div className="w-full flex-1 flex flex-col"> 
            <header className="mb-6 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Expense Tracker</h1>
              <div className="mt-3 p-2 bg-white rounded-lg shadow-sm border border-gray-200 inline-block">
                <span className="font-medium text-gray-700">Total Expenses: </span>
                <span className="font-bold text-gray-900">
                  {expenses.reduce((sum, expense) => sum + expense.amount, 0)}
                </span>
              </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-[calc(100vh-12rem)]">
              <div className="lg:w-96 h-full bg-white p-5 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-lg font-semibold mb-3 text-gray-800">Add Expense</h2>
                <ExpenseForm onAddExpense={addExpense} />
              </div>

              <div className="flex-1 flex flex-col">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 mb-4">
                  <SearchBar 
                    searchTerm={searchTerm} 
                    onSearchChange={setSearchTerm} 
                  />
                </div>

                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <ExpenseTable expenses={filteredExpenses} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }


export default App;