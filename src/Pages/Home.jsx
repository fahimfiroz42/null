
import { useLoaderData } from 'react-router-dom';
import Banner from '../Components/Banner';
import OurProduct from '../Components/OurProduct';
import { Fade } from "react-awesome-reveal";
import AboutUs from '../Components/AboutUs';
import Gallery from '../Components/Gallery';
import Brands from '../Components/Brand';
import Category from '../Components/Category';
import NewArrival from '../Components/NewArrival';
import FlashSale from '../Components/FlashSale';
import useTitle from '../Components/UseTitle';
const Home = () => {
    useTitle('Home')
    const data =useLoaderData()
    return (
        <div>
        <Banner />
        <FlashSale />
        
        <Category />
       <Fade >
       <OurProduct data={data} />

       </Fade>

       <NewArrival />
       <Brands />
       <AboutUs />
       <Gallery />
            
        </div>
    );
};

export default Home;