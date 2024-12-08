import React from "react";

const sportsItems = [
  { name: "Cricket", image: "https://i.ibb.co.com/x68cFqK/Pngtree-pattern-cricket-bat-clipart-ball-6024969.png" },
  { name: "Badminton", image: "https://i.ibb.co.com/93L6DWT/transparent-badminton-badminton-racquet-pink-racquet-black-str-pink-badminton-racquet-with-black-han.png" },
  { name: "Football", image: "https://i.ibb.co.com/jHz0Q3d/8ec1a372d876e4839d4cc74551ffbe25.png" },
  { name: "Tennis", image: "https://i.ibb.co.com/ygGJtx0/0a62b9aa25f5237c7fe11d9e3b8c6488.png" },
  { name: "Cycling", image: "https://i.ibb.co.com/ft1r14f/kisspng-fox-reflex-gel-gloves-clothing-fox-mens-ranger-sh-fox-racing-reflex-short-gel-gloves-women39.png" },
  { name: "Swimming", image: "https://i.ibb.co.com/Hn37K5z/bc2131773e2cd18f774d9d202501ad63.png" },
  { name: "Running", image: "https://i.ibb.co.com/YXjzrfj/9d473244387c571fbde9f09ec535f197.png" },
  { name: "Sports Apparel", image: "https://i.ibb.co.com/t4tpYLm/kisspng-clothing-outerwear-ice-hockey-fashion-jacket-create-custom-nhl-jerseys-5b6aee84998e63-601818.png" },
];

const Category = () => {
  return (
    <div className="dark:bg-slate-900">
        <div className="bg-white dark:bg-slate-900  flex flex-col w-11/12 mx-auto py-10">
      {/* Header */}
      <div> <h1 className="text-2xl font-bold border-l-8 border-primary p-2 ">
      Categories</h1></div>
            <div className="text-3xl font-bold my-5"><h1>Browse By Category</h1></div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4   gap-6">
        {sportsItems.map((item, index) => (
          <div
            key={index}
            className="flex hover:translate-y-[-10px] duration-300 flex-col items-center bg-secondary dark:bg-slate-700 rounded-lg p-6 shadow-md"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 mb-4 object-contain hover:scale-125 duration-300"
            />
            {/* Name */}
            <h2 className="text-lg dark:text-gray-400 font-medium text-gray-700">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Category;
