import { useContext, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import addfileAnimation from "../assets/Animation - 1733498800902.json"
import animation2 from "../assets/animation2.json"
import useTitle from "../Components/UseTitle";

const AddItemForm = () => {
    
   useTitle('Add Product')

    const {user}=useContext(AuthContext)
    const [loading,setLoading] = useState(false);
    const {displayName,email,uid}=user
    


  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus:  "",
    displayName:displayName,
    email:email,
    uid:uid

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedData = {
      ...formData,
      price: parseFloat(formData.price) || 0,
      rating: parseFloat(formData.rating) || 0, 
      stockStatus: parseInt(formData.stockStatus, 10) || 0, 
    };
  

    fetch("https://knull-server.vercel.app/addProduct", {
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(formattedData)
        
    })
    .then(res=>res.json())  
    .then(data=>{
        setLoading(false);
        if(data.insertedId){Swal.fire({
          icon: "success",
          text: "Item added successfully"})}
    })

   
 
  };

  return (
    <div className="">
      <div className="bg-secondary dark:bg-slate-700 p-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Add Your Product</h1>
        <Lottie animationData={addfileAnimation} loop={true} />
        
      </div>
     


     <div className="flex flex-col  md:flex-row w-11/12 mx-auto items-center ">
     

     <div className="w-full md:w-1/2 mx-auto bg-white dark:bg-slate-800  shadow-md rounded-lg p-6 my-20">
      <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary p-2">Add Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="Enter item name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Category Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category Name</label>
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            placeholder="Enter category name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Enter rating (e.g., 4.5)"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Customization */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Customization</label>
          <input
            type="text"
            name="customization"
            value={formData.customization}
            onChange={handleChange}
            placeholder="Enter customization options"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Processing Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            placeholder="Enter processing/delivery time"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Stock Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock Status</label>
          <input
            type="number"
            name="stockStatus"
            value={formData.stockStatus}
            onChange={handleChange}
            placeholder="Enter available quantity"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* User Name (Read-Only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">User Name</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
          />
        </div>

        {/* User Email (Read-Only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">User Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-secondary hover:text-black transition duration-300 ease-in-out"
          >
              {loading && <span className="loading loading-spinner loading-sm mr-5"></span>}
              Submit
        
          </button>
        </div>
      </form>
    </div>

    <div className="w-full md:w-1/2">
      <Lottie animationData={animation2} loop={true} />

      </div>




     </div>
    </div>
  );
};

export default AddItemForm;
