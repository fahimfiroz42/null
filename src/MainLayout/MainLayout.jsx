
import Navbar from '../Components/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>

            <ScrollRestoration/>
            <Outlet />

            <Footer />
            
        </div>
    );
};

export default MainLayout;