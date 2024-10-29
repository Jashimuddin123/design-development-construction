import { Link } from "react-router-dom";







const WarehouseDesign = () => {
    return (
        <div>
            
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4">
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/xGt6tLL/img1.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/zScYRCb/img2.jpg" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/fYvmwyf/img3.jpg" alt="" />
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/6071fwF/img4.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/v15dwV9/img5.jpg" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/YhXCS4f/img6.jpg" alt="" />
        </div>

        <div className="flex justify-center mt-6">
        <Link to="/ourService#architecture">
            <button className="btn btn-secondary">Back to Services</button>
        </Link>
    </div>
    </div>
    );
};

export default WarehouseDesign;