import { Link } from "react-router-dom";

const CompositeDesign = () => {
    return (
        <div>
            
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4">
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/X5QMMTT/images-1.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
              src="https://i.ibb.co.com/FmYLd4j/images7.webp"
           
              alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/2NBVyQV/images-2.jpg"
              alt="" />
            <img 
            className="w-full h-96 rounded" 
            src="https://i.ibb.co.com/3fnKymq/images4.jpg" alt="" />

            <img
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/C2tS3vc/images5.jpg" alt="" />

            <img 
            className="w-full h-96 rounded"
             src="https://i.ibb.co.com/FWHLjh8/images6.jpg" alt="" />
            <img 
             
            className="w-full h-96 rounded"
            src="https://i.ibb.co.com/h9nLqrR/images-3.jpg"
            alt="" />
        </div>

        <div className="flex justify-center mt-6">
        <Link to="/ourService#architecture">
            <button className="btn btn-secondary">Back to Services</button>
        </Link>
    </div>
    </div>
    );
};

export default CompositeDesign;