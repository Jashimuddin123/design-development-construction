const CompanyAbout = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Top banner */}
            <div className="bg-[url('https://i.ibb.co/XLJ4zBg/cover3.jpg')] bg-cover bg-center bg-gray-800 text-white py-6 h-64 md:h-56 px-4 md:px-10">
                <h2 className="text-2xl md:text-3xl text-blue-500 text-center font-bold">Company History</h2>
                <nav className="mt-2 flex justify-center">
                    <ol className="flex space-x-2 text-gray-300">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><span>/</span></li>
                        <li className="text-white">About</li>
                    </ol>
                </nav>
            </div>

            {/* Content section */}
            <div className="container mx-auto p-4 md:p-8 lg:p-16">
                <p className="text-center font-bold text-4xl  my-4"> About Acon</p>
                <p className="text-justify text-sm  leading-relaxed md:leading-loose text-gray-500 md:text-lg">
                    <span className="font-semibold text-xl text-teal-600">Acon Design & Developnet</span> was founded on October 2, 2024, to provide innovative and comprehensive construction services. Our company specializes in delivering a full suite of services, including subsoil investigation, topography survey, and laboratory testing, ensuring foundational accuracy for every project. We pride ourselves on creating robust and aesthetically appealing structures through our architectural 3D modeling and landscaping services, designed to enhance the functional beauty of each space.
                    <br /><br />
                    Our expertise extends to detailed structural and composite structural design, meeting rigorous standards for durability and safety. Additionally, we offer specialized warehouse and factory design, along with complete construction services, designed to meet the unique requirements of industrial and commercial clients. Whether building from the ground up or transforming an existing space, our team is committed to delivering results that exceed expectations, built on a foundation of quality, precision, and sustainability.
                    <br /><br />
                    <span className="font-semibold text-teal-600">Acon Design And Development</span> is dedicated to client satisfaction through quality craftsmanship and industry expertise, making us a trusted partner for construction solutions that bring visions to life.
                </p>
            </div>
        </div>
    );
};

export default CompanyAbout;
