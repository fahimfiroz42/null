import { Link } from "react-router-dom";


const Card = ({product}) => {
    const {_id,image,itemName,stockStatus,price}=product
  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 ">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt="Riddell Speedflex Helmet"
          className="w-full rounded-lg "
        />
        <button
          className="absolute top-2 right-2 bg-primary p-1 rounded-full shadow-md hover:bg-gray-200"
          aria-label="Add to Favorites"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>

      {/* Details Section */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">
         {itemName}
        </h3>
        <p className= "badge bg-primary text-sm text-gray-600">{stockStatus} left</p>
        </div>
        <div className="flex  justify-between items-center">
        <p className="text-xl font-semibold text-gray-900 mt-1">{price} $</p>

{/* Ratings */}
<div className="flex items-center mt-2">
  <div className="flex text-yellow-500">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
</div>

        </div>
        {/* View Details Button */}
       <Link to={`/product/${product._id}`}><button className="mt-4 w-full bg-primary font-bold py-2 rounded-lg hover:bg-green-500 transition">
          View Details
        </button>
        </Link> 
      </div>
    </div>
  );
};

export default Card;
