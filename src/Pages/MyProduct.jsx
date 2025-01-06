import { useLoaderData } from "react-router-dom";
import UserProductCard from "../Components/UserProductCard";
import { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation3 from "../assets/animation3.json"
import useTitle from "../Components/UseTitle";
import axios from "axios";
import { AuthContext } from "../AuthPovider/AuthPovider";
import Swal from "sweetalert2";


const MyProduct = () => {
    const {user}=useContext(AuthContext)
    useTitle('My Equipment')
    
    const [item,setItem]=useState([])

    useEffect(()=>{
        fetchData()
    },[user?.email])

    const fetchData=()=>{
        try {
            axios.get(`http://localhost:5000/userProduct?email=${user.email}`,{withCredentials:true} )  
            .then(res=>setItem(res.data))
        } catch (error) {
         Swal.fire({
             title: 'Error!',
             text: error.message,
             icon: 'error',
             confirmButtonText: 'ok'
         })
        }
     
       

    }

    
    return (
        <div className="min-h-screen  ">  
            
            <div className=" flex justify-between items-center  bg-secondary">
                
               <h1 className=" px-4 py-5 bg-center text-3xl font-bold text-gray-800">My Equipment</h1>
               <Lottie className="w-52 " animationData={animation3} loop={true} />
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-11/12 mx-auto">
            {
                item.map(product=><UserProductCard key={product._id} setItem={setItem} item={item}  product={product}></UserProductCard>)
            }
            
        </div>
        </div>
    );
};

export default MyProduct;