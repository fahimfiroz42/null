
import { useNavigate } from "react-router-dom";

const AllSportsEquipment = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/equipment/${id}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">All Sports Equipment</h2>
      <table className="w-full border-collapse border border-secondary">
        <thead>
          <tr className="bg-secondary text-left">
            <th className="border border-secondary p-2">Name</th>
            <th className="border border-secondary p-2">Category</th>
            <th className="border border-secondary p-2">Price</th>
            <th className="border border-secondary p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((item) => (
            <tr key={item.id} className="hover:bg-secondary">
              <td className="border border-secondary p-2">{item.name}</td>
              <td className="border border-secondary p-2">{item.category}</td>
              <td className="border border-secondary p-2">${item.price}</td>
              <td className="border border-secondary p-2">
                <button
                  onClick={() => handleViewDetails(item.id)}
                  className="bg-primary text-white py-1 px-3 rounded hover:bg-secondary hover:text-primary"
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
const equipmentData = [
    { id: 1, name: "Football", category: "Outdoor", price: 25 },
    { id: 2, name: "Basketball", category: "Indoor", price: 30 },
    { id: 3, name: "Tennis Racket", category: "Racket Sports", price: 50 },
    // Add more data here...
  ];