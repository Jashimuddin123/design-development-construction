const Management = () => {
  return (
    <div className="p-4 container mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 items-start w-full lg:items-center">
        <div className="flex flex-col lg:flex-1 lg:items-start lg:ml-28 text-center lg:text-left">
          <img
            src="https://i.ibb.co.com/M2h3xs2/Whats-App-Image-2024-10-29-at-01-24-39-e6086ffc.jpg"
            alt="Ashrafunnahar"
            className="w-36 h-36 sm:w-48 sm:h-48 mt-4 rounded-full mx-auto lg:mx-0"
          />
          <h2 className="text-2xl sm:text-5xl font-bold text-teal-700 mt-2">Ashrafunnahar</h2>
          <p className="text-md sm:text-lg text-red-600 font-semibold mb-3">CEO and Founder</p>
        </div>
        <div className="text-gray-700 lg:flex-2 md:w-2/3 text-justify">
          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
           <span className="font-bold text-teal-600"> Ms Ashrafunnahar</span> belongs to a well-educated family as her father is a retired professor
            of a government college, and her mother is a graduate woman. She has completed her
            Honours and Master's in political science. She founded this company to become a
            successful entrepreneur. To provide technical support on building design, development,
            and construction, she has appointed two experienced BUET graduates as her advisors.
          </p>
        </div>
      </div>

      <div className="border-b-2 border-gray-300 my-6"></div>

      <div className="ml-0 lg:ml-28 my-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-700">Md. Zamil Akter Limon</h1>
        <p className="text-red-600 font-semibold">First Advisor</p>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          <span className="font-bold text-teal-600"> Mr. Zamil </span>completed his B.Sc.
           in <span className=" text-teal-600">Civil Engineering from BUET in 2014</span> and has designed
          more than 10-story buildings with a double basement. He holds an IEB membership
          (M/39469)  and is <span className="text-teal-600">skilled in  ETABS, StaadPro,</span>   and <span className="text-teal-600">SAFE software</span> .
        </p>
      </div>

      <div className="border-b-2 border-gray-300 my-6"></div>

      <div className="ml-0 lg:ml-28 mt-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-700">Abdullah Al Nur Ashek</h1>
        <p className="text-red-600 font-semibold">Second Advisor</p>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          <span className="font-bold text-teal-600">Abdullah Al Nur Ashek,</span> also graduated from <span className=" text-teal-600"> BUET in Civil Engineering in 2017</span>. He brings
          teaching experience and client communication skills alongside his technical expertise.
        </p>
      </div>
    </div>
  );
};

export default Management;
