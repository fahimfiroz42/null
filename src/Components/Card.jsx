import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";


const Card = ({product}) => {
    const {_id,image,itemName,stockStatus,price,rating}=product
  return (
//     <div classNameName="bg-white rounded-3xl shadow-lg p-4 ">
//       {/* Image Section */}
//       <div classNameName="relative ">
//         <div classNameName="border">
//         <img
//           src={image}
//           alt="Riddell Speedflex Helmet"
//           classNameName="w-full rounded-lg "
//         />
//         </div>
//         <button
//           classNameName="absolute top-2 right-2 bg-primary p-1 rounded-full shadow-md hover:bg-gray-200"
//           aria-label="Add to Favorites"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             classNameName="w-5 h-5 text-white "
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Details Section */}
//       <div classNameName="mt-4">
//         <div classNameName="flex justify-between items-center">
//         <h3 classNameName="text-lg font-bold text-gray-800">
//          {itemName}
//         </h3>
//         <p classNameName= "badge bg-primary text-sm text-gray-600">{stockStatus} left</p>
//         </div>
//         <div classNameName="flex  justify-between items-center">
//         <p classNameName="text-xl font-semibold text-gray-900 mt-1">{price} $</p>

// {/* Ratings */}
// <div classNameName="flex items-center mt-2">
//   <div classNameName="flex text-yellow-500">
//     {[...Array(5)].map((_, index) => (
//       <svg
//         key={index}
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         classNameName="w-4 h-4"
//       >
//         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//       </svg>
//     ))}
//   </div>
// </div>

//         </div>
//         {/* View Details Button */}
//        <Link to={`/product/${_id}`}><button classNameName="mt-4 w-full bg-primary font-bold py-2 rounded-lg hover:bg-green-500 transition">
//           View Details
//         </button>
//         </Link> 
//       </div>
//     </div>

<div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md">
  
    <div className="flex items-center justify-center hover:scale-105 duration-300">
    <img className="h-60 rounded-t-lg  w-full object-contain" src={image} alt="product image" />
    </div>
 
  <span className="absolute animate-pulse top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
  <div className="mt-4 px-5 pb-5 ">
   
      <div className="flex items-center justify-between">
      <h5 className="text-xl font-semibold tracking-tight dark:text-white text-slate-900">{itemName}</h5>
      <h1 className="badge bg-primary text-sm dark:text-black text-gray-600">{stockStatus} left</h1>
      </div>

  
    <div className="mt-2.5 mb-5 flex items-center">
      <span className="mr-2 rounded dark:text-black bg-primary px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    </div>
    <div className="flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold dark:text-white text-slate-900">{price}</span>
        <span className="text-sm dark:text-white text-slate-900 line-through">$299</span>
      </p>
      <Link to={`/product/${_id}`} className="flex items-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-gray-300">
      <TbListDetails  className="mr-2 text-xl"/>
        View Details</Link>
    </div>
  </div>
</div>

  );
};

export default Card;
