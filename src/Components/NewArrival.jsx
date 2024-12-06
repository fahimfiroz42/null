
const NewArrival = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div> <h1 className="text-2xl font-bold border-l-8 border-primary p-2 ">Featured</h1></div>
            <div className="text-3xl font-bold my-5"><h1>New Arrival</h1></div>
            <div>
            <div className="grid grid-cols-2 gap-6 p-8 bg-gray-100 dark:bg-slate-900 min-h-screen">
      {/* PlayStation 5 Section */}
      <div className="bg-black text-white rounded-lg p-6 relative flex flex-col justify-between shadow-lg">
        <img
          src="https://i.ibb.co.com/bd0Ftbr/nike-air-force-1.jpg" // Replace with PS5 image
          alt="PlayStation 5"
          className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity duration-300 ease-in-out"
        />
        <div className="relative">
          <h2 className="text-2xl font-bold mb-2">Nike Air 1</h2>
          <p className="text-sm mb-4">
            The Nike Air 1 is a sleek and stylish sneaker that combines
            comfort and style.
          </p>
          <button className="text-white border-b-2 ">
            Shop Now →
          </button>
        </div>
      </div>

    
      <div className="bg-black text-white rounded-lg p-6 relative flex flex-col justify-between shadow-lg">
        <img
          src="https://i.ibb.co.com/VjyvkBt/Incredible-speed-precision.jpg" // Replace with PS5 image
          alt="PlayStation 5"
          className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-80 transition-opacity duration-300 ease-in-out"
        />
        <div className="relative">
          <h2 className="text-2xl font-bold mb-2">Li-Ning</h2>
          <p className="text-sm mb-4">
            The Li-Ning is a famous badminton brand.Get the exclusive collection.
          </p>
          <button className="text-white border-b-2">
            Shop Now →
          </button>
        </div>
      </div>

      {/* Speakers */}
      <div className="bg-black text-white rounded-lg p-6 relative flex flex-col justify-between shadow-lg">
        <img
          src="https://i.ibb.co.com/8546Bb4/6-Amazing-Pieces-of-High-Visibility-Cycling-Gear.jpg" // Replace with PS5 image
          alt="PlayStation 5"
          className="absolute inset-0 w-full h-full object-cover opacity-30 hover:opacity-80 transition-opacity duration-300 ease-in-out"
        />
        <div className="relative">
          <h2 className="text-2xl font-bold mb-2">KNull Headgear</h2>
          <p className="text-sm mb-4">
          Branded Cycle gear for your head protect.
          </p>
          <button className="text-white border-b-2">
            Shop Now →
          </button>
        </div>
      </div>

      {/* Perfume */}
      <div className="bg-black text-white rounded-lg p-6 relative flex flex-col justify-between shadow-lg">
        <img
          src="https://i.ibb.co.com/ky7Gv62/Neatcleats-Align-Speedplay-Zero.jpg" // Replace with PS5 image
          alt="PlayStation 5"
          className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-80 transition-opacity duration-300 ease-in-out"
        />
        <div className="relative">
          <h2 className="text-2xl font-bold mb-2">Neatcleats Align - Speedplay Zero</h2>
          <p className="text-sm mb-4">
            Get the exclusive deal from pre-order.
          </p>
          <button className="text-white border-b-2">
            Shop Now →
          </button>
        </div>
      </div>
    </div>
   
            </div>

            
        </div>
    );
};

export default NewArrival;