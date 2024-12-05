import Card from "./Card";


const OurProduct = ({data}) => {
    
    return (
        <div className="w-11/12 mx-auto">
            <div className=" my-20">
                <h1 className="text-4xl font-bold text-center" >Our Product</h1>
                <hr className="w-1/12 mx-auto border-2 border-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

                {
                    data.map( product => <Card key={product._id} product={product}></Card>)
                }



            </div>
            
        </div>
    );
};

export default OurProduct;