import { Link,  } from 'react-router-dom';

const Views3D = () => {

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 lg:gap-8">
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img className="w-full h-64 sm:h-80 lg:h-80 object-cover" src="https://i.ibb.co.com/fxdb9cf/images1.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body"></div>
                </div>
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img className="w-full h-64 sm:h-80 lg:h-80 object-cover" src="https://i.ibb.co.com/1TxtM00/images2.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body"></div>
                </div>
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img className="w-full h-64 sm:h-80 lg:h-80 object-cover" 
                        src="https://i.ibb.co.com/XXL6Rx6/images4.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body"></div>
                </div>
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img className="w-full h-64 sm:h-80 lg:h-80 object-cover" src="https://i.ibb.co.com/Z6C6j2Q/images3.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body"></div>
                </div>
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img className="w-full h-64 sm:h-80 lg:h-80 object-cover" src="https://i.ibb.co.com/7rQTJkp/images5.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body"></div>
                </div>
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img className="w-full h-64 sm:h-80 lg:h-80 object-cover" src="https://i.ibb.co.com/crh2bnS/images6.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body"></div>
                </div>
                <div className="card card-compact bg-base-100 w-full shadow-xl">
                    <figure>
                        <img className="w-full h-64 sm:h-80 lg:h-80 object-cover"
                         src="https://i.ibb.co.com/MsS9WcH/images7.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body"></div>
                </div>
             
            </div>
            <div className="flex justify-center mt-6">
                <Link to="/ourService#architecture">
                    <button className="btn btn-secondary">Back to Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Views3D;
