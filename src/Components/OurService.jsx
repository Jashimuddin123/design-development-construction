import { Link } from "react-router-dom";

const OurService = () => {
    return (
        <div className="min-h-screen">
            {/* Top banner */}
            <div className="bg-[url('https://i.ibb.co.com/XLJ4zBg/cover3.jpg')] bg-cover bg-center bg-gray-800 text-white py-6 h-56 px-4 md:px-10">
                <h2 className="text-3xl text-red-700 text-center font-bold">Our Services</h2>
                <nav className="mt-2">
                    <ol className="list-reset flex justify-center">
                        <li><a href="#" className="text-black font-semibold text-lg">Home</a></li>
                        <li><span className="mx-2">/</span></li>
                        <li className="text-black font-semibold text-lg">Service</li>
                    </ol>
                </nav>
            </div>
          
            {/* Architecture Related  Section */}
            <div>
            <div id="architecture">
    <h2 className="text-center text-4xl mt-8 mb-6 text-teal-700 underline font-bold ">Architecture</h2>
    {/* Architecture section content */}
</div>
                <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {/* card1 */}
                    <div className="card pb-4 card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
            <figure>
                <img
                className="w-full h-64"
                    src="https://i.ibb.co.com/crh2bnS/images6.jpg"
                    alt="Chemical research"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">3D View</h2>
                <p className="text-gray-500  text-[16px]">A realistic 3D construction view showcasing detailed architectural design, structural layout, and material textures for immersive visualization of the project..</p>
                <div className="card-actions justify-end"></div>
            </div>
            <Link
             to="/views3D" className="bg-teal-900 w-32 py-3 ml-2 text-white rounded px-4">
                Show More
            </Link>
        </div>
                    {/* card2 */}
                    <div className="card pb-4  card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
            <figure>
                <img
                className="w-full h-64"
                    src="https://i.ibb.co.com/XDg1xzM/image4.jpg"
                    alt="Chemical research"
                />
            </figure>
            <div className="card-body">
            <h2 className="card-title text-xl font-bold">Architecture Plan</h2>
                <p className="text-gray-500  text-[16px]"> detailed architecture plan illustrating floor layouts, spatial dimensions, and functional zones, providing a clear blueprint for construction and design execution.</p>
                <div className="card-actions justify-end"></div>
            </div>
            <Link
             to="/architecturelPlan" className="bg-teal-900 w-32 ml-2 py-3 text-white rounded px-4">
                Show More
            </Link>
        </div>
                    
          {/* card 3 */}
     <div id="landscaping" className="card pb-4 card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
    <figure>
        <img
            className="w-full h-64"
            src="https://i.ibb.co/zhwb3tc/img3.jpg"
            alt="Chemical research"
        />
    </figure>
    <div className="card-body">
        <h2 className="card-title text-xl font-bold">Landscaping</h2>
        <p className="text-gray-500  text-[16px]">Visually appealing landscaping design with vibrant plantings, walkways, and natural elements, creating a harmonious outdoor space for relaxation and enjoyment.</p>
    </div>
    <Link to="/landscaping" className="bg-teal-900 w-32 py-3 ml-2 text-white rounded px-4">
        Show More
    </Link>
</div>

                </div>
            </div>
            {/* Structural: Section */}
            <div>
           
                <h2 className="text-center text-4xl mt-8 mb-6 text-teal-700 underline font-bold ">Structural:</h2>
                <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {/* card1 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                               className="w-full h-64"
                                src="https://i.ibb.co.com/HtWYWtV/img3.jpg"
                                alt="Chemical research" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Sub soil investigation</h2>
                            <p className="text-gray-500  text-[16px]">A comprehensive sub-soil investigation analyzing soil composition, strength, and stability to ensure safe, reliable foundation design for construction projects.</p>
                            <div className="card-actions justify-end">
                          
                            </div>
                        </div>
                        
                        <Link to="/subSoil" className="bg-teal-900 w-32 mb-3 py-3 ml-2 text-white rounded px-4">
                         Show More
                    </Link>
                    </div>
                    {/* card2 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                               className="w-full h-64"
                                src="https://i.ibb.co.com/hVSVPTs/img3.jpg"
                                alt="Smart Technology" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Laboratory Testing</h2>
                            <p className="text-gray-500  text-[16px]">
                            Precise laboratory testing of construction materials, assessing strength, durability, and composition to ensure quality, safety, and compliance with industry standards.</p>
                            <div className="card-actions justify-end">
                   
                            </div>
                        </div>
                        <Link to="/laboratoryTesting" className="bg-teal-900 w-32 mb-3 py-3 ml-2 text-white rounded px-4">
                        Show More
                        </Link>
                    </div>
                      
                      {/* card3 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                               className="w-full h-64"
                                src="https://i.ibb.co.com/MDmkXkM/img2.jpg"
                                alt="Best Engineering" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Survey</h2>
                            <p className="text-gray-500  text-[16px]">
                            Accurate construction survey mapping, measuring land contours, boundaries, and elevations, providing essential data for site planning and project execution.</p>
                            <div className="card-actions justify-end">
                         
                            </div>
                        </div>
                        <Link to="/survey" className="bg-teal-900 mb-3 w-32 py-3 ml-2 text-white rounded px-4">
                           Show More
                         </Link>
                    </div>
                    {/* card4 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                            className="w-full h-64"
                                src="https://i.ibb.co.com/rkC3w5G/img1.jpg"
                                alt="Smart Technology" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Structural design</h2>
                            <p className="text-gray-500  text-[16px]">
                            Innovative structural design ensuring stability, strength, and safety, incorporating load analysis, material selection, and modern engineering principles for resilient construction</p>
                            <div className="card-actions justify-end">
                    
                            </div>
                        </div>
                        <Link to="/structuralDesign" className="bg-teal-900 mb-3 w-32 py-3 ml-2 text-white rounded px-4">
                           Show More
                          </Link>
                    </div>
                    {/* card 5 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                            className="w-full h-64"
                                src="https://i.ibb.co.com/v15dwV9/img5.jpg"
                                alt="Smart Technology" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Warehouse design</h2>
                            <p className="text-gray-500  text-[16px]">
                            Efficient warehouse design focused on maximizing storage, workflow, and accessibility, featuring optimized layouts, safety measures, and durable materials.</p>
                            <div className="card-actions justify-end">
                     
                            </div>
                        </div>
                        <Link to="/warehouseDesign" className="bg-teal-900 mb-3 w-32 py-3 ml-2 text-white rounded px-4">
                           Show More
                           </Link>
                    </div>
                    {/* card 4 */}
                   
                    {/* card 4 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                            className="w-full h-64"
                                src="https://i.ibb.co.com/FmYLd4j/images7.webp"
                                alt="Smart Technology" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Composite structural design</h2>
                            <p className="text-gray-500  text-[16px]">
                            Composite structural design combines multiple materials, like steel and concrete, for enhanced strength, flexibility, and efficiency in modern construction projects.</p>
                            <div className="card-actions justify-end">
                           
                            </div>
                        </div>
                        <Link to="/compositeDesign" className="bg-teal-900 mb-3 w-32 py-3 ml-2 text-white rounded px-4">
                       Show More
                      </Link>
                    </div>
                </div>
            </div>

            {/*Construction section here */}
                      {/* Architecture Related  Section */}
                      <div>
                <h2 className="text-center text-4xl mt-8 text-teal-700 underline font-bold mb-6">Construction</h2>
                <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {/* card1 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                            className="w-full h-64"
                                src="https://i.ibb.co.com/QpBkWrM/img1.webp"
                                alt="Chemical research" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Building construction </h2>
                            <p className="text-gray-500  text-[16px]">Building construction involves detailed planning, material selection, and skilled execution to create durable, functional structures that meet safety standards and design goals.</p>
                            <div className="card-actions justify-end">
                       
                            </div>
                        </div>
                        <Link to="/buildingConstruction" className="bg-teal-900 mb-3 w-32 py-3 ml-2 text-white rounded px-4">
                       Show More
                      </Link>
                    </div>
                    {/* card2 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                            className="w-full h-64"
                                src="https://i.ibb.co.com/4mvT2tB/img1.jpg"
                                alt="Best Engineering" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Factory</h2>
                            <p className="text-gray-500  text-[16px]">
                            A factory is a large facility designed for manufacturing goods, equipped with machinery and technology for efficient production and workflow management.</p>
                            <div className="card-actions justify-end">
                    
                            </div>
                        </div>
                        <Link to="/factory" className="bg-teal-900 mb-3 w-32 py-3 ml-2 text-white rounded px-4">
                       Show More
                      </Link>
                    </div>
              
                    {/* card 3 */}
                    <div className="card card-compact bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                        <figure>
                            <img
                            className="w-full h-64"
                                src="https://i.ibb.co.com/W2mKtQW/images-3.jpg"
                                alt="Smart Technology" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Warehouse construction</h2>
                            <p className="text-gray-500  text-[16px]">Warehouse construction focuses on creating durable, functional spaces for storage and distribution, featuring efficient layouts, robust materials, and safety compliance.</p>
                            <div className="card-actions justify-end">
                     
                            </div>
                        </div>
                        <Link to="/warehouseConstruction" className="bg-teal-900 mb-3 w-32 py-3 ml-2 text-white rounded px-4">
                       Show More
                      </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurService;
