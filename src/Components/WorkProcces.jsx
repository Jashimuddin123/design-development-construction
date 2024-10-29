import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const WorkProcces = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-8">
            <div className="text-center mb-8">
                <p className="text-red-500 text-xl mb-2 flex items-center justify-center gap-2"><GoArrowLeft />Working Methodology <GoArrowRight /></p>
                <h1 className="text-blue-950 font-bold text-2xl md:text-4xl lg:text-5xl">How Does We Work</h1>
                
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="relative group card bg-base-100 w-full shadow-xl overflow-hidden">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/rFsnGz4/cover1.jpg"
                            alt="General Contract"
                            className="rounded-xl transition-transform duration-300 group-hover:scale-105  h-44"
                        />
                    </figure>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
                    <div className="card-body items-center text-center relative z-10 group-hover:text-white">
                        <h2 className="card-title text-lg md:text-xl font-semibold">
                            Planning Phase</h2>
                        
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative group card bg-base-100 w-full shadow-xl overflow-hidden">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/pfyWrCW/img6.jpg"
                            alt="Project Planning"
                            className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                        />
                    </figure>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
                    <div className="card-body items-center text-center relative z-10 group-hover:text-white">
                        <h2 className="card-title text-lg md:text-xl font-bold">Survey Phase</h2>
                       
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative group card bg-base-100 w-full shadow-xl overflow-hidden">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/z2dWs5H/img3.png"
                            alt="Interior Design"
                            className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                        />
                    </figure>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
                    <div className="card-body items-center text-center relative z-10 group-hover:text-white">
                        <h2 className="card-title text-lg md:text-xl font-semibold">Design Phase</h2>
                       
                    </div>
                </div>

                {/* Card 4 */}
                <div className="relative group card bg-base-100 w-full shadow-xl overflow-hidden">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/3fnKymq/images4.jpg"
                            alt="Interior Design"
                            className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                        />
                    </figure>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
                    <div className="card-body items-center text-center relative z-10 group-hover:text-white">
                        <h2 className="card-title text-lg md:text-xl font-semibold">Construction Phase</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcces;
