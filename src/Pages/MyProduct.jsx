import { useLoaderData, useNavigate } from "react-router-dom";
import UserProductCard from "../Components/UserProductCard";
import { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation3 from "../assets/animation3.json"
import useTitle from "../Components/UseTitle";
import axios from "axios";
import { AuthContext } from "../AuthPovider/AuthPovider";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { GrView } from "react-icons/gr";




const MyProduct = () => {
    const {user}=useContext(AuthContext)
    useTitle('My Equipment')
    const navigate=useNavigate()
    const [item,setItem]=useState([])

    useEffect(()=>{
        fetchData()
    },[user?.email])

    const handleViewDetails = (id) => {
        navigate(`/product/${id}`);
      };
    
       const handleDelete=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              

            fetch(`https://knull-server.vercel.app/addProduct/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{if(data.deletedCount>0){
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining=item.filter(product=>product._id!==id)
              setItem(remaining)

            }})
            }
          });
            
          



        

    }


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
        <div className="min-h-screen">  
            
            <div className="   bg-secondary">
                
               <div className=" w-11/12 mx-auto flex items-center justify-between">
               <h1 className=" px-4 py-5 bg-center text-3xl font-bold text-gray-800">My Equipment</h1>
               <Lottie className="w-52 " animationData={animation3} loop={true} />
               </div>
                
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-11/12 mx-auto">
            {
                item.map(product=><UserProductCard key={product._id} setItem={setItem} item={item}  product={product}></UserProductCard>)
            }
            
        </div> */}


        <div className="w-11/12 mx-auto my-20 ">

        <table className="w-full border-collapse overflow-x-scroll">
        <thead>
          <tr className="bg-secondary/50   text-left">
            
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item,index) => (
            <tr key={item.id} className=" ">
              <td >{index+1}</td>
              <td ><img className="w-20 h-20 object-contain" src={item.image} alt="" /></td>  
              <td >{item.itemName}</td>
              <td >{item.categoryName}</td>
              <td >${item.price}</td>
              <td>
                <div className="flex items-center justify-evenly">
                <button
                  onClick={() => handleViewDetails(item._id)}
                  className="btn btn-sm bg-primary/40 border-none  text-lg"
                >

                  <GrView />
                </button>
                

                <button onClick={()=>handleDelete(item._id)}  className="btn btn-sm bg-primary/40 border-none text-red-500 text-lg">
                <RiDeleteBin5Line />
                </button>

                <button onClick={()=>navigate(`/updateProduct/${item._id}`)} className="btn btn-sm bg-primary/40 border-none  text-lg">
                <GrUpdate />

                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
         
        </div>
        </div>
    );
};

export default MyProduct;