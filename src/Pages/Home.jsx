
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
import Offer from '../Components/Offer';
import VismeForm from '../Components/Visme';
import ParallaxSection from '../Components/Paralex';
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

       <Offer/>

       <NewArrival />
       <Brands />
       <AboutUs />
       <ParallaxSection/>
       <Gallery />
       <VismeForm />

      
            
        </div>
    );
};

export default Home;