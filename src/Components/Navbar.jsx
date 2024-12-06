
import Mytheme from "./Mytheme";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthPovider/AuthPovider";
import { useContext } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const Navbar = () => {

  const{user,signOutUser,setLoading}=useContext(AuthContext)
  const handleLogout=()=>{
    signOutUser()
    setLoading(false)
  }

    return (
        <div >
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/allProduct'}>All Equipment</NavLink></li>
      <li><NavLink to={'/addProduct'}>Add Equipment</NavLink></li>
      <li><NavLink to={'/myProduct'}>My Equipment</NavLink></li>

      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-3xl "><span className="text-primary">K</span>Null</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-md font-bold text-gray-400">
      <li><NavLink to={'/'}  >Home</NavLink></li>
      <li><NavLink to={'/allProduct'}>All Equipment</NavLink></li>
      <li><NavLink to={'/addProduct'}>Add Equipment</NavLink></li>
      <li><NavLink to={`/myProduct/${user?.email}`} >My Equipment</NavLink></li>

      
     
    </ul>
  </div>
  <div className="navbar-end space-x-2 z-50 ">
  <a  data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} >
      {
        user?.email && <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full" />
      }
      
      
    </a>
    <Tooltip id="my-tooltip" />
    
    {
      user?.email ?<button onClick={handleLogout} className="btn btn-sm bg-primary text-md font-bold rounded-full"> Logout</button>:<div className="join  ">
        <Link to={'/login'} className="btn btn-sm join-item bg-primary text-md font-bold rounded-full">Login</Link> 
        <Link to={'/register'} className="btn btn-sm join-item   bg-primary text-md font-bold rounded-full">Register</Link> 
        
      </div>
    }

  
    <Mytheme/>
  </div>
</div>

            
        </div>
    );
};

export default Navbar;