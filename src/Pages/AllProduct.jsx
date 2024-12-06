
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaSortAlphaDown } from "react-icons/fa";


const AllSportsEquipment = () => {
  const navigate = useNavigate();
  const data=useLoaderData();

  const [sortedData, setSortedData] = useState(data);
  const [isSorted, setIsSorted] = useState(false); 

  useEffect(() => {
    if (isSorted) {
    
      const sortedArray = [...data].sort((a, b) => b.price - a.price);
      setSortedData(sortedArray);
     
    } else {
   
      setSortedData(data);
    }
  }, [isSorted, data]);
  const handleSort=()=>{

setIsSorted(!isSorted);

  }


  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 my-20">
      <div className="flex justify-between mb-5 ">
      <h2 className="text-2xl font-bold text- mb-4">All Sports Equipment</h2>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Double click to reset sort">
      <button onClick={handleSort} className="btn bg-secondary">Sort by Price <FaSortAlphaDown className="text-xl" /></button>
      </a>
    
     
      </div>
      <table className="w-full border-collapse border border-secondary">
        <thead>
          <tr className="bg-secondary text-left">
            <th className="border border-secondary p-2">Name</th>
            <th className="border border-secondary p-2">Category</th>
            <th className="border border-secondary p-2">Price</th>
            <th className="border border-secondary p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id} className="hover:bg-secondary ">
              <td className="border border-secondary p-2">{item.itemName}</td>
              <td className="border border-secondary p-2">{item.categoryName}</td>
              <td className="border border-secondary p-2">${item.price}</td>
              <td className="border border-secondary p-2 text-center">
                <button
                  onClick={() => handleViewDetails(item._id)}
                  className="btn btn-sm border-primary bg-transparent py-1 px-3 rounded-3xl  hover:bg-secondary hover:text-primary"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSportsEquipment;
