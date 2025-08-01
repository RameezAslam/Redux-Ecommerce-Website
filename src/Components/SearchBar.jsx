import React from 'react'
import all_product from './Assets/all_product';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SearchBar({searchQuery , setSearchQuery , setShowSearch}) {
    const products = all_product;
    const navigate = useNavigate()
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (id) => {
    setShowSearch(false);
    setSearchQuery("");
    navigate(`/product/${id}`); // ✅ matches your routing setup
};

  return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-start pt-20">
          <div className="bg-white w-full max-w-[80%] md:max-w-[50%] rounded-lg shadow-lg px-10 py-5 relative mx-4">
            {/* Close Button */}
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-7 right-3 text-gray-600 text-xl"
            >
              ✕
            </button>

            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full text-gray-600 border p-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Filtered Results */}
            <div className="max-h-28 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="p-2 border-b text-gray-600 hover:bg-gray-200 cursor-pointer"
                    >
                        {product.name}
                    </div>
                ))
              ) : (
                <p className="text-gray-500">No products found.</p>
              )}
            </div>
       </div>
  </div>
  )
}

export default SearchBar