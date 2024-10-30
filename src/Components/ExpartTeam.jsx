
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ExpartTeam = () => {
    return (
        <div className="container mx-auto p-4 ">
            <div className="text-center mb-8">
                <p className="text-blue-600 text-2xl mb-2 flex items-center justify-center gap-2">
                    <GoArrowLeft /> Our team <GoArrowRight />
                </p>
                <h1 className="text-blue-950 font-bold text-2xl md:text-4xl lg:text-5xl">Our expert team</h1>
            </div>

            {/* Card section here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
            <Link to="/constructionTeam">
    <div className="border-4 bg-teal-100 rounded-lg border-teal-400 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
        <img 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mt-4 rounded-full mx-auto"
            src="https://i.ibb.co.com/b2GhwBf/mustafizur-Rahman.jpg" 
            alt="Mustafijur Rahman" 
        />
        <h1 className="text-2xl md:text-3xl font-bold text-center mt-4 text-gray-800">Mustafijur Rahman</h1>
        <p className="text-center text-gray-600">Project Manager</p>
        <div className="flex justify-center mt-4 mb-4">
            <button className="px-4 py-2 bg-blue-700 text-white w-32 text-lg rounded-full hover:bg-red-500">
               See Profile
            </button>
        </div>
    </div>
</Link>


<Link to="/architech" >
<div className="border-4 bg-teal-100 rounded-lg border-teal-400 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
    <img 
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mt-4 rounded-full mx-auto"
        src="https://i.ibb.co.com/gMPjLCt/Whats-App-Image-2024-10-29-at-20-53-58-74e0bd35.jpg" 
        alt="Mustafijur Rahman" 
    />
    <h1 className="text-2xl md:text-3xl font-bold text-center mt-4 text-gray-800">Ferdoush Hasan</h1>
    <p className="text-center text-gray-600 text-lg font-bold">Architect</p>
    <div className="flex justify-center mt-4 mb-4">
        <Link to="/architech">
            <button className="px-4 py-2 bg-blue-700 w-32 text-lg text-white rounded-full hover:bg-red-500 mx-auto">
                See Profile
            </button>
        </Link>
    </div>
</div>
</Link>

<Link to="/structure">
<div className="border-4 bg-teal-100 rounded-lg border-teal-400 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
    <img 
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mt-4 rounded-full mx-auto"
        src="https://i.ibb.co/N3qFYBv/ruhul-kuddos.jpg" alt="Mustafijur Rahman" 
    />
    <h1 className="text-2xl md:text-3xl font-bold text-center mt-4 text-gray-800">
        Ruhul Quddus
    </h1>
    <p className="text-center text-gray-600">Chief Structure Engineer</p>
    <div className="flex justify-center mt-4 mb-4">
        <Link to="/structure" className="w-32">
            <button className="px-4 py-2 bg-blue-700 w-32 text-lg text-white rounded-full hover:bg-red-500">See Profile</button>
        </Link>
    </div>
</div>
</Link>

<Link to="/structure">
<div className="border-4 bg-teal-100 rounded-lg border-teal-400 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
    <img 
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mt-4 rounded-full mx-auto"
        src="https://i.ibb.co.com/mSWMny2/md-masiur-rahman.jpg" alt="Mustafijur Rahman" 
    />
    <h1 className="text-2xl md:text-3xl font-bold text-center mt-4 text-gray-800">
        MD. MOSHIUR RAHMAN
    </h1>
    <p className="text-center text-gray-600">⁠Structure Engineer</p>
    <div className="flex justify-center mt-4 mb-4">
        <Link to="/structure">
            <button className="px-4 py-2 bg-blue-700 w-32 text-lg text-white rounded-full hover:bg-red-500">
                See Profile
            </button>
        </Link>
    </div>
</div>
</Link>

<Link to="/structure">
<div className="border-4 bg-teal-100 rounded-lg border-teal-400 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
    <img 
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mt-4 rounded-full mx-auto"
        src="https://i.ibb.co.com/MfsJZw3/md-mahbubul-islam.jpg" alt="Mustafijur Rahman" 
    />
    <h1 className="text-2xl md:text-3xl font-bold text-center mt-4 text-gray-800">
        MD. MAHABUBUL ISLAM
    </h1>
    <p className="text-center text-gray-600">Geotechnical Engineer</p>
    <div className="flex justify-center mt-4 mb-4">
        <Link to="/structure" className="w-32">
            <button className=" py-2 bg-blue-700 w-32 text-lg text-white rounded-full hover:bg-red-500">
                See Profile
            </button>
        </Link>
    </div>
</div>
</Link>

<Link to="/structure"> 
<div className="border-4 bg-teal-100 rounded-lg border-teal-400 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
    <img 
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mt-4 rounded-full mx-auto"
        src="https://i.ibb.co.com/DDsD45J/jahirul-islam.jpg" 
        alt="Mustafijur Rahman"
    />
    <h1 className="text-2xl md:text-3xl font-bold text-center mt-4 text-gray-800">
        Jahurul Islam
    </h1>
    <p className="text-center text-gray-600">Geologist</p>
    <div className="flex justify-center mt-4 mb-4">
        <Link to="/structure" className="w-full max-w-xs flex justify-center">
            <button className="px-4 py-2 bg-blue-700 w-32 text-lg text-white rounded-full hover:bg-red-500">
                See Profile
            </button>
        </Link>
    </div>
</div>
</Link>


 
</div>

        </div>
    );
};

export default ExpartTeam;
