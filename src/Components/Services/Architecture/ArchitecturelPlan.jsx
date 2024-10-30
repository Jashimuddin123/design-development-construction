import { Link } from "react-router-dom";

const ArchitecturelPlan = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 lg:gap-8">
                <div className="card border-4 border-teal-700 card-compact bg-base-100 w-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-2 hover:border-blue-500 hover:-translate-y-2">
                    <figure>
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co.com/Cbdqvpt/image1.jpg"
                            alt="Architecture Design 1"
                        />
                    </figure>
                    <div className="card-body text-center p-4">
                        <h2 className="font-bold text-lg">Architecture Design 1</h2>
                        
                    </div>
                </div>
                <div className="card card-compact border-4 border-teal-700 bg-base-100 w-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-2 hover:border-blue-500 hover:-translate-y-2">
                    <figure>
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co.com/GtMv1rL/image2.jpg"
                            alt="Architecture Design 2"
                        />
                    </figure>
                    <div className="card-body text-center p-4">
                        <h2 className="font-bold text-lg">Architecture Design 2</h2>
                        
                    </div>
                </div>
                <div className="card border-4 border-teal-700 card-compact bg-base-100 w-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-2 hover:border-blue-500 hover:-translate-y-2">
                    <figure>
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co.com/tBFLtJt/image3.jpg"
                            alt="Architecture Design 3"
                        />
                    </figure>
                    <div className="card-body text-center p-4">
                        <h2 className="font-bold text-lg">Architecture Design 3</h2>
                        
                    </div>
                </div>
                <div className="card border-4 border-teal-700 card-compact bg-base-100 w-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-2 hover:border-blue-500 hover:-translate-y-2">
                    <figure>
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co.com/XDg1xzM/image4.jpg"
                            alt="Architecture Design 4"
                        />
                    </figure>
                    <div className="card-body  text-center p-4">
                        <h2 className="font-bold text-lg">Architecture Design 4</h2>
                        
                    </div>
                </div>
                <div className="card card-compact border-4 border-teal-700 bg-base-100 w-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-2 hover:border-blue-500 hover:-translate-y-2">
                    <figure>
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co.com/SJmqzQ1/image5.jpg"
                            alt="Architecture Design 5"
                        />
                    </figure>
                    <div className="card-body text-center p-4">
                        <h2 className="font-bold text-lg">Architecture Design 5</h2>
                        
                    </div>
                </div>
                <div className="card border-4 border-teal-700 card-compact bg-base-100 w-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-2 hover:border-blue-500 hover:-translate-y-2">
                    <figure>
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co.com/kyQfNt7/image6.jpg"
                            alt="Architecture Design 6"
                        />
                    </figure>
                    <div className="card-body text-center p-4">
                        <h2 className="font-bold text-lg">Architecture Design 6</h2>
                       
                    </div>
                </div>
                <div className="card border-4 border-teal-700 card-compact bg-base-100 w-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-2 hover:border-blue-500 hover:-translate-y-2">
                    <figure>
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co.com/7SvRk3h/image7.jpg"
                            alt="Architecture Design 7"
                        />
                    </figure>
                    <div className="card-body text-center p-4">
                        <h2 className="font-bold text-lg">Architecture Design 7</h2>
                       
                    </div>
                </div>
                <div className="card border-4 border-teal-700 card-compact bg-base-100 w-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:border-2 hover:border-blue-500 hover:-translate-y-2">
                    <figure>
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co.com/ncXmSZ4/image8.jpg"
                            alt="Architecture Design 8"
                        />
                    </figure>
                    <div className="card-body text-center p-4">
                        <h2 className="font-bold text-lg">Architecture Design 8</h2>
                        
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <Link to="/ourService#architecture">
                    <button className="btn btn-primary font-bold">Back to Services</button>
                </Link>
            </div>
        </div>
    );
};

export default ArchitecturelPlan;
