import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Footer/Footer';


const Root = () => {
    return (
        <div className="flex flex-col min-h-screen w-full border border-red-500">
            {/* Responsive Navbar */}
            <Navbar />
 
            {/* Responsive Main Content Area */}
            <main className="flex-grow ">
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;


