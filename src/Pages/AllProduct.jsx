
import { useLoaderData, useNavigate } from "react-router-dom";

const AllSportsEquipment = () => {
  const navigate = useNavigate();
  const data=useLoaderData();


  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 my-20">
      <h2 className="text-2xl font-bold text- mb-4">All Sports Equipment</h2>
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
          {data.map((item) => (
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
