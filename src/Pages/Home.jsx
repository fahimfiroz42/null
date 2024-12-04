
import { useLoaderData } from 'react-router-dom';
import Banner from '../Components/Banner';
import OurProduct from '../Components/OurProduct';

const Home = () => {
    const data =useLoaderData()
    return (
        <div>
        <Banner />

        <OurProduct data={data} />
            
            
        </div>
    );
};

export default Home;