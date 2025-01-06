
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaSortAlphaDown } from "react-icons/fa";
import useTitle from "../Components/UseTitle";
import Card from "../Components/Card";



const AllSportsEquipment = () => {
  useTitle('All Equipment')
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
    <div>
      <div className="hero  bg-[url('https://i.ibb.co.com/TPTLkXd/a-photo-of-a-sports-item-banner-with-the-text-welc-2r-TO2-EOe-Tt-S8-Zkb-Vwc8-A-uj-Rsj-EA3-Tka-Lix-MD.jpg')] dark:bg-slate-700 bg-cover   bg-center text-center">
      <div className="hero-overlay bg-opacity-6 p-28"></div>
        <div>
        <h1 className="text-3xl text-white  font-bold text-center">All Sports Equipment</h1>
        <p className="text-lg  text-gray-300 font-semibold">Discover a wide range of high-quality sports equipment for every athlete.</p>
        </div>

        {/* <Lottie animationData={animation4} className="w-52 mix-blend-multiply " loop={true} /> */}
        
      </div>

    <div className="w-11/12 mx-auto p-6 my-20">
      <div className="flex justify-between mb-5 items-center ">
      <h2 className="text-2xl font-bold border-l-8 border-primary p-2 text- mb-4">All  Equipment</h2>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Double click to reset sort">
      <button onClick={handleSort} className="btn bg-secondary">Sort by Price <FaSortAlphaDown className="text-xl" /></button>
      </a>
    
     
      </div>
      {/* <table className="w-full border-collapse border border-secondary">
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
                  className="btn btn-sm border-primary bg-transparent py-1 px-3 rounded-3xl  hover:bg-secondary hover:text-gray-800 transition duration-200 ease-in-out"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
          sortedData.map(product=><Card key={product._id} product={product}> </Card>)
        }



      </div>
    </div>
    </div>
  );
};

export default AllSportsEquipment;
