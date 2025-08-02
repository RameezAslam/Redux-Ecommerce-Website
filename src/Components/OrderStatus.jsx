// OrderStatus.jsx
import React from "react";
import { Link } from "react-router-dom";

const OrderStatus = () => {
  return (
    <div className="p-6 md:p-10 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Your Order Status</h2>

      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center text-sm md:text-base">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">1</div>
            <p className="mt-2 font-semibold text-green-600">In Warehouse</p>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-2 md:mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">2</div>
            <p className="mt-2">Shipping</p>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-2 md:mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">3</div>
            <p className="mt-2">Delivered</p>
          </div>
        </div>
      </div>

      <Link
        to="/"
        className="mt-12 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Back to Store
      </Link>
    </div>
  );
};

export default OrderStatus;
