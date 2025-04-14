import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    date: '',
    category: 'Food',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount || !formData.date) return;

    const newExpense = {
      ...formData,
      amount: parseFloat(formData.amount),
      date: new Date(formData.date).toISOString().split('T')[0]
    };

    onAddExpense(newExpense);
    setFormData({
      name: '',
      amount: '',
      date: '',
      category: 'Food',
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col">
      <div className="space-y-4 flex-1">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expense Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white text-gray-900
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Enter name"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white text-gray-900
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Housing">Housing</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount ($)
          </label>
          <input
            type="number"
            name="amount"
            step="0.01"
            min="0"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white text-gray-900
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="0.00"
          />
        </div>

  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white text-gray-900
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                 transition-colors font-medium"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;