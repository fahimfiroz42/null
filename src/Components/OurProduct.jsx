import Card from "./Card";


const OurProduct = ({data}) => {
    
    return (
        <div className="w-11/12 mx-auto">
            <div className=" my-20">
            <div> <h1 className="text-2xl font-bold border-l-8 border-primary p-2 ">Our Product</h1></div>
            <div className="text-3xl font-bold my-5"><h1>Explore Our Products</h1></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">

                {
                    data.map( product => <Card key={product._id} product={product}></Card>)
                }



            </div>
            
        </div>
    );
};

export default OurProduct;