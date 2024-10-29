import { Link } from "react-router-dom";


const Survey = () => {
    return (
        <div>
            
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4">
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/fDVkPvr/img1.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/MDmkXkM/img2.jpg" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/qj15XLz/img3.jpg" alt="" />
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/wMqB3mh/img4.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/FYZydJ2/img5.jpg" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/pfyWrCW/img6.jpg" alt="" />
        </div>

        <div className="flex justify-center mt-6">
        <Link to="/ourService#architecture">
            <button className="btn btn-secondary">Back to Services</button>
        </Link>
    </div>
    </div>
    );
};

export default Survey;