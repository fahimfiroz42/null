import React from "react";

const Brands = () => {
  const brands = [
    { name: "Adidas", logo: "https://i.ibb.co.com/L5fjyf3/kisspng-adidas-stan-smith-adidas-originals-logo-three-stri-silat-5b37806e9de5c7-47473707153036401464.png" },
    { name: "Cosco", logo: "https://i.ibb.co.com/XSZKnSx/0f7d50fc9ab9c884c563a55c98a77e35.png" },
    { name: "Kobo", logo: " https://i.ibb.co.com/ZJBq94S/69665608392eaef47e6d37af87393530.png" },
    { name: "Nike", logo: "https://i.ibb.co.com/4VN09b2/d85bd557bc4ff2d639b486fcb9fca5f4.png" },
    { name: "Puma", logo: "https://i.ibb.co.com/z7cqFkW/a667f2bec1918bbbc4de26dd1295cb29.png" },
    { name: "Reebok", logo: "https://i.ibb.co.com/tzwnR46/kisspng-reebok-classic-logo-sneakers-shoe-reebok-5ac4544571a0f1-3548394015228160694654.png" },
  ];
 


  return (
   <div className="dark:bg-slate-700">
     <div className="bg-white dark:bg-slate-700 py-10 my-5 w-11/12 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-gray-300">Brands</h2>
        <hr className="w-1/12 mx-auto border-2 border-primary" />
      </div>
      <div className="flex flex-wrap justify-around gap-6">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Brands;
