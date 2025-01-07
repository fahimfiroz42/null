import { FaUsers, FaChartLine, FaCode, FaPalette, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {

  return (
    <div className="min-h-screen dark:bg-slate-950 bg-white">
    {/* Hero Section */}
    <div className="relative h-[300px] bg-[#1a1a1a] text-white">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
        alt="Office meeting"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>
    </div>

    {/* Main Content */}
    <div className="w-11/12 mx-auto px-4 py-16">
      {/* Company Info */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
          alt="Business professional"
          className=" rounded-lg shadow-xl"
        />
        <div className="space-y-6">
          <div className="inline-block  p-4 bg-secondary rounded-full">
            <div className="w-12 h-12  bg-primary rounded-full flex items-center justify-center">
              <FaUsers className="w-6 h-6 text-white " />
            </div>
          </div>
          <h2 className="text-3xl font-bold">The Best Sports Gears<br />in Town Since 2007</h2>
          <p className="text-gray-600">We provide sports gears and innovative solutions to make your sports journey more interesting</p>

          <Link to={'/'}>
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition">
            Learn More
          </button>
          </Link>
          
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50  dark:bg-slate-950 rounded-xl py-12 mb-20">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">12k+</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">950+</h3>
            <p className="text-gray-600">Sales Complete</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">4.7+</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-12">We're 36+ Active & Dedicated Members<br />for Helping the Customers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Charles E. Brown",
              role: "Financial Advisor",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
            },
            {
              name: "John Smith",
              role: "CEO",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
            },
            {
              name: "Sarah Martinez",
              role: "Business Analyst",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-8">We Provide Creative Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-between">
            {[
              { icon: <FaChartLine />, text: "Sports Consulting" },
              { icon: <FaChartLine />, text: "Marketing Strategy" },
              { icon: <FaCode />, text: "Eqipments" },
              { icon: <FaPalette />, text: "Brand Development" }
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 text-3xl bg-secondary rounded-full">
                  {service.icon}
                </div>
                <span className='text-xl font-bold'>{service.text}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>

    
  </div>



  )
    
};

export default AboutUsPage;
