import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Responsive Navbar */}
            <Navbar />

            {/* Responsive Main Content Area */}
            <main className="flex-grow p-4 sm:p-6 md:p-8 lg:p-10">
                <Outlet />
            </main>
        </div>
    );
};

export default Root;
