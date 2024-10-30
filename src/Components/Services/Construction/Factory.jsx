import { Link } from "react-router-dom";

const Factory = () => {
    return (
        <div>
            
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4">
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/4mvT2tB/img1.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/DWBsDcf/img2.webp" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/18WsQX5/img3.jpg" alt="" />
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/GV8sD42/factory4.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/PQZndkS/factory.webp" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/r7fDMRx/img6.webp" alt="" />
         
        </div>

            <div className="flex justify-center mt-6">
                <Link to="/ourService#architecture">
                    <button className="btn btn-secondary">Back to Services</button>
                </Link>
            </div>
    </div>
    );
};

export default Factory;