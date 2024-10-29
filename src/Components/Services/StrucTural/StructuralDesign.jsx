import { Link } from "react-router-dom";

const StructuralDesign = () => {
    return (
        <div>
            
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4">
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/rkC3w5G/img1.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/zH0LQGn/img2.jpg" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/z2dWs5H/img3.png" alt="" />
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/9bFX9hK/img4.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/D8Sk9qM/img4.webp" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/1zz4pRF/img5.jpg
         " alt="" />
        </div>

        <div className="flex justify-center mt-6">
        <Link to="/ourService#architecture">
            <button className="btn btn-secondary">Back to Services</button>
        </Link>
    </div>
    </div>
    );
};

export default StructuralDesign;