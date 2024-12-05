import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 text-white">
      <div className="grid grid-cols-12 w-full max-w-6xl">
        {/* Left Section - Content */}
        <div className="col-span-12 lg:col-span-7 self-center bg-primary dark:bg-slate-700 p-10">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed">
            With equipment for almost every sport, we, Target Zone situated at
            Malad West, Mumbai, Maharashtra, are the most sought-after supplier
            to purchase sport wear of your favorite sport. We understand that
            each sport has its own set of accessories and equipment that need
            to be worn and used to play the game, and thus we have each and
            every item that you can lay your hands on. Our staff is well-versed
            about the details of every product.
          </p>
        </div>
        {/* Right Section - Green Accent */}
        <div className="col-span-12 lg:col-span-5">
          <img className="" src="https://i.ibb.co.com/JnLGgvz/top-view-composition-with-neatly-arranged-organized-sport-items.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
