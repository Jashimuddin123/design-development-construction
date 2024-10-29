import { Link } from "react-router-dom";

const WarehouseConstruction = () => {
    return (
        <div className="px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-4">
                <img 
                    className="w-full h-64 sm:h-80 md:h-96 rounded" 
                    src="https://i.ibb.co.com/XXNpbCw/images-1.jpg" 
                    alt="" 
                />
                <img
                    className="w-full h-64 sm:h-80 md:h-96 rounded"
                    src="https://i.ibb.co.com/8NsNtV2/images-2.jpg" 
                    alt="" 
                />
                <img 
                    className="w-full h-64 sm:h-80 md:h-96 rounded"
                    src="https://i.ibb.co.com/W2mKtQW/images-3.jpg" 
                    alt="" 
                />
                <img 
                    className="w-full h-64 sm:h-80 md:h-96 rounded" 
                    src="https://i.ibb.co.com/ccmz6sv/images-4.jpg" 
                    alt="" 
                />
                <img
                    className="w-full h-64 sm:h-80 md:h-96 rounded"
                    src="https://i.ibb.co.com/tYvRF7L/images-5.jpg" 
                    alt="" 
                />
                <img 
                    className="w-full h-64 sm:h-80 md:h-96 rounded"
                    src="https://i.ibb.co.com/JsC7wNc/images6.jpg" 
                    alt="" 
                />
            </div>

            <div className="flex justify-center mt-6">
                <Link to="/ourService#architecture">
                    <button className="btn btn-secondary">Back to Services</button>
                </Link>
            </div>
        </div>
    );
};

export default WarehouseConstruction;
