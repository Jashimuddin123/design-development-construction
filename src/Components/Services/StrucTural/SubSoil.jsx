import { Link } from "react-router-dom";


const SubSoil = () => {
    return (
        <div>
            
            <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4">
                <img 
                className="w-full h-96" 
                src="https://i.ibb.co.com/8cYX3yr/img1.jpg" alt="" />

                <img
                className="w-full h-96"
                 src="https://i.ibb.co.com/x83tJZd/img2.jpg" alt="" />

                <img 
                className="w-full h-96"
                 src="https://i.ibb.co.com/HtWYWtV/img3.jpg" alt="" />
                <img 
                className="w-full h-96" 
                src="https://i.ibb.co.com/Mst3t9r/2148751969.jpg" alt="" />

                <img
                className="w-full h-96"
                 src="https://i.ibb.co.com/HN67Kwc/2149500874.jpg" alt="" />

                <img 
                className="w-full h-96"
                 src="https://i.ibb.co.com/RHHcL5m/2149194797.jpg" alt="" />
            </div>

            <div className="flex justify-center mt-6">
        <Link to="/ourService#architecture">
            <button className="btn btn-secondary">Back to Services</button>
        </Link>
         </div>
        </div>
    );
};

export default SubSoil;