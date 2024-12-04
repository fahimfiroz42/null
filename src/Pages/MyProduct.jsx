import { useLoaderData } from "react-router-dom";
import UserProductCard from "../Components/UserProductCard";


const MyProduct = () => {
    const data=useLoaderData()

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-11/12 mx-auto">
            {
                data.map(product=><UserProductCard key={product._id} product={product}></UserProductCard>)
            }
            
        </div>
    );
};

export default MyProduct;