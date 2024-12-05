import { useLoaderData } from "react-router-dom";
import UserProductCard from "../Components/UserProductCard";
import { useState } from "react";


const MyProduct = () => {
    const data=useLoaderData()
    const [item,setItem]=useState(data)

    
    return (
        <div className="min-h-screen  bg-[url('https://i.ibb.co.com/sPjRwcb/90183771-SL-072723-61870-01.jpg')] bg-center bg-cover bg-no-repeat"> 
            
            <div className="text-center p-28 bg-center text-3xl font-bold text-gray-800  bg-[url('https://i.ibb.co.com/xsS7PBn/rb-4026.png')]">
                
                My Product
                <hr className="w-1/12 mx-auto border-2 border-primary" />
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