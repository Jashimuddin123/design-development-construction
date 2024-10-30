import { Link } from "react-router-dom";

const BuildingConstruction = () => {
    return (
        <div>
            
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4">
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/QpBkWrM/img1.webp" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/fNbvP1t/monolithic-construction-construction-site-summer-220838-125.jpg" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/ykNFfZZ/img6.webp" alt="" />
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/VxT3tVP/img4.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/5Y1pyGJ/img5.jpg" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/7GyrjH4/img6.jpg" alt="" />
            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/KX3LBdj/img7.jpg" alt="" />
            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/TL9zkqv/img8.jpg" alt="" />
            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/cX6np8P/images9.jpg" alt="" />
        </div>

        <div className="flex justify-center mt-6">
                <Link to="/ourService#architecture">
                    <button className="btn btn-secondary">Back to Services</button>
                </Link>
            </div>
    </div>
    );
};

export default BuildingConstruction;