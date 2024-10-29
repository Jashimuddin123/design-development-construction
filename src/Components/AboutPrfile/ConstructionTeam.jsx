const ConstructionTeam = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Mostafizur Rahman Section */}
            <div className="flex flex-col md:flex-row gap-6 items-center w-full mb-8">
                <div className="md:w-1/3">
                    <img
                        src="https://i.ibb.co/b2GhwBf/mustafizur-Rahman.jpg"
                        alt="Mostafizur Rahman"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-2/3 text-sm md:text-base text-gray-700">
                    <h2 id="mosiur" className="text-2xl md:text-3xl font-bold mb-2">Mostafizur Rahman</h2>
                    <p className="text-lg text-red-600 mb-1">Project Manager</p>
                    <p className="text-gray-500">
                       <span className="font-bold"> Mostafizur Rahman,</span> our Project Director, is a visionary leader in the field of construction and project management. With over a decade of experience, he has successfully overseen numerous projects from conception to completion, ensuring the highest standards of quality and efficiency. His expertise in managing cross-functional teams and coordinating complex schedules has earned him a reputation as a reliable and innovative leader. Mostafizur holds a degree in Civil <span className="font-bold">Engineering from BUET</span>, where he developed a strong foundation in design principles and construction techniques. His commitment to sustainable practices and continuous improvement makes him a valuable asset to our team.
                    </p>
                </div>
            </div>
            <div className="border-b-2 border-gray-300 mb-8"></div>

            {/* Ferdoush Hasan Section */}
            <div className="flex flex-col md:flex-row gap-6 items-center w-full">
                <div className="md:w-1/3">
                    <img
                        src="https://via.placeholder.com/150" // Replace with Ferdoush Hasan's image URL
                        alt="Ferdoush Hasan"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-2/3 text-sm md:text-base text-gray-700">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Ferdoush Hasan</h2>
                    <p className="text-lg text-red-600 mb-1">Site Engineer</p>
                    <p className="text-gray-500">
                        As a Site Engineer, Ferdoush Hasan plays a critical role in the successful execution of our construction projects. He is responsible for overseeing daily operations on-site, ensuring that all activities comply with safety regulations and project specifications. Ferdoush's hands-on experience and technical knowledge allow him to troubleshoot problems as they arise and implement effective solutions swiftly. He graduated from BUET with a degree in Civil Engineering, equipping him with the skills necessary to manage both the technical and logistical aspects of construction. His passion for building strong foundations—both literally and metaphorically—drives him to excel in his role and contribute to our mission of delivering excellence in every project.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConstructionTeam;
