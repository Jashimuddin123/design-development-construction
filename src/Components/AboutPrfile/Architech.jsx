const Architech = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="lg:flex-1 flex justify-center lg:justify-start">
                    <img
                        src="https://i.ibb.co/gMPjLCt/Whats-App-Image-2024-10-29-at-20-53-58-74e0bd35.jpg"
                        alt="Ferdoush Hasan"
                        className="w-36 h-36 md:w-48 md:h-48 rounded-full shadow-lg"
                    />
                </div>
                <div className="text-center lg:text-left md:w-3/4 lg:flex-2 text-gray-700 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight">Ferdoush Hasann</h2>
                    <p className="text-base md:text-lg text-red-500 font-semibold">Architect</p>
                    <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
                    <span className="font-bold">Ferdoush Hasann</span> completed his B.Sc. in Bangladesh University Of Engineering And Technology From <span className="font-bold">BUET</span>. 
                    He Achieved BERGER Award For Excellence in Architecture with Chorcha Sthapatijog in (2023) <br />
                    He Has got Skkiled AutoDesk AutoCDA,Sketchup pro,Rhino+Grasshopper,Enscape, Adobe Photoshop,Illustrator,Windows Office,Architectural Model Marketing ect.
                       
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Architech;
