import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow"> 
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.description  || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${expense.amount.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.date}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Empty State */}
    </div>
  );
};

export default ExpenseTable;