
import { useLoaderData } from 'react-router-dom';
import Banner from '../Components/Banner';
import OurProduct from '../Components/OurProduct';
import { Fade } from "react-awesome-reveal";
import AboutUs from '../Components/AboutUs';
import Gallery from '../Components/Gallery';
import Brands from '../Components/Brand';
import Category from '../Components/Category';
const Home = () => {
    const data =useLoaderData()
    return (
        <div>
        <Banner />
        
        <Category />
       <Fade >
       <OurProduct data={data} />
       </Fade>
       <Brands />
       <AboutUs />
       <Gallery />
            
        </div>
    );
};

export default Home;