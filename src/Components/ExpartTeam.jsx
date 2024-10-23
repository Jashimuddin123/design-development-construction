import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ExpartTeam = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center mb-8">
                <p className="text-blue-600 text-xl mb-2 flex items-center justify-center gap-2">
                    <GoArrowLeft /> our team <GoArrowRight />
                </p>
                <h1 className="text-blue-950 font-bold text-2xl md:text-4xl lg:text-5xl">Our expert team</h1>
            </div>

            {/* Card section here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div>
                <div className="relative group w-full h-72 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: 'url(https://i.ibb.co.com/XLJ4zBg/cover3.jpg)' }}>
                    {/* Social Icons - Initially hidden */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 border-orange-500 border-8 transition-opacity duration-300">
                        <a href="https://facebook.com" className="text-white mx-2">
                            <FaFacebookF size={24} className="text-white bg-blue-500 w-8 h-8 p-1" />
                        </a>
                        <a href="https://twitter.com" className="bg-white text-black rounded-full p-1">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <h2 className="text-center text-blue-500">Company CEO</h2>
                <h2 className="text-center text-black font-bold text-xl">Jashim Uddin</h2>
                </div>

                {/* Card 2 */}
                <div>
                <div className="relative group w-full h-72 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: 'url(https://i.ibb.co.com/XLJ4zBg/cover3.jpg)' }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 border-orange-500 border-8 transition-opacity duration-300">
                        <a href="https://facebook.com" className="text-white mx-2">
                            <FaFacebookF size={24} className="text-white bg-blue-500 w-8 h-8 p-1" />
                        </a>
                        <a href="https://twitter.com" className="bg-white text-black rounded-full p-1">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <h2 className="text-center text-blue-500">Project Manager</h2>
                <h2 className="text-center text-black font-bold text-xl">Iqbal Hossain</h2>
                </div>

                {/* Card 3 */}
                <div>
                <div className="relative group w-full h-72 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: 'url(https://i.ibb.co.com/XLJ4zBg/cover3.jpg)' }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 border-orange-500 border-8 transition-opacity duration-300">
                        <a href="https://facebook.com" className="text-white mx-2">
                            <FaFacebookF size={24} className="text-white bg-blue-500 w-8 h-8 p-1" />
                        </a>
                        <a href="https://twitter.com" className="bg-white text-black rounded-full p-1">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <h2 className="text-center text-blue-500">Engineer</h2>
                <h2 className="text-center text-black font-bold text-xl">Mohammamad Hasan</h2>
                </div>

                {/* Card 4 */}
              <div>
              <div className="relative group w-full h-72 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: 'url(https://i.ibb.co.com/XLJ4zBg/cover3.jpg)' }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 border-orange-500 border-8 transition-opacity duration-300">
                        <a href="https://facebook.com" className="text-white mx-2">
                            <FaFacebookF size={24} className="text-white bg-blue-500 w-8 h-8 p-1" />
                        </a>
                        <a href="https://twitter.com" className="bg-white text-black rounded-full p-1">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <h2 className="text-center text-blue-500">Worker</h2>
                <h2 className="text-center text-black font-bold text-xl">Jashim</h2>
              </div>
              <div>
              <div className="relative group w-full h-72 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: 'url(https://i.ibb.co.com/XLJ4zBg/cover3.jpg)' }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 border-orange-500 border-8 transition-opacity duration-300">
                        <a href="https://facebook.com" className="text-white mx-2">
                            <FaFacebookF size={24} className="text-white bg-blue-500 w-8 h-8 p-1" />
                        </a>
                        <a href="https://twitter.com" className="bg-white text-black rounded-full p-1">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <h2 className="text-center text-blue-500">Worker</h2>
                <h2 className="text-center text-black font-bold text-xl">Jashim</h2>
              </div>
              <div>
              <div className="relative group w-full h-72 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: 'url(https://i.ibb.co.com/XLJ4zBg/cover3.jpg)' }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 border-orange-500 border-8 transition-opacity duration-300">
                        <a href="https://facebook.com" className="text-white mx-2">
                            <FaFacebookF size={24} className="text-white bg-blue-500 w-8 h-8 p-1" />
                        </a>
                        <a href="https://twitter.com" className="bg-white text-black rounded-full p-1">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <h2 className="text-center text-blue-500">Worker</h2>
                <h2 className="text-center text-black font-bold text-xl">Jashim</h2>
              </div>
            </div>
        </div>
    );
};

export default ExpartTeam;
