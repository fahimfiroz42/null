

const ParallaxSection = () => {

  const parallaxStyle = {
    backgroundImage: "url('https://i.ibb.co.com/zSSjbqR/a-discount-banner-with-the-text-badminton-racket-s-Q-No-Bt-WTlm-M30f-POind-Lg-Ebzjt-OPVQ66gv-Uft-PYV.jpg')", 
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  };

  return (
    <div>
      {/* Parallax Background */}
      <div
        className="h-[500px] flex items-center justify-center"
        style={parallaxStyle}
      >
        <h1 className=" bg-secondary p-4 text-4xl md:text-6xl font-bold  drop-shadow-lg">
          Gear Up for Victory
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 dark:bg-slate-900  py-16 px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Find the Perfect Equipment for Every Sport
        </h2>
        <p className="text-lg text-gray-700 text-center">
          Explore our wide range of high-quality sports gear and equipment, handpicked to elevate your performance. From soccer to tennis, we have it all!
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/shop"
            className="py-3 px-6 bg-primary text-white text-lg font-semibold rounded-md hover:text-black hover:bg-secondary transition duration-300 ease-in-out"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
