import React from 'react'

const SortDropdown = ({ onSortChange }) => {
  return (
    <select
      onChange={(e) => onSortChange(e.target.value)}
      className="border-2 rounded-md mt-20 mb-10 px-4 py-3 text-md text-gray-800 cursor-pointer shadow-sm focus:outline-none"
    >
      <option className='text-gray-600 font-mono' value="">Sort By</option>
      <option className='text-gray-600 font-mono' value="az">Name: A - Z</option>
      <option className='text-gray-600 font-mono' value="za">Name: Z - A</option>
      <option className='text-gray-600 font-mono' value="low-high">Price: Low to High</option>
      <option className='text-gray-600 font-mono' value="high-low">Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;
