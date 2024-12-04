import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const product = useLoaderData();
    const { image, itemName, categoryName, price, rating, description, customization, processingTime, stockStatus } = product;
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-20 p-6 rounded-lg shadow-lg w-11/12  mx-auto mt-10 my-28">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={itemName}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Product Details Section */}
      <div className="mt-6">
        {/* Product Title and Price */}
        <h1 className="text-2xl font-bold text-gray-800">{itemName}</h1>
        <p className="text-lg text-gray-600">Category: {categoryName}</p>
        <p className="text-xl font-semibold text-primary mt-2">
          ${price.toFixed(2)}
        </p>

        {/* Stock Status */}
        <p className="badge bg-primary  text-sm font-semibold mt-1">Stock: {stockStatus}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-500">
            {[...Array(Math.floor(rating))].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 ml-2">({rating})</p>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-4">{description}</p>

        {/* Customization */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Customization:</h3>
          <p className="text-gray-600">{customization}</p>
        </div>

        {/* Processing Time */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">
            Processing Time:
          </h3>
          <p className="text-gray-600">{processingTime}</p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between">
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Add to Cart
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
